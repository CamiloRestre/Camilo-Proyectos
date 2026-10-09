const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');

const { app } = require('../src/app');

test('GET / returns home page', async () => {
  const response = await request(app).get('/');
  assert.equal(response.status, 200);
  assert.match(response.text, /Transformo ideas en soluciones digitales/);
});

test('GET /health returns service status', async () => {
  const response = await request(app).get('/health');
  assert.equal(response.status, 200);
  assert.deepEqual(response.body.status, 'ok');
});

test('GET /privacidad/camilo-proyectos returns published policy', async () => {
  const response = await request(app).get('/privacidad/camilo-proyectos');
  assert.equal(response.status, 200);
  assert.match(response.text, /Política de privacidad/);
});

test('GET /2021/05/22/politicas/ returns the standard application policy', async () => {
  const response = await request(app).get('/2021/05/22/politicas/');
  assert.equal(response.status, 200);
  assert.match(response.text, /Política estándar de la aplicación/);
  assert.match(response.text, /Política de Tratamiento de Datos Personales/);
});

test('GET /privacidad/negocio-inexistente returns 404', async () => {
  const response = await request(app).get('/privacidad/negocio-inexistente');
  assert.equal(response.status, 404);
  assert.match(response.text, /No existe una política publicada/);
});

test('POST /contacto validates payload', async () => {
  const response = await request(app).post('/contacto').send({});
  assert.equal(response.status, 400);
  assert.equal(response.body.ok, false);
  assert.ok(Array.isArray(response.body.errors));
});

test('POST /contacto returns setup message when provider is missing', async () => {
  const response = await request(app).post('/contacto').send({
    name: 'Camilo Test',
    email: 'test@example.com',
    projectType: 'pagina-web',
    description: 'Necesito una web corporativa con formulario y centro de privacidad.'
  });

  assert.equal(response.status, 503);
  assert.equal(response.body.ok, false);
  assert.match(response.body.message, /CONTACT_PROVIDER/);
});
