<script setup lang="ts">
import { ref } from 'vue'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ArrowRight, Play, ChevronDown } from 'lucide-vue-next'
import miniatura from '@/assets/miniatura.jpg'
import portada from '@/assets/portada.png'

import {
  carouselItems,
  diasFestival
} from '@/data/data'


// ============================================================================
// HOME DAY STRUCTURE
// ============================================================================


const isQuienesSomosOpen = ref(false)

// Control del reproductor de vídeo interactivo con estado de buffer de carga
const isVideoPlaying = ref(false)
const isVideoLoading = ref(false)
const youtubeVideoId = 'hJ5EbrW8G0w'

const playVideo = () => {
  isVideoLoading.value = true
  
  window.addEventListener('message', (event) => {
    if (event.origin !== 'https://www.youtube.com') return
    try {
      const data = JSON.parse(event.data)
      if (data.event === 'infoDelivery' && data.info && data.info.playerState === 1) {
        isVideoPlaying.value = true
      }
    } catch (e) {
      // Ignorar mensajes que no sean JSON estructurado de la API
    }
  })
}

</script>

<template>
  <div class="min-h-screen font-sans bg-[#111111] text-white pb-32 pt-12 overflow-x-hidden w-full">
    
<section class="relative w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden min-h-[60vh] md:min-h-0 md:aspect-[16/9] bg-cover md:bg-[length:100%_100%] bg-center bg-no-repeat" :style="{ backgroundImage: `url(${portada})` }">

  <div class="relative z-10 pt-50 pb-32 flex flex-col items-center justify-center">
    <router-link to="/entradas" class="bg-brand-yellow text-black font-bold text-xl md:text-2xl py-4 px-10 rounded-none uppercase transition-transform hover:scale-105 cursor-pointer inline-block text-center">
      Consigue tu entrada
    </router-link>
  </div>
