<script setup lang="ts">
import { Github, Twitter, Linkedin, Instagram } from 'lucide-vue-next'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' }
]
</script>

<template>
  <footer class="bg-black border-t border-white/5 py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="hidden md:block">
          <h2 class="text-xl font-serif font-extrabold uppercase mb-2">ESC<span class="text-[#16a0db]">LAT</span></h2>
          <p class="text-white/40 text-sm font-light">Festival de Música Independiente.</p>
        </div>

        <div class="hidden md:flex items-center gap-6">
          <Tooltip v-for="link in socialLinks" :key="link.name">
            <TooltipTrigger as-child>
              <a 
                :href="link.href"
                class="text-white/40 hover:text-brand transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="link.name"
              >
                <component :is="link.icon" :size="20" />
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-black border-[#00FF00] text-white text-[10px] uppercase tracking-widest font-bold">
              <p>{{ link.name }}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-white/5 text-center text-xs text-white/40 tracking-widest font-serif font-normal">
        <p class="mb-2">Festival Esclat. Promoviendo la cultura independiente.</p>
        <p>&copy; {{ currentYear }} Todos los derechos reservados.</p>
      </div>
    
    </div>
  </footer>
</template>
