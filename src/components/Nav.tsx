'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/',             label: 'Home' },
  { href: '/research',     label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/teaching',     label: 'Teaching' },
  { href: 'https://www.dropbox.com/scl/fi/egq8ebodea3eoebwcef67/CV_Bikramaditya_Mandal.pdf?rlkey=l37vepygbl7uv78vw1y3blvub&dl=0', label: 'CV', external: true },
  { href: '/contact',      label: 'Contact' },
]

export default function Nav({ transparent = false }: { transparent?: boolean }) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navBg = transparent && !scrolled
    ? 'bg-transparent border-transparent backdrop-blur-none'
    : 'bg-[#fcfcfc]/95 border-[#1a1a1a]/[0.07] shadow-sm backdrop-blur-xl'

  // hamburger color: white when transparent+not scrolled, dark otherwise
  const barColor = transparent && !scrolled && !open ? 'bg-[#1a1a1a]' : 'bg-[#1a1a1a]'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 border-b transition-all duration-300 ${navBg}`}>
      <Link href="/" className="font-sans text-2xl font-bold tracking-tight text-[#1a1a1a]">
        BM<span className="text-[#3d8bfd]">.</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map(l => (
          <li key={l.href}>
            <Link
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
              className={`text-[0.78rem] font-medium tracking-[0.12em] uppercase transition-colors duration-300
                ${pathname === l.href ? 'text-[#3d8bfd]' : 'text-[#1a1a1a] hover:text-[#3d8bfd]'}`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setOpen(o => !o)}
        aria-label="Menu"
      >
        <span className={`block w-5 h-0.5 ${barColor} transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block w-5 h-0.5 ${barColor} transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 ${barColor} transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#fcfcfc] border-b border-[#1a1a1a]/[0.07] shadow-md md:hidden">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              onClick={() => setOpen(false)}
              className={`block px-8 py-4 text-[0.78rem] font-medium tracking-[0.12em] uppercase transition-colors border-b border-[#1a1a1a]/[0.04] last:border-0
                ${pathname === l.href ? 'text-[#3d8bfd]' : 'text-[#1a1a1a]/70 hover:text-[#3d8bfd]'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}