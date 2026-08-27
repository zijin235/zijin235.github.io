<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { site } from '~/data/site'

// 导航链接（单页锚点，对应旧站 masthead）
const items: NavigationMenuItem[] = [
  { label: 'About', to: '#about-me' },
  { label: 'News', to: '#news' },
  { label: 'Publications', to: '/publications' },
  { label: 'Honors', to: '#honors' },
  { label: 'Education', to: '#education' },
  { label: 'Talks', to: '#talks' },
  { label: 'Internships', to: '#internships' },
]
</script>

<template>
  <!--
    UHeader：桌面端横向导航 / 移动端自动汉堡菜单（#body）
    样式覆盖为与原版一致的纯白 + 下边框
  -->
  <UHeader :ui="{ root: 'bg-white border-b border-muted' }">
    <template #left>
      <ULink to="#about-me" :aria-label="site.title" class="font-bold text-default">
        {{ site.title }}
      </ULink>
    </template>

    <UNavigationMenu :items="items" variant="link" class="gap-x-4" />

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