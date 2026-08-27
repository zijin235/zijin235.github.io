<script setup lang="ts">
import type { Publication } from '~/types'
import { useScholarStats } from '~/composables/useScholarStats'

const props = defineProps<{ pubs: Publication[] }>()

const { citationsFor } = useScholarStats()

function citations(p: Publication): number | null {
  return p.scholarId ? citationsFor(p.scholarId) : null
}

/** 把 authors 里 **名字** 转成加粗（标记自己为第一作者，参考站同款呈现） */
function formatAuthors(authors?: string): string {
  if (!authors) return ''
  return authors.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
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

      <span v-if="p.authors">, <span v-html="formatAuthors(p.authors)" /></span>

      <span v-if="p.venue">, <strong>{{ p.venue }}</strong></span>
      <span v-if="p.venueDetail" class="pub-venue-detail">, {{ p.venueDetail }}</span>

      <UBadge
        v-if="p.ccf"
        size="xs"
        color="primary"
        variant="outline"
        class="ml-1.5 align-middle"
      >
        {{ p.ccf }}
      </UBadge>

      <strong v-if="citations(p) !== null">
        <span class="show_paper_citations">| Citations: {{ citations(p) }}</span>
      </strong>
    </li>
  </ul>
</template>