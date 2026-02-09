<template>
  <v-container class="py-16">
    <v-row>
      <v-col class="text-center mb-8" cols="12">
        <h2 class="text-h3 font-weight-bold mb-2"># BLOG</h2>
        <p class="text-h6 text-grey">Latest posts from dev.to</p>
      </v-col>
    </v-row>

    <!-- Loading State -->
    <v-row v-if="loading">
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        lg="4"
        md="6"
      >
        <v-skeleton-loader
          color="surface-variant"
          type="card"
        />
      </v-col>
    </v-row>

    <!-- Error State -->
    <v-row v-else-if="error" justify="center">
      <v-col cols="12" md="6">
        <v-alert
          class="text-center"
          color="surface-variant"
          type="warning"
          variant="tonal"
        >
          <p class="mb-2">{{ error }}</p>
          <v-btn
            color="primary"
            size="small"
            variant="tonal"
            @click="fetchArticles"
          >
            Retry
          </v-btn>
        </v-alert>
      </v-col>
    </v-row>

    <!-- Articles Grid -->
    <v-row v-else>
      <v-col
        v-for="article in articles"
        :key="article.url"
        cols="12"
        lg="4"
        md="6"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            class="blog-card h-100"
            color="surface-variant"
            :elevation="isHovering ? 8 : 4"
            @click="openURL(article.url)"
          >
            <v-img
              v-if="article.cover_image"
              cover
              height="200"
              :src="article.cover_image"
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
            </v-img>
            <div
              v-else
              class="cover-fallback d-flex align-center justify-center"
            >
              <v-icon color="grey-darken-1" size="64">mdi-post-outline</v-icon>
            </div>

            <v-card-title class="text-subtitle-1 font-weight-bold text-wrap">
              {{ article.title }}
            </v-card-title>

            <v-card-subtitle class="description text-wrap">
              {{ article.description }}
            </v-card-subtitle>

            <v-card-text>
              <v-chip-group>
                <v-chip
                  v-for="tag in article.tag_list"
                  :key="tag"
                  :color="getTagColor(tag)"
                  size="small"
                  variant="tonal"
                >
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-card-text>

            <v-spacer />

            <v-card-text class="pt-0">
              <div class="d-flex align-center text-grey text-caption ga-4 flex-wrap">
                <span class="d-flex align-center ga-1">
                  <v-icon size="x-small">mdi-clock-outline</v-icon>
                  {{ article.reading_time_minutes }} min read
                </span>
                <span class="d-flex align-center ga-1">
                  <v-icon size="x-small">mdi-heart-outline</v-icon>
                  {{ article.positive_reactions_count }}
                </span>
                <span class="d-flex align-center ga-1">
                  <v-icon size="x-small">mdi-comment-outline</v-icon>
                  {{ article.comments_count }}
                </span>
                <span class="d-flex align-center ga-1">
                  <v-icon size="x-small">mdi-calendar-outline</v-icon>
                  {{ article.readable_publish_date }}
                </span>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <!-- View All Button -->
    <v-row v-if="!loading && !error && articles.length" class="mt-4" justify="center">
      <v-btn
        append-icon="mdi-arrow-right"
        color="primary"
        href="https://dev.to/jackmcguire1"
        target="_blank"
        variant="tonal"
      >
        View all posts on dev.to
      </v-btn>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
interface Article {
  title: string
  description: string
  url: string
  cover_image: string | null
  tag_list: string[]
  reading_time_minutes: number
  positive_reactions_count: number
  comments_count: number
  published_at: string
  readable_publish_date: string
}

const articles = ref<Article[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const tagColors: Record<string, string> = {
  go: 'cyan',
  golang: 'cyan',
  vue: 'green',
  javascript: 'yellow-darken-2',
  typescript: 'blue',
  aws: 'orange',
  redis: 'red',
  docker: 'blue-darken-2',
  devops: 'purple',
  tutorial: 'teal',
  webdev: 'green-darken-2',
  beginners: 'lime-darken-2',
  programming: 'indigo',
  opensource: 'green-lighten-1',
  serverless: 'orange-darken-2',
  api: 'deep-purple',
}

function getTagColor(tag: string): string {
  return tagColors[tag.toLowerCase()] || 'grey'
}

function openURL(url: string) {
  window.open(url, '_blank')
}

async function fetchArticles() {
  loading.value = true
  error.value = null
  try {
    const response = await fetch('https://dev.to/api/articles?username=jackmcguire1&per_page=6')
    if (!response.ok) {
      throw new Error('Failed to load blog posts')
    }
    articles.value = await response.json()
  } catch {
    error.value = 'Could not load blog posts. Please try again.'
  } finally {
    loading.value = false
  }
}

onMounted(fetchArticles)
</script>

<style scoped>
.blog-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-4px);
}

.cover-fallback {
  height: 200px;
  background: linear-gradient(135deg, #1a237e 0%, #4a148c 100%);
}

.description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
