import { useEffect } from 'react';
import { profileData } from '@content/profile';

const SITE_NAME = profileData.name;

/**
 * Hook para cambiar dinámicamente el title del documento.
 * Usa el nombre del owner desde profileData como fallback / sufijo por defecto.
 * @param {string} title - El título que se quiere establecer
 * @param {string} [suffix] - Sufijo opcional (ej: "| Site Name")
 */
export const useDocumentTitle = (title, suffix = `| ${SITE_NAME}`) => {
  useEffect(() => {
    const fullTitle = title ? `${title} ${suffix}` : SITE_NAME;
    document.title = fullTitle;

    return () => {
      document.title = SITE_NAME;
    };
  }, [title, suffix]);
};

export default useDocumentTitle;
