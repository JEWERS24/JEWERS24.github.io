let isZoomed = false;

function toggleZoom(event) {
    const card = event.currentTarget; // Obtiene el contenedor clicado
    const frontImage = card.querySelector('.front');
    const backImage = card.querySelector('.back');
    const ingredients = card.querySelector('.ingredients'); // Selecciona los ingredientes dentro del contenedor clicado

    if (!isZoomed) {
        frontImage.style.animation = 'moveDown 0.8s forwards';
        backImage.style.animation = 'moveUp 0.8s forwards';
        backImage.style.opacity = '1';
        frontImage.style.opacity = '0';

        // Oculta los ingredientes
        ingredients.style.display = 'none';
    } else {
        // Muestra la imagen de adelante y oculta la de atrás
        backImage.style.animation = 'moveDown 0.8s forwards';
        frontImage.style.animation = 'moveUp 0.8s forwards, zoomOut 0.8s forwards';
        frontImage.style.opacity = '1';
        backImage.style.opacity = '0';

        // Muestra los ingredientes
        ingredients.style.display = 'block';
    }

    isZoomed = !isZoomed; // Cambia el estado de zoom
}