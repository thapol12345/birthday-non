// ===== Typing Effect =====
const text = "HAPPY BIRTHDAY 🎂";
let i = 0;
const typing = document.getElementById("typing");

function typeEffect() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 90);
  }
}
typeEffect();

// ===== Confetti =====
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

function createConfetti() {
  pieces = [];
  for (let i = 0; i < 180; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      r: Math.random() * 5 + 3,
      c: `hsl(${200 + Math.random() * 120},80%,60%)`,
      s: Math.random() * 2 + 1.5
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.c;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.y += p.s;
    if (p.y > canvas.height) p.y = -10;
  });
  requestAnimationFrame(draw);
}
draw();

// ===== Balloons Generator =====
const balloonContainer = document.getElementById("balloons");

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.innerHTML = "🎈";
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.animationDuration = 5 + Math.random() * 5 + "s";
  balloon.style.fontSize = 28 + Math.random() * 18 + "px";

  balloonContainer.appendChild(balloon);

  setTimeout(() => balloon.remove(), 9000);
}

setInterval(createBalloon, 1000);

// ===== Surprise Button =====
function surprise() {
  document.getElementById("message").style.display = "block";
  createConfetti();
}