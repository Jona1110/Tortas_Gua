document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Gracias, ${name}. Tu mensaje ha sido enviado.`);
      document.getElementById('contactForm').reset();
    } else {
      alert('Por favor, completa todos los campos.');
    }
    // Detectar si el usuario está en un dispositivo móvil
function esMovil() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Redirigir a la versión de escritorio si es un dispositivo móvil
if (esMovil()) {
    window.location.href = "https://tusitio.com?modo=escritorio"; // Cambia la URL por la de tu sitio
}
  });
