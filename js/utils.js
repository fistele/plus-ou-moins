// Fonction pour générer un nombre aléatoire entre min et max (inclus)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour afficher un message dans un élément HTML
function displayMessage(elementId, message, isError = false) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.style.color = isError ? 'red' : 'green';
    }
}

// Fonction pour vérifier si une valeur est un nombre valide dans une plage spécifiée
function isValidNumber(value, min, max) {
    const number = Number(value);
    return !isNaN(number) && number >= min && number <= max;
}
