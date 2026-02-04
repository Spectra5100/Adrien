# 🎮 Adrien - Portfolio Personnel

Site personnel avec effet Matrix, profil Discord en temps réel et lecteur audio.

![Preview](https://img.shields.io/badge/status-online-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Fonctionnalités

- 🌈 **Effet Matrix animé** - Pluie de lettres colorées en fond
- 👤 **Profil Discord en direct** - Via l'API Lanyard
- 🎵 **Lecteur audio automatique** - Playlist en boucle
- 🔗 **Liens réseaux sociaux** - Discord, Instagram, Snapchat, Telegram
- 📊 **Compteur de visiteurs** - Stocké localement
- ⏰ **Horloge en temps réel** - Date et heure actualisées

## 🚀 Démarrage rapide

### 1. Cloner le projet
```bash
git clone https://github.com/Spectra5100/Adrien.git
cd Adrien
```

### 2. Ouvrir le site
Double-cliquez sur `index.html` ou utilisez un serveur local :

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx http-server
```

Puis ouvrez http://localhost:8000

## 📁 Structure du projet

```
Adrien/
├── index.html              # Page principale
├── css/
│   └── style.css          # Styles CSS
├── js/
│   └── script.js          # JavaScript (animations, API, etc.)
├── assets/
│   └── music/             # Fichiers audio
│       ├── LUA.mp3
│       ├── Tacata.mp3
│       └── Vertigo.mp3
├── README.md              # Documentation
└── CNAME                  # Configuration domaine personnalisé
```

## 🎨 Personnalisation

### Modifier votre ID Discord
Dans `js/script.js`, ligne 60 :
```javascript
const discordId = '714900482933522447'; // Remplacez par votre ID
```

### Changer les musiques
Ajoutez vos fichiers `.mp3` dans `assets/music/` et modifiez la playlist dans `js/script.js` :
```javascript
const playlist = [
  'assets/music/votre-musique-1.mp3',
  'assets/music/votre-musique-2.mp3'
];
```

### Modifier vos réseaux sociaux
Dans `index.html`, lignes 15-28, mettez à jour les liens et pseudos.

## 🛠️ Technologies utilisées

- **HTML5** - Structure
- **CSS3** - Design et animations
- **JavaScript vanilla** - Logique et interactivité
- **Canvas API** - Animation Matrix
- **Lanyard API** - Profil Discord en temps réel

## 🌐 Déploiement

### GitHub Pages
1. Allez dans **Settings** > **Pages**
2. Sélectionnez la branche `main`
3. Cliquez sur **Save**
4. Votre site sera disponible sur `https://spectra5100.github.io/Adrien/`

### Domaine personnalisé (optionnel)
Modifiez le fichier `CNAME` avec votre domaine :
```
votre-domaine.com
```

## 📱 Réseaux sociaux

- 🎮 **Discord** : king_shadow2
- 📸 **Instagram** : [@spectra_964](https://www.instagram.com/spectra_964)
- 👻 **Snapchat** : adrien_bayle
- ✈️ **Telegram** : @Xylo1500

## 📝 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

---

**Créé avec ❤️ par Adrien**

*"Ne jamais abandonner."*
