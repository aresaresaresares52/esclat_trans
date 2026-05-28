<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { Ticket, CheckCircle2, RotateCcw } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

const route = useRoute()

// Query params reactivos
const tipo = computed(() => (route.query.tipo as string) || 'compra')
const ticketName = computed(() => (route.query.nombre as string) || 'Pase Festival')
const ticketQty = computed(() => Number(route.query.cantidad) || 1)

// Datos del formulario de compra
const form = ref({
  nombre: '',
  apellidos: '',
  ciudad: '',
  codigoPostal: '',
  telefono: '',
  email: '',
  confirmEmail: '',
  captchaAnswer: '',
  aceptarTerminos: false
})

// Respuestas del captcha inventado
const numA = ref(Math.floor(Math.random() * 9) + 1)
const numB = ref(Math.floor(Math.random() * 9) + 1)
const captchaCorrectAnswer = computed(() => numA.value + numB.value)

// Estado de la pasarela
const isSubmitted = ref(false)
const orderNumber = ref('')

// Devolución: Email y Código de 6 dígitos
const returnForm = ref({
  email: '',
  codigo: ''
})
const returnStep = ref(1) // 1 = Email, 2 = Código
const returnSubmitted = ref(false)

const handleCompraSubmit = () => {
  // Validaciones
  if (!form.value.nombre || !form.value.apellidos || !form.value.ciudad || !form.value.codigoPostal || !form.value.telefono || !form.value.email || !form.value.confirmEmail) {
    toast.error('Por favor, rellena todos los datos personales.')
    return
  }
  
  if (form.value.email.toLowerCase() !== form.value.confirmEmail.toLowerCase()) {
    toast.error('Los correos electrónicos no coinciden.')
    return
  }

  if (Number(form.value.captchaAnswer) !== captchaCorrectAnswer.value) {
    toast.error('La verificación humana (captcha) es incorrecta.')
    return
  }

  if (!form.value.aceptarTerminos) {
    toast.error('Debes aceptar los términos y condiciones del festival.')
    return
  }

  // Éxito
  orderNumber.value = 'ESC-' + Math.floor(100000 + Math.random() * 900000)
  isSubmitted.value = true
  toast.success('¡Entradas reservadas con éxito!')
}

const handleReturnEmailSubmit = () => {
  if (!returnForm.value.email) {
    toast.error('Por favor, introduce tu dirección de correo electrónico.')
    return
  }
  
  // Simulamos envío de código
  returnStep.value = 2
  toast.success('Te hemos enviado un código de 6 dígitos a tu email.')
}

const handleReturnCodeSubmit = () => {
  if (!returnForm.value.codigo || returnForm.value.codigo.length !== 6) {
    toast.error('El código debe tener exactamente 6 dígitos.')
    return
  }

  // Éxito de devolución
  returnSubmitted.value = true
  toast.success('Devolución procesada correctamente.')
}

const closeWindow = () => {
  window.close()
}
</script>

