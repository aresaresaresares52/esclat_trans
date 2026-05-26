<script setup lang="ts">
import { 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle2, 
  Accessibility,
  Mail
} from 'lucide-vue-next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

// Datos embebidos bien estructurados
const faqs = [
  {
    value: 'item-1',
    question: '¿Habrán entradas en taquilla?',
    answer: 'Recomendamos reservar tu entrada en la web oficial de ESCLAT, donde estarán disponibles hasta completar aforo. En caso de que no se complete, dispondremos de taquilla en la entrada principal durante el horario de apertura del festival; de lo contrario, no podemos garantizar la validez de su entrada.'
  },
  {
    value: 'item-2',
    question: 'No he recibido ningún correo electrónico con mi ticket. ¿Qué pasa?',
    answer: 'Tu entrada puede tardar un máximo de 24 horas en llegar; en caso de que no haya ocurrido, por favor compruebe los siguientes pasos:',
    steps: [
      'Revisa la carpeta de SPAM/promociones en tu buzón. Tu enlace de activación llega desde la siguiente dirección de correo electrónico: esclatfestival@gmail.com',
      'Comprueba en tu cuenta bancaria que se te haya realizado el cobro.',
      'Si tras 24 horas tus entradas siguen sin aparecer en tu bandeja de entrada, por favor, escribe un correo electrónico a la dirección esclatproblemas@gmail.com'
    ]
  },
  {
    value: 'item-3',
    question: 'Lo que necesitas saber sobre tu entrada de un día.',
    answer: 'Puedes estar en el recinto del festival 1 hora antes del primer evento y hasta media hora después de que termine el último.'
  },
  {
    value: 'item-4',
    question: '¿Qué necesitas para entrar en el festival?',
    answer: 'Un DNI/pasaporte válido para identificación, el QR de tu entrada de ESCLAT (consejo: añádelo a tu cartera online en cuanto llegue a tu bandeja de entrada) y, por supuesto, tú.'
  },
  {
    value: 'item-5',
    question: '¿Necesitan los niños entradas?',
    answer: '¡Los clientes más pequeños también son bienvenidos a ESCLAT! Los niños menores de 12 años pueden entrar obligatoriamente acompañados de un adulto. Se debe traer al evento un documento escrito facilitando el contacto telefónico de la persona responsable y el nombre del niño o niños. Por favor, trae también un documento de identidad válido para el niño. Los menores de 18 años solo pueden entrar en el recinto con un adulto o una autorización firmada por su correspondiente.'
  },
  {
    value: 'item-6',
    question: 'Soy un cliente con discapacidad. ¿Hay algún billete específico que debería comprar? ¿De qué debería estar consciente?',
    answer: 'No, deberás guardar el único tipo de entrada disponible. Pero deberás marcar el recuadro indicado para personas con discapacidad.',
    servicesTitle: 'Contamos con los siguientes servicios adaptados:',
    services: [
      'Servicios internos como baños para discapacitados',
      'Neveras para medicinas',
      'Electricidad para cargar sillas de ruedas electrónicas',
      'Ubicaciones dedicadas para ver los conciertos',
      'Servicios de transporte',
      'Alquiler de silla de ruedas',
      'Asistencia a personas con discapacidad visual',
      'Solicitudes disponibles para intérpretes internacionales y de lenguas de signos.'
    ]
  }
]
</script>

<template>
  <div class="min-h-screen bg-[#111111] text-white pb-32 pt-12">
    
    <div class="text-center mb-16 px-4">
      <span class="inline-flex items-center gap-1.5 bg-brand-blue text-black font-black uppercase text-xs tracking-widest px-3 py-1 border-2 border-black mb-4 shadow-[2px_2px_0_0_#000]">
        <HelpCircle class="w-3.5 h-3.5 stroke-[3]" /> AYUDA & SOPORTE
      </span>
      <h1 class="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-white">
        PREGUNTAS <span class="text-brand-yellow">FRECUENTES</span>
      </h1>
    </div>

    <div class="max-w-4xl mx-auto px-4 md:px-8">
      
      <div class="border-4 border-black bg-brand-yellow p-4 mb-8 shadow-[4px_4px_0_0_#000] flex items-center justify-between">
        <h2 class="text-xl md:text-2xl font-black text-black uppercase tracking-tight">
          [ SOBRE LAS ENTRADAS ]
        </h2>
      </div>

      <Accordion type="single" collapsible class="w-full space-y-6">
        <AccordionItem 
          v-for="faq in faqs" 
          :key="faq.value" 
          :value="faq.value"
          class="bg-[#1a1a1a] border-4 border-black transition-all shadow-[4px_4px_0_0_theme(colors.brand.yellow)] data-[state=open]:shadow-[6px_6px_0_0_theme(colors.brand.blue)]"
        >
          <AccordionTrigger class="p-5 md:p-6 text-left text-base md:text-lg font-bold uppercase tracking-tight text-white hover:no-underline [&_svg]:text-brand-yellow [&_svg]:stroke-[3]">
            {{ faq.question }}
          </AccordionTrigger>

          <AccordionContent class="border-t-4 border-black p-5 md:p-6 bg-[#151515] text-gray-300 font-medium leading-relaxed text-sm md:text-base">
            <p>{{ faq.answer }}</p>

            <ol v-if="faq.steps" class="mt-4 space-y-3 list-none pl-0">
              <li 
                v-for="(step, sIndex) in faq.steps" 
                :key="sIndex"
                class="flex items-start gap-3 bg-[#222] p-3 border-2 border-black shadow-[2px_2px_0_0_#000]"
              >
                <span class="bg-brand-blue text-black font-black w-6 h-6 flex items-center justify-center text-xs shrink-0 border border-black">
                  {{ sIndex + 1 }}
                </span>
                <span>{{ step }}</span>
              </li>
            </ol>

            <div v-if="faq.services" class="mt-5">
              <p class="font-black text-brand-blue uppercase tracking-tight mb-3 flex items-center gap-2 text-sm">
                <Accessibility class="w-4 h-4 stroke-[2.5]" /> {{ faq.servicesTitle }}
              </p>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
                <li 
                  v-for="(service, scrIndex) in faq.services" 
                  :key="scrIndex"
                  class="flex items-center gap-2 text-sm bg-black/40 px-3 py-2 border border-neutral-800"
                >
                  <CheckCircle2 class="w-4 h-4 text-brand-yellow shrink-0 stroke-[2.5]" />
                  <span>{{ service }}</span>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div class="mt-16 bg-[#111] border-4 border-dashed border-neutral-700 p-6 text-center flex flex-col items-center justify-center gap-2">
        <AlertTriangle class="w-6 h-6 text-brand-yellow stroke-[2.5]" />
        <p class="text-sm uppercase tracking-wider text-gray-400">¿Sigues teniendo dudas?</p>
        <a href="mailto:esclatproblemas@gmail.com" class="inline-flex items-center gap-2 text-lg font-black text-brand-blue uppercase hover:underline">
          <Mail class="w-5 h-5 stroke-[2.5]" /> esclatproblemas@gmail.com
        </a>
      </div>

    </div>
  </div>
</template>