<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {margin:0;padding:0;box-sizing:border-box;}
    body,html {height:100%;width:100%;overflow:hidden;font-family:Arial, sans-serif;color:white;}
    canvas {position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;background:black;}

    /* zones principales */
    .center {position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;}
    .avatar {width:120px;height:120px;border-radius:50%;border:3px solid #7289da;transition:transform .3s;}
    .avatar:hover {transform:scale(1.1);}

    .username {font-size:2em;font-weight:bold;margin-top:15px;}
    .status {margin-top:5px;font-size:1em;opacity:0.8;}
    .subtitle {margin-top:10px;font-size:1.1em;color:#ccc;}

    /* barre réseaux sociaux */
    .socials {position:absolute;top:20px;right:20px;display:flex;gap:15px;}
    .socials img {width:35px;height:35px;cursor:pointer;transition:transform .3s;}
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
    <audio id="audio" controls autoplay>
      <source src="Vertigo.mp3" type="audio/mpeg">
    </audio>
    <div class="next-track">Prochaine musique : <span id="next"></span></div>
  </div>

<audio id="musique" controls>
  <source src="media/Vertigo.mp3" type="audio/mpeg">
  Votre navigateur ne supporte pas la musique.
</audio>

  <!-- compteur + heure/date -->
  <div class="footer-left">Visiteurs : <span id="counter">0</span></div>
  <div class="footer-right" id="datetime"></div>

  <script>
    // --- copier pseudo ---
    function copyToClipboard(text){navigator.clipboard.writeText(text);alert(text + ' copié !');}

    // --- compteur visiteurs ---
    let visits = localStorage.getItem('visits') || 0;
    visits++;
    localStorage.setItem('visits', visits);
    document.getElementById('counter').textContent = visits;

    // --- heure et date ---
    function updateDateTime(){
      const now = new Date();
      const options = {hour:'2-digit',minute:'2-digit',second:'2-digit'};
      const time = now.toLocaleTimeString('fr-FR', options);
      const date = now.toLocaleDateString('fr-FR');
      document.getElementById('datetime').textContent = date + ' ' + time;
    }
    setInterval(updateDateTime,1000);updateDateTime();

    // --- playlist auto ---
    const audio = document.getElementById('audio');
    const playlist = ["Vertigo.mp3","LUA.mp3","Tacata.mp3"];
    let current = 0;
    const nextSpan = document.getElementById('next');
    nextSpan.textContent = playlist[1] || "-";

    audio.addEventListener('ended',()=>{
      current=(current+1)%playlist.length;
      audio.src=playlist[current];
      audio.play();
      const nextIndex = (current+1)%playlist.length;
      nextSpan.textContent = playlist[nextIndex];
    });

    // --- profil discord via Lanyard ---
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

    // --- fond animé pluie de lettres multicolores ---
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
