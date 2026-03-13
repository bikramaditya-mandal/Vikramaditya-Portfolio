import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FadeUp from '@/components/FadeUp'
import Carousel from '@/components/Carousel'

export const metadata: Metadata = {
  title: 'Dr. Bikramaditya Mandal — Quantum Physicist',
  description: 'Postdoctoral Scholar at UNLV researching quantum control of ultracold molecular collisions and machine learning for quantum scattering.',
}

const stats = [
  { n: '24+', l: 'Publications' },
  { n: '2', l: 'Cover Articles', mobileHide: true },
  { n: '8M+', l: 'CPU Hours Saved' },
  { n: '3', l: 'Fellowships & Awards' },
  { n: '9+', l: 'Years Research' },
]

const focusCards = [
  {
    num: '01', href: '/research#ultracold',
    title: 'Ultracold Quantum Collisions',
    body: 'Full-dimensional quantum calculations of stereodynamic control in cold molecular collisions — HD, D₂, He, Ne — benchmarked against SARP experiments at Stanford.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round">
      <circle cx="7" cy="12" r="2" />
      <circle cx="17" cy="12" r="2" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <path d="M2 12h2M20 12h2" />
      <path d="M12 2v2M12 20v2" />
    </svg>
  },
  {
    num: '02', href: '/research#nn-scattering', gold: true,
    title: 'Neural Network–Assisted Scattering',
    body: 'MLP models trained on quantum scattering data that predict H₂O+H₂O rate coefficients — compressing 8 million CPU hours into milliseconds of inference.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="6" y1="8" x2="12" y2="16" />
      <line x1="18" y1="8" x2="12" y2="16" />
    </svg>
  },
  {
    num: '03', href: '/research',
    title: 'Astrophysical Rate Coefficients',
    body: 'Building databases for ALMA, JWST, and Spitzer modeling — cometary comas, ISM, planetary atmospheres — in collaboration with NASA GSFC and CNRS.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 22l6-6" />
      <path d="M7 7l4-4 6 6-4 4z" />
      <path d="M14 14l4 4" />
      <circle cx="18" cy="6" r="1.5" />
    </svg>
  },
  {
    num: '04', href: '/research',
    title: 'Mixed Quantum/Classical Theory',
    body: 'Co-developer of the MQCT code — the only program for inelastic scattering of two general asymmetric top rotors, free to the scientific community.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="12" r="2" />
      <path d="M10 12c2-4 6-4 8 0s6 4 8 0" />
      <line x1="6" y1="14" x2="6" y2="18" />
    </svg>
  },
]

const pubs = [
  { year: '2025', href: 'https://doi.org/10.1063/5.0250522', title: 'Stereodynamics of cold HD and D₂ collisions with He', journal: 'Journal of Chemical Physics, 162, 104201' },
  { year: '2025', href: 'https://doi.org/10.1039/D5CP02812D', title: 'Neural network ensemble for computing H₂O + H₂O cross sections', journal: 'Physical Chemistry Chemical Physics, 27, 23000' },
  { year: '2024', href: 'https://doi.org/10.1039/D4CP01737D', title: 'Stereodynamical control of cold HD + D₂ collisions', journal: 'Physical Chemistry Chemical Physics, 26, 18368' },
  { year: '2024', href: 'https://doi.org/10.1016/j.cpc.2023.108938', title: 'MQCT 2024: A program for inelastic scattering of two molecules', journal: 'Computer Physics Communications, 294, 108938', cover: true },
  { year: '2023', href: 'https://doi.org/10.1021/acs.jpclett.2c03328', title: 'Adiabatic trajectory approximation — new general method in MQCT', journal: 'Journal of Physical Chemistry Letters, 14, 817', cover: true },
]

const awards = [
  { year: '2021', text: 'American Institute of Chemists (AIC) Award for PhD Thesis' },
  { year: '2020–21', text: 'Dr. John J. Eisch Fellowship — Marquette University' },
  { year: '2019', text: 'Denis J. O\'Brien Summer Scholarship' },
]

