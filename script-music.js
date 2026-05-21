document.addEventListener('DOMContentLoaded', function() {

  // ==================== HAMBURGER MENU + TOMBOL X ====================
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Tombol Close (X) di dalam menu
  const closeBtn = document.createElement('button');
  closeBtn.className = "absolute top-6 right-6 text-4xl text-zinc-400 hover:text-white";
  closeBtn.innerHTML = '×';
  closeBtn.onclick = () => mobileMenu.classList.add('hidden');
  mobileMenu.appendChild(closeBtn);

  // ==================== SLIDESHOW ====================
  let current = 0;
  const slides = document.querySelectorAll('#slideshow .slide');

  function nextSlide() {
    slides.forEach(s => s.classList.remove('active'));
    slides[current].classList.add('active');
    current = (current + 1) % slides.length;
  }
  if (slides.length > 0) {
    setInterval(nextSlide, 5000);
    nextSlide();
  }

  // ==================== PLAYLIST ALBUM ====================
  const albums = [
    { id: 1, title: "Mimpi malam", artist: "gemagus", img: "https://picsum.photos/400/400?random=1", audio: "https://archive.org/download/musik-ajaib-gunakan/MUSIK%20AJAIB%20GUNAKAN%20HEADSET%20%20DJ%208D%20SUPER%20FULL%20BASS%20TERBARU%202025%20%28MHLS%20PRO%29.mp3" },
    { id: 2, title: "intrument", artist: "gamagus", img: "https://picsum.photos/400/400?random=4", audio: "https://archive.org/download/iringan-2/Iringan2.mp3" },
    { id: 3, title: "gemagus", artist: "flute", img: "https://picsum.photos/400/400?random=3", audio: "https://archive.org/download/epic-games_202604/Epic%20Games.mp3" },
    { id: 4, title: "gunung", artist: "gemagus", img: "https://i.imgur.com/7tF66H7.png", audio: "https://archive.org/download/epic-games_202604/Gms%20film.mp3" }
  ];

  const grid = document.getElementById('album-grid');
  let currentTrackIndex = 0;

  if (grid) {
    albums.forEach((album, index) => {
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

      div.addEventListener('click', () => {
        currentTrackIndex = index;
        openMusicPlayer();
      });

      grid.appendChild(div);
    });
  }

  // ==================== MUSIC PLAYER PLAYLIST ====================
  let audioElement;

  function openMusicPlayer() {
    let modal = document.getElementById('music-modal');
    
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'music-modal';
      modal.className = 'fixed inset-0 bg-black/95 z-[100] flex items-center justify-center hidden';
      modal.innerHTML = `
        <div class="bg-zinc-900 rounded-3xl max-w-md w-full mx-4 overflow-hidden">
          <div class="p-6">
            <button onclick="closeModal()" class="float-right text-4xl text-zinc-400 hover:text-white">×</button>
            
            <div class="text-center mt-6">
              <img id="modal-img" class="w-64 h-64 mx-auto rounded-2xl shadow-2xl object-cover">
              <h2 id="modal-title" class="text-2xl font-bold mt-6"></h2>
              <p id="modal-artist" class="text-purple-400 text-lg"></p>
            </div>

            <div class="mt-10">
              <audio id="audio-player" class="w-full" controls></audio>
            </div>

            <div class="flex justify-center gap-8 mt-8 text-5xl text-zinc-300">
              <button id="prev-btn"><i class="fas fa-backward"></i></button>
              <button id="play-pause-btn"><i class="fas fa-play-circle"></i></button>
              <button id="next-btn"><i class="fas fa-forward"></i></button>
            </div>

            <div class="text-center mt-6 text-sm text-zinc-500">
              <span id="current-track"></span> / ${albums.length}
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    audioElement = document.getElementById('audio-player');
    loadTrack(currentTrackIndex);
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // Event Listener tombol
    document.getElementById('next-btn').onclick = nextTrack;
    document.getElementById('prev-btn').onclick = prevTrack;
    document.getElementById('play-pause-btn').onclick = togglePlay;

    audioElement.onended = nextTrack;
  }

  function loadTrack(index) {
    const track = albums[index];
    document.getElementById('modal-img').src = track.img;
    document.getElementById('modal-title').textContent = track.title;
    document.getElementById('modal-artist').textContent = track.artist;
    document.getElementById('current-track').textContent = index + 1;
    
    audioElement.src = track.audio;
    audioElement.play();
  }

  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % albums.length;
    loadTrack(currentTrackIndex);
  }

  function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + albums.length) % albums.length;
    loadTrack(currentTrackIndex);
  }

  function togglePlay() {
    if (audioElement.paused) {
      audioElement.play();
      document.getElementById('play-pause-btn').innerHTML = '<i class="fas fa-pause-circle"></i>';
    } else {
      audioElement.pause();
      document.getElementById('play-pause-btn').innerHTML = '<i class="fas fa-play-circle"></i>';
    }
  }

  window.closeModal = function() {
    const modal = document.getElementById('music-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      if (audioElement) audioElement.pause();
    }
  };
});
