// ========== TRACK DATA (isi di sini) ==========
const TRACKS = [
  {
    title: "udan enak ",
    artist: "tidur ",
    src: "https://archive.org/download/udan-enak/udan%20enak.mp3", 
    isDemo: false
  },
    {
    title: "flute ",
    artist: "gemagus",
    src: "https://archive.org/download/a-1gemagus-x-adtuying-imam/A1gemagus%20x%20ad%2Ctuying%20%28imam%29.mp3", 
    isDemo: false
  },
    {
    title: "flute",
    artist: "flute",
    src: "https://archive.org/download/a-1gemagus-x-adtuying-imam/Gemagus%28imam%29.mp3", 
    isDemo: false
  },
    {
    title: "gemagus",
    artist: " flute",
    src: "https://archive.org/download/a-1gemagus-x-adtuying-imam/a%2C%28imam%29sergmen.mp3", 
    isDemo: false
  },
    {
    title: "gemagau",
    artist: " rain",
    src: "https://archive.org/download/udan-di-desa/hujan%20gerimis%20suara%20katak%20dan%20jangkrik%20suasana%20desa%20dijamin%20langsung%20tidur%20-%20Dunia%20Relaksasi.mp3", 
    isDemo: false
  },
    {
    title: "udan enak ",
    artist: "udan",
    src: "https://archive.org/download/raingueudan/rain%28gueudan%29.mp3", 
    isDemo: false
  },
    {
    title: "mashub ",
    artist: " gemagus",
    src: "https://archive.org/download/a-2-pendekar-3-x-adtuying-mashup/A2%20-%20pendekar3%20x%20ad%2Ctuying%20%28Mashup%29.mp3", 
    isDemo: false
  },
    {
    title: "maahub",
    artist: "flute",
    src: "https://archive.org/download/a-1gemagus-x-adtuying-imam/A1gemagus%20x%20ad%2Ctuying%20%28imam%29.mp3", 
    isDemo: false
  },
  {
    title: "flute",
    artist: "gamagus",
    src: " https://archive.org/download/iringan-2/Iringan2.mp3",
    isDemo: false
  },
    {
    title: "flute rbulan",
    artist: "gamagus",
    src: "https://archive.org/download/ket-3enanganmashub/gemagua%28mashub%29.mp3",
    isDemo: false
  },
      {
    title: "sound cek",
    artist: "MHLS",
    src: "https://archive.org/download/musik-ajaib-gunakan/MUSIK%20AJAIB%20GUNAKAN%20HEADSET%20%20DJ%208D%20SUPER%20FULL%20BASS%20TERBARU%202025%20%28MHLS%20PRO%29.mp3",
    isDemo: false
  },
 
      { title:"cover wuxia",  
      artist:"wuxia", 
      src:"https://archive.org/download/a-1gemagus-x-adtuying-imam/Gemagus%28imam%29.mp3",
        isDemo: false
      },    
      { title:"Gemagus", 
      artist:"gemagus", 
      genre:"gemagus",  src:"https://archive.org/download/a-1gemagus-x-adtuying-imam/A1gemagus%20x%20ad%2Ctuying%20%28imam%29.mp3" },   
      { title:"Rain", 
      artist:"alam",
      genre:"alam hujan",  src:"https://archive.org/download/udan-di-desa/hujan%20gerimis%20suara%20katak%20dan%20jangkrik%20suasana%20desa%20dijamin%20langsung%20tidur%20-%20Dunia%20Relaksasi.mp3" },   
      { title:"Rain",   
      artist:"alam", 
      genre:"alam hujan",  src:"https://archive.org/download/raingueudan/rain%28gueudan%29.mp3" },    
      { title:"flute",   
      artist:"cover wuxia", 
      genre:"alam 3",  src:"https://archive.org/download/iringan-2/Iringan2.mp3" },  
      { title:"hujan buat tidur",  
      artist:"alam",
      genre:"alam hujan3",  src:"https://archive.org/download/mashugemagusudan/mashugemagus%28udan%29%20.mp3" }, 
     { title:"sore hari",  
      artist:"gemagus", 
      genre:"cover wuxia",  src:"https://archive.org/download/ket-3enanganmashub/Ket3enangan%28mashub%29.mp3" },    
      { title:"berbicara dalam diam", 
      artist:"gemagus",
      genre:"movie",  src:"https://archive.org/download/a-2-pendekar-3-x-adtuying-mashup/A2%20-%20pendekar3%20x%20ad%2Ctuying%20%28Mashup%29.mp3" },  
      { title:"sound cek",  
      artist:"MHLS",
      genre:"epic",  src:"https://archive.org/download/musik-ajaib-gunakan/MUSIK%20AJAIB%20GUNAKAN%20HEADSET%20%20DJ%208D%20SUPER%20FULL%20BASS%20TERBARU%202025%20%28MHLS%20PRO%29.mp3" },
         { title:"berbicara dalam batu",  
      artist:"gemagus",
      genre:"flute",  src:"https://archive.org/download/ket-3enanganmashub/gemagua%28mashub%29.mp3" }, 
     { title:"Rain udan",  
      artist:"alam",
      genre:"rain8",  src:"https://archive.org/download/udan-enak/udan%20enak.mp3" } 
];

