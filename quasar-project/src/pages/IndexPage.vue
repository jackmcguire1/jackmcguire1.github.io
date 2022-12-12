<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section>
          <q-item-label>Jack McGuire</q-item-label>
          <q-item-label caption> Staff Engineer @GreenManGaming </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <div class="row justify-center items-start content-center">
          <div class="col-auto">
            <li>Staff Engineer</li>
            <li>Twitch Extensions Developer</li>
            <li>Serverless Hero</li>
          </div>
        </div>

        <q-separator vertical />

        <q-card-section>
          <q-img
            height="200px"
            width="200px"
            src="https://avatars.githubusercontent.com/u/9089342?v=4"
          />
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: {},
});
</script>
