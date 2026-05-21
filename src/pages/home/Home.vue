<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'

const router = useRouter()

const navigateToEntradas = () => {
  router.push('/entradas')
}
</script>

<template>
  <div class="min-h-screen font-sans bg-black text-white pb-32 overflow-x-hidden">
    
    <!-- Hero Section -->
    <section class="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative mb-20">
      <h1 class="text-7xl md:text-9xl font-extrabold uppercase tracking-tighter mb-4">
        <span class="text-[#fff200]">ESC</span><span class="text-[#16a0db]">LAT</span>
      </h1>
      <p class="text-2xl md:text-4xl text-gray-300 mb-10 font-medium">
        consigue tus entradas ya
      </p>
      <button 
        @click="navigateToEntradas"
        class="bg-[#fff200] text-black font-extrabold text-xl md:text-2xl py-4 px-10 rounded-none uppercase transition-transform hover:scale-105 shadow-[8px_8px_0_0_#7b4a9d] hover:shadow-[4px_4px_0_0_#7b4a9d]"
      >
        Consigue tu entrada
      </button>
    </section>

    <!-- Quienes Somos Section -->
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

    <!-- Preparate para Section -->
    <section class="container mx-auto px-4 md:px-8 py-32 mb-32">
      <h2 class="text-5xl md:text-7xl font-bold text-center text-[#fff200] uppercase mb-20">Prepárate para</h2>
      
      <!-- Artists Block -->
      <div class="max-w-4xl mx-auto bg-[#16a0db] p-8 md:p-12 mb-20 shadow-[16px_16px_0_0_#fff200] transform -rotate-1 min-h-[400px] flex items-center justify-center">
        <div class="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 text-black font-extrabold uppercase text-center">
          <!-- Nivel 1 -->
          <span class="text-6xl md:text-8xl hover:scale-110 transition-transform cursor-default">Repion</span>
          <span class="text-6xl md:text-8xl hover:scale-110 transition-transform cursor-default">Bum Motion Club</span>
          <span class="text-6xl md:text-8xl hover:scale-110 transition-transform cursor-default">Diamante Negro</span>
          
          <!-- Nivel 2 -->
          <span class="text-4xl md:text-6xl hover:scale-110 transition-transform cursor-default mt-4">Garbi</span>
          <span class="text-4xl md:text-6xl hover:scale-110 transition-transform cursor-default mt-4">Nuevos Vicios</span>
          
          <!-- Nivel 3 -->
          <span class="text-2xl md:text-4xl hover:scale-110 transition-transform cursor-default mt-6">TranquiloRayo</span>
          <span class="text-2xl md:text-4xl hover:scale-110 transition-transform cursor-default mt-6">Luna Valle</span>
          <span class="text-2xl md:text-4xl hover:scale-110 transition-transform cursor-default mt-6">Mr.Kennedy</span>
        </div>
      </div>

      <!-- Activities Blocks -->
      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div class="bg-[#7b4a9d] aspect-square flex items-center justify-center p-6 shadow-[10px_10px_0_0_#fff200] hover:-translate-y-1 hover:shadow-[14px_14px_0_0_#fff200] transition-all">
          <h3 class="text-2xl md:text-3xl font-bold uppercase text-white text-center">Charla sobre la vivienda</h3>
        </div>
        <div class="bg-[#7b4a9d] aspect-square flex items-center justify-center p-6 shadow-[10px_10px_0_0_#fff200] hover:-translate-y-1 hover:shadow-[14px_14px_0_0_#fff200] transition-all">
          <h3 class="text-2xl md:text-3xl font-bold uppercase text-white text-center">Mercadillo</h3>
        </div>
        <div class="bg-[#7b4a9d] aspect-square flex items-center justify-center p-6 shadow-[10px_10px_0_0_#fff200] hover:-translate-y-1 hover:shadow-[14px_14px_0_0_#fff200] transition-all">
          <h3 class="text-2xl md:text-3xl font-bold uppercase text-white text-center">Taller de Japonés</h3>
        </div>
        <div class="bg-[#7b4a9d] aspect-square flex items-center justify-center p-6 shadow-[10px_10px_0_0_#fff200] hover:-translate-y-1 hover:shadow-[14px_14px_0_0_#fff200] transition-all">
          <h3 class="text-2xl md:text-3xl font-bold uppercase text-white text-center">Competición de videojuegos</h3>
        </div>
        <div class="bg-[#7b4a9d] aspect-square flex items-center justify-center p-6 shadow-[10px_10px_0_0_#fff200] hover:-translate-y-1 hover:shadow-[14px_14px_0_0_#fff200] transition-all">
          <h3 class="text-2xl md:text-3xl font-bold uppercase text-white text-center">Debate sobre arte</h3>
        </div>
        <div class="bg-[#7b4a9d] aspect-square flex items-center justify-center p-6 shadow-[10px_10px_0_0_#fff200] hover:-translate-y-1 hover:shadow-[14px_14px_0_0_#fff200] transition-all">
          <h3 class="text-2xl md:text-3xl font-bold uppercase text-white text-center">Performance Drag</h3>
        </div>
      </div>
    </section>

    <!-- No te lo pierdas Section -->
    <section class="container mx-auto px-4 md:px-8 py-32">
      <h2 class="text-5xl md:text-6xl font-bold text-white uppercase mb-20 text-center">No te lo pierdas</h2>
      
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center">
        <!-- Bloque 1 -->
        <div class="bg-[#15a64b] w-full max-w-[300px] aspect-square p-8 flex flex-col justify-between shadow-[12px_12px_0_0_#16a0db] hover:-translate-y-1 hover:shadow-[16px_16px_0_0_#16a0db] transition-all cursor-pointer">
          <h3 class="text-2xl font-bold text-black uppercase">Descubre más de nuestros artistas</h3>
          <div class="flex justify-end mt-auto">
            <div class="bg-black text-[#15a64b] rounded-full p-2">
              <ArrowRight :size="32" />
            </div>
          </div>
        </div>

        <!-- Bloque 2 -->
        <div class="bg-[#16a0db] w-full max-w-[300px] aspect-square p-8 flex flex-col justify-between shadow-[12px_12px_0_0_#15a64b] hover:-translate-y-1 hover:shadow-[16px_16px_0_0_#15a64b] transition-all cursor-pointer">
          <h3 class="text-2xl font-bold text-black uppercase">Apúntate a nuestros talleres</h3>
          <div class="flex justify-end mt-auto">
            <div class="bg-black text-[#16a0db] rounded-full p-2">
              <ArrowRight :size="32" />
            </div>
          </div>
        </div>

        <!-- Bloque 3 -->
        <div class="bg-gray-200 w-full max-w-[300px] aspect-square p-8 flex flex-col justify-between shadow-[12px_12px_0_0_#16a0db] hover:-translate-y-1 hover:shadow-[16px_16px_0_0_#16a0db] transition-all cursor-pointer">
          <h3 class="text-2xl font-bold text-black uppercase">Descubre nuestra playlist</h3>
          <div class="flex justify-end mt-auto">
            <div class="bg-black text-gray-200 rounded-full p-2">
              <ArrowRight :size="32" />
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>