<script setup lang="ts">
import { Info, HelpCircle, Map as MapIcon } from 'lucide-vue-next'
import { basicRules, faqs } from '@/data/data'
</script>

<template>
  <div class="min-h-screen pt-20 pb-24 px-4 md:px-8 max-w-5xl mx-auto font-sans">
    <h1 class="text-4xl md:text-6xl font-extrabold text-brand-green mb-8 uppercase tracking-tight">Información</h1>
    
    <div class="space-y-16">
      <section>
        <h2 class="text-2xl font-bold text-brand-blue mb-6 flex items-center gap-2">
          <Info class="text-brand-blue" /> Normas del Recinto
        </h2>
        <div class="bg-white/5 border border-white/10 rounded-xl p-6">
          <ul class="list-disc list-inside space-y-3 text-gray-300">
            <li v-for="(rule, index) in basicRules" :key="index">{{ rule.text }}</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-brand-yellow mb-6 flex items-center gap-2">
          <HelpCircle class="text-brand-yellow" /> Preguntas Frecuentes
        </h2>
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 class="font-bold text-white mb-2">{{ faq.question }}</h3>
            <p class="text-gray-400">{{ faq.answer }}</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-brand-purple mb-6 flex items-center gap-2">
          <MapIcon class="text-brand-purple" /> Mapa del Recinto
        </h2>
        <div class="bg-white/5 border border-white/10 rounded-xl p-8 flex items-center justify-center min-h-[300px]">
          <div class="text-center">
            <MapIcon :size="48" class="text-gray-500 mx-auto mb-4" />
            <p class="text-gray-400 font-medium">Plano del recinto en preparación</p>
            <p class="text-gray-500 text-sm mt-2">Estará disponible unos días antes del evento.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
