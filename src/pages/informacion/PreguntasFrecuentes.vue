<script setup lang="ts">
import { ref } from 'vue'
import { FileText, Utensils, HelpCircle } from 'lucide-vue-next'

const bloqueActivo = ref<'entradas' | 'comida_bebida' | 'util'>('entradas')

const cambiarBloque = (bloque: 'entradas' | 'comida_bebida' | 'util') => {
  bloqueActivo.value = bloque
}
</script>

<template>
  <div class="min-h-screen bg-background text-white font-sans relative">
    
    <div 
      class="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-brand-purple/40 via-brand-purple/10 to-background pointer-events-none"
    ></div>

    <div class="relative max-w-6xl mx-auto pt-16 pb-24 px-4 md:px-0">
      
      <header class="text-center mb-16">
        <h1 class="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter text-white mb-4">
          PREGUNTAS <span class="text-brand-yellow">FRECUENTES</span>
        </h1>
        <p class="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
          Resolvemos todas tus dudas sobre entradas, servicios y el funcionamiento de ESCLAT.
        </p>
      </header>

      <nav class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        
        <button 
          @click="cambiarBloque('entradas')"
          :class="[
            'border-2 px-6 py-12 text-center transition-all duration-300 uppercase font-black tracking-widest flex flex-col items-center justify-center gap-5',
            bloqueActivo === 'entradas' 
              ? 'border-brand-yellow bg-brand-purple shadow-[0_0_30px_rgba(234,179,8,0.4)] text-brand-yellow scale-105 z-10' 
              : 'border-brand-yellow bg-background text-white hover:bg-brand-purple/20'
          ]"
        >
          <FileText :size="40" />
          <span class="text-base md:text-lg">Sobre las Entradas</span>
        </button>

        <button 
          @click="cambiarBloque('comida_bebida')"
          :class="[
            'border-2 px-6 py-12 text-center transition-all duration-300 uppercase font-black tracking-widest flex flex-col items-center justify-center gap-5',
            bloqueActivo === 'comida_bebida' 
              ? 'border-brand-yellow bg-brand-purple shadow-[0_0_30px_rgba(234,179,8,0.4)] text-brand-yellow scale-105 z-10' 
              : 'border-brand-yellow bg-background text-white hover:bg-brand-purple/20'
          ]"
        >
          <Utensils :size="40" />
          <span class="text-base md:text-lg">Comida y Bebida</span>
        </button>

        <button 
          @click="cambiarBloque('util')"
          :class="[
            'border-2 px-6 py-12 text-center transition-all duration-300 uppercase font-black tracking-widest flex flex-col items-center justify-center gap-5',
            bloqueActivo === 'util' 
              ? 'border-brand-yellow bg-brand-purple shadow-[0_0_30px_rgba(234,179,8,0.4)] text-brand-yellow scale-105 z-10' 
              : 'border-brand-yellow bg-background text-white hover:bg-brand-purple/20'
          ]"
        >
          <HelpCircle :size="40" />
          <span class="text-base md:text-lg">Información Útil</span>
        </button>

      </nav>

      <main class="bg-white/5 border border-white/10 p-8 md:p-14 rounded-2xl backdrop-blur-md">
        
        <div v-if="bloqueActivo === 'entradas'" class="animate-fadeIn space-y-10">
          
          <div class="border-b border-white/10 pb-10">
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">¿Habrán entradas en taquilla?</h3>
            <p class="text-gray-300 text-lg leading-relaxed">Recomendamos reservar tu entrada en la web oficial de ESCLAT, donde estarán disponibles hasta completar aforo. En caso de que no se complete, dispondremos de taquilla en la entrada principal durante el horario de apertura del festival; de lo contrario, no podemos garantizar la validez de su entrada.</p>
          </div>

          <div class="border-b border-white/10 pb-10">
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">No he recibido ningún correo electrónico con mi ticket. ¿Qué pasa?</h3>
            <p class="text-gray-300 text-lg leading-relaxed mb-4">Tu entrada puede tardar un máximo de 24 horas en llegar; en caso de que no haya ocurrido, por favor compruebe los siguientes pasos:</p>
            <ul class="space-y-3 pl-6 list-disc text-gray-300 text-lg">
              <li>Revisa la carpeta de SPAM/promociones en tu buzón. Tu enlace de activación llega desde la siguiente dirección de correo electrónico: <span class="text-brand-yellow font-bold">esclatfestival@gmail.com</span></li>
              <li>Comprueba en tu cuenta bancaria que se te haya realizado el cobro.</li>
              <li>Si tras 24 horas tus entradas siguen sin aparecer en tu bandeja de entrada, por favor, escribe un correo electrónico a la dirección <span class="text-brand-yellow font-bold">esclatproblemas@gmail.com</span></li>
            </ul>
          </div>

          <div class="border-b border-white/10 pb-10">
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">Lo que necesitas saber sobre tu entrada de un día.</h3>
            <p class="text-gray-300 text-lg leading-relaxed">Puedes estar en el recinto del festival 1 hora antes del primer evento y hasta media hora después de que termine el último.</p>
          </div>

          <div class="border-b border-white/10 pb-10">
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">¿Qué necesitas para entrar en el festival?</h3>
            <p class="text-gray-300 text-lg leading-relaxed">Un DNI/pasaporte válido para identificación, el QR de tu entrada de ESCLAT (consejo: añádelo a tu cartera online en cuanto llegue a tu bandeja de entrada) y, por supuesto, tú.</p>
          </div>

          <div class="border-b border-white/10 pb-10">
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">¿Necesitan los niños entradas?</h3>
            <p class="text-gray-300 text-lg leading-relaxed mb-3">¡Los clientes más pequeños también son bienvenidos a ESCLAT! Los niños menores de 12 años pueden entrar obligatoriamente acompañados de un adulto. Se debe traer al evento un documento escrito facilitando el contacto telefónico de la persona responsable y el nombre del niño o niños. Por favor, trae también un documento de identidad válido para el niño.</p>
            <p class="text-gray-300 text-lg leading-relaxed">Los menores de 18 años solo pueden entrar en el recinto con un adulto o una autorización firmada por su correspondiente.</p>
          </div>

          <div class="border-b border-white/10 pb-10">
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">Soy un cliente con discapacidad. ¿Hay algún billete específico que debería comprar? ¿De qué debería estar consciente?</h3>
            <p class="text-gray-300 text-lg leading-relaxed mb-4">No, deberás guardar el único tipo de entrada disponible. Pero deberás marcar el recuadro indicado para personas con discapacidad. Contamos con los siguientes servicios adaptados:</p>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-lg pl-6 list-disc">
              <li>Servicios internos como baños para discapacitados</li>
              <li>Neveras para medicinas</li>
              <li>Electricidad para cargar sillas de ruedas electrónicas</li>
              <li>Ubicaciones dedicadas para ver los conciertos</li>
              <li>Servicios de transporte</li>
              <li>Alquiler de silla de ruedas</li>
              <li>Asistencia a personas con discapacidad visual</li>
              <li>Solicitudes disponibles para intérpretes internacionales y de lenguas de signos.</li>
            </ul>
          </div>

          <div class="border-b border-white/10 pb-10">
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">¿Cómo funciona el sistema de 'check-in' en las entradas?</h3>
            <p class="text-gray-300 text-lg leading-relaxed">Para garantizar la seguridad de todos los asistentes, ESCLAT cuenta con un sistema de control fotográfico y de identidad en los accesos. Al entrar, el personal de seguridad verificará que el código QR corresponda con el nombre de tu DNI o pasaporte. El proceso es rápido, pero te recomendamos llegar con antelación y tener tu documentación a mano.</p>
          </div>

          <div class="border-b border-white/10 pb-10">
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">Tengo mi entrada y finalmente no puedo asistir. ¿Qué hago con mi entrada?</h3>
            <p class="text-gray-300 text-lg leading-relaxed">Sé responsable y devuélvela, en la seccion de entradas tenemos un apartado de devolucion donde solo deberas introducir el gmail con el que las compraste, te enviaremos un codigo para verificar que es tu gmail y lo demas lo solucionamos nosotros.</p>
          </div>

          <div>
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">No puedo ir, ¿le puedo dar mi entrada a un amigo?</h3>
            <p class="text-gray-300 text-lg leading-relaxed">Si escríbenos un gmail a esclatproblemas@gmail.com indicando tu nombre apellidos y gmail y el de la persona a la que quieres transferirselas y gestionaremos el cambio, el mismo qr seguira siendo valido.</p>
          </div>
        </div>

        <div v-if="bloqueActivo === 'comida_bebida'" class="animate-fadeIn space-y-10">
          
          <div class="border-b border-white/10 pb-10">
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">¿Habrá agua gratis?</h3>
            <p class="text-gray-300 text-lg leading-relaxed">Sí, en ESCLAT nos comprometemos con las personas, el recinto dispondrá de dos fuentes, una en cada patio, en las que podrás beber o rellenar tu cantimplora.</p>
          </div>

          <div class="border-b border-white/10 pb-10">
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">¿Habrá bar o barra?</h3>
            <p class="text-gray-300 text-lg leading-relaxed">¡Sí! Las naves cuentan con una cafetería en el primer piso, que sirve todo tipo de bebidas y comida. Además, montaremos una barra en el patio 2, accesible para todo el mundo.</p>
          </div>

          <div class="border-b border-white/10 pb-10">
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">¿Se puede pagar con tarjeta?</h3>
            <p class="text-gray-300 text-lg leading-relaxed">Sí, se aceptarán pagos con tarjeta en todos los puntos de venta del festival para tu comodidad.</p>
          </div>

          <div class="border-b border-white/10 pb-10">
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">¿Se puede comer allí?</h3>
            <p class="text-gray-300 text-lg leading-relaxed">Sí, en la cafetería situada en la primera planta dispondrás de un espacio cómodo habilitado para consumir alimentos.</p>
          </div>

          <div>
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">¿Me puedo traer mi propia comida y bebida?</h3>
            <p class="text-gray-300 text-lg leading-relaxed mb-3">Sí, se puede llevar una botella con un máximo de 2 litros de agua embotellada. Por favor, no tires envases al suelo, ESCLAT está concienciado con el medio ambiente y dispone de múltiples papeleras por todo el recinto.</p>
            <p class="text-gray-300 text-lg leading-relaxed">Puedes traer comida en cantidades no comerciales. Si superas los límites, los productos restantes deben entregarse al servicio de seguridad en la entrada.</p>
          </div>
        </div>

        <div v-if="bloqueActivo === 'util'" class="animate-fadeIn space-y-10">
          
          <div class="border-b border-white/10 pb-10">
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">¿Se puede entrar y salir del recinto a voluntad?</h3>
            <p class="text-gray-300 text-lg leading-relaxed">Sí, pidiendo en recepción una pulsera identificatoria. Este servicio tiene un precio de 2 euros.</p>
          </div>

          <div class="border-b border-white/10 pb-10">
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">¿Está permitido fumar?</h3>
            <p class="text-gray-300 text-lg leading-relaxed">Está prohibido fumar dentro del recinto, incluido patios. Para poder entrar y salir con libertad tendrás que pedir una pulsera de 2 euros en recepción.</p>
          </div>

          <div>
            <h3 class="text-2xl font-extrabold text-brand-yellow uppercase mb-4">¿Puedo llevar a mi mascota?</h3>
            <p class="text-gray-300 text-lg leading-relaxed">Además de los perros de asistencia según lo definido por la ley, los perros guía y los perros policía, no está permitido llevar mascotas al festival por su propio bien, ya que no es un ambiente adecuado dado el alto nivel de ruido y la gran cantidad de gente que podrán encontrar.</p>
          </div>
        </div>

      </main>

      <div class="mt-20 bg-background border-4 border-dashed border-neutral-700 p-8 text-center flex flex-col items-center justify-center gap-2">
        <p class="text-sm uppercase tracking-wider text-gray-400">¿Sigues teniendo dudas?</p>
        <a href="mailto:esclatproblemas@gmail.com" class="inline-flex items-center gap-2 text-xl font-black text-brand-blue uppercase hover:underline">
          esclatproblemas@gmail.com
        </a>
      </div>

    </div>
  </div>
</template>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.4s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>