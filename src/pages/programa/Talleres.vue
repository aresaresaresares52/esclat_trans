<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { FilterBar } from '@/components/ui/filter'

interface Taller {
  id: string
  title: string
  subtitle: string
  description: string
  day: string
  horario: string
  lugar: string
  aforo: number
  duracion: string
}

const router = useRouter()

const talleres: Taller[] = [
  {
    id: 'shodo',
    title: 'SHODŌ',
    subtitle: 'Taller de escritura japonesa',
    description: 'Un espacio para bajar el ritmo, desconectar del ruido y volver a crear con calma. Inspirado en la estética de la escritura tradicional japonesa, este taller propone una experiencia donde la paciencia, la sencillez y el detalle se convierten en parte del proceso creativo.\n\nJunto al artista Gabi descubrirás una forma más consciente y personal de expresarte, experimentando con trazos, composición y sensibilidad visual desde una mirada relajada y cercana.\n\nNo hace falta experiencia previa, solo ganas de probar algo diferente.\n\nY sí, el material lo ponemos nosotros.',
    day: 'Sábado 24',
    horario: '16:00 - 17:30',
    lugar: 'Sala de Talleres',
    aforo: 30,
    duracion: '1h 30m'
  },
  {
    id: 'charla-arte',
    title: 'Charla: Arte, identidad y creación',
    subtitle: 'Con Luna Valle',
    description: 'Un espacio para pensar en voz alta sobre el arte y todo lo que lo rodea: la creación, la identidad y el lugar que ocupa hoy un artista en la industria. ¿Es necesario venderte para que tu obra exista? ¿Dónde acaba la expresión y empieza el mercado?\n\nDe la mano de Luna Valle, abrimos un diálogo sin respuestas cerradas, donde la experiencia artística se comparte, se cuestiona y se transforma en conversación colectiva. Un encuentro para inspirarse, debatir y mirar el arte desde otros ángulos.',
    day: 'Viernes 23',
    horario: '19:00 - 20:30',
    lugar: 'Auditorio',
    aforo: 100,
    duracion: '1h 30m'
  },
  {
    id: 'charla-vivienda',
    title: 'Charla: La vivienda en Valencia',
    subtitle: 'Debate urbano y crítico',
    description: 'Un espacio para hablar de una de las grandes preocupaciones de la ciudad: el acceso a la vivienda. Precios, alquiler, especulación, modelos urbanos y el impacto directo en la vida de quienes habitan Valencia.\n\nUna conversación abierta donde analizar la problemática desde distintas perspectivas, compartir experiencias y generar pensamiento crítico sobre el presente (y futuro) de la ciudad. Sin filtros, sin respuestas simples, pero con muchas ganas de entender y cuestionar lo que está pasando.',
    day: 'Sábado 24',
    horario: '17:00 - 18:30',
    lugar: 'Auditorio',
    aforo: 100,
    duracion: '1h 30m'
  },
  {
    id: 'nostalgia-juego',
    title: 'NOSTALGIA EN JUEGO',
    subtitle: 'Competición de videojuegos clásicos',
    description: 'Vuelve la nostalgia en forma de competición. Una batalla divertida con los juegos clásicos de la Wii pensada para pasarlo en grande: piques sanos, risas aseguradas y mucha emoción en cada partida.\n\nMario Kart Wii, Wii Sports y otros títulos míticos serán los protagonistas de un espacio donde lo importante no es solo ganar, sino disfrutar, revivir recuerdos y compartir el juego como antes.\n\nJugar, competir y volver a sentir la magia de los clásicos… ¡como si el tiempo no hubiera pasado!',
    day: 'Domingo 25',
    horario: '15:00 - 19:00',
    lugar: 'Zona Gaming',
    aforo: 60,
    duracion: '4h'
  },
  {
    id: 'ultra-show',
    title: 'Ultra show',
    subtitle: 'Performance Drag: Ultraviolencia y Oxofobia',
    description: 'Un escenario donde la actitud no se interpreta: se desborda. La performance de Ultraviolencia y Oxofobia llega para romper esquemas con una puesta en escena intensa, estética y cargada de mensaje.\n\nAmbas artistas forman parte de la escena drag contemporánea. Su trabajo explora la identidad, la provocación visual y la creación de personajes que juegan con lo teatral, lo corporal y lo simbólico, generando espectáculos que combinan energía, mensaje y estética sin concesiones.\n\nPrepárate para una experiencia sin filtros: potente, provocadora y completamente viva.',
    day: 'Sábado 24',
    horario: '21:00 - 22:30',
    lugar: 'Escenario Principal',
    aforo: 500,
    duracion: '1h 30m'
  },
  {
    id: 'mercadillo',
    title: 'Mercadillo vintage',
    subtitle: 'Ropa, objetos y piezas únicas',
    description: 'Un espacio abierto donde la ropa, los objetos y las piezas únicas cambian de manos para seguir contando historias. A precios accesibles y con propuestas para todos los gustos, este mercadillo es un punto de encuentro entre lo reutilizado, lo curioso y lo inesperado.\n\nPero aquí no solo vienes a comprar: también puedes participar. Trae lo que ya no usas, vende, intercambia o simplemente redescubre objetos que pueden empezar una nueva vida con otra persona.',
    day: 'Viernes 23',
    horario: '18:00 - 23:00',
    lugar: 'Patio',
    aforo: 0, // Sin límite
    duracion: 'Todo el día'
  }
]

