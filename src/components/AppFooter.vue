<template>
  <v-footer class="py-12">
    <v-container>
      <v-row justify="center">
        <!-- Contact Info -->
        <v-col cols="12" md="4">
          <h4 class="text-h6 mb-4 text-primary">Get In Touch</h4>
          <div class="d-flex flex-column gap-2">
            <div class="d-flex align-center gap-2">
              <v-icon size="small">mdi-email</v-icon>
              <span class="text-body-2">jackmcguire35@gmail.com</span>
            </div>
            <div class="d-flex align-center gap-2">
              <v-icon size="small">mdi-phone</v-icon>
              <span class="text-body-2">+447954179531</span>
            </div>
            <div class="d-flex align-center gap-2">
              <v-icon size="small">mdi-map-marker</v-icon>
              <span class="text-body-2">United Kingdom</span>
            </div>
          </div>
        </v-col>

        <!-- Social & About -->
        <v-col cols="12" md="4">
          <h4 class="text-h6 mb-4 text-primary">Connect</h4>
          <div class="d-flex gap-2 mb-4">
            <v-btn
              v-for="item in socialLinks"
              :key="item.title"
              :color="item.color"
              :href="item.href"
              :icon="item.icon"
              size="small"
              target="_blank"
              :title="item.title"
              variant="tonal"
            />
          </div>
          <p class="text-body-2 text-grey">
            Staff Engineer at Green Man Gaming. Building scalable solutions and contributing to open source.
          </p>
        </v-col>
      </v-row>

      <v-divider class="my-6" />

      <v-row>
        <v-col class="text-center" cols="12">
          <p class="text-body-2 mb-2">
            &copy; {{ currentYear }} <strong>Jack McGuire</strong>. All rights reserved.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      title: 'GitHub',
      icon: 'mdi-github',
      href: 'https://github.com/jackmcguire1',
      color: 'grey-darken-2',
    },
    {
      title: 'LinkedIn',
      icon: 'mdi-linkedin',
      href: 'https://www.linkedin.com/in/jack-mcguire/',
      color: 'blue',
    },
    {
      title: 'Email',
      icon: 'mdi-email',
      href: 'mailto:jackmcguire35@gmail.com',
      color: 'red',
    },
  ]
</script>

<style scoped lang="scss">
.footer-link {
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: rgb(var(--v-theme-primary));
    transform: translateX(4px);
  }
}
</style>
