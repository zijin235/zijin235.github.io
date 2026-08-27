<script setup lang="ts">
import { useContent } from '~/composables/useContent'
import { useLocale } from '~/composables/useLocale'
import { site } from '~/data/site'

const { representativePublications, otherPublications } = useContent()
const { t } = useLocale()

useSeoMeta({
  title: () => `Publications | ${site.title}`,
  description: site.description,
})
</script>

<template>
  <article itemscope itemtype="http://schema.org/CreativeWork">
    <section class="page__content">
      <h1 class="page__title">{{ t('pub.title') }}</h1>
      <p class="pub-page-intro">{{ t('pub.intro') }}</p>

      <SectionTitle id="representative" icon="🏆" :title="t('pub.representative')" />
      <PaperBox v-for="(p, i) in representativePublications" :key="'rep' + i" :pub="p" />

      <SectionTitle id="other-publications" icon="📄" :title="t('pub.others')" />
      <PublicationList :pubs="otherPublications" />

      <p class="pub-page-back">
        <ULink to="/" class="text-primary">{{ t('pub.back') }}</ULink>
      </p>
    </section>
  </article>
</template>