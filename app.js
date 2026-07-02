(function () {
  "use strict";

  /* ===================================================
     NAVBAR — hamburger toggle
     =================================================== */
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");

  function closeMenu() {
    navMenu.classList.remove("is-open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }

  hamburgerBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("[data-menu-link]").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  /* ===================================================
     SLIDESHOW — musisi
     =================================================== */
  const slideshowEl = document.getElementById("slideshow");
  const slideDots = document.getElementById("slideDots");
  const slideEyebrow = document.getElementById("slideEyebrow");
  const slideTitle = document.getElementById("slideTitle");
  const slideDesc = document.getElementById("slideDesc");
  const slidePrev = document.getElementById("slidePrev");
  const slideNext = document.getElementById("slideNext");

  let currentSlide = 0;
  let slideTimer = null;

  function buildSlides() {
    MUSICIANS.forEach((m, i) => {
      const div = document.createElement("div");
      div.className = "slide" + (i === 0 ? " is-active" : "");
      div.style.backgroundImage = `url('${m.image}')`;
      slideshowEl.appendChild(div);

      const dot = document.createElement("button");
      dot.className = "hero__dot" + (i === 0 ? " is-active" : "");
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Slide ${i + 1}`);
      dot.addEventListener("click", () => goToSlide(i));
      slideDots.appendChild(dot);
    });
    renderSlideCaption(0);
  }

  function renderSlideCaption(i) {
    const m = MUSICIANS[i];
    slideEyebrow.textContent = m.eyebrow;
    slideTitle.textContent = m.title;
    slideDesc.textContent = m.desc;
  }

  function goToSlide(i) {
    const slides = slideshowEl.querySelectorAll(".slide");
    const dots = slideDots.querySelectorAll(".hero__dot");
    slides[currentSlide].classList.remove("is-active");
    dots[currentSlide].classList.remove("is-active");

    currentSlide = (i + MUSICIANS.length) % MUSICIANS.length;

    slides[currentSlide].classList.add("is-active");
    dots[currentSlide].classList.add("is-active");
    renderSlideCaption(currentSlide);
    resetSlideTimer();
  }

  function resetSlideTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => goToSlide(currentSlide + 1), 6000);
  }

  slidePrev.addEventListener("click", () => goToSlide(currentSlide - 1));
  slideNext.addEventListener("click", () => goToSlide(currentSlide + 1));

  /* ===================================================
     TRACKLIST — render dari TRACKS
     =================================================== */
  const trackListEl = document.getElementById("trackList");
  let activeTrackIndex = -1;

  function formatTime(sec) {
    if (!isFinite(sec) || sec < 0) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  function buildTrackRows() {
    TRACKS.forEach((track, i) => {
      const row = document.createElement("div");
      row.className = "track-row";
      row.setAttribute("role", "listitem");
      row.dataset.index = String(i);
      row.innerHTML = `
        <span class="track-row__index">${String(i + 1).padStart(2, "0")}</span>
        <span class="track-row__art" style="background-image:url('${track.cover}')"></span>
        <span class="track-row__info">
          <p class="track-row__title">${track.title}</p>
          <p class="track-row__meta">${track.artist}<span class="track-row__tag">${track.tag}</span></p>
        </span>
        <span class="track-row__duration" data-duration>--:--</span>
        <button class="track-row__play" aria-label="Putar ${track.title}">▶</button>
      `;
      row.addEventListener("click", () => loadTrack(i, true));
      trackListEl.appendChild(row);
    });
  }

  function markActiveRow() {
    trackListEl.querySelectorAll(".track-row").forEach((row) => {
      const idx = Number(row.dataset.index);
      row.classList.toggle("is-playing", idx === activeTrackIndex);
      const btn = row.querySelector(".track-row__play");
      btn.textContent = idx === activeTrackIndex && isPlaying ? "❚❚" : "▶";
    });
  }

  /* ===================================================
     AUDIO PLAYER + WEB AUDIO FX (bass / treble)
     =================================================== */
  const audioEl = document.getElementById("audioEl");
  const playerEl = document.getElementById("player");
  const playerArt = document.getElementById("playerArt");
  const playerTitle = document.getElementById("playerTitle");
  const playerArtist = document.getElementById("playerArtist");
  const playBtn = document.getElementById("playBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const seekBar = document.getElementById("seekBar");
  const timeCurrent = document.getElementById("timeCurrent");
  const timeDuration = document.getElementById("timeDuration");
  const bassRange = document.getElementById("bassRange");
  const trebleRange = document.getElementById("trebleRange");
  const volRange = document.getElementById("volRange");

  let isPlaying = false;
  let audioCtx = null;
  let bassFilter, trebleFilter, sourceNode, gainNode;

  function setupAudioGraph() {
    if (audioCtx) return; // already set up
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();

    audioEl.crossOrigin = "anonymous";
    sourceNode = audioCtx.createMediaElementSource(audioEl);

    bassFilter = audioCtx.createBiquadFilter();
    bassFilter.type = "lowshelf";
    bassFilter.frequency.value = 200; // low end
    bassFilter.gain.value = Number(bassRange.value);

    trebleFilter = audioCtx.createBiquadFilter();
    trebleFilter.type = "highshelf";
    trebleFilter.frequency.value = 3200; // high end
    trebleFilter.gain.value = Number(trebleRange.value);

    gainNode = audioCtx.createGain();
    gainNode.gain.value = Number(volRange.value) / 100;

    sourceNode
      .connect(bassFilter)
      .connect(trebleFilter)
      .connect(gainNode)
      .connect(audioCtx.destination);
  }

  function loadTrack(index, autoplay) {
    activeTrackIndex = index;
    const track = TRACKS[index];

    playerArt.style.backgroundImage = `url('${track.cover}')`;
    playerTitle.textContent = track.title;
    playerArtist.textContent = `${track.artist} — ${track.tag}`;

    audioEl.src = track.src;
    markActiveRow();

    if (autoplay) {
      playAudio();
    }
  }

  function playAudio() {
    setupAudioGraph();
    if (audioCtx.state === "suspended") audioCtx.resume();
    audioEl.play().catch(() => {
      /* autoplay might be blocked until user gesture; button click covers this */
    });
  }

  function pauseAudio() {
    audioEl.pause();
  }

  playBtn.addEventListener("click", () => {
    if (activeTrackIndex === -1) {
      loadTrack(0, true);
      return;
    }
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (activeTrackIndex === -1) return;
    const nextIndex = (activeTrackIndex - 1 + TRACKS.length) % TRACKS.length;
    loadTrack(nextIndex, true);
  });

  nextBtn.addEventListener("click", () => {
    if (activeTrackIndex === -1) return;
    const nextIndex = (activeTrackIndex + 1) % TRACKS.length;
    loadTrack(nextIndex, true);
  });

  audioEl.addEventListener("play", () => {
    isPlaying = true;
    playBtn.textContent = "❚❚";
    playerEl.classList.add("is-playing");
    markActiveRow();
  });

  audioEl.addEventListener("pause", () => {
    isPlaying = false;
    playBtn.textContent = "▶";
    playerEl.classList.remove("is-playing");
    markActiveRow();
  });

  audioEl.addEventListener("ended", () => {
    nextBtn.click();
  });

  audioEl.addEventListener("loadedmetadata", () => {
    seekBar.max = String(audioEl.duration || 0);
    timeDuration.textContent = formatTime(audioEl.duration);
    const row = trackListEl.querySelector(`[data-index="${activeTrackIndex}"] [data-duration]`);
    if (row) row.textContent = formatTime(audioEl.duration);
  });

  audioEl.addEventListener("timeupdate", () => {
    seekBar.value = String(audioEl.currentTime);
    timeCurrent.textContent = formatTime(audioEl.currentTime);
    updateRangeFill(seekBar, (audioEl.currentTime / (audioEl.duration || 1)) * 100);
  });

  seekBar.addEventListener("input", () => {
    audioEl.currentTime = Number(seekBar.value);
  });

  /* ---- BASS / TREBLE / VOLUME controls ---- */
  function updateRangeFill(rangeInput, percentOverride) {
    const min = Number(rangeInput.min);
    const max = Number(rangeInput.max);
    const val = percentOverride !== undefined ? percentOverride : Number(rangeInput.value);
    const percent =
      percentOverride !== undefined
        ? percentOverride
        : ((Number(rangeInput.value) - min) / (max - min)) * 100;
    rangeInput.style.setProperty("--fill", `${Math.min(100, Math.max(0, percent))}%`);
  }

  bassRange.addEventListener("input", () => {
    if (bassFilter) bassFilter.gain.value = Number(bassRange.value);
    updateRangeFill(bassRange);
  });

  trebleRange.addEventListener("input", () => {
    if (trebleFilter) trebleFilter.gain.value = Number(trebleRange.value);
    updateRangeFill(trebleRange);
  });

  volRange.addEventListener("input", () => {
    if (gainNode) gainNode.gain.value = Number(volRange.value) / 100;
    updateRangeFill(volRange);
  });

  /* ===================================================
     INIT
     =================================================== */
  function init() {
    buildSlides();
    resetSlideTimer();
    buildTrackRows();
    updateRangeFill(bassRange);
    updateRangeFill(trebleRange);
    updateRangeFill(volRange);
    document.getElementById("year").textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
