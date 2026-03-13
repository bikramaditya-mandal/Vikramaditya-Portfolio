'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const slides = [
  { src: '/Vikramaditya-Portfolio/assets/TOC.png', alt: 'Table of Contents' },
  { src: '/Vikramaditya-Portfolio/assets/JPCL_cover.jpg', alt: 'JPCL Cover' },
  { src: '/Vikramaditya-Portfolio/assets/Phd_defense.png', alt: 'PhD Defense' },
  { src: '/Vikramaditya-Portfolio/assets/AstroPAH.png', alt: 'Astro PAH' },
  { src: '/Vikramaditya-Portfolio/assets/PCCP_cover.png', alt: 'PCCP Cover' },
  { src: '/Vikramaditya-Portfolio/assets/PhD_acknowledgement.png', alt: 'PhD Acknowledgement' },
  { src: '/Vikramaditya-Portfolio/assets/bk_graduation.png', alt: 'Graduation' },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  const show = (i: number) => setCurrent((i + slides.length) % slides.length)

  useEffect(() => {
    const t = setInterval(() => show(current + 1), 5000)
    return () => clearInterval(t)
  }, [current])

  return (
    <section className="bg-[#fcfcfc] py-20 px-[5vw] border-t border-b border-[#1a1a1a]/[0.07]">
      <div className="max-w-[860px] mx-auto flex items-center gap-6">
        <button
          onClick={() => show(current - 1)}
          aria-label="Previous"
          className="flex-shrink-0 w-11 h-11 rounded-full border border-[#1a1a1a]/10 text-[#1a1a1a]/40 flex items-center justify-center text-sm transition-all hover:border-[#3d8bfd] hover:text-[#3d8bfd] hover:bg-[#3d8bfd]/10"
        >
          &#10094;
        </button>

        <div className="relative flex-1 aspect-[4/3] bg-[#f0f0f0] rounded overflow-hidden">
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
          className="flex-shrink-0 w-11 h-11 rounded-full border border-[#1a1a1a]/10 text-[#1a1a1a]/40 flex items-center justify-center text-sm transition-all hover:border-[#3d8bfd] hover:text-[#3d8bfd] hover:bg-[#3d8bfd]/10"
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
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-[#3d8bfd] w-4' : 'bg-[#1a1a1a]/20'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
