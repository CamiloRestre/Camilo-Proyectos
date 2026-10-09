const express = require('express');

const adminRouter = express.Router();

adminRouter.get('/', (_req, res) => {
  res.status(501).json({
    error: 'Panel de administración pendiente de implementación.',
    message:
      'La arquitectura base fue preparada para autenticación, gestión de negocios y versionado de políticas.'
  });
});

module.exports = { adminRouter };
