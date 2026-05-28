<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { FilterBar } from '@/components/ui/filter'
import { workshops } from '@/data/data'

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
  <div class="min-h-screen bg-black text-white font-sans">
    <!-- Header con fondo amarillo -->
    <div class="w-full bg-brand-yellow pt-24 pb-12 px-4 flex items-center justify-center border-b-8 border-black">
      <h1 class="text-4xl md:text-6xl font-extrabold text-black uppercase tracking-tighter text-center">
        Talleres y Actividades
      </h1>
    </div>

    <!-- Contenedor principal -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-16">
      
      <!-- Filter Bar -->
      <section class="mb-16">
        <FilterBar
          :items="workshops"
          filter-key="day"
          search-key="title"
          :filter-options="filterOptions"
          @filter="handleFilter"
        />
      </section>

      <!-- Talleres Grid -->
      <section class="mb-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="taller in filteredTalleres"
            :key="taller.id"
            @click="navigateToDetalle(taller.id)"
            class="aspect-square bg-gradient-to-br from-gray-900 to-black border border-gray-700 p-8 cursor-pointer hover:border-brand-yellow transition-all group hover:shadow-[0_0_30px_rgba(242,221,32,0.2)] flex flex-col"
          >
            <!-- Day badge -->
            <span class="inline-block bg-brand-yellow text-black text-xs font-extrabold px-3 py-1 mb-4 uppercase self-start">
              {{ taller.day }}
            </span>

            <!-- Title -->
            <h3 class="text-2xl md:text-3xl font-bold uppercase text-white mb-2 group-hover:text-brand-yellow transition-colors flex-1">
              {{ taller.title }}
            </h3>

            <!-- Info Grid -->
            <div class="grid grid-cols-2 gap-4 text-sm text-gray-300 border-t border-gray-700 pt-6 mt-auto">
              <div>
                <p class="text-gray-500 text-xs uppercase font-bold mb-1">Horario</p>
                <p class="font-semibold">{{ taller.horario }}</p>
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase font-bold mb-1">Duración</p>
                <p class="font-semibold">{{ taller.duracion }}</p>
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase font-bold mb-1">Lugar</p>
                <p class="font-semibold">{{ taller.lugar }}</p>
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase font-bold mb-1">Aforo</p>
                <p class="font-semibold">{{ taller.aforo > 0 ? taller.aforo + ' personas' : 'Sin límite' }}</p>
              </div>
            </div>

            <!-- Arrow indicator -->
            <div class="mt-4 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity text-lg">
              →
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="filteredTalleres.length === 0" class="text-center py-16">
          <p class="text-gray-400 text-lg">No se encontraron talleres con esos criterios.</p>
        </div>
      </section>

      <!-- Nota informativa -->
      <section class="bg-white/5 border border-white/10 rounded-lg p-8 md:p-12">
        <h2 class="text-2xl font-bold text-brand-yellow uppercase mb-6">Información sobre Talleres</h2>
        <div class="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
            <span class="font-bold text-white">Reservas:</span> Las reservas para acceder y participar en los talleres se gestionarán dentro del recinto 1h antes del comienzo de estos hasta completar aforo.
          </p>
          <div class="pt-4 border-t border-white/10">
            <p class="font-bold text-white mb-3">Detalles por taller:</p>
            <ul class="space-y-3">
              <li v-for="taller in workshops" :key="taller.id" class="text-sm">
                <span class="font-bold text-brand-yellow">{{ taller.title }}:</span> {{ taller.subtitle }}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
* {
  transition-property: color, border-color, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
