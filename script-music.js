// Slideshow
let current = 0;
const slides = document.querySelectorAll('#slideshow .slide');

function nextSlide() {
  slides.forEach(s => s.classList.remove('active'));
  slides[current].classList.add('active');
  current = (current + 1) % slides.length;
}
setInterval(nextSlide, 5000);
nextSlide();

// Album Cards
const albums = [
  { title: "flute", artist: "gemagus", img: "https://picsum.photos/id/1015/400/400" },
  { title: "Mountain film", artist: "Soundtrack", img: "https://picsum.photos/id/133/400/400" },
  { title: "flute tradisional", artist: "Flute", img: "https://picsum.photos/id/201/400/400" },
  { title: "movie", artist: "dramatis", img: "https://picsum.photos/id/1016/400/400" },
];

const grid = document.getElementById('album-grid');
albums.forEach(album => {
  const div = document.createElement('div');
  div.className = "group cursor-pointer";
  div.innerHTML = `
    <div class="relative overflow-hidden rounded-3xl aspect-square mb-4">
      <img src="${album.img}" class="w-full h-full object-cover group-hover:scale-110 transition">
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 opacity-0 group-hover:opacity-100 flex items-end p-5 transition">
        <button class="ml-auto w-11 h-11 bg-white text-black rounded-2xl flex items-center justify-center"><i class="fas fa-play"></i></button>
      </div>
    </div>
    <h3 class="font-semibold">${album.title}</h3>
    <p class="text-zinc-400">${album.artist}</p>
  `;
  grid.appendChild(div);
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Tutup menu kalau klik di luar (opsional)
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) mobileMenu.classList.add('hidden');
});
