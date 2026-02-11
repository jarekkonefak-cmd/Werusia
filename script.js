const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

let clickCount = 0;

noBtn.addEventListener('click', () => {
    clickCount++;

    // Faza 1: Zła odpowiedź (do 4 kliknięć)
    if (clickCount <= 4) {
        let angryEmojis = "😠".repeat(clickCount); // Dodaje jedną emotkę więcej za każdym razem
        message.style.color = "#d32f2f"; // Ciemnoczerwony kolor tekstu
        message.innerText = `Zła odpowiedź! ${angryEmojis}`;
    } 
    // Faza 2: Smutek (powyżej 4 kliknięć)
    else {
        let sadEmojis = "😢".repeat(clickCount - 4); // Zaczynamy dodawać smutne buźki
        message.style.color = "#1565c0"; // Niebieski kolor smutku
        message.innerText = `Teraz to mi już smutno... ${sadEmojis} 💔`;
    }
});

yesBtn.addEventListener('click', () => {
    document.body.innerHTML = `
        <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100vh;">
            <h1 style="font-size:4rem; color:#ff4d6d;">Wiedziałem Okruszku! ❤️🍪</h1>
            <p style="font-size:2rem;">Do zobaczenia! 😘</p>
        </div>
    `;
    // Opcjonalnie: odpalamy konfetti jeśli chcesz, ale na razie prosty tekst
});
