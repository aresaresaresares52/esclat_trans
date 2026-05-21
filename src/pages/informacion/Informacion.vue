<script setup lang="ts">
import { Info, HelpCircle, Map as MapIcon } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen pt-20 pb-24 px-4 md:px-8 max-w-5xl mx-auto font-sans">
    <h1 class="text-4xl md:text-6xl font-extrabold text-[#15a64b] mb-8 uppercase tracking-tight">Información</h1>
    
    <div class="space-y-16">
      <section>
        <h2 class="text-2xl font-bold text-[#16a0db] mb-6 flex items-center gap-2">
          <Info class="text-[#16a0db]" /> Normas del Recinto
        </h2>
        <div class="bg-white/5 border border-white/10 rounded-xl p-6">
          <ul class="list-disc list-inside space-y-3 text-gray-300">
            <li>No se permite la entrada de bebidas alcohólicas del exterior.</li>
            <li>Se ruega mantener el respeto y el silencio durante las actuaciones.</li>
            <li>Está prohibido fumar en los espacios cerrados.</li>
            <li>La organización se reserva el derecho de admisión.</li>
            <li>Sigue en todo momento las indicaciones del personal de seguridad.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-[#fff200] mb-6 flex items-center gap-2">
          <HelpCircle class="text-[#fff200]" /> Preguntas Frecuentes
        </h2>
        <div class="space-y-4">
          <div class="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 class="font-bold text-white mb-2">¿Tengo que imprimir la entrada?</h3>
            <p class="text-gray-400">No es necesario. Puedes mostrar el código QR de tu entrada directamente desde tu teléfono móvil.</p>
          </div>
          <div class="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 class="font-bold text-white mb-2">¿A qué hora abren las puertas?</h3>
            <p class="text-gray-400">Las puertas se abrirán 30 minutos antes del inicio del primer evento de cada día.</p>
          </div>
          <div class="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 class="font-bold text-white mb-2">¿Hay acceso para personas con movilidad reducida?</h3>
            <p class="text-gray-400">Sí, todas las instalaciones de Las Naves están adaptadas y son accesibles.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-[#7b4a9d] mb-6 flex items-center gap-2">
          <MapIcon class="text-[#7b4a9d]" /> Mapa del Recinto
        </h2>
        <div class="bg-white/5 border border-white/10 rounded-xl p-8 flex items-center justify-center min-h-[300px]">
          <div class="text-center">
            <MapIcon :size="48" class="text-gray-500 mx-auto mb-4" />
            <p class="text-gray-400 font-medium">Plano del recinto en preparación</p>
            <p class="text-gray-500 text-sm mt-2">Estará disponible unos días antes del evento.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
