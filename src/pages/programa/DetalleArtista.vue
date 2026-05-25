<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Instagram, Twitter, Music } from 'lucide-vue-next'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

// Simulamos la base de datos de artistas
const artistsData: Record<string, any> = {
  'luna-valle': { name: 'Luna Valle', subtitle: 'Indie Pop Alternativo', day: 'Viernes 23', tags: ['Indie', 'Pop', 'Local'], img: new URL('@/assets/lunavalle.jpg', import.meta.url).href },
  'diamante-negro': { name: 'Diamante Negro', subtitle: 'Post Punk / Noise', day: 'Viernes 23', tags: ['Punk', 'Noise', 'Rock'], img: new URL('@/assets/diamanteNegro.jpg', import.meta.url).href },
  'tranquilorayo': { name: 'TranquiloRayo', subtitle: 'Electrónica experimental', day: 'Sábado 24', tags: ['Electrónica', 'Live Set'], img: new URL('@/assets/tranquiloRayo.jfif', import.meta.url).href },
  'garbi': { name: 'Garbi', subtitle: 'Shoegaze ensoñador', day: 'Sábado 24', tags: ['Shoegaze', 'Dream Pop'], img: new URL('@/assets/garbi.png', import.meta.url).href },
  'repion': { name: 'Repion', subtitle: 'Rock Alternativo', day: 'Sábado 24', tags: ['Rock', 'Guitar'], img: new URL('@/assets/repion.jpg', import.meta.url).href },
  'mr-kennedy': { name: 'Mr.Kennedy', subtitle: 'Hip Hop / Urbana', day: 'Domingo 25', tags: ['Hip Hop', 'Rap'], img: new URL('@/assets/kennedy.jfif', import.meta.url).href },
  'nuevos-vicios': { name: 'Nuevos Vicios', subtitle: 'Garage Rock', day: 'Domingo 25', tags: ['Garage', 'Rock'], img: new URL('@/assets/nuevosVicios.jpg', import.meta.url).href },
  'bum-motion-club': { name: 'Bum Motion Club', subtitle: 'Psicodelia y sintes', day: 'Domingo 25', tags: ['Psicodelia', 'Synth'], img: new URL('@/assets/bumMotionClub.jpg', import.meta.url).href },
}

const artistId = computed(() => route.params.id as string)
const artist = computed(() => artistsData[artistId.value])

const goBack = () => {
  router.push('/programa/artistas')
}
</script>

<template>
  <div class="min-h-screen font-sans bg-black text-white pt-24 pb-32">
    <div class="container mx-auto px-4 md:px-8">
      
      <!-- Botón Volver -->
      <button 
        @click="goBack" 
        class="flex items-center gap-2 text-[#fff200] hover:text-white mb-12 transition-colors font-bold uppercase"
      >
        <ArrowLeft :size="24" /> Volver a Artistas
      </button>

      <div v-if="artist" class="flex flex-col md:flex-row gap-12 items-start">
        <!-- Foto -->
        <div class="w-full md:w-1/2 aspect-square border-4 border-black overflow-hidden">
          <img :src="artist.img" :alt="artist.name" class="w-full h-full object-cover" />
        </div>

        <!-- Info -->
        <div class="w-full md:w-1/2 space-y-8">
          <div>
            <h1 class="text-5xl md:text-7xl font-extrabold uppercase text-[#16a0db] mb-2 tracking-tight">{{ artist.name }}</h1>
            <h2 class="text-2xl text-gray-400 uppercase font-bold">{{ artist.subtitle }}</h2>
          </div>

          <div class="flex items-center gap-3">
            <span class="bg-[#fff200] text-black px-4 py-1 font-bold uppercase text-sm border-2 border-black">
              {{ artist.day }}
            </span>
          </div>

          <!-- Etiquetas -->
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in artist.tags" :key="tag" class="px-3 py-1 border border-white/20 text-gray-300 text-sm uppercase font-bold">
              #{{ tag }}
            </span>
          </div>

          <!-- Descripción Simulada -->
          <p class="text-gray-300 leading-relaxed text-lg">
            Acompaña a {{ artist.name }} en una actuación única en ESCLAT. No te pierdas la oportunidad de disfrutar de su directo este {{ artist.day }} en Las Naves. Prepárate para una experiencia sonora inigualable.
          </p>

          <!-- Redes Sociales -->
          <div class="flex gap-4 pt-4">
            <a href="#" class="p-3 bg-white/5 hover:bg-[#16a0db] hover:text-black transition-colors rounded-full border border-white/10">
              <Instagram :size="24" />
            </a>
            <a href="#" class="p-3 bg-white/5 hover:bg-[#16a0db] hover:text-black transition-colors rounded-full border border-white/10">
              <Twitter :size="24" />
            </a>
            <a href="#" class="p-3 bg-white/5 hover:bg-[#16a0db] hover:text-black transition-colors rounded-full border border-white/10">
              <Music :size="24" />
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
