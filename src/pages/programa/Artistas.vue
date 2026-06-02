<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { FilterBar } from '@/components/ui/filter'
import { artists } from '@/data/data'
// IMPORTAMOS TU IMAGEN AQUÍ
import bannermovidas from '@/assets/bannermovidas.png'

const router = useRouter()

const filteredArtists = ref<typeof artists>(artists)

const dayOrder = ['viernes', 'sábado', 'domingo']

const filterOptions = computed(() => {
  const days = Array.from(new Set(artists.map(a => a.day)))
  const orderedDays = dayOrder.filter(day => days.includes(day)).concat(days.filter(day => !dayOrder.includes(day)))
  return orderedDays.map(day => ({
    label: day,
    value: day
  }))
})

const handleFilter = (filtered: typeof artists) => {
  filteredArtists.value = filtered
}

 
</script>

<template>
  <div class="min-h-screen font-sans bg-[#111111] text-black pb-32 w-full pt-13.5 px-0">
    
    <div class="w-full relative  block">
      <img 
        :src="bannermovidas" 
        alt="Banner Movidas" 
        class="w-full h-auto block"
      />
    

      <div class="absolute inset-0 flex items-center justify-center z-20 px-6 pointer-events-none">
        <h1 class="text-2xl sm:text-4xl md:text-6xl font-extrabold text-black uppercase tracking-tighter text-center">
          descubre más de nuestros artistas
        </h1>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 md:px-8 mt-12 w-full">
      
      <div class="mb-16">
        <FilterBar
          :items="artists"
          filter-key="day"
          search-key="name"
          :filter-options="filterOptions"
          @filter="handleFilter"
        />
      </div>

      <div v-if="filteredArtists.length > 0" class="flex flex-wrap gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
        <router-link
          v-for="artist in filteredArtists"
          :key="artist.id"
          :to="`/programa/artistas/${artist.id}`"
          class="w-[calc(50%-0.5rem)] sm:w-auto aspect-square bg-gray-900 shadow-[8px_8px_0_0_theme(colors.brand.blue)] hover:shadow-[12px_12px_0_0_theme(colors.brand.blue)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer relative group overflow-hidden block"
        >
          <img :src="artist.img" :alt="artist.name" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
          
          <div class="absolute bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t-2 border-brand-blue translate-y-full group-hover:translate-y-0 transition-transform">
            <h3 class="text-xl font-bold uppercase text-white">{{ artist.name }}</h3>
            <p class="text-brand-blue font-regular">{{ artist.day }}</p>
          </div>
        </router-link>
      </div>

      <div v-else class="text-center py-20">
        <h2 class="text-3xl font-bold text-gray-500 uppercase">No se encontraron artistas</h2>
      </div>

    </div>
  </div>
</template>
