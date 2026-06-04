<script setup lang="ts">
import { h } from 'vue'
import { Instagram, Youtube, Linkedin, Copyright } from 'lucide-vue-next'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import LogoHorizontal from '@/components/LogoHorizontal.vue'
import logoAjuntament from '@/assets/logoajuntament.png'
import logoCocacola from '@/assets/logococacola.png'
import logoDiputacio from '@/assets/logodiputacio.png'
import logoIvaj from '@/assets/logoivaj.png'
import logoTuria from '@/assets/logoturia.png'

const currentYear = new Date().getFullYear()

const SpotifyIcon = (props: { size?: number }) => h(
  'svg',
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 168 168',
    fill: 'currentColor',
    width: props.size || 16,
    height: props.size || 16
  },
  [
    h('path', {
      d: 'M84 0C37.57 0 0 37.57 0 84s37.57 84 84 84 84-37.57 84-84S130.43 0 84 0zm38.67 122.5c-1.2 1.8-3.5 2.4-5.2 1.2-14.3-8.9-32.3-10.9-53.5-6.1-2 .4-4.1-1-4.5-3.1-.5-2.2 1-4.1 3.1-4.5 23.7-4.6 44.3-2.2 60.7 6.7 1.8 1.1 2.3 3.5 1.2 5.2zm7.4-20.9c-1.5 2.3-4.6 3-6.8 1.6-16.5-10-41.6-12.9-61.1-7.2-2.6.8-5.4-.6-6.2-3.2-.8-2.6.6-5.4 3.2-6.2 22.3-6.8 50-3.4 69 8.5 2.4 1.5 3.2 4.7 1.9 7.5zm.2-21.7c-1.9 2.8-5.7 3.7-8.5 1.8-19.4-12-49.1-14.7-71.9-8.2-3 .9-6.2-.8-7.1-3.8-.9-3 .8-6.2 3.8-7.1 25.6-7.7 58.7-4.1 81.2 9.3 3 1.8 4 5.7 1.5 8z'
    })
  ]
)

const partnerLogos = [
  { src: logoAjuntament, alt: 'Ajuntament' },
  { src: logoCocacola, alt: 'Coca-Cola' },
  { src: logoDiputacio, alt: 'Diputació' },
  { src: logoIvaj, alt: 'IVAJ' },
  { src: logoTuria, alt: 'Turia' }
]

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Spotify', icon: SpotifyIcon, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' }
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
      <div class="flex flex-wrap items-center justify-between gap-6 w-full text-center md:text-left">
        <LogoHorizontal class="h-8 w-auto shrink-0" />
        <img
          v-for="logo in partnerLogos"
          :key="logo.alt"
          :src="logo.src"
          :alt="logo.alt"
          :class="logo.alt === 'Turia' ? 'h-11 w-auto shrink-0' : 
                    logo.alt === 'Ajuntament' ? 'h-9 w-auto shrink-0' : 'h-8 w-auto shrink-0'"
        />
      </div>

      <!-- Línea separadora -->
      <div class="my-6 border-t border-white/5"></div>

      <!-- Parte inferior -->
      <div class="flex flex-col gap-4 text-[11px] text-white/45 items-center justify-center md:flex-row md:items-center md:justify-between">
        <div class="flex items-center gap-2 md:shrink-0">
          <Copyright :size="13" />
          <span class="uppercase tracking-widest">Esclat</span>
          <span>{{ currentYear }}</span>
        </div>

        <div class="flex items-center justify-center gap-4 md:ml-6">
          <Tooltip v-for="link in socialLinks" :key="link.name">
            <TooltipTrigger as-child>
              <a
                :href="link.href"
                class="text-white/50 transition-all hover:text-brand hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="link.name"
              >
                <component :is="link.icon" :size="16" />
              </a>
            </TooltipTrigger>
            <TooltipContent
              class="border border-white/50 bg-background text-[10px] font-light tracking-widest text-white/80"
            >
              <p>{{ link.name }}</p>
            </TooltipContent>
          </Tooltip>
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