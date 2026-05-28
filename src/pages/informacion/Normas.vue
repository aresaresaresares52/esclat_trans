<script setup lang="ts">
import { AlertTriangle, Mail, ShieldAlert, HeartPulse } from 'lucide-vue-next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
</script>

<template>
  <div class="font-sans bg-[#111111] text-white">
    
    <div class="text-center mb-16 px-4">
      <h1 class="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-white">
        NORMAS Y <span class="text-brand-yellow">SEGURIDAD</span>
      </h1>
    </div>

    <div class="max-w-4xl mx-auto px-4 md:px-0">
      
      <Accordion type="multiple" :default-value="['normas-generales', 'salud-bienestar']" class="w-full space-y-12">
        
        <AccordionItem 
          value="normas-generales"
          class="border-4 border-black bg-[#1a1a1a] shadow-[6px_6px_0_0_#000] transition-all"
        >
          <AccordionTrigger class="p-5 bg-brand-yellow text-black hover:no-underline flex items-center justify-between [&_svg]:stroke-[3]">
            <div class="flex items-center gap-3 text-xl md:text-2xl font-black uppercase tracking-tight text-black">
              <ShieldAlert class="w-6 h-6 shrink-0" />
              <span>[ 1. NORMAS DE SEGURIDAD Y CONTROL DE OBJETOS ]</span>
            </div>
          </AccordionTrigger>

          <AccordionContent class="p-6 bg-[#151515] text-gray-300 space-y-4">
            
            <Accordion type="single" collapsible class="w-full space-y-4">
              
              <AccordionItem value="sub-objetos" class="bg-[#222] border-2 border-black">
                <AccordionTrigger class="p-4 text-left font-bold uppercase text-white hover:no-underline text-base [&_svg]:text-brand-yellow">
                  Lista de Objetos Permitidos y Prohibidos
                </AccordionTrigger>
                <AccordionContent class="p-4 bg-[#1a1a1a] border-t border-black space-y-6">
                  <!-- Textos con mismo tamaño y color que otras secciones (text-lg text-gray-300) -->
                  <div>
                    <h3 class="font-bold text-brand-green uppercase mb-3 text-xl">✓ OBJETOS PERMITIDOS</h3>
                    <ul class="space-y-2 text-lg leading-relaxed text-gray-300">
                      <li>&gt; Mochilas pequeñas hasta 24 litros (52cm alto, 25 cm ancho, 22 cm profundidad máximo), bolsos, riñoneras.</li>
                      <li>&gt; Protector solar en crema pequeño tipo viaje (no aerosol).</li>
                      <li>&gt; Cámaras de foto compactas.</li>
                    </ul>
                  </div>
                  <div class="pt-4 border-t border-white/10">
                    <h3 class="font-bold text-red-500 uppercase mb-3 text-xl ">✕ OBJETOS NO PERMITIDOS</h3>
                    <!-- Textos con mismo tamaño y color que otras secciones (text-lg text-gray-300) -->
                    <ul class="space-y-1.5 text-lg leading-relaxed text-gray-300">
                      <li>&gt; Recipientes de vidrio o latas.</li>
                      <li>&gt; Objetos punzantes o peligrosos.</li>
                      <li>&gt; Objetos cortantes ni armas de ningún tipo.</li>
                      <li>&gt; Sillas de playa, sombrillas, hamacas.</li>
                      <li>&gt; Aerosoles (inflamables).</li>
                      <li>&gt; Bicicletas, patines, skates, cascos de moto.</li>
                      <li>&gt; Botellas, petacas, cantimploras.</li>
                      <li>&gt; Fuegos artificiales, bengalas, petardos.</li>
                      <li>&gt; Palo selfie, trípodes.</li>
                      <li>&gt; Punteros láser, linternas.</li>
                      <li>&gt; Cámaras profesionales de foto/vídeo.</li>
                      <li>&gt; Mochilas grandes y maletas.</li>
                      <li>&gt; Instrumentos musicales.</li>
                      <li>&gt; Animales.</li>
                      <li>&gt; Drogas ilegales.</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sub-casa" class="bg-[#222] border-2 border-black">
                <AccordionTrigger class="p-4 text-left font-bold uppercase text-white hover:no-underline text-base [&_svg]:text-brand-yellow">
                  Por favor déjalo en casa
                </AccordionTrigger>
                <AccordionContent class="p-4 bg-[#1a1a1a] border-t border-black text-lg leading-relaxed text-gray-300">
                  Está prohibido introducir alcohol, dispositivos pirotécnicos, objetos de vidrio, paraguas, objetos o herramientas que contengan materiales explosivos, venenosos o inflamables (por ejemplo, utensilios de cocina accionados con gas), armas de fuego, cuchillos, cuchillos mariposa, navajas, sprays de gas, porras expandibles, cadenas metálicas de más de 50 cm de longitud, estrellas arrojadizas, resorteras y otros objetos que supongan una amenaza especial para la seguridad pública según lo definido en las leyes y normativas pertinentes. Estos productos deben entregarse al servicio de seguridad para su inspección en la entrada.
                </AccordionContent>
              </AccordionItem>

            </Accordion>

          </AccordionContent>
        </AccordionItem>

        <AccordionItem 
          value="salud-bienestar"
          class="border-4 border-black bg-[#1a1a1a] shadow-[6px_6px_0_0_#000] transition-all"
        >
          <AccordionTrigger class="p-5 bg-brand-yellow text-black hover:no-underline flex items-center justify-between [&_svg]:stroke-[3]">
            <div class="flex items-center gap-3 text-xl md:text-2xl font-black uppercase tracking-tight text-black">
              <HeartPulse class="w-6 h-6 shrink-0" />
              <span>[ 2. SALUD, PREVENCIÓN Y PRIMEROS AUXILIOS ]</span>
            </div>
          </AccordionTrigger>

          <AccordionContent class="p-6 bg-[#151515] text-gray-300 space-y-4">
            
            <Accordion type="single" collapsible class="w-full space-y-4">
              
              <AccordionItem value="sub-cuidados" class="bg-[#222] border-2 border-black">
                <AccordionTrigger class="p-4 text-left font-bold uppercase text-white hover:no-underline text-base [&_svg]:text-brand-yellow">
                  Cuidados de ESCLAT
                </AccordionTrigger>
                <AccordionContent class="p-4 bg-[#1a1a1a] border-t border-black text-lg leading-relaxed">
                  Nuestro programa Cuidados de ESCLAT ofrece una solución a cualquier problema que puedas tener durante el festival. Para que puedas sentirte seguro y cómodo. Si necesitas apoyo mental o una buena conversación, buscas ayuda con un problema médico especial o has pasado por algo desagradable, puedes encontrarnos en muchos lugares de ESCLAT. Nuestros Puntos de Atención y el Punto de Información en la entrada principal te ayudarán a encontrar la ayuda adecuada o a orientarte. Aquí, nuestro Punto de Atención Mental ofrece asesoramiento mental y charlas de apoyo y prevención. Si sientes que no puedes manejar tu carga mental, visita nuestro Punto de Crisis.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sub-violeta" class="bg-[#222] border-2 border-black">
                <AccordionTrigger class="p-4 text-left font-bold uppercase text-white hover:no-underline text-base [&_svg]:text-brand-yellow">
                  Punto Violeta
                </AccordionTrigger>
                <AccordionContent class="p-4 bg-[#1a1a1a] border-t border-black text-lg leading-relaxed">
                  Dentro del programa de cuidados nace nuestro Punto Violeta para que disfrutes con total tranquilidad. Queremos que te sientas libre, segur@ y respetad@ en todo momento. Si has sufrido una situación incómoda, has presenciado una agresión, necesitas denunciar una actitud machista o LGTBIQ+fóbica, o simplemente buscas un espacio tranquilo para desahogarte y recibir apoyo, estamos aquí para ti. Puedes encontrarnos en varios puntos estratégicos de ESCLAT. En nuestro Punto Violeta te ofreceremos información, acompañamiento y orientación inmediata. Aquí no juzgamos a nadie: te escuchamos, te protegemos y te ayudamos. Si necesitas asistencia psicológica urgente o activar un protocolo de seguridad, dirígete directamente a nuestro Espacio de Cuidado y Crisis. Tu bienestar es nuestra prioridad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sub-drogas" class="bg-[#222] border-2 border-black">
                <AccordionTrigger class="p-4 text-left font-bold uppercase text-white hover:no-underline text-base [&_svg]:text-brand-yellow">
                  Política sobre Drogas: Tolerancia Cero
                </AccordionTrigger>
                <AccordionContent class="p-4 bg-[#1a1a1a] border-t border-black text-lg leading-relaxed">
                  <p class="font-bold text-red-400 uppercase mb-2">TOLERANCIA CERO</p>
                  La posesión, consumo y venta de drogas —independientemente del tipo o la cantidad— son todos delitos penales. La ley no hace distinción entre las llamadas drogas 'blandas' o 'duras', y las penas pueden ser severas, incluyendo prisión. El país aplica una política de tolerancia cero a todos en su territorio. Si te encuentras en posesión de sustancias ilegales, corres el riesgo de ser arrestado, procesado bajo la ley y graves consecuencias legales. No hay sistema de advertencia ni excepciones para turistas. Recomendamos encarecidamente a todos los visitantes: no traigan ni consuman drogas. Evita ponerte en riesgo a ti y a los demás, y ayúdanos a mantener el festival seguro y agradable para todos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sub-seguridad-esclat" class="bg-[#222] border-2 border-black">
                <AccordionTrigger class="p-4 text-left font-bold uppercase text-white hover:no-underline text-base [&_svg]:text-brand-yellow">
                  Seguridad @ESCLAT
                </AccordionTrigger>
                <AccordionContent class="p-4 bg-[#1a1a1a] border-t border-black text-lg leading-relaxed">
                  Prestamos especial atención a la seguridad de los visitantes. En las entradas, un sistema de 'check-in' ayuda a identificar si el usuario autorizado quiere entrar. El entretenimiento seguro lo proporcionan el personal de seguridad y médico, y trabajamos con la policía y el Centro Antiterrorista. Antes de salir de casa, deberías revisar la lista de artículos que pueden y no pueden llevarse al festival. En el control de seguridad de la entrada, los objetos que no puedan entrar serán filtrados por tu seguridad. Asegúrate de llevar un documento de identidad con foto al entrar, lo necesitarás para poder entrar.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sub-auxilios" class="bg-[#222] border-2 border-black">
                <AccordionTrigger class="p-4 text-left font-bold uppercase text-white hover:no-underline text-base [&_svg]:text-brand-yellow">
                  Primeros Auxilios
                </AccordionTrigger>
                <AccordionContent class="p-4 bg-[#1a1a1a] border-t border-black text-lg leading-relaxed">
                  En ESCLAT, nuestro Equipo de Primeros Auxilios de Ayuda, el Servicio Nacional de Ambulancias y el Centro Médico se encargan de tu salud y problemas médicos. Si necesitas atención médica, recurre a nuestro personal médico en el Centro Médico. El personal médico contactará con el hospital si es necesario. Si no puedes acudir al Centro Médico, busca el punto de atención más cercano, la patrulla de primeros auxilios, o pregunta a un guardia de seguridad o miembro del personal. Llamarán para pedir ayuda. Si tú o alguien resulta gravemente herido, llama al 112 y contacta con nosotros inmediatamente. El Centro Médico también te ofrece almacenamiento gratuito para tus medicamentos recetados y una sala de higiene para tus necesidades médicas especiales. Si tienes alguna pregunta relacionada con la salud, pregunta al Servicio de Atención al Cliente de la Zona de Bienestar. Seguro que sabrán la solución. ¡No dudes en preguntarles!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sub-covid" class="bg-[#222] border-2 border-black">
                <AccordionTrigger class="p-4 text-left font-bold uppercase text-white hover:no-underline text-base [&_svg]:text-brand-yellow">
                  Normativas COVID
                </AccordionTrigger>
                <AccordionContent class="p-4 bg-[#1a1a1a] border-t border-black text-lg leading-relaxed">
                  La seguridad de nuestros asistentes y artistas es una prioridad máxima para nosotros. Monitorizamos de cerca la situación del COVID y seguiremos las normativas oficiales del gobierno. Así que no es necesario llevar mascarilla ni mostrar el pase verde COVID en el Festival. Sugerimos llevar gel desinfectante y lavarse las manos con frecuencia.
                </AccordionContent>
              </AccordionItem>

            </Accordion>

          </AccordionContent>
        </AccordionItem>

      </Accordion>

      <div class="mt-16 bg-[#111] border-4 border-dashed border-neutral-700 p-6 text-center flex flex-col items-center justify-center gap-2">
        <AlertTriangle class="w-6 h-6 text-brand-yellow stroke-[2.5]" />
        <p class="text-lg uppercase tracking-wider text-gray-400">¿Sigues teniendo dudas sobre la normativa?</p>
        <a href="mailto:esclatproblemas@gmail.com" class="inline-flex items-center gap-2 text-lg font-black text-brand-blue uppercase hover:underline">
          <Mail class="w-5 h-5 stroke-[2.5]" /> esclatproblemas@gmail.com
        </a>
      </div>

    </div>
  </div>
</template>