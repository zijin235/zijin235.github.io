<script setup lang="ts">
defineProps<{
  id: string
  icon: string
  title: string
}>()
</script>

<template>
  <h2 class="section-title" :id="id">
    <span class="section-icon">{{ icon }}</span> {{ title }}
  </h2>
</template>