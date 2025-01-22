document.addEventListener('DOMContentLoaded', function() {
    const iconModules = document.querySelectorAll('.icon-module');
    let inactivityTimeout;
    let animationInterval;

    function startInactivityTimer() {
        clearTimeout(inactivityTimeout);
        inactivityTimeout = setTimeout(startAnimation, 15000); // 15 seconds
    }

    function startAnimation() {
        iconModules.forEach(module => {
            module.style.display = 'block'; // Rendre les images visibles
            module.style.opacity = 1;
            moveIconRandomly(module); // Déplacer initialement
        });
        animationInterval = setInterval(() => {
            iconModules.forEach(module => {
                moveIconRandomly(module); // Déplacer périodiquement
            });
        }, 5000); // Move every 5 seconds
    }

    function moveIconRandomly(module) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const randomX = Math.random() * (windowWidth - module.offsetWidth);
        const randomY = Math.random() * (windowHeight - module.offsetHeight);
        module.style.left = `${randomX}px`;
        module.style.top = `${randomY}px`; // Utiliser top pour déplacer de manière aléatoire
    }

    function stopAnimation() {
        clearInterval(animationInterval);
        iconModules.forEach(module => {
            module.style.opacity = 0;
            module.style.display = 'none'; // Cacher les images à nouveau
        });
    }

    document.addEventListener('mousemove', stopAnimation);
    document.addEventListener('keypress', stopAnimation);
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseover', stopAnimation);
    });

    startInactivityTimer();
    document.addEventListener('mousemove', startInactivityTimer);
    document.addEventListener('keypress', startInactivityTimer);
});
