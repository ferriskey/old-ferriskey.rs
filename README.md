# Ferriskey 🦀

L'IAM pour ce qui vient ensuite.

Ferriskey est une solution IAM (Identity and Access Management) nouvelle génération conçue pour des performances élevées avec les humains et l'IA.

## ✨ Fonctionnalités

- **⚡ Rapide** - Écrit entièrement en Rust pour exploiter efficacement plusieurs cœurs de CPU et votre GPU
- **🧠 Intelligent** - Intégrez les prochains LLMs dans votre workflow pour générer, transformer et analyser les politiques
- **🤝 Collaboratif** - Chattez avec vos coéquipiers, écrivez des notes ensemble, et partagez votre écran et projet

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- pnpm

### Installation

```bash
# Cloner le repository
git clone https://github.com/ferriskey/ferriskey.git
cd ferriskey.rs

# Installer les dépendances
pnpm install

# Lancer en mode développement
pnpm dev

# Construire pour la production
pnpm build

# Prévisualiser la build de production
pnpm preview
```

## 🏗️ Structure du projet

```
ferriskey.rs/
├── public/          # Assets statiques
├── src/
│   ├── layouts/     # Layouts Astro
│   ├── pages/       # Pages du site
│   └── components/  # Composants réutilisables
├── astro.config.mjs # Configuration Astro
└── package.json     # Dépendances et scripts
```

## 🎨 Design

Cette landing page s'inspire du design de [Zed](https://zed.dev) avec :

- Navigation épurée avec backdrop blur
- Arrière-plan quadrillé animé
- Section hero centrée avec boutons d'action
- Capture d'écran interactive montrant du code Rust
- Témoignages de développeurs
- Footer complet avec liens organisés

## 🛠️ Technologies

- **Astro** - Framework web moderne
- **TypeScript/JavaScript** - Logique et interactivité
- **CSS** - Styling avec variables CSS custom
- **Inter** - Police de caractères

## 🔧 Commandes disponibles

| Commande | Action |
|----------|--------|
| `pnpm install` | Installe les dépendances |
| `pnpm dev` | Démarre le serveur de développement sur `localhost:4321` |
| `pnpm build` | Construit le site pour la production dans `./dist/` |
| `pnpm preview` | Prévisualise la build en local avant déploiement |

## 📝 Licence

MIT © 2025 Ferriskey Industries
