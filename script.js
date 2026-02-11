// Cały kod zamykamy w funkcji "DOMContentLoaded", żeby mieć pewność, że strona jest gotowa
document.addEventListener('DOMContentLoaded', () => {
    
    const quizData = [
        { q: "Gdzie chcielibyśmy polecieć najbardziej? ✈️", options: ["Paryż", "Teneryfa", "Malediwy", "Nowy Jork"], correct: 1 },
        { q: "Jak ma na imię mój piesek? 🐶", options: ["Luna", "Bella", "Sassy", "Maja"], correct: 2 },
        { q: "Kiedy się urodziłem? 🎂", options: ["14 luty 2006", "7 maj 2007", "1 wrzesień 2007", "7 czerwiec 2008"], correct: 1 },
        { q: "Ile mam wzrostu? 📏", options: ["180 cm", "185 cm", "189 cm", "192 cm"], correct: 2 },
        { q: "Jaki jest mój ulubiony kolor? 🎨", options: ["Czerwony", "Zielony", "Czarny", "Niebieski"], correct: 3 },
        { q: "Czy doskoczę do obręczy (305cm)? 🏀", options: ["Bez szans", "Tak", "Ledwo", "Może kiedyś"], correct: 1 },
        { type: "tf", q: "Jako mały uczyłem się pływać i po roku uznałem, że już umiem i nie muszę. 🏊‍♂️", correct: true },
        { type: "tf", q: "Byłem w kadrze województwa w piłce nożnej. ⚽", correct: true },
        { type: "tf", q: "Trenowałem koszykówkę w klubie. 🏀", correct: false },
        { type: "tf", q: "Nie złamałem żadnej kości. 🦴", correct: false },
        { type: "tf", q: "Mam uczulenie na koty. 🐱", correct: false },
        { type: "tf", q: "Nigdy nie jadłem ośmiornicy. 🐙", correct: true }
    ];

    let currentQuestion = 0;
    const container = document.getElementById('game-container');

    // Funkcja rozpoczynająca grę
    window.startGame = function() {
        loadQuestion();
    };

    function loadQuestion() {
        if (currentQuestion >= quizData.length) {
            showFinalProposal();
            return;
        }

        const data = quizData[currentQuestion];
        let html = '';

        if (data.type === "tf") {
            html = `
                <h2>Prawda czy Fałsz? 🤔</h2>
                <p>${data.q}</p>
                <div class="tf-container">
                    <button class="quiz-btn action-btn" onclick="checkAnswer(true)">Prawda</button>
                    <button class="quiz-btn action-btn" onclick="checkAnswer(false)">Fałsz</button>
                </div>
            `;
        } else {
            let buttonsHTML = '';
            data.options.forEach((opt, index) => {
                buttonsHTML += `<button class="quiz-btn" onclick="checkAnswer(${index})">${opt}</button>`;
            });

            html = `
                <h2>Pytanie ${currentQuestion + 1}</h2>
                <p>${data.q}</p>
                <div class="options-grid">
                    ${buttonsHTML}
                </div>
            `;
        }
        container.innerHTML = `<div id="content">${html}</div>`;
    }

    window.checkAnswer = function(userAnswer) {
        const data = quizData[currentQuestion];
        if (userAnswer === data.correct) {
            currentQuestion++;
            loadQuestion();
        } else {
            alert("Błąd! Spróbuj jeszcze raz Okruszku! 😜");
        }
    };

    function showFinalProposal() {
        container.innerHTML = `
            <div id="content">
                <h1>Gratulacje! Zdałaś celująco! 🎓</h1>
                <h2>A teraz najważniejsze pytanie...</h2>
                <h1 style="font-size: 2.5rem;">Czy zostaniesz moją walentynką Okruszku? 🌹</h1>
                <div class="final-buttons">
                    <button class="action-btn" id="yesBtn" onclick="showGift()">TAK! 🥰</button>
                    <button class="action-btn" id="noBtn" onmouseover="moveButton()">Nie</button>
                </div>
            </div>
        `;
    }

    window.moveButton = function() {
        const noBtn = document.getElementById('noBtn');
        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 100);
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    };

    window.showGift = function() {
        container.innerHTML = `
            <div id="content">
                <h1>Wiedziałem! ❤️</h1>
                <p>Mam dla Ciebie mały prezent...</p>
                <div class="gift-box" onclick="openGift()" style="cursor:pointer; font-size: 5rem;">🎁</div>
                <p>(Kliknij w prezent)</p>
            </div>
        `;
    };

    window.openGift = function() {
        container.innerHTML = `
            <div id="content">
                <h1>Twoim prezentem jest... 🎉</h1>
                <h2 style="color: #ff4d6d;">Wspólna kolacja i masaż! 💆‍♀️🍝</h2>
                <p>Kocham Cię Okruszku! ❤️</p>
                <p style="font-size: 0.8rem; margin-top: 50px; opacity: 0.6;">Bilet ważny bezterminowo :)</p>
            </div>
        `;
    };
});t wystarczy)
}
