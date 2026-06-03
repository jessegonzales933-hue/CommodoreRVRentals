const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const bookingForm = document.getElementById('bookingForm');
bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  const subject = encodeURIComponent('New RV Rental Request - Commodore RV Rentals');
  const body = encodeURIComponent(`
Name: ${data.get('name')}
Email: ${data.get('email')}
Phone: ${data.get('phone')}
Preferred RV: ${data.get('rv')}
Start Date: ${data.get('start')}
End Date: ${data.get('end')}
Destination: ${data.get('destination')}
Guests: ${data.get('guests')}

Message:
${data.get('message')}
  `.trim());

  window.location.href = `mailto:agunz3269@gmail.com?subject=${subject}&body=${body}`;
});
