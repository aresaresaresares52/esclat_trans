<script setup lang="ts">
import { MapPin, Bus, Bike, Car } from 'lucide-vue-next'
import { ref } from 'vue'

// Datos embebidos para transporte público
const transporte = ref({
  metro: [
    {
      nombre: 'Marítim',
      lineas: 'Metro 5 y 7 | Tranvía 6 y 8',
      distancia: '5-7 minutos andando',
      descripcion: 'La estación principal y más cercana'
    },
    {
      nombre: 'Grau La Marina',
      lineas: 'Tranvía 6 y 8',
      distancia: '10 minutes a pie',
      descripcion: null
    }
  ],
  autobus: [
    {
      numeros: '4, 19, 30, 92, 94, 95, 99', 
      distancia: 'Menos de 1 min hasta 3-4 mins',
      descripcion: 'Las paradas más directas te dejan a menos de 1 minuto'
    }
  ],
  bici: [
    {
      nombre: 'Valenbisi',
      distancia: '1-4 minutos a pie',
      descripcion: 'Estaciones de bicis prácticamente en la puerta'
    }
  ]
})

const enlaces = [
  {
    titulo: 'Líneas de Autobús (EMT)',
    url: 'https://geoportal.emtvalencia.es/visor?lang=es',
    icono: '🚌'
  },
  {
    titulo: 'Mapa MetroValencia',
    url: 'https://www.redtransporte.com/valencia/metro-valencia/plano.html',
    icono: '🚇'
  }
]
</script>

<template>
  <div>

    <section class="max-w-7xl mx-auto mb-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        
        <div class="flex flex-col justify-center space-y-6">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-brand-green mb-3 tracking-tight">
              Las Naves | Centro de innovación social y urbana 
            </h2>
            <address class="not-italic space-y-2 text-lg">
              <p class="font-regular text-gray-300 ">C/ de Joan Verdeguer, 16, Poblats Marítims, 46024 València, Valencia</p>
            </address>
          </div>

          <div class="flex flex-col gap-3 pt-6">
            <a 
              href="https://maps.app.goo.gl/jGXJi7pM7tWMZi3a7" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-brand-blue text-black font-extrabold px-6 py-3 uppercase text-sm hover:bg-brand-blue/80 transition-all hover:scale-105 w-fit"
            >
              <MapPin :size="20" /> Abrir en Google Maps
            </a>
          </div>
        </div>

        <div class="order-first lg:order-last">
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

      </div>
    </section>

    <section class="max-w-7xl mx-auto mb-24">
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-brand-green mb-2 uppercase flex items-center gap-3">
          <Bus :size="32" /> Ven en Transporte Público
        </h2>
        <p class="text-gray-300 text-lg">Múltiples opciones para llegar de forma fácil y sostenible</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <div class="bg-gradient-to-br from-white/5 to-white/[0.02] border border-brand-blue/30 p-6 rounded-lg hover:border-brand-blue/60 transition-all">
          <h3 class="text-2xl font-bold text-brand-blue mb-4 flex items-center gap-2">
            <span>🚇</span> Metro / Tranvía
          </h3>
          <div class="space-y-5">
            <div v-for="(metro, idx) in transporte.metro" :key="idx" class="space-y-2">
              <p class="font-extrabold text-white text-lg">{{ metro.nombre }}</p>
              <p class="text-sm text-gray-400">{{ metro.lineas }}</p>
              <p class="text-brand-green font-bold text-sm">📍 {{ metro.distancia }}</p>
              <p v-if="metro.descripcion" class="text-xs text-gray-400">{{ metro.descripcion }}</p>
              <div v-if="idx < transporte.metro.length - 1" class="border-t border-white/10 mt-4 pt-4"></div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-white/5 to-white/[0.02] border border-brand-yellow/30 p-6 rounded-lg hover:border-brand-yellow/60 transition-all">
          <h3 class="text-2xl font-bold text-brand-yellow mb-4 flex items-center gap-2">
            <span>🚌</span> Autobús (EMT)
          </h3>
          <div class="space-y-3">
            <p class="text-sm text-gray-400">
              Las líneas <span class="font-bold text-white">{{ transporte.autobus[0]?.numeros }}</span> tienen paradas muy próximas.
            </p>
            <p class="text-brand-green font-bold text-sm">📍 {{ transporte.autobus[0]?.distancia }}</p>
            <p class="text-xs text-gray-400">{{ transporte.autobus[0]?.descripcion }}</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-white/5 to-white/[0.02] border border-brand-purple/30 p-6 rounded-lg hover:border-brand-purple/60 transition-all">
          <h3 class="text-2xl font-bold text-brand-purple mb-4 flex items-center gap-2">
            <Bike :size="24" /> Valenbisi
          </h3>
          <div class="space-y-3">
            <p class="text-sm text-gray-400">
              Estaciones de bicis prácticamente en la puerta
            </p>
            <p class="text-brand-green font-bold text-sm">📍 {{ transporte.bici[0]?.distancia }}</p>
          </div>
        </div>

      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <a 
          v-for="enlace in enlaces"
          :key="enlace.url"
          :href="enlace.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 p-4 rounded-lg transition-all hover:scale-105 text-white font-bold uppercase text-sm"
        >
          <span class="text-xl">{{ enlace.icono }}</span>
          {{ enlace.titulo }}
        </a>
      </div>
    </section>

    <section class="max-w-7xl mx-auto">
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-brand-yellow mb-2 uppercase flex items-center gap-3">
          <Car :size="32" /> Si Vienes en Coche
        </h2>
        <p class="text-gray-300 text-lg">Sostenibilidad y seguridad en primer lugar</p>
      </div>

      <div class="space-y-6">
        
        <div class="bg-brand-green/10 border-l-4 border-brand-green p-6 rounded-r-lg">
          <p class="text-lg text-white leading-relaxed">
            En <span class="font-bold">ESCLAT</span> cuidamos el planeta. Si no vienes en transporte público, <span class="font-bold">hazlo sosteniblemente:</span> ven en bici o patinete (tenemos aparcabicis justo al lado del recinto) o <span class="font-bold">comparte coche con tus amigos.</span>
          </p>
        </div>

        <div class="bg-white/5 border border-white/10 p-6 rounded-lg">
          <h3 class="text-xl font-bold text-white mb-4">📍 Aparcamiento</h3>
          <p class="text-gray-300 leading-relaxed mb-4">
            Si tu única opción es acudir en coche, te recomendamos utilizar <span class="font-bold text-white">parking público o las zonas habilitadas cercanas al recinto</span>, ya que encontrar aparcamiento en la calle puede resultar complicado dependiendo de la hora y la afluencia de público.
          </p>
          <p class="text-gray-300 leading-relaxed">
            El acceso en coche es sencillo desde distintos puntos de la ciudad, aunque <span class="font-bold text-white">recomendamos priorizar el transporte público</span> para evitar tráfico y facilitar la llegada al evento.
          </p>
        </div>

        <div class="bg-red-500/10 border border-red-500/30 p-6 rounded-lg">
          <h3 class="text-xl font-bold text-white mb-3 flex items-center gap-2">
            ⚠️ Importante
          </h3>
          <p class="text-lg text-white font-bold leading-relaxed">
            Si bebes alcohol, <span class="text-red-400">no conduzcas.</span> Utiliza transporte público, taxi o comparte viaje con una persona que no haya consumido alcohol.
          </p>
        </div>

      </div>
    </section>

  </div>
</template>