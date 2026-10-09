function sanitizeValue(value) {
  return String(value || '').trim();
}

function isValidEmail(email) {
  if (!email || email.length > 160 || email.includes(' ')) {
    return false;
  }

  const parts = email.split('@');
  if (parts.length !== 2) {
    return false;
  }

  const [localPart, domain] = parts;
  if (!localPart || !domain || domain.startsWith('.') || domain.endsWith('.')) {
    return false;
  }

  return domain.includes('.');
}

function validateContactPayload(payload) {
  const errors = [];

  const name = sanitizeValue(payload.name);
  const email = sanitizeValue(payload.email);
  const projectType = sanitizeValue(payload.projectType);
  const description = sanitizeValue(payload.description);

  if (!name || name.length < 2 || name.length > 120) {
    errors.push('El nombre debe tener entre 2 y 120 caracteres.');
  }

  if (!isValidEmail(email)) {
    errors.push('Ingresa un correo electrónico válido.');
  }

  const allowedProjectTypes = new Set([
    'pagina-web',
    'chatbot',
    'automatizacion-make',
    'app-medida',
    'integracion-api',
    'mantenimiento',
    'otro'
  ]);

  if (!allowedProjectTypes.has(projectType)) {
    errors.push('Selecciona un tipo de proyecto válido.');
  }

  if (!description || description.length < 20 || description.length > 2000) {
    errors.push('La descripción debe tener entre 20 y 2000 caracteres.');
  }

  return {
    isValid: errors.length === 0,
    errors,
    value: { name, email, projectType, description }
  };
}

module.exports = { validateContactPayload };
