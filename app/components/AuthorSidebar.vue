<script setup lang="ts">
import { author, site, socialLinks } from '~/data/site'
import { useScholarStats } from '~/composables/useScholarStats'

// 与页面共享同一份 state，由 pages/index.vue 触发 refresh
const { stats, loading, scholarBadgeUrl } = useScholarStats()
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
        <h3 class="author__name" itemprop="name">{{ author.name }}</h3>
        <p v-if="author.bio" class="author__bio" itemprop="description">{{ author.bio }}</p>
      </div>

      <div class="author__urls-wrapper">
        <ul class="author__urls social-icons">
          <li v-if="site.description">
            <div class="author__desc">{{ site.description }}</div>
          </li>
          <li v-if="author.location">📍 {{ author.location }}</li>
          <li v-if="author.employer">🏢 {{ author.employer }}</li>

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

          <li class="citations">
            <span class="text-muted">Citations:</span>
            <strong id="total_cit">{{ loading ? '…' : stats.citedby.toLocaleString() }}</strong>
            <img :src="scholarBadgeUrl()" alt="Google Scholar citations badge" />
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>