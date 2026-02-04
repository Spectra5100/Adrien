# 📋 GUIDE ÉTAPE PAR ÉTAPE - PUSH SUR GITHUB

## ✅ Ce qui a été fait

Votre projet a été réorganisé proprement :

```
Adrien/
├── index.html              ✅ HTML propre
├── css/
│   └── style.css          ✅ CSS séparé
├── js/
│   └── script.js          ✅ JavaScript séparé
├── assets/
│   └── music/             ✅ Musiques organisées
│       ├── LUA.mp3
│       ├── Tacata.mp3
│       └── Vertigo.mp3
├── README.md              ✅ Documentation complète
├── .gitignore             ✅ Fichiers à ignorer
└── CNAME                  ✅ Domaine personnalisé
```

## 🔧 Corrections apportées

1. ✅ **README.md nettoyé** - Contient maintenant de la documentation au lieu du code HTML
2. ✅ **Code structuré** - HTML, CSS et JS sont dans des fichiers séparés
3. ✅ **Chemins corrigés** - Les musiques pointent vers les bons fichiers
4. ✅ **Bug ligne 50 corrigé** - Balise HTML mal fermée réparée
5. ✅ **Responsive ajouté** - Le site s'adapte aux mobiles
6. ✅ **Code commenté** - Pour faciliter la maintenance

---

## 🚀 ÉTAPE PAR ÉTAPE : PUSH SUR GITHUB

### 📍 Étape 1 : Copier les nouveaux fichiers dans votre dossier local

Ouvrez votre terminal Windows (cmd) et tapez :

```bash
cd C:\Users\adriie\Adrien
```

Ensuite, **téléchargez** les fichiers que je vais vous fournir et **remplacez** tous les anciens fichiers par les nouveaux.

---

### 📍 Étape 2 : Vérifier que Git est configuré

```bash
git config --global user.name "VotreNom"
git config --global user.email "votre-email@example.com"
```

---

### 📍 Étape 3 : Initialiser Git (si pas déjà fait)

```bash
git init
```

---

### 📍 Étape 4 : Ajouter tous les fichiers

```bash
git add .
```

Cette commande ajoute TOUS les fichiers modifiés.

---

### 📍 Étape 5 : Créer un commit

```bash
git commit -m "✨ Réorganisation complète du projet - Code propre et structuré"
```

---

### 📍 Étape 6 : Lier au repository GitHub

Si ce n'est pas déjà fait :

```bash
git remote add origin https://github.com/Spectra5100/Adrien.git
```

Si vous avez déjà un remote, vérifiez avec :

```bash
git remote -v
```

---

### 📍 Étape 7 : Push vers GitHub

```bash
git branch -M main
git push -u origin main
```

Si Git vous demande vos identifiants :
- **Username** : Spectra5100
- **Password** : Utilisez un **Personal Access Token** (pas votre mot de passe GitHub)

#### Comment créer un Personal Access Token :
1. Allez sur GitHub.com
2. Cliquez sur votre **photo de profil** (en haut à droite)
3. **Settings** > **Developer settings** > **Personal access tokens** > **Tokens (classic)**
4. **Generate new token**
5. Cochez **repo** (accès complet aux repos)
6. **Generate token**
7. **COPIEZ** le token (vous ne pourrez plus le revoir !)
8. Utilisez ce token comme mot de passe

---

### 📍 Étape 8 : Vérifier sur GitHub

Allez sur https://github.com/Spectra5100/Adrien et vérifiez que tout est bien là !

---

## 🌐 BONUS : Activer GitHub Pages

1. Sur GitHub, allez dans **Settings** (de votre repo)
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous **Source**, sélectionnez **main** (branche)
4. Cliquez sur **Save**
5. Attendez 1-2 minutes
6. Votre site sera disponible sur : `https://spectra5100.github.io/Adrien/`

---

## ❓ Problèmes courants

### "Permission denied (publickey)"
➡️ Utilisez HTTPS au lieu de SSH :
```bash
git remote set-url origin https://github.com/Spectra5100/Adrien.git
```

### "Failed to push some refs"
➡️ Faites d'abord un pull :
```bash
git pull origin main --rebase
git push origin main
```

### "Nothing to commit"
➡️ Vérifiez que les fichiers ont changé :
```bash
git status
```

---

## 📞 Besoin d'aide ?

Si vous avez un problème à une étape, envoyez-moi une capture d'écran de l'erreur ! 🚀

---

**Bon courage ! Vous allez y arriver ! 💪**
