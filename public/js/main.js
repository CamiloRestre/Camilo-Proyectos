const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

const requestedSection = new URLSearchParams(window.location.search).get('seccion');
let storedSection = null;
try {
  storedSection = sessionStorage.getItem('camilo-scroll-section');
} catch (_error) {
  storedSection = null;
}
const pendingSection = requestedSection || storedSection;
if (pendingSection && window.location.pathname === '/') {
  const section = document.getElementById(pendingSection);
  try {
    sessionStorage.removeItem('camilo-scroll-section');
  } catch (_error) {
  }

  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', '/');
  }
}

document.querySelectorAll('a[data-section]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const section = document.getElementById(link.dataset.section);

    if (!section) {
      event.preventDefault();
      window.location.assign(link.href);
      return;
    }

    event.preventDefault();
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', '/');

    if (nav && menuToggle) {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });
}

document.querySelectorAll('.tilt-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const bounds = card.getBoundingClientRect();
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8;
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});

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

const printPolicyButton = document.getElementById('print-policy-button');
if (printPolicyButton) {
  printPolicyButton.addEventListener('click', () => {
    window.print();
  });
}
