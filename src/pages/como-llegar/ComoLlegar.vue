<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen pt-20 pb-24 px-4 md:px-8 max-w-5xl mx-auto font-sans">
    <h1 class="text-4xl md:text-6xl font-extrabold text-[#fff200] mb-8 uppercase tracking-tight">Cómo Llegar</h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <div class="lg:col-span-2">
        <div class="bg-white/5 p-2 rounded-xl border border-white/10 w-full h-[400px] md:h-[500px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.470070454742!2d-0.3408486246603383!3d39.45870801339094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048f63da49ce1%3A0x37b1bcba9ad9547a!2sLas%20Naves%20%7C%20Centro%20de%20innovaci%C3%B3n%20social%20y%20urbana!5e0!3m2!1ses!2ses!4v1779280375046!5m2!1ses!2ses" 
            class="w-full h-full rounded-lg"
            style="border:0;" 
            allowfullscreen="true" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold text-[#16a0db] mb-4 flex items-center gap-2">
            <MapPin class="text-[#16a0db]" /> Ubicación
          </h2>
          <div class="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 class="font-bold text-white mb-2">Las Naves</h3>
            <p class="text-gray-300 mb-4">Centro de innovación social y urbana.</p>
            <a 
              href="https://maps.app.goo.gl/jGXJi7pM7tWMZi3a7" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-block bg-[#16a0db] text-black font-bold px-4 py-2 rounded hover:bg-[#16a0db]/80 transition-colors"
            >
              Abrir en Google Maps
            </a>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-[#15a64b] mb-4">Transporte Público</h2>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-start gap-2">
              <span class="text-[#15a64b] font-bold">Autobús:</span> 
              <span>Líneas 4, 19, 92, 99 (Parada más cercana a 3 mins)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#7b4a9d] font-bold">Metro:</span> 
              <span>Línea 5 y 7 (Estación Marítim - Serrería)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#fff200] font-bold">Bici:</span> 
              <span>Estación Valenbisi a 50 metros de la entrada principal.</span>
            </li>
          </ul>
        </section>
      </div>

    </div>
  </div>
</template>
