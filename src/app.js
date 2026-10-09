const path = require('path');
const express = require('express');
const helmet = require('helmet');

const { siteConfig } = require('./config/site');
const { getPublishedPolicies, getPublishedPolicyById } = require('./data/privacyPolicies');
const { validateContactPayload } = require('./utils/validation');
const { adminRouter } = require('./modules/admin/adminRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.disable('x-powered-by');

app.use(helmet());
app.use(express.urlencoded({ extended: false, limit: '32kb' }));
app.use(express.json({ limit: '32kb' }));
app.use(express.static(path.join(__dirname, '..', 'public'), { maxAge: '1d' }));

app.use((req, res, next) => {
  res.locals.siteConfig = siteConfig;
  res.locals.currentUrl = `${siteConfig.site.baseUrl}${req.path}`;
  res.locals.path = req.path;
  next();
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'camilo-proyectos-web' });
});

app.get('/robots.txt', (_req, res) => {
  res.type('text/plain').send(`User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /panel\n`);
});

app.get('/sitemap.xml', (_req, res) => {
  const pages = ['/', '/servicios', '/privacidad'];
  const policyPages = getPublishedPolicies().map((policy) => `/privacidad/${policy.id}`);
  const urls = [...pages, ...policyPages]
    .map((url) => `<url><loc>${siteConfig.site.baseUrl}${url}</loc></url>`)
    .join('');

  res
    .type('application/xml')
    .send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
});

app.get('/', (_req, res) => {
  const services = [
    {
      icon: '🌐',
      slug: 'pagina-web',
      title: 'Desarrollo de páginas web',
      description: 'Sitios web profesionales, accesibles y optimizados para rendimiento.',
      benefit: 'Mejora tu presencia digital y facilita la conversión de clientes.'
    },
    {
      icon: '🤖',
      slug: 'chatbot',
      title: 'Desarrollo de chatbots para atención y pedidos',
      description: 'Asistentes conversacionales orientados a soporte y ventas.',
      benefit: 'Reduce tiempos de respuesta y mejora la experiencia del cliente.'
    },
    {
      icon: '⚙️',
      slug: 'automatizacion-make',
      title: 'Automatizaciones con Make',
      description: 'Flujos automáticos entre herramientas para tareas repetitivas.',
      benefit: 'Ahorra tiempo operativo y disminuye errores manuales.'
    },
    {
      icon: '🧩',
      slug: 'app-medida',
      title: 'Desarrollo de aplicaciones a medida',
      description: 'Soluciones adaptadas a procesos y necesidades específicas.',
      benefit: 'Digitaliza operaciones clave con software diseñado para tu negocio.'
    },
    {
      icon: '🔌',
      slug: 'integracion-api',
      title: 'Integración de APIs y servicios externos',
      description: 'Conexión segura entre plataformas y sistemas de terceros.',
      benefit: 'Unifica tu operación y mejora la calidad de tus datos.'
    },
    {
      icon: '🛠️',
      slug: 'mantenimiento',
      title: 'Optimización y mantenimiento de soluciones digitales',
      description: 'Mejoras continuas, correcciones y soporte técnico planificado.',
      benefit: 'Mantén tu solución estable, actualizada y segura en el tiempo.'
    }
  ];

  const processSteps = [
    'Conversación inicial y comprensión de la necesidad.',
    'Definición del alcance y propuesta.',
    'Diseño y desarrollo.',
    'Pruebas y revisión.',
    'Entrega y soporte acordado.'
  ];

  res.render('pages/home', {
    seo: {
      title: siteConfig.site.title,
      description: siteConfig.site.description,
      canonical: `${siteConfig.site.baseUrl}/`
    },
    services,
    processSteps,
    projects: [],
    testimonials: []
  });
});

app.get('/servicios', (_req, res) => {
  res.redirect('/#servicios');
});

app.post('/contacto', (req, res) => {
  const validation = validateContactPayload(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      ok: false,
      errors: validation.errors
    });
  }

  if (!siteConfig.contact.provider || !siteConfig.contact.providerApiKey) {
    return res.status(503).json({
      ok: false,
      message:
        'El envío de mensajes aún no está configurado. Define CONTACT_PROVIDER y CONTACT_PROVIDER_API_KEY para habilitarlo.'
    });
  }

  return res.status(202).json({
    ok: true,
    message: 'Solicitud recibida. Se enviará al canal configurado.'
  });
});

app.get('/privacidad', (_req, res) => {
  const policies = getPublishedPolicies();

  res.render('pages/privacy-center', {
    seo: {
      title: 'Privacidad y protección de datos | Camilo Proyectos',
      description:
        'Centro de privacidad con la política de Camilo Proyectos y políticas publicadas por negocio.',
      canonical: `${siteConfig.site.baseUrl}/privacidad`
    },
    policies
  });
});

app.get('/privacy', (_req, res) => {
  res.redirect('/privacidad');
});

app.get('/privacidad/:id', (req, res, next) => {
  const policy = getPublishedPolicyById(req.params.id);

  if (!policy) {
    const error = new Error('No existe una política publicada para este negocio.');
    error.status = 404;
    return next(error);
  }

  return res.render('pages/privacy-policy', {
    seo: {
      title: `Política de privacidad | ${policy.businessName}`,
      description: `Política de privacidad vigente para ${policy.businessName}.`,
      canonical: `${siteConfig.site.baseUrl}/privacidad/${policy.id}`
    },
    policy
  });
});

app.use('/admin', adminRouter);

app.use((req, _res, next) => {
  const error = new Error('Página no encontrada.');
  error.status = 404;
  next(error);
});

app.use((error, req, res, _next) => {
  const status = Number(error.status) || 500;
  const message = status === 500 ? 'Ocurrió un error inesperado.' : error.message;

  if (req.accepts('json') && !req.accepts('html')) {
    return res.status(status).json({
      ok: false,
      error: message
    });
  }

  return res.status(status).render('pages/error', {
    seo: {
      title: `${status} | Camilo Proyectos`,
      description: message,
      canonical: `${siteConfig.site.baseUrl}${req.path}`
    },
    status,
    message
  });
});

module.exports = { app };
