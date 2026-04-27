const rawFaq = [
  {
    title: '¿Cómo accedo al programa una vez que lo compro?',
    content:
      'Una vez completada la compra recibís un correo de confirmación con las instrucciones de acceso a la plataforma y los materiales del programa.',
  },
  {
    title: '¿Necesito conocimiento previo para empezar?',
    content:
      'Hay programas para todos los niveles. Si recién arrancás, te recomiendo empezar por "Foundations". Para quien ya viene con base, "Strength Builder" o "Power Up" son buenas opciones.',
  },
  {
    title: '¿Cuánto tiempo dura cada programa?',
    content:
      'Los programas duran entre 6 y 12 semanas según el nivel. Cada uno te entrega rutinas semanales completas con videos, notas y feedback estructurado.',
  },
  {
    title: '¿Qué necesito para hacer los programas?',
    content:
      'Solamente acceso a internet y, dependiendo del programa, equipamiento básico (mancuernas, bandas, espacio para moverte). Los detalles están en la página de cada programa.',
  },
  {
    title: '¿Ofrecés soporte durante el programa?',
    content:
      'Sí. Podés escribirme por WhatsApp si tenés dudas con la técnica o la programación, y revisamos juntos lo que necesites para que avances con confianza.',
  },
  {
    title: '¿Puedo cambiar de programa si elegí mal?',
    content:
      'Sí. Si en las primeras dos semanas sentís que el programa no es para vos, escribime y vemos cómo migrarte a uno que se adapte mejor a tu nivel y objetivos.',
  },
];

export const faqData = rawFaq.map((item, index) => ({
  id: `faq-${index + 1}`,
  title: item.title,
  collapsibleContent: item.content,
}));
