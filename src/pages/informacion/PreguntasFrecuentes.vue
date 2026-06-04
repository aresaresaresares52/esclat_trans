<script setup lang="ts">
import { ref } from 'vue'
import { FileText, Utensils, HelpCircle } from 'lucide-vue-next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqEntradas, faqComidaBebida, faqUtil } from '@/data/data'

const bloqueActivo = ref<'entradas' | 'comida_bebida' | 'util'>('entradas')

const cambiarBloque = (bloque: 'entradas' | 'comida_bebida' | 'util') => {
  bloqueActivo.value = bloque
}
</script>

<template>
  <div class="min-h-screen bg-background text-white font-sans relative">
    
    <div 
      class="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-brand-purple/40 via-brand-purple/10 to-background pointer-events-none"
    ></div>

    <div class="relative max-w-6xl mx-auto pt-28 pb-28 px-6 md:px-0">
      
      <header class="text-center mb-20">
        <h1 class="text-5xl md:text-7xl font-sans2 font-medium  tracking-tighter text-white mb-4">
          Preguntas frecuentes
        </h1>
        <p class="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
          Resolvemos todas tus dudas acerca de ESCLAT.
        </p>
      </header>

      <nav class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        
        <button 
          @click="cambiarBloque('entradas')"
          :class="[
            'border-2 px-6 py-12 text-center transition-all duration-300 uppercase font-bold  flex flex-col items-center justify-center gap-5',
            bloqueActivo === 'entradas' 
              ? 'border-brand-yellow bg-brand-purple/80 text-brand-yellow scale-105 z-10' 
              : 'border-brand-yellow bg-background text-white hover:bg-brand-purple/20'
          ]"
        >
          <FileText :size="40" />
          <span class="text-base md:text-xl">Sobre las Entradas</span>
        </button>

        <button 
          @click="cambiarBloque('comida_bebida')"
          :class="[
            'border-2 px-6 py-12 text-center transition-all duration-300 uppercase font-bold  flex flex-col items-center justify-center gap-5',
            bloqueActivo === 'comida_bebida' 
              ? 'border-brand-yellow bg-brand-purple/80 text-brand-yellow scale-105 z-10' 
              : 'border-brand-yellow bg-background text-white hover:bg-brand-purple/20'
          ]"
        >
          <Utensils :size="40" />
          <span class="text-base md:text-xl">Comida y Bebida</span>
        </button>

        <button 
          @click="cambiarBloque('util')"
          :class="[
            'border-2 px-6 py-12 text-center transition-all duration-300 uppercase font-bold flex flex-col items-center justify-center gap-5',
            bloqueActivo === 'util' 
              ? 'border-brand-yellow bg-brand-purple/80 text-brand-yellow scale-105 z-10' 
              : 'border-brand-yellow bg-background text-white hover:bg-brand-purple/20'
          ]"
        >
          <HelpCircle :size="40" />
          <span class="text-base md:text-xl">Información Útil</span>
        </button>

      </nav>

      <main class="bg-white/3 border border-white/10 p-8 md:p-14 rounded-2xl backdrop-blur-md">
        
        <div v-if="bloqueActivo === 'entradas'" class="animate-fadeIn space-y-6">
          <Accordion type="single" collapsible class="w-full space-y-6">
            <AccordionItem v-for="(item, index) in faqEntradas" :key="index" :value="'item-' + index">
              <AccordionTrigger class="text-xl font-semibold text-brand-yellow uppercase hover:text-brand-yellow/80 transition-colors text-left">
                {{ item.question }}
              </AccordionTrigger>
              <AccordionContent class="text-gray-300 text-lg leading-relaxed pt-2">
                <p style="white-space: pre-wrap;">{{ item.answer }}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div v-if="bloqueActivo === 'comida_bebida'" class="animate-fadeIn space-y-6">
          <Accordion type="single" collapsible class="w-full space-y-8">
            <AccordionItem v-for="(item, index) in faqComidaBebida" :key="index" :value="'item-' + index">
              <AccordionTrigger class="text-xl font-extrabold text-brand-yellow uppercase hover:text-brand-yellow/80 transition-colors text-left">
                {{ item.question }}
              </AccordionTrigger>
              <AccordionContent class="text-gray-300 text-lg leading-relaxed pt-2">
                <p style="white-space: pre-wrap;">{{ item.answer }}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div v-if="bloqueActivo === 'util'" class="animate-fadeIn space-y-6">
          <Accordion type="single" collapsible class="w-full space-y-8">
            <AccordionItem v-for="(item, index) in faqUtil" :key="index" :value="'item-' + index">
              <AccordionTrigger class="text-xl font-extrabold text-brand-yellow uppercase hover:text-brand-yellow/80 transition-colors text-left">
                {{ item.question }}
              </AccordionTrigger>
              <AccordionContent class="text-gray-300 text-lg leading-relaxed pt-2">
                <p style="white-space: pre-wrap;">{{ item.answer }}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </main>

      <div class="mt-24 bg-background border-4 border-dashed border-neutral-700 p-8 text-center flex flex-col items-center justify-center gap-2">
        <p class="text-sm tracking-wider text-gray-400">¿Sigues teniendo dudas?</p>
        <a href="mailto:esclatproblemas@gmail.com" class="inline-flex items-center gap-2 text-xl font-bold text-brand-blue uppercase hover:underline">
          esclatproblemas@gmail.com
        </a>
      </div>

    </div>
  </div>
</template>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.4s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>