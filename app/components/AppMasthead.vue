<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { site } from '~/data/site'
import { useLocale } from '~/composables/useLocale'

const { t, locale, toggleLocale } = useLocale()

// 导航链接：Publications / Internships 为独立路由；其余用 /#anchor 跨页定位
const items = computed<NavigationMenuItem[]>(() => [
  { label: t('nav.about'), to: '/#about-me' },
  { label: t('nav.news'), to: '/#news' },
  { label: t('nav.publications'), to: '/publications' },
  { label: t('nav.honors'), to: '/#honors' },
  { label: t('nav.education'), to: '/#education' },
  { label: t('nav.talks'), to: '/#talks' },
  { label: t('nav.internships'), to: '/internships' },
])
</script>

<template>
  <!--
    UHeader：桌面端横向导航 / 移动端自动汉堡菜单（#body）
    样式覆盖为与原版一致的纯白 + 下边框
  -->
  <UHeader :ui="{ root: 'bg-white border-b border-muted' }">
    <template #left>
      <ULink to="/" :aria-label="site.title" class="font-bold text-default">
        {{ site.title }}
      </ULink>
    </template>

    <UNavigationMenu :items="items" variant="link" class="gap-x-4" />

    <template #right>
      <UButton
        size="sm"
        color="neutral"
        variant="ghost"
        icon="i-lucide-languages"
        :label="locale === 'en' ? '中文' : 'EN'"
        :aria-label="locale === 'en' ? 'Switch to Chinese' : 'Switch to English'"
        @click="toggleLocale"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        variant="link"
        class="px-6 py-4"
      />
    </template>
  </UHeader>
</template>