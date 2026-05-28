<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Instagram, Twitter, Music } from 'lucide-vue-next'
import { computed } from 'vue'
import { getArtistById } from '@/data/data'

const route = useRoute()
const router = useRouter()

const artistId = computed(() => route.params.id as string)
const artist = computed(() => getArtistById(artistId.value))

const goBack = () => {
  router.push('/programa/artistas')
}
</script>

<template>
  <div class="font-sans bg-black text-white">
    <div class="container mx-auto">
      
      <button 
        @click="goBack" 
        class="flex items-center gap-2 text-brand-yellow hover:text-white mb-12 transition-colors font-bold uppercase"
      >
        <ArrowLeft :size="24" /> Volver a Artistas
      </button>

      <div v-if="artist" class="flex flex-col md:flex-row gap-12 items-start">
        <div class="w-full md:w-1/2 aspect-square border-4 border-black overflow-hidden">
          <img :src="artist.img" :alt="artist.name" class="w-full h-full object-cover" />
        </div>

        <div class="w-full md:w-1/2 space-y-8">
          <div>
            <h1 class="text-5xl md:text-7xl font-extrabold uppercase text-brand-blue mb-2 tracking-tight">{{ artist.name }}</h1>
            <h2 class="text-2xl text-gray-400 uppercase font-bold">{{ artist.genre }}</h2>
          </div>

          <div class="flex items-center gap-3">
            <span class="bg-brand-yellow text-black px-4 py-1 font-bold uppercase text-sm border-2 border-black">
              {{ artist.day }}
            </span>
          </div>

          <div class="flex flex-wrap gap-2">
            <span v-for="tag in artist.tags" :key="tag" class="px-3 py-1 border border-white/20 text-gray-300 text-sm uppercase font-bold">
              #{{ tag }}
            </span>
          </div>

          <div class="text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
            {{ artist.description }}
          </div>

          <div class="flex gap-6 pt-4">
            <a href="#" class="text-white hover:text-brand-blue transition-colors">
              <Instagram :size="28" />
            </a>
            <a href="#" class="text-white hover:text-brand-blue transition-colors">
              <Twitter :size="28" />
            </a>
            <a href="#" class="text-white hover:text-brand-blue transition-colors">
              <Music :size="28" />
            </a>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-20">
        <h2 class="text-4xl font-bold text-gray-500 uppercase">Artista no encontrado</h2>
      </div>

    </div>
  </div>
</template>