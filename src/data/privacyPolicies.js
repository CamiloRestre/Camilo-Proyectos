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

const standardPrivacyPolicy = {
  id: 'politicas',
  businessName: 'Política estándar de la aplicación',
  title: 'Política de Tratamiento de Datos Personales',
  effectiveDate: '2021-05-22',
  version: '1.0.0',
  lastUpdated: '2026-04-01',
  dataController: {
    name: 'La organización responsable de la aplicación',
    role: 'Responsable del tratamiento',
    email: 'El correo oficial informado por cada aplicación',
    location: 'La dirección oficial informada por cada aplicación',
    phone: 'El teléfono oficial informado por cada aplicación'
  },
  sections: [
    {
      id: 'introduccion',
      title: 'I. Introducción',
      paragraphs: [
        'Esta política establece las reglas para la recolección, uso, almacenamiento, circulación y protección de los datos personales tratados mediante la aplicación y sus canales asociados.',
        'La política se expide para dar cumplimiento a la Ley 1581 de 2012, el Decreto 1074 de 2015 y las demás normas que los modifiquen, adicionen o complementen. Aplica a clientes, usuarios, proveedores, empleados, colaboradores y cualquier persona natural cuyos datos sean tratados por la organización responsable o por terceros encargados.'
      ]
    },
    {
      id: 'definiciones',
      title: 'II. Definiciones',
      paragraphs: [
        'Dato personal es cualquier información vinculada o asociada a una persona natural determinada o determinable. Titular es la persona cuyos datos son objeto de tratamiento. Tratamiento comprende la recolección, almacenamiento, uso, circulación, transmisión, transferencia y supresión de datos personales.',
        'El Responsable decide sobre el tratamiento; el Encargado lo realiza por cuenta del Responsable. La autorización es el consentimiento previo, expreso e informado del Titular. Los datos sensibles son aquellos que afectan la intimidad o cuyo uso indebido puede generar discriminación.'
      ]
    },
    {
      id: 'principios',
      title: 'III. Principios rectores',
      items: [
        'Legalidad, finalidad, libertad, veracidad o calidad, transparencia, seguridad y confidencialidad.',
        'Acceso y circulación restringida, según la naturaleza de los datos y los límites establecidos por la Constitución y la ley.',
        'El tratamiento se limita a finalidades legítimas, informadas y autorizadas, y se aplican medidas técnicas, humanas y administrativas para evitar pérdida, adulteración, consulta, uso o acceso no autorizado.'
      ]
    },
    {
      id: 'derechos',
      title: 'IV. Derechos de los Titulares',
      items: [
        'Conocer, actualizar y rectificar sus datos personales.',
        'Solicitar prueba de la autorización otorgada y ser informado sobre el uso de sus datos.',
        'Solicitar la supresión de los datos o revocar la autorización cuando proceda legalmente.',
        'Oponerse al tratamiento en los casos previstos por la ley y presentar quejas ante la Superintendencia de Industria y Comercio.'
      ]
    },
    {
      id: 'recoleccion',
      title: 'V. Formas de recolección',
      paragraphs: [
        'Los datos pueden ser recolectados mediante la aplicación, el sitio web, formularios, contratos, correos electrónicos, llamadas, eventos, procesos de selección, vinculación de proveedores y la interacción con canales de mensajería como WhatsApp, Instagram y Facebook Messenger.',
        'También pueden generarse datos técnicos como URL, navegador, dirección IP, identificadores de usuario y metadatos asociados a las comunicaciones, de acuerdo con las tecnologías y permisos utilizados.'
      ]
    },
    {
      id: 'finalidades',
      title: 'VI. Finalidades del tratamiento',
      items: [
        'Crear y administrar cuentas, prestar los servicios contratados, atender solicitudes y brindar soporte.',
        'Gestionar pedidos, recogidas, entregas, trámites, seguimiento de servicios y comunicaciones operativas o transaccionales.',
        'Verificar información, prevenir fraude, gestionar riesgos, cumplir obligaciones contractuales, contables, fiscales y legales.',
        'Mejorar productos, servicios, plataformas, chatbots y procesos mediante análisis operativos y estadísticos.',
        'Gestionar relaciones con clientes, usuarios, empleados, candidatos, proveedores, aliados y socios.',
        'Enviar comunicaciones comerciales o publicitarias únicamente cuando exista autorización previa, expresa e informada.',
        'Transmitir o transferir datos a proveedores y aliados necesarios para la operación, dentro de los límites legales y contractuales.'
      ]
    },
    {
      id: 'ubicacion',
      title: 'Tratamiento de datos de ubicación',
      paragraphs: [
        'Cuando la aplicación ofrezca funciones que dependan de la ubicación, podrá tratar coordenadas precisas, ubicación aproximada y datos de movimiento durante el uso autorizado de dichas funciones.',
        'Estos datos se utilizarán únicamente para prestar las funcionalidades solicitadas, mejorar la operación y brindar seguridad. La aplicación informará el alcance del acceso y no compartirá la ubicación para finalidades ajenas a la prestación autorizada.',
        'El usuario puede revocar el permiso de ubicación desde su dispositivo. La revocación puede impedir las funcionalidades que dependan de la geolocalización.'
      ]
    },
    {
      id: 'autorizacion',
      title: 'VII. Autorización y consentimiento',
      paragraphs: [
        'La autorización debe ser previa, expresa e informada. Cada plataforma debe informar sus finalidades y solicitar la aceptación de esta política antes de realizar tratamientos que requieran consentimiento.',
        'El uso de canales de mensajería o plataformas de terceros también está sujeto a sus propias políticas de privacidad y condiciones de uso.'
      ]
    },
    {
      id: 'canales',
      title: 'VIII. Canales de acceso y mecanismos',
      paragraphs: [
        'Las consultas, quejas y reclamos sobre datos personales pueden presentarse al área de servicio al cliente o al Oficial de Protección de Datos, por los canales habilitados en la plataforma y por escrito en KR 27 36 22, Tuluá, Valle del Cauca, Colombia.',
        'Para solicitudes de proveedores, empleados y candidatos también se podrá utilizar el canal electrónico que la organización informe en cada relación. El canal general de contacto es informativo y no reemplaza los mecanismos formales de consulta, actualización, rectificación o supresión.'
      ]
    },
    {
      id: 'procedimiento',
      title: 'IX. Procedimiento para consultas y reclamos',
      paragraphs: [
        'Las consultas deben incluir nombre e identificación del Titular, descripción de la solicitud y datos de contacto. La organización responsable responderá las consultas dentro de los diez (10) días hábiles siguientes a su recepción, con la ampliación legal aplicable cuando no sea posible responder inicialmente.',
        'Los reclamos por actualización, rectificación, supresión o presunto incumplimiento deben describir los hechos, la solicitud y los datos de contacto. Se atenderán dentro de los quince (15) días hábiles siguientes, con las ampliaciones y requerimientos previstos en la normativa vigente.'
      ]
    },
    {
      id: 'sensibles',
      title: 'X. Tratamiento de datos sensibles',
      paragraphs: [
        'La organización responsable no recolectará ni tratará datos sensibles salvo que sea estrictamente necesario y exista autorización previa, expresa e informada, o se configure una excepción legal. Las respuestas sobre datos sensibles son facultativas y no se condicionará la prestación de un servicio a su entrega cuando no sea indispensable.'
      ]
    },
    {
      id: 'transferencias',
      title: 'XI. Transmisión y transferencia',
      paragraphs: [
        'La aplicación puede utilizar proveedores tecnológicos nacionales o internacionales, incluyendo plataformas de mensajería, alojamiento, analítica y correo de terceros. Las transmisiones y transferencias se realizarán con contratos, medidas de seguridad y autorizaciones o excepciones legales aplicables, procurando que el receptor ofrezca un nivel adecuado de protección.'
      ]
    },
    {
      id: 'vigencia',
      title: 'XII. Vigencia',
      paragraphs: [
        'Esta política rige desde el 22 de mayo de 2021. Los datos se conservarán durante el tiempo necesario para cumplir las finalidades informadas y las obligaciones legales. La política podrá actualizarse; los cambios sustanciales serán comunicados por los canales disponibles.'
      ]
    }
  ]
};

function getPublishedPolicies() {
  return privacyPolicies.filter((policy) => policy.published);
}

function getStandardPrivacyPolicy() {
  return standardPrivacyPolicy;
}

function getPublishedPolicyById(id) {
  return getPublishedPolicies().find((policy) => policy.id === id);
}

module.exports = {
  privacyPolicies,
  standardPrivacyPolicy,
  getPublishedPolicies,
  getStandardPrivacyPolicy,
  getPublishedPolicyById
};