// ========== EQ FREQUENCIES ==========
const EQ_BANDS = [
  { freq: 31,   label: "31" },
  { freq: 62,   label: "62" },
  { freq: 125,  label: "125" },
  { freq: 250,  label: "250" },
  { freq: 500,  label: "500" },
  { freq: 1000, label: "1k" },
  { freq: 2000, label: "2k" },
  { freq: 4000, label: "4k" },
  { freq: 8000, label: "8k" },
  { freq: 16000,label: "16k" }
];

// Presets (gain in dB)
const PRESETS = {
  flat:   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  bass:   [6, 5, 4, 2, 0, 0, 0, 0, 0, 0],
  treble: [0, 0, 0, 0, 0, 1, 3, 5, 6, 6],
  vocal:  [-2, -1, 0, 2, 4, 4, 3, 1, 0, -1],
  rock:   [4, 3, 1, 0, -1, 0, 2, 3, 3, 2]
};

// ========== STATE ==========
let audioContext = null;
let audioElement = null;
let sourceNode = null;
let filters = [];
let analyser = null;
let gainNode = null;
let currentIndex = -1;
let isPlaying = false;
let playlist = [...TRACKS];
let animationId = null;

// FX nodes
let dryGain = null;
let delayNode = null;
let delayFeedback = null;
let echoSend = null;
let echoWet = null;
let reverbNode = null;
let reverbSend = null;
let reverbWet = null;

// Persisted knob values (applied once the audio graph is (re)built)
let volumeLevel = 0.8;
let echoMix = 0;   // 0..1
let reverbMix = 0; // 0..1

// Shuffle & Repeat
// repeatMode: 0 = off, 1 = repeat all, 2 = repeat one
let shuffleOn = false;
let repeatMode = 0;
let shuffleOrder = [];   // array of indices when shuffle is on

// ========== DOM ==========
const $ = (sel) => document.querySelector(sel);
const trackTitle = $('#trackTitle');
const trackArtist = $('#trackArtist');
const currentTimeEl = $('#currentTime');
const durationEl = $('#duration');
const progressFill = $('#progressFill');
const progressThumb = $('#progressThumb');
const progressBar = $('#progressBar');
const btnPlay = $('#btnPlay');
const btnPrev = $('#btnPrev');
const btnNext = $('#btnNext');
const btnShuffle = $('#btnShuffle');
const btnRepeat = $('#btnRepeat');
const playlistEl = $('#playlist');
const trackCount = $('#trackCount');
const fileInput = $('#fileInput');
const eqKnobsContainer = $('#eqKnobs');
const visualizerCanvas = $('#visualizer');
const visCtx = visualizerCanvas.getContext('2d');

// ========== INIT ==========
function init() {
  createEQKnobs();
  initFxKnobs();
  renderPlaylist();
  setupEventListeners();
  setupDragDrop();
}

