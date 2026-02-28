// 1. Resaltar enlace activo en el menú
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop();

    links.forEach(link => {
        // Si el href coincide con la página actual, añade la clase active
        if (link.getAttribute('href') === currentPath || 
            (currentPath === "" && link.getAttribute('href') === "index.html")) {
            link.classList.add('active');
        }
    });
});

// 2. Manejo del formulario de contacto
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue
        
        const nombre = document.getElementById('nombre').value;
        
        alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente. Te contactaré pronto.`);
        
        contactForm.reset(); // Limpia el formulario
    });
}