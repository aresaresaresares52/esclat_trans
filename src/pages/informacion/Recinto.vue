<script setup lang="ts">
import maparriba from '@/assets/maparriba.jpg'
import mapabajo from '@/assets/mapabajo.jpg'

import { recintoIndicaciones as indicaciones } from '@/data/data'
</script>

<template>
  <div class="min-h-screen max-w-6xl mx-auto text-white">
    <div class="space-y-10">
      <h1 class="text-5xl md:text-7xl font-sans2 font-medium text-brand-blue">Mapa del recinto</h1>

      <div class="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] items-start">
        <!-- Columna izquierda -->
        <div class="space-y-10">
          <div class="space-y-4">
            <h2 class="text-2xl font-bold uppercase">Planta baja</h2>
            <img
              :src="mapabajo"
              alt="Mapa planta baja del recinto ESCLAT"
              class="w-[calc(100%-80px)] max-w-full object-contain rounded-xl"
            />
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-bold uppercase">Primera planta</h2>
            <img
              :src="maparriba"
              alt="Mapa primera planta del recinto ESCLAT"
              class="w-[calc(100%-80px)] max-w-full object-contain rounded-xl"
            />
          </div>
        </div>

        <!-- Columna derecha -->
        <ol class="mt-50 space-y-5 text-lg md:text-xl">
          <li
            v-for="(indicacion, index) in indicaciones"
            :key="indicacion"
            class="flex items-center gap-4 border-l-4 border-brand-blue bg-white/5 px-4 py-3"
          >
            <span class="text-brand-blue">{{ index + 1 }}.</span>
            <span>{{ indicacion }}</span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>