export const es: typeof import("./pt").pt = {
  common: {
    getItOn: "Disponible en",
    googlePlay: "Google Play",
    exclusiveHosanna: "Exclusivo Hosanna",
    comingSoon: "Próximamente",
    backToHome: "Página Principal",
    tryAgain: "Intentar de Nuevo",
    privacyPolicy: "Política de Privacidad",
    activeDevelopment: "Desarrollo Activo",
    activeDevDesc:
      "Como estamos en fase inicial, tus comentarios son nuestra brújula. Si echas en falta alguna función o encuentras algo que mejorar, compártelo con nosotros.",
  time: {
      seconds: "segundos",
      minutes: "minutos",
      hours: "horas",
      days: "días",
    }
    },
  errors: {
    notFoundTitle: "404",
    notFoundHeading: "Página no Encontrada",
    notFoundDesc: "La página que buscas no existe o ha sido movida",
    errorHeading: "Esta página no pudo cargarse",
    errorDesc:
      "Ocurrió un error por nuestra parte. Puedes intentar recargar la página o volver al inicio.",
  },
  seo: {
    defaultTitle: "Hosanna | El Futuro de la Planificación de Alabanza para Iglesias",
    defaultDescription:
      "Organiza tu biblioteca musical, planifica cultos y equipa a tus músicos con las herramientas adecuadas. Hosanna es el software de gestión de alabanza más intuitivo para iglesias modernas.",
    defaultKeywords:
      "planificación de alabanza, acordes, chordpro, gestión de iglesia, equipo de alabanza, repertorio cristiano, software para iglesias, ministerio de alabanza",
  },
  landing: {
    banner:
      "Estamos en fase de desarrollo inicial. La versión Beta se lanzará el 1 de septiembre. ¡Únete a este viaje!",
    nav: {
      features: "Funciones",
      chordpro: "ChordPro",
      pricing: "Precios",
      contact: "Contacto",
      tryFree: "Probar Gratis",
    },
    hero: {
      badge: "Creado para Líderes de Alabanza",
      titleStart: "Organiza tu alabanza con",
      titleHighlight: "excelencia",
      subtitle:
        "Dale a tu equipo la claridad y el enfoque que merecen. Planes de culto, acordes dinámicos y calendarios inteligentes en un solo lugar.",
      ctaStart: "Empezar Ahora",
      ctaDemo: "Ver Demostración",
      dashboardAlt:
        "Vista previa del panel de Hosanna mostrando la biblioteca de canciones y el plan del culto dominical",
      mobileAlt:
        "Vista previa de la app móvil de Hosanna mostrando una canción con controles de transposición",
    },
    problem: {
      eyebrow: "Nuestra Misión",
      title: "Preparar la alabanza debe ser adorar, no pelear con archivos.",
      description:
        "Sabemos que el tiempo del equipo de alabanza es oro. Muchas iglesias aún lidian con carpetas desordenadas en la nube, cancioneros antiguos y mensajes perdidos en chats. Hosanna nació para eliminar esa confusión y traer paz a tu preparación.",
      cards: [
        {
          title: "Biblioteca Centralizada",
          body: "Basta de buscar la 'versión final'. Centraliza todas tus canciones, tonos y letras en un solo lugar seguro y accesible.",
        },
        {
          title: "Planificación con Propósito",
          body: "Diseña el flujo del culto con claridad. Comparte el orden de canciones, notas pastorales y horarios al instante con todo el equipo.",
        },
        {
          title: "Enfoque en el Altar",
          body: "En el momento de alabar, la tecnología no debe estorbar. Ofrecemos una vista limpia, personal y adaptable a cada músico, incluso sin internet.",
        },
      ],
      quote:
        "«Nuestro objetivo es simple: queremos que tu equipo pase menos tiempo configurando tecnología y más tiempo sirviendo al Señor.»",
    },
    twoApps: {
      eyebrow: "Dos apps, un solo flujo",
      title: "Diseñado para todo el equipo de alabanza.",
      description:
        "Un panel potente para los líderes que planifican. Una app móvil limpia y enfocada para los músicos que tocan en vivo.",
      dashboardBadge: "Panel Web",
      dashboardTitle: "Para líderes y equipo",
      mobileBadge: "App Móvil",
      mobileTitle: "Para músicos, en directo",
      dashboardFeatures: [
        "Construir y organizar una biblioteca completa de canciones",
        "Importar y exportar canciones (ChordPro)",
        "Editar letras y acordes",
        "Organizar canciones en carpetas",
        "Buscar y filtrar canciones al instante",
        "Crear y programar servicios",
        "Definir el orden de canciones en cada culto",
        "Añadir notas para todo el equipo de alabanza",
        "Gestionar miembros del equipo y permisos",
        "Asignar roles a los miembros",
        "Compartir cultos y cambios con todos",
        "Sincronización automática entre todos los dispositivos",
        "Crear y descargar copias de seguridad de la biblioteca",
      ],
      mobileFeatures: [
        "Ver el culto programado en cualquier dispositivo",
        "Transponer canciones al tono más cómodo",
        "Mostrar u ocultar acordes de forma independiente",
        "Ajustar el tamaño de letra para mejor lectura",
        "Mantener la pantalla encendida durante el culto",
        "Añadir notas personales",
        "Funciona sin conexión — sincroniza automáticamente",
      ],
    },
    organize: {
      eyebrow: "Organiza tu música",
      title: "Una biblioteca que al fin se siente tuya.",
      description:
        "Pon orden en años de canciones dispersas — sin obligar a tu equipo a aprender un sistema complicado.",
      cards: [
        {
          title: "Carpetas Familiares",
          body: "Organiza canciones en carpetas como en tu ordenador — sin curva de aprendizaje.",
        },
        {
          title: "Búsqueda que lo encuentra todo",
          body: "Encuentra canciones por título, artista, letra, tono, etiquetas o número en segundos.",
        },
        {
          title: "Basado en ChordPro",
          body: "Portátil, abierto y compatible con las herramientas que tu comunidad de alabanza ya usa.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      title: "Planifica cada culto en cuatro pasos sencillos.",
      description: "De un lienzo en blanco a un culto que todo el equipo está listo para guiar.",
      steps: [
        {
          n: "01",
          title: "Programa el Encuentro",
          body: "Crea un nuevo servicio con título y fecha. Ya sea el domingo o una noche de oración — la preparación empieza aquí.",
        },
        {
          n: "02",
          title: "Diseña el Flujo",
          body: "Selecciona canciones de tu biblioteca, añade momentos de prédica o anuncios y organízalo todo intuitivamente.",
        },
        {
          n: "03",
          title: "Comunica la Visión",
          body: "Añade notas para el equipo — detalles de transiciones, arreglos o momentos de oración específicos.",
        },
        {
          n: "04",
          title: "Servid en Unidad",
          body: "Todo el equipo accede al mismo plan. Cada músico ajusta su vista personal, asegurando perfecta armonía.",
        },
      ],
    },
    liveWorship: {
      eyebrow: "Hecho para el directo",
      title: "Cada músico, a su propio ritmo.",
      description:
        "Guitarristas, pianistas y cantantes trabajan desde la misma canción en el mismo culto — pero cada uno elige su tono, visibilidad de acordes y tamaño de texto. Se acabaron los amontonamientos sobre una sola tablet. Se acabaron los acordes corridos.",
      items: {
        transpose: "Transposición independiente",
        textSize: "Tamaño de texto adaptable",
        chordsVisibility: "Acordes visibles por persona",
        offline: "Funciona sin conexión",
      },
    },
    anySize: {
      eyebrow: "Cualquier iglesia, cualquier tamaño",
      title: "Desde reuniones en casa hasta ministerios multi-campus.",
      description:
        "Cada iglesia tiene su biblioteca y cultos privados y seguros — con espacio para tantos equipos de alabanza como necesitéis.",
      privateLibTitle: "Tu biblioteca, segura y privada",
      privateLibBody:
        "Cada iglesia tiene su propio espacio. Canciones, cultos y miembros permanecen dentro de vuestras puertas.",
      multiTeamTitle: "Varios equipos, una sola biblioteca",
      multiTeamBody:
        "Domingo, entre semana, jóvenes, campus A, campus B — todos los equipos beben de la misma fuente.",
    },
    export: {
      eyebrow: "Exportación y portabilidad",
      title: "Tu música, bajo tus condiciones.",
      description:
        "Importa y exporta en formato abierto ChordPro para respaldos y migraciones fáciles. Exporta un culto entero — orden, lecturas bíblicas, anuncios, acordes y letras — como PDF listo para imprimir desde la app.",
      bullets: [
        "Importación y exportación en ChordPro",
        "PDF imprimible de todo el culto",
        "Sin bloqueos — tu biblioteca siempre te pertenece",
      ],
      sampleServiceTitle: "Culto Dominical — 18 de mayo",
      sampleItems: [
        "Bienvenida y Anuncios",
        "Great Are You Lord — All Sons & Daughters",
        "Lectura Bíblica — Salmo 100",
        "10,000 Reasons — Matt Redman",
        "Mensaje — Pr. Juan",
      ],
    },
    pricing: {
      eyebrow: "Precios",
      title: "Una inversión en vuestra adoración",
      description:
        "Precios simples y transparentes para que te concentres en lo verdaderamente importante.",
      monthly: "Mensual",
      annual: "Anual",
      discountBadge: "-20%",
      singlePlan: "Plan Único",
      singlePlanDesc:
        "Acceso total a todas las funciones, sin límites de usuarios ni sorpresas ocultas.",
      perYearUnit: "/año por iglesia",
      perMonthUnit: "/mes por iglesia",
      annualBilledNote: "Facturado anualmente · equivale a 10€/mes",
      monthlyBilledNote: "Facturado mensualmente",
      unlimitedMusicians: "Músicos ilimitados",
      freeTrialDays: "14 días de prueba gratis",
      ctaTry: "Probar Gratis",
      pricingClarification:
        "Músicos y usuarios del panel ilimitados — la tarifa es por iglesia, sin importar el tamaño del equipo.",
      multiCampusLabel: "Iglesias multi-campus:",
      multiCampusText:
        "+12€/mes por cada sede adicional. Acceso ilimitado de usuarios en todas las sedes.",
      features: [
        "Músicos y usuarios de panel ilimitados",
        "Canciones, carpetas y cultos ilimitados",
        "Biblioteca completa en ChordPro con búsqueda por título, artista, letra, tono, etiquetas o número",
        "Sincronización sin conexión en la app móvil",
        "Exportación de cultos en PDF (orden completo, versículos, anuncios + acordes/letras)",
        "Importación y exportación en formato ChordPro",
      ],
    },
    mobileApp: {
      badge: "Siempre Contigo",
      titleStart: "Lleva tu alabanza en el",
      titleHighlight: "bolsillo",
      description:
        "Accede a tus acordes, consulta calendarios y prepárate para el culto directamente desde tu móvil. Hosanna App es la compañera ideal para músicos que buscan excelencia en cada detalle.",
    },
    vision: {
      eyebrow: "Nuestra visión",
      quote1: "«Creemos que la tecnología debe apoyar la alabanza, no complicarla.»",
      body: "Hosanna derriba barreras innecesarias entre la preparación y la adoración — para que las iglesias pasen menos tiempo buscando canciones y organizando archivos, y más tiempo guiando al pueblo en alabanza.",
      quote2:
        "«Que sea de gran bendición para tu iglesia, tu equipo de alabanza y todos los que sirven con la música.»",
    },
    support: {
      eyebrow: "Apoya el proyecto",
      title: "Ayúdanos a llevar Hosanna a iglesias de todo el mundo",
      description:
        "Tu contribución nos permite seguir creando, mejorando y llevando esta herramienta a más ministerios de alabanza.",
      iframeTitle: "Apoya a Hosanna en GoFundMe",
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "Lo que viene a continuación.",
      description:
        "Hosanna sigue creciendo junto a las iglesias que confían en él. Estas son algunas de las mejoras que ya están en camino.",
      items: [
        "Plantillas de cultos reutilizables y duplicación de servicios",
        "Importación inteligente con detección automática de duplicados",
        "Sincronización offline más rápida y resolución de conflictos",
        "Sincronización en segundo plano en la app móvil",
        "Personalización de la identidad visual de cada iglesia",
        "Estadísticas de uso e historial de cultos",
        "Búsqueda avanzada y filtros inteligentes",
      ],
    },
    faq: {
      eyebrow: "Preguntas Frecuentes",
      title: "Aclara tus dudas",
      description: "Todo lo que necesitas saber para empezar a usar Hosanna en tu iglesia.",
      items: [
        {
          q: "¿Hosanna funciona sin conexión a internet?",
          a: "Sí. Cuando un culto se carga en el dispositivo de un músico, todo sigue disponible offline. Los cambios se sincronizan en cuanto recuperas la conexión.",
        },
        {
          q: "¿En qué formato se guardan las canciones?",
          a: "Las canciones se guardan en el formato abierto ChordPro — un estándar de texto plano que integra acordes y letras y funciona con múltiples herramientas de alabanza.",
        },
        {
          q: "¿Cada músico puede personalizar su vista?",
          a: "Por supuesto. Cada músico puede transponer a su tono, modificar el tamaño del texto y mostrar u ocultar acordes sin interferir con el resto del equipo.",
        },
        {
          q: "¿Existe un periodo de prueba gratuito?",
          a: "Todos los planes comienzan con 14 días gratis. Solo regístrate, invita a tu equipo y pruébalo en un domingo real.",
        },
        {
          q: "¿Varios equipos de alabanza pueden compartir una misma biblioteca?",
          a: "Sí. Cada iglesia dispone de una biblioteca compartida y puedes crear tantos equipos y programaciones de cultos como necesites.",
        },
        {
          q: "¿Cómo funcionan las tarifas?",
          a: "Hosanna tiene un precio fijo, mensual o anual, por iglesia — con músicos y usuarios de panel ilimitados incluidos. Iglesias multi-campus pagan un extra reducido por cada sede adicional, con acceso ilimitado en todas ellas. Sin comisiones por músico. Sin funciones bloqueadas.",
        },
      ],
    },
    finalCta: {
      title: "¿Listo para llevar tu alabanza a otro nivel?",
      subtitle:
        "Únete a cientos de iglesias que ya eligieron la excelencia y el orden con Hosanna.",
      ctaStart: "Empezar Ahora",
      ctaContact: "Habla con nosotros",
    },
    footer: {
      tagline: "La herramienta definitiva para equipos de alabanza que buscan excelencia y orden.",
      colProduct: "Producto",
      colSupport: "Soporte",
      colLegal: "Legal",
      features: "Funciones",
      chordproGuide: "Guía ChordPro",
      pricing: "Precios",
      blog: "Blog",
      downloadApp: "Descargar App",
      contact: "Contacto",
      helpCenter: "Centro de Ayuda",
      serviceStatus: "Estado del servicio",
      termsOfService: "Términos de Servicio",
      privacyPolicy: "Política de Privacidad",
      cookies: "Cookies",
      copyright: "Todos los derechos reservados.",
    },
  },
  migration: {
    eyebrow: "Transición Fluida",
    titleStart: "Cambia a Hosanna",
    titleHighlight: "sin perder nada",
    subtitle: "¿Ya utilizas otra herramienta? Puedes importar tus canciones fácilmente",
    whereFrom: "¿De dónde vienen tus canciones?",
    songbookProDesc:
      "Un solo archivo de backup. Cifrados, tonos y tus sets se convierten en setlists.",
    onSongDesc: "Exporta en ChordPro. Cifrados, tonos y notas preservadas.",
    planningCenterDesc: "Nos conectamos con tu biblioteca de planes y servicios.",
    chord1Desc: "Importación directa de acordes, tonos y letras.",
    songsCount: "{count} canciones",
    serviceSetlist: "Culto de viernes · 12 canciones",
    chordsAndKeys: "Cifrados & tonos",
    setlists: "Setlists",
  },
  contact: {
    eyebrow: "Apoyo al Equipo",
    heroTitle: "¿Hablamos",
    heroTitleHighlight: "un momento?",
    heroSubtitle:
      'Dudas, sugerencias o simplemente un "hola". Estamos aquí para servir a tu iglesia con excelencia.',
    alwaysReadyTitle: "Siempre listos para ayudar",
    alwaysReadyDesc:
      "Nuestro equipo técnico y ministerial está disponible para garantizar que tu experiencia con Hosanna sea perfecta.",
    emailTitle: "Correo Electrónico",
    emailResponseTime: "Respuesta en menos de 24h",
    socialTitle: "Redes Sociales",
    nameLabel: "Nombre",
    namePlaceholder: "¿Cómo debemos llamarte?",
    churchLabel: "Iglesia",
    churchPlaceholder: "Nombre de tu iglesia",
    emailLabel: "Correo Electrónico",
    emailPlaceholder: "ejemplo@iglesia.com",
    subjectLabel: "Asunto",
    subjectTechnical: "Soporte Técnico",
    subjectFeature: "Sugerencia de Función",
    subjectPricing: "Dudas sobre Planes",
    subjectPartnership: "Alianzas",
    subjectOther: "Otro",
    messageLabel: "Tu Mensaje",
    messagePlaceholder: "Describe cómo podemos ayudarte...",
    sendButton: "Enviar Mensaje",
    termsConsent:
      "Al enviar este formulario, aceptas el tratamiento de tus datos de acuerdo con nuestra",
  },
  chordproGuide: {
    heroBadge: "Guía de Formación · Equipo de Alabanza",
    heroTitleStart: "Domina",
    heroTitleHighlight: "ChordPro",
    heroSubtitle:
      "La forma estándar e inteligente de escribir acordes. Todo lo que tu equipo necesita saber para organizar su repertorio en Hosanna — desde el primer acorde hasta el día del culto.",
    traditionalDoc: "Documento Tradicional (Word)",
    traditionalWarning: "Se desalinea en móviles y obliga a crear archivos por cada tono.",
    chordproInHosanna: "ChordPro en Hosanna",
    chordproSuccess: "Alineación perfecta, transpone en un clic y genera diagramas.",
    tocTitle: "En esta guía",
    toc: {
      fundamentals: "Fundamentos",
      syntax: "Sintaxis de Acordes",
      directives: "Directivas Esenciales",
      structure: "Estructura de la Canción",
      grids: "Cuadrículas & Tiempos",
      tablature: "Tablatura",
      shortcuts: "Atajos del Editor",
      reference: "Referencia Rápida",
    },
    whatIsTitle: "¿Qué es ChordPro?",
    whatIsLede:
      "Un formato de texto simple que Hosanna lee para transformar tus canciones en herramientas interactivas para la banda.",
    whatIsParagraph:
      'En lugar de colocar los acordes "flotando" sobre el texto, ChordPro los inserta dentro de la letra usando corchetes [ ] justo antes de la sílaba donde ocurre el cambio.',
    benefits: [
      "Cambia de tono o capo con un solo clic",
      "Ajusta el tamaño del texto perfectamente a cualquier pantalla",
      "Genera diccionarios visuales (haz clic en un acorde para ver notas en Piano/Guitarra)",
      "Reproductor de YouTube integrado para ensayar escuchando el original",
      "Búsqueda por número, tono o tempo automático",
      "Siempre legible, sin importar la tipografía",
    ],
    anatomyTitle: "La Anatomía de una Canción",
    anatomyLede:
      "La fórmula es siempre la misma: Información en la parte superior (Tono, Título), seguida de versos, coros y puentes.",
    oneDirectiveTwoWaysTitle: "Una directiva, dos formas de escribirla",
    oneDirectiveTwoWaysDesc:
      "Puedes usar la forma completa ({start_of_verse}) o la abreviatura ({sov}). ¡Hosanna entiende ambas por igual!",
    essentialDirectivesTitle: "Directivas Esenciales",
    essentialDirectivesLede:
      "Las instrucciones más utilizadas a diario. Incluyen funciones exclusivas de Hosanna para optimizar ensayos.",
    shortcutLabel: "atajo:",
    structureTitle: "Estructura de la Canción",
    structureLede:
      "Separa la letra en bloques para que Hosanna cree encabezados de colores automáticamente (Verso, Coro, Puente).",
    sections: {
      verse: { label: "Verso", desc: "La narrativa principal de la canción." },
      chorus: { label: "Coro", desc: "La parte más fuerte que se repite." },
      bridge: { label: "Puente", desc: "La transición que conecta las secciones." },
    },
    chorusMagicDesc:
      "Si usas {chorus} sin nada más, Hosanna copia y renderiza automáticamente la letra del último coro definido. ¡Ahorra tiempo y no reescribas!",
    chorusMagicAutoNote: "(Hosanna renderiza el coro automáticamente)",
    gridsEyebrow: "Para Músicos",
    gridsTitle: "Cuadrículas de Acordes & Tiempos",
    gridsLede:
      "¿Necesitas escribir una intro o instrumental? Usa barras verticales para dibujar compases o define la duración de cada acorde.",
    barlinesTitle: "Barlines (Compases)",
    barlinesNormal: "Separación normal de compás",
    barlinesSection: "Inicio o fin de sección",
    barlinesRepeat: "Marcas de repetición",
    durationsTitle: "Duraciones (Tiempos)",
    durationsDesc:
      "Añade @X dentro del corchete del acorde para dictar su duración visual en la cuadrícula.",
    durationsDouble: "Dura el doble de tiempo",
    durationsHalf: "Dura la mitad de tiempo",
    tabEyebrow: "Para Guitarristas",
    tabTitle: "Tablatura",
    tabLede: "Ideal para punteos, riffs o solos con precisión quirúrgica.",
    tabWarningTitle: "Sin formato automático",
    tabWarningDesc:
      "En el bloque de tablatura, Hosanna respeta al 100% los espacios introducidos y usa tipografía monoespaciada para mantener todo alineado.",
    shortcutsEyebrow: "Herramientas Prácticas",
    shortcutsTitle: "Atajos del Editor Hosanna",
    shortcutsLede:
      "No necesitas memorizar ni escribir directivas largas. Nuestro editor está pensado para ser ágil.",
    autocompleteTitle: "1. Autocompletar Acordes",
    autocompleteDesc:
      "A medida que añades acordes en la canción, Hosanna los memoriza. ¡Solo escribe [ y el editor te sugiere acordes!",
    selectAndWrapTitle: "2. Seleccionar y Envolver (Atajos y Clic Derecho)",
    selectAndWrapDesc:
      "¿Escribiste la letra sin secciones? Selecciona líneas con el ratón y usa atajos o el menú contextual.",
    createVerse: "Crear Verso",
    createVerseDesc: "Envuelve la selección en un Verso",
    createChorus: "Crear Coro",
    createChorusDesc: "Envuelve la selección en un Coro",
    createBridge: "Crear Puente",
    createBridgeDesc: "Envuelve la selección en un Puente",
    typeAndTabTitle: '3. Escribe la clave y pulsa "Tab"',
    typeAndTabDesc:
      "En una línea vacía del editor, escribe una de estas palabras clave y presiona Tab. ¡El editor completa el resto!",
    quickRefEyebrow: "Hoja de Consulta",
    quickRefTitle: "Referencia Rápida",
    quickRefLede: "Todas las instrucciones reconocidas por Hosanna organizadas por categoría.",
    directivesCount: "{count} directivas",
    ctaTitle: "¿Listo para transformar el repertorio de tu iglesia?",
    ctaDesc:
      "El editor inteligente de Hosanna te guía paso a paso para que las canciones queden impecables, organizadas y listas para el ensayo.",
    ctaCreateSong: "Crear Primera Canción",
    ctaBackHome: "Volver al Inicio",
    categories: {
      metadata: "Metadados",
      comment: "Comentarios",
      structure: "Estructura",
      notation: "Notación",
    },
  },
  directives: {
    title: "Nombre oficial de la canción",
    subtitle: "Subtítulo o versión (ej: acústico, en vivo)",
    artist: "Autor o banda original",
    key: "Tono base, usado para transposiciones automáticas",
    original_key: "Tono original, cuando difiere del que toca el equipo",
    tempo: "Pulsaciones por minuto (BPM), útil para metrónomos o claqueta",
    time: "Compás rítmico, ej: 4/4 o 6/8",
    capo: "Traste de cejilla sugerido para la guitarra",
    duration: "Duración en mm:ss o segundos, para estimar tiempos del culto.",
    album: "Álbum o colección de origen",
    composer: "Compositor de la melodía",
    arranger: "Responsable del arreglo musical",
    lyricist: "Autor de la letra",
    copyright: "Información de derechos de autor / CCLI",
    year: "Año de lanzamiento o composición",
    youtube: "Enlace del vídeo. ¡Crea un minirreproductor de audio para ensayar!",
    song_number: "Número del himnario o carpeta para búsqueda rápida",
    comment: "Instrucción para la banda (ej: Solo de guitarra, Solo Batería)",
    comment_italic: "Comentario en cursiva para notas dinámicas discretas",
    comment_box: "Comentario en caja, ideal para avisos destacados en pantalla",
    repeat: "Marca una sección a repetir (ej: 2x, o según guía del líder)",
    start_of_verse: "Inicia un verso",
    end_of_verse: "Finaliza el verso actual",
    start_of_chorus: "Inicia un coro",
    end_of_chorus: "Finaliza el coro actual",
    start_of_bridge: "Inicia un puente",
    end_of_bridge: "Finaliza el puente actual",
    verse: "Atajo rápido para abrir un nuevo verso",
    bridge: "Atajo rápido para abrir una nueva puente",
    chorus: "Copia y repite automáticamente la letra del último coro definido",
    new_song: "Separa dos canciones dentro del mismo archivo",
    start_of_tab: "Inicia un bloque de tablatura (para punteos o riffs)",
    end_of_tab: "Finaliza el bloque de tablatura",
    start_of_grid: "Inicia una sección de compases (ideal para intros)",
    end_of_grid: "Finaliza la sección de cuadrícula",
    translator: "Nombre del traductor de la canción, útil para adaptaciones",
    ccli: "Número CCLI (Christian Copyright Licensing International)",
    time_signature: "Alternativa a {time} para definir compás (ej: 4/4)",
  },
};
