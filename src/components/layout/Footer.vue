<script setup lang="ts">
import { Github, Twitter, Linkedin, Instagram, Copyright } from 'lucide-vue-next'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import LogoHorizontal from '@/components/LogoHorizontal.vue'

const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' }
]

const legalLinks = [
  { name: 'Política de privacidad', href: '#' },
  { name: 'Política de cookies', href: '#' },
  { name: 'Aviso legal', href: '#' },
  { name: 'Términos de uso', href: '#' }
]
</script>

<template>
  <footer class="border-t border-white/5 bg-background">
    <div class="container mx-auto px-4 py-8">
      <!-- Parte superior -->
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <LogoHorizontal class="h-8 w-auto shrink-0 md:flex-shrink-0" />

        <p class="text-sm md:text-md font-light text-center text-white/80 flex-1 px-4">
          Ven como eres, participa como quieras.
        </p>

        <div class="flex items-center justify-center gap-5 md:flex-shrink-0">
          <Tooltip v-for="link in socialLinks" :key="link.name">
            <TooltipTrigger as-child>
              <a
                :href="link.href"
                class="text-white/50 transition-all hover:text-brand hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="link.name"
              >
                <component :is="link.icon" :size="20" />
              </a>
            </TooltipTrigger>
            <TooltipContent
              class="border border-[#00FF00] bg-background text-[10px] font-bold uppercase tracking-widest text-white"
            >
              <p>{{ link.name }}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <!-- Línea separadora -->
      <div class="my-6 border-t border-white/5"></div>

      <!-- Parte inferior -->
      <div class="flex flex-col gap-4 text-[11px] text-white/45 md:flex-row md:items-center md:justify-between">
        <div class="flex items-center gap-2 md:flex-shrink-0">
          <Copyright :size="13" />
          <span class="uppercase tracking-widest">Esclat</span>
          <span>{{ currentYear }}</span>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end flex-1 md:flex-1">
          <a
            v-for="link in legalLinks"
            :key="link.name"
            :href="link.href"
            class="transition-colors hover:text-white/75 text-center"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>