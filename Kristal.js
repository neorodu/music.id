for (let i = 0; i < 40; i++) {
  const c = document.createElement("div");
  c.className = "crystal";
  c.style.left = Math.random() * 100 + "vw";
  c.style.animationDuration = 4 + Math.random() * 6 + "s";
  c.style.opacity = Math.random();
  document.body.appendChild(c);
}
// ================= PARTICLE GENERATOR =================
function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  const size = Math.random() * 6 + 2;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.bottom = "-10px";

  particle.style.animationDuration = (Math.random() * 5 + 5) + "s";

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 10000);
}

setInterval(createParticle, 200);