</section>
    <section class="max-w-7xl mx-auto px-4 md:px-8 pt-40 pb-20 mb-5 w-full bg-[#111111]">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start relative">
        
        <svg 
          v-if="isQuienesSomosOpen" 
          class="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-20"
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="2" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#f2dd20" />
            </marker>
          </defs>
          <path 
            d="M 10 21 L 10 62 L 50 62 L 50 65"
            fill="none" 
            stroke="#f2dd20" 
            stroke-width="4" 
            stroke-linecap="square"
            vector-effect="non-scaling-stroke"
            class="arrow-path-draw"
            marker-end="url(#arrowhead)"
          />
        </svg>

        <div class="w-full md:col-span-1 relative z-30">
          <button 
            @click="isQuienesSomosOpen = !isQuienesSomosOpen"
            class="flex items-center justify-between w-full text-left font-sans2 font-regular text-white hover:text-brand-yellow transition-colors group cursor-pointer border-b-4 border-dashed border-neutral-800 pb-2"
          >
            <h2 class="text-4xl md:text-5xl lg:text-6xl leading-tight select-none">¿Quiénes somos?</h2>
            <ChevronDown 
              class="w-8 h-8 md:w-10 md:h-10 text-brand-yellow transition-transform duration-300 shrink-0" 
              :class="{ 'rotate-180': isQuienesSomosOpen }"
            />
          </button>
        </div>

        <div class="w-full md:col-span-2 relative z-10">
          <div class="w-full aspect-video bg-background relative border-4 border-black overflow-hidden">
            <div v-if="!isVideoPlaying" class="absolute inset-0 w-full h-full flex items-center justify-center z-10 bg-neutral-900 group">
              <img :src="miniatura" class="absolute inset-0 w-full h-full object-cover z-0" alt="Miniatura Esclat" />
              <div class="absolute inset-0 bg-background/40 z-0" />
              <button 
                v-if="!isVideoLoading"
                @click="playVideo"
                class="z-10 bg-brand-yellow text-white p-5 transition-all transform hover:scale-115 cursor-pointer rounded-full flex items-center justify-center "
              >
                <Play class="w-8 h-8 fill-white stroke-3 ml-1" /> 
              </button>
              <span v-else class="z-10 text-white font-sans tracking-wider animate-pulse">
                Cargando vídeo...
              </span>
            </div>

            <iframe
              v-if="isVideoLoading"
              @load="isVideoPlaying = true"
              class="w-full h-full absolute inset-0 z-0"
              :src="`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&modestbranding=1&rel=0&enablejsapi=1`"
              title="Esclat Festival Video Player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div 
          v-if="isQuienesSomosOpen" 
          class="w-full md:col-span-3 text-lg text-gray-200 space-y-6 leading-relaxed bg-[#1a1a1a] p-6 border-4 border-brand-yellow text-box-appear mt-8 relative z-10"
        >
          <p>
            ESCLAT es un festival que mezcla música, cultura y pensamiento crítico a través de la creatividad, la experimentación y la inclusión. Del 23 al 25 de octubre, Las Naves se convierten en un espacio donde distintas formas de expresión explotan y conviven, inspiradas en la idea del “estallido de la diversidad”.
          </p>
          <p>
            Buscamos conectar con un público joven y crear una experiencia cultural única. Apostamos por la diversidad, la innovación y la participación colectiva como parte esencial del festival.
          </p>
        </div>

      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-0 mb-5 w-full bg-[#111111]">
      <h2 class="text-5xl md:text-7xl font-sans2 font-regular text-center text-white mb-16">Prepárate para</h2>
      
      <div id="home-artistas" class="relative max-w-7xl mx-auto mb-16 grid gap-8 md:grid-cols-3 scroll-mt-24">
        <template v-for="dia in diasFestival" :key="dia.nombre">
          <div class="bg-background p-8 rounded-3xl min-h-[450px] text-left text-white">
            <h3 :class="`text-[50px] font-extrabold ${dia.color} leading-none`">{{ dia.nombre }}</h3>
            <div class="space-y-6 mt-12">
              <template v-for="artist in dia.artistas" :key="artist.slug">
                <router-link :to="`/programa/artistas/${artist.slug}`" class="block">
                  <span class="uppercase block text-3xl md:text-4xl font-regular transition-transform cursor-pointer hover:scale-140 hover:text-white">
                    {{ artist.name }}
                  </span>
                </router-link>
              </template>
            </div>
            <div class="space-y-6 mt-12">
              <template v-for="taller in dia.talleres" :key="taller.id">
                <router-link :to="`/programa/talleres/${taller.id}`" :class="`uppercase text-left text-white text-3xl md:text-4xl font-regular transition-colors block ${dia.hoverColor}`">
                  {{ taller.title }}
                </router-link>
              </template>
            </div>
          </div>
        </template>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 md:px-8 py-20 w-full bg-background">
      <h2 class="text-5xl md:text-7xl font-sans2 font-regular text-white  mb-16 text-center">No te lo pierdas</h2>
      
      <Carousel class="w-full max-w-6xl mx-auto px-12">
        <CarouselContent class="-ml-6 pb-12 pt-6">
          <CarouselItem v-for="item in carouselItems" :key="item.id" class="basis-full sm:basis-1/2 md:basis-1/3 pl-6">
            <template v-if="item.to">
              <router-link :to="item.to" :style="{ boxShadow: `0px 10px 0px 0px ${item.color}, 10px 0px 0px 0px ${item.color}, -10px 0px 0px 0px ${item.color}, 10px 10px 0px 0px ${item.color}, -10px 10px 0px 0px ${item.color}`, '--hover-color': item.color }" class="aspect-square w-[calc(100%-15px)] mx-auto bg-background text-white p-6 md:p-8 flex flex-col justify-between cursor-pointer hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 group">
                <h3 class="text-3xl md:text-4xl text-white font-bold uppercase leading-tight transition-colors duration-300 group-hover:text-[var(--hover-color)]">
                  {{ item.title }}
                </h3>
                <div class="flex justify-end mt-auto">
                  <div :style="{ backgroundColor: item.color, color: 'white' }" class="rounded-full p-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight class="w-6 h-6" />
                  </div>
                </div>
              </router-link>
            </template>
            <template v-else>
              <div 
                @click="item.action"
                :style="{ 
                  boxShadow: `0px 10px 0px 0px ${item.color}, 10px 0px 0px 0px ${item.color}, -10px 0px 0px 0px ${item.color}, 10px 10px 0px 0px ${item.color}, -10px 10px 0px 0px ${item.color}`,
                  '--hover-color': item.color 
                }"
                class="aspect-square w-[calc(100%-15px)] mx-auto bg-background p-6 md:p-8 flex flex-col justify-between cursor-pointer hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 group"
              >
                <h3 class="text-3xl md:text-4xl text-white font-bold uppercase leading-tight transition-colors duration-300 group-hover:text-[var(--hover-color)]">
                  {{ item.title }}
                </h3>
                <div class="flex justify-end mt-auto">
                  <div :style="{ backgroundColor: item.color, color: 'white' }" class="rounded-full p-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight class="w-6 h-6" />
                  </div>
                </div>
              </div>
            </template>

          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious class="left-0 border-white text-white hover:bg-white/10" />
        <CarouselNext class="right-0 border-white text-white hover:bg-white/10" />
      </Carousel>
    </section>

  </div>
</template>

<style scoped>
@keyframes drawStroke {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes boxFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(5px);
  }
}

/* Animación del trazo de la flecha */
.arrow-path-draw {
  stroke-dasharray: 900;
  stroke-dashoffset: 900;
  animation: drawStroke 0.75s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

/* Animación del bloque de texto que aparece tras completarse la flecha */
.text-box-appear {
  opacity: 0;
  transform: translateY(10px);
  animation: boxFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) 0.65s forwards;
}
</style>
