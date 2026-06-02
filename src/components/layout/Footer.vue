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
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:gap-6">
          <LogoHorizontal class="h-8 w-auto shrink-0" />

          <p class="text-sm font-light text-white/60">
            ven como eres, participa como quieras
          </p>
        </div>

        <div class="flex items-center gap-5">
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
      <div class="flex items-center gap-3 text-[11px] text-white/45 md:justify-start ">
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            v-for="link in legalLinks"
            :key="link.name"
            :href="link.href"
            class="transition-colors hover:text-white/75"
          >
            {{ link.name }}
          </a>
        </div>

        <div class="flex flex-col justify-start gap-2 md:flex-row md:items-center md:justify-between">
          <Copyright :size="13" />
          <span class="uppercase tracking-widest">Esclat</span>
          <span>{{ currentYear }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>