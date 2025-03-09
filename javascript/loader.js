
// Loader

window.addEventListener("load", function () {
    let loader = document.getElementById("loader");

    // Retrasa la desaparición del loader por 2 segundos (2000 ms)
    setTimeout(() => {
      loader.style.opacity = "0"; // Desvanecer
        setTimeout(() => {
        loader.style.display = "none"; // Ocultar después de la animación
      }, 500); // Tiempo extra para la transición
    }, 1200); // Retraso inicial de 2 segundos
});