export default function Home() {
  return (
    <>
      <Nav transparent />

      {/* HERO */}
      <section className="relative min-h-screen bg-[#fcfcfc] bg-[url('/Machine-Learning-in-Quantum-Dynamics/assets/bg.jpg')] bg-cover bg-center grid grid-cols-1 xl:grid-cols-[65%_35%] items-start xl:items-center overflow-hidden">

        <div className="absolute inset-0 bg-white/60 shadow-lg"></div>

        {/* Text — on mobile align-start so button never gets pushed under the absolute stats bar */}
        <div className="relative z-20 px-[8vw] lg:px-[10vw] pt-28 sm:pt-32 xl:pt-32 pb-28 sm:pb-[200px] md:pb-[160px] lg:pb-40">
          <p className="font-sans text-base font-light text-[#1a1a1a] tracking-wide mb-5 animate-[fadeUp_0.7s_ease_both]">Hi there!</p>
          <h1 className="font-sans text-[clamp(2rem,3.2vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#1a1a1a] mb-6 animate-[fadeUp_0.7s_0.1s_ease_both]">
            I'm Bikramaditya Mandal,<br />
            a <span className="text-[#3d8bfd]">Quantum Physicist</span><br />
            decoding molecular collisions
          </h1>
          <p className="font-sans text-[0.95rem] font-light text-[#555555]/90 max-w-[400px] leading-[1.85] mb-10 animate-[fadeUp_0.7s_0.2s_ease_both]">
            Postdoctoral Scholar at UNLV researching quantum control of ultracold molecular collisions and applying machine learning to accelerate quantum scattering predictions.
          </p>
          <Link
            href="#about"
            className="inline-block px-8 py-3 border-[1.5px] text-[#ffffff] bg-[#3d8bfd] font-sans text-xs font-semibold tracking-[0.14em] uppercase rounded-full transition-all hover:bg-gray-200 hover:text-[#000] animate-[fadeUp_0.7s_0.3s_ease_both]"
          >
            MORE ABOUT ME
          </Link>
        </div>

        {/* Photo */}
        <div className="absolute inset-0 z-10 xl:relative xl:inset-auto xl:h-full xl:h-[78vh] xl:mt-[10%] xl:-ml-[32%] xl:w-[135%] overflow-hidden hidden xl:block">
          <Image
            src="/Machine-Learning-in-Quantum-Dynamics/assets/bikramaditya-mandal.png"
            alt="Dr. Bikramaditya Mandal"
            fill
            className="object-cover object-top opacity-90 shadow-xl"
            style={{
              // maskImage: `
              //   linear-gradient(to right, transparent 0%, black 20%, black 65%, transparent 100%),
              //   linear-gradient(to top, transparent 0%, black 30%)
              // `,
              // maskComposite: 'intersect',
              // WebkitMaskImage: `
              //   linear-gradient(to right, transparent 0%, black 20%, black 65%, transparent 100%),
              //   linear-gradient(to top, transparent 0%, black 30%)
              // `,
              // WebkitMaskComposite: 'source-in',
            }}
            priority
            sizes="45vw"
          />
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 lg:bottom-28 hidden xl:block">
          <div className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-black/30 rounded scroll-wheel-animate" />
          </div>
        </div>

        {/* STATS — absolute bar pinned to bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-black/[0.07] bg-white/60 backdrop-blur-sm px-[5vw] py-0 sm:py-5">
          {/* Mobile: clean 2×2 grid, no Cover Articles */}
          <div className="grid grid-cols-2 sm:hidden">
            {stats.filter(s => !s.mobileHide).map((s, i, arr) => (
              <div key={s.l} className={`flex flex-col items-center gap-1 py-4 ${i % 2 === 0 ? 'border-r border-black/[0.07]' : ''} ${i < arr.length - 2 ? 'border-b border-black/[0.07]' : ''}`}>
                <span className="font-sans text-[1.5rem] font-extrabold tracking-[-0.03em] text-[#1a1a1a] leading-none">
                  {s.n}
                </span>
                <span className="font-mono text-[0.55rem] tracking-[0.15em] uppercase text-[#555555] whitespace-nowrap">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
          {/* sm+: single row with dividers */}
          <div className="max-w-[1200px] mx-auto hidden sm:flex items-center justify-center">
            {stats.map((s, i) => (
              <div key={s.l} className="flex items-center">
                <FadeUp delay={i * 80} className="flex flex-col items-center gap-1 px-8 lg:px-10 py-1">
                  <span className="font-sans text-[2rem] lg:text-[2.2rem] font-extrabold tracking-[-0.03em] text-[#1a1a1a] leading-none">
                    {s.n}
                  </span>
                  <span className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-[#555555] whitespace-nowrap">
                    {s.l}
                  </span>
                </FadeUp>
                {i < stats.length - 1 && (
                  <div className="w-px h-8 bg-black/10 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section className="bg-[#fcfcfc] py-28 px-[5vw]" id="about">
        <div className="max-w-[1200px] mx-auto grid grid-cols-[1fr_1.15fr] gap-24 items-start max-lg:grid-cols-1 max-lg:gap-12">
          <FadeUp>
            <div className="relative w-full aspect-[4/5] md:aspect-[3/2] md:max-h-[700px] lg:aspect-[4/5] lg:max-h-none overflow-hidden rounded">
              <Image src="https://bikramaditya-mandal.github.io/NeuralQuantumScattering/images/self.jpg"
                alt="Dr. Bikramaditya Mandal" fill className="object-cover object-top" sizes="500px" />
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="font-sans text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold text-[#1a1a1a] leading-[1.1] tracking-[-0.03em] mb-7">
              Bikramaditya Mandal is<br /><span className="font-extrabold">always computing</span>
            </h2>
            <div className="space-y-4 text-[#555] text-[0.95rem] font-light leading-[1.85]">

              <div>
                Hello! My name is <span className='font-bold'>Bikramaditya Mandal</span>. I am a <span className='font-bold'>Postdoctoral Scholar</span> working with Prof. Balakrishnan Naduvalath at <span className='font-bold'>University of Nevada, Las Vegas (UNLV)</span> since January 2023.
                My research at UNLV is primarily focused on <span className='font-bold'>quantum control of cold and ultracold inelastic collisions and reactions</span> of alkali metals. Additionally,
                I initiated a project where we applied <span className='font-bold'>Machine Learning (ML) using Neural Networks (NNs)</span> to build databases of rate coefficients for astronomical modelling of exoplanet atmospheres,
                the interstellar medium (ISM), and comets.
              </div>

              <div>
                Prior to UNLV, I worked as a Postdoctoral Scholar with Prof. Dmitri Babikov at <span className='font-bold'>Marquette University</span> (May 2021 – December 2022).
                My primary research was the development of <span className='font-bold'>Mixed Quantum/Classical Theory (MQCT)</span> to study inelastic scattering of molecules.
              </div>

              <div>
                I earned my <span className='font-bold'>Ph.D. from Marquette University (2021)</span> after completing my B.Sc. (Hons.) and M.Sc. in Chemistry from Visva-Bharati University, India.
                I received the <span className='font-bold'>Denis J. O'Brien Summer Scholarship (2019)</span>, the <a href="https://www.marquette.edu/chemistry/graduate-awards.php"><span className='font-bold underline'>Dr. John J. Eisch Fellowship (2020–2021)</span></a>, and the <a href="https://theaic.org/award_winners/student_awards2021.html"><span className='font-bold underline'>American Institute of Chemists (AIC) Award (2021)</span></a> for research excellence.
              </div>

            </div>
            <div className="flex gap-4 flex-wrap mt-8">
              <a href="https://www.dropbox.com/scl/fi/egq8ebodea3eoebwcef67/CV_Bikramaditya_Mandal.pdf?rlkey=l37vepygbl7uv78vw1y3blvub&dl=0"
                target="_blank" rel="noopener noreferrer" className="btn-home">CURRICULUM VITAE</a>
              <a href="https://scholar.google.com/citations?user=EP27zCQAAAAJ"
                target="_blank" rel="noopener noreferrer" className="btn-outline-dark">GOOGLE SCHOLAR</a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="bg-[#faf9f7] py-28 px-[5vw]">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-10">
            <span className="eyebrow dark font-mono text-[#999]">Selected Publications</span>
            <h2 className="font-sans text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-[#111] leading-[1.1] tracking-[-0.03em]">
              Recent <span className="text-scientific">Work</span>
            </h2>
          </div>
          <div>
            {pubs.map((p, i) => (
              <FadeUp key={p.href} delay={i * 60}>
                <a href={p.href} target="_blank" rel="noopener noreferrer"
                  className="grid grid-cols-[48px_1fr_28px] gap-5 items-center py-5 border-b border-[#e8e5e0] transition-colors hover:bg-black/[0.02] first:border-t">
                  <span className="font-mono text-[0.7rem] text-scientific">{p.year}</span>
                  <div>
                    <p className="font-sans text-[0.92rem] font-medium text-[#222] leading-[1.5] mb-1">
                      {p.title}{p.cover && <span className="cover-pill">Cover</span>}
                    </p>
                    <p className="font-mono text-[0.7rem] text-[#999]">{p.journal}</p>
                  </div>
                  <span className="text-[#bbb] text-right transition-all hover:text-accent hover:translate-x-0.5 hover:-translate-y-0.5">↗</span>
                </a>
              </FadeUp>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/publications"
              className="inline-block px-10 py-3 border-[1.5px] border-[#222] text-[#222] font-sans text-xs font-semibold tracking-[0.14em] uppercase rounded-full transition-all hover:bg-scientific hover:text-white">
              VIEW ALL PUBLICATIONS →
            </Link>
          </div>
        </div>
      </section>

      {/* RESEARCH FOCUS */}
      <section className="bg-[#fcfcfc] py-28 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14">
            <span className="eyebrow dark font-mono text-[#3d8bfd]">Research Focus</span>
            <h2 className="font-sans text-[clamp(2rem,4vw,3rem)] font-extrabold text-[#1a1a1a] leading-[1.1] tracking-[-0.03em]">
              Where Physics Meets<br /><span className="text-[#3d8bfd]">the Frontier</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-px bg-[#1a1a1a]/[0.07] border border-[#1a1a1a]/[0.07] rounded-lg overflow-hidden max-md:grid-cols-1">
            {focusCards.map((c, i) => (
              <FadeUp key={c.num} delay={i * 80}>
                <Link href={c.href}
                  className={`group relative flex flex-col gap-3 p-10 h-full transition-colors duration-300
                    ${c.gold
                      ? 'bg-[#eef4ff] hover:bg-[#e0ecff]'
                      : 'bg-[#f5f5f5] hover:bg-[#ebebeb]'
                    }`}>
                  <div className="text-[#3d8bfd]">{c.icon}</div>
                  <span className="absolute top-5 right-7 font-mono text-[0.62rem] text-[#1a1a1a]/40 tracking-[0.12em]">{c.num}</span>
                  <h3 className="font-sans text-[1.2rem] font-bold text-[#1a1a1a] leading-[1.2] tracking-[-0.01em] mt-2">{c.title}</h3>
                  <p className="font-sans text-[0.87rem] font-light text-[#1a1a1a]/60 leading-[1.8] flex-1">{c.body}</p>
                  <span className="font-mono text-[0.72rem] text-[#3d8bfd] tracking-[0.08em] transition-all duration-300 group-hover:tracking-[0.14em]">Explore →</span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="bg-[#fcfcfc] py-20 pb-28 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">
          <span className="eyebrow dark font-mono text-[#3d8bfd]">Recognition</span>
          <div className="flex items-center flex-wrap mt-8">
            {awards.map((a, i) => (
              <div key={a.year} className="flex items-center">
                <FadeUp delay={i * 80} className="flex-1 min-w-[200px] px-8 first:pl-5">
                  <span className="block font-mono text-[0.68rem] text-[#3d8bfd] tracking-[0.15em] mb-2">{a.year}</span>
                  <p className="font-sans text-[0.9rem] font-light text-[#1a1a1a]/80 leading-[1.6]">{a.text}</p>
                </FadeUp>
                {i < awards.length - 1 && <div className="w-px h-12 bg-[#1a1a1a]/10 flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <Carousel />

      {/* CTA */}
      <section className="bg-[#fcfcfc] py-28 px-[5vw] text-center border-t border-[#1a1a1a]/[0.07]">
        <div className="max-w-[640px] mx-auto">
          <h2 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-[#1a1a1a] leading-[1.0] tracking-[-0.04em] mb-5">
            Let's <span className="text-[#3d8bfd]">Connect</span>
          </h2>
          <p className="font-sans text-[0.95rem] font-light text-[#1a1a1a]/80 leading-[1.8] mb-10">
            Open to research collaborations, academic discussions, and opportunities in theoretical quantum chemistry and ML-accelerated science.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:bikramaditya.mandal@unlv.edu" className="btn-home">GET IN TOUCH</a>
            <Link href="/contact" className="btn-outline-dark">ALL CHANNELS →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
