<script setup lang="ts">
import { representativePublications, otherPublications } from '~/data/content'
import { site } from '~/data/site'

useSeoMeta({
  title: () => `Publications | ${site.title}`,
  description: site.description,
})
</script>

<template>
  <article itemscope itemtype="http://schema.org/CreativeWork">
    <section class="page__content">
      <h1 class="page__title">Publications</h1>
      <p class="pub-page-intro">
        Representative publications (first author) are highlighted below; the full list is
        also presented here, grouped by authorship role.
      </p>

      <!-- 代表性（一作） -->
      <SectionTitle id="representative" icon="🏆" title="Representative Publications" />
      <PaperBox v-for="(p, i) in representativePublications" :key="'rep' + i" :pub="p" />

      <!-- 其他（二作及以上） -->
      <SectionTitle id="other-publications" icon="📄" title="Other Publications" />
      <PublicationList :pubs="otherPublications" />

      <p class="pub-page-back">
        <ULink to="/" class="text-primary">← Back to Home</ULink>
      </p>
    </section>
  </article>
</template>