// ========== WEB AUDIO SETUP ==========
function ensureAudioContext() {
  if (audioContext) return;
  audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // Create 10 peaking filters
  filters = EQ_BANDS.map((band, i) => {
    const filter = audioContext.createBiquadFilter();
    filter.type = 'peaking';
    filter.frequency.value = band.freq;
    filter.Q.value = 1.4;
    filter.gain.value = 0;
    return filter;
  });

  analyser = audioContext.createAnalyser();
  analyser.fftSize = 256;
  analyser.smoothingTimeConstant = 0.8;

  // Master volume (everything, dry + wet, passes through this)
  gainNode = audioContext.createGain();
  gainNode.gain.value = volumeLevel;

  // ---- Dry (untouched) path ----
  dryGain = audioContext.createGain();
  dryGain.gain.value = 1;

  // ---- Echo path: send -> delay -> feedback loop -> wet return ----
  echoSend = audioContext.createGain();
  echoSend.gain.value = 1;

  delayNode = audioContext.createDelay(5.0);
  delayNode.delayTime.value = 0.32; // ~320ms slap-back echo

  delayFeedback = audioContext.createGain();
  delayFeedback.gain.value = 0.25 + echoMix * 0.35; // more knob = longer repeats

  echoWet = audioContext.createGain();
  echoWet.gain.value = echoMix * 0.7;

  // ---- Reverb path: send -> convolver -> wet return ----
  reverbSend = audioContext.createGain();
  reverbSend.gain.value = 1;

  reverbNode = audioContext.createConvolver();
  reverbNode.buffer = buildImpulseResponse(audioContext, 2.8, 2.4);

  reverbWet = audioContext.createGain();
  reverbWet.gain.value = reverbMix * 0.9;

  // Connect chain: source -> filters -> analyser
  for (let i = 0; i < filters.length - 1; i++) {
    filters[i].connect(filters[i + 1]);
  }
  filters[filters.length - 1].connect(analyser);

  // From analyser, split into dry + echo send + reverb send
  analyser.connect(dryGain);
  analyser.connect(echoSend);
  analyser.connect(reverbSend);

  // Echo chain (with feedback loop for repeating echoes)
  echoSend.connect(delayNode);
  delayNode.connect(delayFeedback);
  delayFeedback.connect(delayNode);
  delayNode.connect(echoWet);

  // Reverb chain
  reverbSend.connect(reverbNode);
  reverbNode.connect(reverbWet);

  // Sum dry + wet signals into master volume, then to output
  dryGain.connect(gainNode);
  echoWet.connect(gainNode);
  reverbWet.connect(gainNode);
  gainNode.connect(audioContext.destination);
}

// Generates a synthetic reverb impulse response (exponentially-decaying noise)
// so we get a real algorithmic "gema" without needing an external audio file.
function buildImpulseResponse(ctx, duration = 2.5, decay = 2.0) {
  const rate = ctx.sampleRate;
  const length = Math.max(1, Math.floor(rate * duration));
  const impulse = ctx.createBuffer(2, length, rate);
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
    }
  }
  return impulse;
}

function connectSource(mediaElement) {
  // createMediaElementSource can only be called once per element
  if (sourceNode && sourceNode.mediaElement === mediaElement) {
    return; // already connected
  }
  if (sourceNode) {
    try { sourceNode.disconnect(); } catch (e) {}
  }
  try {
    sourceNode = audioContext.createMediaElementSource(mediaElement);
    sourceNode.connect(filters[0]);
  } catch (err) {
    console.warn('Source already connected or error:', err);
  }
}

// ========== CREATE EQ KNOBS ==========
function createEQKnobs() {
  eqKnobsContainer.innerHTML = '';
  EQ_BANDS.forEach((band, index) => {
    const group = document.createElement('div');
    group.className = 'knob-group';

    const knob = document.createElement('div');
    knob.className = 'knob-3d';
    knob.dataset.param = 'eq';
    knob.dataset.index = index;
    knob.dataset.min = -12;
    knob.dataset.max = 12;
    knob.dataset.value = 0;

    knob.innerHTML = `
      <div class="knob-body">
        <div class="knob-indicator"></div>
        <div class="knob-center"></div>
      </div>
      <div class="knob-shadow"></div>
    `;

    const label = document.createElement('span');
    label.className = 'knob-label';
    label.textContent = band.label;

    const valueEl = document.createElement('span');
    valueEl.className = 'knob-value';
    valueEl.textContent = '0 dB';
    valueEl.id = `eq-val-${index}`;

    group.appendChild(knob);
    group.appendChild(label);
    group.appendChild(valueEl);
    eqKnobsContainer.appendChild(group);

    setupKnob(knob, (val) => {
      if (filters[index]) {
        filters[index].gain.value = val;
      }
      valueEl.textContent = (val >= 0 ? '+' : '') + val.toFixed(0) + ' dB';
    });
  });
}

