<template>
  <v-container class="hero-section py-16">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12" md="4">
        <v-avatar class="mb-6 elevation-10" size="280">
          <v-img cover src="@/assets/jack.jpeg" />
        </v-avatar>
      </v-col>

      <v-col cols="12" md="8">
        <v-card class="transparent" elevation="0">
          <v-card-text>
            <h1 class="text-h2 font-weight-bold mb-2">
              Jack McGuire
            </h1>
            <h2 class="text-h4 text-primary mb-6">
              Staff Engineer @ Green Man Gaming
            </h2>

            <v-row class="mb-4">
              <v-col cols="12" md="6">
                <div class="text-h6 mb-3">About</div>
                <v-list class="transparent" density="compact">
                  <v-list-item>
                    <template #prepend>
                      <v-icon size="small">mdi-briefcase</v-icon>
                    </template>
                    <v-list-item-title>Staff Engineer</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template #prepend>
                      <v-icon size="small">mdi-gamepad-variant</v-icon>
                    </template>
                    <v-list-item-title>Twitch Extensions Developer</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template #prepend>
                      <v-icon size="small">mdi-github</v-icon>
                    </template>
                    <v-list-item-title>Open Source Contributor</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>

              <v-col cols="12" md="6">
                <div class="text-h6 mb-3">Contact</div>
                <v-list class="transparent" density="compact">
                  <v-list-item>
                    <template #prepend>
                      <v-icon size="small">mdi-email</v-icon>
                    </template>
                    <v-list-item-title>jackmcguire35@gmail.com</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template #prepend>
                      <v-icon size="small">mdi-phone</v-icon>
                    </template>
                    <v-list-item-title>+447954179531</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template #prepend>
                      <v-icon size="small">mdi-discord</v-icon>
                    </template>
                    <v-list-item-title>crazyjack12#2295</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>

            <div class="d-flex flex-wrap gap-2">
              <v-btn
                v-for="social in socials"
                :key="social.name"
                :color="social.color"
                :href="social.href"
                :icon="social.icon"
                size="large"
                target="_blank"
                variant="tonal"
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  const socials = [
    {
      name: 'GitHub',
      icon: 'mdi-github',
      href: 'https://github.com/jackmcguire1',
      color: 'grey-darken-2',
    },
    {
      name: 'LinkedIn',
      icon: 'mdi-linkedin',
      href: 'https://www.linkedin.com/in/jack-mcguire/',
      color: 'blue',
    },
  ]
</script>

<style scoped>
.hero-section {
  min-height: 60vh;
}
</style>
