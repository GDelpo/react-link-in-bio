import { LayoutGrid, Layers, Dumbbell, Feather } from 'lucide-react';

import { createProgram, PROGRAM_EMOJIS } from '@/utils/programUtils.js';
export { getSmartPrice, getSmartPriceDisplay } from '@/utils/programUtils.js';

// Datos únicos de cada programa/producto/servicio. Solo lo que cambia entre uno y otro.
// El factory `createProgram(name, config)` agrega slug, defaults y campos derivados.
//
// Estructura mínima por entry:
//   - emoji, shortDescription, duration, frequency, Icon, gradientClasses
//   - price.options con al menos `default` y { regular: { local, international } }
//   - targetAudience, description (array de párrafos)
// Campos opcionales: equipment, specialNote, price.options con varias variantes.
const PROGRAMS_CONFIG = {
  'PROGRAM ONE': {
    emoji: PROGRAM_EMOJIS.strength,
    shortDescription: 'TAGLINE CORTA EN MAYÚSCULAS DEL PRODUCTO',
    duration: '12 SEMANAS',
    frequency: 'X estímulos por semana',
    price: {
      options: {
        default: {
          regular: { local: '$00.000', international: 'U$00' },
          specialOffer: { local: '$00.000', international: 'U$00' },
        },
      },
    },
    Icon: Layers,
    gradientClasses: 'from-blue-500 to-cyan-400',
    targetAudience:
      'Una línea describiendo a quién va dirigido este programa.',
    description: [
      'Párrafo 1 — qué es el programa, en qué consiste, cuándo hacerlo.',
      'Párrafo 2 — qué incluye, qué resultados esperar.',
      'Párrafo 3 — call to action o cierre con una pregunta retórica.',
    ],
  },

  'PROGRAM TWO': {
    emoji: PROGRAM_EMOJIS.athletic,
    shortDescription: 'OTRA OFERTA, OTRA DURACIÓN, OTRO PÚBLICO',
    duration: '6 / 9 SEMANAS',
    frequency: 'X estímulos por semana',
    price: {
      options: {
        '6weeks': { regular: { local: '$00.000', international: 'U$00' } },
        '9weeks': { regular: { local: '$00.000', international: 'U$00' } },
      },
    },
    Icon: Dumbbell,
    gradientClasses: 'from-emerald-500 to-green-400',
    targetAudience: 'Otro público objetivo distinto al programa anterior.',
    description: [
      'Párrafo 1 — descripción del segundo programa.',
      'Párrafo 2 — diferencia con el primero, cuándo elegir este.',
    ],
    equipment: [
      'Item de equipamiento opcional 1',
      'Item de equipamiento opcional 2',
    ],
    specialNote: 'Notita opcional al pie del modal de detalle.',
  },

  BEGINNER: {
    emoji: PROGRAM_EMOJIS.beginner,
    shortDescription: 'PUNTO DE ENTRADA / VERSIÓN BÁSICA',
    duration: '8 SEMANAS',
    frequency: 'X estímulos por semana',
    price: {
      options: {
        default: { regular: { local: '$00.000', international: 'U$00' } },
      },
    },
    Icon: Feather,
    gradientClasses: 'from-purple-500 to-indigo-400',
    targetAudience: 'Personas que recién empiezan o necesitan una base.',
    description: [
      'Programa introductorio, ideal para arrancar y construir una base sólida.',
    ],
  },
};

export const programsData = Object.keys(PROGRAMS_CONFIG).reduce((acc, key) => {
  acc[key] = createProgram(key, PROGRAMS_CONFIG[key]);
  return acc;
}, {});

export const programsSectionData = {
  id: 'programs-section',
  title: 'Programas / Productos',
  icon: LayoutGrid,
  description:
    'Tagline genérica de la sección de productos. Customizar al hacer fork.',
  content: Object.keys(PROGRAMS_CONFIG).map((key) => {
    const p = programsData[key];
    return {
      id: p.id,
      title: key,
      description: p.shortDescription,
      duration: p.duration,
      Icon: p.Icon,
      gradientClasses: p.gradientClasses,
      detailedInfo: p,
    };
  }),
};

export default programsSectionData;
