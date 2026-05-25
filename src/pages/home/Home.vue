<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ArrowRight } from 'lucide-vue-next'
import logoHorizontal from '@/assets/logoHorizontal.png'

const router = useRouter()

const navigateToEntradas = () => {
  router.push('/entradas')
}

// Array de artistas con su slug para la URL y el nivel de tamaño
const artistas = [
  { name: 'Repion', slug: 'repion', size: 'text-6xl md:text-7xl mb-4', breakAfter: true },
  { name: 'Bum Motion Club', slug: 'bum-motion-club', size: 'text-5xl md:text-6xl' },
  { name: 'Diamante Negro', slug: 'diamante-negro', size: 'text-5xl md:text-6xl', breakAfter: true },
  
  { name: 'Garbi', slug: 'garbi', size: 'text-3xl md:text-[45px] mt-2' },
  { name: 'Nuevos Vicios', slug: 'nuevos-vicios', size: 'text-3xl md:text-[45px] mt-2', breakAfter: true },
  
  { name: 'TranquiloRayo', slug: 'tranquilorayo', size: 'text-lg md:text-3xl mt-3' },
  { name: 'Luna Valle', slug: 'luna-valle', size: 'text-lg md:text-3xl mt-3' },
  { name: 'Mr.Kennedy', slug: 'mr-kennedy', size: 'text-lg md:text-3xl mt-3' }
]

const talleres = [
  { title: 'Charla sobre la vivienda', id: 'charla-vivienda' },
  { title: 'Mercadillo', id: 'mercadillo' },
  { title: 'Taller de Japonés', id: 'shodo' },
  { title: 'Competición de videojuegos', id: 'nostalgia-juego' },
  { title: 'Debate sobre arte', id: 'charla-arte' },
  { title: 'Performance Drag', id: 'ultra-show' }
]

const navigateToTaller = (tallerId: string) => {
  router.push(`/programa/talleres/${tallerId}`)
}

const noTeLopierdas = [
  {
    id: 'artistas',
    title: 'Descubre más de nuestros artistas',
    color: '#16a0db',
    action: () => router.push('/programa/artistas')
  },
  {
    id: 'talleres',
    title: 'Apúntate a nuestros talleres',
    color: '#7b4a9d',
    action: () => router.push('/programa/talleres')
  },
  {
    id: 'informacion',
    title: 'Accede a información útil',
    color: '#15a64b',
    action: () => router.push('/informacion/preguntas-frecuentes')
  },
  {
    id: 'playlist',
    title: 'Descubre nuestra playlist',
    color: '#fff200',
    action: () => window.open('https://open.spotify.com/playlist/2u7BSywQFZc1RFYALxf4bw', '_blank')
  }
]
</script>

<template>
  <div class="min-h-screen font-sans bg-black text-white pb-32 overflow-x-hidden">
    
    <section class="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative mb-20">
      <img :src="logoHorizontal" alt="Esclat Logo" class="w-72 sm:w-96 md:w-[450px] lg:w-[550px] object-contain mb-8 max-w-full" />
      <p class="text-lg md:text-2xl text-gray-200 mb-10 font-medium">
        Festival de Música, Cultura y Pensamiento Crítico
      </p>
      <button 
        @click="navigateToEntradas"
        class="bg-[#fff200] text-black font-extrabold text-xl md:text-2xl py-4 px-10 rounded-none uppercase transition-transform hover:scale-105 shadow-[8px_8px_0_0_#7b4a9d] hover:shadow-[4px_4px_0_0_#7b4a9d] cursor-pointer"
      >
        Consigue tu entrada
      </button>
    </section>

    <section class="container mx-auto px-4 md:px-8 py-32 mb-32">
      <div class="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <div class="w-full md:w-1/3">
          <h2 class="text-4xl md:text-6xl font-bold uppercase text-white">¿Quiénes somos?</h2>
        </div>
        <div class="w-full md:w-2/3 text-lg md:text-xl text-gray-300 space-y-6 leading-relaxed">
          <p>
            ESCLAT es un festival que mezcla música, cultura y pensamiento crítico a través de la creatividad, la experimentación y la inclusión. Del 23 al 25 de octubre, Las Naves se convierten en un espacio donde distintas formas de expresión explotan y conviven, inspiradas en la idea del “estallido de la diversidad”.
          </p>
          <p>
            Buscamos conectar con un público joven y crear una experiencia cultural única. Apostamos por la diversidad, la innovación y la participación colectiva como parte esencial del festival.
          </p>
          <p class="font-bold text-white text-2xl">
            ¡Te esperamos!
          </p>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 md:px-8 py-20 mb-20">
      <h2 class="text-5xl md:text-7xl font-bold text-center text-[#fff200] uppercase mb-16">Prepárate para</h2>
      
      <div class="max-w-5xl mx-auto bg-[#16a0db] p-6 md:p-12 mb-16 shadow-[16px_16px_0_0_#fff200] transform -rotate-1 min-h-[450px] flex items-center justify-center">
        <div class="text-black font-extrabold uppercase text-center space-x-2 md:space-x-6 space-y-2">
          <template v-for="artista in artistas" :key="artista.slug">
            <span 
              @click="() => router.push(`/programa/artistas/${artista.slug}`)" 
              :class="[artista.size, 'inline-block hover:scale-110 transition-transform cursor-pointer hover:text-white']"
            >
              {{ artista.name }}
            </span>
            <br v-if="artista.breakAfter" />
          </template>
        </div>
      </div>

      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="taller in talleres" 
          :key="taller.id"
          @click="navigateToTaller(taller.id)"
          class="bg-[#7b4a9d] aspect-square flex items-center justify-center p-6 shadow-[10px_10px_0_0_#fff200] hover:-translate-y-1 hover:shadow-[14px_14px_0_0_#fff200] transition-all cursor-pointer"
        >
          <h3 class="text-2xl md:text-3xl font-bold uppercase text-white text-center">{{ taller.title }}</h3>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 md:px-8 py-20">
      <h2 class="text-5xl md:text-6xl font-bold text-white uppercase mb-16 text-center">No te lo pierdas</h2>
      
     <Carousel class="w-full max-w-6xl mx-auto px-12">
  <CarouselContent class="-ml-6 pb-12 pt-6">
    <CarouselItem v-for="item in noTeLopierdas" :key="item.id" class="basis-full sm:basis-1/2 md:basis-1/3 pl-6">
      
      <div 
        @click="item.action"
        :style="{ 
          boxShadow: `0px 10px 0px 0px ${item.color}, 10px 0px 0px 0px ${item.color}, -10px 0px 0px 0px ${item.color}, 10px 10px 0px 0px ${item.color}, -10px 10px 0px 0px ${item.color}`,
          '--hover-color': item.color 
        }"
        class="aspect-square w-[calc(100%-15px)] mx-auto bg-white text-black p-6 md:p-8 flex flex-col justify-between cursor-pointer hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 group"
      >
        <h3 class="text-3xl md:text-4xl font-extrabold uppercase leading-tight transition-colors duration-300 group-hover:text-[var(--hover-color)]">
          {{ item.title }}
        </h3>
        <div class="flex justify-end mt-auto">
          <div 
            :style="{ backgroundColor: item.color, color: 'white' }"
            class="rounded-full p-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          >
            <ArrowRight class="w-6 h-6" />
          </div>
        </div>
      </div>

    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious class="left-0 border-white text-white hover:bg-white/10" />
  <CarouselNext class="right-0 border-white text-white hover:bg-white/10" />
</Carousel>
    </section>

  </div>
</template>