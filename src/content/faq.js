// FAQ ejemplo. Reemplazar / agregar / quitar items según el caso de uso.
const rawFaq = [
  {
    title: '¿Cómo accedo al producto/servicio una vez que lo compro?',
    content:
      'Una vez completada la compra, vas a recibir un correo electrónico con la información de acceso.',
  },
  {
    title: '¿Necesito algún requisito previo?',
    content:
      'Detallar acá si hace falta material, equipamiento, conocimiento previo, herramienta o cuenta de un servicio externo.',
  },
  {
    title: '¿A quién va dirigido?',
    content:
      'Detallar el público objetivo: nivel, edad, perfil profesional, etc.',
  },
  {
    title: '¿Ofrecés soporte después de la compra?',
    content:
      'Sí — para dudas escribime por WhatsApp o respondé el mail de confirmación.',
  },
];

export const faqData = rawFaq.map((item, index) => ({
  id: `faq-${index + 1}`,
  title: item.title,
  collapsibleContent: item.content,
}));