function initFxKnobs() {
  // Volume
  const volKnob = document.querySelector('.volume-knob');
  const volVal = $('#volVal');
  setupKnob(volKnob, (val) => {
    volumeLevel = val;
    if (gainNode) gainNode.gain.value = val;
    if (volVal) volVal.textContent = Math.round(val * 100) + '%';
  });
  setKnobRotation(volKnob, volumeLevel);
  if (volVal) volVal.textContent = Math.round(volumeLevel * 100) + '%';

  // Echo
  const echoKnob = document.querySelector('.knob-3d[data-param="echo"]');
  const echoVal = $('#echoVal');
  setupKnob(echoKnob, (val) => {
    echoMix = val;
    if (echoWet) echoWet.gain.value = val * 0.7;
    if (delayFeedback) delayFeedback.gain.value = 0.25 + val * 0.35;
    if (echoVal) echoVal.textContent = val <= 0.02 ? 'Off' : Math.round(val * 100) + '%';
  });

  // Reverb / Gema
  const reverbKnob = document.querySelector('.knob-3d[data-param="reverb"]');
  const reverbVal = $('#reverbVal');
  setupKnob(reverbKnob, (val) => {
    reverbMix = val;
    if (reverbWet) reverbWet.gain.value = val * 0.9;
    if (reverbVal) reverbVal.textContent = val <= 0.02 ? 'Off' : Math.round(val * 100) + '%';
  });
}

// ========== 3D KNOB INTERACTION ==========
function setupKnob(knobEl, onChange) {
  const min = parseFloat(knobEl.dataset.min);
  const max = parseFloat(knobEl.dataset.max);
  let value = parseFloat(knobEl.dataset.value);
  let isDragging = false;
  let startY = 0;
  let startValue = 0;

  // Rotation range: -135deg to +135deg (270 total)
  const minAngle = -135;
  const maxAngle = 135;

  function valueToAngle(v) {
    const t = (v - min) / (max - min);
    return minAngle + t * (maxAngle - minAngle);
  }

  function setValue(v) {
    value = Math.max(min, Math.min(max, v));
    knobEl.dataset.value = value;
    const angle = valueToAngle(value);
    const body = knobEl.querySelector('.knob-body');
    if (body) body.style.transform = `rotate(${angle}deg)`;
    onChange(value);
  }

  // Initial
  setValue(value);

  function onPointerDown(e) {
    isDragging = true;
    startY = e.clientY || (e.touches && e.touches[0].clientY);
    startValue = value;
    knobEl.setPointerCapture?.(e.pointerId);
    e.preventDefault();
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const y = e.clientY || (e.touches && e.touches[0].clientY);
    const delta = (startY - y) / 2; // sensitivity
    const range = max - min;
    const newVal = startValue + (delta / 100) * range;
    setValue(newVal);
  }

  function onPointerUp(e) {
    isDragging = false;
  }

  knobEl.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);

  // Double click reset
  knobEl.addEventListener('dblclick', () => {
    if (knobEl.dataset.param === 'volume') setValue(0.8);
    else setValue(0);
  });
}

function setKnobRotation(knobEl, value) {
  const min = parseFloat(knobEl.dataset.min);
  const max = parseFloat(knobEl.dataset.max);
  const t = (value - min) / (max - min);
  const angle = -135 + t * 270;
  const body = knobEl.querySelector('.knob-body');
  if (body) body.style.transform = `rotate(${angle}deg)`;
  knobEl.dataset.value = value;
}

// ========== PLAYBACK ==========
function loadTrack(index) {
  if (index < 0 || index >= playlist.length) return;

  const track = playlist[index];
  currentIndex = index;

  // Update UI
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  renderPlaylist();

  // Stop any previous demo
  if (window._demoNodes) {
    window._demoNodes.forEach(n => {
      try { n.stop(); } catch(e) {}
    });
    window._demoNodes = [];
  }
  clearTimeout(window._demoTimer);

  if (!track.src) {
    // Demo mode - generate simple tone loop
    playDemoTone();
    return;
  }

  ensureAudioContext();
  if (audioContext.state === 'suspended') audioContext.resume();

  if (!audioElement) {
    audioElement = new Audio();
    audioElement.crossOrigin = 'anonymous';
    audioElement.addEventListener('timeupdate', updateProgress);
    audioElement.addEventListener('ended', () => nextTrack());
    audioElement.addEventListener('loadedmetadata', () => {
      durationEl.textContent = formatTime(audioElement.duration);
    });
  }

  audioElement.src = track.src;
  audioElement.load();

  // Reconnect source if needed
  connectSource(audioElement);

  audioElement.play().then(() => {
    isPlaying = true;
    btnPlay.textContent = '⏸';
    startVisualizer();
  }).catch(err => {
    console.warn('Play failed:', err);
    trackTitle.textContent = 'Gagal memutar (CORS / file error)';
  });
}

