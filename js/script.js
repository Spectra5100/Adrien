// ==========================================
// FONCTION COPIER DANS LE PRESSE-PAPIER
// ==========================================
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert(text + ' copié !');
}

// ==========================================
// COMPTEUR DE VISITEURS
// ==========================================
let visits = localStorage.getItem('visits') || 0;
visits++;
localStorage.setItem('visits', visits);
document.getElementById('counter').textContent = visits;

// ==========================================
// HEURE ET DATE EN TEMPS RÉEL
// ==========================================
function updateDateTime() {
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const time = now.toLocaleTimeString('fr-FR', options);
  const date = now.toLocaleDateString('fr-FR');
  document.getElementById('datetime').textContent = date + ' ' + time;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// ==========================================
// PLAYLIST AUTOMATIQUE
// ==========================================
const audio = document.getElementById('audio');
const playlist = [
  'assets/music/LUA.mp3',
  'assets/music/Tacata.mp3',
  'assets/music/Vertigo.mp3'
];
let current = 0;
const nextSpan = document.getElementById('next');

// Afficher le nom de la prochaine musique
function getTrackName(path) {
  return path.split('/').pop().replace('.mp3', '');
}
nextSpan.textContent = getTrackName(playlist[1]) || '-';

// Lancer la première musique au chargement
window.addEventListener('load', () => {
  audio.src = playlist[current];
  audio.play().catch(() => {
    console.log('Autoplay bloqué, nécessite une interaction utilisateur');
  });
});

// Passer à la musique suivante automatiquement
audio.addEventListener('ended', () => {
  current = (current + 1) % playlist.length;
  audio.src = playlist[current];
  audio.play();
  const nextIndex = (current + 1) % playlist.length;
  nextSpan.textContent = getTrackName(playlist[nextIndex]);
});

// ==========================================
// PROFIL DISCORD VIA LANYARD API
// ==========================================
const discordId = '714900482933522447';
const avatarImg = document.getElementById('avatar');
const usernameEl = document.getElementById('username');
const statusEl = document.getElementById('status');

async function loadProfile() {
  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
    const data = await res.json();
    
    if (data.success) {
      const d = data.data;
      
      // Afficher le nom d'utilisateur
      usernameEl.textContent = d.discord_user.username;
      
      // Charger l'avatar
      if (d.discord_user.avatar) {
        avatarImg.src = `https://cdn.discordapp.com/avatars/${d.discord_user.id}/${d.discord_user.avatar}.png?size=256`;
      } else {
        const defaultIndex = parseInt(d.discord_user.discriminator) % 5;
        avatarImg.src = `https://cdn.discordapp.com/embed/avatars/${defaultIndex}.png`;
      }
      
      // Afficher le statut (online, idle, dnd, offline)
      const statusTranslations = {
        online: 'En ligne',
        idle: 'Absent',
        dnd: 'Ne pas déranger',
        offline: 'Hors ligne'
      };
      statusEl.textContent = 'Status : ' + (statusTranslations[d.discord_status] || d.discord_status);
    }
  } catch (e) {
    console.error('Erreur lors du chargement du profil:', e);
    statusEl.textContent = 'Status : Erreur de chargement';
  }
}

// Charger le profil au démarrage et actualiser toutes les 10 secondes
loadProfile();
setInterval(loadProfile, 10000);

// ==========================================
// ANIMATION FOND MATRIX (PLUIE DE LETTRES)
// ==========================================
const canvas = document.getElementById('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext('2d');

const fontSize = 14;
const cols = Math.floor(canvas.width / fontSize);
const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
const drops = [];

// Initialiser les gouttes
for (let x = 0; x < cols; x++) {
  drops[x] = 1;
}

// Couleurs aléatoires pour l'effet Matrix coloré
function getRandomColor() {
  const colors = ['#ff0055', '#00ffea', '#fffb00', '#ff7b00', '#ad00ff', '#00ff4c', '#ffffff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Dessiner l'animation
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = fontSize + 'px monospace';
  
  for (let i = 0; i < drops.length; i++) {
    const text = charSet[Math.floor(Math.random() * charSet.length)];
    ctx.fillStyle = getRandomColor();
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
    // Réinitialiser la goutte une fois en bas
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// Lancer l'animation (30 FPS)
setInterval(draw, 33);

// Redimensionner le canvas si la fenêtre change de taille
window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
