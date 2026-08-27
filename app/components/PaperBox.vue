<script setup lang="ts">
import type { Publication } from '~/types'
import { useScholarStats } from '~/composables/useScholarStats'

// 置顶出版物图文卡片（对应旧站 <div class='paper-box'>）
const props = defineProps<{ pub: Publication }>()

const { citationsFor } = useScholarStats()
const citations = computed(() =>
  props.pub.scholarId ? citationsFor(props.pub.scholarId) : null,
)
const paperLink = computed(() => props.pub.links?.[0]?.url)
</script>

<template>
  <div class="paper-box">
    <div class="paper-box-image">
      <div>
        <UBadge
          v-if="pub.badge"
          size="sm"
          color="primary"
          variant="solid"
          class="mb-2"
        >
          {{ pub.badge }}
        </UBadge>
        <img v-if="pub.image" :src="pub.image" :alt="pub.imageAlt" width="100%" />
      </div>
    </div>

    <div class="paper-box-text">
      <h3 class="pub-title">
        <ULink
          v-if="paperLink"
          :to="paperLink"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary"
        >
          {{ pub.title }}
        </ULink>
        <template v-else>{{ pub.title }}</template>
      </h3>

      <p v-if="pub.authors" class="pub-authors">{{ pub.authors }}</p>

      <p class="pub-meta">
        <UButton
          v-for="l in pub.links"
          :key="l.label"
          size="sm"
          color="primary"
          variant="solid"
          :to="l.url"
          target="_blank"
          rel="noopener noreferrer"
          class="mr-2"
        >
          {{ l.label }}
        </UButton>
        <strong v-if="citations !== null">
          <span class="show_paper_citations">| Citations: {{ citations }}</span>
        </strong>
      </p>
      <p v-if="pub.description" class="pub-desc">{{ pub.description }}</p>
    </div>
  </div>
</template>