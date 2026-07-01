document.addEventListener('DOMContentLoaded', function() {

  // ====================  ====================
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

  
    const closeBtn = document.createElement('button');
    closeBtn.className = "absolute top-6 right-6 text-4xl text-zinc-400 hover:text-white";
    closeBtn.innerHTML = '×';
    closeBtn.onclick = () => mobileMenu.classList.add('hidden');
    mobileMenu.appendChild(closeBtn);
  }

  // ==================== SLI ====================
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
    { id: 1, title: "suara udan maen", artist: "Rain", img: "https://picsum.photos/id/1016/400/400", audio: "https://archive.org/download/raingueudan/rain%28gueudan%29.mp3" }, 
    { id: 2, title: "Mimpi malam", artist: "gemagus", img: "https://picsum.photos/400/400?random=1", audio: "https://archive.org/download/a-2-pendekar-3-x-adtuying-mashup/A2%20-%20pendekar3%20x%20ad%2Ctuying%20%28Mashup%29.mp3"}, 
    { id: 3, title: "intrument", artist: "gamagus", img: "https://picsum.photos/400/400?random=4", audio: "https://archive.org/download/iringan-2/Iringan2.mp3" },
    { id: 4, title: "gemagus", artist: "flute", img: "https://picsum.photos/400/400?random=3", audio: "https://archive.org/download/mashugemagusudan/mashugemagus%28udan%29%20.mp3" },
    { id: 5, title: "Tersesat di hutan rain", artist: "gemagus", img: "https://picsum.photos/id/1016/400/400", audio: "https://archive.org/download/mashugemagusudan/mashugemagus%28udan%29%20.mp3" },
  { id: 6, title: "alam hujan", artist: "Alam", img: "https://picsum.photos/id/1016/400/400", audio: "https://archive.org/download/udan-di-desa/hujan%20gerimis%20suara%20katak%20dan%20jangkrik%20suasana%20desa%20dijamin%20langsung%20tidur%20-%20Dunia%20Relaksasi.mp3"}, 
   { id: 7, title: "Mimpi malam", artist: "gemagus", img: "https://picsum.photos/400/400?random=1", audio: "https://archive.org/download/a-1gemagus-x-adtuying-imam/A1gemagus%20x%20ad%2Ctuying%20%28imam%29.mp3"}, 
    { id: 8, title: "intrument", artist: "gamagus", img: "https://picsum.photos/400/400?random=4", audio: "https://archive.org/download/a-1gemagus-x-adtuying-imam/Gemagus%28imam%29.mp3" },
    { id: 9, title: "gemagus", artist: "flute", img: "https://picsum.photos/400/400?random=3", audio: "https://archive.org/download/a-1gemagus-x-adtuying-imam/a%2C%28imam%29sergmen.mp3" },
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

  // ==================== WEB AUDIO API - BASS & TREBLE ====================
  let audioContext;
  let audioSource;
  let bassFilter;
  let trebleFilter;
  let masterGain;

  function initAudioContext(audioElement) {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      audioSource = audioContext.createMediaElementAudioSource(audioElement);
      
      // Bass Filter (Low Pass / Low Shelf)
      bassFilter = audioContext.createBiquadFilter();
      bassFilter.type = 'lowshelf';
      bassFilter.frequency.value = 200;
      bassFilter.gain.value = 0;

      // Treble Filter (High Shelf)
      trebleFilter = audioContext.createBiquadFilter();
      trebleFilter.type = 'highshelf';
      trebleFilter.frequency.value = 3000;
      trebleFilter.gain.value = 0;

      // Master Gain
      masterGain = audioContext.createGain();
      masterGain.gain.value = 1;

      // Connect: audioSource -> bass -> treble -> master -> destination
      audioSource.connect(bassFilter);
      bassFilter.connect(trebleFilter);
      trebleFilter.connect(masterGain);
      masterGain.connect(audioContext.destination);
    }
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

            <!-- Bass & Treble Controls -->
            <div class="mt-6 bg-zinc-800 p-4 rounded-xl">
              <div class="mb-4">
                <label class="text-zinc-300 text-sm font-semibold block mb-2">
                  Bass: <span id="bass-value">0</span>
                </label>
                <input id="bass-slider" type="range" min="-20" max="20" value="0" class="w-full accent-purple-500">
              </div>

              <div>
                <label class="text-zinc-300 text-sm font-semibold block mb-2">
                  Treble: <span id="treble-value">0</span>
                </label>
                <input id="treble-slider" type="range" min="-20" max="20" value="0" class="w-full accent-purple-500">
              </div>
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
    initAudioContext(audioElement);
    loadTrack(currentTrackIndex);
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // Event Listener tombol
    document.getElementById('next-btn').onclick = nextTrack;
    document.getElementById('prev-btn').onclick = prevTrack;
    document.getElementById('play-pause-btn').onclick = togglePlay;

    // Bass & Treble Sliders
    document.getElementById('bass-slider').oninput = (e) => {
      const value = e.target.value;
      document.getElementById('bass-value').textContent = value;
      if (bassFilter) bassFilter.gain.value = value;
    };

    document.getElementById('treble-slider').oninput = (e) => {
      const value = e.target.value;
      document.getElementById('treble-value').textContent = value;
      if (trebleFilter) trebleFilter.gain.value = value;
    };

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
