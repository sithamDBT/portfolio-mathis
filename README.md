# Portfolio — Mathis Dobinet

Portfolio personnel statique réalisé en **HTML, CSS et JavaScript natifs**. Le site présente mon parcours, mes expériences en entreprise, mes projets, mes technologies et ma veille technologique.

Aucune étape de compilation n’est nécessaire.

## Lancer le site

Le plus simple est de servir le dossier avec un petit serveur local :

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

L’ouverture directe de `index.html` fonctionne aussi pour la majorité du site, mais un serveur local reste préférable pour tester le comportement comme en production.

## Structure

```text
.
├── index.html                  # page principale
├── project.html               # page commune aux études de cas
├── assets/
│   ├── branding/              # identité du portfolio
│   ├── companies/             # visuels officiels des entreprises
│   ├── css/styles.css         # design, responsive et animations CSS
│   ├── documents/             # CV et rapports
│   ├── education/             # visuels du parcours scolaire
│   ├── icons/                 # favicon
│   ├── illustration/          # illustration principale
│   ├── js/
│   │   ├── data.js            # données des projets et expériences
│   │   ├── main.js            # rendu de la page principale
│   │   ├── motion.js          # animations et interactions visuelles
│   │   ├── project.js         # rendu des études de cas et galerie
│   │   └── theme.js           # thème clair/sombre et menu mobile
│   ├── logos/                 # logos des technologies
│   ├── projects/              # captures des projets
│   └── videos/                # média de veille technologique
```

## Gestion des projets

Le contenu est centralisé dans `assets/js/data.js`.

Pour un projet détaillé :

- `cardImage` définit l’image visible sur la carte de la page d’accueil ;
- `heroImage` définit la vue principale dans l’étude de cas ;
- `gallery` contient uniquement les **captures secondaires** ;
- `hasDetail: true` active la page `project.html?id=<id>` ;
- `hasDetail: false` conserve une carte simple sans faux lien.

La galerie déduplique également les chemins au rendu afin d’éviter qu’une même capture soit affichée deux fois.

## Visuels des expériences

Les cartes d’expérience utilisent l’identité de l’entreprise et non les captures du projet :

- **EASYTahiti** : visuel officiel fourni avec le logo EASYTahiti sur le lagon ;
- **IVEA** : visuel IVEA avec la mention Apple Premium Reseller ;
- **TahitiLogiciel** : logo officiel TahitiLogiciel.

Les captures des applications restent réservées à la section **Projets** et aux études de cas.

## Dates dynamiques

Les éléments qui dépendent du temps ne sont pas écrits en dur :

- l’année du footer est calculée avec `new Date().getFullYear()` ;
- le niveau du BUT est calculé selon l’année universitaire dans `main.js` à partir de `dynamicPeriod` dans `data.js`.

Les dates historiques et durées de stage restent évidemment fixes.

## Animations

Le site utilise des animations inspirées des interfaces Apple, en restant légères :

- apparitions progressives avec flou au scroll ;
- parallaxe douce sur le hero, les captures et certaines cartes ;
- profondeur 3D très légère au survol ;
- lumière ambiante suivant le pointeur ;
- boutons magnétiques à faible amplitude ;
- reflet discret sur certains éléments vitrés ;
- barre de progression de lecture ;
- transitions animées des filtres et du changement de thème lorsque l’API View Transitions est disponible ;
- quadrillage animé en fonction du scroll.

Toutes les animations importantes respectent `prefers-reduced-motion`.

## Thèmes et accessibilité

Le portfolio possède un thème clair et un thème sombre mémorisés avec `localStorage`.

Le site prend également en charge :

- la navigation clavier et `:focus-visible` ;
- `prefers-reduced-motion` ;
- `prefers-reduced-transparency` ;
- `prefers-contrast` ;
- le lazy-loading des images non prioritaires ;
- des textes alternatifs sur les visuels utiles ;
- un lien d’accès rapide au contenu.

## Contact

Le formulaire utilise **EmailJS** côté navigateur. Les identifiants actuellement présents dans `assets/js/main.js` correspondent à la configuration du formulaire existant. Si le service ou le template EmailJS change, il faut mettre à jour ces valeurs au même endroit.

## Maintenance

Avant d’ajouter une nouvelle capture de projet :

1. la convertir en WebP lorsque c’est pertinent ;
2. la ranger dans `assets/projects/<slug>/` ;
3. vérifier qu’elle n’est pas identique à une image déjà présente ;
4. ne pas remettre la `heroImage` dans `gallery` ;
5. renseigner un `alt` descriptif dans `data.js`.

Cette organisation garde le portfolio léger, cohérent et facile à maintenir.
