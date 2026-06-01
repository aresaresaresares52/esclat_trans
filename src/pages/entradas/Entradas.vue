<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

type EntradaItem = {
  id: string
  name: string
  count: number
  cardClass: string
  textClass: string
}

const router = useRouter()

const reservas = ref<EntradaItem[]>([
  { id: '23', name: 'Pase para el día 23 de Octubre', count: 1, cardClass: 'bg-brand-green', textClass: 'text-white' },
  { id: '24', name: 'Pase para el día 24 de Octubre', count: 1, cardClass: 'bg-[#F9851F]', textClass: 'text-white' },
  { id: '25', name: 'Pase para el día 25 de Octubre', count: 1, cardClass: 'bg-brand-blue', textClass: 'text-white' },
  { id: 'abono', name: 'Abono Completo 3 Días', count: 1, cardClass: 'bg-brand-purple', textClass: 'text-white' }
])

const devoluciones = ref<EntradaItem[]>([
  { id: '23', name: 'Devolver Pase para el día 23 de Octubre', count: 1, cardClass: 'bg-brand-green', textClass: 'text-white' },
  { id: '24', name: 'Devolver Pase para el día 24 de Octubre', count: 1, cardClass: 'bg-[#F9851F]', textClass: 'text-white' },
  { id: '25', name: 'Devolver Pase para el día 25 de Octubre', count: 1, cardClass: 'bg-brand-blue', textClass: 'text-white' },
  { id: 'abono', name: 'Devolver Abono Completo 3 Días', count: 1, cardClass: 'bg-brand-purple', textClass: 'text-white' }
])

const increment = (item: EntradaItem) => {
  if (item.count >= 4) {
    toast.error('Máximo 4 entradas por usuario')
  } else {
    item.count++
  }
}

const decrement = (item: EntradaItem) => {
  if (item.count > 1) {
    item.count--
  }
}

const handleReserva = (item: EntradaItem) => {
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

const handleDevolucion = (item: EntradaItem) => {
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

const entradaSections = computed(() => [
  {
    id: 'reservas',
    title: 'Entradas',
    subtitle: 'Reserva tus entradas gratuitas',
    titleClass: 'text-[#F9851F]',
    items: reservas.value,
    actionLabel: 'Reservar Entradas',
    action: handleReserva
  },
  {
    id: 'devoluciones',
    title: '¿No puedes asistir?',
    subtitle: 'Sé responsable y devuelve tus entradas para que otros puedan ocupar tu lugar',
    titleClass: 'text-[#F9851F]',
    items: devoluciones.value,
    actionLabel: 'Tramitar Devolución',
    action: handleDevolucion
  }
])
</script>

<template>
  <div class="w-full space-y-20">
    <section v-for="section in entradaSections" :key="section.id">
      <header class="mb-12">
        <h1
          class="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-2"
          :class="section.titleClass"
        >
          {{ section.title }}
        </h1>
        <p class="text-xl md:text-2xl text-white font-semibold uppercase tracking-wider">
          {{ section.subtitle }}
        </p>
      </header>

      <div class="space-y-2.5">
        <article
          v-for="item in section.items"
          :key="item.id"
          class="p-4 md:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          :class="[item.cardClass, item.textClass]"
        >
          <div class="text-lg md:text-xl font-bold uppercase tracking-tight">
            {{ item.name }}
          </div>

          <div class="flex items-center gap-4 sm:gap-6 self-start sm:self-center">
            <div class="flex items-center border-2 border-white  text-white px-2 py-1">
              <button
                @click="decrement(item)"
                class="p-1.5 hover:text-brand-yellow transition-colors cursor-pointer select-none"
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
                class="p-1.5 hover:text-brand-yellow transition-colors cursor-pointer select-none"
              >
                <ChevronRight :size="20" />
              </button>
            </div>

            <button
              @click="section.action(item)"
              class="border-2 border-white text-white font-bold text-sm md:text-base px-5 py-2.5 uppercase  tracking-wider hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer outline-none"
            >
              {{ section.actionLabel }}
            </button>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
