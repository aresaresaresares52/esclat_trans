<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

// Base de datos de talleres (debe coincidir con Talleres.vue)
const talleresData: Record<string, any> = {
  'shodo': {
    title: 'SHODŌ',
    subtitle: 'Taller de escritura japonesa',
    description: 'Un espacio para bajar el ritmo, desconectar del ruido y volver a crear con calma. Inspirado en la estética de la escritura tradicional japonesa, este taller propone una experiencia donde la paciencia, la sencillez y el detalle se convierten en parte del proceso creativo.\n\nJunto al artista Gabi descubrirás una forma más consciente y personal de expresarte, experimentando con trazos, composición y sensibilidad visual desde una mirada relajada y cercana.\n\nNo hace falta experiencia previa, solo ganas de probar algo diferente.\n\nY sí, el material lo ponemos nosotros.',
    day: 'Sábado 24',
    horario: '16:00 - 17:30',
    lugar: 'Sala de Talleres',
    aforo: 30,
    duracion: '1h 30m'
  },
  'charla-arte': {
    title: 'Charla: Arte, identidad y creación',
    subtitle: 'Con Luna Valle',
    description: 'Un espacio para pensar en voz alta sobre el arte y todo lo que lo rodea: la creación, la identidad y el lugar que ocupa hoy un artista en la industria. ¿Es necesario venderte para que tu obra exista? ¿Dónde acaba la expresión y empieza el mercado?\n\nDe la mano de Luna Valle, abrimos un diálogo sin respuestas cerradas, donde la experiencia artística se comparte, se cuestiona y se transforma en conversación colectiva. Un encuentro para inspirarse, debatir y mirar el arte desde otros ángulos.',
    day: 'Viernes 23',
    horario: '19:00 - 20:30',
    lugar: 'Auditorio',
    aforo: 100,
    duracion: '1h 30m'
  },
  'charla-vivienda': {
    title: 'Charla: La vivienda en Valencia',
    subtitle: 'Debate urbano y crítico',
    description: 'Un espacio para hablar de una de las grandes preocupaciones de la ciudad: el acceso a la vivienda. Precios, alquiler, especulación, modelos urbanos y el impacto directo en la vida de quienes habitan Valencia.\n\nUna conversación abierta donde analizar la problemática desde distintas perspectivas, compartir experiencias y generar pensamiento crítico sobre el presente (y futuro) de la ciudad. Sin filtros, sin respuestas simples, pero con muchas ganas de entender y cuestionar lo que está pasando.',
    day: 'Sábado 24',
    horario: '17:00 - 18:30',
    lugar: 'Auditorio',
    aforo: 100,
    duracion: '1h 30m'
  },
  'nostalgia-juego': {
    title: 'NOSTALGIA EN JUEGO',
    subtitle: 'Competición de videojuegos clásicos',
    description: 'Vuelve la nostalgia en forma de competición. Una batalla divertida con los juegos clásicos de la Wii pensada para pasarlo en grande: piques sanos, risas aseguradas y mucha emoción en cada partida.\n\nMario Kart Wii, Wii Sports y otros títulos míticos serán los protagonistas de un espacio donde lo importante no es solo ganar, sino disfrutar, revivir recuerdos y compartir el juego como antes.\n\nJugar, competir y volver a sentir la magia de los clásicos… ¡como si el tiempo no hubiera pasado!',
    day: 'Domingo 25',
    horario: '15:00 - 19:00',
    lugar: 'Zona Gaming',
    aforo: 60,
    duracion: '4h'
  },
  'ultra-show': {
    title: 'Ultra show',
    subtitle: 'Performance Drag: Ultraviolencia y Oxofobia',
    description: 'Un escenario donde la actitud no se interpreta: se desborda. La performance de Ultraviolencia y Oxofobia llega para romper esquemas con una puesta en escena intensa, estética y cargada de mensaje.\n\nAmbas artistas forman parte de la escena drag contemporánea. Su trabajo explora la identidad, la provocación visual y la creación de personajes que juegan con lo teatral, lo corporal y lo simbólico, generando espectáculos que combinan energía, mensaje y estética sin concesiones.\n\nPrepárate para una experiencia sin filtros: potente, provocadora y completamente viva.',
    day: 'Sábado 24',
    horario: '21:00 - 22:30',
    lugar: 'Escenario Principal',
    aforo: 500,
    duracion: '1h 30m'
  },
  'mercadillo': {
    title: 'Mercadillo vintage',
    subtitle: 'Ropa, objetos y piezas únicas',
    description: 'Un espacio abierto donde la ropa, los objetos y las piezas únicas cambian de manos para seguir contando historias. A precios accesibles y con propuestas para todos los gustos, este mercadillo es un punto de encuentro entre lo reutilizado, lo curioso y lo inesperado.\n\nPero aquí no solo vienes a comprar: también puedes participar. Trae lo que ya no usas, vende, intercambia o simplemente redescubre objetos que pueden empezar una nueva vida con otra persona.',
    day: 'Viernes 23',
    horario: '18:00 - 23:00',
    lugar: 'Patio',
    aforo: 0,
    duracion: 'Todo el día'
  }
}

