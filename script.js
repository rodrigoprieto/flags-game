const countries = [
    { name: 'United States', flag: 'https://flagcdn.com/w320/us.png' },
    { name: 'Canada', flag: 'https://flagcdn.com/w320/ca.png' },
    { name: 'United Kingdom', flag: 'https://flagcdn.com/w320/gb.png' },
    { name: 'France', flag: 'https://flagcdn.com/w320/fr.png' },
    { name: 'Germany', flag: 'https://flagcdn.com/w320/de.png' },
    { name: 'Japan', flag: 'https://flagcdn.com/w320/jp.png' },
    { name: 'Australia', flag: 'https://flagcdn.com/w320/au.png' },
    { name: 'Brazil', flag: 'https://flagcdn.com/w320/br.png' },
    { name: 'India', flag: 'https://flagcdn.com/w320/in.png' },
    { name: 'South Africa', flag: 'https://flagcdn.com/w320/za.png' },
    // Add more countries as needed
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

function endGame() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = `
        <h1>Game Over</h1>
        <p>Your final score is: ${score}</p>
        <button onclick="restartGame()">Play Again</button>
    `;
}

function restartGame() {
    currentQuestion = 0;
    score = 0;
    generateGameQuestions();
    displayQuestion();
    document.getElementById('score').textContent = 'Score: 0';
    document.getElementById('result').textContent = '';
}

document.getElementById('verify-btn').addEventListener('click', verifyAnswer);

generateGameQuestions();
displayQuestion();
