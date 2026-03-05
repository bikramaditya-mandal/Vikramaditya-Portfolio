import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] border-t border-white/[0.07] px-[5vw] pt-12 pb-8">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-8 flex-wrap pb-8 border-b border-white/[0.07]">
        <div>
          <div className="font-sans text-2xl font-extrabold tracking-tight text-white mb-1">
            BM<span className="text-accent">.</span>
          </div>
          <p className="font-mono text-xs text-white/30">Dr. Bikramaditya Mandal · UNLV</p>
        </div>
        <nav className="flex gap-8 flex-wrap">
          {['/research', '/publications', '/teaching', '/contact'].map(href => (
            <Link key={href} href={href}
              className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-white/35 hover:text-accent transition-colors">
              {href.slice(1)}
            </Link>
          ))}
        </nav>
        <div className="flex gap-8 flex-wrap">
          {[
            { href: 'https://scholar.google.com/citations?user=EP27zCQAAAAJ', label: 'Scholar' },
            { href: 'https://linkedin.com/in/bikramaditya-mandal', label: 'LinkedIn' },
            { href: 'https://github.com/bikramaditya-mandal', label: 'GitHub' },
            { href: 'https://x.com/_bikramaditya', label: 'X' },
          ].map(s => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
              className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-white/35 hover:text-accent transition-colors">
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center mt-6 flex-wrap gap-4">
        <span className="font-mono text-xs text-white/20">© Dr. Bikramaditya Mandal</span>
      </div>
    </footer>
  )
}
