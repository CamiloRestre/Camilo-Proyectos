const privacyPolicies = [
  {
    id: 'camilo-proyectos',
    businessName: 'Camilo Proyectos',
    legalName: '',
    dataController: {
      name: 'Cristian Camilo Rescrepo',
      role: 'Responsable del tratamiento para este sitio',
      email: 'camiloproyectos14@gmail.com',
      location: 'Tuluá, Valle del Cauca, Colombia'
    },
    processor: {
      name: 'Pendiente de definir por servicio contratado',
      details:
        'Cuando se implementen servicios de terceros, se debe completar esta sección según los contratos y encargos reales.'
    },
    purposes: [
      'Responder solicitudes de contacto enviadas desde el formulario.',
      'Atender consultas comerciales sobre servicios de desarrollo.',
      'Mantener trazabilidad básica de solicitudes para seguimiento manual.'
    ],
    personalDataCategories: ['Nombre', 'Correo electrónico', 'Tipo de proyecto', 'Mensaje enviado por el usuario'],
    channelsAndSystems: [
      'Sitio web oficial de Camilo Proyectos.',
      'Servidor Node.js/Express desplegado en Render.',
      'Proveedor de correo (cuando se configure en variables de entorno).'
    ],
    recipients: [
      'Proveedor de alojamiento (Render), limitado a la operación técnica de la infraestructura.',
      'Proveedor de correo transaccional que se configure para procesar formularios.'
    ],
    retentionCriteria:
      'Los datos se conservan únicamente durante el tiempo necesario para responder la solicitud o cumplir obligaciones legales aplicables. Ajustar este criterio según el flujo real antes de producción.',
    rights: [
      'Acceder a sus datos personales.',
      'Solicitar actualización o corrección.',
      'Solicitar eliminación cuando aplique legalmente.',
      'Presentar consultas o reclamaciones sobre tratamiento de datos.'
    ],
    claimsProcedure:
      'Las consultas y reclamaciones deben enviarse al canal oficial indicado en esta política. Se responderán según los plazos aplicables de la normativa vigente.',
    rightsChannel: 'camiloproyectos14@gmail.com',
    effectiveDate: '2026-10-09',
    version: '1.0.0',
    published: true,
    lastUpdated: '2026-10-09',
    notes:
      'Antes de publicar en producción, revisar esta política con asesoría legal para ajustar finalidades, transferencias y tiempos de conservación al funcionamiento real del sitio.'
  }
];

