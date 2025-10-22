let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const feedbackElement = document.getElementById("feedback");
const attemptsElement = document.getElementById("attempts");
const resetButton = document.getElementById("resetButton");
const guessInput = document.getElementById("guess");

function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedbackElement.textContent = "Por favor, insira um número entre 1 e 100!";
        feedbackElement.style.color = "#dc3545"; // cor de erro
        return;
    }

    attempts++;
    attemptsElement.textContent = `Tentativas: ${attempts}`;

    if (userGuess === randomNumber) {
        feedbackElement.textContent = "Parabéns! Você acertou o número!";
        feedbackElement.style.color = "#28a745"; // cor de sucesso
        feedbackElement.classList.add("correct");
        resetButton.style.display = "inline-block"; // Mostrar botão de reset
        playSound("correct");
    } else if (userGuess < randomNumber) {
        feedbackElement.textContent = "O número é maior! Tente novamente.";
        feedbackElement.style.color = "#ffc107"; // cor de aviso
        feedbackElement.classList.add("wrong");
        playSound("wrong");
    } else {
        feedbackElement.textContent = "O número é menor! Tente novamente.";
        feedbackElement.style.color = "#ffc107"; // cor de aviso
        feedbackElement.classList.add("wrong");
        playSound("wrong");
    }

    guessInput.value = ""; // Limpa o campo de entrada
    guessInput.focus();
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsElement.textContent = `Tentativas: ${attempts}`;
    feedbackElement.textContent = "";
    feedbackElement.classList.remove("correct", "wrong");
    resetButton.style.display = "none";
    guessInput.value = "";
    guessInput.focus();
}

function playSound(type) {
    const audio = new Audio();
    if (type === "correct") {
        audio.src = "https://www.soundjay.com/button/beep-07.wav"; // som de sucesso
    } else if (type === "wrong") {
        audio.src = "https://www.soundjay.com/button/beep-08b.wav"; // som de erro
    }
    audio.play();
}
