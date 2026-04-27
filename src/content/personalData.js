// Datos base del owner del sitio. Reemplazar por los reales al hacer fork.
const personalInfoBase = {
  nacimiento: '15.03.1992',
  ciudad: 'Buenos Aires, Argentina',
  email: 'hola@example.com',
  telefono: '+54 9 11 0000 0000',
};

import { calcularEdad } from '@/utils/dateUtils.js';

export const personalInfo = {
  ...personalInfoBase,
  edad: calcularEdad(personalInfoBase.nacimiento),
};

export const education = [
  {
    date: '2010 - 2014',
    title: 'Licenciatura en Ciencias del Deporte',
    subtitle: 'Universidad de Ejemplo',
  },
  {
    date: '2018',
    title: 'Certificación en Coaching Online',
    subtitle: 'Academia Internacional de Coaches',
  },
];

export const experience = [
  {
    date: '2020 - Presente',
    title: 'Coach Online Independiente',
    subtitle: 'Programas y mentoría 1:1',
  },
  {
    date: '2015 - 2020',
    title: 'Entrenador en Centro Deportivo',
    subtitle: 'Club Atlético Ejemplo',
  },
];
