// ==================== SLIDESHOW ====================
let current = 0;
const slides = document.querySelectorAll('#slideshow .slide');

function nextSlide() {
  slides.forEach(s => s.classList.remove('active'));
  slides[current].classList.add('active');
  current = (current + 1) % slides.length;
}
setInterval(nextSlide, 5000);
nextSlide();

// ==================== ALBUM CARDS + LINK ====================
const albums = [
  { 
    id: 1,
    title: "flute dizi", 
    artist: "flute", 
    img: "https://picsum.photos/id/1015/400/400",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
  },
  { 
    id: 2,
    title: "movie", 
    artist: "soundtrack", 
    img: "https://picsum.photos/id/133/400/400",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" 
  },
  { 
    id: 3,
    title: "intrument", 
    artist: "neorodu", 
    img: "https://picsum.photos/id/201/400/400",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" 
  },
  { 
    id: 4,
    title: "Lost in", 
    artist: " Echo", 
    img: "https://picsum.photos/id/1016/400/400",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" 
  }
];

const grid = document.getElementById('album-grid');

albums.forEach(album => {
  const div = document.createElement('div');
  div.className = "group cursor-pointer";
  div.innerHTML = `
    <div class="relative overflow-hidden rounded-3xl aspect-square mb-4 shadow-2xl">
      <img src="${album.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 opacity-0 group-hover:opacity-100 flex items-end p-5 transition">
        <button class="ml-auto w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center shadow-lg">
          <i class="fas fa-play"></i>
        </button>
      </div>
    </div>
    <h3 class="font-semibold text-lg">${album.title}</h3>
    <p class="text-zinc-400">${album.artist}</p>
  `;

  // Klik card → buka player
  div.addEventListener('click', () => {
    openMusicPlayer(album);
  });

  grid.appendChild(div);
});

// ==================== MUSIC PLAYER MODAL ====================
function openMusicPlayer(album) {
  let modal = document.getElementById('music-modal');
  
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'music-modal';
    modal.className = 'fixed inset-0 bg-black/90 z-[100] flex items-center justify-center hidden';
    modal.innerHTML = `
      <div class="bg-zinc-900 rounded-3xl max-w-md w-full mx-4 overflow-hidden">
        <div class="p-6">
          <button onclick="closeModal()" class="float-right text-3xl text-zinc-400 hover:text-white">×</button>
          
          <div class="text-center mt-8">
            <img id="modal-img" src="" class="w-64 h-64 mx-auto rounded-2xl shadow-2xl object-cover">
            <h2 id="modal-title" class="text-2xl font-bold mt-6"></h2>
            <p id="modal-artist" class="text-purple-400 text-lg"></p>
          </div>

          <div class="mt-10">
            <audio id="audio-player" class="w-full" controls></audio>
          </div>

          <div class="flex justify-center gap-6 mt-8 text-4xl">
            <button class="text-zinc-400 hover:text-white"><i class="fas fa-backward"></i></button>
            <button id="play-pause" class="text-purple-500"><i class="fas fa-play-circle"></i></button>
            <button class="text-zinc-400 hover:text-white"><i class="fas fa-forward"></i></button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  // Isi data
  document.getElementById('modal-img').src = album.img;
  document.getElementById('modal-title').textContent = album.title;
  document.getElementById('modal-artist').textContent = album.artist;
  document.getElementById('audio-player').src = album.audio;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeModal() {
  const modal = document.getElementById('music-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    const audio = document.getElementById('audio-player');
    if (audio) audio.pause();
  }
}