const chatbotPrivacyPolicy = {
  id: 'chatbot-camilo-proyectos',
  businessName: 'Camilo Proyectos',
  title: 'Política de Tratamiento de Datos Personales del Chatbot',
  effectiveDate: '2026-10-09',
  version: '1.0.0',
  lastUpdated: '2026-10-09',
  dataController: {
    name: 'Cristian Camilo Rescrepo - Camilo Proyectos',
    role: 'Responsable del tratamiento',
    email: 'camiloproyectos14@gmail.com',
    location: 'Tuluá, Valle del Cauca, Colombia'
  },
  sections: [
    {
      id: 'objeto',
      title: '1. Objeto y alcance',
      paragraphs: [
        'Esta política informa cómo Camilo Proyectos recolecta, usa, almacena, protege y, cuando sea necesario, comparte datos personales a través del chatbot desarrollado y operado para sus clientes, así como de los canales de comunicación asociados.',
        'El chatbot puede ser instalado o utilizado en canales de mensajería definidos para cada servicio. Esta política aplica al tratamiento realizado por Camilo Proyectos como desarrollador u operador del chatbot, sin reemplazar las políticas de privacidad de la empresa que contrata el servicio ni las políticas de las plataformas de mensajería utilizadas.'
      ]
    },
    {
      id: 'datos',
      title: '2. Datos que pueden ser tratados',
      items: [
        'Nombre, número telefónico, correo electrónico y otros datos de contacto que el usuario proporcione.',
        'Contenido de los mensajes, solicitudes, preguntas, respuestas y archivos enviados al chatbot.',
        'Datos necesarios para gestionar la solicitud del usuario, según el servicio contratado por el cliente de Camilo Proyectos.',
        'Datos técnicos y de seguridad, como fecha y hora de interacción, identificadores técnicos, dirección IP o información del navegador cuando el canal los proporcione.'
      ]
    },
    {
      id: 'finalidades',
      title: '3. Finalidades del tratamiento',
      items: [
        'Responder preguntas, solicitudes y conversaciones iniciadas por el usuario.',
        'Prestar, gestionar y dar seguimiento a los servicios, pedidos, reservas o trámites que el cliente del chatbot haya habilitado.',
        'Escalar una conversación a una persona cuando sea necesario y brindar soporte.',
        'Mantener registros de conversación para continuidad del servicio, control de calidad, seguridad y solución de incidentes.',
        'Mejorar el funcionamiento, precisión y seguridad del chatbot.',
        'Cumplir obligaciones legales, atender requerimientos de autoridades y prevenir fraude, abuso o usos no autorizados.',
        'Enviar comunicaciones comerciales únicamente cuando exista autorización válida para ello.'
      ]
    },
    {
      id: 'autorizacion',
      title: '4. Autorización y uso de respuestas automatizadas',
      paragraphs: [
        'El usuario autoriza el tratamiento cuando interactúa con el chatbot después de haber sido informado sobre esta política y sus finalidades, sin perjuicio de los casos en que la ley permita el tratamiento sin autorización.',
        'El chatbot utiliza respuestas automatizadas. El usuario puede solicitar atención humana cuando el canal y el servicio lo permitan. Las respuestas automatizadas pueden contener errores y no sustituyen la revisión de un profesional cuando la decisión tenga efectos legales, financieros, médicos o similares.'
      ]
    },
    {
      id: 'encargados',
      title: '5. Proveedores y terceros',
      paragraphs: [
        'Camilo Proyectos puede utilizar proveedores de alojamiento, bases de datos, mensajería, correo, analítica, automatización o inteligencia artificial para operar el chatbot. Estos proveedores tratarán la información únicamente según las instrucciones, finalidades y medidas de seguridad aplicables.',
        'El servicio puede estar integrado con plataformas de terceros. El usuario debe consultar también sus políticas de privacidad. Los datos no se venderán a terceros ni se utilizarán para finalidades distintas de las informadas y autorizadas.'
      ]
    },
    {
      id: 'seguridad',
      title: '6. Seguridad y conservación',
      paragraphs: [
        'Se aplican medidas técnicas, humanas y administrativas razonables para proteger la información frente a pérdida, alteración, acceso, uso o divulgación no autorizados.',
        'Los datos se conservarán durante el tiempo necesario para prestar el servicio, responder solicitudes, resolver controversias y cumplir obligaciones legales o contractuales. Después podrán eliminarse, anonimizarse o conservarse bloqueados cuando exista una obligación legal.'
      ]
    },
    {
      id: 'derechos',
      title: '7. Derechos del titular',
      items: [
        'Conocer, actualizar y rectificar sus datos personales.',
        'Solicitar prueba de la autorización y ser informado sobre el uso de sus datos.',
        'Solicitar la supresión de sus datos o revocar la autorización cuando proceda legalmente.',
        'Presentar consultas, quejas o reclamos ante el responsable y ante la Superintendencia de Industria y Comercio.'
      ]
    },
    {
      id: 'canal',
      title: '8. Consultas y reclamos',
      paragraphs: [
        'Las solicitudes relacionadas con datos personales deben enviarse a camiloproyectos14@gmail.com e incluir el nombre del titular, una descripción clara de la solicitud y un medio de respuesta. Camilo Proyectos podrá solicitar información adicional para verificar la identidad del solicitante.',
        'Las consultas y reclamos se atenderán dentro de los términos establecidos por la Ley 1581 de 2012 y sus normas reglamentarias.'
      ]
    },
    {
      id: 'vigencia',
      title: '9. Vigencia y modificaciones',
      paragraphs: [
        'Esta política entra en vigencia el 9 de octubre de 2026. Camilo Proyectos podrá actualizarla cuando cambien el chatbot, los servicios, los proveedores o las normas aplicables. La versión vigente estará disponible en la URL informada por el chatbot.'
      ]
    }
  ]
};

function getPublishedPolicies() {
  return privacyPolicies.filter((policy) => policy.published);
}

function getChatbotPrivacyPolicy() {
  return chatbotPrivacyPolicy;
}

function getPublishedPolicyById(id) {
  return getPublishedPolicies().find((policy) => policy.id === id);
}

module.exports = {
  privacyPolicies,
  chatbotPrivacyPolicy,
  getPublishedPolicies,
  getChatbotPrivacyPolicy,
  getPublishedPolicyById
};
