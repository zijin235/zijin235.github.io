<script setup lang="ts">
import { site } from '~/data/site'
import { education, honors, internships, news, publications, talks } from '~/data/content'
import { useScholarStats } from '~/composables/useScholarStats'

const { stats, loading, refresh, scholarBadgeUrl } = useScholarStats()

// 对应旧站 head.html 的 SEO meta
useSeoMeta({
  title: () => site.title,
  description: site.description,
  ogTitle: () => site.title,
  ogDescription: site.description,
})

// 对应旧站 fetch_google_scholar_stats.html 的 $(document).ready(fetch)
onMounted(() => refresh())
</script>

<template>
  <article itemscope itemtype="http://schema.org/CreativeWork">
    <section class="page__content">
      <!-- ===== About Me ===== -->
      <span class="anchor" id="about-me" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum,
        ac tempus justo dapibus sit amet.
      </p>
      <p>
        My research interest includes neural machine translation and computer vision. I have
        published more than 100 papers at the top international AI conferences with total
        <a :href="site.googlescholar" target="_blank" rel="noopener noreferrer">
          google scholar citations
          <strong id="total_cit">{{ loading ? '…' : stats.citedby.toLocaleString() }}</strong>
        </a>
        <img :src="scholarBadgeUrl()" alt="citations" />
      </p>

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