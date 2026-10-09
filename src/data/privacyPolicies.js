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

function getPublishedPolicies() {
  return privacyPolicies.filter((policy) => policy.published);
}

function getPublishedPolicyById(id) {
  return getPublishedPolicies().find((policy) => policy.id === id);
}

module.exports = {
  privacyPolicies,
  getPublishedPolicies,
  getPublishedPolicyById
};
