<!-- Profil encadré avec bouton Ajouter musique -->
<div class="center" style="display:flex;align-items:center;gap:20px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.2);backdrop-filter:blur(6px);padding:20px 30px;border-radius:16px;">

  <!-- bouton ajouter musique -->
  <label for="file-input" class="btn" style="flex-shrink:0;background:rgba(114,137,218,0.2);border:1px solid rgba(255,255,255,0.08);padding:12px 16px;border-radius:12px;cursor:pointer;font-weight:bold;">
    🎵 Ajouter musique
  </label>
  <input id="file-input" type="file" accept="audio/*" multiple style="display:none" />

  <!-- infos profil -->
  <div style="text-align:center;">
    <h1 id="name" style="margin:0;font-size:48px;font-weight:bold;animation:moveName 3s infinite alternate;">Adrien</h1>
    <img id="avatar" class="avatar" src="" alt="avatar discord" style="margin-top:10px;width:120px;height:120px;border-radius:50%;border:3px solid #7289da;">
    <div id="username" class="username">Adrien</div>
    <div id="status" class="status"></div>
    <div class="subtitle">Ne jamais abandonner.</div>
  </div>
</div>

<style>
@keyframes moveName {
  0% { transform: translateX(-20px); }
  50% { transform: translateX(20px); }
  100% { transform: translateX(-20px); }
}
</style>

<script>
const fileInput = document.getElementById('file-input');
const audio = document.getElementById('audio');
let playlist = ["Vertigo.mp3","LUA.mp3","Tacata.mp3"];
let current = 0;
const nextSpan = document.getElementById('next');
nextSpan.textContent = playlist[1] || "-";

fileInput.addEventListener('change', (e) => {
  const files = Array.from(e.target.files);
  files.forEach(f => {
    const url = URL.createObjectURL(f);
    playlist.push(f.name);
    // si c'est la première musique ajoutée et aucune source existante
    if(!audio.src) {
      audio.src = url;
      audio.play();
    }
  });
  nextSpan.textContent = playlist[(current+1)%playlist.length];
});

// gestion lecture automatique + next track
audio.addEventListener('ended', () => {
  if(playlist.length === 0) return;
  current = (current+1)%playlist.length;
  audio.src = playlist[current];
  audio.play();
  nextSpan.textContent = playlist[(current+1)%playlist.length];
});
</script>
