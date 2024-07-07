const countries = [
    { name: 'Brasil', flag: 'https://flagcdn.com/w320/br.png' },
    { name: 'Estados Unidos', flag: 'https://flagcdn.com/w320/us.png' },
    { name: 'Canadá', flag: 'https://flagcdn.com/w320/ca.png' },
    { name: 'Reino Unido', flag: 'https://flagcdn.com/w320/gb.png' },
    { name: 'França', flag: 'https://flagcdn.com/w320/fr.png' },
    { name: 'Alemanha', flag: 'https://flagcdn.com/w320/de.png' },
    { name: 'Japão', flag: 'https://flagcdn.com/w320/jp.png' },
    { name: 'Austrália', flag: 'https://flagcdn.com/w320/au.png' },
    { name: 'Índia', flag: 'https://flagcdn.com/w320/in.png' },
    { name: 'África do Sul', flag: 'https://flagcdn.com/w320/za.png' },
    { name: 'China', flag: 'https://flagcdn.com/w320/cn.png' },
    { name: 'Rússia', flag: 'https://flagcdn.com/w320/ru.png' },
    { name: 'Itália', flag: 'https://flagcdn.com/w320/it.png' },
    { name: 'Espanha', flag: 'https://flagcdn.com/w320/es.png' },
    { name: 'México', flag: 'https://flagcdn.com/w320/mx.png' },
    { name: 'Argentina', flag: 'https://flagcdn.com/w320/ar.png' },
    { name: 'Holanda', flag: 'https://flagcdn.com/w320/nl.png' },
    { name: 'Suécia', flag: 'https://flagcdn.com/w320/se.png' },
    { name: 'Noruega', flag: 'https://flagcdn.com/w320/no.png' },
    { name: 'Dinamarca', flag: 'https://flagcdn.com/w320/dk.png' }
];

let currentQuestion = 0;
let score = 0;
let gameQuestions = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateGameQuestions() {
    gameQuestions = [...countries];
    shuffleArray(gameQuestions);
    gameQuestions = gameQuestions.slice(0, 20);
}

function displayQuestion() {
    const flagImage = document.getElementById('flag-image');
    const optionsContainer = document.getElementById('options-container');
    const currentCountry = gameQuestions[currentQuestion];

    flagImage.src = currentCountry.flag;
    optionsContainer.innerHTML = '';

    let options = [currentCountry.name];
    while (options.length < 5) {
        const randomCountry = countries[Math.floor(Math.random() * countries.length)].name;
        if (!options.includes(randomCountry)) {
            options.push(randomCountry);
        }
    }
    shuffleArray(options);

    options.forEach((option, index) => {
        const radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'country';
        radioBtn.value = option;
        radioBtn.id = `option${index}`;

        const label = document.createElement('label');
        label.htmlFor = `option${index}`;
        label.textContent = option;

        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.appendChild(radioBtn);
        optionDiv.appendChild(label);

        optionsContainer.appendChild(optionDiv);
    });
}

function verifyAnswer() {
    const selectedOption = document.querySelector('input[name="country"]:checked');
    if (!selectedOption) return;

    const userAnswer = selectedOption.value;
    const correctAnswer = gameQuestions[currentQuestion].name;
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');

    if (userAnswer === correctAnswer) {
        score++;
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
    } else {
        score--;
        resultElement.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        resultElement.style.color = 'red';
    }

    scoreElement.textContent = `Score: ${score}`;

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < gameQuestions.length) {
            displayQuestion();
            resultElement.textContent = '';
        } else {
            endGame();
        }
    }, 2000);
}

const endMessages = [
    "Parabéns! Você é um expert em bandeiras!",
    "Ótimo trabalho! Que tal tentar superar sua pontuação?",
    "Impressionante! Você tem um ótimo conhecimento de bandeiras!",
    "Excelente! Vamos jogar novamente e aprender ainda mais?",
    "Muito bem! Sua jornada pelo mundo das bandeiras está apenas começando!"
];

function endGame() {
    const gameContainer = document.getElementById('game-container');
    const randomMessage = endMessages[Math.floor(Math.random() * endMessages.length)];
    gameContainer.innerHTML = `
        <h1>${randomMessage}</h1>
        <p>Sua pontuação final é: ${score}</p>
        <button onclick="restartGame()">Jogar Novamente</button>
    `;
}

function restartGame() {
    currentQuestion = 0;
    score = 0;
    generateGameQuestions();
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    displayQuestion();
    document.getElementById('score').textContent = 'Pontuação: 0';
    document.getElementById('result').textContent = '';
}

function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    generateGameQuestions();
    displayQuestion();
}

document.getElementById('verify-btn').addEventListener('click', verifyAnswer);
document.getElementById('start-btn').addEventListener('click', startGame);
