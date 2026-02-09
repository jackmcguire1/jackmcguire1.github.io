<template>
  <v-container class="py-16">
    <v-row>
      <v-col class="text-center mb-8" cols="12">
        <h2 class="text-h3 font-weight-bold mb-2"># CAREER</h2>
        <p class="text-h6 text-grey">My professional journey</p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" lg="8" md="10">
        <v-timeline align="start">
          <v-timeline-item
            v-for="(item, i) in timelineItems"
            :key="i"
            :dot-color="item.color"
            fill-dot
            :icon="item.icon"
            :size="item.dotSize"
          >
            <template #opposite>
              <div class="text-body-2 font-weight-medium" :class="`text-${item.color}`">
                {{ item.date }}
              </div>
            </template>

            <v-card
              class="timeline-card"
              :class="{ 'timeline-card--current': i === 0 }"
              color="surface-variant"
              rounded="lg"
              variant="flat"
            >
              <div v-if="i === 0" class="current-badge">
                <v-chip color="green" size="x-small" variant="flat">Current</v-chip>
              </div>

              <v-card-item>
                <v-card-title class="text-subtitle-1 font-weight-bold">
                  {{ item.title }}
                </v-card-title>
                <v-card-subtitle class="mt-1">
                  <v-icon size="12" class="mr-1">mdi-domain</v-icon>
                  {{ item.company }}
                  <span class="d-inline d-md-none text-caption ml-2" :class="`text-${item.color}`">
                    {{ item.date }}
                  </span>
                </v-card-subtitle>
              </v-card-item>

              <v-card-text v-if="item.description || item.tags" class="pt-0">
                <p v-if="item.description" class="text-body-2 mb-2">{{ item.description }}</p>
                <div v-if="item.tags" class="d-flex flex-wrap gap-1">
                  <v-chip
                    v-for="tag in item.tags"
                    :key="tag"
                    :color="item.color"
                    size="x-small"
                    variant="tonal"
                  >
                    {{ tag }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
interface TimelineItem {
  title: string
  company: string
  date: string
  color: string
  icon: string
  description?: string
  tags?: string[]
  dotSize: 'x-small' | 'small' | 'default' | 'large'
}

const timelineItems: TimelineItem[] = [
  {
    title: 'Staff Engineer',
    company: 'Green Man Gaming',
    date: 'Feb 2022 - Present',
    color: 'green',
    icon: 'mdi-star',
    description: 'Leading technical initiatives and architecture decisions across the platform.',
    tags: ['Go', 'AWS', 'Kubernetes', 'Architecture'],
    dotSize: 'large',
  },
  {
    title: 'Lead Engineer',
    company: 'Green Man Gaming',
    date: 'Sep 2019 - Feb 2022',
    color: 'green',
    icon: 'mdi-account-group',
    description: 'Led engineering teams and drove technical direction for key products.',
    tags: ['Go', 'Microservices', 'Team Leadership'],
    dotSize: 'default',
  },
  {
    title: 'Junior Software Engineer',
    company: 'Green Man Gaming',
    date: 'Oct 2017 - Sep 2019',
    color: 'green',
    icon: 'mdi-code-tags',
    tags: ['Go', 'Vue.js', 'AWS'],
    dotSize: 'small',
  },
  {
    title: 'Junior Software Engineer',
    company: 'Grabyo',
    date: 'Jun 2017 - Oct 2017',
    color: 'red',
    icon: 'mdi-video',
    tags: ['Video Streaming', 'Cloud'],
    dotSize: 'small',
  },
  {
    title: 'Junior Software Engineer',
    company: 'Brandworkz',
    date: 'Oct 2016 - Jun 2017',
    color: 'purple',
    icon: 'mdi-palette',
    dotSize: 'small',
  },
  {
    title: 'Contract Software Engineer',
    company: 'EssDocs',
    date: 'Aug 2016 - Oct 2016',
    color: 'blue',
    icon: 'mdi-file-document',
    dotSize: 'small',
  },
  {
    title: 'BSc Computer Science (Hons)',
    company: 'University Of Derby',
    date: 'May 2016',
    color: 'orange',
    icon: 'mdi-school',
    description: 'Bachelor of Science with Honours in Computer Science.',
    dotSize: 'default',
  },
  {
    title: 'Intern Software Engineer',
    company: 'EssDocs',
    date: 'Aug 2014 - May 2015',
    color: 'blue',
    icon: 'mdi-briefcase',
    dotSize: 'small',
  },
  {
    title: 'Started University',
    company: 'University Of Derby',
    date: 'Sep 2012',
    color: 'orange',
    icon: 'mdi-book-open',
    dotSize: 'small',
  },
  {
    title: 'BTEC Extended Diploma L3',
    company: 'Bromley College',
    date: 'Sep 2010 - Jun 2012',
    color: 'pink',
    icon: 'mdi-certificate',
    description: 'Software Engineering.',
    dotSize: 'small',
  },
]
</script>

<style scoped lang="scss">
.timeline-card {
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: transform 0.25s ease, border-color 0.25s ease;
  position: relative;

  &:hover {
    transform: translateX(4px);
    border-color: rgba(255, 255, 255, 0.12);
  }
}

.timeline-card--current {
  border-color: rgba(76, 175, 80, 0.3);

  &:hover {
    border-color: rgba(76, 175, 80, 0.5);
  }
}

.current-badge {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