const tallerId = computed(() => route.params.id as string)
const taller = computed(() => talleresData[tallerId.value])

const goBack = () => {
  router.push('/programa/talleres')
}
</script>

<template>
  <div class="min-h-screen font-sans bg-black text-white pt-24 pb-32">
    <div class="container mx-auto px-4 md:px-8">
      
      <!-- Botón Volver -->
      <button 
        @click="goBack" 
        class="flex items-center gap-2 text-brand-yellow hover:text-white mb-12 transition-colors font-bold uppercase"
      >
        <ArrowLeft :size="24" /> Volver a Talleres
      </button>

      <div v-if="taller" class="flex flex-col gap-12">
        <!-- Header -->
        <div class="space-y-6">
          <h1 class="text-5xl md:text-7xl font-extrabold uppercase text-white tracking-tight">
            {{ taller.title }}
          </h1>
          <h2 class="text-2xl md:text-3xl text-gray-400 uppercase font-bold">{{ taller.subtitle }}</h2>
          
          <!-- Day Badge -->
          <span class="inline-block bg-brand-yellow text-black px-4 py-2 font-bold uppercase text-lg">
            {{ taller.day }}
          </span>
        </div>

        <!-- Info Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-700">
          <div>
            <p class="text-gray-500 text-xs uppercase font-bold mb-2">Horario</p>
            <p class="text-white text-lg font-semibold">{{ taller.horario }}</p>
          </div>
          <div>
            <p class="text-gray-500 text-xs uppercase font-bold mb-2">Duración</p>
            <p class="text-white text-lg font-semibold">{{ taller.duracion }}</p>
          </div>
          <div>
            <p class="text-gray-500 text-xs uppercase font-bold mb-2">Lugar</p>
            <p class="text-white text-lg font-semibold">{{ taller.lugar }}</p>
          </div>
          <div>
            <p class="text-gray-500 text-xs uppercase font-bold mb-2">Aforo</p>
            <p class="text-white text-lg font-semibold">{{ taller.aforo > 0 ? taller.aforo + ' personas' : 'Sin límite' }}</p>
          </div>
        </div>

        <!-- Descripción -->
        <div class="space-y-6">
          <h3 class="text-3xl font-bold uppercase text-white">Descripción</h3>
          <div class="text-gray-300 leading-relaxed text-lg space-y-4">
            <p v-for="(paragraph, idx) in taller.description.split('\n\n')" :key="idx" class="whitespace-pre-wrap">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <!-- Información sobre reservas -->
        <div class="bg-brand-purple/10 border border-brand-purple p-6 rounded-none">
          <p class="text-gray-300 text-lg">
            <span class="font-bold text-brand-yellow">Reservas:</span> Las reservas para acceder y participar en los talleres se gestionarán dentro del recinto 1h antes del comienzo de estos hasta completar aforo.
          </p>
        </div>

        <!-- Botón para volver a listado -->
        <div class="flex gap-4">
          <button 
            @click="goBack"
            class="px-6 py-4 bg-brand-yellow text-black font-bold uppercase hover:bg-white transition-colors"
          >
            Volver al listado de talleres
          </button>
        </div>
      </div>

      <div v-else class="text-center py-20">
        <h2 class="text-4xl font-bold text-gray-500 uppercase">Taller no encontrado</h2>
      </div>

    </div>
  </div>
</template>
