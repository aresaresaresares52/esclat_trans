<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, House, Instagram, Twitter, Music, Volume2, VolumeX } from 'lucide-vue-next'
import { computed, ref, watch, onUnmounted } from 'vue'
import { getArtistById } from '@/data/data'

const route = useRoute()
const router = useRouter()

const artistId = computed(() => route.params.id as string)
const artist = computed(() => getArtistById(artistId.value))

// Lógica de reproducción de audio nativa y dinámica
const isPlaying = ref(false)
let audioNode: HTMLAudioElement | null = null

const toggleAudio = () => {
  if (!artist.value || !artist.value.audio) return

  // Si no existe la instancia, la creamos con el audio del artista actual
  if (!audioNode) {
    audioNode = new Audio(artist.value.audio)
    audioNode.loop = true
    // Si la canción termina (en caso de quitar el loop), reseteamos el icono
    audioNode.onended = () => {
      isPlaying.value = false
    }
  }

  if (isPlaying.value) {
    audioNode.pause()
  } else {
    audioNode.play().catch(err => console.log("Error al reproducir audio:", err))
  }
  
  isPlaying.value = !isPlaying.value
}

// Limpieza absoluta si se cambia de artista o se sale de la página
const stopAudio = () => {
  if (audioNode) {
    audioNode.pause()
    audioNode = null
  }
  isPlaying.value = false
}

// Si el usuario navega a otro artista directamente, matamos el audio anterior
watch(artistId, () => {
  stopAudio()
})

onUnmounted(() => {
  stopAudio()
})

const goBack = () => {
  router.push('/programa/artistas')
}

const goHome = () => {
  router.push({ path: '/', hash: '#home-artistas' })
}
</script>

<template>
  <div class="font-sans bg-background text-white">
    <div class="container mx-auto pt-8">
      
      <div class="flex items-center justify-between gap-4 mb-6">
        <button
          @click="goBack"
          class="flex items-center gap-2 text-brand-yellow hover:text-white mb-7 transition-colors font-bold uppercase"
        >
          <ArrowLeft :size="24" /> Volver a Artistas
        </button>

        <button
          @click="goHome"
          class="text-brand-yellow hover:text-white mb-7 transition-colors"
          aria-label="Ir al home"
          title="Ir al home"
        >
          <House :size="30" />
        </button>
      </div>

      <div v-if="artist" class="flex flex-col md:flex-row gap-12 items-start">
      <div class="w-full md:w-1/2 aspect-square border-4 border-black overflow-hidden">
          <img :src="artist.img" :alt="artist.name" class="w-full h-full object-cover" />
        </div>

        <div class="w-full md:w-1/2 space-y-8">
          <div>
            <h1 class="text-5xl md:text-7xl font-extrabold uppercase text-brand-blue mb-2 tracking-tight">{{ artist.name }}</h1>
            <h2 class="text-2xl text-gray-300 uppercase font-regular">{{ artist.genre }}</h2>
          </div>

          <div class="flex items-center gap-4">
            <span class="bg-brand-yellow text-black px-4 py-1 font-bold uppercase text-sm border-2 border-black">
              {{ artist.day }}
            </span>
            
            <button 
              v-if="artist.audio"
              @click="toggleAudio"
              class="p-2 border-2 border-black transition-all transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer flex items-center justify-center rounded-none shadow-[2px_2px_0_0_#000]"
              :class="isPlaying ? 'bg-brand-yellow text-black' : 'bg-neutral-800 text-white'"
              title="Escuchar tema"
            >
              <Volume2 v-if="isPlaying" :size="20" class="animate-pulse" />
              <VolumeX v-else :size="20" class="text-gray-400" />
            </button>
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
