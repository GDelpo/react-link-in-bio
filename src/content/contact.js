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

// CTA para "no veo lo que busco" — apunta a WhatsApp con mensaje pre-armado.
export const personalizedPlanCtaData = {
  icon: MessageCircle,
  title: '¿Buscás algo más?',
  description:
    'Si ninguna de estas opciones se ajusta a lo que necesitás, escribime y armamos algo a medida.',
  buttonText: '¡Hablemos!',
};