function playDemoTone() {
  ensureAudioContext();
  if (audioContext.state === 'suspended') audioContext.resume();

  // Stop previous demo
  if (window._demoNodes) {
    window._demoNodes.forEach(n => {
      try { n.stop(); } catch(e) {}
      try { n.disconnect(); } catch(e) {}
    });
  }
  window._demoNodes = [];

  const now = audioContext.currentTime;
  const notes = [110, 138.59, 164.81, 220, 164.81, 138.59]; // A2 C#3 E3 A3 ...
  const duration = 0.45;

  notes.forEach((freq, i) => {
    const osc = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const g = audioContext.createGain();

    osc.type = 'sawtooth';
    osc2.type = 'triangle';
    osc.frequency.value = freq;
    osc2.frequency.value = freq * 1.5;

    const t0 = now + i * duration;
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(0.12, t0 + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + duration - 0.05);

    osc.connect(g);
    osc2.connect(g);
    g.connect(filters[0]);

    osc.start(t0);
    osc2.start(t0);
    osc.stop(t0 + duration);
    osc2.stop(t0 + duration);

    window._demoNodes.push(osc, osc2);
  });

  isPlaying = true;
  btnPlay.textContent = '⏸';
  trackTitle.textContent = playlist[currentIndex]?.title || 'Demo Tone';
  trackArtist.textContent = 'Generated • Upload lagu asli untuk full experience';
  durationEl.textContent = '0:03';
  currentTimeEl.textContent = '0:00';
  startVisualizer();

  // Auto next after sequence
  clearTimeout(window._demoTimer);
  window._demoTimer = setTimeout(() => {
    if (isPlaying && playlist[currentIndex]?.isDemo) {
      // loop demo or next
      playDemoTone();
    }
  }, notes.length * duration * 1000 + 200);
}

function togglePlay() {
  if (currentIndex === -1 && playlist.length > 0) {
    loadTrack(0);
    return;
  }

  if (!audioElement && playlist[currentIndex]?.isDemo) {
    if (isPlaying) {
      // stop demo is limited, just next
      isPlaying = false;
      btnPlay.textContent = '▶';
      stopVisualizer();
    } else {
      playDemoTone();
    }
    return;
  }

  if (!audioElement) return;

  ensureAudioContext();
  if (audioContext.state === 'suspended') audioContext.resume();

  if (isPlaying) {
    audioElement.pause();
    isPlaying = false;
    btnPlay.textContent = '▶';
    stopVisualizer();
  } else {
    audioElement.play();
    isPlaying = true;
    btnPlay.textContent = '⏸';
    startVisualizer();
  }
}

function buildShuffleOrder() {
  shuffleOrder = playlist.map((_, i) => i);
  // Fisher-Yates
  for (let i = shuffleOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleOrder[i], shuffleOrder[j]] = [shuffleOrder[j], shuffleOrder[i]];
  }
  // Keep current track at front if playing
  if (currentIndex >= 0) {
    const pos = shuffleOrder.indexOf(currentIndex);
    if (pos > 0) {
      shuffleOrder.splice(pos, 1);
      shuffleOrder.unshift(currentIndex);
    }
  }
}

function getNextIndex() {
  if (playlist.length === 0) return -1;

  // Repeat One → stay on same track
  if (repeatMode === 2) return currentIndex;

  if (shuffleOn) {
    if (shuffleOrder.length === 0) buildShuffleOrder();
    const pos = shuffleOrder.indexOf(currentIndex);
    const nextPos = pos + 1;
    if (nextPos >= shuffleOrder.length) {
      // end of shuffled list
      if (repeatMode === 1) {
        buildShuffleOrder(); // reshuffle
        return shuffleOrder[0];
      }
      return -1; // stop
    }
    return shuffleOrder[nextPos];
  }

  // Normal order
  const next = currentIndex + 1;
  if (next >= playlist.length) {
    return repeatMode === 1 ? 0 : -1;
  }
  return next;
}