const filteredTalleres = ref<Taller[]>(talleres)

const filterOptions = computed(() => {
  const days = new Set(talleres.map(t => t.day))
  return Array.from(days).map(day => ({
    label: day,
    value: day
  }))
})

const handleFilter = (filtered: Taller[]) => {
  filteredTalleres.value = filtered
}

const navigateToDetalle = (id: string) => {
  router.push(`/programa/talleres/${id}`)
}
</script>

<template>
  <div class="min-h-screen bg-black text-white py-16 md:py-24 overflow-x-hidden">
    <!-- Header -->
    <section class="container mx-auto px-4 md:px-8 mb-16">
      <h1 class="text-6xl md:text-8xl font-bold uppercase text-white mb-6">Talleres</h1>
      <p class="text-lg md:text-xl text-gray-300 max-w-2xl">
        Las reservas para acceder y participar en los talleres se gestionarán dentro del recinto 1h antes del comienzo de estos hasta completar aforo.
      </p>
    </section>

    <!-- Filter Bar -->
    <section class="container mx-auto px-4 md:px-8 mb-16">
      <FilterBar
        :items="talleres"
        filter-key="day"
        search-key="title"
        :filter-options="filterOptions"
        @filter="handleFilter"
      />
    </section>

    <!-- Talleres Grid -->
    <section class="container mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="taller in filteredTalleres"
          :key="taller.id"
          @click="navigateToDetalle(taller.id)"
          class="bg-gradient-to-br from-gray-900 to-black border border-gray-700 p-8 cursor-pointer hover:border-brand-yellow transition-all group hover:shadow-[0_0_30px_rgba(242,221,32,0.2)]"
        >
          <!-- Day badge -->
          <span class="inline-block bg-brand-yellow text-black text-xs font-extrabold px-3 py-1 mb-4 uppercase">
            {{ taller.day }}
          </span>

          <!-- Title -->
          <h3 class="text-2xl md:text-3xl font-bold uppercase text-white mb-2 group-hover:text-brand-yellow transition-colors">
            {{ taller.title }}
          </h3>

          <!-- Subtitle -->
          <p v-if="taller.subtitle" class="text-gray-400 mb-6 text-sm">{{ taller.subtitle }}</p>

          <!-- Info Grid -->
          <div class="grid grid-cols-2 gap-4 text-sm text-gray-300 border-t border-gray-700 pt-6">
            <div>
              <p class="text-gray-500 text-xs uppercase font-bold mb-1">Horario</p>
              <p class="font-semibold">{{ taller.horario }}</p>
            </div>
            <div>
              <p class="text-gray-500 text-xs uppercase font-bold mb-1">Duración</p>
              <p class="font-semibold">{{ taller.duracion }}</p>
            </div>
            <div>
              <p class="text-gray-500 text-xs uppercase font-bold mb-1">Lugar</p>
              <p class="font-semibold">{{ taller.lugar }}</p>
            </div>
            <div>
              <p class="text-gray-500 text-xs uppercase font-bold mb-1">Aforo</p>
              <p class="font-semibold">{{ taller.aforo > 0 ? taller.aforo + ' personas' : 'Sin límite' }}</p>
            </div>
          </div>

          <!-- Arrow indicator -->
          <div class="mt-6 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity">
            →
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-if="filteredTalleres.length === 0" class="text-center py-16">
        <p class="text-gray-400 text-lg">No se encontraron talleres con esos criterios.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Smooth transitions */
* {
  transition-property: color, border-color, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
