<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Adrien — page</title>
  <style>
    :root{--accent:#7289da;--muted:#cfcfcf}
    *{box-sizing:border-box}
    html,body{height:100%;margin:0;background:#000;color:#fff;font-family:Inter,Arial,Helvetica,sans-serif}
    /* canvas background (subtle falling letters, no neon glow) */
    canvas#bg{position:fixed;inset:0;z-index:0;width:100%;height:100%;display:block;background:#000}

    /* header / social */
    .top-right{position:fixed;top:18px;right:18px;z-index:30;display:flex;gap:10px;align-items:center}
    .social-btn{width:42px;height:42px;border-radius:10px;background:rgba(255,255,255,0.04);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform .18s ease,background .18s}
    .social-btn:hover{transform:translateY(-6px)}
    .social-btn img{width:22px;height:22px;display:block}

    /* center card */
    .center{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:20;text-align:center;padding:28px;background:linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02));border-radius:14px;border:1px solid rgba(255,255,255,0.06);min-width:320px;backdrop-filter:blur(4px)}

    .site-name{font-weight:800;font-size:42px;letter-spacing:1px;margin-bottom:6px;display:inline-block}
    /* floating / wave animation for "Adrien" */
    .site-name span{display:inline-block;padding:0 4px;transform-origin:center;animation:float 3s ease-in-out infinite}
    .site-name span:nth-child(2){animation-delay:.08s}
    .site-name span:nth-child(3){animation-delay:.16s}
    .site-name span:nth-child(4){animation-delay:.24s}
    .site-name span:nth-child(5){animation-delay:.32s}
    .site-name span:nth-child(6){animation-delay:.4s}

    @keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)}}

    .avatar{width:116px;height:116px;border-radius:999px;border:3px solid var(--accent);display:block;margin:14px auto 8px;object-fit:cover}
    .username{font-size:20px;font-weight:700}
    .status{font-size:13px;color:var(--muted);margin-top:6px}
    .subtitle{color:#d6d6d6;margin-top:10px;font-size:14px}

    /* small helpers */
    .actions{display:flex;gap:8px;justify-content:center;margin-top:12px}
    .btn{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.04);padding:8px 12px;border-radius:10px;color:#fff;cursor:pointer;transition:transform .15s}
    .btn:hover{transform:translateY(-4px)}

    /* player */
    .player-wrap{position:fixed;left:50%;transform:translateX(-50%);bottom:18px;z-index:25;background:rgba(0,0,0,0.6);padding:10px 14px;border-radius:12px;border:1px solid rgba(255,255,255,0.05);display:flex;gap:10px;align-items:center}
    .playlist{max-width:360px;display:flex;flex-direction:column;gap:6px}
    .track{font-size:13px;color:#eee;padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.02);display:flex;justify-content:space-between;align-items:center}
    .track.playing{background:rgba(114,137,218,0.12)}
    input[type=file]{display:none}

    /* bottom-left and bottom-right */
    .bottom-left{position:fixed;left:18px;bottom:18px;color:var(--muted);z-index:25;font-size:13px}
    .bottom-right{position:fixed;right:18px;bottom:18px;color:var(--muted);z-index:25;text-align:right}

    /* welcome */
    .welcome{position:fixed;top:18px;left:18px;z-index:25;padding:8px 12px;background:rgba(114,137,218,0.12);border-radius:10px;color:#fff;transform:translateY(-10px);opacity:0;animation:welcomeIn .9s ease forwards .2s}
    @keyframes welcomeIn{to{transform:none;opacity:1}}

    /* small responsive tweaks */
    @media(max-width:520px){.site-name{font-size:28px}.center{padding:16px}.player-wrap{max-width:calc(100% - 40px);left:50%;transform:translateX(-50%)} }
  </style>
</head>
<body>

  <!-- canvas background (kept subtle, not neon) -->
  <canvas id="bg"></canvas>

  <!-- welcome message -->
  <div class="welcome">Bienvenue</div>

  <!-- top-right social icons -->
  <div class="top-right">
    <div class="social-btn" title="instagram" id="btn-instagram">
      <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 24 24'><path d='M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm6 2a5 5 0 110 10 5 5 0 010-10z'/></svg>"/>
    </div>
    <div class="social-btn" title="snapchat" id="btn-snapchat">
      <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 24 24'><path d='M12 2s5.5.5 6.8 3.1c1.2 2.4.5 5.4.5 5.4s-1 .5-1.4 1.6c-.4 1.1.2 2.3.2 2.3S17.8 15 16 15c-1.8 0-2.5-.8-3.5-1.6C11 12.6 9.2 12 8 12c-1.2 0-3.2.2-4.1 1 .4-.7.7-1.3.3-2.4-.4-1.2-2.1-1.3-2.1-1.3s-.6-3 .5-5.4C6.5 2.5 12 2 12 2z'/></svg>"/>
    </div>
    <div class="social-btn" title="telegram" id="btn-telegram">
      <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 24 24'><path d='M2 12l7 3 3-2 8-4-18 3z'/></svg>"/>
    </div>
    <div class="social-btn" title="discord - copier pseudo" id="btn-discord-copy">
      <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' fill='%23fff'><path d='M12 18c.9 0 1.7 1 1.7 2.3S12.9 22.7 12 22.7 10.3 21.7 10.3 20 11.1 18 12 18zm24 0c.9 0 1.7 1 1.7 2.3s-.8 2.4-1.7 2.4-1.7-1-1.7-2.3 0-2.4 1.7-2.4zM24 6C13.5 6 6 11.1 6 11.1v17.8C6 35 13.5 40 24 40s18-5 18-10.9V11.1C42 11.1 34.5 6 24 6z'/></svg>"/>
    </div>
  </div>

  <!-- center profile card -->
  <div class="center" role="region" aria-label="profil">
    <div class="site-name" aria-hidden>
      <!-- animated letters for Adrien -->
      <span>A</span><span>d</span><span>r</span><span>i</span><span>e</span><span>n</span>
    </div>

     <!-- profil discord -->
  <div class="center">
    <img id="avatar" class="avatar" src="" alt="avatar discord">
    <div id="username" class="username">Adrien</div>
    <div id="status" class="status"></div>
    <div class="subtitle">Ne jamais abandonner.</div>
  </div>

  <!-- lecteur audio -->
<div class="player">
    <audio id="audio" controls autoplay>
      <source src="Vertigo.mp3" type="audio/mpeg">
    </audio>
    <div class="next-track">Prochaine musique : <span id="next"></span></div>
  </div>

 <!-- Bouton muet flottant -->
<button id="mute-btn">🔊</button>

<style>
#mute-btn {
    position: fixed;
    bottom: 30px;   /* distance par rapport au bas */
    left: 30px;     /* distance par rapport à gauche */
    background: linear-gradient(135deg, #ff6ec4, #7873f5);
    border: none;
    color: #fff;
    font-size: 24px;
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    animation: float 2s ease-in-out infinite;
    z-index: 9999;
    transition: transform 0.2s;
}

#mute-btn:hover {
    transform: scale(1.2);
}

/* Animation flottante */
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}

/* Optionnel : bouton plus petit sur mobile */
@media (max-width: 768px) {
    #mute-btn {
        font-size: 20px;
        padding: 12px;
        bottom: 20px;
        left: 20px;
    }
}
</style>


  <!-- player -->
  <div class="player-wrap" aria-live="polite">
    <div class="playlist" id="playlist"></div>
    <audio id="audio" controls preload="auto"></audio>
  </div>

  <!-- bottom-left visitor counter -->
  <div class="bottom-left">visites : <span id="visits">0</span></div>
  <!-- bottom-right date/time -->
  <div class="bottom-right"><div id="time">--:--:--</div><div id="date">--</div></div>

  <script>
    // ---------------------
    // CONFIG (modifie si besoin)
    // ---------------------
    const DISCORD_ID = "714900482933522447"; // pour Lanyard (profile live)
    const DISCORD_PSEUDO_COPY = "king_shadow2"; // pseudo à copier quand on clique
    const INSTAGRAM_URL = "https://www.instagram.com/spectra_964?igsh=dmt1NG05ZmYxc2M4";
    const SNAPCHAT_URL = "https://www.snapchat.com/add/adrien_bayle?share_id=bDwEDKKrba4&locale=fr-FR";
    const TELEGRAM_COPY = "@Xylo1500";

    // ---------------------
    // Lanyard: récupère profil discord (avatar + pseudo + status)
    // ---------------------
    const avatarEl = document.getElementById('avatar');
    const usernameEl = document.getElementById('username');
    const statusEl = document.getElementById('status');

    async function loadDiscord(){
      try{
        const r = await fetch('https://api.lanyard.rest/v1/users/'+DISCORD_ID);
        const j = await r.json();
        if(j.success && j.data){
          const d = j.data;
          usernameEl.textContent = d.discord_user.username + '#' + d.discord_user.discriminator;
          if(d.discord_user.avatar){
            avatarEl.src = `https://cdn.discordapp.com/avatars/${d.discord_user.id}/${d.discord_user.avatar}.png?size=256`;
          } else {
            avatarEl.src = `https://cdn.discordapp.com/embed/avatars/${parseInt(d.discord_user.discriminator) % 5}.png`;
          }
          statusEl.textContent = 'status : ' + d.discord_status;
        } else {
          usernameEl.textContent = 'profil introuvable';
          avatarEl.src = '';
          statusEl.textContent = '';
        }
      }catch(e){
        usernameEl.textContent = 'erreur api';
        statusEl.textContent = '';
      }
    }
    loadDiscord();
    setInterval(loadDiscord,10000);

 /* barre réseaux sociaux */
    .socials {position:absolute;top:50%;right:20px;display:flex;flex-direction:column;gap:15px;transform:translateY(-50%);}
    .socials img {width:40px;height:40px;cursor:pointer;transition:transform .3s;}
    .socials img:hover {transform:scale(1.2);}

    /* lecteur audio */
    .player {position:absolute;bottom:60px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.5);padding:10px 20px;border-radius:10px;}
    .next-track {margin-top:5px;font-size:0.9em;color:#aaa;text-align:center;}

    /* heure/date + compteur */
    .footer-left {position:absolute;bottom:10px;left:20px;font-size:0.9em;color:#aaa;}
    .footer-right {position:absolute;bottom:10px;right:20px;font-size:0.9em;color:#aaa;}

    /* message bienvenue */
    .welcome {position:absolute;top:20px;left:50%;transform:translateX(-50%);font-size:2em;font-weight:bold;opacity:0;animation:fadeSlide 2s forwards;}

    /* animations */
    @keyframes fadeSlide {from{opacity:0;transform:translate(-50%,-20px);}to{opacity:1;transform:translate(-50%,0);}}
  </style>
</head>
<body>
 <!-- Ecran d'accueil avec ton nom -->
<div id="intro" style="position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background:linear-gradient(135deg,#ff6ec4,#7873f5);color:white;z-index:9999;">
    <h1 id="name" style="font-size:60px;font-weight:bold;animation:moveName 3s infinite alternate;">Adrien</h1>
    <p style="position:absolute;bottom:20px;font-size:16px;">smite.life -2025-2026</p>
  <p>appuie pour entrer</p>
</div>

<style>
@keyframes moveName {
    0% { transform: translateX(-20px); }
    50% { transform: translateX(20px); }
    100% { transform: translateX(-20px); }
}
</style>

<script>
const intro = document.getElementById('intro');

intro.addEventListener('click', () => {
    intro.style.display = 'none'; // disparaît au clic
});
</script>

  <!-- fond animé -->
  <canvas id="canvas"></canvas>

  <!-- message bienvenue -->
  <div class="welcome">Bienvenue</div>

  <!-- barre réseaux sociaux -->
  <div class="socials">
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png" alt="discord" onclick="copyToClipboard('king_shadow2')" title="Copier Discord">
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="instagram" onclick="window.open('https://www.instagram.com/spectra_964?igsh=dmt1NG05ZmYxc2M4','_blank')" title="Instagram">
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111808.png" alt="snapchat" onclick="window.open('https://www.snapchat.com/add/adrien_bayle?share_id=bDwEDKKrba4&locale=fr-FR','_blank')" title="Snapchat">
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="telegram" onclick="copyToClipboard('@Xylo1500')" title="Copier Telegram">
  </div>
    // ---------------------
    // visitor counter (simple localStorage counter)
    // ---------------------
    const visitsEl = document.getElementById('visits');
    (function(){
      try{
        const key = 'site_visits_total_v1';
        let n = parseInt(localStorage.getItem(key) || '0',10);
        n = n + 1;
        localStorage.setItem(key,String(n));
        visitsEl.textContent = n;
      }catch(e){visitsEl.textContent='-'}
    })();

    // ---------------------
    // time & date updater
    // ---------------------
    function pad(n){return n<10?('0'+n):n}
    function updateTime(){
      const now = new Date();
      document.getElementById('time').textContent = pad(now.getHours())+':'+pad(now.getMinutes())+':'+pad(now.getSeconds());
      document.getElementById('date').textContent = now.toLocaleDateString();
    }
    updateTime();
    setInterval(updateTime,1000);

    // ---------------------
    // audio playlist with upload, autoplay, loop -> next track
    // ---------------------
    const fileInput = document.getElementById('file-input');
    const playlistEl = document.getElementById('playlist');
    const audio = document.getElementById('audio');
    let tracks = [];
    let current = 0;

    function renderPlaylist(){
      playlistEl.innerHTML='';
      tracks.forEach((t,i)=>{
        const div = document.createElement('div');
        div.className = 'track' + (i===current ? ' playing' : '');
        div.innerHTML = `<span>${t.name}</span><button class='btn' data-i='${i}'>jouer</button>`;
        playlistEl.appendChild(div);
      });
      // attach play buttons
      playlistEl.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',e=>{
        const idx = Number(e.currentTarget.dataset.i);
        playIndex(idx);
      }));
    }

    function playIndex(i){
      if(tracks.length===0) return;
      current = i%tracks.length;
      audio.src = tracks[current].url;
      audio.play().catch(()=>{/* autoplay blocked: user must interact */});
      renderPlaylist();
    }

    fileInput.addEventListener('change',(e)=>{
      const files = Array.from(e.target.files);
      files.forEach(f=>{
        const url = URL.createObjectURL(f);
        tracks.push({name:f.name,url});
      });
      if(tracks.length && !audio.src) playIndex(0);
      renderPlaylist();
    });

    audio.addEventListener('ended',()=>{
      if(tracks.length===0) return;
      current = (current+1)%tracks.length;
      playIndex(current);
    });

    // try autoplay on load (may be blocked by browser)
    window.addEventListener('load',()=>{
      setTimeout(()=>{ if(tracks.length>0){ audio.play().catch(()=>{/* blocked */}) } },800);
    });

    // ---------------------
    // simple falling letters background (no glow/neon)
    // ---------------------
    const cvs = document.getElementById('bg');
    const ctx = cvs.getContext('2d');
    function resize(){
      cvs.width = innerWidth; cvs.height = innerHeight;
      cols = Math.floor(cvs.width / 14);
      drops = Array.from({length:cols}).map(()=>Math.floor(Math.random()*cvs.height/14));
    }
    let cols=0; let drops=[];
    const charSet = 'ADRIEN'.split('');
    resize();
    window.addEventListener('resize',resize);

    function bgTick(){
      ctx.fillStyle = 'rgba(0,0,0,0.08)';
      ctx.fillRect(0,0,cvs.width,cvs.height);
      ctx.font = '14px monospace';
      for(let i=0;i<cols;i++){
        const ch = charSet[Math.floor(Math.random()*charSet.length)];
        ctx.fillStyle = '#bfbfbf';
        ctx.fillText(ch, i*14, drops[i]*14);
        drops[i] = drops[i] + 1;
        if(drops[i]*14 > cvs.height && Math.random()>0.975) drops[i]=0;
      }
      requestAnimationFrame(bgTick);
    }
    requestAnimationFrame(bgTick);

  </script>
</body>
</html>
