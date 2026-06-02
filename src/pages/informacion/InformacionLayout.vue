<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="w-full flex flex-col pt-10">
    <!-- Sub-navegación para Información -->
    <div class="flex flex-wrap gap-4 mb-8 justify-center border-b border-white/10 pb-4">
      <router-link 
        to="/informacion/normas" 
        class="px-4 py-2 rounded-full font-semibold transition-colors duration-200"
        :class="route.path === '/informacion/normas' ? 'bg-brand-yellow text-black' : 'text-gray-300 hover:bg-white/5'"
      >
        Normas
      </router-link>
      <router-link 
        to="/informacion/preguntas-frecuentes" 
        class="px-4 py-2 rounded-full font-semibold transition-colors duration-200"
        :class="route.path === '/informacion/preguntas-frecuentes' ? 'bg-brand-red text-black' : 'text-gray-300 hover:bg-white/5'"
      >
        Preguntas Frecuentes
      </router-link>
      <router-link 
        to="/informacion/recinto" 
        class="px-4 py-2 rounded-full font-semibold transition-colors duration-200"
        :class="route.path === '/informacion/recinto' ? 'bg-brand-blue text-black' : 'text-gray-300 hover:bg-white/5'"
      >
        Recinto
      </router-link>
    </div>

    <!-- Contenido anidado (Nested Route) -->
    <div class="flex-1 w-full relative">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
