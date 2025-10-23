/*
 * Archivo: js/main.js
 * JavaScript personalizado para el sitio de Elecciones FACUFI 2025
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Sitio de Elecciones FACUFI 2025 cargado.');
    // --- Efecto "Active" en la Navegación al hacer Scroll ---
    // Esto es un poco más avanzado, pero le da un gran toque profesional.
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) { // 100px de offset
                currentSection = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });
});
