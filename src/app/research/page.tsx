'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FadeUp from '@/components/FadeUp'

type SubTopic = {
  title: string
  body: string[]
  images?: { src: string; alt: string; caption?: string }[]
  paper?: { label: string; href: string }
}

type Topic = {
  num: string
  title: string
  intro?: string[]
  subTopics?: SubTopic[]
  body?: string[]
  formula?: string
  images?: { src: string; alt: string; caption?: string }[]
  paper?: { label: string; href: string }
}

type Era = {
  label: string
  inst: string
  title: string
  images?: { src: string; alt: string; caption?: string }[]
  topics: Topic[]
}

const eras: Era[] = [
  {
    label: '2023 — Present',
    inst: 'University of Nevada Las Vegas',
    title: 'Postdoctoral Research',
    topics: [
      {
        num: '01',
        title: 'Quantum Controlled Ultracold Inelastic Scattering',
        intro: [
          'Quantum control of chemical reactions and inelastic scattering of molecules remain at the forefront of modern theoretical and computational chemistry. Quantum control can be achieved through quantum interference effects or quantum state preparations of molecular states, e.g., controlling alignment or orientations of the reactant molecules, generally referred to as stereodynamics. These effects are amplified at low temperatures where quantum effects dominate.',
          'Recent advances in molecular cooling and trapping technologies have also led to renewed interest in inelastic and reactive collisions of atom-molecule and molecule-molecule systems. Indeed, collisions of cold and ultracold diatomic molecules are an active area of experimental and theoretical research due to their applications to quantum sensing, ultracold chemistry, quantum computing, and quantum information processing. Although, diatomic species such as CaF, SrF, RbCs, KRb, NaK, etc. are preferred molecules for such applications, their small rotational constants lead to high densities of states making rigorous quantum calculations of diatom-diatom collisions involving these molecules computationally intractable. Therefore, lighter diatomic molecules, such as H₂ and its isotopologues, are generally preferred to benchmark theoretical studies against experiments.',
          'Prof. Richard N. Zare and his research group at Stanford University have recently developed a coherent optical technique, called Stark-induced adiabatic Raman passage (SARP), to study quantum controlled cold collisions of light molecular systems, such as H₂, HD and D₂. The SARP technique allows preparation of a phase-coherent superposition of degenerate aligned states (mj) within a single ro-vibrational state.',
        ],
        subTopics: [
          {
            title: 'HD and D₂ Collisions with He',
            body: [
              'Please refer to our research article for more details. A brief description is provided here.',
              'The goal of this work is to carry out a rigorous theoretical investigation of rotational quenching of HD and D₂ by collisions with He for vibrational levels v = 2 and v = 4 and rotational levels j = 2 and j = 4 of the two molecules. Prior studies of He + HD for v = 1 and He + D₂ for v = 2 employed the BSP3 potential energy surface (PES) for the He-H₂ system.',
              'In this work, we primarily focus on rotational quenching from j = 2 → j\' = 0 and j = 2 → j\' = 1 in v = 2, j = 2 → j\' = 1 and j = 4 → j\' = 3 in v = 4 for HD, and j = 4 → j\' = 2 and j = 2 → j\' = 0 in v = 4 for D₂, induced by collisions with He in the cold energy regime.',
              'A comparison between the experimental H-SARP angular distribution and our theoretical results for rotational quenching in HD (v = 2, j = 2) + He collisions is also done. The comparison is favorable for both Δj = -2 and Δj = -1 transitions for forward and backward scattering angles.',
            ],
            images: [
              { src: '/Vikramaditya-Portfolio/assets/Fig_HD_He_sigma_page-0001.jpg', alt: 'HD + He integral cross sections', caption: 'Integral cross sections for HD + He rotational quenching' },
              { src: '/Vikramaditya-Portfolio/assets/Fig_HD_He_exp_v2_page-0001.jpg', alt: 'HD + He H-SARP comparison v=2', caption: 'Comparison with H-SARP experimental angular distribution (v = 2)' },
            ],
            paper: { label: 'Journal of Chemical Physics, 162, 104201 (2025)', href: 'https://doi.org/10.1063/5.0250522' },
          },
          {
            title: 'Cold Collisions of D₂ (v = 4) with Ne',
            body: [
              'Please refer to our research article for more details. A brief description is provided here.',
              'Resonant scattering of highly vibrationally excited and aligned D₂ in cold collisions with Ne has recently been probed experimentally using the SARP technique by the research group of Prof. Richard N. Zare. A partial-wave analysis and numerical fitting of the experimental data attributed the measured angular distribution to an l = 2 shape resonance near 1 kelvin.',
              'Our main goal of this project is to compare against the SARP experiments for rotational quenching of j = 2 → j\' = 0 in v = 4 of D₂. A strong resonance was found at ~2 cm⁻¹ with a peak cross section value of about ~20 Å².',
            ],
            images: [
              { src: '/Vikramaditya-Portfolio/assets/Fig_D2_Ne_exp_old_page-0001.jpg', alt: 'D₂ + Ne DCS comparison thermal', caption: 'DCS comparison with thermal crossed-beam experiments' },
              { src: '/Vikramaditya-Portfolio/assets/Fig_D2_Ne_ICS_L_Lp_page-0001.jpg', alt: 'D₂ + Ne ICS partial wave analysis', caption: 'Partial-wave resolved ICS showing l = 5 shape resonance' },
              { src: '/Vikramaditya-Portfolio/assets/Fig_D2_Ne_HSARP_XSARP_page-0001.jpg', alt: 'D₂ + Ne H-SARP vs X-SARP', caption: 'Comparison with H-SARP and X-SARP experimental angular distributions' },
            ],
            paper: { label: 'Journal of Chemical Physics, 162, 164307 (2025)', href: 'https://doi.org/10.1063/5.0266360' },
          },
          {
            title: 'Collision of HD + D₂',
            body: [
              'Please refer to our research article for more details. A brief description is provided here.',
              'In this work, we performed full-dimensional quantum calculations of stereodynamic control of HD(v = 1, j = 2) + D₂ collisions for the first time that has been probed experimentally by Prof. Richard N. Zare and his research group at Stanford University using the SARP technique.',
              'It is found that the dominant inelastic channel in the rotational quenching of HD involves an energy transfer to D₂ leading to jD₂ = 0 → j\'D₂ = 2 rotational excitation of the D₂ molecule. This transition conserves the total molecular rotational angular momentum and has a cross section that is four times larger than that of direct relaxation.',
            ],
            images: [
              { src: '/Vikramaditya-Portfolio/assets/Fig_HD_D2_sigma_1200_1000_1002_page-0001.jpg', alt: 'HD + D₂ cross sections', caption: 'State-to-state cross sections for HD + D₂ collisions' },
              { src: '/Vikramaditya-Portfolio/assets/Fig_HD_D2_HSARP_VSARP_dj1_page-0001.jpg', alt: 'HD + D₂ SARP Δj=−1 comparison', caption: 'H-SARP and V-SARP comparison for Δj = −1 transition' },
              { src: '/Vikramaditya-Portfolio/assets/Fig_HD_D2_VSARP_dj2_page-0001.jpg', alt: 'HD + D₂ SARP Δj=−2 comparison', caption: 'H-SARP and V-SARP comparison for Δj = −2 transition' },
              { src: '/Vikramaditya-Portfolio/assets/Fig_HD_D2_exp_454_703_meV_page-0001.jpg', alt: 'HD + D₂ DCS thermal comparison', caption: 'DCS comparison at 454 and 703 meV collision energies' },
            ],
            paper: { label: 'Physical Chemistry Chemical Physics, 26, 18368 (2024)', href: 'https://doi.org/10.1039/D4CP01737D' },
          },
        ],
      },
      {
        num: '02',
        title: 'Neural Network–Assisted Quantum Scattering',
        intro: [
          'One of the major interests of astronomers is to observe different bodies in our solar system. Several state-of-the-art observatories, like Atacama Large Millimeter Array (ALMA) radio telescope, and other space-exploration telescopes, such as the Spitzer space telescope and, most recently, the James Webb space telescope (JWST), have been deployed to obtain data.',
          'To understand and correlate with the observed rotational spectra obtained by ALMA or JWST missions, we need modeling with radiation transfer codes, such as RADEX, LIME, or MOLPOP, which in turn requires state-to-state collisional rate coefficients as input for the rotational excitation and quenching processes.',
          'Our research employs a machine-learning model to compute more rate-coefficients for complex collisions, such as H₂O + H₂O using the existing computed data. We propose a methodology that exploits the physical nature of the cross sections or rate coefficients data to train and build a multi-layer perceptron (MLP) model using neural-network.',
        ],
        subTopics: [
          {
            title: 'Rate Coefficients of H₂O + H₂O Using MLP Model',
            body: [
              'Please refer to our research article for more details. A brief description is provided here.',
              'The dependencies of cross sections on the energy difference between initial and final states of the colliding partners indicate a single-exponential behavior near ΔE = 0 regime, while a double-exponential behavior over the entire range of ΔE.',
              'Our MLP model is composed of one input layer with thirteen neurons corresponding to each feature of our data set, five hidden layers with each having 128 neurons, and one output layer with a single neuron corresponding to the cross section. The agreement between MQCT data and MLP model predicted data is found to be excellent overall.',
            ],
            images: [
              { src: '/Vikramaditya-Portfolio/assets/Fig_H2O_H2O_sigma_vs_dE.png', alt: 'H₂O cross sections vs ΔE', caption: 'Cross sections as a function of energy gap ΔE showing exponential behavior' },
              { src: '/Vikramaditya-Portfolio/assets/Fig_H2O_H2O_MLP_fig_page-0001.jpg', alt: 'MLP neural network architecture', caption: 'Multi-layer perceptron architecture for rate coefficient prediction' },
              { src: '/Vikramaditya-Portfolio/assets/Fig_H2O_H2O_TACS_Trot300_page-0001.jpg', alt: 'TACS comparison Trot=300K', caption: 'MQCT vs MLP thermally-averaged cross sections at T = 300 K' },
            ],
            paper: { label: 'Physical Chemistry Chemical Physics, 27, 23000 (2025)', href: 'https://doi.org/10.1039/D5CP02812D' },
          },
        ],
      },
      {
        num: '03',
        title: 'Full-Dimensional Quantum Mechanics of Ultracold Reactions',
        body: [
          'One of the major interests of scientists in chemistry is to understand reactions better. When we look at a reaction from a microscopic level, a reaction is nothing but a form of molecular scattering. Therefore, reactive scattering is crucial to get more insight into chemical reaction.',
          'Due to the strong interaction potential, alkali metals have been especially interesting to researchers in this field. My goal for this project is to study reaction of lithium trimer together with isotopic substitution. This is a work in progress.',
        ],
        formula: 'Li⁷ + Li⁶₂ → Li⁷Li⁶ + Li⁶',
      },
    ],
  },
  {
    label: 'May 2021 — Dec 2022',
    inst: 'Marquette University',
    title: 'Postdoctoral Research',
    topics: [
      {
        num: '04',
        title: 'Database of Rate Coefficients for H₂O + H₂O & Astronomical Modeling',
        body: [
          'Astronomers need rate-coefficients of inelastic collisions of molecules to interpret the spectroscopic data obtained by various state-of-the-art observatories, like ALMA, Spitzer, and JWST. However, computing these rate-coefficients accurately using quantum mechanics for collisions of polyatomic molecules, such as H₂O + H₂O, is impossible.',
          'We performed new calculations of collision cross sections for state-to-state transitions between the rotational states in an H₂O + H₂O system. Calculations were carried out using a mixed quantum-classical theory (MQCT) approach. The large basis set permits us to predict thermally averaged cross sections for 441 transitions in para- and ortho-H₂O.',
          'A two-temperature model was employed that assumed translational and rotational degrees of freedom achieve their own equilibria independently. We find a change of up to 20% in the H₂O rotational level populations. This research was done in collaboration with Prof. François Lique at CNRS-Université de Rennes and Prof. Martin A. Cordiner at NASA GSFC.',
        ],
      },
      {
        num: '05',
        title: 'Collisional Energy Transfer of PAHs in the Interstellar Medium',
        body: [
          'A computationally affordable methodology is developed to predict cross sections and rate coefficients for collisional quenching and excitation of large molecules in space, such as PAHs using mixed quantum/classical theory (MQCT).',
          'The method is applied to compute cross sections for rotational excitation and quenching of a benzene molecule (C₆H₆) by collisions with He atoms in a broad range of energies, using a very large basis set of rotational eigenstates up to j = 60, and close to one million nonzero matrix elements for state-to-state transitions.',
        ],
        images: [
          { src: '/Vikramaditya-Portfolio/assets/AstroPAH.png', alt: 'Polycyclic aromatic hydrocarbon structure', caption: 'PAH molecular structure relevant to ISM collisional studies' },
        ],
      },
    ],
  },
  {
    label: 'Aug 2016 — May 2021',
    inst: 'Marquette University',
    title: 'PhD Research',
    topics: [
      {
        num: '06',
        title: 'Development of Mixed Quantum/Classical Theory (MQCT)',
        body: [
          'Inelastic molecular collisions represent a fundamental chemical and physical process, in which the energetically excited molecule in a bath gas exchanges its internal energy with quenchers and finally gets stabilized.',
          'We developed an alternative method to describe the molecular energy transfer process — mixed quantum/classical theory (MQCT). It treats internal degrees of freedom quantum mechanically, while the scattering is treated classically. A significant speed up is achieved by classical-trajectory treatment of the scattering process.',
          'A user-ready code named "MQCT" has been developed and made available to the community. To our best knowledge, no other code can do the inelastic scattering calculations of two general asymmetric top rotors.',
        ],
      },
      {
        num: '07',
        title: 'Adiabatic Trajectory Approximation (AT-MQCT)',
        body: [
          'Although MQCT is more affordable than full quantum treatment, there are still molecular systems and collision conditions where even MQCT calculations become computationally demanding.',
          'The adiabatic trajectory approximation conducts MQCT calculations in two consecutive steps. During the first step, the molecular basis size is restricted to degenerate states of the initial rotational channel only. This information is then used to propagate the quantum equations of motion along this pre-computed adiabatic path.',
          'This method was applied to H₂O + H₂ and a very significant acceleration of two orders of magnitude is obtained at high collision energies, with results still in excellent agreement with full quantum calculations.',
        ],
      },
      {
        num: '08',
        title: 'Differential Cross Sections for Inelastic Transitions Using MQCT',
        body: [
          'In this project, we expand on calculations of differential cross sections using MQCT. It is found that MQCT is considerably improved by using integer values of orbital angular momentum l, just like in quantum theory, instead of treating it as a continuous classical variable.',
          'Differential cross sections for inelastic scattering were reported for the first time. Phase appears to be a dominant factor in the elastic scattering cross section, and interference between different values of l produces the characteristic quantum oscillatory patterns.',
        ],
        images: [
          { src: '/Vikramaditya-Portfolio/assets/PhD_acknowledgement.png', alt: 'PhD thesis acknowledgement', caption: 'From the PhD thesis — Marquette University, 2021' },
        ],
      },
    ],
  },
  {
    label: 'Aug 2015 — Apr 2016 & 2014 — 2015',
    inst: 'IIT Guwahati & Visva-Bharati University',
    title: 'Early Research',
    topics: [
      {
        num: '09',
        title: 'Molecular Dynamics of λ-Protein with a Surfactant (IIT Guwahati)',
        body: [
          'Proteins are one of the major building blocks of our body. Their folded structure and spatial orientation plays a crucial role in doing their jobs. Surfactants have both hydrophilic and hydrophobic parts present in their molecular structure which helps them to stick to a protein and damage the protein\'s structural integrity.',
          'Our choice of surfactant is dodine which is normally used as fungicide. Dodine can denature proteins even at a low concentration, such as millimolar concentration — far more potent than typical chemical denaturants.',
        ],
        paper: { label: 'Physical Chemistry Chemical Physics, 19, 13160 (2017)', href: 'https://doi.org/10.1039/C6CP08289K' },
      },
      {
        num: '10',
        title: 'Vibration Energy Harvesting — MS Thesis (Visva-Bharati)',
        body: [
          'Modern human life is surrounded by tiny electronic devices powered by batteries. There is a growing need for an alternative technology that can operate without needing frequent battery replacements — this motivated research in vibration-based energy harvesting.',
          'We built numerical simulations modelling devices called vibration energy harvesters using piezoelectric materials. A main property of piezoelectric materials is that they generate voltage when bent or stretched. Our primary focus was on understanding the effect of different initial conditions on the efficiency of energy capture.',
        ],
        paper: { label: 'The European Physical Journal B, 89, 224 (2016)', href: 'https://doi.org/10.1140/epjb/e2016-70271-7' },
      },
    ],
  },
]

