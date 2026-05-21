<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="min-h-screen pt-20 pb-24 px-4 md:px-8 max-w-5xl mx-auto font-sans">
    <h1 class="text-4xl md:text-6xl font-extrabold text-[#16a0db] mb-8 uppercase tracking-tight">Entradas</h1>
    
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-[#fff200] mb-4">Información General</h2>
      <p class="text-gray-300 leading-relaxed">
        El Festival ESCLAT ofrece acceso gratuito a todos sus eventos mediante reserva previa. 
        Asegúrate de obtener tu entrada para garantizar tu plaza, ya que el aforo es limitado.
      </p>
    </section>

    <section class="mb-16">
      <h2 class="text-2xl font-bold text-[#15a64b] mb-6">Reserva de Entradas</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-[#16a0db] transition-colors">
          <h3 class="text-xl font-bold text-white mb-2">23 de Octubre</h3>
          <p class="text-gray-400 mb-4">Acceso a todas las actividades del primer día.</p>
          <Button class="w-full bg-[#16a0db] hover:bg-[#16a0db]/80 text-black font-bold">Reservar Gratis</Button>
        </div>

        <div class="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-[#7b4a9d] transition-colors">
          <h3 class="text-xl font-bold text-white mb-2">24 de Octubre</h3>
          <p class="text-gray-400 mb-4">Acceso a todas las actividades del segundo día.</p>
          <Button class="w-full bg-[#7b4a9d] hover:bg-[#7b4a9d]/80 text-white font-bold">Reservar Gratis</Button>
        </div>

        <div class="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-[#15a64b] transition-colors">
          <h3 class="text-xl font-bold text-white mb-2">25 de Octubre</h3>
          <p class="text-gray-400 mb-4">Acceso a todas las actividades del tercer día.</p>
          <Button class="w-full bg-[#15a64b] hover:bg-[#15a64b]/80 text-white font-bold">Reservar Gratis</Button>
        </div>

        <div class="bg-[#fff200]/10 border border-[#fff200]/30 p-6 rounded-xl hover:border-[#fff200] transition-colors">
          <h3 class="text-xl font-bold text-[#fff200] mb-2">Abono 3 Días</h3>
          <p class="text-gray-300 mb-4">Acceso completo a todo el festival.</p>
          <Button class="w-full bg-[#fff200] hover:bg-[#fff200]/80 text-black font-bold">Reservar Abono Completo</Button>
        </div>

      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-[#7b4a9d] mb-4">Política de Devoluciones</h2>
      <p class="text-gray-300 leading-relaxed">
        Aunque las entradas son gratuitas, te pedimos que si finalmente no puedes asistir, canceles tu reserva para permitir que otra persona pueda disfrutar del evento. Puedes gestionar tus devoluciones desde el correo de confirmación.
      </p>
    </section>
  </div>
</template>
