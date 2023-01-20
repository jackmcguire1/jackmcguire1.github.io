<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-black text-white">
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
        <q-item-label header> Pages </q-item-label>

        <div v-for="link in pagesList" :key="link.title">
          <q-item clickable tag="a" :href="link.link">
            <q-item-section>
              <q-item-label>{{ link.title }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-list>

      <q-list>
        <q-item-label header> Projects </q-item-label>

        <div v-for="link in projectsList" :key="link.title">
          <q-item clickable tag="a" :target="link.target" :href="link.link">
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
      <div v-if="displayGaBanner">
        <q-banner
          v-mode="displayGaBanner"
          inline-actions
          rounded
          class="bg-orange text-white"
        >
          This site uses cookies from Google to deliver its services and to
          analyze traffic. Information about your use of this site is shared
          with Google. By using this site, you agree to its use of cookies.

          <template v-slot:action>
            <q-btn
              flat
              label="Dismiss"
              @Click="
                displayGaBanner = !displayGaBanner;
                dismissGA();
              "
            />
          </template>
        </q-banner>
      </div>
      <router-view />
    </q-page-container>

    <q-footer elevated reveal class="bg-grey-8 text-white">
      <q-toolbar class="bg-white text-black">
        Jack McGuire - 2022
        <q-space />
        <q-btn
          right
          flat
          dense
          round
          @click="openURL('https://github.com/jackmcguire1')"
        >
          <q-avatar>
            <q-img src="~assets/github.png" />
          </q-avatar>
        </q-btn>
        <q-separator dark vertical />
        <q-separator dark vertical />
        <q-btn right flat dense round @click="openURL('https://twitter.com/crazyjack12')">
          <q-avatar>
            <q-img src="~assets/twitter.png" />
          </q-avatar>
        </q-btn>
        <q-separator dark vertical />
        <q-separator dark vertical />
        <q-btn right flat dense round @click="openURL('https://www.linkedin.com/in/jackmcguire1994/')">
          <q-avatar>
            <q-img src="~assets/linkedin.png" />
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { event } from 'vue-gtag';
import { openURL } from 'quasar';
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
          title: 'Twitter',
          caption: '@crazyjack12',
          icon: 'rss_feed',
          link: 'https://twitter.com/crazyjack12',
        },
        {
          title: 'LinkedIN',
          caption: '@crazyjack12',
          icon: 'rss_feed',
          link: 'https://www.linkedin.com/in/jackmcguire1994/',
        },
      ],
      projectsList: [
        {
          title: 'Twitch Extension',
          caption: 'Stat-Milestones',
          icon: 'code',
          link: '/stat-milestones',
          target: '',
        },
        {
          title: 'REDIS hackathon 2022',
          caption: 'dev.to REDIS hackathon 2022',
          icon: 'code',
          link: 'https://dev.to/jackmcguire1/wheel-of-fortune-3521',
          target: '_blank',
        },
        {
          title: 'Alexa Skill',
          caption: 'How-Old-Is',
          icon: 'code',
          link: 'https://github.com/jackmcguire1/how-old-is',
          target: '_blank',
        },
      ],
      pagesList: [
        {
          title: 'Home',
          caption: 'Home',
          link: '/',
        },
      ],
      showNavigation: false,
      displayGaBanner: true,
    };
  },
  methods: {
    displayNavigation: function () {
      this.showNavigation = !this.showNavigation;
      event('click', {
        event_category: 'navigation',
        event_label: 'navigation-btn',
        value: 'navigation-btn',
      });
    },
    dismissGA: function () {
      event('click', {
        event_category: 'dismiss',
        event_label: 'ga-dismiss-btn',
        value: 'ga-dismiss-btn',
      });
    },
    openURL: openURL,
  },
});
</script>
