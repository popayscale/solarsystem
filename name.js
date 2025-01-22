document.addEventListener('DOMContentLoaded', function() {
    const nomsSection = document.getElementById('noms');
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const planetName = item.getAttribute('data-name');
            nomsSection.textContent = planetName;
        });

        item.addEventListener('mouseleave', function() {
            nomsSection.textContent = '';
        });
    });
});

let cursor = 0;
const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
  cursor = (e.keyCode == KONAMI_CODE[cursor]) ? cursor + 1 : 0;
  if (cursor == KONAMI_CODE.length) {
    // Remplacez  par l'URL de votre choix
    window.open('https://soundcloud.com/eddy-dubois-269147733', '_blank');
    // Réinitialiser le curseur
    cursor = 0;
  }
});
