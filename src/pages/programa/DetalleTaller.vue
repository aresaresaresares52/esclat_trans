<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import { computed } from 'vue'
import { getWorkshopById } from '@/data/data'

const route = useRoute()
const router = useRouter()

const tallerId = computed(() => route.params.id as string)
const taller = computed(() => getWorkshopById(tallerId.value))

const goBack = () => {
  router.push('/programa/talleres')
}
</script>

<template>
  <div class="min-h-screen font-sans bg-black text-white pt-24 pb-32">
    <div class="container mx-auto px-4 md:px-8">
      
      <!-- Botón Volver -->
      <button 
        @click="goBack" 
        class="flex items-center gap-2 text-brand-yellow hover:text-white mb-12 transition-colors font-bold uppercase"
      >
        <ArrowLeft :size="24" /> Volver a Talleres
      </button>

      <div v-if="taller" class="flex flex-col gap-12">
        <!-- Header -->
        <div class="space-y-6">
          <h1 class="text-5xl md:text-7xl font-extrabold uppercase text-white tracking-tight">
            {{ taller.title }}
          </h1>
          <h2 class="text-2xl md:text-3xl text-gray-400 uppercase font-bold">{{ taller.subtitle }}</h2>
          
          <!-- Day Badge -->
          <span class="inline-block bg-brand-yellow text-black px-4 py-2 font-bold uppercase text-lg">
            {{ taller.day }}
          </span>
        </div>

        <!-- Info Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-700">
          <div>
            <p class="text-gray-500 text-xs uppercase font-bold mb-2">Horario</p>
            <p class="text-white text-lg font-semibold">{{ taller.horario }}</p>
          </div>
          <div>
            <p class="text-gray-500 text-xs uppercase font-bold mb-2">Duración</p>
            <p class="text-white text-lg font-semibold">{{ taller.duracion }}</p>
          </div>
          <div>
            <p class="text-gray-500 text-xs uppercase font-bold mb-2">Lugar</p>
            <p class="text-white text-lg font-semibold">{{ taller.lugar }}</p>
          </div>
          <div>
            <p class="text-gray-500 text-xs uppercase font-bold mb-2">Aforo</p>
            <p class="text-white text-lg font-semibold">{{ taller.aforo > 0 ? taller.aforo + ' personas' : 'Sin límite' }}</p>
          </div>
        </div>

        <!-- Descripción -->
        <div class="space-y-6">
          <h3 class="text-3xl font-bold uppercase text-white">Descripción</h3>
          <div class="text-gray-300 leading-relaxed text-lg space-y-4">
            <p v-for="(paragraph, idx) in taller.description.split('\n\n')" :key="idx" class="whitespace-pre-wrap">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <!-- Información sobre reservas -->
        <div class="bg-brand-purple/10 border border-brand-purple p-6 rounded-none">
          <p class="text-gray-300 text-lg">
            <span class="font-bold text-brand-yellow">Reservas:</span> Las reservas para acceder y participar en los talleres se gestionarán dentro del recinto 1h antes del comienzo de estos hasta completar aforo.
          </p>
        </div>

        <!-- Botón para volver a listado -->
        <div class="flex gap-4">
          <button 
            @click="goBack"
            class="px-6 py-4 bg-brand-yellow text-black font-bold uppercase hover:bg-white transition-colors"
          >
            Volver al listado de talleres
          </button>
        </div>
      </div>

      <div v-else class="text-center py-20">
        <h2 class="text-4xl font-bold text-gray-500 uppercase">Taller no encontrado</h2>
      </div>

    </div>
  </div>
</template>
