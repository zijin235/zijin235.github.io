<script setup lang="ts">
import type { Publication } from '~/types'
import { useScholarStats } from '~/composables/useScholarStats'

const props = defineProps<{ pubs: Publication[] }>()

const { citationsFor } = useScholarStats()

function citations(p: Publication): number | null {
  return p.scholarId ? citationsFor(p.scholarId) : null
}
</script>

<template>
  <ul class="pub-list">
    <li v-for="(p, i) in props.pubs" :key="i">
      <ULink
        v-if="p.links?.[0]?.url"
        :to="p.links[0].url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary"
      >
        {{ p.title }}
      </ULink>
      <template v-else>{{ p.title }}</template>
      <span v-if="p.authors">, {{ p.authors }}</span>
      <span v-if="p.venue">, <strong>{{ p.venue }}</strong></span>
      <strong v-if="citations(p) !== null">
        <span class="show_paper_citations">| Citations: {{ citations(p) }}</span>
      </strong>
    </li>
  </ul>
</template>