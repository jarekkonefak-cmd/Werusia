// Baza danych pytań
const quizData = [
    // Część 1: Wybór (pytanie, opcje, indeks poprawnej odpowiedzi)
    { q: "Gdzie chcielibyśmy polecieć najbardziej? ✈️", options: ["Paryż", "Teneryfa", "Malediwy", "Nowy Jork"], correct: 1 },
    { q: "Jak ma na imię mój piesek? 🐶", options: ["Luna", "Bella", "Sassy", "Maja"], correct: 2 },
    { q: "Kiedy się urodziłem? 🎂", options: ["14 luty 2006", "7 maj 2007", "1 wrzesień 2007", "7 czerwiec 2008"], correct: 1 },
    { q: "Ile mam wzrostu? 📏", options: ["180 cm", "185 cm", "189 cm", "192 cm"], correct: 2 },
    { q: "Jaki jest mój ulubiony kolor? 🎨", options: ["Czerwony", "Zielony", "Czarny", "Niebieski"], correct: 3 },
    { q: "Czy doskoczę do obręczy (305cm)? 🏀", options: ["Bez szans", "Tak", "Ledwo", "Może kiedyś"], correct: 1 },
    
    // Część 2: Prawda / Fałsz (true = Prawda, false = Fałsz)
    { type: "tf", q: "Jako mały uczyłem się pływać i po roku uznałem, że już umiem i nie muszę. 🏊‍♂️", correct: true },
    { type: "tf", q: "Byłem w kadrze województwa w piłce nożnej. ⚽", correct: true },
    { type: "tf", q: "Trenowałem koszykówkę w klubie. 🏀", correct: false },
    { type: "tf", q: "Nie złamałem żadnej kości. 🦴", correct: false },
    { type: "tf", q: "Mam uczulenie na koty. 🐱", correct: false },
    { type: "tf", q: "Nigdy nie jadłem ośmiornicy. 🐙", correct: true }
];

let currentQuestion = 0;
const contentDiv = document.getElementById('content');

function startGame() {
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        showFinalProposal();
        return;
    }

    const data = quizData[currentQuestion];
    
    // Jeśli to pytanie Prawda/Fałsz
    if (data.type === "tf") {
        contentDiv.innerHTML = `
            <h2>Prawda czy Fałsz? 🤔</h2>
            <p>${data.q}</p>
            <div class="tf-container">
                <button class="quiz-btn action-btn" onclick="checkAnswer(true)">Prawda</button>
                <button class="quiz-btn action-btn" onclick="checkAnswer(false)">Fałsz</button>
            </div>
        `;
    } 
    // Jeśli to zwykłe pytanie
    else {
        let buttonsHTML = '';
        data.options.forEach((opt, index) => {
            buttonsHTML += `<button class="quiz-btn" onclick="checkAnswer(${index})">${opt}</button>`;
        });

        contentDiv.innerHTML = `
            <h2>Pytanie ${currentQuestion + 1}</h2>
            <p>${data.q}</p>
            <div class="options-grid">
                ${buttonsHTML}
            </div>
        `;
    }
}

function checkAnswer(userAnswer) {
    const data = quizData[currentQuestion];
    let isCorrect = false;

    if (data.type === "tf") {
        isCorrect = (userAnswer === data.correct);
    } else {
        isCorrect = (userAnswer === data.correct);
    }

    if (isCorrect) {
        currentQuestion++;
        loadQuestion();
    } else {
        alert("Błąd! Spróbuj jeszcze raz Okruszku! 😜");
    }
}

// FINAŁOWE PYTANIE
function showFinalProposal() {
    contentDiv.innerHTML = `
        <h1>Gratulacje! Zdałaś celująco! 🎓</h1>
        <h2>A teraz najważniejsze pytanie...</h2>
        <h1>Czy zostaniesz moją walentynką Okruszku? 🌹</h1>
        <div class="final-buttons">
            <button class="action-btn" id="yesBtn" onclick="showGift()">TAK! 🥰</button>
            <button class="action-btn" id="noBtn" onmouseover="moveButton()">Nie</button>
        </div>
    `;
}

// Funkcja uciekającego przycisku
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - 200); // Zakres ruchu X
    const y = Math.random() * (window.innerHeight - 200); // Zakres ruchu Y
    
    // Ustawiamy pozycję fixed, żeby uciekał po całym ekranie, nie tylko w pudełku
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// PREZENT NA KONIEC
function showGift() {
    contentDiv.innerHTML = `
        <h1>Wiedziałem! ❤️</h1>
        <p>Mam dla Ciebie mały prezent...</p>
        <div class="gift-box" onclick="openGift()">🎁</div>
        <p>(Kliknij w prezent)</p>
    `;
}

function openGift() {
    contentDiv.innerHTML = `
        <h1>Twoim prezentem jest... 🎉</h1>
        <h2>Wspólna kolacja i masaż! 💆‍♀️🍝</h2>
        <p>Kocham Cię Okruszku! ❤️</p>
        <p style="font-size: 0.8rem; margin-top: 50px;">Bilet ważny bezterminowo :)</p>
    `;
    // Odpalamy konfetti (opcjonalne, wymagałoby biblioteki, ale tekst wystarczy)
}
