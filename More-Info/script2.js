document.getElementById('show-species').addEventListener('click', function() {
    const speciesList = document.getElementById('species');
    if (speciesList.style.display === 'none') {
        speciesList.style.display = 'block';
        this.textContent = 'Ocultar Espécies';
    } else {
        speciesList.style.display = 'none';
        this.textContent = 'Mostrar Espécies';
    }
});