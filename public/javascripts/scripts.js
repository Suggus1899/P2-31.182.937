document.addEventListener('DOMContentLoaded', () => {
    // Función reutilizable para agregar efectos al pasar el mouse
    function addHoverEffect(element) {
        element.addEventListener('mouseover', () => {
            requestAnimationFrame(() => {
                element.style.transform = 'scale(1.1)';
                element.style.transition = 'transform 0.3s ease-in-out';
                element.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)'; // Efecto de sombra
            });
        });

        element.addEventListener('mouseout', () => {
            requestAnimationFrame(() => {
                element.style.transform = 'scale(1)';
                element.style.boxShadow = 'none'; // Quitar sombra
            });
        });
    }

    // Agregar un efecto de transición al fondo
    const body = document.body;
    body.style.transition = 'background-image 0.5s ease-in-out';

    // Aplicar el efecto al encabezado
    const header = document.querySelector('h1');
    addHoverEffect(header);

    // Aplicar el efecto a todos los párrafos
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(addHoverEffect);
});