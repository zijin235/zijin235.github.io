<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { site } from '~/data/site'
import { useLocale } from '~/composables/useLocale'

const { t, locale, toggleLocale } = useLocale()

// 导航仅保留「跳转到首页/独立页」的项；News/Honors/Education/Talks 均在首页内容区，点击顶部品牌可返回
const items = computed<NavigationMenuItem[]>(() => [
  { label: t('nav.about'), to: '/' },
  { label: t('nav.publications'), to: '/publications' },
  { label: t('nav.internships'), to: '/internships' },
  { label: t('nav.cv'), to: '/cv' },
  // 博客：站外链接；真实地址填到 data/site.ts 的 site.blogUrl（当前为占位符）
  { label: t('nav.blogs'), to: site.blogUrl || '#', target: site.blogUrl ? '_blank' : undefined },
])
</script>

<template>
  <!--
    UHeader：桌面端横向导航 / 移动端自动汉堡菜单（#body）
    样式覆盖为与原版一致的纯白 + 下边框
  -->
  <UHeader :ui="{ root: 'bg-white border-b border-muted' }">
    <template #left>
      <ULink to="/" :aria-label="t('site.name')" class="font-bold text-default">
        {{ t('site.name') }}
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