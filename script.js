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
    { name: 'Bielorrússia', flag: 'https://flagcdn.com/w320/by.png' },
    { name: 'Bélgica', flag: 'https://flagcdn.com/w320/be.png' },
    { name: 'Belize', flag: 'https://flagcdn.com/w320/bz.png' },
    { name: 'Benin', flag: 'https://flagcdn.com/w320/bj.png' },
    { name: 'Butão', flag: 'https://flagcdn.com/w320/bt.png' },
    { name: 'Bolívia', flag: 'https://flagcdn.com/w320/bo.png' },
    { name: 'Bósnia e Herzegovina', flag: 'https://flagcdn.com/w320/ba.png' },
    { name: 'Botsuana', flag: 'https://flagcdn.com/w320/bw.png' },
    { name: 'Brasil', flag: 'https://flagcdn.com/w320/br.png' },
    { name: 'Brunei', flag: 'https://flagcdn.com/w320/bn.png' },
    { name: 'Bulgária', flag: 'https://flagcdn.com/w320/bg.png' },
    { name: 'Burkina Faso', flag: 'https://flagcdn.com/w320/bf.png' },
    { name: 'Burundi', flag: 'https://flagcdn.com/w320/bi.png' },
    { name: 'Camboja', flag: 'https://flagcdn.com/w320/kh.png' },
    { name: 'Camarões', flag: 'https://flagcdn.com/w320/cm.png' },
    { name: 'Canadá', flag: 'https://flagcdn.com/w320/ca.png' },
    { name: 'Cabo Verde', flag: 'https://flagcdn.com/w320/cv.png' },
    { name: 'República Centro-Africana', flag: 'https://flagcdn.com/w320/cf.png' },
    { name: 'Chade', flag: 'https://flagcdn.com/w320/td.png' },
    { name: 'Chile', flag: 'https://flagcdn.com/w320/cl.png' },
    { name: 'China', flag: 'https://flagcdn.com/w320/cn.png' },
    { name: 'Colômbia', flag: 'https://flagcdn.com/w320/co.png' },
    { name: 'Comores', flag: 'https://flagcdn.com/w320/km.png' },
    { name: 'Congo', flag: 'https://flagcdn.com/w320/cg.png' },
    { name: 'Costa Rica', flag: 'https://flagcdn.com/w320/cr.png' },
    { name: 'Croácia', flag: 'https://flagcdn.com/w320/hr.png' },
    { name: 'Cuba', flag: 'https://flagcdn.com/w320/cu.png' },
    { name: 'Chipre', flag: 'https://flagcdn.com/w320/cy.png' },
    { name: 'República Tcheca', flag: 'https://flagcdn.com/w320/cz.png' },
    { name: 'República Democrática do Congo', flag: 'https://flagcdn.com/w320/cd.png' },
    { name: 'Dinamarca', flag: 'https://flagcdn.com/w320/dk.png' },
    { name: 'Djibouti', flag: 'https://flagcdn.com/w320/dj.png' },
    { name: 'Dominica', flag: 'https://flagcdn.com/w320/dm.png' },
    { name: 'República Dominicana', flag: 'https://flagcdn.com/w320/do.png' },
    { name: 'Timor-Leste', flag: 'https://flagcdn.com/w320/tl.png' },
    { name: 'Equador', flag: 'https://flagcdn.com/w320/ec.png' },
    { name: 'Egito', flag: 'https://flagcdn.com/w320/eg.png' },
    { name: 'El Salvador', flag: 'https://flagcdn.com/w320/sv.png' },
    { name: 'Guiné Equatorial', flag: 'https://flagcdn.com/w320/gq.png' },
    { name: 'Eritreia', flag: 'https://flagcdn.com/w320/er.png' },
    { name: 'Estônia', flag: 'https://flagcdn.com/w320/ee.png' },
    { name: 'Etiópia', flag: 'https://flagcdn.com/w320/et.png' },
    { name: 'Fiji', flag: 'https://flagcdn.com/w320/fj.png' },
    { name: 'Finlândia', flag: 'https://flagcdn.com/w320/fi.png' },
    { name: 'França', flag: 'https://flagcdn.com/w320/fr.png' },
    { name: 'Gabão', flag: 'https://flagcdn.com/w320/ga.png' },
    { name: 'Gâmbia', flag: 'https://flagcdn.com/w320/gm.png' },
    { name: 'Geórgia', flag: 'https://flagcdn.com/w320/ge.png' },
    { name: 'Alemanha', flag: 'https://flagcdn.com/w320/de.png' },
    { name: 'Gana', flag: 'https://flagcdn.com/w320/gh.png' },
    { name: 'Grécia', flag: 'https://flagcdn.com/w320/gr.png' },
    { name: 'Granada', flag: 'https://flagcdn.com/w320/gd.png' },
    { name: 'Guatemala', flag: 'https://flagcdn.com/w320/gt.png' },
    { name: 'Guiné', flag: 'https://flagcdn.com/w320/gn.png' },
    { name: 'Guiné-Bissau', flag: 'https://flagcdn.com/w320/gw.png' },
    { name: 'Guiana', flag: 'https://flagcdn.com/w320/gy.png' },
    { name: 'Haiti', flag: 'https://flagcdn.com/w320/ht.png' },
    { name: 'Honduras', flag: 'https://flagcdn.com/w320/hn.png' },
    { name: 'Hungria', flag: 'https://flagcdn.com/w320/hu.png' },
    { name: 'Islândia', flag: 'https://flagcdn.com/w320/is.png' },
    { name: 'Índia', flag: 'https://flagcdn.com/w320/in.png' },
    { name: 'Indonésia', flag: 'https://flagcdn.com/w320/id.png' },
    { name: 'Irã', flag: 'https://flagcdn.com/w320/ir.png' },
    { name: 'Iraque', flag: 'https://flagcdn.com/w320/iq.png' },
    { name: 'Irlanda', flag: 'https://flagcdn.com/w320/ie.png' },
    { name: 'Israel', flag: 'https://flagcdn.com/w320/il.png' },
    { name: 'Itália', flag: 'https://flagcdn.com/w320/it.png' },
    { name: 'Costa do Marfim', flag: 'https://flagcdn.com/w320/ci.png' },
    { name: 'Jamaica', flag: 'https://flagcdn.com/w320/jm.png' },
    { name: 'Japão', flag: 'https://flagcdn.com/w320/jp.png' },
    { name: 'Jordânia', flag: 'https://flagcdn.com/w320/jo.png' },
    { name: 'Cazaquistão', flag: 'https://flagcdn.com/w320/kz.png' },
    { name: 'Quênia', flag: 'https://flagcdn.com/w320/ke.png' },
    { name: 'Kiribati', flag: 'https://flagcdn.com/w320/ki.png' },
    { name: 'Kuwait', flag: 'https://flagcdn.com/w320/kw.png' },
    { name: 'Quirguistão', flag: 'https://flagcdn.com/w320/kg.png' },
    { name: 'Laos', flag: 'https://flagcdn.com/w320/la.png' },
    { name: 'Letônia', flag: 'https://flagcdn.com/w320/lv.png' },
    { name: 'Líbano', flag: 'https://flagcdn.com/w320/lb.png' },
    { name: 'Lesoto', flag: 'https://flagcdn.com/w320/ls.png' },
    { name: 'Libéria', flag: 'https://flagcdn.com/w320/lr.png' },
    { name: 'Líbia', flag: 'https://flagcdn.com/w320/ly.png' },
    { name: 'Liechtenstein', flag: 'https://flagcdn.com/w320/li.png' },
    { name: 'Lituânia', flag: 'https://flagcdn.com/w320/lt.png' },
    { name: 'Luxemburgo', flag: 'https://flagcdn.com/w320/lu.png' },
    { name: 'Madagascar', flag: 'https://flagcdn.com/w320/mg.png' },
    { name: 'Malawi', flag: 'https://flagcdn.com/w320/mw.png' },
    { name: 'Malásia', flag: 'https://flagcdn.com/w320/my.png' },
    { name: 'Maldivas', flag: 'https://flagcdn.com/w320/mv.png' },
    { name: 'Mali', flag: 'https://flagcdn.com/w320/ml.png' },
    { name: 'Malta', flag: 'https://flagcdn.com/w320/mt.png' },
    { name: 'Ilhas Marshall', flag: 'https://flagcdn.com/w320/mh.png' },
    { name: 'Mauritânia', flag: 'https://flagcdn.com/w320/mr.png' },
    { name: 'Maurício', flag: 'https://flagcdn.com/w320/mu.png' },
    { name: 'México', flag: 'https://flagcdn.com/w320/mx.png' },
    { name: 'Micronésia', flag: 'https://flagcdn.com/w320/fm.png' },
    { name: 'Moldávia', flag: 'https://flagcdn.com/w320/md.png' },
    { name: 'Mônaco', flag: 'https://flagcdn.com/w320/mc.png' },
    { name: 'Mongólia', flag: 'https://flagcdn.com/w320/mn.png' },
    { name: 'Montenegro', flag: 'https://flagcdn.com/w320/me.png' },
    { name: 'Marrocos', flag: 'https://flagcdn.com/w320/ma.png' },
    { name: 'Moçambique', flag: 'https://flagcdn.com/w320/mz.png' },
    { name: 'Myanmar', flag: 'https://flagcdn.com/w320/mm.png' },
    { name: 'Namíbia', flag: 'https://flagcdn.com/w320/na.png' },
    { name: 'Nauru', flag: 'https://flagcdn.com/w320/nr.png' },
    { name: 'Nepal', flag: 'https://flagcdn.com/w320/np.png' },
    { name: 'Países Baixos', flag: 'https://flagcdn.com/w320/nl.png' },
    { name: 'Nova Zelândia', flag: 'https://flagcdn.com/w320/nz.png' },
    { name: 'Nicarágua', flag: 'https://flagcdn.com/w320/ni.png' },
    { name: 'Níger', flag: 'https://flagcdn.com/w320/ne.png' },
    { name: 'Nigéria', flag: 'https://flagcdn.com/w320/ng.png' },
    { name: 'Coreia do Norte', flag: 'https://flagcdn.com/w320/kp.png' },
    { name: 'Macedônia do Norte', flag: 'https://flagcdn.com/w320/mk.png' },
    { name: 'Noruega', flag: 'https://flagcdn.com/w320/no.png' },
    { name: 'Omã', flag: 'https://flagcdn.com/w320/om.png' },
    { name: 'Paquistão', flag: 'https://flagcdn.com/w320/pk.png' },
    { name: 'Palau', flag: 'https://flagcdn.com/w320/pw.png' },
    { name: 'Palestina', flag: 'https://flagcdn.com/w320/ps.png' },
    { name: 'Panamá', flag: 'https://flagcdn.com/w320/pa.png' },
    { name: 'Papua-Nova Guiné', flag: 'https://flagcdn.com/w320/pg.png' },
    { name: 'Paraguai', flag: 'https://flagcdn.com/w320/py.png' },
    { name: 'Peru', flag: 'https://flagcdn.com/w320/pe.png' },
    { name: 'Filipinas', flag: 'https://flagcdn.com/w320/ph.png' },
    { name: 'Polônia', flag: 'https://flagcdn.com/w320/pl.png' },
    { name: 'Portugal', flag: 'https://flagcdn.com/w320/pt.png' },
    { name: 'Catar', flag: 'https://flagcdn.com/w320/qa.png' },
    { name: 'Romênia', flag: 'https://flagcdn.com/w320/ro.png' },
    { name: 'Rússia', flag: 'https://flagcdn.com/w320/ru.png' },
    { name: 'Ruanda', flag: 'https://flagcdn.com/w320/rw.png' },
    { name: 'São Cristóvão e Nevis', flag: 'https://flagcdn.com/w320/kn.png' },
    { name: 'Santa Lúcia', flag: 'https://flagcdn.com/w320/lc.png' },
    { name: 'São Vicente e Granadinas', flag: 'https://flagcdn.com/w320/vc.png' },
    { name: 'Samoa', flag: 'https://flagcdn.com/w320/ws.png' },
    { name: 'San Marino', flag: 'https://flagcdn.com/w320/sm.png' },
    { name: 'São Tomé e Príncipe', flag: 'https://flagcdn.com/w320/st.png' },
    { name: 'Arábia Saudita', flag: 'https://flagcdn.com/w320/sa.png' },
    { name: 'Senegal', flag: 'https://flagcdn.com/w320/sn.png' },
    { name: 'Sérvia', flag: 'https://flagcdn.com/w320/rs.png' },
    { name: 'Seychelles', flag: 'https://flagcdn.com/w320/sc.png' },
    { name: 'Serra Leoa', flag: 'https://flagcdn.com/w320/sl.png' },
    { name: 'Singapura', flag: 'https://flagcdn.com/w320/sg.png' },
    { name: 'Eslováquia', flag: 'https://flagcdn.com/w320/sk.png' },
    { name: 'Eslovênia', flag: 'https://flagcdn.com/w320/si.png' },
    { name: 'Ilhas Salomão', flag: 'https://flagcdn.com/w320/sb.png' },
    { name: 'Somália', flag: 'https://flagcdn.com/w320/so.png' },
    { name: 'África do Sul', flag: 'https://flagcdn.com/w320/za.png' },
    { name: 'Coreia do Sul', flag: 'https://flagcdn.com/w320/kr.png' },
    { name: 'Sudão do Sul', flag: 'https://flagcdn.com/w320/ss.png' },
    { name: 'Espanha', flag: 'https://flagcdn.com/w320/es.png' },
    { name: 'Sri Lanka', flag: 'https://flagcdn.com/w320/lk.png' },
    { name: 'Sudão', flag: 'https://flagcdn.com/w320/sd.png' },
    { name: 'Suriname', flag: 'https://flagcdn.com/w320/sr.png' },
    { name: 'Suécia', flag: 'https://flagcdn.com/w320/se.png' },
    { name: 'Suíça', flag: 'https://flagcdn.com/w320/ch.png' },
    { name: 'Síria', flag: 'https://flagcdn.com/w320/sy.png' },
    { name: 'Tajiquistão', flag: 'https://flagcdn.com/w320/tj.png' },
    { name: 'Tanzânia', flag: 'https://flagcdn.com/w320/tz.png' },
    { name: 'Tailândia', flag: 'https://flagcdn.com/w320/th.png' },
    { name: 'Togo', flag: 'https://flagcdn.com/w320/tg.png' },
    { name: 'Tonga', flag: 'https://flagcdn.com/w320/to.png' },
    { name: 'Trinidad e Tobago', flag: 'https://flagcdn.com/w320/tt.png' },
    { name: 'Tunísia', flag: 'https://flagcdn.com/w320/tn.png' },
    { name: 'Turquia', flag: 'https://flagcdn.com/w320/tr.png' },
    { name: 'Turcomenistão', flag: 'https://flagcdn.com/w320/tm.png' },
    { name: 'Tuvalu', flag: 'https://flagcdn.com/w320/tv.png' },
    { name: 'Uganda', flag: 'https://flagcdn.com/w320/ug.png' },
    { name: 'Ucrânia', flag: 'https://flagcdn.com/w320/ua.png' },
    { name: 'Emirados Árabes Unidos', flag: 'https://flagcdn.com/w320/ae.png' },
    { name: 'Reino Unido', flag: 'https://flagcdn.com/w320/gb.png' },
    { name: 'Estados Unidos', flag: 'https://flagcdn.com/w320/us.png' },
    { name: 'Uruguai', flag: 'https://flagcdn.com/w320/uy.png' },
    { name: 'Uzbequistão', flag: 'https://flagcdn.com/w320/uz.png' },
    { name: 'Vanuatu', flag: 'https://flagcdn.com/w320/vu.png' },
    { name: 'Cidade do Vaticano', flag: 'https://flagcdn.com/w320/va.png' },
    { name: 'Venezuela', flag: 'https://flagcdn.com/w320/ve.png' },
    { name: 'Vietnã', flag: 'https://flagcdn.com/w320/vn.png' },
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
    gameQuestions = gameQuestions.slice(0, 5);
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

    scoreElement.textContent = `Pontuação: ${score}`;

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
