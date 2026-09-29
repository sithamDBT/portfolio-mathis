window.PORTFOLIO_DATA = {
  "person": {
    "name": "Mathis Dobinet",
    "role": "Étudiant en informatique / Développeur",
    "location": "Bordeaux, France",
    "summary": "Je conçois des applications web et logicielles centrées sur la logique métier, les données et des interfaces utiles.",
    "gitlab": "",
    "email": "",
    "linkedin": "",
    "github": ""
  },
  "education": [
    {
      "title": "Baccalauréat général",
      "place": "Lycée Samuel Raapoto · Arue",
      "period": "Parcours secondaire",
      "description": "Spécialités suivies : physique-chimie, numérique et sciences informatiques et mathématiques.",
      "tags": [
        "NSI",
        "Mathématiques",
        "Physique-chimie"
      ],
      "image": "assets/education/lycee-samuel-raapoto.png",
      "imageAlt": "Entrée du Lycée Samuel Raapoto à Arue"
    },
    {
      "title": "BTS SIO · option SLAM",
      "place": "Lycée Diadème · Pirae",
      "period": "Avant le BUT",
      "description": "Formation orientée développement d’applications métiers, conception de bases de données et projets logiciels.",
      "tags": [
        "WinDev",
        "PHP",
        "MySQL",
        "React",
        "Firebase"
      ],
      "image": "assets/education/lycee-diademe.png",
      "imageAlt": "Emblème officiel du Lycée Diadème à Pirae"
    },
    {
      "title": "BUT Informatique",
      "place": "IUT de Bordeaux · Gradignan",
      "period": "Depuis 2025",
      "description": "Approfondissement du développement logiciel, des bases de données, de la qualité, du travail en équipe et de la conduite de projet.",
      "tags": [
        "Python",
        "PHP / Symfony",
        "Java",
        "SQL",
        "GitLab"
      ],
      "image": "assets/education/iut-bordeaux.png",
      "imageAlt": "Vue aérienne de l’IUT de Bordeaux à Gradignan",
      "dynamicPeriod": {
        "kind": "academic-level",
        "startYear": 2025,
        "startLevel": 2,
        "rolloverMonth": 9,
        "maxLevel": 3
      }
    }
  ],
  "technologies": [
    {
      "label": "Développement",
      "intro": "Des langages et frameworks utilisés dans des projets web, logiciels et VR.",
      "items": [
        "PHP",
        "Symfony",
        "Python",
        "Java",
        "JavaScript",
        "React",
        "HTML",
        "CSS",
        "C#",
        "Unity",
        "WinDev"
      ]
    },
    {
      "label": "Données",
      "intro": "Conception, requêtes et intégration des données dans les applications.",
      "items": [
        "SQL",
        "MySQL",
        "Oracle",
        "Firebase",
        "phpMyAdmin",
        "JSON"
      ]
    },
    {
      "label": "Outils & DevOps",
      "intro": "Versionnement, conteneurs et organisation de projet.",
      "items": [
        "Git",
        "GitLab",
        "GitHub",
        "Docker",
        "Podman",
        "Trello",
        "Figma"
      ]
    },
    {
      "label": "Environnements",
      "intro": "Environnements utilisés au quotidien ou pendant les projets.",
      "items": [
        "macOS",
        "Linux",
        "Windows"
      ]
    }
  ],
  "projects": [
    {
      "id": "concordia",
      "title": "Concordia",
      "category": "BUT",
      "type": "Projet BUT · équipe",
      "featured": true,
      "summary": "Adaptation numérique du jeu de société Concordia en Python, avec interface Pygame, architecture MVC et base Oracle.",
      "intro": "Un projet logiciel centré sur la logique métier d’un jeu de plateau, la représentation cartographique et l’intégration d’une interface graphique.",
      "context": "Projet réalisé en équipe dans le cadre du BUT Informatique. L’application s’appuie sur une architecture MVC, une interface Pygame et une base de données Oracle.",
      "problem": "Transformer les règles du jeu en interactions numériques cohérentes tout en conservant une carte lisible, des états de partie fiables et une interface suffisamment claire pour une démonstration.",
      "contribution": "J’ai notamment travaillé sur l’intégration de la carte Imperium, la calibration des villes et routes, l’affichage de la carte, ainsi que sur des éléments d’interface et de logique de jeu.",
      "features": [
        "Affichage et calibration d’une carte Imperium grand format",
        "Placement des villes et des routes à partir de données structurées",
        "Interface Pygame organisée autour d’une architecture MVC",
        "Gestion de la logique de partie et d’éléments du marché",
        "Connexion à une base Oracle",
        "Travail collaboratif avec GitLab"
      ],
      "tech": [
        "Python",
        "Pygame",
        "Oracle",
        "MVC",
        "GitLab"
      ],
      "challenges": [
        "Faire correspondre les coordonnées de l’image source avec celles de l’interface.",
        "Maintenir la cohérence entre affichage, état du jeu et données.",
        "Faire évoluer une interface complexe sans casser les interactions déjà présentes."
      ],
      "learnings": [
        "Structurer une application graphique avec MVC.",
        "Travailler sur des données de carte et des calibrations visuelles.",
        "Déboguer une logique métier répartie entre plusieurs modules."
      ],
      "competencies": [
        "Réaliser un développement d’application",
        "Gérer des données",
        "Collaborer au sein d’une équipe",
        "Conduire un projet"
      ],
      "cardImage": "assets/projects/concordia/02.webp",
      "gallery": [
        {
          "src": "assets/projects/concordia/01.webp",
          "alt": "Écran de création d’une partie Concordia",
          "fit": "contain"
        },
        {
          "src": "assets/projects/concordia/03.webp",
          "alt": "Interface de jeu Concordia avec plateau, main et informations joueur",
          "fit": "contain"
        },
        {
          "src": "assets/projects/concordia/04.webp",
          "alt": "Fenêtre d’action et carte Concordia",
          "fit": "contain"
        },
        {
          "src": "assets/projects/concordia/05.webp",
          "alt": "Marché et sélection de cartes dans Concordia",
          "fit": "contain"
        },
        {
          "src": "assets/projects/concordia/06.webp",
          "alt": "Carte Imperium et routes du projet Concordia",
          "fit": "contain"
        },
        {
          "src": "assets/projects/concordia/07.webp",
          "alt": "Vue de partie Concordia avec interface complète",
          "fit": "contain"
        }
      ],
      "hasDetail": true,
      "heroImage": "assets/projects/concordia/02.webp",
      "heroFit": "contain"
    },
    {
      "id": "shufflepuck-vr",
      "title": "Shufflepuck VR",
      "category": "BUT",
      "type": "Projet BUT · binôme",
      "featured": true,
      "summary": "Jeu de palet en réalité virtuelle développé avec Unity, avec adversaire contrôlé par une IA, score et niveaux de difficulté.",
      "intro": "Un prototype VR conçu pour un casque autonome, avec physique de jeu, interactions joueur, adversaire automatique et menu de paramètres.",
      "context": "Projet réalisé en binôme dans une UE d’introduction au développement VR.",
      "problem": "Créer une boucle de jeu simple mais crédible en VR, avec des collisions stables, une IA compréhensible et des réglages de difficulté.",
      "contribution": "J’ai travaillé sur le comportement du palet, les raquettes PC/VR, l’IA, le score, le menu de difficulté, les sons et plusieurs éléments de gameplay.",
      "features": [
        "Raquette jouable en environnement PC et VR",
        "IA qui suit la position du palet",
        "Vitesse minimale et maximale du palet",
        "Score et condition de fin de partie",
        "Difficulté et nombre de points configurables",
        "Obstacle animé et effets sonores"
      ],
      "tech": [
        "Unity 6",
        "C#",
        "XR",
        "GitLab"
      ],
      "challenges": [
        "Stabiliser les collisions et les interactions en VR.",
        "Éviter des comportements incohérents de l’IA et du palet.",
        "Gérer les transitions entre menu, partie et fin de partie."
      ],
      "learnings": [
        "Comprendre la physique et les collisions dans Unity.",
        "Gérer des entrées différentes entre PC et VR.",
        "Construire une boucle de jeu complète et testable."
      ],
      "competencies": [
        "Réaliser un développement d’application",
        "Optimiser des applications",
        "Collaborer au sein d’une équipe"
      ],
      "coverStyle": "vr",
      "hasDetail": true
    },
    {
      "id": "robot-football",
      "title": "RoboFoot — compétitions de football robotisé",
      "category": "BUT",
      "type": "Projet BUT · équipe de 6",
      "featured": true,
      "summary": "Application Symfony pour organiser des compétitions de football robotisé, gérer les équipes, générer les rencontres et suivre les résultats.",
      "intro": "Une application web métier développée en équipe pour administrer des compétitions, depuis les inscriptions jusqu’aux résultats.",
      "context": "Projet réalisé à l’IUT de Bordeaux avec une organisation Agile Scrum et un suivi des User Stories dans GitLab.",
      "problem": "Automatiser une organisation sportive contenant de nombreuses contraintes : équipes, phases de compétition, terrains, horaires, forfaits et résultats.",
      "contribution": "Contribution au développement collectif de l’application Symfony, à la logique métier et au travail d’équipe organisé avec GitLab.",
      "features": [
        "Gestion des utilisateurs, équipes et compétitions",
        "Génération automatique des rencontres et plannings",
        "Gestion des forfaits et saisie des résultats",
        "Export des plannings au format iCal",
        "Interface Twig / Bootstrap",
        "Suivi des User Stories et merge requests dans GitLab"
      ],
      "tech": [
        "PHP",
        "Symfony",
        "Twig",
        "MySQL",
        "Bootstrap",
        "GitLab",
        "Scrum"
      ],
      "challenges": [
        "Générer des plannings cohérents avec plusieurs contraintes.",
        "Assurer l’intégrité des données entre compétitions, équipes et rencontres.",
        "Coordonner les changements réalisés en parallèle par six personnes."
      ],
      "learnings": [
        "Travailler avec l’architecture MVC de Symfony.",
        "Concevoir des fonctionnalités à partir de User Stories.",
        "Collaborer avec des branches, merges, issues et démonstrations régulières."
      ],
      "competencies": [
        "Réaliser un développement d’application",
        "Optimiser des applications",
        "Gérer des données",
        "Conduire un projet",
        "Collaborer au sein d’une équipe"
      ],
      "hasDetail": true,
      "cardImage": "assets/projects/robot-football/01.webp",
      "gallery": [
        {
          "src": "assets/projects/robot-football/03.webp",
          "alt": "Capture de l’application RoboFoot — vue 3",
          "fit": "contain"
        },
        {
          "src": "assets/projects/robot-football/04.webp",
          "alt": "Capture de l’application RoboFoot — vue 4",
          "fit": "contain"
        },
        {
          "src": "assets/projects/robot-football/05.webp",
          "alt": "Capture de l’application RoboFoot — vue 5",
          "fit": "contain"
        },
        {
          "src": "assets/projects/robot-football/06.webp",
          "alt": "Capture de l’application RoboFoot — vue 6",
          "fit": "contain"
        },
        {
          "src": "assets/projects/robot-football/07.webp",
          "alt": "Capture de l’application RoboFoot — vue 7",
          "fit": "contain"
        },
        {
          "src": "assets/projects/robot-football/08.webp",
          "alt": "Capture de l’application RoboFoot — vue 8",
          "fit": "contain"
        },
        {
          "src": "assets/projects/robot-football/09.webp",
          "alt": "Capture de l’application RoboFoot — vue 9",
          "fit": "contain"
        },
        {
          "src": "assets/projects/robot-football/10.webp",
          "alt": "Capture de l’application RoboFoot — vue 10",
          "fit": "contain"
        },
        {
          "src": "assets/projects/robot-football/11.webp",
          "alt": "Capture de l’application RoboFoot — vue 11",
          "fit": "contain"
        },
        {
          "src": "assets/projects/robot-football/12.webp",
          "alt": "Capture de l’application RoboFoot — vue 12",
          "fit": "contain"
        },
        {
          "src": "assets/projects/robot-football/13.webp",
          "alt": "Capture de l’application RoboFoot — vue 13",
          "fit": "contain"
        }
      ],
      "heroImage": "assets/projects/robot-football/01.webp",
      "heroFit": "contain"
    },
    {
      "id": "easytahiti-app",
      "title": "Application web mobile EASYTahiti",
      "category": "Stage",
      "type": "Stage BUT2 · EASYTahiti",
      "featured": true,
      "summary": "Application Symfony permettant aux clients de consulter des activités par île, gérer des favoris et utiliser un parcours adapté au mobile.",
      "intro": "Une application web mobile développée pour accompagner les clients EASYTahiti pendant leur séjour en Polynésie française.",
      "context": "Stage de huit semaines à Papeete. Le projet a été recentré au fil du stage pour obtenir une base fonctionnelle réaliste et maintenable.",
      "problem": "Les clients avaient besoin d’accéder rapidement à des informations fiables et à des activités selon l’île de leur séjour, tandis que l’équipe interne devait pouvoir gérer les contenus et les validations.",
      "contribution": "Analyse du besoin, conception des parcours, organisation de la base de données et développement d’une première version de l’application avec un espace client mobile et un espace d’administration.",
      "features": [
        "Choix d’une île et consultation des activités associées",
        "Fiche détaillée d’une activité",
        "Gestion des favoris",
        "Back-office pour les contenus, validations, signalements et utilisateurs",
        "Interface responsive pensée différemment pour client et administration",
        "Organisation des données autour des îles, activités, utilisateurs et signalements"
      ],
      "tech": [
        "PHP",
        "Symfony",
        "MySQL",
        "JavaScript",
        "HTML",
        "CSS",
        "Docker",
        "Git"
      ],
      "challenges": [
        "Recentrer le périmètre pour tenir dans huit semaines.",
        "Organiser des données fiables autour des îles et activités.",
        "Concevoir deux expériences différentes : mobile côté client, bureau côté administration."
      ],
      "learnings": [
        "Transformer un besoin métier en parcours utilisateur.",
        "Structurer une application Symfony complète.",
        "Tester et corriger une interface responsive dans un contexte professionnel."
      ],
      "competencies": [
        "Réaliser un développement d’application",
        "Gérer des données",
        "Conduire un projet",
        "Organiser son environnement professionnel"
      ],
      "cardImage": "assets/projects/easytahiti-app/01.webp",
      "gallery": [
        {
          "src": "assets/projects/easytahiti-app/02.webp",
          "alt": "Capture de l’application EASYTahiti — vue 2",
          "fit": "contain"
        },
        {
          "src": "assets/projects/easytahiti-app/03.webp",
          "alt": "Capture de l’application EASYTahiti — vue 3",
          "fit": "contain"
        },
        {
          "src": "assets/projects/easytahiti-app/04.webp",
          "alt": "Capture de l’application EASYTahiti — vue 4",
          "fit": "contain"
        },
        {
          "src": "assets/projects/easytahiti-app/05.webp",
          "alt": "Capture de l’application EASYTahiti — vue 5",
          "fit": "contain"
        },
        {
          "src": "assets/projects/easytahiti-app/06.webp",
          "alt": "Capture de l’application EASYTahiti — vue 6",
          "fit": "contain"
        },
        {
          "src": "assets/projects/easytahiti-app/07.webp",
          "alt": "Capture de l’application EASYTahiti — vue 7",
          "fit": "contain"
        },
        {
          "src": "assets/projects/easytahiti-app/08.webp",
          "alt": "Capture de l’application EASYTahiti — vue 8",
          "fit": "contain"
        },
        {
          "src": "assets/projects/easytahiti-app/09.webp",
          "alt": "Capture de l’application EASYTahiti — vue 9",
          "fit": "contain"
        },
        {
          "src": "assets/projects/easytahiti-app/10.webp",
          "alt": "Capture de l’application EASYTahiti — vue 10",
          "fit": "contain"
        }
      ],
      "report": "assets/documents/Rapport-stage-BUT2-EASYTahiti.pdf",
      "hasDetail": true,
      "heroImage": "assets/projects/easytahiti-app/01.webp",
      "heroFit": "contain"
    },
    {
      "id": "ivea-leave",
      "title": "Gestion des congés IVEA",
      "category": "Stage",
      "type": "Stage BTS · IVEA",
      "featured": false,
      "summary": "Application React conçue pour digitaliser les demandes de congés et leur validation par les différents responsables.",
      "intro": "Une application web destinée à remplacer un processus RH manuel par un flux de demande et de validation plus lisible.",
      "context": "Stage de six semaines chez IVEA, revendeur de matériel informatique basé au Centre Vaima à Papeete.",
      "problem": "Le processus de congés était géré manuellement, avec une charge de travail importante et peu de visibilité pour les responsables.",
      "contribution": "Développement d’une application web avec gestion des rôles, workflow de validation, suivi des demandes et interface RH.",
      "features": [
        "Centralisation des demandes de congés",
        "Workflow employé → responsable → direction → RH",
        "Gestion des rôles et droits d’accès",
        "Tableau de bord RH",
        "Planning visuel des congés validés",
        "Notifications et mises à jour de statut"
      ],
      "tech": [
        "React",
        "Firebase",
        "Material UI"
      ],
      "challenges": [
        "Représenter clairement un workflow avec plusieurs niveaux de validation.",
        "Adapter l’interface aux besoins des employés et du service RH.",
        "Structurer l’application pour rester évolutive malgré une durée de stage courte."
      ],
      "learnings": [
        "Développer une application web orientée besoin métier.",
        "Utiliser Firebase dans un projet React.",
        "Recueillir et reformuler un besoin professionnel."
      ],
      "competencies": [
        "Travailler en mode projet",
        "Mettre à disposition un service informatique",
        "Organiser son environnement professionnel"
      ],
      "hasDetail": true,
      "cardImage": "assets/projects/ivea-leave/01.webp",
      "gallery": [
        {
          "src": "assets/projects/ivea-leave/02.webp",
          "alt": "Capture de l’application de gestion des congés IVEA — vue 2",
          "fit": "contain"
        },
        {
          "src": "assets/projects/ivea-leave/03.webp",
          "alt": "Capture de l’application de gestion des congés IVEA — vue 3",
          "fit": "contain"
        },
        {
          "src": "assets/projects/ivea-leave/04.webp",
          "alt": "Capture de l’application de gestion des congés IVEA — vue 4",
          "fit": "contain"
        },
        {
          "src": "assets/projects/ivea-leave/05.webp",
          "alt": "Capture de l’application de gestion des congés IVEA — vue 5",
          "fit": "contain"
        },
        {
          "src": "assets/projects/ivea-leave/06.webp",
          "alt": "Capture de l’application de gestion des congés IVEA — vue 6",
          "fit": "contain"
        },
        {
          "src": "assets/projects/ivea-leave/07.webp",
          "alt": "Capture de l’application de gestion des congés IVEA — vue 7",
          "fit": "contain"
        }
      ],
      "heroImage": "assets/projects/ivea-leave/01.webp",
      "heroFit": "contain"
    },
    {
      "id": "tahiti-logiciel-association",
      "title": "Gestion d’association",
      "category": "Stage",
      "type": "Stage BTS · TahitiLogiciel",
      "featured": false,
      "summary": "Application WinDev pour gérer les adhérents, cotisations, produits et factures d’une association.",
      "intro": "Un projet de gestion métier réalisé pendant un stage de première année de BTS SIO.",
      "context": "Stage de six semaines chez TahitiLogiciel, entreprise spécialisée dans les solutions logicielles professionnelles à Papeete.",
      "problem": "Centraliser les informations d’une association et préparer une organisation modulaire autour des adhérents, cotisations, produits et facturation.",
      "contribution": "Analyse du besoin, conception de la base, structuration des modules et développement des premières interfaces sous WinDev.",
      "features": [
        "Gestion des adhérents",
        "Suivi des cotisations",
        "Gestion des produits",
        "Facturation",
        "Base de données structurée",
        "Organisation modulaire de l’application"
      ],
      "tech": [
        "WinDev",
        "Base de données"
      ],
      "challenges": [
        "Prendre en main un nouvel environnement de développement.",
        "Passer d’un besoin général à des modules fonctionnels précis.",
        "Structurer les données avant de développer les écrans."
      ],
      "learnings": [
        "Modéliser un besoin métier.",
        "Découvrir WinDev.",
        "Organiser un projet en modules cohérents."
      ],
      "competencies": [
        "Gérer le patrimoine informatique",
        "Travailler en mode projet",
        "Organiser son environnement professionnel"
      ],
      "hasDetail": true,
      "cardImage": "assets/projects/tahiti-logiciel-association/01.webp",
      "gallery": [
        {
          "src": "assets/projects/tahiti-logiciel-association/02.webp",
          "alt": "Capture de l’application de gestion d’association TahitiLogiciel — vue 2",
          "fit": "contain"
        },
        {
          "src": "assets/projects/tahiti-logiciel-association/03.webp",
          "alt": "Capture de l’application de gestion d’association TahitiLogiciel — vue 3",
          "fit": "contain"
        }
      ],
      "heroImage": "assets/projects/tahiti-logiciel-association/01.webp",
      "heroFit": "contain"
    },
    {
      "id": "library-windev",
      "title": "Bibliothèque · application WinDev",
      "category": "BTS",
      "type": "Projet BTS",
      "featured": false,
      "summary": "Application de gestion de bibliothèque pour les adhérents, emprunts, retours et rapports imprimables.",
      "intro": "Un logiciel de gestion développé sous WinDev 28, centré sur la logique de prêt et le suivi des adhérents.",
      "context": "Projet scolaire de BTS SIO visant à construire une application fonctionnelle de gestion de bibliothèque.",
      "problem": "Permettre à une structure de suivre ses lecteurs, les exemplaires empruntés et les retours sans multiplier les manipulations.",
      "contribution": "Développement des écrans de gestion, recherche, emprunts, retours et rapports filtrés.",
      "features": [
        "CRUD des adhérents",
        "Recherche et navigation entre les fiches",
        "Enregistrement des prêts et retours",
        "Historique par lecteur",
        "Tableau des ouvrages empruntés",
        "Rapports filtrés par période ou statut"
      ],
      "tech": [
        "WinDev 28"
      ],
      "challenges": [
        "Relier proprement les entités adhérents, ouvrages et prêts.",
        "Garder une navigation rapide malgré plusieurs écrans métiers."
      ],
      "learnings": [
        "Renforcer la logique métier.",
        "Manipuler des données relationnelles depuis une application desktop."
      ],
      "competencies": [
        "Gérer le patrimoine informatique",
        "Travailler en mode projet"
      ],
      "hasDetail": true,
      "cardImage": "assets/projects/library-windev/01.webp",
      "gallery": [
        {
          "src": "assets/projects/library-windev/02.webp",
          "alt": "Capture de l’application WinDev de gestion de bibliothèque — vue 2",
          "fit": "contain"
        },
        {
          "src": "assets/projects/library-windev/03.webp",
          "alt": "Capture de l’application WinDev de gestion de bibliothèque — vue 3",
          "fit": "contain"
        },
        {
          "src": "assets/projects/library-windev/04.webp",
          "alt": "Capture de l’application WinDev de gestion de bibliothèque — vue 4",
          "fit": "contain"
        }
      ],
      "heroImage": "assets/projects/library-windev/01.webp",
      "heroFit": "contain"
    },
    {
      "id": "library-web",
      "title": "Bibliothèque · application web",
      "category": "BTS",
      "type": "Projet BTS",
      "featured": false,
      "summary": "Site PHP / MySQL pour consulter les adhérents, gérer les emprunts et retours et suivre les exemplaires.",
      "intro": "Une version web de la gestion de bibliothèque, conçue autour de PHP et d’une base MySQL.",
      "context": "Projet de BTS SIO consacré au développement web et à la manipulation de données relationnelles.",
      "problem": "Rendre les principales opérations d’une bibliothèque accessibles depuis une interface web.",
      "contribution": "Développement des listes, formulaires, recherches, prêts, retours et filtres.",
      "features": [
        "Listes d’adhérents",
        "Gestion des emprunts et retours",
        "Ajout d’ouvrages",
        "Consultation des exemplaires",
        "Recherche lecteur",
        "Filtres et listes ciblées"
      ],
      "tech": [
        "PHP",
        "MySQL",
        "HTML"
      ],
      "challenges": [
        "Sécuriser et organiser les opérations de lecture/écriture en base.",
        "Garder des pages compréhensibles malgré plusieurs cas de gestion."
      ],
      "learnings": [
        "Développer un CRUD web.",
        "Manipuler une base MySQL depuis PHP."
      ],
      "competencies": [
        "Réaliser un développement d’application",
        "Gérer des données"
      ],
      "hasDetail": false,
      "cardImage": "assets/projects/library-web/01.webp",
      "heroImage": "assets/projects/library-web/01.webp",
      "heroFit": "contain"
    },
    {
      "id": "myblog",
      "title": "MyBlog",
      "category": "BTS",
      "type": "Projet BTS",
      "featured": false,
      "summary": "Mini-blog permettant de publier des articles et de commenter les contenus des autres utilisateurs.",
      "intro": "Un petit projet web construit autour de la publication de contenu et de l’interaction entre utilisateurs.",
      "context": "Projet scolaire visant à manipuler les bases d’un site dynamique et des contenus générés par les utilisateurs.",
      "problem": "Permettre de créer, afficher et commenter des publications avec une structure simple.",
      "contribution": "Développement des fonctions de publication et de commentaires.",
      "features": [
        "Création d’articles",
        "Titre, texte et description",
        "Lecture des publications",
        "Commentaires"
      ],
      "tech": [
        "Web",
        "Base de données"
      ],
      "challenges": [
        "Organiser les relations entre utilisateurs, articles et commentaires."
      ],
      "learnings": [
        "Comprendre la logique d’un contenu dynamique et communautaire."
      ],
      "competencies": [
        "Réaliser un développement d’application",
        "Gérer des données"
      ],
      "hasDetail": false,
      "cardImage": "assets/projects/myblog/01.webp",
      "heroImage": "assets/projects/myblog/01.webp",
      "heroFit": "contain"
    },
    {
      "id": "tahitiheritage",
      "title": "TahitiHeritage",
      "category": "BTS",
      "type": "Projet BTS",
      "featured": false,
      "summary": "Site de découverte de Tahiti et de ses îles autour des paysages, lieux, légendes et éléments culturels.",
      "intro": "Un site de découverte du Fenua conçu pour rassembler des lieux et informations culturelles dans une navigation accessible.",
      "context": "Projet web réalisé pendant le BTS autour du patrimoine de la Polynésie française.",
      "problem": "Présenter des informations culturelles et géographiques de manière plus simple à parcourir.",
      "contribution": "Création des pages de découverte et de l’organisation des contenus.",
      "features": [
        "Fiches de lieux",
        "Contenus culturels",
        "Photographies",
        "Organisation par destination",
        "Carte interactive"
      ],
      "tech": [
        "Web",
        "Carte interactive"
      ],
      "challenges": [
        "Hiérarchiser des contenus très différents sans surcharger la navigation."
      ],
      "learnings": [
        "Concevoir une navigation éditoriale.",
        "Associer contenu textuel, visuels et localisation."
      ],
      "competencies": [
        "Développer la présence en ligne d’une organisation",
        "Réaliser un développement d’application"
      ],
      "hasDetail": false,
      "cardImage": "assets/projects/tahitiheritage/01.webp",
      "heroImage": "assets/projects/tahitiheritage/01.webp",
      "heroFit": "contain"
    },
    {
      "id": "vaa-news",
      "title": "Actualité du va’a",
      "category": "BTS",
      "type": "Projet BTS",
      "featured": false,
      "summary": "Site consacré au va’a en Polynésie : actualités, résultats, portraits et éléments historiques.",
      "intro": "Un site thématique pensé comme un point d’entrée vers l’actualité et la culture du va’a.",
      "context": "Projet web réalisé pendant le BTS autour d’un sujet local et culturel.",
      "problem": "Rassembler dans un même espace des informations sportives et culturelles autour du va’a.",
      "contribution": "Organisation des contenus et développement des pages thématiques.",
      "features": [
        "Actualités",
        "Résultats de courses",
        "Portraits de rameurs",
        "Histoire et culture du va’a"
      ],
      "tech": [
        "Web"
      ],
      "challenges": [
        "Organiser un contenu éditorial qui mélange actualité, résultats et histoire."
      ],
      "learnings": [
        "Construire une arborescence de contenu claire."
      ],
      "competencies": [
        "Développer la présence en ligne d’une organisation"
      ],
      "hasDetail": false,
      "cardImage": "assets/projects/vaa-news/01.webp",
      "heroImage": "assets/projects/vaa-news/01.webp",
      "heroFit": "contain"
    }
  ],
  "experiences": [
    {
      "id": "easytahiti",
      "company": "EASYTahiti",
      "location": "Papeete · Polynésie française",
      "period": "Stage BUT2 · 8 semaines",
      "mission": "Développer une première version d’une application web mobile pour accompagner les clients pendant leur séjour.",
      "cover": "assets/companies/easytahiti-logo.png",
      "coverAlt": "Logo EASYTahiti",
      "mediaType": "logo",
      "tech": [
        "PHP",
        "Symfony",
        "MySQL",
        "JavaScript",
        "Docker",
        "Git",
        "Trello"
      ],
      "projectId": "easytahiti-app"
    },
    {
      "id": "ivea",
      "company": "IVEA",
      "location": "Centre Vaima · Papeete",
      "period": "Stage BTS · 6 semaines",
      "mission": "Digitaliser le processus de demande et de validation des congés.",
      "cover": "assets/companies/ivea-logo.svg",
      "coverAlt": "Logo IVEA",
      "mediaType": "logo",
      "tech": [
        "React",
        "Firebase",
        "Material UI"
      ],
      "projectId": "ivea-leave"
    },
    {
      "id": "tahiti-logiciel",
      "company": "TahitiLogiciel",
      "location": "Papeete · Polynésie française",
      "period": "Stage BTS · 6 semaines",
      "mission": "Concevoir une application de gestion pour une association avec WinDev.",
      "cover": "assets/companies/tahitilogiciel-logo.svg",
      "coverAlt": "Logo TahitiLogiciel",
      "mediaType": "logo",
      "tech": [
        "WinDev",
        "Base de données"
      ],
      "projectId": "tahiti-logiciel-association"
    },
    {
      "id": "easytahiti-cdd",
      "company": "EASYTahiti",
      "location": "Papeete · Polynésie française",
      "period": "CDD · 4 semaines",
      "mission": "Participer au traitement opérationnel des réservations et des dossiers de voyage.",
      "cover": "assets/companies/easytahiti-logo.png",
      "coverAlt": "Bureaux EASYTahiti à Papeete",
      "tech": [
        "Outils métier",
        "Messagerie",
        "Gestion de réservations"
      ]
    }
  ]
};
