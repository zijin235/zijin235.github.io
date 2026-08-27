<script setup lang="ts">
import { author, socialLinks } from '~/data/site'
import { useLocale } from '~/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <aside class="sidebar sticky">
    <div class="profile_box" itemscope itemtype="http://schema.org/Person">
      <div class="author__avatar">
        <UAvatar
          :src="author.avatar"
          :alt="author.name"
          size="3xl"
          :ui="{
            root: 'size-[175px] max-w-full rounded-full',
            image: 'size-[175px] rounded-full',
          }"
        />
      </div>

      <div class="author__content">
        <h3 class="author__name" itemprop="name">{{ t('site.name') }}</h3>
        <p v-if="author.bio" class="author__bio" itemprop="description">{{ t('site.bio') }}</p>
      </div>

      <div class="author__urls-wrapper">
        <ul class="author__urls social-icons">
          <li v-if="author.location">📍 {{ t('site.location') }}</li>
          <li v-if="author.employer">🏢 {{ t('site.employer') }}</li>

          <li v-for="s in socialLinks" :key="s.id">
            <ULink
              v-if="s.url"
              :to="s.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary"
            >
              {{ s.label }}
            </ULink>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>