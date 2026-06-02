<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { Ticket, CheckCircle2, RotateCcw } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import { pasarelaDefaults, pasarelaPersonalFields, pasarelaConsentTexts, pasarelaMessages } from '@/data/data'
import LogoHorizontal from '@/components/LogoHorizontal.vue'

const route = useRoute()

type PurchaseForm = {
  [key: string]: string | boolean
  nombre: string
  apellidos: string
  ciudad: string
  codigoPostal: string
  telefono: string
  email: string
  confirmEmail: string
  captchaAnswer: string
  aceptarTerminos: boolean
  necesitaServiciosAdaptados: boolean
}

// Query params reactivos
const tipo = computed(() => (route.query.tipo as string) || pasarelaDefaults.tipo)
const ticketName = computed(() => (route.query.nombre as string) || pasarelaDefaults.ticketName)
const ticketQty = computed(() => Number(route.query.cantidad) || pasarelaDefaults.ticketQty)

// Datos del formulario de compra
const form = ref<PurchaseForm>({
  nombre: '',
  apellidos: '',
  ciudad: '',
  codigoPostal: '',
  telefono: '',
  email: '',
  confirmEmail: '',
  captchaAnswer: '',
  aceptarTerminos: false,
  necesitaServiciosAdaptados: false
})

const personalFieldLabelClass = 'block text-s font-semibold tracking-wider mb-1'
const personalFieldInputClass = 'w-full border-2 border-black p-2.5 font-medium focus:bg-brand-yellow/10 focus:outline-none'

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
    toast.error(pasarelaMessages.missingPersonalData)
    return
  }
  
  if (form.value.email.toLowerCase() !== form.value.confirmEmail.toLowerCase()) {
    toast.error(pasarelaMessages.emailMismatch)
    return
  }

  if (Number(form.value.captchaAnswer) !== captchaCorrectAnswer.value) {
    toast.error(pasarelaMessages.invalidCaptcha)
    return
  }

  if (!form.value.aceptarTerminos) {
    toast.error(pasarelaMessages.missingTerms)
    return
  }

  // Éxito
  orderNumber.value = 'ESC-' + Math.floor(100000 + Math.random() * 900000)
  isSubmitted.value = true
  toast.success(pasarelaMessages.successPurchase)
}

const handleReturnEmailSubmit = () => {
  if (!returnForm.value.email) {
    toast.error(pasarelaMessages.missingReturnEmail)
    return
  }
  
  // Simulamos envío de código
  returnStep.value = 2
  toast.success(pasarelaMessages.returnCodeSent)
}

const handleReturnCodeSubmit = () => {
  if (!returnForm.value.codigo || returnForm.value.codigo.length !== 6) {
    toast.error(pasarelaMessages.invalidReturnCode)
    return
  }

  // Éxito de devolución
  returnSubmitted.value = true
  toast.success(pasarelaMessages.successReturn)
}

const closeWindow = () => {
  window.close()
}
</script>

<template>
  <div class="min-h-screen bg-background text-white py-16 px-4 md:px-8 font-sans">
    <div class="max-w-xl mx-auto bg-white text-black p-6 md:p-10 shadow-[12px_12px_0_0_theme(colors.brand.blue)]">
      
      <!-- Logo Esclat -->
      <div class="flex items-center justify-between pb-6 mb-2">
        <h1 class="w-39 h-12 bg-background flex items-center justify-center">
          <LogoHorizontal alt="ESCLAT" class="w-34 h-auto object-contain" />
        </h1>
        <button 
          @click="closeWindow" 
          class="text-sm font-medium uppercase border-2 border-black px-3 py-1.5 hover:bg-background hover:text-white transition-colors"
        >
          Cerrar
        </button>
      </div>

      <!-- VISTA COMPRA DE ENTRADAS -->
      <div v-if="tipo === 'compra'">
        
        <!-- Éxito Compra -->
        <div v-if="isSubmitted" class="text-center font-sans">
          <h2 class="flex items-center justify-center gap-3 text-3xl font-extrabold uppercase text-brand-blue">
            <CheckCircle2 :size="34" class="text-background shrink-0" />
            ¡RESERVA COMPLETADA!
          </h2>
          <div class="mt-8 bg-brand-blue p-6 text-white text-left space-y-3 font-sans">
            <div class="flex justify-between font-bold border-b border-white/20 pb-2">
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
            <div v-if="form.necesitaServiciosAdaptados">
              <span class="font-bold">SERVICIOS ADAPTADOS:</span> Solicitados
            </div>
            <div class="text-xs text-white/60 pt-4 border-t border-white/20">
              * Se ha enviado un correo con tus entradas en formato PDF a {{ form.email }}. Recuerda presentarlas en Las Naves.
            </div>
          </div>
          
          <button 
            @click="closeWindow" 
            class="mt-8 w-full bg-background text-white font-bold text-xl py-4 uppercase hover:bg-brand-blue hover:text-black transition-colors"
          >
            Finalizar y Cerrar
          </button>
        </div>

        <!-- Formulario Compra -->
        <div v-else class="space-y-6">
          <div class="bg-brand-yellow/10 border-2 border-black p-4 mb-6">
            <div class="flex items-center gap-3">
              <Ticket :size="24" class="text-brand-yellow shrink-0" />
              <div>
                <p class="text-sm font-semibold uppercase text-gray-500">Resumen de Selección</p>
                <p class="font-extrabold text-lg uppercase">{{ ticketName }} (x{{ ticketQty }})</p>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-bold uppercase text-black border-b-2 border-black pb-1 mb-5">
            Datos Personales
          </h2>

          <form @submit.prevent="handleCompraSubmit" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                v-for="field in pasarelaPersonalFields"
                :key="field.name"
                :class="field.className"
              >
                <label :for="field.name" :class="personalFieldLabelClass">{{ field.label }}</label>
                <input
                  :id="field.name"
                  :value="form[field.name]"
                  :type="field.type"
                  :class="personalFieldInputClass"
                  :placeholder="field.placeholder"
                  required
                  @input="form[field.name] = ($event.target as HTMLInputElement).value"
                />
              </div>
            </div>
            <!-- CAPTCHA INVENTADO -->
            <div class="bg-gray-100 border-2 border-black p-4 space-y-2">
              <label class="block text-s font-medium tracking-wider text-black">Verificación Humana</label>
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
                class="mt-1 size-5 shrink-0 accent-black border-2 border-black rounded-none cursor-pointer"
                required
              />
              <label for="terminos" class="text-xs font-semibold uppercase leading-tight select-none cursor-pointer">
                {{ pasarelaConsentTexts.terminos }}
              </label>
            </div>

            <div class="flex items-center gap-2.5 pt-2">
              <input
                v-model="form.necesitaServiciosAdaptados"
                type="checkbox"
                id="servicios-adaptados"
                class="size-5 shrink-0 accent-black border-2 border-black rounded-none cursor-pointer"
              />
              <label for="servicios-adaptados" class="text-xs font-semibold uppercase leading-tight select-none cursor-pointer">
                {{ pasarelaConsentTexts.serviciosAdaptados }}
              </label>
            </div>

            <button 
              type="submit" 
              class="w-full bg-brand-yellow text-black font-bold text-xl py-4 uppercase border-4 border-black hover:bg-brand-blue hover:text-black transition-all hover:translate-x-[3px] hover:translate-y-[3px] cursor-pointer mt-4"
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
