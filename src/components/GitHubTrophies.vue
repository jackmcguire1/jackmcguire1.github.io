<template>
  <v-container class="py-16">
    <v-row>
      <v-col class="text-center mb-8" cols="12">
        <h2 class="text-h3 font-weight-bold mb-2"># GITHUB</h2>
        <p class="text-h6 text-grey">Open source contributions & achievements</p>
      </v-col>
    </v-row>

    <!-- Stats row -->
    <v-row justify="center" class="mb-8">
      <v-col
        v-for="stat in stats"
        :key="stat.label"
        cols="6"
        sm="3"
      >
        <v-card color="surface-variant" variant="flat" rounded="lg" class="text-center pa-4 stat-card">
          <v-icon :color="stat.color" size="32" class="mb-2">{{ stat.icon }}</v-icon>
          <div class="text-h5 font-weight-bold" :class="`text-${stat.color}`">{{ stat.value }}</div>
          <div class="text-caption text-grey-lighten-1">{{ stat.label }}</div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Trophies -->
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <v-card color="surface-variant" variant="flat" rounded="lg" class="pa-6">
          <div class="d-flex align-center mb-4">
            <v-icon color="amber" class="mr-2">mdi-trophy</v-icon>
            <span class="text-h6 font-weight-bold">Trophies</span>
          </div>

          <div class="text-center">
            <img
              alt="GitHub Trophies"
              class="github-img"
              src="/trophy.svg"
            >
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Streak -->
    <v-row justify="center" class="mt-6">
      <v-col cols="12" md="8" lg="6">
        <v-card color="surface-variant" variant="flat" rounded="lg" class="pa-6">
          <div class="d-flex align-center mb-4">
            <v-icon color="success" class="mr-2">mdi-fire</v-icon>
            <span class="text-h6 font-weight-bold">Streak</span>
          </div>
          <div class="text-center">
            <img
              alt="GitHub Streak"
              class="github-img"
              src="https://streak-stats.demolab.com?user=jackmcguire1&theme=radical&hide_border=true&background=00000000"
            >
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- CTA -->
    <v-row justify="center" class="mt-8">
      <v-col class="text-center" cols="12">
        <v-btn
          color="primary"
          href="https://github.com/jackmcguire1"
          prepend-icon="mdi-github"
          rounded="pill"
          size="large"
          target="_blank"
          variant="tonal"
        >
          View GitHub Profile
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const stats = [
  { icon: 'mdi-source-repository-multiple', value: '50+', label: 'Repositories', color: 'primary' },
  { icon: 'mdi-source-branch', value: '1K+', label: 'Contributions', color: 'success' },
  { icon: 'mdi-star-outline', value: '100+', label: 'Stars Earned', color: 'amber' },
  { icon: 'mdi-account-group', value: '10+', label: 'Years Active', color: 'secondary' },
]
</script>

<style scoped lang="scss">
.stat-card {
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.github-img {
  max-width: 100%;
  height: auto;
  min-height: 120px;
}
</style>
