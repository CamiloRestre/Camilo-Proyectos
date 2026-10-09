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

const applicationPrivacyPolicy = {
  id: 'aplicaciones-camilo-proyectos',
  businessName: 'Camilo Proyectos',
  title: 'Política de Tratamiento de Datos Personales',
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
        'Esta política informa cómo Camilo Proyectos recolecta, usa, almacena, protege y, cuando sea necesario, comparte datos personales a través de las aplicaciones y soluciones digitales que desarrolla para sus clientes.',
        'Las aplicaciones pueden incluir automatizaciones, asistentes conversacionales o integraciones con canales de mensajería. Esta política aplica al tratamiento realizado por Camilo Proyectos como desarrollador o encargado, sin reemplazar la política de privacidad de la empresa que contrata cada solución ni las políticas de las plataformas de terceros.'
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
        'Responder preguntas, solicitudes y comunicaciones iniciadas por el usuario.',
        'Prestar, gestionar y dar seguimiento a los servicios, pedidos, reservas o trámites que el cliente haya habilitado.',
        'Brindar soporte y escalar una solicitud a una persona cuando sea necesario.',
        'Mantener registros para continuidad del servicio, control de calidad, seguridad y solución de incidentes.',
        'Mejorar el funcionamiento, precisión y seguridad de las soluciones digitales.',
        'Cumplir obligaciones legales, atender requerimientos de autoridades y prevenir fraude, abuso o usos no autorizados.',
        'Enviar comunicaciones comerciales únicamente cuando exista autorización válida para ello.'
      ]
    },
    {
      id: 'autorizacion',
      title: '4. Autorización y soluciones automatizadas',
      paragraphs: [
        'El usuario autoriza el tratamiento cuando interactúa con el chatbot después de haber sido informado sobre esta política y sus finalidades, sin perjuicio de los casos en que la ley permita el tratamiento sin autorización.',
        'Algunas soluciones pueden utilizar respuestas automatizadas. El usuario puede solicitar atención humana cuando el canal y el servicio lo permitan. Las respuestas automatizadas pueden contener errores y no sustituyen la revisión de un profesional cuando la decisión tenga efectos legales, financieros, médicos o similares.'
      ]
    },
    {
      id: 'encargados',
      title: '5. Proveedores y terceros',
      paragraphs: [
        'Camilo Proyectos puede utilizar proveedores de alojamiento, bases de datos, mensajería, correo, analítica, automatización o inteligencia artificial para operar las soluciones desarrolladas. Estos proveedores tratarán la información únicamente según las instrucciones, finalidades y medidas de seguridad aplicables.',
        'Las soluciones pueden estar integradas con plataformas de terceros. El usuario debe consultar también sus políticas de privacidad. Los datos no se venderán a terceros ni se utilizarán para finalidades distintas de las informadas y autorizadas.'
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
        'Esta política entra en vigencia el 9 de octubre de 2026. Camilo Proyectos podrá actualizarla cuando cambien las aplicaciones, los servicios, los proveedores o las normas aplicables. La versión vigente estará disponible en la URL informada por cada aplicación.'
      ]
    }
  ]
};

const termsAndConditions = {
  title: 'Términos y condiciones',
  businessName: 'Camilo Proyectos',
  effectiveDate: '2026-10-09',
  version: '1.0.0',
  lastUpdated: '2026-10-09',
  sections: [
    {
      title: '1. Identificación y objeto',
      paragraphs: [
        'Camilo Proyectos es una marca de Cristian Camilo Rescrepo, desarrollador de software freelancer ubicado en Tuluá, Valle del Cauca, Colombia.',
        'Estos términos regulan el acceso y uso de este sitio web, sus formularios de contacto y la información sobre servicios de desarrollo web, aplicaciones, chatbots, automatizaciones e integraciones.'
      ]
    },
    {
      title: '2. Uso del sitio',
      paragraphs: [
        'El usuario se compromete a utilizar el sitio de forma lícita, respetuosa y sin intentar afectar su funcionamiento, seguridad o disponibilidad.',
        'La información del sitio es informativa y no constituye por sí sola una oferta contractual. El alcance, precio, tiempos, entregables y soporte de cada proyecto se definirán en una propuesta o acuerdo independiente.'
      ]
    },
    {
      title: '3. Servicios y propiedad intelectual',
      paragraphs: [
        'Las descripciones, textos, diseños, código, marcas y demás contenidos del sitio pertenecen a Camilo Proyectos o se utilizan con autorización. No se permite copiar, modificar, distribuir o explotar comercialmente el contenido sin autorización previa.',
        'La titularidad y las licencias sobre los entregables de un proyecto se definirán en el acuerdo correspondiente con cada cliente.'
      ]
    },
    {
      title: '4. Formulario de contacto',
      paragraphs: [
        'El usuario debe proporcionar información veraz al enviar una solicitud. El formulario se utiliza para responder consultas comerciales y coordinar posibles servicios.',
        'El envío de una solicitud no garantiza la aceptación de un proyecto ni la celebración de un contrato.'
      ]
    },
    {
      title: '5. Disponibilidad y responsabilidad',
      paragraphs: [
        'Camilo Proyectos procura mantener disponible y actualizado el sitio, pero no garantiza que esté libre de interrupciones, errores o contenidos de terceros.',
        'No se responderá por daños derivados de usos ajenos al control razonable de Camilo Proyectos, sin perjuicio de las responsabilidades que no puedan excluirse por ley.'
      ]
    },
    {
      title: '6. Privacidad',
      paragraphs: [
        'El tratamiento de los datos enviados mediante este sitio se rige por la política de privacidad de Camilo Proyectos, disponible en la sección de privacidad. Las aplicaciones desarrolladas cuentan con una política de tratamiento de datos independiente cuando corresponda.'
      ]
    },
    {
      title: '7. Contacto y modificaciones',
      paragraphs: [
        'Para consultas sobre estos términos puedes escribir a camiloproyectos14@gmail.com.',
        'Camilo Proyectos podrá actualizar estos términos cuando cambien los servicios, el sitio o la normativa aplicable. La versión vigente será la publicada en esta URL.'
      ]
    }
  ]
};

function getPublishedPolicies() {
  return privacyPolicies.filter((policy) => policy.published);
}

function getApplicationPrivacyPolicy() {
  return applicationPrivacyPolicy;
}

function getTermsAndConditions() {
  return termsAndConditions;
}

function getPublishedPolicyById(id) {
  return getPublishedPolicies().find((policy) => policy.id === id);
}

module.exports = {
  privacyPolicies,
  applicationPrivacyPolicy,
  termsAndConditions,
  getPublishedPolicies,
  getApplicationPrivacyPolicy,
  getTermsAndConditions,
  getPublishedPolicyById
};
