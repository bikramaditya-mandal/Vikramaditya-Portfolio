'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const slides = [
  { src: '/assets/TOC.png',                 alt: 'Table of Contents' },
  { src: '/assets/JPCL_cover.jpg',          alt: 'JPCL Cover' },
  { src: '/assets/Phd_defense.png',         alt: 'PhD Defense' },
  { src: '/assets/AstroPAH.png',            alt: 'Astro PAH' },
  { src: '/assets/PCCP_cover.png',          alt: 'PCCP Cover' },
  { src: '/assets/PhD_acknowledgement.png', alt: 'PhD Acknowledgement' },
  { src: '/assets/bk_graduation.png',       alt: 'Graduation' },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  const show = (i: number) => setCurrent((i + slides.length) % slides.length)

  useEffect(() => {
    const t = setInterval(() => show(current + 1), 5000)
    return () => clearInterval(t)
  }, [current])

  return (
    <section className="bg-[#0a0a0a] py-20 px-[5vw] border-t border-b border-white/[0.06]">
      <div className="max-w-[860px] mx-auto flex items-center gap-6">
        <button
          onClick={() => show(current - 1)}
          aria-label="Previous"
          className="flex-shrink-0 w-11 h-11 rounded-full border border-white/10 text-white/50 flex items-center justify-center text-sm transition-all hover:border-accent hover:text-accent hover:bg-accent/10"
        >
          &#10094;
        </button>

        <div className="relative flex-1 aspect-[4/3] bg-[#111] rounded overflow-hidden">
          {slides.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              fill
              className={`object-contain transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0'}`}
              sizes="860px"
            />
          ))}
        </div>

        <button
          onClick={() => show(current + 1)}
          aria-label="Next"
          className="flex-shrink-0 w-11 h-11 rounded-full border border-white/10 text-white/50 flex items-center justify-center text-sm transition-all hover:border-accent hover:text-accent hover:bg-accent/10"
        >
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => show(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-accent w-4' : 'bg-white/20'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
