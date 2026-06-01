<script setup lang="ts">
import logoHorizontal from '@/assets/logoHorizontal.png'

withDefaults(defineProps<{
  alt?: string
}>(), {
  alt: 'Esclat Logo'
})
</script>

<template>
  <img :src="logoHorizontal" :alt="alt" />
</template>
