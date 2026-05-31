<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { FilterBar } from '@/components/ui/filter'
import { workshops } from '@/data/data'
import bannermovidas from '@/assets/bannermovidas.png'

const router = useRouter()

const filteredTalleres = ref(workshops)

const filterOptions = computed(() => {
  const days = new Set(workshops.map(t => t.day))
  return Array.from(days).map(day => ({
    label: day,
    value: day
  }))
})

const handleFilter = (filtered: typeof workshops) => {
  filteredTalleres.value = filtered
}

const navigateToDetalle = (id: string) => {
  router.push(`/programa/talleres/${id}`)
}
</script>

<template>
  <div class="min-h-screen font-sans bg-background text-white pb-32 w-full pt-13.5 px-0">
    
    <div class="w-full relative block">
  <img
    :src="bannermovidas"
    alt="Banner Movidas"
    class="w-full h-auto block"
  />

  <div class="absolute inset-0 flex items-center justify-center z-20 px-6 pointer-events-none">
    <h1 class="text-2xl sm:text-4xl md:text-6xl font-extrabold text-black uppercase tracking-tighter text-center">
      descubre más de nuestros talleres
    </h1>
  </div>
</div>

    <div class="max-w-7xl mx-auto px-4 md:px-8 mt-12 w-full">
      
      <div class="mb-16">
        <FilterBar
          :items="workshops"
          filter-key="day"
          search-key="title"
          :filter-options="filterOptions"
          @filter="handleFilter"
        />
      </div>

      <div v-if="filteredTalleres.length > 0" class="flex flex-wrap gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
        <div 
          v-for="taller in filteredTalleres" 
          :key="taller.id"
          @click="navigateToDetalle(taller.id)"
          class="w-[calc(50%-0.5rem)] sm:w-auto aspect-square bg-gray-900 shadow-[8px_8px_0_0_theme(colors.brand.blue)] hover:shadow-[12px_12px_0_0_theme(colors.brand.blue)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer relative group overflow-hidden"
        >
          <img :src="taller.img" :alt="taller.title" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
          
          <div class="absolute bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-sm border-t-2 border-brand-blue translate-y-full group-hover:translate-y-0 transition-transform">
            <h3 class="text-xl font-bold uppercase text-white">{{ taller.title }}</h3>
            <p class="text-brand-blue font-bold">{{ taller.day }}</p>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-20">
        <h2 class="text-3xl font-bold text-gray-500 uppercase">No se encontraron talleres</h2>
      </div>

    </div>
  </div>
</template>

<style scoped>
* {
  transition-property: color, border-color, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
