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
            :icon="item.icon"
            :size="item.dotSize"
          >
            <template #opposite>
              <div class="text-body-2 text-grey">
                {{ item.date }}
              </div>
            </template>

            <v-card class="timeline-card" color="surface-variant" elevation="4">
              <v-card-title class="text-h6">
                {{ item.title }}
              </v-card-title>
              <v-card-subtitle>
                {{ item.company }}
              </v-card-subtitle>
              <v-card-text v-if="item.description">
                {{ item.description }}
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
  dotSize: 'x-small' | 'small' | 'default' | 'large'
}

const timelineItems: TimelineItem[] = [
  {
    title: 'Staff Engineer',
    company: 'Green Man Gaming',
    date: 'February 2022 - Present',
    color: 'green',
    icon: 'mdi-star',
    description: 'Leading technical initiatives and architecture decisions',
    dotSize: 'large',
  },
  {
    title: 'Lead Engineer',
    company: 'Green Man Gaming',
    date: 'September 2019 - February 2022',
    color: 'green',
    icon: 'mdi-account-group',
    dotSize: 'default',
  },
  {
    title: 'Junior Software Engineer',
    company: 'Green Man Gaming',
    date: 'October 2017 - September 2019',
    color: 'green',
    icon: 'mdi-code-tags',
    dotSize: 'small',
  },
  {
    title: 'Junior Software Engineer',
    company: 'Grabyo',
    date: 'June 2017 - October 2017',
    color: 'red',
    icon: 'mdi-video',
    dotSize: 'small',
  },
  {
    title: 'Junior Software Engineer',
    company: 'Brandworkz',
    date: 'October 2016 - June 2017',
    color: 'purple',
    icon: 'mdi-palette',
    dotSize: 'small',
  },
  {
    title: 'Contract Software Engineer',
    company: 'EssDocs',
    date: 'August 2016 - October 2016',
    color: 'blue',
    icon: 'mdi-file-document',
    dotSize: 'small',
  },
  {
    title: 'Graduated - Computer Science BSc Hons',
    company: 'University Of Derby',
    date: 'May 2016',
    color: 'orange',
    icon: 'mdi-school',
    description: 'Bachelor of Science with Honours in Computer Science',
    dotSize: 'default',
  },
  {
    title: 'Intern Software Engineer',
    company: 'EssDocs',
    date: 'August 2014 - May 2015',
    color: 'blue',
    icon: 'mdi-briefcase',
    dotSize: 'small',
  },
  {
    title: 'Started - Computer Science BSc Hons',
    company: 'University Of Derby',
    date: 'September 2012',
    color: 'orange',
    icon: 'mdi-book-open',
    dotSize: 'small',
  },
  {
    title: 'BTEC National Extended Diploma Level 3',
    company: 'Bromley College',
    date: 'September 2010 - June 2012',
    color: 'pink',
    icon: 'mdi-certificate',
    description: 'Software Engineering',
    dotSize: 'small',
  },
]
</script>

<style scoped>
.timeline-card {
  transition: all 0.3s ease;
}

.timeline-card:hover {
  transform: translateX(4px);
}
</style>
