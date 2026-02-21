// ── Starfield ──
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let W, H, stars = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

function initStars() {
  stars = Array.from({length: 180}, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.4 + 0.2,
    a: Math.random(),
    speed: Math.random() * 0.004 + 0.001,
    phase: Math.random() * Math.PI * 2,
  }));
}

function drawStars(t) {
  ctx.clearRect(0, 0, W, H);
  stars.forEach(s => {
    const alpha = s.a * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(232,204,122,${alpha})`;
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}

resize();
initStars();
window.addEventListener('resize', () => { resize(); initStars(); });
requestAnimationFrame(drawStars);

// ── Nav cards fade exit ──
document.querySelectorAll('.nav-card').forEach(card => {
  card.addEventListener('click', e => {
    e.preventDefault();
    const href = card.getAttribute('href');
    document.body.classList.add('exit');
    setTimeout(() => { window.location.href = href; }, 480);
  });
});