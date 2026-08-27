<script setup lang="ts">
import { site } from '~/data/site'
import { about, education, honors, internships, news, publications, talks } from '~/data/content'

// 对应旧站 head.html 的 SEO meta（完整描述仅在此出现一次，避免侧栏重复）
const seoDescription =
  'M.S. student in AI Security and Agent Security at the College of Computer Science and Technology / School of Software, Nanjing University of Aeronautics and Astronautics.'

useSeoMeta({
  title: () => site.title,
  description: seoDescription,
  ogTitle: () => site.title,
  ogDescription: seoDescription,
})
</script>

<template>
  <article itemscope itemtype="http://schema.org/CreativeWork">
    <section class="page__content">
      <!-- ===== About Me ===== -->
      <span class="anchor" id="about-me" />
      <p v-for="(t, i) in about" :key="i" v-html="t" />

      <!-- ===== News ===== -->
      <TimelineSection id="news" icon="🔥" title="News" :entries="news" />

      <!-- ===== Publications ===== -->
      <SectionTitle id="publications" icon="📝" title="Publications" />
      <PaperBox v-for="(p, i) in publications.filter(p => p.featured)" :key="'f' + i" :pub="p" />
      <PublicationList :pubs="publications.filter(p => !p.featured)" />

      <!-- ===== Honors / Education / Talks / Internships ===== -->
      <TimelineSection id="honors" icon="🎖" title="Honors and Awards" :entries="honors" />
      <TimelineSection id="education" icon="📖" title="Educations" :entries="education" />
      <TimelineSection id="talks" icon="💬" title="Invited Talks" :entries="talks" />
      <TimelineSection id="internships" icon="💻" title="Internships" :entries="internships" />
    </section>
  </article>
</template>