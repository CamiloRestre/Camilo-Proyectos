const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });
}

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (form && formStatus) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    formStatus.textContent = 'Enviando...';

    const body = {
      name: form.name.value,
      email: form.email.value,
      projectType: form.projectType.value,
      description: form.description.value
    };

    try {
      const response = await fetch('/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (!response.ok) {
        formStatus.textContent = data.message || (data.errors && data.errors[0]) || 'No fue posible enviar la solicitud.';
        return;
      }

      formStatus.textContent = data.message || 'Solicitud enviada correctamente.';
      form.reset();
    } catch (_error) {
      formStatus.textContent = 'Error de red. Intenta nuevamente.';
    }
  });
}
