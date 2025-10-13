<template>
  <v-container class="py-16">
    <v-row>
      <v-col class="text-center mb-8" cols="12">
        <h2 class="text-h3 font-weight-bold mb-2"># GITHUB ACHIEVEMENTS</h2>
        <p class="text-h6 text-grey">My GitHub contribution trophies</p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" lg="10">
        <v-sheet
          class="pa-6"
          color="surface-variant"
          elevation="4"
          rounded="lg"
        >
          <div class="text-center">
            <v-img
              alt="GitHub Trophies"
              class="mx-auto"
              max-width="100%"
              src="https://github-profile-trophy.vercel.app/?username=jackmcguire1&theme=radical&no-frame=false&margin-w=4"
            >
              <template #placeholder>
                <v-row
                  align="center"
                  class="fill-height ma-0"
                  justify="center"
                >
                  <v-progress-circular
                    color="primary"
                    indeterminate
                  />
                </v-row>
              </template>
            </v-img>
          </div>

          <v-divider class="my-6" />

          <v-row class="text-center">
            <v-col cols="12" sm="4">
              <div class="text-h4 font-weight-bold text-primary">
                <v-icon class="mr-2" size="small">mdi-trophy</v-icon>
                Achievements
              </div>
              <p class="text-body-2 text-grey mt-1">
                GitHub profile trophies earned
              </p>
            </v-col>
            <v-col cols="12" sm="4">
              <div class="text-h4 font-weight-bold text-success">
                <v-icon class="mr-2" size="small">mdi-source-branch</v-icon>
                Contributions
              </div>
              <p class="text-body-2 text-grey mt-1">
                Active open source contributor
              </p>
            </v-col>
            <v-col cols="12" sm="4">
              <div class="text-h4 font-weight-bold text-warning">
                <v-icon class="mr-2" size="small">mdi-star</v-icon>
                Recognition
              </div>
              <p class="text-body-2 text-grey mt-1">
                Community engagement & impact
              </p>
            </v-col>
          </v-row>

          <div class="text-center mt-6">
            <v-btn
              color="primary"
              href="https://github.com/jackmcguire1"
              prepend-icon="mdi-github"
              size="large"
              target="_blank"
              variant="tonal"
            >
              View GitHub Profile
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// Component logic if needed
</script>

<style scoped>
/* Additional styles if needed */
</style>
