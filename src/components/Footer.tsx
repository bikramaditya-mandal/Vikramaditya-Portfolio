import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] border-t border-[#1a1a1a]/[0.07] px-[5vw] pt-12 pb-8">
      <div className="max-w-[1200px] mx-auto pb-8 border-b border-[#1a1a1a]/[0.07]">

        {/* Desktop: single horizontal row — Brand | Academic | Contact | Socials */}
        {/* Mobile: stacked vertically */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">

          {/* Brand */}
          <div>
            <div className="font-sans text-2xl font-extrabold tracking-tight text-[#1a1a1a] mb-1">
              BM<span className="text-[#3d8bfd]">.</span>
            </div>
            <p className="font-mono text-xs text-[#1a1a1a]/60">Dr. Bikramaditya Mandal · UNLV</p>
          </div>

          {/* Divider — vertical on desktop, horizontal on mobile */}
          <div className="hidden sm:block w-px self-stretch bg-[#1a1a1a]/[0.07]" />
          <div className="block sm:hidden h-px w-full bg-[#1a1a1a]/[0.07]" />

          {/* Academic */}
          <div>
            <p className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-[#1a1a1a]/60 font-semibold mb-3">Academic</p>
            <nav className="flex sm:flex-col gap-5 sm:gap-2.5">
              {['/research', '/publications', '/teaching'].map(href => (
                <Link key={href} href={href}
                  className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-[#1a1a1a]/70 hover:text-[#3d8bfd] transition-colors">
                  {href.slice(1)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px self-stretch bg-[#1a1a1a]/[0.07]" />
          <div className="block sm:hidden h-px w-full bg-[#1a1a1a]/[0.07]" />

          {/* Contact */}
          <div>
            <p className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-[#1a1a1a]/60 font-semibold mb-3">Contact</p>
            <nav className="flex sm:flex-col gap-5 sm:gap-2.5">
              <Link href="/contact"
                className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-[#1a1a1a]/70 hover:text-[#3d8bfd] transition-colors">
                Contact
              </Link>
              <a href="mailto:bikramaditya.mandal@unlv.edu"
                className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-[#1a1a1a]/70 hover:text-[#3d8bfd] transition-colors">
                Email
              </a>
              <a href="https://www.dropbox.com/scl/fi/egq8ebodea3eoebwcef67/CV_Bikramaditya_Mandal.pdf?rlkey=l37vepygbl7uv78vw1y3blvub&dl=0"
                target="_blank" rel="noopener noreferrer"
                className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-[#1a1a1a]/70 hover:text-[#3d8bfd] transition-colors">
                CV
              </a>
            </nav>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px self-stretch bg-[#1a1a1a]/[0.07]" />
          <div className="block sm:hidden h-px w-full bg-[#1a1a1a]/[0.07]" />

          {/* Socials */}
          <div>
            <p className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-[#1a1a1a]/60 font-semibold mb-3">Socials</p>
            <div className="flex sm:flex-col gap-5 sm:gap-2.5">
              {[
                { href: 'https://scholar.google.com/citations?user=EP27zCQAAAAJ', label: 'Scholar' },
                { href: 'https://linkedin.com/in/bikramaditya-mandal', label: 'LinkedIn' },
                { href: 'https://github.com/bikramaditya-mandal', label: 'GitHub' },
                { href: 'https://x.com/_bikramaditya', label: 'X' },
              ].map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-[#1a1a1a]/70 hover:text-[#3d8bfd] transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-[1200px] mx-auto flex justify-between items-center mt-6 flex-wrap gap-4">
        <span className="font-mono text-xs text-[#1a1a1a]/50">© Dr. Bikramaditya Mandal</span>
      </div>
    </footer>
  )
}