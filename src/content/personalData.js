// Datos base del owner del sitio. Customizar al hacer fork.
const personalInfoBase = {
  nacimiento: '01.01.1990',
  ciudad: 'Your City, Country',
  email: 'hello@example.com',
  telefono: '+54 9 11 0000 0000',
};

import { calcularEdad } from '@/utils/dateUtils.js';

export const personalInfo = {
  ...personalInfoBase,
  edad: calcularEdad(personalInfoBase.nacimiento),
};

// Bloque opcional — si no usás secciones de educación/experiencia, exportar arrays vacíos.
export const education = [
  {
    date: '2018 - 2022',
    title: 'Título universitario',
    subtitle: 'Universidad de Ejemplo',
  },
];

export const experience = [
  {
    date: '2022 - Presente',
    title: 'Rol Actual',
    subtitle: 'Empresa / Proyecto',
  },
];
