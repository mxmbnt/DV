// lib/blog.ts
// Couche de données blog — remplacer getAllPosts() et getPostBySlug()
// par des appels API/CMS (ex: Sanity, Contentful, Notion, Strapi, etc.)
// sans toucher aux composants de la page.

export type ContentBlock =
  | { type: 'intro'; content: string }
  | { type: 'section'; number: number; title: string; content: string; items?: string[] }
  | { type: 'conclusion'; content: string }

export interface BlogPost {
  slug: string
  category: string
  title: string
  description: string
  author: string
  authorRole: string
  date: string           // Format : "4 août 2025"
  readTime: string       // Ex : "4 min"
  heroTheme: 'blue' | 'purple' | 'dark' | 'green'
  image: string          // Chemin vers l'image dans /public
  content: ContentBlock[]
}

// ─── Données ────────────────────────────────────────────────────────────────
// Pour brancher une API, remplace ce tableau par un fetch() dans getAllPosts()

const blogPosts: BlogPost[] = [
  {
    slug: '5-elements-essentiels-site-web',
    category: 'Conseils',
    title: '5 éléments essentiels pour améliorer votre site web aujourd\'hui',
    description:
      'Découvrez les 5 points clés qui font la différence entre un site qui convertit et un site qui fait fuir vos visiteurs. Des optimisations simples à mettre en place dès maintenant.',
    author: 'Maxime Bonnet',
    authorRole: 'Fondateur Digital Vision',
    date: '4 août 2025',
    readTime: '4 min',
    heroTheme: 'blue',
    image: '/4jL68SwxLzabtOtXI6Aw0VaFtlA.avif',
    content: [
      {
        type: 'intro',
        content:
          'Votre site web est souvent le premier contact qu\'un client potentiel a avec votre entreprise. En quelques secondes, il se forge une opinion sur vous. Ces 5 éléments sont ceux que nous optimisons systématiquement chez nos clients pour maximiser les résultats.',
      },
      {
        type: 'section',
        number: 1,
        title: 'Une vitesse de chargement irréprochable',
        content:
          'Google et vos visiteurs sont sans pitié : si votre site met plus de 3 secondes à charger, vous perdez en moyenne 40% de votre trafic. Optimiser les images, activer le cache et choisir un hébergeur performant sont les premières étapes.',
        items: [
          'Compresser et convertir vos images au format WebP',
          'Activer la mise en cache navigateur',
          'Minifier votre CSS et JavaScript',
          'Utiliser un CDN pour les ressources statiques',
        ],
      },
      {
        type: 'section',
        number: 2,
        title: 'Un design 100% responsive et mobile-first',
        content:
          'Plus de 60% du trafic web vient aujourd\'hui des smartphones. Un site non adapté au mobile perd des clients chaque jour. Le design mobile-first n\'est plus une option, c\'est une nécessité absolue.',
      },
      {
        type: 'section',
        number: 3,
        title: 'Des appels à l\'action (CTA) clairs et visibles',
        content:
          'Chaque page doit répondre à la question : "Que voulez-vous que le visiteur fasse ?". Un bouton bien placé, bien formulé et visuellement distinct peut multiplier par 3 vos conversions.',
        items: [
          'Utiliser des verbes d\'action ("Obtenir un devis", "Commencer maintenant")',
          'Créer un contraste visuel fort avec le reste de la page',
          'Limiter à 1-2 CTA par page pour éviter la confusion',
        ],
      },
      {
        type: 'section',
        number: 4,
        title: 'Un contenu authentique et orienté bénéfices',
        content:
          'Vos visiteurs ne veulent pas savoir ce que vous faites, ils veulent savoir ce que vous pouvez faire pour eux. Reformulez chaque message en termes de bénéfices concrets pour votre cible.',
      },
      {
        type: 'section',
        number: 5,
        title: 'Des preuves sociales bien mises en avant',
        content:
          'Avis clients, témoignages, logos de partenaires, chiffres clés : la preuve sociale rassure et convainc là où le discours commercial échoue. Placez-les stratégiquement sur votre page d\'accueil et vos pages de conversion.',
      },
      {
        type: 'conclusion',
        content:
          'Ces 5 éléments ne sont pas des "nice-to-have", ce sont des fondations. Si l\'un d\'eux manque sur votre site actuel, vous laissez de l\'argent sur la table chaque jour. Vous souhaitez qu\'on réalise un audit gratuit de votre site ? Contactez-nous, nous vous donnons un retour honnête en 24h.',
      },
    ],
  },
  {
    slug: 'site-internet-attirer-clients',
    category: 'Stratégie',
    title: 'Comment un site internet peut vous aider à attirer plus de clients',
    description:
      'Un bon site web ne se contente pas d\'exister. Découvrez comment il peut devenir votre meilleur commercial, disponible 24h/24 pour capter et convertir vos prospects.',
    author: 'Maxime Bonnet',
    authorRole: 'Fondateur Digital Vision',
    date: '12 août 2025',
    readTime: '5 min',
    heroTheme: 'purple',
    image: '/Db0iNAYWlhHug2UFs44xwhmxnac.avif',
    content: [
      {
        type: 'intro',
        content:
          'Aujourd\'hui, avant de vous appeler, avant de pousser la porte de votre boutique, vos futurs clients vous cherchent sur internet. Un site web bien conçu est le meilleur commercial que vous n\'aurez jamais — il travaille pour vous 24h/24, 7j/7, sans congés ni salaire.',
      },
      {
        type: 'section',
        number: 1,
        title: 'Être visible partout, tout le temps',
        content:
          'La visibilité en ligne, c\'est votre vitrine digitale. Un site optimisé pour le référencement (SEO) permet à vos futurs clients de vous trouver précisément au moment où ils ont besoin de vos services. C\'est une présence permanente qui ne dort jamais.',
        items: [
          'Référencement local pour capter les clients de votre zone géographique',
          'Apparaître sur Google Maps avec une fiche Google Business complète',
          'Blogging régulier pour attirer du trafic qualifié via des mots-clés ciblés',
        ],
      },
      {
        type: 'section',
        number: 2,
        title: 'Renforcer votre crédibilité instantanément',
        content:
          'Un site professionnel envoie un signal fort : vous êtes sérieux et fiable. À l\'inverse, l\'absence de site — ou un site vieillissant — crée immédiatement de la méfiance. 75% des consommateurs jugent la crédibilité d\'une entreprise sur la qualité de son site web.',
      },
      {
        type: 'section',
        number: 3,
        title: 'Attirer du trafic qualifié grâce au SEO',
        content:
          'Contrairement à la publicité payante qui s\'arrête dès que vous coupez le budget, le SEO est un investissement durable. Un contenu bien optimisé peut vous apporter des visiteurs qualifiés pendant des années sans coût supplémentaire.',
        items: [
          'Recherche de mots-clés stratégiques pour votre secteur',
          'Optimisation technique de votre site (vitesse, structure, balisage)',
          'Création de contenu à valeur ajoutée qui répond aux questions de vos clients',
        ],
      },
      {
        type: 'section',
        number: 4,
        title: 'Convertir les visiteurs en clients',
        content:
          'Attirer du trafic, c\'est bien. Le convertir, c\'est mieux. Un site pensé pour la conversion guide naturellement le visiteur vers l\'action souhaitée : remplir un formulaire de contact, appeler, acheter. Chaque élément de design est au service de cet objectif.',
      },
      {
        type: 'conclusion',
        content:
          'Un site web performant n\'est pas une dépense, c\'est un investissement avec un retour mesurable. Nos clients voient en moyenne une multiplication par 3 de leurs demandes de contact dans le premier mois suivant la mise en ligne. Envie de vivre la même chose ? Parlons de votre projet.',
      },
    ],
  },
  {
    slug: 'transformer-business-en-ligne',
    category: 'Tendances',
    title: 'Comment un site internet peut transformer votre business en ligne',
    description:
      'Le digital a changé la façon dont les entreprises se développent. Nous explorons les stratégies concrètes pour faire de votre présence en ligne un vrai moteur de croissance.',
    author: 'Maxime Bonnet',
    authorRole: 'Fondateur Digital Vision',
    date: '20 août 2025',
    readTime: '6 min',
    heroTheme: 'dark',
    image: '/ao3JQIw4L5hlYpLuyKNJFxnG90.avif',
    content: [
      {
        type: 'intro',
        content:
          'La transformation digitale ne concerne pas que les grandes entreprises. Les TPE et PME qui ont sauté le pas le confirment : une présence en ligne bien construite peut littéralement changer l\'échelle d\'un business. Voici comment.',
      },
      {
        type: 'section',
        number: 1,
        title: 'Automatiser vos processus commerciaux',
        content:
          'Un site web moderne peut qualifier vos leads, envoyer des emails de suivi automatiques, planifier des rendez-vous et même gérer vos devis — le tout sans intervention humaine. Ce temps gagné, vous pouvez l\'investir dans votre cœur de métier.',
        items: [
          'Formulaires de contact intelligents avec qualification automatique',
          'Intégration d\'un calendrier de prise de rendez-vous en ligne',
          'Envoi automatisé d\'emails de bienvenue et de suivi',
          'Chatbot pour répondre aux questions fréquentes 24h/24',
        ],
      },
      {
        type: 'section',
        number: 2,
        title: 'Sortir de votre zone géographique',
        content:
          'Un site web efface les frontières. Votre expertise peut désormais rayonner bien au-delà de votre ville ou région. Plusieurs de nos clients ont signé leurs premiers clients internationaux dans les mois suivant la refonte de leur site.',
      },
      {
        type: 'section',
        number: 3,
        title: 'Créer une relation de confiance sur la durée',
        content:
          'Un blog, une newsletter, du contenu de valeur régulier : votre site devient un point de contact permanent avec votre audience. Vous n\'attendez plus qu\'on vous trouve, vous construisez une communauté fidèle autour de votre expertise.',
        items: [
          'Blog d\'expertise pour démontrer votre savoir-faire',
          'Newsletter pour maintenir le lien avec vos prospects',
          'Études de cas et témoignages clients pour rassurer',
        ],
      },
      {
        type: 'section',
        number: 4,
        title: 'Mesurer et optimiser en continu',
        content:
          'Contrairement à une vitrine physique, un site web vous donne des données précises sur le comportement de vos visiteurs. Vous savez d\'où ils viennent, ce qu\'ils regardent, où ils abandonnent. Ces données sont de l\'or pour améliorer continuellement vos performances.',
      },
      {
        type: 'conclusion',
        content:
          'La transformation digitale n\'est pas un projet ponctuel, c\'est un processus continu. Les entreprises qui gagnent sont celles qui considèrent leur site comme un actif vivant, à faire évoluer en fonction des données et des besoins du marché. C\'est exactement ce que nous proposons avec nos formules de maintenance et d\'accompagnement.',
      },
    ],
  },
  {
    slug: 'site-mobile-friendly',
    category: 'Mobile',
    title: 'L\'importance d\'un site mobile-friendly : pourquoi vos clients l\'exigent',
    description:
      'Plus de 60% du trafic web vient du mobile. Un site non optimisé perd des clients chaque jour sans le savoir. On vous explique comment y remédier rapidement et efficacement.',
    author: 'Maxime Bonnet',
    authorRole: 'Fondateur Digital Vision',
    date: '28 août 2025',
    readTime: '5 min',
    heroTheme: 'green',
    image: '/sUj8PA6PTRhjcWTh3IGqswB9U.avif',
    content: [
      {
        type: 'intro',
        content:
          'En 2025, regarder votre site sur un smartphone n\'est plus une option que font "certains utilisateurs" — c\'est la norme. Et pourtant, des milliers de sites d\'entreprises françaises restent illisibles sur mobile. Voici pourquoi c\'est un problème critique et comment le résoudre.',
      },
      {
        type: 'section',
        number: 1,
        title: 'Les chiffres qui doivent vous alerter',
        content:
          'Les statistiques sont sans appel. Ignorer l\'expérience mobile, c\'est ignorer la majorité de vos visiteurs.',
        items: [
          '63% du trafic web mondial provient des appareils mobiles (Statista, 2024)',
          'Les utilisateurs mobiles quittent un site en moins de 3 secondes s\'il n\'est pas adapté',
          'Google pénalise les sites non-responsive dans ses résultats de recherche depuis 2021',
          '57% des internautes ne recommandent pas un site mal adapté au mobile',
        ],
      },
      {
        type: 'section',
        number: 2,
        title: 'Ce que "mobile-friendly" signifie vraiment',
        content:
          'Un site mobile-friendly, ce n\'est pas simplement un site qui "s\'affiche" sur smartphone. C\'est un site pensé pour l\'usage mobile dès sa conception : navigation au pouce, contenu hiérarchisé, formulaires adaptés, temps de chargement optimisé pour la 4G/5G.',
        items: [
          'Navigation simple et accessible au pouce (zones de tap suffisamment grandes)',
          'Textes lisibles sans zoom, hiérarchie visuelle claire',
          'Images optimisées pour les connexions mobiles',
          'Formulaires courts avec clavier adapté (numérique, email, etc.)',
        ],
      },
      {
        type: 'section',
        number: 3,
        title: 'L\'impact direct sur votre SEO',
        content:
          'Depuis le déploiement du "Mobile-First Indexing" par Google, c\'est la version mobile de votre site qui est indexée et prise en compte pour votre classement. Un site non responsive peut perdre plusieurs dizaines de positions dans les résultats de recherche.',
      },
      {
        type: 'section',
        number: 4,
        title: 'Comment savoir si votre site est vraiment optimisé',
        content:
          'Plusieurs outils gratuits permettent de tester en quelques secondes la compatibilité mobile de votre site et d\'identifier les points à améliorer.',
        items: [
          'Google PageSpeed Insights : score de performance mobile + recommandations',
          'Google Mobile-Friendly Test : diagnostic rapide de compatibilité',
          'Lighthouse (intégré à Chrome DevTools) : audit complet',
          'Simplement ouvrir votre site sur votre propre smartphone et naviguer comme un client',
        ],
      },
      {
        type: 'conclusion',
        content:
          'Chaque jour avec un site non-optimisé pour mobile est un jour où vous perdez des clients face à des concurrents mieux équipés. La bonne nouvelle : une refonte mobile-first bien menée peut transformer radicalement vos résultats. C\'est l\'un des premiers chantiers que nous adressons avec nos clients. Envie d\'en savoir plus ? Demandez votre audit gratuit.',
      },
    ],
  },
]

// ─── API-ready functions ─────────────────────────────────────────────────────
// Pour connecter un CMS (Sanity, Contentful, Strapi, Notion…) ou une API REST :
// remplacez le corps de ces fonctions par vos appels fetch/SDK.
// Les types BlogPost et ContentBlock restent les mêmes.

export async function getAllPosts(): Promise<BlogPost[]> {
  // TODO: return await fetchFromCMS('/posts')
  return blogPosts
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  // TODO: return await fetchFromCMS(`/posts/${slug}`)
  return blogPosts.find((p) => p.slug === slug)
}

export async function getRelatedPosts(currentSlug: string, count = 3): Promise<BlogPost[]> {
  // TODO: return await fetchFromCMS(`/posts/related/${currentSlug}`)
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, count)
}