<template>
  <div class="min-h-screen bg-background text-white py-16 px-4 md:px-8 font-sans">
    <div class="max-w-xl mx-auto bg-white text-black border-4 border-black p-6 md:p-10 shadow-[12px_12px_0_0_theme(colors.brand.blue)]">
      
      <!-- Logo Esclat Pasarela -->
      <div class="flex items-center justify-between border-b-4 border-black pb-6 mb-8">
        <h1 class="text-3xl font-extrabold uppercase tracking-tight">
          <span class="bg-brand-yellow px-2 py-1 border-2 border-black inline-block -rotate-2">ESCLAT</span> PASARELA
        </h1>
        <button 
          @click="closeWindow" 
          class="text-sm font-bold uppercase border-2 border-black px-3 py-1.5 hover:bg-background hover:text-white transition-colors"
        >
          Cerrar
        </button>
      </div>

      <!-- VISTA COMPRA DE ENTRADAS -->
      <div v-if="tipo === 'compra'">
        
        <!-- Éxito Compra -->
        <div v-if="isSubmitted" class="text-center py-6 space-y-6">
          <div class="inline-flex items-center justify-center bg-brand-green border-4 border-black p-4 rounded-none -rotate-1">
            <CheckCircle2 :size="48" class="text-white" />
          </div>
          <h2 class="text-3xl font-black uppercase text-brand-green">¡RESERVA COMPLETADA!</h2>
          <div class="bg-brand-yellow border-4 border-black p-6 text-left space-y-3 font-mono shadow-[6px_6px_0_0_theme(colors.brand.purple)]">
            <div class="flex justify-between font-bold border-b border-black/20 pb-2">
              <span>LOCALIZADOR:</span>
              <span class="text-lg">{{ orderNumber }}</span>
            </div>
            <div>
              <span class="font-bold">ENTRADA:</span> {{ ticketName }}
            </div>
            <div>
              <span class="font-bold">CANTIDAD:</span> {{ ticketQty }} {{ ticketQty === 1 ? 'entrada' : 'entradas' }}
            </div>
            <div>
              <span class="font-bold">TITULAR:</span> {{ form.nombre }} {{ form.apellidos }}
            </div>
            <div class="text-xs text-black/60 pt-4 border-t border-black/20">
              * Se ha enviado un correo con tus entradas en formato PDF a {{ form.email }}. Recuerda presentarlas en Las Naves.
            </div>
          </div>
          
          <button 
            @click="closeWindow" 
            class="w-full bg-background text-white font-extrabold text-xl py-4 uppercase border-4 border-black hover:bg-brand-blue hover:text-black transition-colors shadow-[6px_6px_0_0_theme(colors.brand.yellow)]"
          >
            Finalizar y Cerrar
          </button>
        </div>

        <!-- Formulario Compra -->
        <div v-else class="space-y-6">
          <div class="bg-brand-yellow/10 border-2 border-black p-4 mb-4">
            <div class="flex items-center gap-3">
              <Ticket :size="24" class="text-brand-yellow shrink-0" />
              <div>
                <p class="text-sm font-semibold uppercase text-gray-500">Resumen de Selección</p>
                <p class="font-extrabold text-lg uppercase">{{ ticketName }} (x{{ ticketQty }})</p>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-black uppercase text-brand-blue border-b-2 border-black pb-2 mb-4">
            Datos Personales
          </h2>

          <form @submit.prevent="handleCompraSubmit" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-black uppercase tracking-wider mb-1">Nombre</label>
                <input 
                  v-model="form.nombre" 
                  type="text" 
                  class="w-full border-2 border-black p-2.5 font-bold focus:bg-brand-yellow/10 focus:outline-none" 
                  placeholder="Ej: Laura"
                  required
                />
              </div>
              <div>
                <label class="block text-xs font-black uppercase tracking-wider mb-1">Apellidos</label>
                <input 
                  v-model="form.apellidos" 
                  type="text" 
                  class="w-full border-2 border-black p-2.5 font-bold focus:bg-brand-yellow/10 focus:outline-none" 
                  placeholder="Ej: García Martínez"
                  required
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="md:col-span-2">
                <label class="block text-xs font-black uppercase tracking-wider mb-1">Ciudad</label>
                <input 
                  v-model="form.ciudad" 
                  type="text" 
                  class="w-full border-2 border-black p-2.5 font-bold focus:bg-brand-yellow/10 focus:outline-none" 
                  placeholder="Ej: Valencia"
                  required
                />
              </div>
              <div>
                <label class="block text-xs font-black uppercase tracking-wider mb-1">Cód. Postal</label>
                <input 
                  v-model="form.codigoPostal" 
                  type="text" 
                  class="w-full border-2 border-black p-2.5 font-bold focus:bg-brand-yellow/10 focus:outline-none" 
                  placeholder="Ej: 46001"
                  required
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-black uppercase tracking-wider mb-1">Teléfono</label>
              <input 
                v-model="form.telefono" 
                type="tel" 
                class="w-full border-2 border-black p-2.5 font-bold focus:bg-brand-yellow/10 focus:outline-none" 
                placeholder="Ej: 600123456"
                required
              />
            </div>

            <div>
              <label class="block text-xs font-black uppercase tracking-wider mb-1">Gmail / Email</label>
              <input 
                v-model="form.email" 
                type="email" 
                class="w-full border-2 border-black p-2.5 font-bold focus:bg-brand-yellow/10 focus:outline-none" 
                placeholder="Ej: laura.garcia@gmail.com"
                required
              />
            </div>

            <div>
              <label class="block text-xs font-black uppercase tracking-wider mb-1">Confirmar Gmail / Email</label>
              <input 
                v-model="form.confirmEmail" 
                type="email" 
                class="w-full border-2 border-black p-2.5 font-bold focus:bg-brand-yellow/10 focus:outline-none" 
                placeholder="Repite tu correo"
                required
              />
            </div>

            <!-- CAPTCHA INVENTADO -->
            <div class="bg-gray-100 border-2 border-black p-4 space-y-2">
              <label class="block text-xs font-black uppercase tracking-wider text-gray-700">Verificación Humana</label>
              <div class="flex items-center gap-4">
                <span class="font-mono font-extrabold text-lg bg-background text-white px-3 py-1.5 border border-black">
                  ¿Cuánto es {{ numA }} + {{ numB }}?
                </span>
                <input 
                  v-model="form.captchaAnswer" 
                  type="number" 
                  class="w-24 border-2 border-black p-1.5 font-bold text-center focus:bg-brand-yellow/10 focus:outline-none"
                  placeholder="?"
                  required
                />
              </div>
            </div>

            <!-- TÉRMINOS Y CONDICIONES -->
            <div class="flex items-start gap-2.5 pt-2">
              <input 
                v-model="form.aceptarTerminos" 
                type="checkbox" 
                id="terminos" 
                class="mt-1 w-5 h-5 accent-black border-2 border-black rounded-none cursor-pointer"
                required
              />
              <label for="terminos" class="text-xs font-bold uppercase leading-tight select-none cursor-pointer">
                Acepto los términos y condiciones y doy mi consentimiento para el acceso gratuito al festival.
              </label>
            </div>

            <button 
              type="submit" 
              class="w-full bg-brand-yellow text-black font-extrabold text-xl py-4 uppercase border-4 border-black hover:bg-brand-blue hover:text-black transition-all shadow-[6px_6px_0_0_theme(colors.brand.purple)] hover:shadow-[3px_3px_0_0_theme(colors.brand.purple)] hover:translate-x-[3px] hover:translate-y-[3px] cursor-pointer mt-4"
            >
              Completar Reserva Gratis
            </button>
          </form>
        </div>
      </div>

      <!-- VISTA DEVOLUCIÓN DE ENTRADAS -->
      <div v-else>
        
        <!-- Éxito Devolución -->
        <div v-if="returnSubmitted" class="text-center py-6 space-y-6">
          <div class="inline-flex items-center justify-center bg-brand-purple border-4 border-black p-4 rounded-none -rotate-1">
            <RotateCcw :size="48" class="text-white" />
          </div>
          <h2 class="text-3xl font-black uppercase text-brand-purple">DEVOLUCIÓN TRAMITADA</h2>
          <div class="bg-gray-100 border-4 border-black p-6 text-left space-y-3 font-mono shadow-[6px_6px_0_0_theme(colors.brand.blue)]">
            <p class="font-bold">
              Las plazas para <span class="text-brand-purple font-black">{{ ticketName }}</span> han sido liberadas con éxito.
            </p>
            <p class="text-sm">
              Email registrado: <span class="font-bold">{{ returnForm.email }}</span>
            </p>
            <div class="text-xs text-black/60 pt-4 border-t border-black/20">
              ¡Muchas gracias por actuar de forma responsable! Tu plaza ahora podrá ser aprovechada por otro asistente del festival.
            </div>
          </div>
          
          <button 
            @click="closeWindow" 
            class="w-full bg-background text-white font-extrabold text-xl py-4 uppercase border-4 border-black hover:bg-brand-purple hover:text-white transition-colors shadow-[6px_6px_0_0_theme(colors.brand.yellow)]"
          >
            Finalizar y Cerrar
          </button>
        </div>

        <!-- Flujo de Devolución -->
        <div v-else class="space-y-6">
          <div class="bg-brand-purple/10 border-2 border-black p-4 mb-4">
            <div class="flex items-center gap-3">
              <RotateCcw :size="24" class="text-brand-purple shrink-0" />
              <div>
                <p class="text-sm font-semibold uppercase text-gray-500">Trámite de devolución</p>
                <p class="font-extrabold text-lg uppercase">{{ ticketName }}</p>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-black uppercase text-brand-purple border-b-2 border-black pb-2 mb-4">
            Datos de Verificación
          </h2>

          <!-- Paso 1: Introducir Email -->
          <div v-if="returnStep === 1" class="space-y-4">
            <div>
              <label class="block text-xs font-black uppercase tracking-wider mb-1">Gmail / Email del Titular</label>
              <input 
                v-model="returnForm.email" 
                type="email" 
                class="w-full border-2 border-black p-2.5 font-bold focus:bg-brand-purple/10 focus:outline-none" 
                placeholder="Ej: laura.garcia@gmail.com"
                required
              />
            </div>
            
            <button 
              @click="handleReturnEmailSubmit" 
              class="w-full bg-brand-purple text-white font-extrabold text-xl py-4 uppercase border-4 border-black hover:bg-background hover:text-brand-purple transition-all shadow-[6px_6px_0_0_theme(colors.brand.yellow)] hover:shadow-[3px_3px_0_0_theme(colors.brand.yellow)] hover:translate-x-[3px] hover:translate-y-[3px] cursor-pointer"
            >
              Enviar código de verificación
            </button>
          </div>

          <!-- Paso 2: Introducir Código de 6 dígitos -->
          <div v-else class="space-y-4">
            <div class="bg-brand-yellow/10 border-2 border-black p-4 text-xs font-bold uppercase text-brand-purple">
              Introduce el código de 6 dígitos enviado a <span class="underline text-black">{{ returnForm.email }}</span>.
            </div>
            
            <div>
              <label class="block text-xs font-black uppercase tracking-wider mb-1">Código de 6 dígitos</label>
              <input 
                v-model="returnForm.codigo" 
                type="text" 
                maxlength="6"
                class="w-full border-2 border-black p-2.5 font-mono font-extrabold text-center text-2xl tracking-widest focus:bg-brand-purple/10 focus:outline-none" 
                placeholder="------"
                required
              />
            </div>
            
            <button 
              @click="handleReturnCodeSubmit" 
              class="w-full bg-brand-yellow text-black font-extrabold text-xl py-4 uppercase border-4 border-black hover:bg-brand-purple hover:text-white transition-all shadow-[6px_6px_0_0_theme(colors.brand.blue)] hover:shadow-[3px_3px_0_0_theme(colors.brand.blue)] hover:translate-x-[3px] hover:translate-y-[3px] cursor-pointer"
            >
              Tramitar devolución
            </button>

            <button 
              @click="returnStep = 1" 
              class="w-full bg-transparent text-black font-bold text-sm py-2 uppercase underline hover:text-brand-purple transition-colors"
            >
              Cambiar correo electrónico
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
