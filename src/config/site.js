const siteConfig = {
  brand: {
    provisionalName: 'Camilo Proyectos',
    professionalName: 'Cristian Camilo Rescrepo',
    role: 'Desarrollador de software freelancer',
    location: 'Tuluá, Valle del Cauca, Colombia',
    contactEmail: 'camiloproyectos14@gmail.com',
    remoteMode: 'Trabajo remoto',
    phone: null,
    address: null
  },
  site: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    title: 'Camilo Proyectos | Desarrollo web, chatbots y automatización',
    description:
      'Camilo Proyectos crea soluciones digitales para negocios: desarrollo web, chatbots, automatizaciones e integraciones tecnológicas.',
    socialImage: '/favicon.svg'
  },
  contact: {
    provider: process.env.CONTACT_PROVIDER || '',
    providerApiKey: process.env.CONTACT_PROVIDER_API_KEY || '',
    receiverEmail: process.env.CONTACT_RECEIVER_EMAIL || 'camiloproyectos14@gmail.com'
  }
};

module.exports = { siteConfig };
