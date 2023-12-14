document.addEventListener('DOMContentLoaded', function () {
    const movingImages = document.querySelectorAll('.moving-image');

    movingImages.forEach((image) => {
        const animation = image.dataset.animation;
        const delay = image.dataset.delay;

        image.style.animation = `${animation} 2s linear ${delay}s infinite`;
    });
});
