export const FAQ_CATEGORIES = [
  "Productos",
  "Cotización y contacto",
  "Servicios",
  "Proyectos",
] as const;

export type FaqCategory = (typeof FAQ_CATEGORIES)[number];

export interface FaqItem {
  question: string;
  answer: string;
  category: FaqCategory;
}

export const FAQS: readonly FaqItem[] = [
  {
    category: "Productos",
    question: "¿Qué productos ofrecen?",
    answer:
      "Ofrecemos neveras verticales y horizontales, vitrinas refrigeradas, neveras carniceras y para helado, freidoras de alto rendimiento, estufas, asadores de arepas, campanas de extracción y mesones en acero inoxidable. También realizamos fabricación a medida.",
  },
  {
    category: "Productos",
    question: "¿Los productos tienen precio publicado?",
    answer:
      "No. Todos los productos se cotizan por WhatsApp o mediante el formulario de contacto, según el equipo y la necesidad de cada cliente.",
  },
  {
    category: "Productos",
    question: "¿Puedo pedir un equipo a medida?",
    answer:
      "Sí. Realizamos fabricación a medida de equipos, muebles, mesones y estructuras en acero inoxidable según las medidas y necesidades del proyecto.",
  },
  {
    category: "Productos",
    question: "¿Los productos incluyen garantía?",
    answer:
      "La garantía se define según el producto y el proyecto. Consúltanos por el equipo de interés para conocer las condiciones aplicables.",
  },
  {
    category: "Cotización y contacto",
    question: "¿Cómo solicito una cotización?",
    answer:
      "Puedes escribirnos por WhatsApp o completar el formulario de la página de Contacto. Cuéntanos qué equipo o servicio necesitas y te responderemos con la información disponible.",
  },
  {
    category: "Cotización y contacto",
    question: "¿Qué información necesitan para cotizar?",
    answer:
      "Ayuda conocer el tipo de equipo, el uso previsto, las medidas o el espacio disponible, la cantidad y la ubicación del proyecto. Si tienes fotos o planos, también puedes compartirlos.",
  },
  {
    category: "Cotización y contacto",
    question: "¿Hacen envíos?",
    answer:
      "La entrega se coordina según el proyecto y la ubicación. Consúltanos por tu caso para revisar las opciones disponibles.",
  },
  {
    category: "Servicios",
    question: "¿Ofrecen instalación?",
    answer:
      "Sí. Ofrecemos instalación y puesta en marcha del equipamiento según el alcance de cada proyecto.",
  },
  {
    category: "Servicios",
    question: "¿Qué tipos de mantenimiento ofrecen?",
    answer:
      "Ofrecemos mantenimiento preventivo y mantenimiento correctivo. El alcance se coordina según el equipo y la necesidad de cada cliente.",
  },
  {
    category: "Servicios",
    question: "¿Realizan reparación de equipos de terceros?",
    answer:
      "No realizamos reparación de equipos de terceros. Consúltanos por el equipo que necesitas atender para revisar el alcance del servicio.",
  },
  {
    category: "Proyectos",
    question: "¿Trabajan con restaurantes, hoteles y panaderías?",
    answer:
      "Sí. Trabajamos con restaurantes, hoteles, panaderías, instituciones y otros negocios que necesitan equipamiento para cocinas profesionales.",
  },
  {
    category: "Proyectos",
    question: "¿Pueden equipar una cocina completa?",
    answer:
      "Sí. El servicio de equipamiento integral acompaña el proyecto desde la definición de las necesidades hasta la instalación y la puesta en marcha.",
  },
  {
    category: "Proyectos",
    question: "¿Cómo es el proceso de un proyecto?",
    answer:
      "Primero conocemos la necesidad y el espacio. Luego definimos el equipamiento, coordinamos la fabricación o el suministro, y acompañamos la entrega y la puesta en marcha.",
  },
];
