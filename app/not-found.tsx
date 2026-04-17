import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: '404 | Digital Vision',
  description: 'Page introuvable — Digital Vision',
}

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col justify-center bg-[#f0f0f0]">
        <section className="py-32">
          <div className="container-main">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm mb-8">
              <span className="text-primary-500 animate-spin-slow inline-block">✦</span>
              <span className="text-[16px] text-gray-700">404</span>
            </div>

            {/* Heading */}
            <h1 className="text-[74px] md:text-[96px] font-bold leading-tight tracking-tight mb-6">
              <span className="text-primary-500">Oups !</span>{' '}
              <span className="text-black">Cette page<br />n&apos;existe pas.</span>
            </h1>

            {/* Description */}
            <p className="text-[18px] text-gray-600 max-w-xl leading-relaxed mb-10">
              Il semble que la page que vous cherchez soit introuvable. Pas de panique — retournez à l&apos;accueil ou découvrez nos services pour donner vie à votre projet.
            </p>

            {/* Button */}
            <a
              href="/"
              className="group inline-flex items-center justify-between text-white text-[16px] font-medium h-[55px] pl-5 pr-2 rounded-full bg-[#171717] hover:bg-[#2A2A2A] transition-colors"
            >
              Retour à l&apos;accueil
              <span className="relative w-[40px] h-[40px] flex-shrink-0 rounded-full flex items-center justify-center overflow-hidden ml-3">
                <span className="absolute inset-0 bg-white rounded-full" />
                <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" style={{ backgroundColor: '#2A00FF' }} />
                <svg className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
