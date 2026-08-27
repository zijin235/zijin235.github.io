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
        我是南京航空航天大学计算机科学与技术学院/软件学院的硕士研究生，导师为 zhouyu。
      </p>
      <p>
        研究方向为 <strong>AI 安全</strong> 与 <strong>Agent 安全</strong>。
        Google Scholar 总引用：
        <a :href="site.googlescholar" target="_blank" rel="noopener noreferrer">
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