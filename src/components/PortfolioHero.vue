<template>
  <v-container class="hero-section" fluid>
    <v-row align="center" justify="center" class="hero-content">
      <!-- Avatar column -->
      <v-col class="text-center" cols="12" md="4" lg="3">
        <div class="avatar-ring mx-auto">
          <v-avatar size="240">
            <v-img cover src="@/assets/jack.jpeg" />
          </v-avatar>
        </div>

        <h1 class="text-h3 font-weight-bold mt-6 mb-1 d-md-none">
          Jack McGuire
        </h1>
        <p class="text-subtitle-1 text-primary font-weight-medium mb-4 d-md-none">
          Staff Engineer @ Green Man Gaming
        </p>

        <div class="d-flex justify-center flex-wrap gap-2 mt-4">
          <v-btn
            v-for="social in socials"
            :key="social.name"
            :color="social.color"
            :href="social.href"
            :prepend-icon="social.icon"
            rounded="pill"
            target="_blank"
            variant="tonal"
          >
            {{ social.name }}
          </v-btn>
        </div>
      </v-col>

      <!-- Info column -->
      <v-col cols="12" md="8" lg="7">
        <h1 class="text-h3 text-md-h2 font-weight-bold mb-1 d-none d-md-block">
          Jack McGuire
        </h1>
        <p class="text-h6 text-md-h5 text-primary font-weight-medium mb-8 d-none d-md-block">
          Staff Engineer @ Green Man Gaming
        </p>

        <v-row class="info-cards" :no-gutters="false">
          <!-- About card -->
          <v-col cols="12" sm="6">
            <v-card color="surface-variant" rounded="lg" variant="flat">
              <v-card-title class="text-subtitle-1 font-weight-bold pb-0">
                <v-icon class="mr-2" color="primary" size="small">mdi-account</v-icon>
                About
              </v-card-title>
              <v-card-text class="pt-3">
                <div
                  v-for="item in aboutItems"
                  :key="item.label"
                  class="d-flex align-center mb-2"
                >
                  <v-icon class="mr-3 flex-shrink-0" color="primary" size="18">{{ item.icon }}</v-icon>
                  <span class="text-body-2">{{ item.label }}</span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Contact card -->
          <v-col cols="12" sm="6">
            <v-card color="surface-variant" rounded="lg" variant="flat">
              <v-card-title class="text-subtitle-1 font-weight-bold pb-0">
                <v-icon class="mr-2" color="primary" size="small">mdi-at</v-icon>
                Contact
              </v-card-title>
              <v-card-text class="pt-3">
                <a
                  v-for="item in contactItems"
                  :key="item.label"
                  class="contact-link d-flex align-center mb-2 text-decoration-none"
                  :href="item.href"
                  :target="item.href.startsWith('http') ? '_blank' : undefined"
                >
                  <v-icon class="mr-3 flex-shrink-0" color="primary" size="18">{{ item.icon }}</v-icon>
                  <span class="text-body-2">{{ item.label }}</span>
                </a>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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
    href: 'https://www.linkedin.com/in/jackmcguire1994/',
    color: 'blue',
  },
]

const aboutItems = [
  { icon: 'mdi-briefcase', label: 'Staff Engineer' },
  { icon: 'mdi-gamepad-variant', label: 'Twitch Extensions Developer' },
  { icon: 'mdi-github', label: 'Open Source Contributor' },
  { icon: 'mdi-map-marker', label: 'United Kingdom' },
]

const contactItems = [
  { icon: 'mdi-email', label: 'jackmcguire35@gmail.com', href: 'mailto:jackmcguire35@gmail.com' },
  { icon: 'mdi-phone', label: '+447954179531', href: 'tel:+447954179531' },
]
</script>

<style scoped lang="scss">
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.hero-content {
  max-width: 1100px;
  margin: 0 auto;
}

.avatar-ring {
  display: inline-block;
  padding: 4px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4FC3F7 0%, #B39DDB 50%, #FF6B6B 100%);
  box-shadow:
    0 0 40px rgba(79, 195, 247, 0.15),
    0 0 80px rgba(179, 157, 219, 0.1);
  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow:
      0 0 50px rgba(79, 195, 247, 0.25),
      0 0 100px rgba(179, 157, 219, 0.15);
  }
}

.info-cards .v-card {
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
}

.contact-link {
  color: rgba(255, 255, 255, 0.85);
  transition: color 0.2s ease;

  &:hover {
    color: rgb(var(--v-theme-primary));
  }
}
</style>
