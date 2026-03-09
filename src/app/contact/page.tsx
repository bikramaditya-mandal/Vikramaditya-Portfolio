import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'Contact — Dr. Bikramaditya Mandal',
  description: 'Get in touch with Dr. Bikramaditya Mandal — quantum physicist at UNLV.',
}

const socials = [
  {
    name: 'Google Scholar',
    desc: 'Citation profile & h-index',
    href: 'https://scholar.google.com/citations?user=EP27zCQAAAAJ',
    iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg',
    iconBg: '#fff',
  },
  {
    name: 'LinkedIn',
    desc: 'Professional network',
    href: 'https://linkedin.com/in/bikramaditya-mandal',
    iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    iconBg: '#0a66c2',
  },
  {
    name: 'GitHub',
    desc: 'Code & open-source projects',
    href: 'https://github.com/bikramaditya-mandal',
    iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    iconBg: '#1a1a1a',
    invertIcon: true,
  },
  {
    name: 'ResearchGate',
    desc: 'Research network & preprints',
    href: 'https://www.researchgate.net/profile/Bikramaditya-Mandal-2',
    iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/ResearchGate_icon_SVG.svg',
    iconBg: '#00CCBB',
  },
  {
    name: 'X (Twitter)',
    desc: 'Updates & discussions',
    href: 'https://x.com/_bikramaditya',
    iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg',
    iconBg: '#000',
    invertIcon: true,
  },
  {
    name: 'Email',
    desc: 'bikramaditya.mandal@unlv.edu',
    href: 'mailto:bikramaditya.mandal@unlv.edu',
    iconBg: '#3d8bfd',
    isEmail: true,
  },
]

const tags = [
  'Ultracold Scattering', 'Quantum Dynamics', 'Neural Networks',
  'Astrophysical Chemistry', 'MQCT', 'Stereodynamics',
  'Rate Coefficients', 'Molecular Collisions',
]

export default function Contact() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <div className="bg-[#fcfcfc] border-b border-[#1a1a1a]/[0.07]">
        <div className="pt-36 pb-16 max-w-[1200px] mx-auto px-16 max-md:px-6">
          <FadeUp>
            <span className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#3d8bfd] mb-3 block">Contact</span>
            <h1 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-[#1a1a1a] leading-[1.05] tracking-[-0.03em] mb-3">
              Let's <span className="text-[#3d8bfd]">Connect</span>
            </h1>
            <p className="font-serif text-[#1a1a1a]/70 text-[1rem] max-w-[600px] leading-relaxed">
              Whether you're interested in research collaboration, have questions about my work, or want to discuss opportunities — I'm happy to hear from you.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Body */}
      <div className="bg-[#fcfcfc]">
        <div className="max-w-[1200px] mx-auto px-16 py-16 grid grid-cols-[1fr_1.4fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12 max-md:px-6">

          {/* Left — contact info */}
          <FadeUp>
            <div>
              {/* Email */}
              <div className="py-6 border-b border-[#1a1a1a]/[0.07]">
                <span className="block font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[#3d8bfd] mb-2">Email</span>
                <a href="mailto:bikramaditya.mandal@unlv.edu" className="font-sans text-[0.9rem] text-[#1a1a1a] hover:text-[#3d8bfd] transition-colors">
                  bikramaditya.mandal@unlv.edu
                </a>
              </div>

              {/* Location */}
              <div className="py-6 border-b border-[#1a1a1a]/[0.07]">
                <span className="block font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[#3d8bfd] mb-2">Location</span>
                <p className="font-serif text-[#1a1a1a]/75 text-[0.95rem] leading-[1.7]">
                  Department of Chemistry & Biochemistry<br />
                  University of Nevada Las Vegas<br />
                  Las Vegas, NV, USA
                </p>
              </div>

              {/* CV */}
              <div className="py-6 border-b border-[#1a1a1a]/[0.07]">
                <span className="block font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[#3d8bfd] mb-3">CV</span>
                <a
                  href="https://www.dropbox.com/scl/fi/egq8ebodea3eoebwcef67/CV_Bikramaditya_Mandal.pdf?rlkey=l37vepygbl7uv78vw1y3blvub&dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 bg-[#3d8bfd] text-white font-sans text-xs font-semibold tracking-[0.14em] uppercase rounded-full transition-all hover:bg-[#2d7be0]"
                >
                  Download CV ↗
                </a>
              </div>

              {/* Research interests */}
              <div className="py-6 border-b border-[#1a1a1a]/[0.07]">
                <span className="block font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[#3d8bfd] mb-3">Research Interests</span>
                <div className="flex flex-wrap gap-2">
                  {tags.map(t => (
                    <span key={t} className="font-sans text-[0.68rem] font-medium text-[#1a1a1a]/60 bg-[#f5f5f5] border border-[#1a1a1a]/[0.08] rounded-full px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right — social cards */}
          <FadeUp delay={100}>
            <span className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#3d8bfd] mb-6 block">Find Me Online</span>
            <div className="space-y-3">
              {socials.map(s => (
                <a
                  key={s.href}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-5 p-5 bg-white border border-[#1a1a1a]/[0.08] rounded-lg transition-all hover:border-[#3d8bfd] hover:translate-x-1 hover:shadow-sm group"
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden p-2"
                    style={{ background: s.iconBg }}
                  >
                    {s.isEmail ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={s.iconSrc}
                        alt={s.name}
                        className={`w-full h-full object-contain ${s.invertIcon ? 'invert' : ''}`}
                      />
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="font-sans text-[0.88rem] font-semibold text-[#1a1a1a]">{s.name}</p>
                    <p className="font-mono text-[0.72rem] text-[#1a1a1a]/45">{s.desc}</p>
                  </div>
                  <span className="text-[#1a1a1a]/30 text-sm transition-all group-hover:text-[#3d8bfd] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Visitor counter */}
      <div className="bg-[#fcfcfc] text-center py-8 px-16 border-t border-[#1a1a1a]/[0.07]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://hits.sh/bikramaditya-mandal.github.io/NeuralQuantumScattering.svg?style=flat-square&label=Visitors"
          alt="Visitor count"
          className="inline-block"
        />
      </div>

      <Footer />
    </>
  )
}