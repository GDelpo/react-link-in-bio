import { personalInfo } from './personalData.js';
import { Mail } from 'lucide-react';
import {
  SiInstagram,
  SiYoutube,
  SiWhatsapp,
} from '@icons-pack/react-simple-icons';
import { personalizedPlanLink } from './contact';

const emailLink = `mailto:${personalInfo.email}`;

// Datos públicos del perfil. Customizar al hacer fork.
export const profileData = {
  name: 'Your Name',
  titles: [
    'Title or role 1',
    'Title or role 2',
    'Tagline corta',
  ],
  description:
    'Descripción breve para el header. Una a dos oraciones que expliquen qué hacés y a quién va dirigido el sitio.',
  // Reemplazar por una URL pública (CDN, S3, hosting de imágenes) o un asset en /public.
  profileImage: '/profile-placeholder.svg',
  profileImageAlt: 'Foto de perfil',
  socials: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/your-handle/',
      Icon: SiInstagram,
      hoverClass: 'hover:bg-[#E4405F]',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@your-channel',
      Icon: SiYoutube,
      hoverClass: 'hover:bg-[#FF0000]',
    },
    {
      name: 'WhatsApp',
      url: personalizedPlanLink,
      Icon: SiWhatsapp,
      hoverClass: 'hover:bg-[#25D366]',
    },
    {
      name: 'Mail',
      url: emailLink,
      Icon: Mail,
      hoverClass: 'hover:bg-blue-700',
    },
  ],
};
