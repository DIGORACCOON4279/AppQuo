
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const previousCard = document.getElementById('previousCard');
    const nextCard = document.getElementById('nextCard');
    const cardSlider = document.querySelector('.cardSlider');
    const cards = document.querySelectorAll('.cardSlider .card');

    if (!cardSlider || cards.length === 0) {
        console.error("No se encontró el contenedor cardSlider o las tarjetas.");
        return;
    }

    const totalSlides = cards.length;
    let autoSlideInterval;

    function updateSlider() {
        const cardWidth = cards[0].offsetWidth; // Obtener el ancho de una tarjeta
        const offset = -(currentIndex * (cardWidth + 80)); // 80px es el gap definido en tu CSS

        cardSlider.style.transform = `translateX(${offset}px)`;
    }

    function moveSlide(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1; // Si está en la primera, va a la última
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0; // Si está en la última, vuelve a la primera
        }

        updateSlider();
        resetAutoSlide();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => moveSlide(1), 5000); // Mueve cada 5 segundos
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide(); // Reinicia el auto-slide después de una interacción
    }

    previousCard.addEventListener('click', () => moveSlide(-1));
    nextCard.addEventListener('click', () => moveSlide(1));

    // Iniciar el carrusel automático al cargar
    updateSlider();
    startAutoSlide();
});
