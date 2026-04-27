import { personalInfo } from './personalData.js';
import { Mail } from 'lucide-react';
import {
  SiInstagram,
  SiYoutube,
  SiWhatsapp,
} from '@icons-pack/react-simple-icons';
import { personalizedPlanLink } from './contact';

const emailLink = `mailto:${personalInfo.email}`;

export const profileData = {
  name: 'Sam Carter',
  titles: [
    'Coach online.',
    'Educador en hábitos.',
    'Creador de contenido.',
  ],
  description:
    'Te ayudo a construir hábitos consistentes a través de programas estructurados y mentoría personalizada. 10+ años acompañando procesos de cambio.',
  profileImage: '/profile-placeholder.svg',
  profileImageAlt: 'Foto de perfil',
  socials: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/samcarter.demo/',
      Icon: SiInstagram,
      hoverClass: 'hover:bg-[#E4405F]',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@samcarter.demo',
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
