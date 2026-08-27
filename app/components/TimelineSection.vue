<script setup lang="ts">
import type { TimelineEntry } from '~/types'

// News / Honors / Education / Talks / Internships 共用的时间线列表
defineProps<{
  id: string
  icon: string
  title: string
  entries: TimelineEntry[]
}>()
</script>

<template>
  <SectionTitle :id="id" :icon="icon" :title="title" />
  <ul class="timeline">
    <li v-for="(e, i) in entries" :key="i">
      <strong class="tl-date text-primary">{{ e.date }}</strong>
      <span class="tl-text">
        {{ e.text }}
        <ULink
          v-for="(l, j) in e.links"
          :key="j"
          :to="l.url"
          target="_blank"
          rel="noopener noreferrer"
          class="tl-link text-primary"
        >
          {{ l.label }}
        </ULink>
      </span>
    </li>
  </ul>
</template>