# Camilo Proyectos

Sitio web profesional de **Camilo Proyectos** (Node.js + Express + EJS), con enfoque en servicios freelance, formulario de contacto validado y sistema público de políticas de privacidad por negocio.

## Arquitectura actual

- `src/app.js`: configuración Express, seguridad, rutas públicas, errores.
- `src/server.js`: arranque del servidor (`HOST`/`PORT`).
- `src/config/site.js`: identidad de marca, dominio base y configuración de contacto centralizada.
- `src/data/privacyPolicies.js`: política estándar reutilizable para aplicaciones y política específica de Camilo Proyectos.
- `src/modules/admin/adminRouter.js`: base para panel privado (pendiente implementación completa).
- `src/views/`: vistas EJS (home, centro de privacidad, política individual, errores).
- `public/`: CSS, JS y favicon.
- `tests/app.test.js`: pruebas de rutas públicas y validaciones de contacto.
- `db/migrations/001_init.sql`: esquema inicial PostgreSQL para futura persistencia y versionado.

## Requisitos

- Node.js 20+

## Instalación

```bash
npm install
```

## Variables de entorno

Copia `.env.example` y ajusta valores:

```bash
cp .env.example .env
```

Variables:

- `PORT`: puerto de ejecución (Render lo inyecta automáticamente).
- `HOST`: host de escucha (`0.0.0.0` recomendado en Render).
- `BASE_URL`: URL base pública para canónicas, sitemap y metadatos.
- `CONTACT_PROVIDER`: nombre del proveedor de email (ej. resend, sendgrid, etc.).
- `CONTACT_PROVIDER_API_KEY`: credencial del proveedor de email.
- `CONTACT_RECEIVER_EMAIL`: correo de destino para notificaciones.

> Si `CONTACT_PROVIDER` y `CONTACT_PROVIDER_API_KEY` no están configurados, el endpoint `/contacto` responde error controlado indicando cómo habilitarlo. No hay envío simulado.

## Ejecución

```bash
npm start
```

Desarrollo con recarga por cambios:

```bash
npm run dev
```

## Pruebas

```bash
npm test
```

Cobertura principal:

- `/`
- `/health`
- `/privacidad/:id`
- 404 de políticas no publicadas
- validación backend de `/contacto`

## Rutas relevantes

- `GET /`: página principal.
- `POST /contacto`: recepción validada del formulario.
- `GET /privacidad`: centro de privacidad.
- `GET /privacidad/:id`: política por negocio publicada.
- `GET /health`: estado del servicio.
- `GET /robots.txt`, `GET /sitemap.xml`.

## Políticas de privacidad

La política estándar para las aplicaciones está publicada en una ruta estable y fechada:

- `/2021/05/22/politicas/`

La web de Camilo Proyectos mantiene una política independiente:

- `/privacidad/camilo-proyectos`

Las aplicaciones deben enlazar a la política estándar. La política de Camilo solo describe el tratamiento de datos de este sitio y no se reutiliza como política de las aplicaciones.

## Panel de administración (base preparada)

Se dejó estructura inicial para un panel privado (`src/modules/admin`) y un esquema SQL en `db/migrations/001_init.sql` con tablas para:

- negocios,
- políticas versionadas,
- usuarios admin,
- auditoría administrativa.

Implementación pendiente: autenticación segura, sesiones, editor y publicación/despublicación.

## Despliegue en Render

Este proyecto debe desplegarse en Render como **Web Service**, no como Static Site.
El servidor Express renderiza las vistas EJS, procesa el formulario de contacto y
expone el endpoint `/health`.

1. Conecta el repositorio en Render como Web Service.
2. Build command: `npm install`.
3. Start command: `npm start`.
4. Configura variables de entorno del archivo `.env.example`.
5. Verifica `GET /health` tras desplegar.

### Dominio y HTTPS

- Cuando compres dominio, actualiza `BASE_URL` en Render.
- Configura dominio personalizado desde Render Dashboard.
- Render gestiona HTTPS con certificados automáticos para dominios conectados.

## Base de datos PostgreSQL (cuando se active persistencia)

1. Crear instancia PostgreSQL en Render.
2. Guardar `DATABASE_URL` en variables de entorno.
3. Ejecutar migraciones SQL (iniciando por `db/migrations/001_init.sql`) desde tu pipeline o proceso operativo.
4. No usar almacenamiento local para datos de políticas en producción.

## Nota legal

La política de privacidad incluida es una base técnica editable. Antes de publicar en producción, revisar y completar el contenido legal conforme a los datos y flujos reales del servicio.
