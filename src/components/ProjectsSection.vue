<template>
  <v-container class="py-16">
    <v-row>
      <v-col class="text-center mb-8" cols="12">
        <h2 class="text-h3 font-weight-bold mb-2"># PROJECTS</h2>
        <p class="text-h6 text-grey">My latest work and side projects</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="project in projects"
        :key="project.title"
        cols="12"
        lg="4"
        md="6"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            class="project-card h-100"
            color="surface-variant"
            :elevation="isHovering ? 8 : 4"
            @click="openURL(project.link)"
          >
            <v-img
              class="align-end"
              cover
              height="200"
              :src="project.image"
            >
              <template #placeholder>
                <v-row
                  align="center"
                  class="fill-height ma-0"
                  justify="center"
                >
                  <v-progress-circular
                    color="grey-lighten-5"
                    indeterminate
                  />
                </v-row>
              </template>

              <v-card-title class="text-white bg-gradient">
                {{ project.type }}
              </v-card-title>
            </v-img>

            <v-card-title class="text-h6">
              {{ project.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ project.description }}
            </v-card-subtitle>

            <v-card-text>
              <v-chip-group>
                <v-chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  :color="getChipColor(tech)"
                  size="small"
                  variant="tonal"
                >
                  {{ tech }}
                </v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn
                append-icon="mdi-arrow-right"
                color="primary"
                :href="project.link"
                target="_blank"
                variant="text"
                @click.stop
              >
                View Project
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

  interface Project {
    title: string
    type: string
    description: string
    image: string
    link: string
    technologies: string[]
  }

  const projects: Project[] = [
    {
      title: 'Stat-Milestones',
      type: 'Twitch Extension',
      description: 'Interactive Twitch extension for tracking streamer milestones and statistics',
      image: '/src/assets/twitch-extensions.png',
      link: '/stat-milestones',
      technologies: ['Go', 'Vue', 'Twitch', 'AWS'],
    },
    {
      title: 'Wheel Of Fortune',
      type: 'REDIS Hackathon',
      description: 'Real-time multiplayer wheel of fortune game built for Redis hackathon',
      image: '/src/assets/wheel-of-fortune.jpeg',
      link: 'https://dev.to/jackmcguire1/wheel-of-fortune-3521',
      technologies: ['Go', 'Redis', 'Vue', 'Envoy'],
    },
    {
      title: 'ChatGPT Alexa Skill',
      type: 'Alexa Skill',
      description: 'Voice-powered AI assistant integrating ChatGPT with Amazon Alexa',
      image: '/src/assets/alexa.png',
      link: 'https://github.com/jackmcguire1/alexa-chatgpt',
      technologies: ['Go', 'AWS', 'OpenAI ChatGPT 3.5+', 'Google Gemini'],
    },
    {
      title: 'User Microservice',
      type: 'Microservice',
      description: 'Scalable user management microservice with authentication and authorization',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTq7NhS34vHRoyhJB5SwOcs5OA6Y3xlaj6OA&usqp=CAU',
      link: 'https://github.com/jackmcguire1/UserService',
      technologies: ['Go', 'Docker', 'MongoDB'],
    },
    {
      title: 'Riot Global Rankings',
      type: 'Hackathon',
      description: 'Global leaderboard system for League of Legends players',
      image: 'https://d2dmyh35ffsxbl.cloudfront.net/assets/defaults/thumbnail-placeholder-8c916ef4da99a222ce6ece077c71c7e282f071f830747b2abb5718018cbfa699.gif',
      link: 'https://devpost.com/software/riot-rankings',
      technologies: ['Go', 'AWS', 'MongoDB'],
    },
    {
      title: 'Stat-Milestones Landing',
      type: 'Landing Page',
      description: 'Modern landing page for Stat-Milestones Twitch extension',
      image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/000/771/851/datas/medium.png',
      link: 'https://stat-milestones.dev',
      technologies: ['Vuetify', 'GitHub Pages', 'AWS / MongoDB', 'Cloudflare'],
    },
    {
      title: 'Discord Embed Builder',
      type: 'Developer Tool',
      description: 'Visual tool for creating and previewing Discord embed messages',
      image: '/src/assets/discord.png',
      link: 'https://jackmcguire1.github.io/Discord-Publisher/',
      technologies: ['React', 'Discord API'],
    },
  ]

  const techColors: Record<string, string> = {
    'Go': 'cyan',
    'Vue': 'green',
    'React': 'blue',
    'AWS': 'orange',
    'MongoDB': 'green-darken-2',
    'Docker': 'blue-darken-2',
    'Redis': 'red',
    'Twitch': 'deep-purple',
    'Discord API': 'deep-purple-darken-2',
    'OpenAI ChatGPT 3.5+': 'teal',
    'Google Gemini': 'indigo',
    'Vuetify': 'blue-lighten-1',
    'GitHub Pages': 'grey-darken-3',
    'Cloudflare': 'orange-darken-2',
    'Envoy': 'purple',
  }

  function getChipColor (tech: string): string {
    return techColors[tech] || 'grey'
  }

  function openURL (url: string) {
    if (url.startsWith('/')) {
      window.location.href = url
    } else {
      window.open(url, '_blank')
    }
  }
</script>

<style scoped>
.project-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-4px);
}

.bg-gradient {
  background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%);
}
</style>
