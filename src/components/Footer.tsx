import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] border-t border-[#1a1a1a]/[0.07] px-[5vw] pt-12 pb-8">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-8 flex-wrap pb-8 border-b border-[#1a1a1a]/[0.07]">
        <div>
          <div className="font-sans text-2xl font-extrabold tracking-tight text-[#1a1a1a] mb-1">
            BM<span className="text-[#3d8bfd]">.</span>
          </div>
          <p className="font-mono text-xs text-[#1a1a1a]/60">Dr. Bikramaditya Mandal · UNLV</p>
        </div>
        <nav className="flex gap-8 flex-wrap">
          {['/research', '/publications', '/teaching', '/contact'].map(href => (
            <Link key={href} href={href}
              className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-[#1a1a1a]/70 hover:text-[#3d8bfd] transition-colors">
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
              className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-[#1a1a1a]/70 hover:text-[#3d8bfd] transition-colors">
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center mt-6 flex-wrap gap-4">
        <span className="font-mono text-xs text-[#1a1a1a]/50">© Dr. Bikramaditya Mandal</span>
      </div>
    </footer>
  )
}
