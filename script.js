const questions = [
  {
    q: "Kiedy się poznaliśmy? 😊",
    options: ["W lecie", "W zimie", "Wiosną"],
    correct: 0
  },
  {
    q: "Jaki jest Twój ulubiony kolor? (testuję czy uważam! 😜)",
    options: ["Różowy", "Niebieski", "Czarny"],
    correct: 1 // Zmień index na poprawny
  }
];

let currentQuestion = 0;

const quizContainer = document.getElementById('quiz-container');
const finalContainer = document.getElementById('final-container');
const qText = document.getElementById('question-text');
const optContainer = document.getElementById('options-container');

function loadQuestion() {
  const data = questions[currentQuestion];
  qText.innerText = data.q;
  optContainer.innerHTML = '';
  
  data.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.innerText = opt;
    btn.classList.add('opt-btn');
    btn.onclick = () => checkAnswer(index);
    optContainer.appendChild(btn);
  });
}

function checkAnswer(index) {
  if (index === questions[currentQuestion].correct) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      quizContainer.style.display = 'none';
      finalContainer.style.display = 'block';
    }
  } else {
    alert("Oj tam, spróbuj jeszcze raz! 😘");
  }
}

// Obsługa przycisku NIE (ucieczka)
const noBtn = document.getElementById('no');
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Obsługa przycisku TAK
document.getElementById('yes').addEventListener('click', () => {
  document.body.innerHTML = "<h1>Wiedziałem! Do zobaczenia 14 lutego! ❤️🌹</h1>";
  document.body.style.fontSize = "2rem";
  document.body.style.color = "#ff4d6d";
  document.body.style.textAlign = "center";
});

loadQuestion();
