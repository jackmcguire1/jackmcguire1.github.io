<template>
  <v-container class="py-8">
    <v-btn
      class="mb-4"
      prepend-icon="mdi-arrow-left"
      to="/"
      variant="text"
    >
      Back to Portfolio
    </v-btn>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-img
            class="align-end"
            cover
            height="400"
            :src="twitchExtensionsImg"
          >
            <v-card-title class="text-white bg-gradient text-h3">
              Stat Milestones
            </v-card-title>
          </v-img>

          <v-card-text class="pt-6">
            <h2 class="text-h4 mb-4">Interactive Twitch Extension</h2>

            <p class="text-body-1 mb-6">
              Stat Milestones is a comprehensive Twitch extension that allows streamers to track and display
              their gaming statistics and milestones in real-time. Built with modern technologies and designed
              for scalability and performance.
            </p>

            <v-row class="mb-6">
              <v-col cols="12" md="6">
                <h3 class="text-h5 mb-3">Key Features</h3>
                <v-list density="compact">
                  <v-list-item>
                    <template #prepend>
                      <v-icon size="small">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>Real-time stat tracking</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template #prepend>
                      <v-icon size="small">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>Customizable overlays</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template #prepend>
                      <v-icon size="small">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>Viewer interaction</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template #prepend>
                      <v-icon size="small">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>Achievement system</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>

              <v-col cols="12" md="6">
                <h3 class="text-h5 mb-3">Technologies Used</h3>
                <v-chip-group>
                  <v-chip color="cyan" variant="tonal">Go</v-chip>
                  <v-chip color="green" variant="tonal">Vue.js</v-chip>
                  <v-chip color="deep-purple" variant="tonal">Twitch API</v-chip>
                  <v-chip color="orange" variant="tonal">AWS</v-chip>
                  <v-chip color="green-darken-2" variant="tonal">MongoDB</v-chip>
                  <v-chip color="blue" variant="tonal">Docker</v-chip>
                </v-chip-group>
              </v-col>
            </v-row>

            <v-divider class="my-6" />

            <div class="d-flex gap-3">
              <v-btn
                color="primary"
                href="https://stat-milestones.dev"
                prepend-icon="mdi-web"
                target="_blank"
              >
                Visit Website
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import twitchExtensionsImg from '@/assets/twitch-extensions.png'
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%);
}
</style>
