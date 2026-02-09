<template>
  <div class="portfolio-wrapper">
    <!-- Hero Section -->
    <v-sheet class="bg-gradient-dark" elevation="0">
      <PortfolioHero />
    </v-sheet>

    <!-- Projects Section -->
    <v-sheet id="projects" class="bg-surface-dark scroll-mt-16" elevation="2">
      <ProjectsSection />
    </v-sheet>

    <!-- Skills Section -->
    <v-sheet id="skills" class="bg-surface-elevated scroll-mt-16" elevation="4">
      <SkillsSection />
    </v-sheet>

    <!-- Career Timeline -->
    <v-sheet id="career" class="bg-surface-dark scroll-mt-16" elevation="2">
      <CareerTimeline />
    </v-sheet>

    <!-- GitHub Trophies -->
    <v-sheet id="github" class="bg-surface-elevated scroll-mt-16" elevation="4">
      <GitHubTrophies />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
import CareerTimeline from '@/components/CareerTimeline.vue'
import GitHubTrophies from '@/components/GitHubTrophies.vue'
import PortfolioHero from '@/components/PortfolioHero.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
</script>

<style scoped>
.scroll-mt-16 {
  scroll-margin-top: 64px;
}
</style>
