export interface Service {
  slug: string;
  name: string;
  summary: string;
  description: string;
  bullets: readonly string[];
  detailPage?: string;
}

export const SERVICES: readonly Service[] = [
  {
    slug: "fabricacion-a-medida",
    name: "Fabricación a medida",
    summary:
      "Equipos y muebles en acero inoxidable según las medidas y necesidades de cada proyecto.",
    description:
      "Diseñamos y fabricamos equipamiento en acero inoxidable para cocinas profesionales, adaptado al espacio y a la operación de cada cliente.",
    bullets: [
      "Equipos y muebles a medida.",
      "Trabajos de soldadura, corte y doblez.",
      "Terminaciones para uso intensivo y limpieza sanitaria.",
    ],
  },
  {
    slug: "instalacion",
    name: "Instalación y puesta en marcha",
    summary: "Coordinamos la instalación y dejamos el equipo listo para operar.",
    description:
      "Acompañamos la instalación del equipamiento y la puesta en marcha para que quede disponible para la operación.",
    bullets: [
      "Coordinación de la instalación.",
      "Puesta en marcha del equipo.",
      "Revisión de detalles finales.",
    ],
  },
  {
    slug: "mantenimiento",
    name: "Mantenimiento preventivo y correctivo",
    summary: "Cuidado del equipamiento y resolución de fallas para sostener la operación.",
    description:
      "Realizamos mantenimiento preventivo para cuidar el equipamiento y mantenimiento correctivo para atender fallas.",
    bullets: ["Mantenimiento preventivo.", "Mantenimiento correctivo.", "Atención de fallas."],
    detailPage: "/servicios/mantenimiento/",
  },
  {
    slug: "asesoria-diseno",
    name: "Asesoría y diseño",
    summary: "Acompañamiento para definir el equipamiento y la distribución del espacio.",
    description:
      "Ayudamos a definir las necesidades del proyecto y a organizar el equipamiento dentro del espacio disponible.",
    bullets: [
      "Relevamiento de necesidades.",
      "Orientación sobre equipamiento.",
      "Apoyo en la distribución del espacio.",
    ],
  },
  {
    slug: "equipamiento-integral",
    name: "Equipamiento integral",
    summary: "Proyectos completos de equipamiento para cocinas profesionales.",
    description:
      "Integramos el equipamiento de una cocina profesional, desde la definición de las necesidades hasta la puesta en marcha.",
    bullets: [
      "Definición del equipamiento.",
      "Coordinación de las líneas de producto.",
      "Acompañamiento hasta la puesta en marcha.",
    ],
  },
  {
    slug: "repuestos",
    name: "Repuestos",
    summary: "Suministro de repuestos y componentes para el equipamiento.",
    description:
      "Gestionamos el suministro de repuestos y componentes necesarios para el mantenimiento del equipamiento.",
    bullets: [
      "Consulta de repuestos.",
      "Componentes para equipos.",
      "Coordinación de disponibilidad.",
    ],
  },
  {
    slug: "transporte-entrega",
    name: "Transporte y entrega",
    summary: "Coordinación de la entrega de los equipos.",
    description:
      "Coordinamos la entrega del equipamiento según las condiciones y el alcance de cada proyecto.",
    bullets: [
      "Coordinación de entrega.",
      "Preparación del equipo.",
      "Confirmación con el cliente.",
    ],
  },
  {
    slug: "capacitacion",
    name: "Capacitación",
    summary: "Orientación para el uso correcto del equipamiento.",
    description:
      "Brindamos orientación sobre el uso y los cuidados básicos del equipamiento entregado.",
    bullets: ["Uso del equipo.", "Cuidados básicos.", "Resolución de dudas iniciales."],
  },
  {
    slug: "soldadura-corte-doblez",
    name: "Soldadura, corte y doblez",
    summary: "Trabajos de acero inoxidable para piezas, estructuras y mobiliario.",
    description:
      "Realizamos trabajos de soldadura, corte y doblez en acero inoxidable para piezas, estructuras y mobiliario.",
    bullets: [
      "Soldadura en acero inoxidable.",
      "Corte y doblez.",
      "Piezas y estructuras a medida.",
    ],
  },
] as const satisfies readonly Service[];
