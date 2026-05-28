<script setup lang="ts">
import { artists, specialEvents, programSchedule } from '@/data/data'
</script>

<template>
  <div class="min-h-screen pt-20 pb-24 px-4 md:px-8 max-w-5xl mx-auto font-sans">
    <h1 class="text-4xl md:text-6xl font-extrabold text-brand-purple mb-8 uppercase tracking-tight">Programa</h1>
    
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-brand-blue mb-6">Artistas</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="artist in artists" :key="artist.id" class="bg-white/5 aspect-square rounded-lg flex items-center justify-center border border-white/10 hover:border-brand-purple transition-colors cursor-pointer">
          <span class="text-gray-400 font-bold text-center text-sm">{{ artist.name }}</span>
        </div>
      </div>
    </section>

    <section class="mb-16">
      <h2 class="text-2xl font-bold text-brand-yellow mb-6">Eventos Especiales</h2>
      <div class="space-y-4">
        <div v-for="event in specialEvents" :key="event.title" :class="`p-6 bg-white/5 border-l-4 rounded-r-lg border-brand-${event.color}`">
          <h3 class="text-xl font-bold text-white mb-2">{{ event.title }}</h3>
          <p class="text-gray-400">{{ event.description }}</p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-brand-green mb-6">Programación por Días</h2>
      
      <div class="space-y-8">
        <div v-for="day in programSchedule" :key="day.date" class="space-y-6">
          <h3 :class="`text-xl font-bold text-white mb-4 flex items-center gap-2 bg-brand-${day.color} text-black px-3 py-1 rounded w-fit`">
            <span class="px-3 py-1">{{ day.date }}</span> {{ day.dayLabel }}
          </h3>
          <div class="pl-4 border-l-2 border-white/10 space-y-4">
            <div v-for="event in day.events" :key="event.time">
              <p :class="`text-brand-${day.color} font-bold`">{{ event.time }}</p>
              <p class="text-gray-300">{{ event.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
