<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { 
  Menu,
  X,
  ChevronDown
} from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import logoHorizontal from '@/assets/logoHorizontal.png'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Para determinar si una ruta está activa
const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 h-[54px] bg-black z-50 border-b border-white/10">
    <div class="container mx-auto h-full flex items-center justify-between px-4 md:px-6">
      <div class="flex items-center">
        <router-link to="/" class="outline-none">
          <img :src="logoHorizontal" alt="Esclat Logo" class="h-5 md:h-6 object-contain transition-all duration-300 hover:scale-105" />
        </router-link>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-0 h-full">
        <router-link 
          to="/"
          class="h-full flex items-center justify-center px-4 text-[13px] font-bold uppercase transition-all duration-300 ease-in-out border-x border-white/5 -ml-[1px]"
          :class="isActive('/') ? 'bg-black text-brand-blue' : 'bg-black text-white hover:text-brand-yellow hover:-translate-y-0.5'"
        >
          Home
        </router-link>
        
        <router-link 
          to="/entradas"
          class="h-full flex items-center justify-center px-4 text-[13px] font-bold uppercase transition-all duration-300 ease-in-out border-r border-white/5"
          :class="isActive('/entradas') ? 'bg-black text-brand-blue' : 'bg-black text-white hover:text-brand-yellow hover:-translate-y-0.5'"
        >
          Entradas
        </router-link>

        <!-- Dropdown Programa -->
        <div class="h-full group relative border-r border-white/5">
          <button 
            class="h-full flex items-center justify-center px-4 text-[13px] font-bold uppercase transition-all duration-300 ease-in-out outline-none"
            :class="isActive('/programa') ? 'bg-black text-brand-blue' : 'bg-black text-white group-hover:text-brand-yellow'"
          >
            Programa
            <ChevronDown class="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
          </button>
          
          <!-- Menu flotante -->
          <div class="absolute top-full left-0 hidden group-hover:flex flex-col bg-black border border-white/10 min-w-[150px] shadow-lg">
            <router-link to="/programa/artistas" class="px-4 py-3 text-[13px] font-bold uppercase text-white hover:text-brand-blue hover:bg-white/5 border-b border-white/5">Artistas</router-link>
            <router-link to="/programa/talleres" class="px-4 py-3 text-[13px] font-bold uppercase text-white hover:text-brand-blue hover:bg-white/5 border-b border-white/5">Talleres</router-link>
            <router-link to="/programa/horarios" class="px-4 py-3 text-[13px] font-bold uppercase text-white hover:text-brand-blue hover:bg-white/5">Horarios</router-link>
          </div>
        </div>

        <router-link 
          to="/como-llegar"
          class="h-full flex items-center justify-center px-4 text-[13px] font-bold uppercase transition-all duration-300 ease-in-out border-r border-white/5"
          :class="isActive('/como-llegar') ? 'bg-black text-brand-blue' : 'bg-black text-white hover:text-brand-yellow hover:-translate-y-0.5'"
        >
          Cómo llegar
        </router-link>

        <!-- Dropdown Información -->
        <div class="h-full group relative border-r border-white/5">
          <button 
            class="h-full flex items-center justify-center px-4 text-[13px] font-bold uppercase transition-all duration-300 ease-in-out outline-none"
            :class="isActive('/informacion') ? 'bg-black text-brand-blue' : 'bg-black text-white group-hover:text-brand-yellow'"
          >
            Información
            <ChevronDown class="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
          </button>
          
          <!-- Menu flotante -->
          <div class="absolute top-full right-0 hidden group-hover:flex flex-col bg-black border border-white/10 min-w-[200px] shadow-lg">
            <router-link to="/informacion/normas" class="px-4 py-3 text-[13px] font-bold uppercase text-white hover:text-brand-blue hover:bg-white/5 border-b border-white/5">Normas</router-link>
            <router-link to="/informacion/preguntas-frecuentes" class="px-4 py-3 text-[13px] font-bold uppercase text-white hover:text-brand-blue hover:bg-white/5 border-b border-white/5">Preguntas Frecuentes</router-link>
            <router-link to="/informacion/recinto" class="px-4 py-3 text-[13px] font-bold uppercase text-white hover:text-brand-blue hover:bg-white/5">Recinto</router-link>
          </div>
        </div>
      </nav>

      <!-- Mobile Nav Trigger -->
      <div class="lg:hidden flex items-center">
        <Button
          variant="ghost"
          size="icon"
          @click="toggleMobileMenu"
          class="text-white hover:bg-white/10 hover:text-brand-yellow"
        >
          <Menu v-if="!isMobileMenuOpen" :size="24" />
          <X v-else :size="24" />
        </Button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div v-if="isMobileMenuOpen" class="lg:hidden fixed inset-0 bg-black z-[60] flex flex-col pt-24 px-8 overflow-y-auto">
        <button @click="isMobileMenuOpen = false" class="absolute top-5 right-5 text-white p-2">
            <X :size="32" />
        </button>
        <div class="flex flex-col gap-2 pb-8">
            <router-link to="/" @click="isMobileMenuOpen = false" class="px-4 py-4 text-[20px] font-sans uppercase text-white hover:text-brand-yellow">Home</router-link>
            <router-link to="/entradas" @click="isMobileMenuOpen = false" class="px-4 py-4 text-[20px] font-sans uppercase text-white hover:text-brand-yellow">Entradas</router-link>

            <div class="px-4 py-4 text-[20px] font-sans uppercase text-brand-blue border-b border-white/10">Programa</div>
            <router-link to="/programa/artistas" @click="isMobileMenuOpen = false" class="px-8 py-3 text-[16px] font-sans uppercase text-gray-300 hover:text-white">Artistas</router-link>
            <router-link to="/programa/talleres" @click="isMobileMenuOpen = false" class="px-8 py-3 text-[16px] font-sans uppercase text-gray-300 hover:text-white">Talleres</router-link>
            <router-link to="/programa/horarios" @click="isMobileMenuOpen = false" class="px-8 py-3 text-[16px] font-sans uppercase text-gray-300 hover:text-white">Horarios</router-link>

            <router-link to="/como-llegar" @click="isMobileMenuOpen = false" class="px-4 py-4 text-[20px] font-sans uppercase text-white hover:text-brand-yellow">Cómo llegar</router-link>

            <div class="px-4 py-4 text-[20px] font-sans uppercase text-brand-blue border-b border-white/10">Información</div>
            <router-link to="/informacion/normas" @click="isMobileMenuOpen = false" class="px-8 py-3 text-[16px] font-sans uppercase text-gray-300 hover:text-white">Normas</router-link>
            <router-link to="/informacion/preguntas-frecuentes" @click="isMobileMenuOpen = false" class="px-8 py-3 text-[16px] font-sans uppercase text-gray-300 hover:text-white">Preguntas Frecuentes</router-link>
            <router-link to="/informacion/recinto" @click="isMobileMenuOpen = false" class="px-8 py-3 text-[16px] font-sans uppercase text-gray-300 hover:text-white">Recinto</router-link>
        </div>
      </div>
    </transition>
  </header>
</template>