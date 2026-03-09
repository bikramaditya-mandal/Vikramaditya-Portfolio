'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FadeUp from '@/components/FadeUp'

type Category = 'all' | 'preprint' | 'journal' | 'conference'

const preprints = [
  {
    year: '—',
    authors: 'Mandal B.* , Stordock J.* (*equal contribution), Naduvalath B.',
    title: 'Stereodynamic control of ultracold collisions of BeO with He',
    journal: 'in preparation',
    status: 'In Prep',
  },
  {
    year: '—',
    authors: 'Mandal B., Jóźwiak H., Wcisło P., Naduvalath B.',
    title: 'Full-dimensional quantum scattering calculations of rovibrationally excited HD + HD collisions',
    journal: 'ready for submission',
    status: 'Ready',
  }
]

type JournalEntry = {
  year: string
  authors: string
  title: string
  journal: string
  href: string
  cover?: boolean
  note?: string
}

const journals: JournalEntry[] = [
  { year: '2025', authors: 'Santiago Perez-Hernando, Manuel Lara, Mandal B., Sanz-Sanz C., Jambrina P., Naduvalath B., Aoiz J.', title: 'Resonances in inelastic collisions of Ne+D₂ in the cold energy regime', journal: 'Journal of Chemical Physics, 163, 224304, 2025', href: 'https://doi.org/10.1063/5.0303163' },
  { year: '2025', authors: 'Mandal B., Babikov D., Stancil P., Forrey R., Krems R., Naduvalath B.', title: 'Neural network ensemble for computing cross sections for rotational transitions in H₂O + H₂O collisions', journal: 'Physical Chemistry Chemical Physics, 27, 23000, 2025', note: "Honoring Prof. Narayana Sathyamurthy's 75th birthday", href: 'https://doi.org/10.1039/D5CP02812D' },
  { year: '2025', authors: 'Sanz-Sanz C.*, Mandal B.* (*equal contribution), Jambrina P., Aoiz F. J., Naduvalath B.', title: 'Cold collisions of highly vibrationally excited and aligned D₂ with Ne', journal: 'Journal of Chemical Physics, 162, 164307, 2025', href: 'https://doi.org/10.1063/5.0266360' },
  { year: '2025', authors: 'Mandal B., Patkowski K., Jambrina P., Aoiz F. J., Naduvalath B.', title: 'Stereodynamics of cold HD and D₂ collisions with He', journal: 'Journal of Chemical Physics, 162, 104201, 2025', href: 'https://doi.org/10.1063/5.0250522' },
  { year: '2024', authors: 'Joy C., Bostan D., Mandal B., Babikov D.', title: 'Rate coefficients for rotational state-to-state transitions in H₂O + H₂ collisions as predicted by mixed quantum/classical theory', journal: 'Astronomy & Astrophysics, 692, A229, 2024', href: 'https://doi.org/10.1051/0004-6361/202451975' },
  { year: '2024', authors: 'Bostan D., Mandal B., Babikov D.', title: 'Mixed quantum/classical theory for rotationally inelastic scattering of identical collision partners revised', journal: 'Physical Chemistry Chemical Physics, 26, 27567, 2024', href: 'https://doi.org/10.1039/D4CP02806F' },
  { year: '2024', authors: 'Mandal B., Żółtowski M., Cordiner M., Lique F., Babikov D.', title: 'Rotational state-to-state transition rate coefficients for H₂O + H₂O collisions at non-equilibrium conditions', journal: 'Astronomy & Astrophysics, 688, A208, 2024', href: 'https://doi.org/10.1051/0004-6361/202450738' },
  { year: '2024', authors: 'Mandal B., Kroft J., Jambrina P., Guo H., Aoiz F. J., Naduvalath B.', title: 'Stereodynamical control of cold HD + D₂ collisions', journal: 'Physical Chemistry Chemical Physics, 26, 18368, 2024', href: 'https://doi.org/10.1039/D4CP01737D' },
  { year: '2024', authors: 'Joy C., Mandal B., Bostan D., Dubernet M. L., Babikov D.', title: 'Mixed quantum/classical theory (MQCT) approach to the dynamics of molecule–molecule collisions in complex systems', journal: 'Faraday Discussions, 251, 225, 2024', href: 'https://doi.org/10.1039/D3FD00166K' },
  { year: '2024', authors: 'Bostan D., Mandal B., Joy C., Żółtowski M., Lique F., Loreau J., Quintas-Sánchez E., Batista-Planas A., Dawes R., Babikov D.', title: 'Mixed quantum/classical calculations of rotationally inelastic scattering in the CO + CO system', journal: 'Physical Chemistry Chemical Physics, 26, 6627, 2024', href: 'https://doi.org/10.1039/D3CP05369E', cover: true },
  { year: '2024', authors: 'Dubernet M. L., ..., Mandal B., ..., et al.', title: 'BASECOL2023 scientific content', journal: 'Astronomy & Astrophysics, 683, A40, 2024', href: 'https://doi.org/10.1051/0004-6361/202348233' },
  { year: '2024', authors: 'Mandal B., Bostan D., Joy C., Babikov D.', title: 'MQCT 2024: A program for calculations of inelastic scattering of two molecules', journal: 'Computer Physics Communications, 294, 108938, 2024', href: 'https://doi.org/10.1016/j.cpc.2023.108938' },
  { year: '2023', authors: 'Mandal B., Babikov D.', title: 'Improved temperature dependence of rate coefficients for rotational state-to-state transitions in H₂O + H₂O collisions', journal: 'Astronomy & Astrophysics, 678, A51, 2023', href: 'https://doi.org/10.1051/0004-6361/202346895' },
  { year: '2023', authors: 'Joy C., Mandal B., Bostan D., Babikov D.', title: 'Mixed quantum/classical theory for rotational energy exchange in symmetric-top-rotor + linear-rotor collisions: ND₃ + D₂', journal: 'Physical Chemistry Chemical Physics, 25, 17287, 2023', href: 'https://doi.org/10.1039/D3CP01642K' },
  { year: '2023', authors: 'Bostan D., Mandal B., Joy C., Babikov D.', title: 'Description of quantum interference using mixed quantum/classical theory of inelastic scattering', journal: 'Physical Chemistry Chemical Physics, 25, 15683, 2023', href: 'https://doi.org/10.1039/D3CP01070H' },
  { year: '2023', authors: 'Mandal B., Babikov D.', title: 'Rate coefficients for rotational state-to-state transitions in H₂O + H₂O collisions for cometary and planetary applications', journal: 'Astronomy & Astrophysics, 671, A51, 2023', href: 'https://doi.org/10.1051/0004-6361/202245699' },
  { year: '2023', authors: 'Mandal B., Joy C., Bostan D., Eng A., Babikov D.', title: 'Adiabatic trajectory approximation — new general method in the toolbox of mixed quantum/classical theory for collisional energy transfer', journal: 'The Journal of Physical Chemistry Letters, 14, 817, 2023', href: 'https://doi.org/10.1021/acs.jpclett.2c03328', cover: true },
  { year: '2022', authors: 'Mandal B., Joy C., Semenov A., Babikov D.', title: 'Mixed quantum/classical theory for collisional quenching of PAHs in the interstellar media', journal: 'ACS Earth and Space Chemistry, 6, 521, 2022', href: 'https://doi.org/10.1021/acsearthspacechem.1c00418' },
  { year: '2020', authors: 'Mandal B., Semenov A., Babikov D.', title: 'Adiabatic trajectory approximation within the framework of mixed quantum/classical theory', journal: 'The Journal of Physical Chemistry A, 124, 9877, 2020', href: 'https://doi.org/10.1021/acs.jpca.0c07547' },
  { year: '2020', authors: 'Boursier C., Mandal B., Dubernet M. L., Babikov D.', title: 'New H₂O-H₂O collisional rate coefficients for cometary applications', journal: 'Monthly Notices of the Royal Astronomical Society, 498, 5489, 2020', href: 'https://doi.org/10.1093/mnras/staa2713' },
  { year: '2020', authors: 'Semenov A.*, Mandal B.* (*equal contribution), Babikov D.', title: 'MQCT: User-ready program for calculations of inelastic scattering of two molecules', journal: 'Computer Physics Communications, 252, 107155, 2020', href: 'https://doi.org/10.1016/j.cpc.2020.107155' },
  { year: '2018', authors: 'Mandal B., Semenov A., Babikov D.', title: 'Calculations of differential cross sections using mixed quantum/classical theory of inelastic scattering', journal: 'The Journal of Physical Chemistry A, 122, 6157, 2018', href: 'https://doi.org/10.1021/acs.jpca.8b04025' },
  { year: '2017', authors: 'Borgohain G., Mandal B., Paul S.', title: 'Molecular dynamics approach to understand the denaturing effect of a millimolar concentration of dodine on a λ-repressor', journal: 'Physical Chemistry Chemical Physics, 19, 13160, 2017', href: 'https://doi.org/10.1039/C6CP08289K' },
  { year: '2016', authors: 'Ray S., Mondal S., Mandal B., Bag B. C.', title: 'The role of interplay between the potential and ambient energies on the vibration energy harvesting', journal: 'The European Physical Journal B, 89, 224, 2016', href: 'https://doi.org/10.1140/epjb/e2016-70271-7' },
]

