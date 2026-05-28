<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { FilterBar } from '@/components/ui/filter'
import { artists } from '@/data/data'

const router = useRouter()

const filteredArtists = ref<typeof artists>(artists)

const filterOptions = computed(() => {
  const days = new Set(artists.map(a => a.day))
  return Array.from(days).map(day => ({
    label: day,
    value: day
  }))
})

const handleFilter = (filtered: typeof artists) => {
  filteredArtists.value = filtered
}

const navigateToArtist = (id: string) => {
  router.push(`/programa/artistas/${id}`)
}
</script>

<template>
  <div class="min-h-screen font-sans bg-[#111111] text-white pb-32 w-full pt-0 px-0">
    
    <div class="w-full bg-brand-yellow pt-24 pb-12 px-4 flex items-center justify-center border-b-8 border-black">
      <h1 class="text-4xl md:text-6xl font-extrabold text-black uppercase tracking-tighter text-center">
        descubre más de nuestros artistas
      </h1>
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

      <div v-if="filteredArtists.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="artist in filteredArtists" 
          :key="artist.id"
          @click="navigateToArtist(artist.id)"
          class="aspect-square bg-gray-900 shadow-[8px_8px_0_0_theme(colors.brand.blue)] hover:shadow-[12px_12px_0_0_theme(colors.brand.blue)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer relative group overflow-hidden"
        >
          <img :src="artist.img" :alt="artist.name" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
          
          <div class="absolute bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-sm border-t-2 border-brand-blue translate-y-full group-hover:translate-y-0 transition-transform">
            <h3 class="text-xl font-bold uppercase text-white">{{ artist.name }}</h3>
            <p class="text-brand-blue font-bold">{{ artist.day }}</p>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-20">
        <h2 class="text-3xl font-bold text-gray-500 uppercase">No se encontraron artistas</h2>
      </div>

    </div>
  </div>
</template>