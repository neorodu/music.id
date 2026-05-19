// Tailwind script sudah di-load di HTML

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('#slideshow .slide');

function showNextSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showNextSlide, 5000);
showNextSlide(); // Tampilkan slide pertama

// Album Data
const albums = [
  { title: "Midnight Dreams", artist: "KAKA", img: "https://picsum.photos/id/1015/400/400" },
  { title: "Neon Rain", artist: "KAKA", img: "https://picsum.photos/id/201/400/400" },
  { title: "Echoes", artist: "Luna Echo", img: "https://picsum.photos/id/237/400/400" },
  { title: "Cyber Heart", artist: "KAKA", img: "https://picsum.photos/id/180/400/400" },
  { title: "Lost in Tokyo", artist: "Neon Waves", img: "https://picsum.photos/id/251/400/400" },
  { title: "Purple Haze", artist: "KAKA", img: "https://picsum.photos/id/870/400/400" },
  { title: "After Hours", artist: "KAKA", img: "https://picsum.photos/id/1016/400/400" },
  { title: "Electric Soul", artist: "Aether", img: "https://picsum.photos/id/133/400/400" }
];

// Generate Album Cards
const grid = document.getElementById('album-grid');

albums.forEach(album => {
  const card = document.createElement('div');
  card.className = "group cursor-pointer";
  card.innerHTML = `
    <div class="relative overflow-hidden rounded-3xl aspect-square mb-4 shadow-xl">
      <img src="${album.img}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="${album.title}">
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
        <button class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-zinc-900 ml-auto translate-y-6 group-hover:translate-y-0 transition shadow-lg">
          <i class="fas fa-play"></i>
        </button>
      </div>
    </div>
    <h3 class="font-semibold text-lg">${album.title}</h3>
    <p class="text-zinc-400">${album.artist}</p>
  `;
  grid.appendChild(card);
});

// Hamburger Button
document.getElementById('hamburger').addEventListener('click', () => {
  alert('Menu mobile akan dikembangkan lebih lanjut');
});