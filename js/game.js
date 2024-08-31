// Variables globales
const minNumber = 1;
const maxNumber = 100;
let targetNumber = getRandomNumber(minNumber, maxNumber);
let attempts = 0;

// Fonction pour démarrer un nouveau jeu
function startNewGame() {
    targetNumber = getRandomNumber(minNumber, maxNumber);
    attempts = 0;
    displayMessage('feedback', 'Devinez le nombre entre 1 et 100.');
    displayMessage('attempts', '');
    document.getElementById('guess').value = '';
    document.getElementById('restartGame').style.display = 'none'; // Masquer le bouton "Relancer le jeu"
}

// Fonction pour traiter la supposition de l'utilisateur
function handleGuess() {
    const guess = document.getElementById('guess').value;

    if (isValidNumber(guess, minNumber, maxNumber)) {
        attempts++;
        if (Number(guess) === targetNumber) {
            displayMessage('feedback', `Bravo ! Vous avez trouvé le bon nombre (${targetNumber}) en ${attempts} tentative(s) !`);
            displayMessage('attempts', '');
            document.getElementById('restartGame').style.display = 'inline'; // Afficher le bouton "Relancer le jeu"
        } else if (Number(guess) < targetNumber) {
            displayMessage('feedback', 'Le nombre est plus grand.');
        } else {
            displayMessage('feedback', 'Le nombre est plus petit.');
        }
        displayMessage('attempts', `Tentatives : ${attempts}`);
    } else {
        displayMessage('feedback', 'Veuillez entrer un nombre valide entre 1 et 100.', true);
    }
}

// Fonction pour relancer le jeu lorsque l'utilisateur clique sur le bouton "Relancer le jeu"
function restartGame() {
    startNewGame();
}

// Ajout des événements pour les boutons
document.getElementById('submitGuess').addEventListener('click', handleGuess);
document.getElementById('restartGame').addEventListener('click', restartGame);

// Démarrer un nouveau jeu au chargement de la page
startNewGame();
