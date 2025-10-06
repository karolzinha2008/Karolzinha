let secretNumber;
let attempts = 0;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;  // Número entre 1 e 100
    attempts = 0;
    document.getElementById("feedback").innerText = '';
    document.getElementById("attempts").innerText = 'Tentativas: ' + attempts;
    document.getElementById("resetButton").style.display = 'none';
}

function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);
    const feedback = document.getElementById("feedback");
    const attemptsDisplay = document.getElementById("attempts");

    if (!guess || guess < 1 || guess > 100) {
        feedback.innerText = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    attempts++;
    attemptsDisplay.innerText = 'Tentativas: ' + attempts;

    if (guess === secretNumber) {
        feedback.innerText = "Parabéns! Você acertou o número!";
        document.getElementById("resetButton").style.display = 'inline-block';
    } else if (guess < secretNumber) {
        feedback.innerText = "Muito baixo! Tente novamente.";
    } else {
        feedback.innerText = "Muito alto! Tente novamente.";
    }
}

function resetGame() {
    startGame();
    document.getElementById("guess").value = '';
}

startGame();  // Inicia o jogo ao carregar a página