const conferences = [
  { year: '2023', authors: 'Mandal B., Bostan D., Joy C., Babikov D.', title: 'MQCT – A Program for Calculations of Inelastic Scattering of Two Molecules', journal: 'VIRT&L-COMM, ISSN: 2279-8773, 25, 1, 2023', href: 'http://services.chm.unipg.it/ojs/index.php/virtlcomm/article/view/283' },
]

const filters: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Preprints', value: 'preprint' },
  { label: 'Journal Articles', value: 'journal' },
  { label: 'Conference', value: 'conference' },
]

function highlightAuthor(authors: string) {
  const parts = authors.split(/(Mandal B\.[\*]?)/g)
  return parts.map((part, i) =>
    part.startsWith('Mandal B') ? (
      <span key={i} className="text-[#3d8bfd] font-semibold">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

export default function Publications() {
  const [active, setActive] = useState<Category>('all')

  const total =
    (active === 'all' || active === 'preprint' ? preprints.length : 0) +
    (active === 'all' || active === 'journal' ? journals.length : 0) +
    (active === 'all' || active === 'conference' ? conferences.length : 0)

  return (
    <>
      <Nav />

      {/* Hero */}
      <div className="bg-[#fcfcfc] border-b border-[#1a1a1a]/[0.07]">
        <div className="pt-36 pb-10 max-w-[1200px] mx-auto px-16 max-md:px-6">
          <FadeUp>
            <span className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#3d8bfd] mb-3 block">Publications</span>
            <h1 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-[#1a1a1a] leading-[1.05] tracking-[-0.03em] mb-3">
              Peer-Reviewed <span className="text-[#3d8bfd]">Research</span>
            </h1>
            <p className="font-sans text-[#1a1a1a]/70 text-[0.9rem] max-w-[600px] leading-relaxed">
              A complete list of my peer-reviewed journal articles, conference proceedings, and upcoming manuscripts.{' '}
              <span className="text-[#3d8bfd] font-semibold">My name</span> is highlighted in each entry.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-[#f5f5f5] border-b border-[#1a1a1a]/[0.07] px-16 py-5 max-md:px-6 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex gap-2 flex-wrap">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`font-sans text-[0.72rem] font-medium tracking-[0.1em] uppercase px-4 py-1.5 rounded-full border transition-all
                ${active === f.value
                  ? 'bg-[#3d8bfd] border-[#3d8bfd] text-white'
                  : 'border-[#1a1a1a]/[0.12] text-[#1a1a1a]/50 hover:border-[#3d8bfd] hover:text-[#3d8bfd] bg-transparent'}`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <span className="font-mono text-[0.72rem] text-[#1a1a1a]/40">{total} article{total !== 1 ? 's' : ''}</span>
      </div>

      <div className="bg-[#fcfcfc]">
        <div className="max-w-[1200px] mx-auto px-16 pb-20 max-md:px-6">

          {/* Preprints */}
          {(active === 'all' || active === 'preprint') && (
            <PubGroup label="Preprints & Upcoming">
              {preprints.map((p, i) => (
                <FadeUp key={i} delay={i * 50}>
                  <div className="grid grid-cols-[52px_1fr_auto] gap-6 items-start py-5 border-b border-[#1a1a1a]/[0.07] max-sm:grid-cols-[40px_1fr]">
                    <span className="font-mono text-[0.72rem] text-[#3d8bfd] pt-0.5">{p.year}</span>
                    <div>
                      <p className="font-sans text-[0.8rem] text-[#1a1a1a]/50 mb-1 leading-[1.5]">
                        {highlightAuthor(p.authors)}
                      </p>
                      <p className="font-sans text-[0.88rem] font-semibold text-[#1a1a1a] leading-[1.5] mb-1">{p.title}</p>
                      <p className="font-mono text-[0.72rem] text-[#1a1a1a]/40">{p.journal}</p>
                    </div>
                    <div className="pt-0.5 max-sm:hidden">
                      <span className="font-mono text-[0.62rem] text-[#1a1a1a]/40 border border-[#1a1a1a]/[0.10] rounded px-3 py-1 uppercase tracking-wider whitespace-nowrap">
                        {p.status}
                      </span>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </PubGroup>
          )}

          {/* Journal articles */}
          {(active === 'all' || active === 'journal') && (
            <PubGroup label="Peer-Reviewed Journal Articles">
              {journals.map((p, i) => (
                <FadeUp key={i} delay={i * 35}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-[52px_1fr_auto] gap-6 items-start py-5 border-b border-[#1a1a1a]/[0.07] transition-colors hover:bg-[#3d8bfd]/[0.02] group max-sm:grid-cols-[40px_1fr]"
                  >
                    <span className="font-mono text-[0.72rem] text-[#3d8bfd] pt-0.5">{p.year}</span>
                    <div>
                      <p className="font-sans text-[0.8rem] text-[#1a1a1a]/50 mb-1 leading-[1.5]">
                        {highlightAuthor(p.authors)}
                      </p>
                      <p className="font-sans text-[0.88rem] font-semibold text-[#1a1a1a] leading-[1.5] mb-1">
                        {p.title}
                        {p.cover && (
                          <span className="inline-block ml-2 bg-[#3d8bfd] text-white text-[0.58rem] font-mono px-1.5 py-0.5 rounded-sm tracking-wider uppercase align-middle">
                            Cover
                          </span>
                        )}
                      </p>
                      <p className="font-mono text-[0.72rem] text-[#1a1a1a]/40">{p.journal}</p>
                      {p.note && <p className="font-serif text-[0.72rem] text-[#1a1a1a]/40 mt-0.5 italic">{p.note}</p>}
                    </div>
                    <div className="pt-0.5 max-sm:hidden">
                      <span className="font-mono text-[0.68rem] text-[#3d8bfd] border border-[#3d8bfd]/30 rounded px-3 py-1 transition-all group-hover:bg-[#3d8bfd]/10 group-hover:border-[#3d8bfd] whitespace-nowrap">
                        DOI ↗
                      </span>
                    </div>
                  </a>
                </FadeUp>
              ))}
            </PubGroup>
          )}

          {/* Conference */}
          {(active === 'all' || active === 'conference') && (
            <PubGroup label="Conference Proceedings">
              {conferences.map((p, i) => (
                <FadeUp key={i} delay={i * 50}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-[52px_1fr_auto] gap-6 items-start py-5 border-b border-[#1a1a1a]/[0.07] transition-colors hover:bg-[#3d8bfd]/[0.02] group max-sm:grid-cols-[40px_1fr]"
                  >
                    <span className="font-mono text-[0.72rem] text-[#3d8bfd] pt-0.5">{p.year}</span>
                    <div>
                      <p className="font-sans text-[0.8rem] text-[#1a1a1a]/50 mb-1 leading-[1.5]">
                        {highlightAuthor(p.authors)}
                      </p>
                      <p className="font-sans text-[0.88rem] font-semibold text-[#1a1a1a] leading-[1.5] mb-1">{p.title}</p>
                      <p className="font-mono text-[0.72rem] text-[#1a1a1a]/40">{p.journal}</p>
                    </div>
                    <div className="pt-0.5 max-sm:hidden">
                      <span className="font-mono text-[0.68rem] text-[#3d8bfd] border border-[#3d8bfd]/30 rounded px-3 py-1 transition-all group-hover:bg-[#3d8bfd]/10 group-hover:border-[#3d8bfd] whitespace-nowrap">
                        Link ↗
                      </span>
                    </div>
                  </a>
                </FadeUp>
              ))}
            </PubGroup>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}

function PubGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-14">
      <div className="mb-6 pb-3 border-b border-[#1a1a1a]/[0.07]">
        <span className="font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[#1a1a1a]/40">{label}</span>
      </div>
      {children}
    </div>
  )
}