<script setup lang="ts">
import { site } from '~/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <UApp>
    <AppMasthead />

    <div id="main" role="main">
      <div class="page__layout">
        <AuthorSidebar />

        <main class="page">
          <NuxtPage />
        </main>
      </div>
    </div>

    <UFooter>
      <template #default>
        © {{ year }} {{ site.title }} · Built with
        <ULink to="https://nuxt.com" target="_blank" class="text-primary">
          Nuxt 3
        </ULink>
        + TypeScript
      </template>
    </UFooter>
  </UApp>
</template>