// Reusable component: images float right, text wraps around naturally
function ContentWithFloatingImages({
  body,
  images,
  formula,
  paper,
  intro,
}: {
  body?: string[]
  images?: { src: string; alt: string; caption?: string }[]
  formula?: string
  paper?: { label: string; href: string }
  intro?: string[]
}) {
  return (
    <div className="clearfix">
      {/* Float images to the right — text wraps around */}
      {images && images.length > 0 && (
        <div className="float-right ml-8 mb-6 w-[290px] max-md:float-none max-md:w-full max-md:ml-0 max-md:mb-5 flex flex-col gap-4">
          {images.map((img, i) => (
            <div key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto rounded-lg border border-[#1a1a1a]/[0.08] block"
              />
              {img.caption && (
                <p className="mt-1.5 font-mono text-[0.64rem] text-[#1a1a1a]/40 tracking-[0.04em] leading-snug">{img.caption}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Intro paragraphs */}
      {intro?.map((p, i) => (
        <p key={i} className="font-serif text-[#1a1a1a]/85 text-[0.95rem] leading-[1.9] mb-4">{p}</p>
      ))}

      {/* Body paragraphs — naturally wrap around the float */}
      {body?.map((p, i) => (
        <p
          key={i}
          className="font-serif text-[#1a1a1a]/85 text-[0.95rem] leading-[1.9] mb-4"
          dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#1a1a1a] font-semibold">$1</strong>') }}
        />
      ))}

      {/* Formula */}
      {formula && (
        <div className="font-mono text-[0.95rem] text-[#3d8bfd] bg-[#3d8bfd]/[0.06] border border-[#3d8bfd]/20 border-l-[3px] border-l-[#3d8bfd] px-6 py-4 rounded my-4 tracking-[0.04em]">
          {formula}
        </div>
      )}

      {/* Paper link */}
      {paper && (
        <div className="mt-2 mb-2 clear-left">
          <a
            href={paper.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[0.75rem] text-[#3d8bfd] border border-[#3d8bfd]/30 rounded px-4 py-2 transition-all hover:bg-[#3d8bfd]/10 hover:border-[#3d8bfd]"
          >
            ↗ Read Paper — {paper.label}
          </a>
        </div>
      )}
    </div>
  )
}

export default function Research() {
  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({})
  const [openSubs, setOpenSubs] = useState<Record<string, boolean>>({})

  function toggleTopic(key: string) {
    setOpenTopics(prev => ({ ...prev, [key]: !prev[key] }))
  }
  function toggleSub(key: string) {
    setOpenSubs(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      <Nav />

      {/* Hero */}
      <div className="bg-[#fcfcfc] border-b border-[#1a1a1a]/[0.07]">
        <div className="pt-36 pb-16 max-w-[1200px] mx-auto px-16 max-md:px-6">
          <FadeUp>
            <span className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#3d8bfd] mb-3 block">Research</span>
            <h1 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-[#1a1a1a] leading-[1.05] tracking-[-0.03em] mb-3">
              Exploring the <span className="text-[#3d8bfd]">Quantum Frontier</span>
            </h1>
            <p className="font-sans text-[#1a1a1a]/70 text-[0.9rem] max-w-[600px] leading-relaxed">
              A detailed account of my research across ultracold molecular collisions, neural network–assisted scattering, and astrophysical energy transfer — from PhD through current postdoctoral work.
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="bg-[#fcfcfc]">
        {eras.map(era => (
          <div key={era.label}>

            {/* Era header — fixed-width left column so all titles align perfectly */}
            <FadeUp>
              <div className="border-y border-[#1a1a1a]/[0.07] bg-[#f5f5f5] py-6 px-16 max-md:px-6">
                <div className="max-w-[1200px] mx-auto flex items-center gap-0 max-md:flex-col max-md:gap-1 max-md:items-start">
                  {/* Fixed-width meta column — same width on every era row */}
                  <div className="w-[260px] flex-shrink-0 pr-6 max-md:w-auto max-md:pr-0 max-md:mb-2">
                    <span className="block font-sans text-[0.68rem] font-semibold text-[#3d8bfd] tracking-[0.15em] uppercase leading-tight mb-0.5">
                      {era.label}
                    </span>
                    <span className="font-mono text-[0.7rem] text-[#1a1a1a]/45 leading-tight">
                      {era.inst}
                    </span>
                  </div>
                  {/* Vertical divider */}
                  <div className="w-px h-9 bg-[#1a1a1a]/10 flex-shrink-0 mr-6 max-md:hidden" />
                  {/* Era title — always starts at same x-position */}
                  <h2 className="font-sans text-[1.35rem] font-bold text-[#1a1a1a] tracking-[-0.02em] leading-snug">
                    {era.title}
                  </h2>
                </div>
              </div>
            </FadeUp>

            {/* Topics */}
            {era.topics.map(topic => {
              const topicKey = topic.num
              const isOpen = !!openTopics[topicKey]

              return (
                <FadeUp key={topicKey}>
                  <div
                    className="border-b border-[#1a1a1a]/[0.07]"
                    id={topic.num === '01' ? 'ultracold' : topic.num === '02' ? 'nn-scattering' : undefined}
                  >
                    {/* Accordion trigger */}
                    <button
                      onClick={() => toggleTopic(topicKey)}
                      className="w-full flex items-center gap-6 px-16 py-5 text-left transition-colors hover:bg-[#3d8bfd]/[0.03] max-md:px-6"
                    >
                      <span className="font-mono text-[0.65rem] text-[#3d8bfd] tracking-[0.1em] opacity-70 min-w-[24px]">{topic.num}</span>
                      <span className={`flex-1 font-sans text-[0.92rem] font-medium tracking-[0.01em] transition-colors ${isOpen ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/60'}`}>
                        {topic.title}
                      </span>
                      <span className={`font-sans text-2xl text-[#3d8bfd] font-light leading-none transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                    </button>

                    {/* Expanded content */}
                    <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[9000px]' : 'max-h-0'}`}>
                      <div className="px-16 pb-10 max-md:px-6">

                        {/* Intro paragraphs — no images at this level */}
                        {topic.intro?.map((p, i) => (
                          <p key={i} className="font-serif text-[#1a1a1a]/85 text-[0.95rem] leading-[1.9] mb-4">{p}</p>
                        ))}

                        {/* Body + floating images */}
                        {(topic.body || topic.images || topic.formula || topic.paper) && (
                          <ContentWithFloatingImages
                            body={topic.body}
                            images={topic.images}
                            formula={topic.formula}
                            paper={topic.paper}
                          />
                        )}

                        {/* Sub-topics */}
                        {topic.subTopics?.map((sub, si) => {
                          const subKey = `${topicKey}-${si}`
                          const subOpen = !!openSubs[subKey]
                          return (
                            <div key={si} className="mt-4 border border-[#1a1a1a]/[0.08] rounded-lg overflow-hidden">
                              <button
                                onClick={() => toggleSub(subKey)}
                                className="w-full flex items-center justify-between px-6 py-4 bg-[#f5f5f5] text-left transition-colors hover:bg-[#3d8bfd]/[0.05]"
                              >
                                <span className="font-sans text-[1rem] font-semibold text-[#1a1a1a]">{sub.title}</span>
                                <span className={`font-sans text-xl text-[#3d8bfd] font-light ml-4 flex-shrink-0 transition-transform duration-300 ${subOpen ? 'rotate-45' : ''}`}>+</span>
                              </button>
                              <div className={`overflow-hidden transition-all duration-500 ${subOpen ? 'max-h-[6000px]' : 'max-h-0'}`}>
                                <div className="px-6 py-5 bg-white border-t border-[#1a1a1a]/[0.06]">
                                  <ContentWithFloatingImages
                                    body={sub.body}
                                    images={sub.images}
                                    paper={sub.paper}
                                  />
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        ))}
      </div>

      <Footer />
    </>
  )
}