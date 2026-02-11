javascript


const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const response = document.getElementById('response');
yesBtn.addEventListener('click', () => {
  response.innerHTML = "Wiedziałem, że powiesz TAK! 💕";
});
noBtn.addEventListener('mouseover', () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * window.innerWidth + "px";
  noBtn.style.top = Math.random() * window.innerHeight + "px";
});
