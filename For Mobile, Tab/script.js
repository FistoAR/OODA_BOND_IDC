document.querySelectorAll('.page img').forEach((img) => {
    img.addEventListener('contextmenu', (e) => e.preventDefault());
    let pressTimer;
    img.addEventListener('touchstart', (e) => {
        pressTimer = setTimeout(() => {
            e.preventDefault();
        }, 500);
    });

    img.addEventListener('touchend', () => {
        clearTimeout(pressTimer);
    });

    img.addEventListener('touchmove', () => {
        clearTimeout(pressTimer);
    });
});