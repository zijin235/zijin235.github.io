<script setup lang="ts">

import { useLocale } from '~/composables/useLocale'
import { site } from '~/data/site'

const { education, honors, internships, researchInterests, representativePublications, otherPublications } = useContent()
const { t } = useLocale()

// CV 页：代表性 + 其他论文合并为紧凑列表（otherPublications 为普通数组，无需 .value）
const pubs = computed(() => [...representativePublications.value, ...otherPublications])

useSeoMeta({
  title: () => `${t('nav.cv')} | ${t('site.name')}`,
  description: site.description,
})
</script>

<template>
  <article itemscope itemtype="http://schema.org/CreativeWork">
    <section class="page__content">
      <h1 class="page__title">{{ t('nav.cv') }}</h1>
      <p class="pub-page-intro">
        <strong>{{ t('site.name') }}</strong> — {{ t('site.bio') }} · {{ t('site.employer') }}
      </p>

      <!-- Education -->
      <TimelineSection id="cv-education" icon="📖" :title="t('section.education')" :entries="education" />

      <!-- Research Interests -->
      <SectionTitle id="cv-interests" icon="🔬" :title="t('section.researchInterests')" />
      <ul class="research-interests">
        <li v-for="r in researchInterests" :key="r.title">
          <strong>{{ r.title }}</strong> — {{ r.description }}
        </li>
      </ul>

      <!-- Selected Publications -->
      <SectionTitle id="cv-publications" icon="📝" :title="t('pub.representative')" />
      <PublicationList :pubs="pubs" />
      <p class="pub-page-entry">
        <UButton
          size="sm"
          color="primary"
          variant="outline"
          to="/publications"
          icon="i-lucide-arrow-right"
          trailing
        >
          {{ t('pub.viewAll') }}
        </UButton>
      </p>

      <!-- Honors -->
      <TimelineSection id="cv-honors" icon="🎖" :title="t('section.honors')" :entries="honors" />

      <!-- Internships -->
      <TimelineSection id="cv-internships" icon="💻" :title="t('section.internships')" :entries="internships" />
    </section>
  </article>
</template>