export const pasarelaDefaults = {
  tipo: 'compra',
  ticketName: 'Pase Festival',
  ticketQty: 1
}

export const pasarelaPersonalFields = [
  {
    name: 'nombre',
    label: 'Nombre',
    type: 'text',
    placeholder: 'Nombre',
    className: ''
  },
  {
    name: 'apellidos',
    label: 'Apellidos',
    type: 'text',
    placeholder: 'Apellidos',
    className: ''
  },
  {
    name: 'ciudad',
    label: 'Ciudad',
    type: 'text',
    placeholder: 'Ciudad',
    className: 'md:col-span-2'
  },
  {
    name: 'codigoPostal',
    label: 'Cód. Postal',
    type: 'text',
    placeholder: 'Cód. Postal',
    className: ''
  },
  {
    name: 'telefono',
    label: 'Teléfono',
    type: 'tel',
    placeholder: 'Teléfono',
    className: 'md:col-span-3'
  },
  {
    name: 'email',
    label: 'Gmail / Email',
    type: 'email',
    placeholder: 'Gmail / Email',
    className: 'md:col-span-3'
  },
  {
    name: 'confirmEmail',
    label: 'Confirmar Gmail / Email',
    type: 'email',
    placeholder: 'Confirmar Gmail / Email',
    className: 'md:col-span-3'
  }
] as const

export const pasarelaConsentTexts = {
  terminos: 'Acepto los términos y condiciones y doy mi consentimiento para el acceso gratuito al festival.',
  serviciosAdaptados: 'Soy una persona con discapacidad y necesito servicios adaptados.'
}

export const pasarelaMessages = {
  missingPersonalData: 'Por favor, rellena todos los datos personales.',
  emailMismatch: 'Los correos electrónicos no coinciden.',
  invalidCaptcha: 'La verificación humana (captcha) es incorrecta.',
  missingTerms: 'Debes aceptar los términos y condiciones del festival.',
  successPurchase: '¡Entradas reservadas con éxito!',
  missingReturnEmail: 'Por favor, introduce tu dirección de correo electrónico.',
  returnCodeSent: 'Te hemos enviado un código de 6 dígitos a tu email.',
  invalidReturnCode: 'El código debe tener exactamente 6 dígitos.',
  successReturn: 'Devolución procesada correctamente.'
}
