<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Adrien</title>
<style>
* {margin:0;padding:0;box-sizing:border-box;}
body,html {height:100%;width:100%;overflow:hidden;font-family:Arial, sans-serif;color:white;}
canvas {position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;background:black;}

/* écran d'accueil */
#intro {position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background:linear-gradient(135deg,#ff6ec4,#7873f5);color:white;z-index:9999;cursor:pointer;}
#intro h1 {font-size:60px;font-weight:bold;animation:moveName 3s infinite alternate;}
#intro p {position:absolute;bottom:20px;font-size:16px;}
@keyframes moveName {0%{transform:translateX(-20px);}50%{transform:translateX(20px);}100%{transform:translateX(-20px);}}

/* zone profil encadrée */
.center {position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;align-items:center;gap:20px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.2);backdrop-filter:blur(6px);padding:20px 30px;border-radius:16px;z-index:20;flex-wrap:wrap;}
.center h1 {margin:0;font-size:48px;font-weight:bold;animation:moveName 3s infinite alternate;}
.avatar {width:120px;height:120px;border-radius:50%;border:3px solid #7289da;transition:transform .3s;}
.avatar:hover {transform:scale(1.1);}
.username {font-size:2em;font-weight:bold;margin-top:15px;text-align:center;}
.status {margin-top:5px;font-size:1em;opacity:0.8;text-align:center;}
.subtitle {margin-top:10px;font-size:1.1em;color:#ccc;text-align:center;}

/* bouton ajouter musique */
.btn {flex-shrink:0;background:rgba(114,137,218,0.2);border:1px solid rgba(255,255,255,0.08);padding:12px 16px;border-radius:12px;cursor:pointer;font-weight:bold;text-align:center;}

/* socials */
.socials {position:absolute;top:50%;right:20px;display:flex;flex-direction:column;gap:15px;transform:translateY(-50%);}
.socials img {width:40px;height:40px;cursor:pointer;transition:transform .3s;}
.socials img:hover {transform:scale(1.2);}

/* lecteur audio */
.player {position:absolute;bottom:60px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.5);padding:10px 20px;border-radius:10px;}
.next-track {margin-top:5px;font-size:0.9em;color:#aaa;text-align:center;}

/* bouton muet flottant */
#mute-btn {position: fixed;bottom: 30px; left:30px; background: linear-gradient(135deg, #ff6ec4, #7873f5); border:none; color:#fff; font-size:24px; padding:15px; border-radius:50%; cursor:pointer; box-shadow:0 8px 20px rgba(0,0,0,0.3); animation:float 2s ease-in-out infinite; z-index:9999; transition: transform 0.2s;}
#mute-btn:hover {transform:scale(1.2);}
@keyframes float {0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
@media(max-width:768px){#mute-btn{font-size:20px;padding:12px;bottom:20px;left:20px;}}

/* message bienvenue */
.welcome {position:absolute;top:20px;left:50%;transform:translateX(-50%);font-size:2em;font-weight:bold;opacity:0;animation:fadeSlide 2s forwards;}
@keyframes fadeSlide {from{opacity:0;transform:translate(-50%,-20px);}to{opacity:1;transform:translate(-50%,0);}}

/* footer */
.footer-left {position:absolute;bottom:10px;left:20px;font-size:0.9em;color:#aaa;}
.footer-right {position:absolute;bottom:10px;right:20px;font-size:0.9em;color:#aaa;}
</style>
</head>
<body>

<!-- écran d'accueil -->
<div id="intro">
  <h1>Adrien</h1>
  <p>smite.life -2025-2026</p>
  <p>appuie pour entrer</p>
</div>

<!-- canvas fond animé -->
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

<!-- profil encadré avec bouton -->
<div class="center">
  <label for="file-input" class="btn">🎵 Ajouter musique</label>
  <input id="file-input" type="file" accept="audio/*" multiple style="display:none">
  <div>
    <h1 id="name">Adrien</h1>
    <img id="avatar" class="avatar" src="" alt="avatar discord">
    <div id="username" class="username">Adrien</div>
    <div id="status" class="status"></div>
    <div class="subtitle">Ne jamais abandonner.</div>
  </div>
</div>

<!-- lecteur audio -->
<div class="player">
  <audio id="audio" controls autoplay></audio>
  <div class="next-track">Prochaine musique : <span id="next">-</span></div>
</div>

<!-- bouton muet flottant -->
<button id="mute-btn">🔊</button>

<!-- compteur et date -->
<div class="footer-left">Visiteurs : <span id="counter">0</span></div>
<div class="footer-right" id="datetime"></div>

<script>
// --- intro click pour démarrer musique ---
const intro = document.getElementById('intro');
intro.addEventListener('click', () => {
  intro.style.display = 'none';
  audio.play().catch(()=>{});
});

// --- copier pseudo ---
function copyToClipboard(text){navigator.clipboard.writeText(text);alert(text+' copié !');}

// --- compteur visiteurs ---
let visits = localStorage.getItem('visits') || 0;
visits++;
localStorage.setItem('visits', visits);
document.getElementById('counter').textContent = visits;

// --- heure/date ---
function updateDateTime(){
  const now = new Date();
  const options = {hour:'2-digit',minute:'2-digit',second:'2-digit'};
  const time = now.toLocaleTimeString('fr-FR', options);
  const date = now.toLocaleDateString('fr-FR');
  document.getElementById('datetime').textContent = date+' '+time;
}
setInterval(updateDateTime,1000);
updateDateTime();

// --- audio playlist + ajout via bouton ---
const audio = document.getElementById('audio');
let playlist = ["Vertigo.mp3","LUA.mp3","Tacata.mp3"];
let current = 0;
const nextSpan = document.getElementById('next');
nextSpan.textContent = playlist[1] || "-";

fileInput.addEventListener('change', (e) => {
  const files = Array.from(e.target.files);
  files.forEach(f=>{
    const url = URL.createObjectURL(f);
    playlist.push(f.name);
    if(!audio.src){
      audio.src = url;
      audio.play();
    }
  });
  nextSpan.textContent = playlist[(current+1)%playlist.length];
});

audio.src = playlist[current];
audio.addEventListener('ended', ()=>{
  current=(current+1)%playlist.length;
  audio.src = playlist[current];
  audio.play();
  nextSpan.textContent = playlist[(current+1)%playlist.length];
});

// --- bouton muet ---
const muteBtn = document.getElementById("mute-btn");
let muted = false;
muteBtn.addEventListener("click",()=>{
  muted = !muted;
  audio.muted = muted;
  muteBtn.textContent = muted ? "🔇":"🔊";
});

// --- profil discord via Lanyard ---
const discordId="714900482933522447";
const avatarImg=document.getElementById("avatar");
const usernameEl=document.getElementById("username");
const statusEl=document.getElementById("status");

async function loadProfile(){
  try{
    const res = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
    const data = await res.json();
    if(data.success){
      const d = data.data;
      usernameEl.textContent = d.discord_user.username+"#"+d.discord_user.discriminator;
      if(d.discord_user.avatar){
        avatarImg.src = `https://cdn.discordapp.com/avatars/${d.discord_user.id}/${d.discord_user.avatar}.png?size=256`;
      } else {
        avatarImg.src = `https://cdn.discordapp.com/embed/avatars/${parseInt(d.discord_user.discriminator)%5}.png`;
      }
      statusEl.textContent = "status : "+d.discord_status;
    }
  }catch(e){statusEl.textContent="status : erreur";}
}
loadProfile();
setInterval(loadProfile,10000);

// --- fond animé pluie lettres ---
var cvs=document.getElementById('canvas');
cvs.height=window.innerHeight;
cvs.width=window.innerWidth;
var ctx=cvs.getContext('2d');
var fontSize=14;
var cols=Math.floor(cvs.width/fontSize);
var charSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
var drops=[];
for(var x=0;x<cols;x++) drops[x]=1;
function getRandomColor(){const colors=["#ff0055","#00ffea","#fffb00","#ff7b00","#ad00ff","#00ff4c","#ffffff"];return colors[Math.floor(Math.random()*colors.length)];}
function draw(){
  ctx.fillStyle="rgba(0,0,0,0.1)";
  ctx.fillRect(0,0,cvs.width,cvs.height);
  ctx.font=fontSize+"px monospace";
  for(var i=0;i<drops.length;i++){
    var text = charSet[Math.floor(Math.random()*charSet.length)];
    ctx.fillStyle=getRandomColor();
    ctx.fillText(text,i*fontSize,drops[i]*fontSize);
    if(drops[i]*fontSize>cvs.height && Math.random()>0.975) drops[i]=0;
    drops[i]++;
  }
}
setInterval(draw,33);
</script>
</body>
</html>
