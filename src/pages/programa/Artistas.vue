<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Search } from 'lucide-vue-next'

const router = useRouter()

// Datos embebidos
const artists = [
  { id: 'luna-valle', name: 'Luna Valle', day: 'Viernes 23', img: 'https://via.placeholder.com/400x400/16a0db/000000?text=Luna+Valle' },
  { id: 'diamante-negro', name: 'Diamante Negro', day: 'Viernes 23', img: 'https://via.placeholder.com/400x400/7b4a9d/000000?text=Diamante+Negro' },
  { id: 'tranquilorayo', name: 'TranquiloRayo', day: 'Sábado 24', img: 'https://via.placeholder.com/400x400/fff200/000000?text=TranquiloRayo' },
  { id: 'garbi', name: 'Garbi', day: 'Sábado 24', img: 'https://via.placeholder.com/400x400/15a64b/000000?text=Garbi' },
  { id: 'repion', name: 'Repion', day: 'Sábado 24', img: 'https://via.placeholder.com/400x400/16a0db/000000?text=Repion' },
  { id: 'mr-kennedy', name: 'Mr.Kennedy', day: 'Domingo 25', img: 'https://via.placeholder.com/400x400/7b4a9d/000000?text=Mr.Kennedy' },
  { id: 'nuevos-vicios', name: 'Nuevos Vicios', day: 'Domingo 25', img: 'https://via.placeholder.com/400x400/fff200/000000?text=Nuevos+Vicios' },
  { id: 'bum-motion-club', name: 'Bum Motion Club', day: 'Domingo 25', img: 'https://via.placeholder.com/400x400/15a64b/000000?text=Bum+Motion+Club' },
]

// Estado reactivo
const selectedDay = ref('Todos')
const searchQuery = ref('')

// Computed properties
const filteredArtists = computed(() => {
  return artists.filter(artist => {
    const matchesDay = selectedDay.value === 'Todos' || artist.day === selectedDay.value
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesDay && matchesSearch
  })
})

const navigateToArtist = (id: string) => {
  router.push(`/programa/artistas/${id}`)
}
</script>

<template>
  <div class="min-h-screen font-sans bg-black text-white pb-32">
    
    <!-- Banner Superior -->
    <div class="w-full bg-[#fff200] pt-24 pb-12 px-4 flex items-center justify-center border-b-8 border-black">
      <h1 class="text-4xl md:text-6xl font-extrabold text-black uppercase tracking-tighter text-center">
        descubre más de nuestros artsitas
      </h1>
    </div>

    <div class="container mx-auto px-4 md:px-8 mt-12">
      
      <!-- Controles (Filtro + Buscador) -->
      <div class="flex flex-col lg:flex-row justify-between items-center gap-6 mb-16 border-4 border-[#fff200] p-4 shadow-[8px_8px_0_0_#fff200]">
        
        <!-- Filtros por día -->
        <div class="flex flex-wrap gap-2 md:gap-4">
          <button 
            @click="selectedDay = 'Todos'"
            class="px-6 py-2 font-bold uppercase transition-colors border-2"
            :class="selectedDay === 'Todos' ? 'bg-[#fff200] text-black border-[#fff200]' : 'bg-black text-[#fff200] border-[#fff200] hover:bg-white/10'"
          >
            Todos
          </button>
          <button 
            @click="selectedDay = 'Viernes 23'"
            class="px-6 py-2 font-bold uppercase transition-colors border-2"
            :class="selectedDay === 'Viernes 23' ? 'bg-[#fff200] text-black border-[#fff200]' : 'bg-black text-[#fff200] border-[#fff200] hover:bg-white/10'"
          >
            Viernes 23
          </button>
          <button 
            @click="selectedDay = 'Sábado 24'"
            class="px-6 py-2 font-bold uppercase transition-colors border-2"
            :class="selectedDay === 'Sábado 24' ? 'bg-[#fff200] text-black border-[#fff200]' : 'bg-black text-[#fff200] border-[#fff200] hover:bg-white/10'"
          >
            Sábado 24
          </button>
          <button 
            @click="selectedDay = 'Domingo 25'"
            class="px-6 py-2 font-bold uppercase transition-colors border-2"
            :class="selectedDay === 'Domingo 25' ? 'bg-[#fff200] text-black border-[#fff200]' : 'bg-black text-[#fff200] border-[#fff200] hover:bg-white/10'"
          >
            Domingo 25
          </button>
        </div>

        <!-- Buscador -->
        <div class="relative w-full lg:w-72">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Buscar artista..." 
            class="w-full bg-black text-[#fff200] border-2 border-[#fff200] px-4 py-2 font-bold uppercase placeholder-[#fff200]/50 outline-none focus:bg-white/5"
          />
          <Search class="absolute right-3 top-1/2 -translate-y-1/2 text-[#fff200]" :size="20" />
        </div>
      </div>

      <!-- Grid de Artistas -->
      <div v-if="filteredArtists.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="artist in filteredArtists" 
          :key="artist.id"
          @click="navigateToArtist(artist.id)"
          class="aspect-square bg-gray-900 border-4 border-black shadow-[8px_8px_0_0_#16a0db] hover:shadow-[12px_12px_0_0_#16a0db] hover:-translate-y-2 transition-all cursor-pointer relative group overflow-hidden"
        >
          <!-- Placeholder de Foto -->
          <img :src="artist.img" :alt="artist.name" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
          
          <!-- Overlay Info -->
          <div class="absolute bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-sm border-t-2 border-[#16a0db] translate-y-full group-hover:translate-y-0 transition-transform">
            <h3 class="text-xl font-bold uppercase text-white">{{ artist.name }}</h3>
            <p class="text-[#16a0db] font-bold">{{ artist.day }}</p>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-20">
        <h2 class="text-3xl font-bold text-gray-500 uppercase">No se encontraron artistas</h2>
      </div>

    </div>
  </div>
</template>
