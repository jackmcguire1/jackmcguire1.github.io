<template>
  <v-container class="py-16">
    <v-row>
      <v-col class="text-center mb-8" cols="12">
        <h2 class="text-h3 font-weight-bold mb-2"># SKILLS</h2>
        <p class="text-h6 text-grey">Technologies I work with</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="category in skillCategories"
        :key="category.name"
        cols="12"
        lg="3"
        md="6"
      >
        <v-card class="h-100" color="surface-variant" elevation="4">
          <v-card-title>
            <v-icon class="mr-2" :color="category.color" :icon="category.icon" />
            {{ category.name }}
          </v-card-title>

          <v-card-text>
            <v-chip-group column>
              <v-chip
                v-for="skill in category.skills"
                :key="skill"
                :color="category.color"
                size="small"
                variant="tonal"
              >
                {{ skill }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="12">
        <v-card color="surface-variant" elevation="4">
          <v-card-title class="text-center">
            <v-icon class="mr-2" icon="mdi-chart-bubble" />
            Technology Cloud
          </v-card-title>
          <v-card-text>
            <div class="d-flex flex-wrap justify-center gap-3 pa-4">
              <v-chip
                v-for="skill in allSkills"
                :key="skill.name"
                :color="skill.color"
                label
                :size="skill.size"
                variant="tonal"
              >
                {{ skill.name }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  interface SkillCategory {
    name: string
    icon: string
    color: string
    skills: string[]
  }

  interface Skill {
    name: string
    color: string
    size: 'x-small' | 'small' | 'default' | 'large' | 'x-large'
  }

  const skillCategories: SkillCategory[] = [
    {
      name: 'Cloud & DevOps',
      icon: 'mdi-cloud',
      color: 'blue',
      skills: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Serverless', 'Cloudflare', 'DNS'],
    },
    {
      name: 'Backend',
      icon: 'mdi-server',
      color: 'green',
      skills: ['Go', 'C#', 'Java', 'Python', 'Node.js', 'GraphQL', 'REST', '.NET Core'],
    },
    {
      name: 'Frontend',
      icon: 'mdi-monitor-dashboard',
      color: 'purple',
      skills: ['Vue.js', 'React', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Webpack'],
    },
    {
      name: 'Concepts',
      icon: 'mdi-lightbulb',
      color: 'orange',
      skills: ['Microservices', 'SaaS', 'Cloud Native', 'Web3', 'E-commerce', 'Data Warehouse'],
    },
  ]

  function getRandomSize (): 'x-small' | 'small' | 'default' | 'large' | 'x-large' {
    const sizes: ('x-small' | 'small' | 'default' | 'large' | 'x-large')[] = ['small', 'default', 'large', 'x-large']
    return sizes[Math.floor(Math.random() * sizes.length)] as 'x-small' | 'small' | 'default' | 'large' | 'x-large'
  }

  function getRandomColor (): string {
    const colors = [
      'deep-purple', 'indigo', 'blue', 'cyan', 'teal',
      'green', 'lime', 'amber', 'orange', 'deep-orange',
      'pink', 'purple',
    ]
    return colors[Math.floor(Math.random() * colors.length)] as string
  }

  const allSkills: Skill[] = [
    'AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Serverless',
    'Cloud Native', 'Cloudflare', 'DNS', 'Microservices', 'SaaS',
    'JavaScript', 'HTML', 'CSS', 'React', 'Java', 'Angular',
    'Vue.js', 'Node.js', 'GraphQL', 'GO', 'C#', 'Scala',
    'Python', 'REST', 'Webpack', 'Spring Boot', 'Spring MVC',
    'TypeScript', '.NET Core', 'Web3', 'Data warehouse', 'E-commerce',
  ].map(name => ({
    name,
    color: getRandomColor(),
    size: getRandomSize(),
  }))
</script>

<style scoped>
.v-chip {
  transition: all 0.3s ease;
}

.v-chip:hover {
  transform: scale(1.1);
}
</style>
