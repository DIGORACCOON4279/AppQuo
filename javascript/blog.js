
document.addEventListener("DOMContentLoaded", () => {
    const blogSlider = document.querySelector(".blogSlider");
    const blogBlock = document.querySelector(".blogBlock");
    const leftArrow = document.getElementById("leftDirection");
    const rightArrow = document.getElementById("rightDirection");
    let currentIndex = 0;

    const updateSlider = () => {
        const cardWidth = blogBlock.children[0].offsetWidth + 30; // Incluye gap de 30px
        const visibleCards = Math.floor(blogSlider.offsetWidth / cardWidth); // Tarjetas visibles en pantalla
        const maxIndex = blogBlock.children.length - visibleCards;

        // Permitir desplazamiento circular
        if (currentIndex > maxIndex) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = maxIndex;
        }

        blogBlock.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        blogBlock.style.transition = "transform 0.3s ease-in-out";
    };

    rightArrow.addEventListener("click", () => {
        currentIndex++;
        updateSlider();
    });

    leftArrow.addEventListener("click", () => {
        currentIndex--;
        updateSlider();
    });

    window.addEventListener("resize", updateSlider); // Ajusta el slider al cambiar el tamaño de la pantalla
    updateSlider();

    // Movimiento automático cada 5 segundos
    setInterval(() => {
        currentIndex++;
        updateSlider();
    }, 5000);
});
