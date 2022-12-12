<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-avatar right>
          <img src="https://avatars.githubusercontent.com/u/9089342?v=4" />
        </q-avatar>
        <q-toolbar-title> Jack McGuire </q-toolbar-title>

        <q-btn
          right
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="displayNavigation()"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="showNavigation" side="right" bordered>
      <q-list>
        <q-item-label header> Projects </q-item-label>

        <div v-for="link in projectsList" :key="link.title">
          <q-item clickable tag="a" target="_blank" :href="link.link">
            <q-item-section v-if="link.icon" avatar>
              <q-icon :name="link.icon" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ link.title }}</q-item-label>
              <q-item-label caption>{{ link.caption }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-list>

      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <div v-for="link in linksList" :key="link.title">
          <q-item clickable tag="a" target="_blank" :href="link.link">
            <q-item-section v-if="link.icon" avatar>
              <q-icon :name="link.icon" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ link.title }}</q-item-label>
              <q-item-label caption>{{ link.caption }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},
  data() {
    return {
      linksList: [
        {
          title: 'Github',
          caption: 'Github Profile',
          icon: 'code',
          link: 'https://github.com/jackmcguire1',
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev',
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter/crazyjack12',
        },
      ],
      projectsList: [
        {
          title: 'Stat-Milestones',
          caption: 'Twitch Extension',
          icon: 'code',
          link: '/stat-milestones',
        },
        {
          title: 'REDIS hackathon 2022',
          caption: 'dev.to REDIS hackathon 2022',
          icon: 'code',
          link: 'https://dev.to/jackmcguire1/wheel-of-fortune-3521',
        },
        {
          title: 'Alexa Skill',
          caption: 'How-Old-Is',
          icon: 'code',
          link: 'https://github.com/jackmcguire1/how-old-is',
        },
      ],
      showNavigation: false,
    };
  },
  methods: {
    displayNavigation: function () {
      this.showNavigation = !this.showNavigation;
    },
  },
});
</script>
