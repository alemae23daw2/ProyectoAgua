const linkItems = document.querySelectorAll(".link-item");

linkItems.forEach((linkItem, index) => {
    linkItem.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        linkItem.classList.add("active");

        const indicator = document.querySelector(".indicator");

        // Ajuste de posición para el indicador
        indicator.style.left = `${index * 75 + 37.5}px`; // Ancho del ítem es 75px
    });
});
