<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import 'vue-sonner/style.css'
</script>

<template>
  <TooltipProvider>
    <div class="min-h-screen flex flex-col bg-background text-foreground">
      <Toaster position="top-center" expand richColors theme="dark" />

      <Header />

      <main 
        :class="[
          'flex-1 transition-all duration-300', 
          $route.meta.fullWidth 
            ? 'w-full' 
            : 'w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 md:pt-26 pb-20'
        ]"
      >
        <router-view v-slot="{ Component }">
          <transition 
            name="fade" 
            mode="out-in"
          >
            <div class="w-full h-full">
              <component :is="Component" />
            </div>
          </transition>
        </router-view>
      </main>

      <Footer />
    </div>
  </TooltipProvider>
</template>

<style scoped>
:global(html) {
  scrollbar-width: none;
}

:global(html::-webkit-scrollbar) {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