function getPrevIndex() {
  if (playlist.length === 0) return -1;

  if (repeatMode === 2) return currentIndex;

  if (shuffleOn) {
    if (shuffleOrder.length === 0) buildShuffleOrder();
    const pos = shuffleOrder.indexOf(currentIndex);
    const prevPos = pos - 1;
    if (prevPos < 0) {
      return repeatMode === 1 ? shuffleOrder[shuffleOrder.length - 1] : -1;
    }
    return shuffleOrder[prevPos];
  }

  const prev = currentIndex - 1;
  if (prev < 0) {
    return repeatMode === 1 ? playlist.length - 1 : -1;
  }
  return prev;
}

function nextTrack() {
  const next = getNextIndex();
  if (next === -1) {
    // Stop at end
    isPlaying = false;
    btnPlay.textContent = '▶';
    stopVisualizer();
    return;
  }
  loadTrack(next);
}

function prevTrack() {
  // If more than 3 seconds in, restart current track instead
  if (audioElement && audioElement.currentTime > 3) {
    audioElement.currentTime = 0;
    return;
  }
  const prev = getPrevIndex();
  if (prev === -1) return;
  loadTrack(prev);
}

function toggleShuffle() {
  shuffleOn = !shuffleOn;
  btnShuffle.classList.toggle('active', shuffleOn);
  if (shuffleOn) buildShuffleOrder();
  else shuffleOrder = [];
}

function toggleRepeat() {
  // 0 → 1 → 2 → 0
  repeatMode = (repeatMode + 1) % 3;
  btnRepeat.classList.remove('active', 'active-one');

  if (repeatMode === 1) {
    btnRepeat.classList.add('active');
    btnRepeat.title = 'Repeat All';
    btnRepeat.textContent = '🔁';
  } else if (repeatMode === 2) {
    btnRepeat.classList.add('active-one');
    btnRepeat.title = 'Repeat One';
    btnRepeat.textContent = '🔂';
  } else {
    btnRepeat.title = 'Repeat Off';
    btnRepeat.textContent = '🔁';
  }
}

// ========== PROGRESS ==========
function updateProgress() {
  if (!audioElement) return;
  const pct = (audioElement.currentTime / audioElement.duration) * 100 || 0;
  progressFill.style.width = pct + '%';
  progressThumb.style.left = pct + '%';
  currentTimeEl.textContent = formatTime(audioElement.currentTime);
}

function seek(e) {
  if (!audioElement || !audioElement.duration) return;
  const rect = progressBar.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  audioElement.currentTime = pct * audioElement.duration;
}

function formatTime(sec) {
  if (!isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ':' + (s < 10 ? '0' : '') + s;
}

// ========== PLAYLIST ==========
function renderPlaylist() {
  playlistEl.innerHTML = '';
  trackCount.textContent = playlist.length;

  playlist.forEach((track, i) => {
    const li = document.createElement('li');
    li.className = 'playlist-item' + (i === currentIndex ? ' active' : '');
    li.innerHTML = `
      <span class="num">${i + 1}</span>
      <div class="info">
        <div class="title">${track.title}</div>
        <div class="artist">${track.artist}</div>
      </div>
    `;
    li.addEventListener('click', () => loadTrack(i));
    playlistEl.appendChild(li);
  });
}

// ========== FILE UPLOAD ==========
function handleFiles(files) {
  Array.from(files).forEach(file => {
    if (!file.type.startsWith('audio/')) return;
    const url = URL.createObjectURL(file);
    const name = file.name.replace(/\.[^/.]+$/, '');
    playlist.push({
      title: name,
      artist: 'Local File',
      src: url,
      isDemo: false
    });
  });
  renderPlaylist();
  if (shuffleOn) buildShuffleOrder();

  // Auto play first new if nothing playing
  if (currentIndex === -1 && playlist.length > 0) {
    loadTrack(playlist.length - files.length);
  }
}

// ========== DRAG & DROP ==========
function setupDragDrop() {
  const app = document.querySelector('.app');
  ['dragenter', 'dragover'].forEach(ev => {
    app.addEventListener(ev, (e) => {
      e.preventDefault();
      app.classList.add('drag-over');
    });
  });
  ['dragleave', 'drop'].forEach(ev => {
    app.addEventListener(ev, (e) => {
      e.preventDefault();
      app.classList.remove('drag-over');
    });
  });
  app.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;
    if (files.length) handleFiles(files);
  });
}

