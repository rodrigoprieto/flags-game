const countries = [
    { name: 'Afeganistão', flag: 'https://flagcdn.com/w320/af.png' },
    { name: 'Albânia', flag: 'https://flagcdn.com/w320/al.png' },
    { name: 'Argélia', flag: 'https://flagcdn.com/w320/dz.png' },
    { name: 'Andorra', flag: 'https://flagcdn.com/w320/ad.png' },
    { name: 'Angola', flag: 'https://flagcdn.com/w320/ao.png' },
    { name: 'Antígua e Barbuda', flag: 'https://flagcdn.com/w320/ag.png' },
    { name: 'Argentina', flag: 'https://flagcdn.com/w320/ar.png' },
    { name: 'Armênia', flag: 'https://flagcdn.com/w320/am.png' },
    { name: 'Austrália', flag: 'https://flagcdn.com/w320/au.png' },
    { name: 'Áustria', flag: 'https://flagcdn.com/w320/at.png' },
    { name: 'Azerbaijão', flag: 'https://flagcdn.com/w320/az.png' },
    { name: 'Bahamas', flag: 'https://flagcdn.com/w320/bs.png' },
    { name: 'Bahrein', flag: 'https://flagcdn.com/w320/bh.png' },
    { name: 'Bangladesh', flag: 'https://flagcdn.com/w320/bd.png' },
    { name: 'Barbados', flag: 'https://flagcdn.com/w320/bb.png' },
    // ... (all other countries)
    { name: 'Iêmen', flag: 'https://flagcdn.com/w320/ye.png' },
    { name: 'Zâmbia', flag: 'https://flagcdn.com/w320/zm.png' },
    { name: 'Zimbábue', flag: 'https://flagcdn.com/w320/zw.png' }
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
    const endScreen = document.getElementById('end-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const endMessage = document.getElementById('end-message');
    const finalScore = document.getElementById('final-score');
    
    const randomMessage = endMessages[Math.floor(Math.random() * endMessages.length)];
    endMessage.textContent = randomMessage;
    finalScore.textContent = `Sua pontuação final é: ${score}`;
    
    quizScreen.style.display = 'none';
    endScreen.style.display = 'block';
}

function restartGame() {
    currentQuestion = 0;
    score = 0;
    generateGameQuestions();
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'none';
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
document.getElementById('restart-btn').addEventListener('click', restartGame);
