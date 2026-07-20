(function(){
  "use strict";

  /* ============ AUDIO ENGINE ============ */
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  let actx = null;
  let masterGain, analyser, subbassF, bassF, lowMidF, midF, highMidF, trebleF, presenceF, airF, sourceNode;
  let audioReady = false;
  const audioEl = document.getElementById('audioEl');

  const bands = [
    { key:'subbass', label:'Sub Bass', freq:40,   type:'lowshelf', color:'--band-subbass' },
    { key:'bass',    label:'Bass',     freq:80,  type:'peaking',  color:'--band-bass',   Q:8},
    { key:'lowmid',  label:'Low Mid',  freq:400,  type:'peaking',  color:'--band-lowmid', Q:1 },
    { key:'mid',     label:'Mid',      freq:1000, type:'peaking',  color:'--band-mid',    Q:1 },
    { key:'highmid', label:'High Mid', freq:2500, type:'peaking',  color:'--band-highmid',Q:1 },
    { key:'treble',  label:'Treble',   freq:6000, type:'peaking',  color:'--band-treble', Q:1 },
    { key:'presence',label:'Presence', freq:9000, type:'peaking',  color:'--band-presence',Q:1 },
    { key:'air',     label:'Air',      freq:14000,type:'highshelf',color:'--band-air'    },
  ];
  const bandValues = { subbass:0, bass:0, lowmid:0, mid:0, highmid:0, treble:0, presence:0, air:0 }; // stored dB, -15..15
  let eqEnabled = false;
  let volume = 0.75;

  function initAudio(){
    if(audioReady) return;
    actx = new AudioCtx();

    subbassF = actx.createBiquadFilter();
    subbassF.type = 'lowshelf'; subbassF.frequency.value = 50; subbassF.gain.value = 6;

    bassF = actx.createBiquadFilter();
    bassF.type = 'peaking'; bassF.frequency.value = 120; bassF.Q.value = 1; bassF.gain.value = 3;

    lowMidF = actx.createBiquadFilter();
    lowMidF.type = 'peaking'; lowMidF.frequency.value = 400; lowMidF.Q.value = 1; lowMidF.gain.value = 0;

    midF = actx.createBiquadFilter();
    midF.type = 'peaking'; midF.frequency.value = 1000; midF.Q.value = 1; midF.gain.value = 0;

    highMidF = actx.createBiquadFilter();
    highMidF.type = 'peaking'; highMidF.frequency.value = 2500; highMidF.Q.value = 1; highMidF.gain.value = 0;

    trebleF = actx.createBiquadFilter();
    trebleF.type = 'peaking'; trebleF.frequency.value = 6000; trebleF.Q.value = 1; trebleF.gain.value = 0;

    presenceF = actx.createBiquadFilter();
    presenceF.type = 'peaking'; presenceF.frequency.value = 6000; presenceF.Q.value = 1,2; presenceF.gain.value = 3;

    airF = actx.createBiquadFilter();
    airF.type = 'highshelf'; airF.frequency.value = 14000; airF.gain.value = 2;

    masterGain = actx.createGain();
    masterGain.gain.value = volume;

    analyser = actx.createAnalyser();
    analyser.fftSize = 128;

    
    sourceNode = actx.createMediaElementSource(audioEl);

    sourceNode.connect(subbassF).connect(bassF).connect(lowMidF).connect(midF).connect(highMidF).connect(trebleF).connect(presenceF).connect(airF)
      .connect(masterGain).connect(analyser).connect(actx.destination);

    audioReady = true;
    startViz();
  }

  const filterMap = { subbass:()=>subbassF, bass:()=>bassF, lowmid:()=>lowMidF, mid:()=>midF, highmid:()=>highMidF, treble:()=>trebleF, presence:()=>presenceF, air:()=>airF };

  function applyBandGain(key, dB){
    bandValues[key] = dB;
    if(!audioReady) return;
    const f = filterMap[key]();
    const target = eqEnabled ? dB : 0;
    f.gain.setTargetAtTime(target, actx.currentTime, 0.05);
  }

  function applyAllBands(){
    Object.keys(bandValues).forEach(k => applyBandGain(k, bandValues[k]));
  }

    /* ============ DATA LAGU ============     baca zipmsir.  ================================== */ 
  const tracks = [    { title:"cover wuxia",   artist:"wuxia", genre:"gamagus",  url:"https://archive.org/download/a-1gemagus-x-adtuying-imam/Gemagus%28imam%29.mp3" },    { title:"Gemagus", artist:"gemagus", genre:"gemagus",  url:"https://archive.org/download/a-1gemagus-x-adtuying-imam/A1gemagus%20x%20ad%2Ctuying%20%28imam%29.mp3" },    { title:"Rain",    artist:"alam", genre:"alam hujan",  url:"https://archive.org/download/udan-di-desa/hujan%20gerimis%20suara%20katak%20dan%20jangkrik%20suasana%20desa%20dijamin%20langsung%20tidur%20-%20Dunia%20Relaksasi.mp3" },     { title:"Rain",    artist:"alam", genre:"alam hujan",  url:"https://archive.org/download/raingueudan/rain%28gueudan%29.mp3" },     { title:"flute",    artist:"cover wuxia", genre:"alam 3",  url:"https://archive.org/download/iringan-2/Iringan2.mp3" },     { title:"hujan buat tidur",    artist:"alam", genre:"alam hujan3",  url:"https://archive.org/download/mashugemagusudan/mashugemagus%28udan%29%20.mp3" },     { title:"cinematic",    artist:"movie", genre:"sound",  url:"https://archive.org/download/whispers-over-the-water-1/Whispers%20Over%20The%20Water%20(1).mp3" },     { title:"berbicara dalam diam",    artist:"gemagus", genre:"movie",  url:"https://archive.org/download/a-2-pendekar-3-x-adtuying-mashup/A2%20-%20pendekar3%20x%20ad%2Ctuying%20%28Mashup%29.mp3" },     { title:"sound 8D",    artist:"MHLS", genre:"8D",  url:"https://archive.org/download/musik-ajaib-gunakan/MUSIK%20AJAIB%20GUNAKAN%20HEADSET%20%20DJ%208D%20SUPER%20FULL%20BASS%20TERBARU%202025%20%28MHLS%20PRO%29.mp3"}  ];
  let currentTrack = 0;
  let isPlaying = false;
  let shuffleOn = false;
  let repeatMode = 0; // 0 = off, 1 = repeat all, 2 = repeat one

  function getRandomOtherIndex(exclude){
    if(tracks.length <= 1) return exclude;
    let idx;
    do{ idx = Math.floor(Math.random()*tracks.length); } while(idx === exclude);
    return idx;
  }

  function startPlayback(){
    initAudio();
    if(actx.state === 'suspended') actx.resume();
    applyAllBands();
    audioEl.play().catch(()=>{ statusText.textContent = 'GAGAL PUTAR — CEK URL/CORS'; });
    isPlaying = true;
    updatePlayUI();
  }

  function stopPlayback(pauseOnly){
    audioEl.pause();
    isPlaying = false;
    updatePlayUI();
  }

  /* ============ UI: PLAYLIST ============ */
  const playlistEl = document.getElementById('playlist');
  const sceneDotsEl = document.getElementById('sceneDots');

  function buildPlaylist(){
    playlistEl.innerHTML = '';
    sceneDotsEl.innerHTML = '';
    tracks.forEach((t, i)=>{
      const item = document.createElement('div');
      item.className = 'p-item' + (i===currentTrack ? ' active':'');
      item.innerHTML = `<div class="p-left"><span class="p-idx">${String(i+1).padStart(2,'0')}</span><span class="p-name">${t.title}</span></div><span class="p-genre">${t.genre}</span>`;
      item.addEventListener('click', ()=>{ selectTrack(i); startPlayback(); });
      playlistEl.appendChild(item);

      const dot = document.createElement('div');
      dot.className = 'scene-dot' + (i===currentTrack ? ' active':'');
      dot.addEventListener('click', ()=>{ selectTrack(i); startPlayback(); });
      sceneDotsEl.appendChild(dot);
    });
  }

  function selectTrack(i){
    currentTrack = i;
    document.querySelectorAll('.p-item').forEach((el,idx)=> el.classList.toggle('active', idx===i));
    document.querySelectorAll('.scene-dot').forEach((el,idx)=> el.classList.toggle('active', idx===i));
    document.querySelectorAll('.slide').forEach((el,idx)=> el.classList.toggle('active', idx % 3 === i % 3));
    document.getElementById('sceneBadge').textContent = 'TRK.'+String(i+1).padStart(2,'0');
    document.getElementById('trackTitle').textContent = tracks[i].title;
    document.getElementById('trackArtist').textContent = tracks[i].artist;
    audioEl.src = tracks[i].url;
    document.getElementById('tCur').textContent = '00:00';
    document.getElementById('barFill').style.width = '0%';
  }

  document.getElementById('prevBtn').addEventListener('click', ()=>{
    const idx = shuffleOn ? getRandomOtherIndex(currentTrack) : (currentTrack - 1 + tracks.length) % tracks.length;
    selectTrack(idx);
    startPlayback();
  });
  document.getElementById('nextBtn').addEventListener('click', ()=>{
    const idx = shuffleOn ? getRandomOtherIndex(currentTrack) : (currentTrack + 1) % tracks.length;
    selectTrack(idx);
    startPlayback();
  });

  /* ============ SHUFFLE & REPEAT ============ */
  const shuffleBtn = document.getElementById('shuffleBtn');
  const repeatBtn = document.getElementById('repeatBtn');
  const repeatBadge = document.getElementById('repeatBadge');

  shuffleBtn.addEventListener('click', ()=>{
    shuffleOn = !shuffleOn;
    shuffleBtn.classList.toggle('active', shuffleOn);
  });

  function updateRepeatUI(){
    repeatBtn.classList.toggle('active', repeatMode !== 0);
    repeatBadge.classList.toggle('show', repeatMode === 2);
    repeatBtn.title = repeatMode===0 ? 'Repeat: Off' : (repeatMode===1 ? 'Repeat: Ulangi Semua' : 'Repeat: Ulangi Satu');
  }
  repeatBtn.addEventListener('click', ()=>{
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatUI();
  });
  updateRepeatUI();

  /* lagu selesai -> tentukan lagu berikutnya berdasar shuffle & repeat */
  audioEl.addEventListener('ended', ()=>{
    if(repeatMode === 2){
      audioEl.currentTime = 0;
      audioEl.play();
      return;
    }
    if(shuffleOn){
      selectTrack(getRandomOtherIndex(currentTrack));
      startPlayback();
      return;
    }
    const isLast = currentTrack === tracks.length - 1;
    if(isLast && repeatMode === 0){
      stopPlayback(true);
      audioEl.currentTime = 0;
      document.getElementById('tCur').textContent = '00:00';
      document.getElementById('barFill').style.width = '0%';
      return;
    }
    const nextIdx = isLast ? 0 : currentTrack + 1;
    selectTrack(nextIdx);
    startPlayback();
  });

  /* ============ UI: TRANSPORT ============ */
  const playBtn = document.getElementById('playBtn');
  const playIcon = document.getElementById('playIcon');
  const statusText = document.getElementById('statusText');

  function updatePlayUI(){
    playIcon.innerHTML = isPlaying
      ? '<path d="M6 5h4v14H6zm8 0h4v14h-4z"/>'
      : '<path d="M8 5v14l11-7z"/>';
    statusText.textContent = isPlaying ? 'PLAYING' : 'PAUSED';
  }

  playBtn.addEventListener('click', ()=>{
    if(!audioEl.src){ selectTrack(currentTrack); }
    if(isPlaying){ stopPlayback(true); }
    else { startPlayback(); }
  });

  /* progress asli dari durasi file audio */
  function fmt(s){
    if(!isFinite(s) || isNaN(s)) return '00:00';
    const m=Math.floor(s/60); const sec=Math.floor(s%60);
    return String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0');
  }
  audioEl.addEventListener('loadedmetadata', ()=>{
    document.getElementById('tTotal').textContent = fmt(audioEl.duration);
  });
  audioEl.addEventListener('timeupdate', ()=>{
    document.getElementById('tCur').textContent = fmt(audioEl.currentTime);
    const pct = audioEl.duration ? (audioEl.currentTime/audioEl.duration*100) : 0;
    document.getElementById('barFill').style.width = pct+'%';
  });
  document.getElementById('barTrack').addEventListener('click', (e)=>{
    if(!audioEl.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioEl.currentTime = pct * audioEl.duration;
  });

  /* ============ UI: VISUALIZER ============ */
  const canvas = document.getElementById('viz');
  const ctx2d = canvas.getContext('2d');
  function resizeCanvas(){
    canvas.width = canvas.clientWidth * devicePixelRatio;
    canvas.height = canvas.clientHeight * devicePixelRatio;
  }
  window.addEventListener('resize', resizeCanvas);

  function startViz(){
    resizeCanvas();
    const data = new Uint8Array(analyser.frequencyBinCount);
    function draw(){
      requestAnimationFrame(draw);
      analyser.getByteFrequencyData(data);
      ctx2d.clearRect(0,0,canvas.width,canvas.height);
      const barCount = data.length;
      const barW = canvas.width / barCount;
      for(let i=0;i<barCount;i++){
        const v = data[i]/255;
        const h = v * canvas.height;
        const hue = 200 - (i/barCount)*180;
        ctx2d.fillStyle = `hsl(${hue+120*(i/barCount)}, 90%, ${55+v*15}%)`;
        ctx2d.shadowColor = ctx2d.fillStyle;
        ctx2d.shadowBlur = 6;
        ctx2d.fillRect(i*barW, canvas.height - h, barW*0.7, h);
      }
    }
    draw();
  }

  /* ============ KNOBS ============ */
  const MIN_DB = -15, MAX_DB = 15;
  const knobsGrid = document.getElementById('knobsGrid');

  function dbToAngle(dB){ return ((dB - MIN_DB) / (MAX_DB - MIN_DB)) * 270 - 135; }

  function buildKnobs(){
    bands.forEach(b=>{
      const cell = document.createElement('div');
      cell.className = 'knob-cell';
      cell.id = 'cell-'+b.key;
      cell.innerHTML = `
        <div class="knob" id="knob-${b.key}" style="--kc:var(${b.color});">
          <div class="knob-indicator" id="ind-${b.key}" style="--kc:var(${b.color});"></div>
        </div>
        <div class="knob-label">${b.label}</div>
        <div class="knob-val" id="val-${b.key}">0.0 dB</div>
      `;
      knobsGrid.appendChild(cell);
      attachKnobDrag(document.getElementById('knob-'+b.key), (dB)=>{
        applyBandGain(b.key, dB);
        updateKnobVisual(b.key, dB);
      }, MIN_DB, MAX_DB, 0);
    });
  }

  function updateKnobVisual(key, dB){
    const ind = document.getElementById('ind-'+key);
    const val = document.getElementById('val-'+key);
    ind.style.transform = `translateX(-50%) rotate(${dbToAngle(dB)}deg)`;
    val.textContent = dB.toFixed(1)+' dB';
    const knob = document.getElementById('knob-'+key);
    if(Math.abs(dB) > 0.5 && eqEnabled) knob.classList.add('glow'); else knob.classList.remove('glow');
  }

  function attachKnobDrag(el, onChange, min, max, startVal){
    let value = startVal;
    let dragging = false;
    let startY = 0;
    let startVal2 = 0;

    function setFromDrag(clientY){
      const delta = startY - clientY;
      const range = max - min;
      let v = startVal2 + (delta / 140) * range;
      v = Math.max(min, Math.min(max, v));
      value = v;
      onChange(value);
    }

    el.addEventListener('pointerdown', (e)=>{
      if(el.closest('.knob-cell').classList.contains('dis')) return;
      dragging = true;
      startY = e.clientY;
      startVal2 = value;
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener('pointermove', (e)=>{
      if(!dragging) return;
      setFromDrag(e.clientY);
    });
    el.addEventListener('pointerup', ()=> dragging = false);
    el.addEventListener('pointercancel', ()=> dragging = false);
    el.addEventListener('dblclick', ()=>{
      value = startVal;
      onChange(value);
    });
    el.addEventListener('wheel', (e)=>{
      if(el.closest('.knob-cell').classList.contains('dis')) return;
      e.preventDefault();
      const range = max - min;
      value = Math.max(min, Math.min(max, value - Math.sign(e.deltaY) * (range*0.02)));
      onChange(value);
    }, {passive:false});
  }

  /* volume knob */
  function buildVolumeKnob(){
    const knob = document.getElementById('volKnob');
    attachKnobDrag(knob, (v)=>{
      volume = v;
      if(audioReady) masterGain.gain.setTargetAtTime(volume, actx.currentTime, 0.05);
      document.getElementById('volVal').textContent = Math.round(volume*100)+'%';
      const ind = document.getElementById('volIndicator');
      const angle = (volume) * 270 - 135;
      ind.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    }, 0, 1, volume);
    document.getElementById('volVal').textContent = Math.round(volume*100)+'%';
    document.getElementById('volIndicator').style.transform = `translateX(-50%) rotate(${volume*270-135}deg)`;
  }

  /* ============ EQ TOGGLE ============ */
  const eqSwitch = document.getElementById('eqSwitch');
  const eqToggleWrap = document.getElementById('eqToggleWrap');
  const eqToggleLabel = document.getElementById('eqToggleLabel');

  function setEqEnabled(state){
    eqEnabled = state;
    eqSwitch.classList.toggle('on', state);
    eqToggleLabel.textContent = state ? 'EQ ON' : 'EQ OFF';
    bands.forEach(b=>{
      document.getElementById('cell-'+b.key).classList.toggle('dis', !state);
    });
    applyAllBands();
    bands.forEach(b=> updateKnobVisual(b.key, bandValues[b.key]));
  }

  eqToggleWrap.addEventListener('click', ()=>{
    initAudio();
    setEqEnabled(!eqEnabled);
  });

  /* ============ INIT ============ */
  buildKnobs();
  buildVolumeKnob();
  buildPlaylist();
  setEqEnabled(false);
  updatePlayUI();
  selectTrack(0);

})();
