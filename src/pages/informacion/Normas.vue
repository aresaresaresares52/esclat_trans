<script setup lang="ts">
import { ref } from 'vue'
import { Shield, Info, Heart, FileText } from 'lucide-vue-next'

// Estado para controlar qué bloque está seleccionado (por defecto, el primero)
const bloqueActivo = ref<'normas' | 'util' | 'salud' | 'seguridad'>('normas')

// Función para cambiar de bloque
const cambiarBloque = (bloque: 'normas' | 'util' | 'salud' | 'seguridad') => {
  bloqueActivo.value = bloque
}
</script>

<template>
  <div class="min-h-screen bg-black text-white font-sans relative selection:bg-brand-yellow selection:text-black">
    
    <div class="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-brand-purple/30 to-black pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto pt-24 pb-24 px-4 md:px-8">
      
      <header class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
          Información <span class="text-brand-yellow">General</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Todo lo que necesitas saber para disfrutar de ESCLAT al máximo, con total seguridad y comodidad.
        </p>
      </header>

      <nav class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        
        <button 
          @click="cambiarBloque('normas')"
          :class="[
            'border-2 px-6 py-8 text-center transition-all duration-300 uppercase font-black tracking-wider flex flex-col items-center justify-center gap-3',
            bloqueActivo === 'normas' 
              ? 'border-brand-yellow bg-brand-purple shadow-[0_0_20px_rgba(234,179,8,0.4)] text-brand-yellow scale-105' 
              : 'border-brand-yellow bg-black text-white hover:bg-brand-purple/20'
          ]"
        >
          <FileText :size="28" />
          <span>Normas</span>
        </button>

        <button 
          @click="cambiarBloque('util')"
          :class="[
            'border-2 px-6 py-8 text-center transition-all duration-300 uppercase font-black tracking-wider flex flex-col items-center justify-center gap-3',
            bloqueActivo === 'util' 
              ? 'border-brand-yellow bg-brand-purple shadow-[0_0_20px_rgba(234,179,8,0.4)] text-brand-yellow scale-105' 
              : 'border-brand-yellow bg-black text-white hover:bg-brand-purple/20'
          ]"
        >
          <Info :size="28" />
          <span>Info Útil</span>
        </button>

        <button 
          @click="cambiarBloque('salud')"
          :class="[
            'border-2 px-6 py-8 text-center transition-all duration-300 uppercase font-black tracking-wider flex flex-col items-center justify-center gap-3',
            bloqueActivo === 'salud' 
              ? 'border-brand-yellow bg-brand-purple shadow-[0_0_20px_rgba(234,179,8,0.4)] text-brand-yellow scale-105' 
              : 'border-brand-yellow bg-black text-white hover:bg-brand-purple/20'
          ]"
        >
          <Heart :size="28" />
          <span>Salud</span>
        </button>

        <button 
          @click="cambiarBloque('seguridad')"
          :class="[
            'border-2 px-6 py-8 text-center transition-all duration-300 uppercase font-black tracking-wider flex flex-col items-center justify-center gap-3',
            bloqueActivo === 'seguridad' 
              ? 'border-brand-yellow bg-brand-purple shadow-[0_0_20px_rgba(234,179,8,0.4)] text-brand-yellow scale-105' 
              : 'border-brand-yellow bg-black text-white hover:bg-brand-purple/20'
          ]"
        >
          <Shield :size="28" />
          <span>Seguridad</span>
        </button>

      </nav>

      <main class="bg-white/5 border border-white/10 p-6 md:p-10 rounded-xl backdrop-blur-sm min-h-[300px]">
        
        <div v-if="bloqueActivo === 'normas'" class="space-y-8 animate-fadeIn">
          <div>
            <h2 class="text-2xl md:text-3xl font-extrabold text-brand-yellow uppercase mb-4">POLÍTICA SOBRE DROGAS: TOLERANCIA CERO</h2>
            <p class="text-gray-300 leading-relaxed mb-4">
              La posesión, consumo y venta de drogas —independientemente del tipo o la cantidad— son todos delitos penales. La ley no hace distinción entre las llamadas drogas 'blandas' o 'duras', y las penas pueden ser severas, incluyendo prisión. El país aplica una política de tolerancia cero a todos en su territorio.
            </p>
            <p class="text-gray-300 leading-relaxed mb-4">
              Si te encuentras en posesión de sustancias ilegales, corres el riesgo de ser arrestado, procesado bajo la ley y graves consecuencias legales. No hay sistema de advertencia ni excepciones para turistas.
            </p>
            <div class="bg-red-500/10 border-l-4 border-red-500 p-4 text-red-200 font-medium">
              Recomendamos encarecidamente a todos los visitantes: no traigan ni consuman drogas. Evita ponerte en riesgo a ti y a los demás, y ayúdanos a mantener el festival seguro y agradable para todos.
            </div>
          </div>
        </div>

        <div v-slot v-if="bloqueActivo === 'util'" class="space-y-8 animate-fadeIn">
          <div>
            <h2 class="text-2xl md:text-3xl font-extrabold text-brand-blue uppercase mb-4">CUIDADOS DE ESCLAT</h2>
            <p class="text-gray-300 leading-relaxed mb-4">
              Nuestro programa Cuidados de ESCLAT ofrece una solución a cualquier problema que puedas tener durante el festival. Para que puedas sentirte seguro y cómodo.
            </p>
            <p class="text-gray-300 leading-relaxed mb-4">
              Si necesitas apoyo mental o una buena conversación, buscas ayuda con un problema médico especial o has pasado por algo desagradable, puedes encontrarnos en muchos lugares de ESCLAT. 
            </p>
            <p class="text-gray-300 leading-relaxed">
              Nuestros Puntos de Atención y el Punto de Información en la entrada principal te ayudarán a encontrar la ayuda adecuada o a orientarte. Aquí, nuestro Punto de Atención Mental ofrece asesoramiento mental y charlas de apoyo y prevención. Si sientes que no puedes manejar tu carga mental, visita nuestro Punto de Crisis.
            </p>
          </div>
        </div>

        <div v-slot v-if="bloqueActivo === 'salud'" class="space-y-8 animate-fadeIn">
          <div>
            <h2 class="text-2xl md:text-3xl font-extrabold text-brand-green uppercase mb-4">PRIMEROS AUXILIOS</h2>
            <p class="text-gray-300 leading-relaxed mb-4">
              En ESCLAT, nuestro Equipo de Primeros Auxilios de Ayuda, el Servicio Nacional de Ambulancias y el Centro Médico se encargan de tu salud y problemas médicos.
            </p>
            <p class="text-gray-300 leading-relaxed mb-4">
              Si necesitas atención médica, recurre a nuestro personal médico en el Centro Médico. El personal médico contactará con el hospital si es necesario. Si no puedes acudir al Centro Médico, busca el punto de atención más cercano, la patrulla de primeros auxilios, o pregunta a un guardia de seguridad o miembro del personal. Llamarán para pedir ayuda. Si tú o alguien resulta gravemente herido, llama al 112 y contacta con nosotros inmediatamente.
            </p>
            <p class="text-gray-300 leading-relaxed">
              El Centro Médico también te ofrece almacenamiento gratuito para tus medicamentos recetados y una sala de higiene para tus necesidades médicas especiales. Si tienes alguna pregunta relacionada con la salud, pregunta al Servicio de Atención al Cliente de la Zona de Bienestar. Seguro que sabrán la solución. ¡No dudes en preguntarles!
            </p>
          </div>

          <div class="border-t border-white/10 pt-6">
            <h3 class="text-xl font-bold text-white mb-2">NORMATIVAS COVID</h3>
            <p class="text-gray-400 leading-relaxed">
              La seguridad de nuestros asistentes y artistas es una prioridad máxima para nosotros. Monitorizamos de cerca la situación del COVID y seguremos las normativas oficiales del gobierno. Así que no es necesario llevar mascarilla ni mostrar el pase verde COVID en el Festival. Sugerimos llevar gel desinfectante y lavarse las manos con frecuencia.
            </p>
          </div>
        </div>

        <div v-slot v-if="bloqueActivo === 'seguridad'" class="space-y-8 animate-fadeIn">
          <div>
            <h2 class="text-2xl md:text-3xl font-extrabold text-brand-purple mb-4 uppercase">PUNTO VIOLETA</h2>
            <p class="text-gray-300 leading-relaxed mb-4">
              Dentro del programa de cuidados nace nuestro Punto Violeta para que disfrutes con total tranquilidad. Queremos que te sientas libre, segur@ y respetad@ en todo momento.
            </p>
            <p class="text-gray-300 leading-relaxed mb-4">
              Si has sufrido una situación incómoda, has presenciado una agresión, necesitas denunciar una actitud machista o LGTBIQ+fóbica, o simplemente buscas un espacio tranquilo para desahogarte y recibir apoyo, estamos aquí para ti. Puedes encontrarnos en varios puntos estratégicos de ESCLAT. En nuestro Punto Violeta te ofreceremos información, acompañamiento y orientación inmediata.
            </p>
            <p class="text-gray-300 font-semibold text-brand-yellow mb-6">
              Aquí no juzgamos a nadie: te escuchamos, te protegemos y te ayudamos. Si necesitas asistencia psicológica urgente o activar un protocolo de seguridad, dirígete directamente a nuestro Espacio de Cuidado y Crisis. Tu bienestar es nuestra prioridad.
            </p>
          </div>

          <div class="border-t border-white/10 pt-6">
            <h3 class="text-xl font-bold text-white mb-3">SEGURIDAD @ESCLAT</h3>
            <p class="text-gray-400 leading-relaxed mb-4">
              Prestamos especial atención a la seguridad de los visitantes. En las entradas, un sistema de 'check-in' ayuda a identificar si el usuario autorizado quiere entrar. El entretenimiento seguro lo proporcionan el personal de seguridad y médico, y trabajamos con la policía y el Centro Antiterrorista.
            </p>
            <p class="text-gray-400 leading-relaxed">
              Antes de salir de casa, deberías revisar la lista de artículos que pueden y no pueden llevarse al festival. En el control de seguridad de la entrada, los objetos que no puedan entrar serán filtrados por tu seguridad. Asegúrate de llevar un documento de identidad con foto al entrar, lo necesitarás para poder entrar.
            </p>
          </div>
        </div>

      </main>

    </div>
  </div>
</template>

<style scoped>
/* Animación suave para que el contenido aparezca con flow al cambiar de pestaña */
.animate-fadeIn {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>