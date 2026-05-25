<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

const router = useRouter()

const reservas = ref([
  { id: '23', name: 'Pase para el día 23 de Octubre', count: 1 },
  { id: '24', name: 'Pase para el día 24 de Octubre', count: 1 },
  { id: '25', name: 'Pase para el día 25 de Octubre', count: 1 },
  { id: 'abono', name: 'Abono Completo 3 Días', count: 1 }
])

const devoluciones = ref([
  { id: '23', name: 'Devolver Pase para el día 23 de Octubre', count: 1 },
  { id: '24', name: 'Devolver Pase para el día 24 de Octubre', count: 1 },
  { id: '25', name: 'Devolver Pase para el día 25 de Octubre', count: 1 },
  { id: 'abono', name: 'Devolver Abono Completo 3 Días', count: 1 }
])

const increment = (item: any) => {
  if (item.count >= 4) {
    toast.error('Máximo 4 entradas por usuario')
  } else {
    item.count++
  }
}

const decrement = (item: any) => {
  if (item.count > 1) {
    item.count--
  }
}

const handleReserva = (item: any) => {
  const routeData = router.resolve({
    name: 'entradas-pasarela',
    query: {
      tipo: 'compra',
      nombre: item.name,
      cantidad: item.count
    }
  })
  window.open(routeData.href, '_blank')
}

const handleDevolucion = (item: any) => {
  const routeData = router.resolve({
    name: 'entradas-pasarela',
    query: {
      tipo: 'devolucion',
      nombre: item.name,
      cantidad: item.count
    }
  })
  window.open(routeData.href, '_blank')
}
</script>

<template>
  <div class="min-h-screen pt-24 pb-32 px-4 md:px-8 max-w-5xl mx-auto font-sans text-white">
    
    <!-- SECCIÓN RESERVA -->
    <header class="mb-12">
      <h1 class="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter text-[#16a0db] mb-2">
        Entradas
      </h1>
      <p class="text-xl md:text-2xl text-[#fff200] font-bold uppercase tracking-wider">
        Reserva tus entradas gratuitas
      </p>
    </header>

    <div class="space-y-8 mb-20">
      <div v-for="item in reservas" :key="item.id" class="space-y-4">
        <!-- Fila de compra -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-2">
          
          <!-- Izquierda: Nombre -->
          <div class="text-lg md:text-xl font-extrabold uppercase tracking-tight">
            {{ item.name }}
          </div>

          <!-- Derecha: Selector y Botón -->
          <div class="flex items-center gap-4 sm:gap-6 self-start sm:self-center">
            
            <!-- Selector de Cantidad -->
            <div class="flex items-center border-2 border-[#fff200] bg-black text-white px-2 py-1 shadow-[4px_4px_0_0_#16a0db]">
              <button 
                @click="decrement(item)" 
                class="p-1.5 hover:text-[#fff200] transition-colors cursor-pointer select-none"
                :disabled="item.count <= 1"
                :class="item.count <= 1 ? 'opacity-30 cursor-not-allowed' : ''"
              >
                <ChevronLeft :size="20" />
              </button>
              
              <span class="w-8 text-center font-extrabold text-lg select-none">
                {{ item.count }}
              </span>
              
              <button 
                @click="increment(item)" 
                class="p-1.5 hover:text-[#fff200] transition-colors cursor-pointer select-none"
              >
                <ChevronRight :size="20" />
              </button>
            </div>

            <!-- Botón Reservar -->
            <button 
              @click="handleReserva(item)"
              class="bg-[#fff200] text-black font-extrabold text-sm md:text-base px-5 py-2.5 uppercase tracking-wider shadow-[4px_4px_0_0_#16a0db] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#16a0db] active:translate-y-0.5 active:shadow-[2px_2px_0_0_#16a0db] transition-all cursor-pointer outline-none"
            >
              Reservar Entradas
            </button>

          </div>

        </div>

        <!-- Línea horizontal amarilla -->
        <div class="h-[2px] bg-[#fff200] w-full"></div>
      </div>
    </div>


    <!-- SECCIÓN DEVOLUCIONES -->
    <header class="mb-12 mt-20">
      <h2 class="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-[#7b4a9d] mb-2">
        ¿No puedes asistir?
      </h2>
      <p class="text-lg md:text-xl text-gray-400 font-bold uppercase tracking-wider">
        Sé responsable y devuelve tus entradas para que otros puedan ocupar tu lugar
      </p>
    </header>

    <div class="space-y-8">
      <div v-for="item in devoluciones" :key="item.id" class="space-y-4">
        <!-- Fila de devolución -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-2">
          
          <!-- Izquierda: Nombre de Devolución -->
          <div class="text-lg md:text-xl font-extrabold uppercase tracking-tight font-sans">
            {{ item.name }}
          </div>

          <!-- Derecha: Selector y Botón -->
          <div class="flex items-center gap-4 sm:gap-6 self-start sm:self-center">
            
            <!-- Selector de Cantidad -->
            <div class="flex items-center border-2 border-[#fff200] bg-black text-white px-2 py-1 shadow-[4px_4px_0_0_#16a0db]">
              <button 
                @click="decrement(item)" 
                class="p-1.5 hover:text-[#fff200] transition-colors cursor-pointer select-none"
                :disabled="item.count <= 1"
                :class="item.count <= 1 ? 'opacity-30 cursor-not-allowed' : ''"
              >
                <ChevronLeft :size="20" />
              </button>
              
              <span class="w-8 text-center font-extrabold text-lg select-none">
                {{ item.count }}
              </span>
              
              <button 
                @click="increment(item)" 
                class="p-1.5 hover:text-[#fff200] transition-colors cursor-pointer select-none"
              >
                <ChevronRight :size="20" />
              </button>
            </div>

            <!-- Botón Devolver -->
            <button 
              @click="handleDevolucion(item)"
              class="bg-[#fff200] text-black font-extrabold text-sm md:text-base px-5 py-2.5 uppercase tracking-wider shadow-[4px_4px_0_0_#16a0db] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#16a0db] active:translate-y-0.5 active:shadow-[2px_2px_0_0_#16a0db] transition-all cursor-pointer outline-none"
            >
              Tramitar Devolución
            </button>

          </div>

        </div>

        <!-- Línea horizontal amarilla -->
        <div class="h-[2px] bg-[#fff200] w-full"></div>
      </div>
    </div>

  </div>
</template>
