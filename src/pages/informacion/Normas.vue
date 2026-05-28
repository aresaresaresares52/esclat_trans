<script setup lang="ts">
import { ref } from 'vue'
import { Shield, Info, FileText } from 'lucide-vue-next'
import { allowedItems, notAllowedItems, utilitySections, safetySections } from '@/data/data'

// Estado reactivo para controlar qué bloque está seleccionado (3 bloques ahora)
const bloqueActivo = ref<'normas' | 'util' | 'salud_seguridad'>('normas')

const cambiarBloque = (bloque: 'normas' | 'util' | 'salud_seguridad') => {
  bloqueActivo.value = bloque
}
</script>

<template>
  <div class="min-h-screen bg-black text-white font-sans relative">
    
    <div 
      class="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-brand-purple/40 to-black pointer-events-none"
    ></div>

    <div class="relative max-w-7xl mx-auto pt-24 pb-24 px-4 md:px-8">
      
      <header class="text-center mb-16">
        <h1 class="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
          Información <span class="text-brand-yellow">General</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Todo lo que necesitas saber sobre normas, seguridad y bienestar en ESCLAT.
        </p>
      </header>

      <nav class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        
        <button 
          @click="cambiarBloque('normas')"
          :class="[
            'border-2 px-4 py-10 text-center transition-all duration-300 uppercase font-black tracking-widest flex flex-col items-center justify-center gap-4',
            bloqueActivo === 'normas' 
              ? 'border-brand-yellow bg-brand-purple shadow-[0_0_25px_rgba(234,179,8,0.5)] text-brand-yellow scale-105 z-10' 
              : 'border-brand-yellow bg-black text-white hover:bg-brand-purple/20'
          ]"
        >
          <FileText :size="32" />
          <span class="text-sm md:text-base">Normas de Seguridad</span>
        </button>

        <button 
          @click="cambiarBloque('util')"
          :class="[
            'border-2 px-4 py-10 text-center transition-all duration-300 uppercase font-black tracking-widest flex flex-col items-center justify-center gap-4',
            bloqueActivo === 'util' 
              ? 'border-brand-yellow bg-brand-purple shadow-[0_0_25px_rgba(234,179,8,0.5)] text-brand-yellow scale-105 z-10' 
              : 'border-brand-yellow bg-black text-white hover:bg-brand-purple/20'
          ]"
        >
          <Info :size="32" />
          <span class="text-sm md:text-base">Información Útil</span>
        </button>

        <button 
          @click="cambiarBloque('salud_seguridad')"
          :class="[
            'border-2 px-4 py-10 text-center transition-all duration-300 uppercase font-black tracking-widest flex flex-col items-center justify-center gap-4',
            bloqueActivo === 'salud_seguridad' 
              ? 'border-brand-yellow bg-brand-purple shadow-[0_0_25px_rgba(234,179,8,0.5)] text-brand-yellow scale-105 z-10' 
              : 'border-brand-yellow bg-black text-white hover:bg-brand-purple/20'
          ]"
        >
          <Shield :size="32" />
          <span class="text-sm md:text-base">Salud y Seguridad</span>
        </button>

      </nav>

      <main class="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-md">
        
        <div v-if="bloqueActivo === 'normas'" class="animate-fadeIn space-y-8">
          <div>
            <h2 class="text-3xl font-black text-brand-yellow uppercase mb-6">NORMAS DE SEGURIDAD</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 class="text-xl font-bold text-brand-green uppercase mb-4 flex items-center gap-2">
                  <span>✓</span> OBJETOS PERMITIDOS
                </h3>
                <ul class="space-y-3 text-gray-300 text-lg">
                  <li v-for="(item, index) in allowedItems" :key="index" class="flex items-start gap-2">
                    <span class="text-brand-green font-bold">&gt;</span> {{ item.description }}
                  </li>
                </ul>
              </div>

              <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 class="text-xl font-bold text-red-500 uppercase mb-4 flex items-center gap-2">
                  <span>✕</span> OBJETOS NO PERMITIDOS
                </h3>
                <ul class="space-y-2 text-gray-300 text-base">
                  <li v-for="(item, index) in notAllowedItems" :key="index" class="flex items-start gap-2"><span class="text-red-500 font-bold">&gt;</span> {{ item.description }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div v-if="bloqueActivo === 'util'" class="animate-fadeIn space-y-10">
          <div v-for="(section, index) in utilitySections" :key="index">
            <h2 class="text-2xl font-black text-brand-yellow uppercase mb-4">{{ section.title }}</h2>
            <div class="space-y-3 text-gray-200 text-lg leading-relaxed">
              <p v-for="(paragraph, pIndex) in section.content" :key="pIndex">{{ paragraph }}</p>
            </div>
            <div v-if="index < utilitySections.length - 1" class="pt-6 border-t border-white/10"></div>
          </div>
        </div>

        <div v-if="bloqueActivo === 'salud_seguridad'" class="animate-fadeIn space-y-12">
          <div v-for="(section, index) in safetySections" :key="index">
            <h2 class="text-2xl font-black text-brand-yellow uppercase mb-4">{{ section.title }}</h2>
            <div class="space-y-4 text-gray-200 text-lg leading-relaxed">
              <p 
                v-for="(paragraph, pIndex) in section.content" 
                :key="pIndex"
                :class="section.title === 'POLÍTICA SOBRE DROGAS: TOLERANCIA CERO' && pIndex === section.content.length - 1 ? 'font-bold text-red-400' : ''"
              >
                {{ paragraph }}
              </p>
            </div>
            <div v-if="index < safetySections.length - 1" class="pt-6 border-t border-white/10"></div>
          </div>
        </div>

      </main>

    </div>
  </div>
</template>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>