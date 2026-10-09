const { app } = require('./app');

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`Camilo Proyectos listening on http://${HOST}:${PORT}`);
});
