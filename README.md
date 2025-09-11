<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Adrien</title>
  <style>
    * {margin:0;padding:0;box-sizing:border-box;}
    body,html {height:100%;width:100%;overflow:hidden;font-family:Arial, sans-serif;color:white;}
    canvas {position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;background:black;}

    /* zones principales */
    .center {position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;background:rgba(0,0,0,0.5);padding:20px;border-radius:15px;box-shadow:0 0 15px rgba(0,0,0,0.5);}
    .avatar {width:120px;height:120px;border-radius:50%;border:3px solid #7289da;transition:transform .3s;}
    .avatar:hover {transform:scale(1.1);}

    .username {font-size:2em;font-weight:bold;margin-top:15px;}
    .status {margin-top:5px;font-size:1em;opacity:0.8;}
    .subtitle {margin-top:10px;font-size:1.1em;color:#ccc;}

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

  <!-- profil discord -->
  <div class="center">
    <img id="avatar" class="avatar" src="" alt="avatar discord">
    <div id="username" class="username">Adrien</div>
    <div id="status" class="status"></div>
    <div class="subtitle">Ne jamais abandonner.</div>
  </div>

  <!-- lecteur audio -->
<div class="player">
    <audio id="audio" controls autoplay></audio>
    <div class="next-track">Prochaine musique : <span id="next"></span></div>
    <div style="margin-top:10px; text-align:center;">
      <input type="file" id="fileInput" accept="audio/*" multiple>
    </div>
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

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}

@media (max-width: 768px) {
    #mute-btn {
        font-size: 20px;
        padding: 12px;
        bottom: 20px;
        left: 20px;
    }
}
</style>

<script>
const muteBtn = document.getElementById("mute-btn");
const audioElements = document.querySelectorAll("audio"); 
let muted = false;

muteBtn.addEventListener("click", () => {
    muted = !muted;
    audioElements.forEach(audio => audio.muted = muted);
    muteBtn.textContent = muted ? "🔇" : "🔊";
});
</script>

  <!-- compteur + heure/date -->
  <div class="footer-left">Visiteurs : <span id="counter">0</span></div>
  <div class="footer-right" id="datetime"></div>

  <script>
    function copyToClipboard(text){navigator.clipboard.writeText(text);alert(text + ' copié !');}

    let visits = localStorage.getItem('visits') || 0;
    visits++;
    localStorage.setItem('visits', visits);
    document.getElementById('counter').textContent = visits;

    function updateDateTime(){
      const now = new Date();
      const options = {hour:'2-digit',minute:'2-digit',second:'2-digit'};
      const time = now.toLocaleTimeString('fr-FR', options);
      const date = now.toLocaleDateString('fr-FR');
      document.getElementById('datetime').textContent = date + ' ' + time;
    }
    setInterval(updateDateTime,1000);updateDateTime();

    const audio = document.getElementById('audio');
    const fileInput = document.getElementById('fileInput');
    let playlist = ["Vertigo.mp3","LUA.mp3","Tacata.mp3"];
    let current = 0;
    const nextSpan = document.getElementById('next');
    nextSpan.textContent = playlist[1] || "-";

    window.addEventListener('load', () => {
      audio.src = playlist[current];
      audio.play().catch(() => {
        console.log("Autoplay bloqué, nécessite une interaction");
      });
    });

    audio.addEventListener('ended',()=>{
      current=(current+1)%playlist.length;
      audio.src=playlist[current];
      audio.play();
      const nextIndex = (current+1)%playlist.length;
      nextSpan.textContent = playlist[nextIndex];
    });

    fileInput.addEventListener('change', (e) => {
      playlist = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      current = 0;
      audio.src = playlist[current];
      audio.play();
      const nextIndex = (current+1)%playlist.length;
      nextSpan.textContent = playlist[nextIndex];
    });

    const discordId = "714900482933522447";
    const avatarImg = document.getElementById("avatar");
    const usernameEl = document.getElementById("username");
    const statusEl = document.getElementById("status");

    async function loadProfile(){
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
        const data = await res.json();
        if(data.success){
          const d = data.data;
          usernameEl.textContent = d.discord_user.username + "#" + d.discord_user.discriminator;
          if(d.discord_user.avatar){
            avatarImg.src = `https://cdn.discordapp.com/avatars/${d.discord_user.id}/${d.discord_user.avatar}.png?size=256`;
          } else {
            avatarImg.src = `https://cdn.discordapp.com/embed/avatars/${parseInt(d.discord_user.discriminator)%5}.png`;
          }
          statusEl.textContent = "status : " + d.discord_status;
        }
      } catch(e){
        statusEl.textContent = "status : erreur";
      }
    }
    loadProfile();
    setInterval(loadProfile,10000);

    var cvs = document.getElementById('canvas');
    cvs.height = window.innerHeight;
    cvs.width = window.innerWidth;
    var ctx = cvs.getContext('2d');
    var fontSize = 14;
    var cols = Math.floor(cvs.width / fontSize);
    var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
    var drops = [];
    for (var x = 0; x < cols; x++) drops[x] = 1;

    function getRandomColor(){
      const colors = ["#ff0055","#00ffea","#fffb00","#ff7b00","#ad00ff","#00ff4c","#ffffff"];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function draw(){
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.fillRect(0,0,cvs.width,cvs.height);
      ctx.font = fontSize + "px monospace";
      for (var i = 0; i < drops.length; i++) {
        var text = charSet[Math.floor(Math.random()*charSet.length)];
        ctx.fillStyle = getRandomColor();
        ctx.fillText(text, i*fontSize, drops[i]*fontSize);
        if(drops[i]*fontSize > cvs.height && Math.random()>0.975) drops[i]=0;
        drops[i]++;
      }
    }
    setInterval(draw,33);
  </script>
</body>
</html>
