<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ArrowDown, ArrowLeft, House } from 'lucide-vue-next'
import { computed } from 'vue'
import { getWorkshopById } from '@/data/data'

const route = useRoute()
const router = useRouter()

const tallerId = computed(() => route.params.id as string)
const taller = computed(() => getWorkshopById(tallerId.value))

const goBack = () => {
  router.push('/programa/talleres')
}

const goHome = () => {
  router.push({ path: '/', hash: '#home-talleres' })
}
</script>

<template>
  <div class="font-sans bg-background text-white">
    <div class="container mx-auto pt-8">
      
      <div class="flex items-center justify-between gap-4 mb-6">
        <button
          @click="goBack"
          class="flex items-center gap-2 text-brand-yellow hover:text-white mb-6 transition-colors font-bold uppercase"
        >
          <ArrowLeft :size="24" /> Volver a Talleres
        </button>

        <button
          @click="goHome"
          class="text-brand-yellow hover:text-white mb-6 transition-colors"
          aria-label="Ir al home"
          title="Ir al home"
        >
          <House :size="30" />
        </button>
      </div>

      <div v-if="taller" class="flex flex-col gap-12">
        <div class="flex flex-col md:flex-row gap-12 items-start">
          <div class="w-full md:w-1/2 aspect-square border-4 border-black overflow-hidden">
            <img :src="taller.img" :alt="taller.title" class="w-full h-full object-cover" />
          </div>

          <div class="relative w-full md:w-1/2 lg:self-stretch space-y-8">
            <div>
              <h1 class="text-5xl md:text-7xl font-extrabold uppercase text-brand-blue mb-2 tracking-tight">{{ taller.title }}</h1>
              <h2 class="text-2xl text-gray-400 uppercase font-bold">{{ taller.subtitle }}</h2>
            </div>

            <div class="flex items-center gap-3">
              <span class="bg-brand-yellow text-black px-4 py-1 font-bold uppercase text-sm border-2 border-black">
                {{ taller.day }}
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <p class="text-gray-500 text-xs uppercase font-bold mb-1">Horario</p>
                <p class="text-white text-lg font-semibold">{{ taller.horario }}</p>
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase font-bold mb-1">Duración</p>
                <p class="text-white text-lg font-semibold">{{ taller.duracion }}</p>
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase font-bold mb-1">Lugar</p>
                <p class="text-white text-lg font-semibold">{{ taller.lugar }}</p>
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase font-bold mb-1">Aforo</p>
                <p class="text-white text-lg font-semibold">{{ taller.aforo > 0 ? taller.aforo + ' personas' : 'Sin límite' }}</p>
              </div>
            </div>

            <div class="pointer-events-none absolute bottom-0 left-0 hidden text-brand-yellow lg:flex" aria-hidden="true">
              <ArrowDown :size="34" class="animate-bounce" />
            </div>
          </div>
        </div>

        <div class="w-full space-y-8">
          <div class="text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
            {{ taller.description }}
          </div>

          <div class="border border-brand-yellow p-6 rounded-none">
            <p class="text-gray-300 text-sm">
              <span class="font-regular text-brand-yellow">Reservas:</span> Las reservas para acceder y participar en los talleres se gestionarán dentro del recinto 1h antes del comienzo de estos hasta completar aforo.
            </p>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-20">
        <h2 class="text-4xl font-bold text-gray-500 uppercase">Taller no encontrado</h2>
      </div>

    </div>
  </div>
</template>
