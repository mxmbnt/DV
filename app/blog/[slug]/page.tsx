import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog'
import type { BlogPost, ContentBlock } from '@/lib/blog'

// ─── SSG : génère les pages statiques pour chaque article ────────────────────
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

// ─── Metadata dynamique ──────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return { title: '404 | Digital Vision' }

  return {
    title: `${post.title} | Digital Vision`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: '/og/page_blog.png', width: 1200, height: 630, alt: post.title }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/og/page_blog.png'],
    },
  }
}

// ─── Rendu d'un bloc de contenu ───────────────────────────────────────────────
function Block({ block }: { block: ContentBlock }) {
  if (block.type === 'intro') {
    return (
      <div className="mb-8">
        <h2 className="text-[20px] font-bold text-black mb-3">Introduction</h2>
        <p className="text-[16px] text-gray-600 leading-relaxed">{block.content}</p>
      </div>
    )
  }

  if (block.type === 'section') {
    return (
      <div className="mb-8">
        <h2 className="text-[20px] font-bold text-black mb-3">
          {block.number}. {block.title}
        </h2>
        <p className="text-[16px] text-gray-600 leading-relaxed mb-3">{block.content}</p>
        {block.items && block.items.length > 0 && (
          <ul className="flex flex-col gap-2 mt-2">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[16px] text-gray-600">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  if (block.type === 'conclusion') {
    return (
      <div className="mb-8">
        <h2 className="text-[20px] font-bold text-black mb-3">Conclusion</h2>
        <p className="text-[16px] text-gray-600 leading-relaxed">{block.content}</p>
      </div>
    )
  }

  return null
}

// ─── Card article (section "Check more blogs") ───────────────────────────────
function RelatedCard({ post }: { post: BlogPost }) {
  return (
    <a href={`/blog/${post.slug}`} className="group flex flex-col gap-2">
      <div className="rounded-2xl overflow-hidden h-[160px] relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-1.5 px-1">
        <span className="text-[12px] font-semibold text-primary-500">{post.category}</span>
        <h3 className="text-[15px] font-bold text-black leading-tight group-hover:text-primary-500 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <span className="text-[13px] text-gray-400">{post.readTime} de lecture</span>
      </div>
    </a>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, related, allPosts] = await Promise.all([
    getPostBySlug(params.slug),
    getRelatedPosts(params.slug, 3),
    getAllPosts(),
  ])

  if (!post) notFound()

  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  return (
    <>
      <Navbar />

      <main>
        {/* Hero article */}
        <section className="pt-40 pb-12 bg-transparent">
          <div className="container-main">
            <div className="max-w-[720px] mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-6 text-[14px] text-gray-400">
                <a href="/blog" className="hover:text-primary-500 transition-colors font-medium">Blog</a>
                <span>/</span>
                <span className="text-gray-600 font-medium">{post.category}</span>
              </div>

              {/* Titre */}
              <h1 className="text-[48px] font-bold text-black leading-tight tracking-tight mb-5">
                {post.title}
              </h1>
              <p className="text-[18px] text-gray-500 leading-relaxed mb-8">{post.description}</p>

              {/* Auteur + meta */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2A00FF] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[14px] font-bold">MB</span>
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-black">{post.author}</div>
                  <div className="text-[13px] text-gray-400">{post.authorRole} · {post.date} · {post.readTime} de lecture</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image hero */}
        <section className="pb-12 bg-transparent">
          <div className="container-main">
            <div className="max-w-[720px] mx-auto rounded-3xl overflow-hidden h-[400px] relative">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="720px"
                priority
              />
            </div>
          </div>
        </section>

        {/* Contenu */}
        <section className="pb-16 bg-transparent">
          <div className="container-main">
            <div className="max-w-[720px] mx-auto">
              {post.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Précédent / Suivant */}
        <section className="pb-16 bg-transparent">
          <div className="container-main">
            <div className="max-w-[720px] mx-auto flex justify-between items-center border-t border-gray-200 pt-8">
              {prevPost ? (
                <a href={`/blog/${prevPost.slug}`} className="group flex items-center gap-2 text-[15px] font-semibold text-gray-500 hover:text-primary-500 transition-colors">
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  Précédent
                </a>
              ) : <span />}
              {nextPost ? (
                <a href={`/blog/${nextPost.slug}`} className="group flex items-center gap-2 text-[15px] font-semibold text-gray-500 hover:text-primary-500 transition-colors">
                  Suivant
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ) : <span />}
            </div>
          </div>
        </section>

        {/* Check more blogs */}
        {related.length > 0 && (
          <section className="pb-24 bg-transparent">
            <div className="container-main">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm mb-4">
                  <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
                  <span className="text-[14px] text-gray-700">À lire aussi</span>
                </div>
                <h2 className="text-[32px] font-bold text-black">Check more blogs</h2>
                <p className="text-[16px] text-gray-500 mt-2 max-w-md mx-auto">
                  D&apos;autres articles qui pourraient vous intéresser et vous aider dans votre projet.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {related.map((p) => (
                  <RelatedCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
