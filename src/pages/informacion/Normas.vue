<script setup lang="ts">
import { computed } from 'vue'
import { AlertTriangle, Mail} from 'lucide-vue-next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { normasSeguridadSections } from '@/data'

const defaultOpenSections = computed(() => normasSeguridadSections.map(section => section.id))


</script>

<template>
  <div class="font-sans bg-[#111111] text-white">
    <div class="text-center mb-16 px-4">
      <h1 class="text-5xl md:text-7xl font-sans2 font-medium text-white">
        Normas y <span class="text-brand-yellow">seguridad</span>
      </h1>
    </div>

    <div class="max-w-4xl mx-auto px-4 md:px-0">
      <Accordion type="multiple" :default-value="defaultOpenSections" class="w-full space-y-12">
        <AccordionItem
          v-for="section in normasSeguridadSections"
          :key="section.id"
          :value="section.id"
          class="transition-all border-b-0"
          :class="section.itemClass"
        >
          <AccordionTrigger class="p-5 bg-brand-yellow text-black hover:no-underline flex items-center justify-between [&_svg]:stroke-3">
            <div class="flex items-center gap-3 text-xl md:text-2xl font-bold uppercase tracking-tight text-black">
              <span>{{ section.title }}</span>
            </div>
          </AccordionTrigger>

          <AccordionContent class="p-6 text-gray-300 space-y-4" :class="section.contentClass">
            <Accordion type="single" collapsible class="w-full space-y-4">
              <AccordionItem
                v-for="subsection in section.subsections"
                :key="subsection.id"
                :value="subsection.id"
                class="bg-[#222] border-b-0"
              >
                <AccordionTrigger class="p-4 text-left font-medium uppercase text-white hover:no-underline text-base [&_svg]:text-brand-yellow">
                  {{ subsection.title }}
                </AccordionTrigger>

                <AccordionContent class="p-4 bg-[#1a1a1a] border-t border-black text-lg leading-relaxed text-gray-300">
                  <div v-if="subsection.allowedItems || subsection.notAllowedItems" class="space-y-6">
                    <div v-if="subsection.allowedItems">
                      <h3 class="font-bold text-brand-green uppercase mb-3 text-xl">Objetos permitidos</h3>
                      <ul class="space-y-2">
                        <li v-for="item in subsection.allowedItems" :key="item">
                          > {{ item }}
                        </li>
                      </ul>
                    </div>

                    <div v-if="subsection.notAllowedItems" class="pt-4 border-t border-white/10">
                      <h3 class="font-bold text-red-500 uppercase mb-3 text-xl">Objetos no permitidos</h3>
                      <ul class="space-y-1.5">
                        <li v-for="item in subsection.notAllowedItems" :key="item">
                          > {{ item }}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <template v-else>
                    <p v-if="subsection.highlight" class="font-bold text-red-400 uppercase mb-2">
                      {{ subsection.highlight }}
                    </p>
                    <p v-for="paragraph in subsection.content" :key="paragraph">
                      {{ paragraph }}
                    </p>
                  </template>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div class="mt-16 bg-[#111] border-3 border-dashed border-neutral-700 p-4 text-center flex flex-col items-center justify-center gap-2">
        <AlertTriangle class="w-6 h-6 text-brand-yellow stroke-[1.5]" />
        <p class="text-lg tracking-wider text-gray-400">¿Sigues teniendo dudas sobre la normativa?</p>
        <a href="mailto:esclatproblemas@gmail.com" class="inline-flex items-center gap-2 text-lg font-medium text-brand-blue hover:underline">
          <Mail class="w-5 h-5 stroke-[2.5]" /> esclatproblemas@gmail.com
        </a>
      </div>
    </div>
  </div>
</template>
