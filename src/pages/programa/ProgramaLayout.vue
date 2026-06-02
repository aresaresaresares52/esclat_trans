<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="w-full flex flex-col pt-10">
    <!-- Sub-navegación para Programa -->
    <div class="flex flex-wrap gap-4 mb-8 justify-center border-b border-white/10 pb-4">
      <router-link 
        to="/programa/artistas" 
        class="px-4 py-2 rounded-full font-semibold transition-colors duration-200"
        :class="route.path.includes('/programa/artistas') ? 'bg-brand-blue text-black' : 'text-gray-300 hover:bg-white/5'"
      >
        Artistas
      </router-link>
      <router-link 
        to="/programa/talleres" 
        class="px-4 py-2 rounded-full font-semibold transition-colors duration-200"
        :class="route.path.includes('/programa/talleres') ? 'bg-brand-purple text-black' : 'text-gray-300 hover:bg-white/5'"
      >
        Talleres
      </router-link>
      <router-link 
        to="/programa/horarios" 
        class="px-4 py-2 rounded-full font-semibold transition-colors duration-200"
        :class="route.path === '/programa/horarios' ? 'bg-brand-green text-black' : 'text-gray-300 hover:bg-white/5'"
      >
        Horarios
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