// ========== VISUALIZER ==========
function startVisualizer() {
  if (animationId) cancelAnimationFrame(animationId);
  drawVisualizer();
}

function stopVisualizer() {
  if (animationId) cancelAnimationFrame(animationId);
  animationId = null;
  // clear canvas
  visCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
}

function drawVisualizer() {
  if (!analyser) {
    animationId = requestAnimationFrame(drawVisualizer);
    return;
  }

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  analyser.getByteFrequencyData(dataArray);

  const w = visualizerCanvas.width;
  const h = visualizerCanvas.height;
  visCtx.clearRect(0, 0, w, h);

  // Circular visualizer
  const cx = w / 2;
  const cy = h / 2;
  const radius = 70;

  visCtx.beginPath();
  visCtx.arc(cx, cy, radius - 10, 0, Math.PI * 2);
  visCtx.fillStyle = 'rgba(10, 10, 20, 0.6)';
  visCtx.fill();

  const bars = 64;
  const step = Math.floor(bufferLength / bars);

  for (let i = 0; i < bars; i++) {
    const value = dataArray[i * step] / 255;
    const barHeight = value * 60;
    const angle = (i / bars) * Math.PI * 2 - Math.PI / 2;

    const x1 = cx + Math.cos(angle) * radius;
    const y1 = cy + Math.sin(angle) * radius;
    const x2 = cx + Math.cos(angle) * (radius + barHeight);
    const y2 = cy + Math.sin(angle) * (radius + barHeight);

    const gradient = visCtx.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop(0, `hsla(${180 + value * 80}, 100%, 60%, 0.9)`);
    gradient.addColorStop(1, `hsla(${280 + value * 40}, 100%, 70%, 0.3)`);

    visCtx.beginPath();
    visCtx.strokeStyle = gradient;
    visCtx.lineWidth = 3;
    visCtx.lineCap = 'round';
    visCtx.moveTo(x1, y1);
    visCtx.lineTo(x2, y2);
    visCtx.stroke();
  }

  // Center glow
  const glow = visCtx.createRadialGradient(cx, cy, 0, cx, cy, 40);
  glow.addColorStop(0, 'rgba(0, 240, 255, 0.25)');
  glow.addColorStop(1, 'transparent');
  visCtx.fillStyle = glow;
  visCtx.beginPath();
  visCtx.arc(cx, cy, 40, 0, Math.PI * 2);
  visCtx.fill();

  animationId = requestAnimationFrame(drawVisualizer);
}

// ========== PRESETS ==========
function applyPreset(name) {
  const gains = PRESETS[name];
  if (!gains) return;

  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.preset === name);
  });

  gains.forEach((g, i) => {
    if (filters[i]) filters[i].gain.value = g;
    const knob = document.querySelector(`.knob-3d[data-index="${i}"]`);
    if (knob) {
      setKnobRotation(knob, g);
      const valEl = document.getElementById(`eq-val-${i}`);
      if (valEl) valEl.textContent = (g >= 0 ? '+' : '') + g + ' dB';
    }
  });
}

function resetEQ() {
  applyPreset('flat');
}

// ========== EVENTS ==========
function setupEventListeners() {
  btnPlay.addEventListener('click', togglePlay);
  btnNext.addEventListener('click', nextTrack);
  btnPrev.addEventListener('click', prevTrack);
  btnShuffle.addEventListener('click', toggleShuffle);
  btnRepeat.addEventListener('click', toggleRepeat);
  progressBar.addEventListener('click', seek);
  fileInput.addEventListener('change', (e) => handleFiles(e.target.files));

  $('#btnResetEQ').addEventListener('click', resetEQ);

  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => applyPreset(btn.dataset.preset));
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      togglePlay();
    } else if (e.code === 'ArrowRight') nextTrack();
    else if (e.code === 'ArrowLeft') prevTrack();
    else if (e.code === 'KeyS') toggleShuffle();
    else if (e.code === 'KeyR') toggleRepeat();
  });
}

// Start
init();