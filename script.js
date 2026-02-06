const butterfly = document.getElementById("butterfly");
const door = document.getElementById("door");
const texts = [
  text1, text2, text3, text4, text5, text6, text7
];

let currentText = 0;

/* Show first text after 1s */
setTimeout(() => showText(0), 1000);

function showText(i) {
  texts.forEach(t => t.style.opacity = 0);
  texts[i].style.opacity = 1;
}

/* Butterfly click */
butterfly.addEventListener("click", () => {
  butterfly.classList.add("fly");
  door.classList.add("open");
  startGalaxy();

  let delay = 2000;
  for (let i = 1; i < texts.length; i++) {
    setTimeout(() => showText(i), delay);
    delay += 2000;
  }

  /* Show hearts after last text */
  setTimeout(startHearts, delay + 2000);
});

/* ===== GALAXY EFFECT ===== */
const gCanvas = document.getElementById("galaxy");
const gCtx = gCanvas.getContext("2d");
gCanvas.width = innerWidth;
gCanvas.height = innerHeight;

let stars = [];

function startGalaxy() {
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * gCanvas.width,
      y: Math.random() * gCanvas.height,
      r: Math.random() * 2,
      v: Math.random() * 0.6
    });
  }
  animateGalaxy();
}

function animateGalaxy() {
  gCtx.clearRect(0,0,gCanvas.width,gCanvas.height);
  stars.forEach(s => {
    gCtx.beginPath();
    gCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    gCtx.fillStyle = "rgba(255,255,255,0.8)";
    gCtx.fill();
    s.y += s.v;
    if (s.y > gCanvas.height) s.y = 0;
  });
  requestAnimationFrame(animateGalaxy);
}

/* ===== HEART EFFECT ===== */
const hCanvas = document.getElementById("heart");
const hCtx = hCanvas.getContext("2d");
hCanvas.width = innerWidth;
hCanvas.height = innerHeight;

let hearts = [];

function startHearts() {
  setInterval(() => {
    hearts.push({
      t: 0,
      size: Math.random() * 12 + 8
    });
  }, 150);
  animateHearts();
}

function heartX(t) {
  return 16 * Math.pow(Math.sin(t), 3);
}

function heartY(t) {
  return -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
}

function animateHearts() {
  hCtx.clearRect(0, 0, hCanvas.width, hCanvas.height);

  hearts.forEach((h, i) => {
    h.t += 0.04;

    const x = hCanvas.width / 2 + heartX(h.t) * h.size;
    const y = hCanvas.height / 2 + heartY(h.t) * h.size;

    // gradient tim
    const glow = hCtx.createRadialGradient(x, y, 0, x, y, 12);
    glow.addColorStop(0, "rgba(255,120,160,1)");
    glow.addColorStop(0.5, "rgba(255,80,130,0.9)");
    glow.addColorStop(1, "rgba(255,80,130,0)");

    hCtx.fillStyle = glow;
    hCtx.beginPath();
    hCtx.arc(x, y, 3, 0, Math.PI * 2);
    hCtx.fill();

    // sparkle nhỏ
    if (Math.random() > 0.92) {
      hCtx.fillStyle = "rgba(255,255,255,0.9)";
      hCtx.beginPath();
      hCtx.arc(
        x + Math.random() * 6 - 3,
        y + Math.random() * 6 - 3,
        1,
        0,
        Math.PI * 2
      );
      hCtx.fill();
    }

    // xóa tim cũ
    if (h.t > Math.PI * 2) hearts.splice(i, 1);
  });

  requestAnimationFrame(animateHearts);
}
