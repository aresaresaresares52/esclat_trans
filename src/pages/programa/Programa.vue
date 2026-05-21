<script setup lang="ts">
// Programa Component
</script>

<template>
  <div class="min-h-screen pt-20 pb-24 px-4 md:px-8 max-w-5xl mx-auto font-sans">
    <h1 class="text-4xl md:text-6xl font-extrabold text-[#7b4a9d] mb-8 uppercase tracking-tight">Programa</h1>
    
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-[#16a0db] mb-6">Artistas</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="i in 8" :key="i" class="bg-white/5 aspect-square rounded-lg flex items-center justify-center border border-white/10 hover:border-[#7b4a9d] transition-colors cursor-pointer">
          <span class="text-gray-400 font-bold">Artista {{ i }}</span>
        </div>
      </div>
    </section>

    <section class="mb-16">
      <h2 class="text-2xl font-bold text-[#fff200] mb-6">Eventos Especiales</h2>
      <div class="space-y-4">
        <div class="p-6 bg-white/5 border-l-4 border-[#fff200] rounded-r-lg">
          <h3 class="text-xl font-bold text-white mb-2">Inauguración Oficial</h3>
          <p class="text-gray-400">Apertura de puertas y bienvenida institucional.</p>
        </div>
        <div class="p-6 bg-white/5 border-l-4 border-[#15a64b] rounded-r-lg">
          <h3 class="text-xl font-bold text-white mb-2">Clausura y Fiesta Final</h3>
          <p class="text-gray-400">Concierto de cierre y despedida del festival.</p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-[#15a64b] mb-6">Programación por Días</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span class="bg-[#16a0db] text-black px-3 py-1 rounded">23 OCT</span> Miércoles
          </h3>
          <div class="pl-4 border-l-2 border-white/10 space-y-4">
            <div>
              <p class="text-[#16a0db] font-bold">18:00 - 20:00</p>
              <p class="text-gray-300">Apertura y primera actuación</p>
            </div>
            <div>
              <p class="text-[#16a0db] font-bold">20:30 - 22:30</p>
              <p class="text-gray-300">Concierto Principal</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span class="bg-[#7b4a9d] text-white px-3 py-1 rounded">24 OCT</span> Jueves
          </h3>
          <div class="pl-4 border-l-2 border-white/10 space-y-4">
            <div>
              <p class="text-[#7b4a9d] font-bold">17:00 - 19:00</p>
              <p class="text-gray-300">Talleres interactivos</p>
            </div>
            <div>
              <p class="text-[#7b4a9d] font-bold">19:30 - 23:00</p>
              <p class="text-gray-300">Sesión de Djs</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span class="bg-[#15a64b] text-white px-3 py-1 rounded">25 OCT</span> Viernes
          </h3>
          <div class="pl-4 border-l-2 border-white/10 space-y-4">
            <div>
              <p class="text-[#15a64b] font-bold">18:00 - 00:00</p>
              <p class="text-gray-300">Fiesta de Clausura</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
