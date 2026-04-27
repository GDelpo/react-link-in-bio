import { personalInfo } from './personalData.js';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '@/utils/linkUtils.js';

// Número de WhatsApp normalizado para wa.me (sin espacios ni '+').
export const WHATSAPP_PHONE = personalInfo.telefono
  .replace(/\s/g, '')
  .replace('+', '');

const WHATSAPP_MESSAGE_PREFIX = 'Hola! Quiero información del programa';

export const generateWhatsAppLink = (programName) =>
  buildWhatsAppLink(
    WHATSAPP_PHONE,
    `${WHATSAPP_MESSAGE_PREFIX} ${programName}`
  );

export const personalizedPlanLink = generateWhatsAppLink('personalizado');

export const personalizedPlanCtaData = {
  icon: MessageCircle,
  title: '¿Buscás algo más?',
  description:
    'Si ninguna de las opciones se ajusta a lo que necesitás, escribime y armamos un plan a medida según tus objetivos.',
  buttonText: '¡Hablemos!',
};
