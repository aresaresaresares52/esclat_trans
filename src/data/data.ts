// ============================================================================
// INTERFACES
// ============================================================================

export interface Artist {
  id: string
  name: string
  genre: string
  description: string
  day: string
  tags: string[]
  img: string
}

export interface Workshop {
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

export interface AllowedItem {
  description: string
}

export interface NotAllowedItem {
  description: string
}

export interface BasicRule {
  text: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface UtilitySection {
  title: string
  content: string[]
}

export interface SafetySection {
  title: string
  content: string[]
}

export interface ProgramEvent {
  title: string
  description: string
  color: 'yellow' | 'green' | 'purple' | 'blue'
}

export interface DaySchedule {
  date: string
  day: string
  dayLabel: string
  color: 'blue' | 'purple' | 'green'
  events: DayEvent[]
}

export interface DayEvent {
  time: string
  title: string
  description: string
}

// ============================================================================
// ARTISTS DATA
// ============================================================================

export const artists: Artist[] = [
  {
    id: 'luna-valle',
    name: 'Luna Valle',
    genre: 'Dream pop / Indie pop',
    description: 'Luna Valle ha irrumpido en la escena valenciana construyendo un universo sonoro propio, donde la sensibilidad y la emoción conviven y crean letras que dejan huella.\n\nDe la mano de Tórtel en la producción, Luna Valle transforma experiencias íntimas en paisajes musicales envolventes, capaces de conectar con quien escucha desde el primer momento.\n\nAdemás de su actuación, participará el viernes en el debate "¿Es necesario venderte para tu arte?", una conversación abierta sobre creación e identidad.',
    day: 'Viernes 23',
    tags: ['Dream Pop', 'Indie Pop', 'Local'],
    img: new URL('@/assets/lunavalle.jpg', import.meta.url).href
  },
  {
    id: 'diamante-negro',
    name: 'Diamante Negro',
    genre: 'Punk pop / Punk / Indie rock',
    description: 'Diamante Negro nace de la unión entre un fisioterapeuta, un enfermero y un técnico de sonido que se encontraron entre amistades, escenarios y las interminables noches de la escena barcelonesa.\n\nLa primera vez que tocaron juntos ni siquiera sabían qué era exactamente Diamante Negro. Y quizá todavía no lo sepan del todo. Pero precisamente ahí reside su esencia: una banda que huye de las etiquetas y convierte la libertad absoluta en su forma de hacer música.\n\nDiamante Negro llega dispuesto a convertir el caos en celebración.',
    day: 'Viernes 23',
    tags: ['Punk Pop', 'Indie Rock', 'Barcelona'],
    img: new URL('@/assets/diamanteNegro.jpg', import.meta.url).href
  },
  {
    id: 'tranquilorayo',
    name: 'TranquiloRayo!',
    genre: 'Rock / Indie / Indie rock',
    description: 'Cinco hombres de mediana edad, mucho sentido del humor y una única misión: pasarlo bien haciendo música. TranquiloRayo! llega desde Murcia con un directo desenfadado, energético y lleno de personalidad.\n\nConvierten cada canción en una explosión de guitarras, ironía y buen rollo, demostrando que el indie también puede ser espontáneo, divertido y totalmente imprevisible.',
    day: 'Sábado 24',
    tags: ['Rock', 'Indie', 'Murcia'],
    img: new URL('@/assets/tranquiloRayo.jfif', import.meta.url).href
  },
  {
    id: 'garbi',
    name: 'Garbi',
    genre: 'Alt rock / Emo / Post-todo',
    description: 'Garbi nace de la unión de cuatro amigos de Valencia que hacen música desde la honestidad, sin normas ni etiquetas que limiten hacia dónde puede ir cada canción.\n\nEntre guitarras envolventes, sensibilidad emo y una mezcla constante de estilos, Garbi construye un sonido intenso y atmosférico que se mueve entre la nostalgia y la explosión emocional.\n\nAdemás de su actuación, participarán el sábado en el Taller de japonés.',
    day: 'Sábado 24',
    tags: ['Alt Rock', 'Emo', 'Valencia'],
    img: new URL('@/assets/garbi.png', import.meta.url).href
  },
  {
    id: 'repion',
    name: 'Repion',
    genre: 'Rock alternativo / Grunge rock',
    description: 'Repion, formado por las hermanas Marina y Teresa Iñesta, se ha convertido en una de las propuestas más sólidas y enérgicas del panorama independiente nacional.\n\nCon una clara influencia del rock de los años 90, Repion combina melodías irresistibles con una fuerza arrolladora sobre el escenario, moviéndose entre la sensibilidad y la distorsión con total naturalidad.',
    day: 'Sábado 24',
    tags: ['Rock Alternativo', 'Grunge', 'España'],
    img: new URL('@/assets/repion.jpg', import.meta.url).href
  },
  {
    id: 'mr-kennedy',
    name: 'Mr. Kennedy',
    genre: 'Indie / Indie rock',
    description: 'Mr. Kennedy se ha convertido en una de las propuestas más frescas de la escena indie valenciana gracias a su energía sobre el escenario y a una identidad que solo puede entenderse viviéndola en persona.\n\nTras una gran cantidad de conciertos, su música sigue sin estar disponible en plataformas de streaming. No hay adelantos, algoritmos ni reproducción automática: Mr. Kennedy solo existe plenamente en directo.',
    day: 'Domingo 25',
    tags: ['Indie', 'Indie Rock', 'Valencia'],
    img: new URL('@/assets/kennedy.jfif', import.meta.url).href
  },
  {
    id: 'nuevos-vicios',
    name: 'Nuevos Vicios',
    genre: 'Indie rock / Pop rock',
    description: 'Nuevos Vicios nace en Valencia a principios de 2023 fusionando la fuerza del rock alternativo de los 90 con la nueva ola del indie nacional.\n\nSu sonido combina guitarras intensas y enérgicas con estribillos inmediatos, melodías pop y letras que hablan de amor, frustración y malestar generacional, conectando con una escena que busca autenticidad y emoción sin filtros.\n\nCon la experiencia acumulada en proyectos anteriores, Nuevos Vicios lleva al directo una propuesta sólida, potente y hecha para dejar huella sobre el escenario.',
    day: 'Domingo 25',
    tags: ['Indie Rock', 'Pop Rock', 'Valencia'],
    img: new URL('@/assets/nuevosVicios.jpg', import.meta.url).href
  },
  {
    id: 'bum-motion-club',
    name: 'Bum Motion Club',
    genre: 'Dream pop / Shoegaze',
    description: 'Bum Motion Club ha construido uno de los universos sonoros más personales de la escena independiente actual, moviéndose entre la delicadeza emocional y una contundencia cada vez más arrolladora.\n\nDesde Aranjuez, el proyecto ha evolucionado hasta convertirse en un auténtico secreto a voces dentro del panorama nacional, destacando por una propuesta donde conviven distorsiones afiladas, melodías adictivas y atmósferas soñadoras cargadas de tensión y sensibilidad.',
    day: 'Domingo 25',
    tags: ['Dream Pop', 'Shoegaze', 'Aranjuez'],
    img: new URL('@/assets/bumMotionClub.jpg', import.meta.url).href
  }
]

export const getArtistById = (id: string): Artist | undefined => {
  return artists.find(artist => artist.id === id)
}

// ============================================================================
// WORKSHOPS DATA
// ============================================================================

export const workshops: Workshop[] = [
  {
    id: 'shodo',
    title: 'SHODŌ',
    subtitle: 'Taller de escritura japonesa',
    description: 'Un espacio para bajar el ritmo, desconectar del ruido y volver a crear con calma. Inspirado en la estética de la escritura tradicional japonesa, este taller propone una experiencia donde la paciencia, la sencillez y el detalle se convierten en parte del proceso creativo.\n\nJunto al artista Gabi descubrirás una forma más consciente y personal de expresarte, experimentando con trazos, composición y sensibilidad visual desde una mirada relajada y cercana.\n\nNo hace falta experiencia previa, solo ganas de probar algo diferente.\n\nY sí, el material lo ponemos nosotros.',
    day: 'Sábado 24',
    horario: '18:00 - 19:0',
    lugar: 'Sala Factoría',
    aforo: 30,
    duracion: '1h'
  },
  {
    id: 'charla-arte',
    title: 'Debate de artistas',
    subtitle: '¿Es necesario vender tu arte? Con Luna Valle',
    description: 'Un espacio para pensar en voz alta sobre el arte y todo lo que lo rodea: la creación, la identidad, el capitalismo y el lugar que ocupa hoy un artista en la industria. ¿Es necesario venderte para que tu obra exista? ¿Dónde acaba la expresión y empieza el mercado?\n\nDe la mano de Luna Valle, abrimos un diálogo sin respuestas cerradas, donde la experiencia artística se comparte, se cuestiona y se transforma en conversación colectiva. Un encuentro para inspirarse, debatir y mirar el arte desde otros ángulos.',
    day: 'Viernes 23',
    horario: '18:00 - 19:00',
    lugar: 'Sala Factoría',
    aforo: 100,
    duracion: '1h'
  },
  {
    id: 'charla-vivienda',
    title: 'Charla: La vivienda en Valencia',
    subtitle: 'Debate urbano y crítico',
    description: 'Un espacio para hablar de una de las grandes preocupaciones de la ciudad: el acceso a la vivienda. Precios, alquiler, especulación, modelos urbanos y el impacto directo en la vida de quienes habitan Valencia.\n\nUna conversación abierta donde analizar la problemática desde distintas perspectivas, compartir experiencias y generar pensamiento crítico sobre el presente (y futuro) de la ciudad. Sin filtros, sin respuestas simples, pero con muchas ganas de entender y cuestionar lo que está pasando.',
    day: 'Domingo 25',
    horario: '20:30 - 21:30',
    lugar: 'Sala Visual Room',
    aforo: 100,
    duracion: '1'
  },
  {
    id: 'nostalgia-juego',
    title: 'WII SESSION',
    subtitle: 'Competición de videojuegos de la WII: Mario Kart, Wii Sports, Super Smash Bros Brawl y más.',
    description: 'Vuelve la nostalgia en forma de competición. Una batalla divertida con los juegos clásicos de la Wii pensada para pasarlo en grande: piques sanos, risas aseguradas y mucha emoción en cada partida.\n\nMario Kart Wii, Wii Sports, Super Smash Bros Brawl y otros títulos míticos serán los protagonistas de un espacio donde lo importante no es solo ganar, sino disfrutar, revivir recuerdos y compartir el juego como antes.\n\nJugar, competir y volver a sentir la magia de los clásicos… ¡como si el tiempo no hubiera pasado!',
    day: 'Viernes 23',
    horario: '19:30 - 21:00',
    lugar: 'Sala la Polivalent',
    aforo: 40,
    duracion: '2h'
  },
  {
    id: 'ultra-show',
    title: 'Drag show',
    subtitle: 'Performance de las drags: Ultraviolencia y Oxofobia',
    description: 'Un escenario donde la actitud no se interpreta: se desborda. La performance de Ultraviolencia y Oxofobia llega para romper esquemas con una puesta en escena intensa, estética y cargada de mensaje.\n\nAmbas artistas forman parte de la escena drag contemporánea. Su trabajo explora la identidad, la provocación visual y la creación de personajes que juegan con lo teatral, lo corporal y lo simbólico, generando espectáculos que combinan energía, mensaje y estética sin concesiones.\n\nPrepárate para una experiencia sin filtros: potente, provocadora y completamente viva.',
    day: 'Sábado 24',
    horario: '19:45 - 20:45',
    lugar: 'sala la Mutant',
    aforo: 500,
    duracion: '1'
  },
  {
    id: 'mercadillo',
    title: 'Mercadillo vintage',
    subtitle: 'Ropa, objetos y piezas únicas, vendedores locales',
    description: 'Un espacio abierto donde la ropa, los objetos y las piezas únicas cambian de manos para seguir contando historias. A precios accesibles y con propuestas para todos los gustos, este mercadillo es un punto de encuentro entre lo reutilizado, lo curioso y lo inesperado.\n\nPero aquí no solo vienes a comprar: también puedes participar. Trae lo que ya no usas, vende, intercambia o simplemente redescubre objetos que pueden empezar una nueva vida con otra persona.',
    day: 'Domingo 25',
    horario: '18:00 - 21:30',
    lugar: 'Patio 1',
    aforo: 0,
    duracion: 'Todo el día'
  }
]

export const getWorkshopById = (id: string): Workshop | undefined => {
  return workshops.find(workshop => workshop.id === id)
}

// ============================================================================
// POLICIES & SAFETY DATA
// ============================================================================

export const basicRules: BasicRule[] = [
  { text: 'No se permite la entrada de bebidas alcohólicas del exterior.' },
  { text: 'Se ruega mantener el respeto y el silencio durante las actuaciones.' },
  { text: 'Está prohibido fumar en los espacios cerrados.' },
  { text: 'La organización se reserva el derecho de admisión.' },
  { text: 'Sigue en todo momento las indicaciones del personal de seguridad.' }
]

export const faqs: FAQ[] = [
  {
    question: '¿Tengo que imprimir la entrada?',
    answer: 'No es necesario. Puedes mostrar el código QR de tu entrada directamente desde tu teléfono móvil.'
  },
  {
    question: '¿A qué hora abren las puertas?',
    answer: 'Las puertas se abrirán 30 minutos antes del inicio del primer evento de cada día.'
  },
  {
    question: '¿Hay acceso para personas con movilidad reducida?',
    answer: 'Sí, todas las instalaciones de Las Naves están adaptadas y son accesibles.'
  }
]

export const allowedItems: AllowedItem[] = [
  {
    description: 'Mochilas pequeñas hasta 24 litros (52cm alto, 25 cm ancho, 22 cm profundidad máximo), bolsos, riñoneras.'
  },
  {
    description: 'Protector solar en crema pequeño tipo viaje (no aerosol).'
  },
  {
    description: 'Cámaras de foto compactas'
  }
]

export const notAllowedItems: NotAllowedItem[] = [
  { description: 'No está permitido el acceso al festival con recipientes de vidrio o latas.' },
  { description: 'Objetos punzantes o complementos que la seguridad estime peligrosos.' },
  { description: 'Objetos cortantes ni ningún tipo de arma u objeto que pueda ser usado como tal.' },
  { description: 'No se podrá acceder con sillas de playa, sombrillas, hamaca.' },
  { description: 'Aerosoles (son inflamables).' },
  { description: 'Bicicletas, patines, skates, cascos de moto.' },
  { description: 'Botellas, petacas, cantimploras.' },
  { description: 'Fuegos artificiales, bengalas, petardos.' },
  { description: 'Palo selfie, trípodes.' },
  { description: 'Punteros láser, linternas.' },
  { description: 'Cámaras de foto y/o vídeo profesionales.' },
  { description: 'Mochilas grandes.' },
  { description: 'Maletas.' },
  { description: 'Instrumentos musicales.' },
  { description: 'Animales.' },
  { description: 'Drogas ilegales.' }
]

export const utilitySections: UtilitySection[] = [
  {
    title: '¿HAS PERDIDO O HAS ENCONTRADO ALGO?',
    content: [
      'Objetos perdidos se encuentran en nuestra instalación de ESCLAT. Repórtalo en recepción o llama al teléfono: 9936203799415.',
      'Si alguien te roba, ve a la recepción del centro y pídeles que contacten con las autoridades.'
    ]
  },
  {
    title: '¿Y QUÉ HAY DE LA COMIDA, EL ALCOHOL Y EL TABACO?',
    content: [
      'Se puede llevar una botella con un máximo de 2 litros de agua embotellada. Por favor, no tires envases al suelo, ESCLAT está concienciado con el medio ambiente y dispone de múltiples papeleras por todo el recinto.',
      'Puedes traer comida en cantidades no comerciales.',
      'Está prohibido fumar dentro del recinto, incluido patios. Para poder entrar y salir con libertad tendrás que pedir una pulsera de 1 euro en recepción.',
      'Si superas los límites, los productos restantes deben entregarse al servicio de seguridad en la entrada.'
    ]
  },
  {
    title: 'POR FAVOR, DÉJALO EN CASA',
    content: [
      'Está prohibido introducir alcohol, dispositivos pirotécnicos, objetos de vidrio, paraguas, objetos o herramientas que containengan materiales explosivos, venenosos o inflamables (por ejemplo, utensilios de cocina accionados con gas), armas de fuego, cuchillos, cuchillos mariposa, navajas, sprays de gas, porras expandibles, cadenas metálicas de más de 50 cm de longitud, estrellas arrojadizas, resorteras y otros objetos que supongan una amenaza especial para la seguridad pública según lo definido en las leyes y normativas pertinentes. Estos productos deben entregarse al servicio de seguridad para su inspección en la entrada.',
      'Consumir, vender o promocionar drogas está estrictamente prohibido en ESCLAT. No lleves ningún tipo de narcóticos a la zona del festival. Para más información, por favor lea la Política sobre Drogas: Tolerancia Cero en Salud y Seguridad.'
    ]
  },
  {
    title: 'MASCOTAS EN EL FESTIVAL',
    content: [
      'Además de los perros de asistencia según lo definido por la ley, los perros guía y los perros policía, no está permitido llevar mascotas al festival por su propio bien, ya que no es un ambiente adecuado dado el alto nivel de ruido y la gran cantidad de gente que podrán encontrar.'
    ]
  }
]

export const safetySections: SafetySection[] = [
  {
    title: 'CUIDADOS DE ESCLAT',
    content: [
      'Nuestro programa Cuidados de ESCLAT ofrece una solución a cualquier problema que puedas tener durante el festival. Para que puedas sentirte seguro y cómodo.',
      'Si necesitas apoyo mental o una buena conversación, buscas ayuda con un problema médico especial o has pasado por algo desagradable, puedes encontrarnos en muchos lugares de ESCLAT.',
      'Nuestros Puntos de Atención y el Punto de Información en la entrada principal te ayudarán a encontrar la ayuda adecuada o a orientarte.',
      'Aquí, nuestro Punto de Atención Mental ofrece asesoramiento mental y charlas de apoyo y prevención. Si sientes que no puedes manejar tu carga mental, visita nuestro Punto de Crisis.'
    ]
  },
  {
    title: 'PUNTO VIOLETA',
    content: [
      'Dentro del programa de cuidados nace nuestro Punto Violeta para que disfrutes con total tranquilidad. Queremos que te sientas libre, segur@ y respetad@ en todo momento.',
      'Si has sufrido una situación incómoda, has presenciado una agresión, necesitas denunciar una actitud machista o LGTBIQ+fóbica, o simplemente buscas un espacio tranquilo para desahogarte y recibir apoyo, estamos aquí para ti. Puedes encontrarnos en varios puntos estratégicos de ESCLAT.',
      'En nuestro Punto Violeta te ofreceremos información, acompañamiento y orientación inmediata.',
      'Aquí no juzgamos a nadie: te escuchamos, te protegemos y te ayudamos. Si necesitas asistencia psicológica urgente o activar un protocolo de seguridad, dirígete directamente a nuestro Espacio de Cuidado y Crisis. Tu bienestar es nuestra prioridad.'
    ]
  },
  {
    title: 'POLÍTICA SOBRE DROGAS: TOLERANCIA CERO',
    content: [
      'La posesión, consumo y venta de drogas —independientemente del tipo o la cantidad— son todos delitos penales. La ley no hace distinción entre las llamadas drogas \'blandas\' o \'duras\', y las penas pueden ser severas, incluyendo prisión. El país aplica una política de tolerancia cero a todos en su territorio.',
      'Si te encuentras en posesión de sustancias ilegales, corres el riesgo de ser arrestado, procesado bajo la ley y graves consecuencias legales. No hay sistema de advertencia ni excepciones para turistas.',
      'Recomendamos encarecidamente a todos los visitantes: no traigan ni consuman drogas. Evita ponerte en riesgo a ti y a los demás, y ayúdanos a mantener el festival seguro y agradable para todos.'
    ]
  },
  {
    title: 'SEGURIDAD @ESCLAT',
    content: [
      'Prestamos especial atención a la seguridad de los visitantes.',
      'En las entradas, un sistema de \'check-in\' ayuda a identificar si el usuario autorizado quiere entrar. El entretenimiento seguro lo proporcionan el personal de seguridad y médico, y trabajamos con la policía y el Centro Antiterrorista.',
      'Antes de salir de casa, deberías revisar la lista de artículos que pueden y no pueden llevarse al festival. En el control de seguridad de la entrada, los objetos que no puedan entrar serán filtrados por tu seguridad.',
      'Asegúrate de llevar un documento de identidad con foto al entrar, lo necesitarás para poder entrar.'
    ]
  }
]

// ============================================================================
// SCHEDULE DATA
// ============================================================================

export const specialEvents: ProgramEvent[] = [
  {
    title: 'Inauguración Oficial',
    description: 'Apertura de puertas y bienvenida institucional.',
    color: 'yellow'
  },
  {
    title: 'Clausura y Fiesta Final',
    description: 'Concierto de cierre y despedida del festival.',
    color: 'green'
  }
]

export const programSchedule: DaySchedule[] = [
  {
    date: '23 OCT',
    day: 'Viernes',
    dayLabel: 'Miércoles',
    color: 'blue',
    events: [
      {
        time: '18:00 - 20:00',
        title: 'Apertura y primera actuación',
        description: ''
      },
      {
        time: '20:30 - 22:30',
        title: 'Concierto Principal',
        description: ''
      }
    ]
  },
  {
    date: '24 OCT',
    day: 'Sábado',
    dayLabel: 'Jueves',
    color: 'purple',
    events: [
      {
        time: '17:00 - 19:00',
        title: 'Talleres interactivos',
        description: ''
      },
      {
        time: '19:30 - 23:00',
        title: 'Sesión de Djs',
        description: ''
      }
    ]
  },
  {
    date: '25 OCT',
    day: 'Domingo',
    dayLabel: 'Viernes',
    color: 'green',
    events: [
      {
        time: '18:00 - 00:00',
        title: 'Fiesta de Clausura',
        description: ''
      }
    ]
  }
]
