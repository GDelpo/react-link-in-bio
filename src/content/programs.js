import {
  LayoutGrid,
  Layers,
  Dumbbell,
  Zap,
  Feather,
} from 'lucide-react';

import { createProgram, PROGRAM_EMOJIS } from '@/utils/programUtils.js';
export { getSmartPrice, getSmartPriceDisplay } from '@/utils/programUtils.js';

// Programas demo con datos ficticios coherentes. Reemplazar al hacer fork.
const PROGRAMS_CONFIG = {
  FOUNDATIONS: {
    emoji: PROGRAM_EMOJIS.beginner,
    shortDescription: 'CONSTRUÍ UNA BASE SÓLIDA EN 8 SEMANAS',
    duration: '8 SEMANAS',
    frequency: '3 estímulos por semana',
    price: {
      options: {
        default: { regular: { local: '$49.000', international: 'U$35' } },
      },
    },
    Icon: Feather,
    gradientClasses: 'from-purple-500 to-indigo-400',
    targetAudience:
      'Personas que recién empiezan o vuelven después de una pausa larga.',
    description: [
      'Foundations está diseñado para que arranques con confianza, sin abrumarte. Trabajamos los patrones de movimiento básicos y armamos una base sólida sobre la que después podés construir cualquier objetivo.',
      'Cada semana incluye 3 entrenamientos, videos cortos explicando la técnica de cada ejercicio, y notas con los puntos clave. Todo pensado para que progreses paso a paso.',
      'Si nunca entrenaste o querés volver al ruedo después de una pausa, este es el punto de entrada ideal.',
    ],
  },

  'STRENGTH BUILDER': {
    emoji: PROGRAM_EMOJIS.strength,
    shortDescription: 'AUMENTÁ TU FUERZA Y MASA MUSCULAR DE FORMA SOSTENIBLE',
    duration: '12 SEMANAS',
    frequency: '4 estímulos por semana',
    price: {
      options: {
        default: {
          regular: { local: '$89.000', international: 'U$70' },
          specialOffer: { local: '$72.000', international: 'U$58' },
        },
      },
    },
    Icon: Layers,
    gradientClasses: 'from-blue-500 to-cyan-400',
    targetAudience:
      'Quienes ya tienen base y buscan progresar en fuerza máxima e hipertrofia.',
    description: [
      'Strength Builder es un programa de 12 semanas pensado para que rompas mesetas y avances de forma sostenible. Combina trabajos de fuerza máxima, hipertrofia y potencia distribuidos en 4 sesiones semanales.',
      'Vas a trabajar los patrones grandes (sentadilla, peso muerto, press) y accesorios pensados para reforzar puntos débiles, con progresiones planificadas semana a semana.',
      'Si venís estancado o sentís que ya no te alcanza con lo que hacías antes, este programa te da estructura para volver a progresar.',
    ],
    equipment: [
      'Pesos libres (barra y mancuernas)',
      'Banco regulable',
      'Espacio para entrenar (gym o home gym equipado)',
    ],
  },

  'POWER UP': {
    emoji: PROGRAM_EMOJIS.athletic,
    shortDescription: 'POTENCIA Y CONDICIÓN ATLÉTICA EN 9 SEMANAS',
    duration: '6 / 9 SEMANAS',
    frequency: '3 estímulos por semana',
    price: {
      options: {
        '6weeks': { regular: { local: '$59.000', international: 'U$45' } },
        '9weeks': { regular: { local: '$79.000', international: 'U$60' } },
      },
    },
    Icon: Zap,
    gradientClasses: 'from-amber-400 to-yellow-300',
    targetAudience:
      'Atletas y personas activas que quieren ganar potencia y velocidad.',
    description: [
      'Power Up se enfoca en desarrollar potencia, velocidad y cambio de dirección. Pensado para deportistas en cualquier disciplina o gente activa que quiera moverse mejor.',
      'Cada sesión integra trabajos de fuerza explosiva, drills de aceleración y ejercicios pliométricos progresivos.',
      'Disponible en versión 6 o 9 semanas según el tiempo disponible y tu punto de partida.',
    ],
    equipment: [
      'Espacio abierto (10-20m mínimo)',
      'Conos o referencias',
      'Pesos libres (opcional según fase)',
    ],
    specialNote:
      'Mejorar la velocidad máxima es de las herramientas más efectivas para reducir riesgo de lesión muscular.',
  },

  'IN-SEASON': {
    emoji: PROGRAM_EMOJIS.strength,
    shortDescription: 'MANTENÉ Y MEJORÁ TUS CAPACIDADES DURANTE LA TEMPORADA',
    duration: '8 / 12 SEMANAS',
    frequency: '3 estímulos por semana',
    price: {
      options: {
        '8weeks': { regular: { local: '$56.000', international: 'U$40' } },
        '12weeks': { regular: { local: '$78.000', international: 'U$58' } },
      },
    },
    Icon: Dumbbell,
    gradientClasses: 'from-emerald-500 to-green-400',
    targetAudience:
      'Atletas en plena temporada deportiva que necesitan mantener fuerza sin afectar su rendimiento.',
    description: [
      'In-Season está diseñado para que entrenes sin que el gimnasio te pase factura en tu deporte. 3 sesiones semanales bien dosificadas para preservar fuerza, potencia y salud articular.',
      'La idea es complementar tu temporada, no competir con ella. Las cargas y volúmenes están calibrados para que llegues fresco a tus partidos / competencias.',
    ],
  },
};

export const programsData = Object.keys(PROGRAMS_CONFIG).reduce((acc, key) => {
  acc[key] = createProgram(key, PROGRAMS_CONFIG[key]);
  return acc;
}, {});

export const programsSectionData = {
  id: 'programs-section',
  title: 'Programas de Entrenamiento',
  icon: LayoutGrid,
  description:
    'Programas diseñados para diferentes niveles y momentos. Encontrá el que mejor se adapte a tus objetivos.',
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
