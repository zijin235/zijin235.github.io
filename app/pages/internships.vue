<script setup lang="ts">
import { useContent } from '~/composables/useContent'
import { useLocale } from '~/composables/useLocale'
import { site } from '~/data/site'

const { internships } = useContent()
const { t } = useLocale()

useSeoMeta({
  title: () => `${t('intern.title')} | ${site.title}`,
  description: site.description,
})
</script>

<template>
  <article itemscope itemtype="http://schema.org/CreativeWork">
    <section class="page__content">
      <h1 class="page__title">{{ t('intern.title') }}</h1>
      <p class="pub-page-intro">{{ t('intern.intro') }}</p>

      <ul class="timeline">
        <li v-for="(e, i) in internships" :key="i">
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

      <p class="pub-page-back">
        <ULink to="/" class="text-primary">{{ t('intern.back') }}</ULink>
      </p>
    </section>
  </article>
</template>