# Ajouter un article de blog

## Comment ça marche ?

Tout le contenu du blog est centralisé dans **un seul fichier** :

```
lib/blog.ts
```

Dès qu'un article est ajouté dans ce fichier, il apparaît **automatiquement** :

- ✅ Sur la page listing `/blog` (grille 2×2)
- ✅ Sur sa propre page `/blog/[slug]`
- ✅ Dans la section "Check more blogs" des autres articles
- ✅ Dans la navigation Précédent / Suivant

Aucune autre modification n'est nécessaire.

---

## Étape 1 — Ouvrir le fichier de données

```
lib/blog.ts
```

Repérez le tableau `blogPosts` et ajoutez un nouvel objet à la fin (avant la fermeture `]`).

---

## Étape 2 — Copier ce modèle

```ts
{
  slug: 'mon-nouvel-article',          // URL : /blog/mon-nouvel-article
  category: 'Conseils',               // Affiché en tag bleu sur les cards
  title: 'Mon titre d\'article',
  description: 'Résumé court affiché sur la card et en sous-titre de l\'article.',
  author: 'Maxime Bonnet',
  authorRole: 'Fondateur Digital Vision',
  date: '15 septembre 2025',          // Format libre, affiché tel quel
  readTime: '4 min',
  heroTheme: 'blue',                  // Voir les thèmes disponibles ci-dessous
  content: [
    {
      type: 'intro',
      content: 'Paragraphe d\'introduction de l\'article...',
    },
    {
      type: 'section',
      number: 1,
      title: 'Mon premier point',
      content: 'Contenu du paragraphe...',
      items: [                         // Optionnel — liste à puces
        'Premier élément',
        'Deuxième élément',
      ],
    },
    {
      type: 'section',
      number: 2,
      title: 'Mon deuxième point',
      content: 'Contenu sans liste...',
      // items: omis si pas de liste
    },
    {
      type: 'conclusion',
      content: 'Paragraphe de conclusion...',
    },
  ],
},
```

---

## Champs obligatoires

| Champ        | Type                                      | Description                                          |
|--------------|-------------------------------------------|------------------------------------------------------|
| `slug`       | `string`                                  | URL de la page. Minuscules, tirets, pas d'accents.   |
| `category`   | `string`                                  | Tag affiché sur la card (ex : Conseils, Mobile…)     |
| `title`      | `string`                                  | Titre complet de l'article                           |
| `description`| `string`                                  | Résumé court (2-3 phrases max)                       |
| `author`     | `string`                                  | Nom de l'auteur                                      |
| `authorRole` | `string`                                  | Rôle/titre de l'auteur                               |
| `date`       | `string`                                  | Date de publication, format libre                    |
| `readTime`   | `string`                                  | Temps de lecture estimé (ex : `"5 min"`)             |
| `heroTheme`  | `'blue' \| 'purple' \| 'dark' \| 'green'`| Illustration de la hero et des cards                 |
| `content`    | `ContentBlock[]`                          | Corps de l'article (voir ci-dessous)                 |

---

## Thèmes d'illustration (`heroTheme`)

| Valeur   | Couleur dominante  | Usage conseillé              |
|----------|--------------------|------------------------------|
| `blue`   | Bleu / blanc       | Conseils, UX, performance    |
| `purple` | Violet             | Stratégie, marketing, SEO    |
| `dark`   | Sombre / néon      | Tech, code, tendances        |
| `green`  | Vert / menthe      | Mobile, accessibilité        |

---

## Types de blocs de contenu (`content`)

### `intro` — Introduction
```ts
{
  type: 'intro',
  content: 'Texte du paragraphe introductif.',
}
```

### `section` — Section numérotée
```ts
{
  type: 'section',
  number: 1,                  // Numéro affiché devant le titre
  title: 'Titre de la section',
  content: 'Paragraphe principal.',
  items: [                    // Optionnel
    'Point 1',
    'Point 2',
  ],
}
```

### `conclusion` — Conclusion
```ts
{
  type: 'conclusion',
  content: 'Texte de conclusion.',
}
```

> **Ordre recommandé :** `intro` → plusieurs `section` → `conclusion`

---

## Règles pour le `slug`

- Minuscules uniquement
- Pas d'accents ni de caractères spéciaux
- Mots séparés par des tirets `-`
- Unique (deux articles ne peuvent pas avoir le même slug)

```
✅  'comment-optimiser-son-site'
✅  'seo-local-guide-complet'
❌  'Comment Optimiser Son Site'
❌  'référencement-naturel'
```

---

## Exemple complet

```ts
{
  slug: 'seo-local-attirer-clients-pres-de-chez-vous',
  category: 'SEO',
  title: 'SEO local : comment attirer des clients près de chez vous',
  description:
    'Le référencement local est l\'arme secrète des petites entreprises pour dominer Google dans leur zone géographique. Voici comment le maîtriser.',
  author: 'Maxime Bonnet',
  authorRole: 'Fondateur Digital Vision',
  date: '10 octobre 2025',
  readTime: '5 min',
  heroTheme: 'purple',
  content: [
    {
      type: 'intro',
      content:
        'Vous êtes plombier à Lyon, coiffeur à Bordeaux ou consultant à Nantes ? Le SEO local peut vous rendre visible exactement au moment où vos futurs clients vous cherchent sur Google Maps ou dans les résultats locaux.',
    },
    {
      type: 'section',
      number: 1,
      title: 'Optimiser votre fiche Google Business',
      content:
        'La fiche Google Business est votre vitrine sur Google Maps. Une fiche complète et régulièrement mise à jour peut vous propulser dans le "pack local" — les 3 résultats qui apparaissent en premier avec une carte.',
      items: [
        'Remplir 100% des informations (horaires, photos, description)',
        'Répondre à tous les avis clients, positifs comme négatifs',
        'Publier des posts réguliers sur votre fiche',
        'Ajouter vos produits/services avec photos et prix',
      ],
    },
    {
      type: 'section',
      number: 2,
      title: 'Cibler les bons mots-clés locaux',
      content:
        'Les requêtes locales suivent toujours le même schéma : [service] + [ville]. Identifiez les combinaisons les plus recherchées dans votre zone et intégrez-les naturellement dans votre site.',
    },
    {
      type: 'conclusion',
      content:
        'Le SEO local est l\'un des leviers les plus rentables pour une entreprise de proximité. Contrairement à la publicité payante, ses effets sont durables. Besoin d\'aide pour vous positionner localement ? Contactez-nous pour un audit gratuit.',
    },
  ],
},
```

---

## Brancher un CMS ou une API (pour plus tard)

Si vous souhaitez gérer vos articles depuis une interface comme **Sanity**, **Contentful**, **Strapi** ou **Notion**, il suffit de modifier uniquement les 3 fonctions dans `lib/blog.ts` :

```ts
// Remplacer le contenu de ces fonctions par vos appels API/CMS

export async function getAllPosts(): Promise<BlogPost[]> {
  const res = await fetch('https://votre-api.com/posts')
  return res.json()
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const res = await fetch(`https://votre-api.com/posts/${slug}`)
  return res.json()
}

export async function getRelatedPosts(currentSlug: string, count = 3): Promise<BlogPost[]> {
  const res = await fetch(`https://votre-api.com/posts/related/${currentSlug}?count=${count}`)
  return res.json()
}
```

Les pages `/blog` et `/blog/[slug]` n'ont pas besoin d'être modifiées.
