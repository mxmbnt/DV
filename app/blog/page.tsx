import Image from 'next/image'
import Navbar from '@/components/Navbar'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog | Digital Vision',
  description: 'Conseils, astuces et tendances web par Digital Vision.',
  openGraph: {
    title: 'Blog — Conseils & Astuces Web | Digital Vision',
    description: 'Conseils, astuces et tendances web par Digital Vision.',
    images: [{ url: '/og/page_blog.png', width: 1200, height: 630, alt: 'Blog Digital Vision' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/page_blog.png'],
  },
}

export default async function BlogPage() {
  const articles = await getAllPosts()

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-40 pb-16 bg-transparent">
          <div className="container-main">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm mb-6">
              <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
              <span className="text-[16px] text-gray-700">Blog</span>
            </div>
            <h1 className="text-[74px] font-bold text-black leading-tight tracking-tight mb-6">
              <span className="inline-block overflow-hidden leading-[1.1]">
                <span className="animate-word inline-block" style={{ animationDelay: '0ms' }}>Conseils</span>
              </span>{' '}
              <span className="inline-block overflow-hidden leading-[1.1]">
                <span className="animate-word inline-block" style={{ animationDelay: '80ms' }}>&amp;</span>
              </span>{' '}
              <span className="inline-block overflow-hidden leading-[1.1]">
                <span className="animate-word inline-block" style={{ color: '#2A00FF', animationDelay: '160ms' }}>Astuces</span>
              </span>{' '}
              <span className="inline-block overflow-hidden leading-[1.1]">
                <span className="animate-word inline-block" style={{ color: '#2A00FF', animationDelay: '240ms' }}>Web</span>
              </span>
            </h1>
            <p className="text-[18px] text-gray-500 max-w-2xl leading-relaxed">
              Des stratégies concrètes, des conseils pratiques et des tendances pour vous aider à tirer le meilleur de votre présence en ligne. Pas de blabla, que de la valeur.
            </p>
          </div>
        </section>

        {/* Grille articles */}
        <section className="pb-24 bg-transparent">
          <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <a
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="flex flex-col gap-2 group cursor-pointer"
                >
                  {/* Image */}
                  <div className="rounded-3xl overflow-hidden h-[260px] relative">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Texte */}
                  <div className="rounded-3xl bg-white shadow-sm px-6 py-5 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 inline-block" />
                        {article.category}
                      </span>
                      <span className="text-[13px] text-gray-400">{article.readTime} de lecture</span>
                    </div>
                    <h2 className="text-[20px] font-bold text-black leading-tight group-hover:text-primary-500 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-[14px] text-gray-500 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-[14px] font-semibold text-black group-hover:text-primary-500 transition-colors mt-1">
                      Lire l&apos;article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* CTA Final */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
