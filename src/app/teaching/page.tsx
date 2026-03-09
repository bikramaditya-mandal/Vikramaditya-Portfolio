'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FadeUp from '@/components/FadeUp'

type TeachingBlock = {
  title: string
  intro?: string
  items: string[]
}

type Topic = {
  num: string
  title: string
  blocks: TeachingBlock[]
}

type Era = {
  label: string
  inst: string
  title: string
  topics: Topic[]
}

const eras: Era[] = [
  {
    label: 'Fall 2023, 2024',
    inst: 'University of Nevada Las Vegas',
    title: 'Computational Chemistry',
    topics: [
      {
        num: '01',
        title: 'Curriculum Design & In-Class Instruction',
        blocks: [
          {
            title: 'Curriculum Design',
            items: [
              'Prepared in-class teaching material including Born-Oppenheimer Approximation, Hartree Self-Consistent-Field (SCF) method, and Hartree-Fock theory.',
              'Created structured lessons primarily focused on applications, helping students translate theoretical concepts into computational practice within quantum chemistry.',
            ],
          },
          {
            title: 'In-Class Instruction',
            intro: 'Guided students through practical quantum chemistry calculations using Gaussian09, focusing on:',
            items: [
              'Molecular geometry and energy optimization',
              'Vibrational frequency analysis',
              'Construction of potential energy surfaces (PES)',
              'Transition state identification and reaction path mapping via intrinsic reaction coordinates (IRC)',
            ],
          },
          {
            title: 'Developing Software Skills',
            items: [
              'Taught students to analyze and interpret Gaussian09 output data using Avogadro — an open-source molecular modeling and visualization tool.',
              'Demonstrated molecule building, structure manipulation, and visualization techniques essential for understanding chemical phenomena at the molecular level.',
              'Taught Python to extract geometry and potential values to build and plot potential energy surfaces.',
              'Explained shell scripting for managing HPC jobs and workflows.',
            ],
          },
          {
            title: 'Instructional Resource Development',
            items: [
              'Produced and distributed a suite of instructional video tutorials supporting pre-class preparation and independent learning.',
              'Topics included HPC access and navigation, Unix command line, cross-platform software installation (macOS, Linux, Windows), and molecular modeling workflows.',
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Fall 2016, 2017, 2019 · Spring 2019',
    inst: 'Marquette University',
    title: 'Graduate Teaching Assistant',
    topics: [
      {
        num: '02',
        title: 'Chemistry Laboratory Duties',
        blocks: [
          {
            title: 'Teaching & Instruction',
            items: [
              'Conducted weekly undergraduate laboratory sessions, guiding students through experimental procedures and fostering a positive learning environment.',
              'Explained complex chemistry concepts in a practical context to enhance understanding and retention in the lab.',
            ],
          },
          {
            title: 'Student Support & Mentoring',
            items: [
              'Held weekly office hours for one-to-one support on course material and addressed academic concerns individually.',
              'Provided academic mentoring that contributed to improved course performance and student confidence.',
            ],
          },
          {
            title: 'Assessment & Feedback',
            items: [
              'Graded laboratory reports, in-class quizzes, and exams with a focus on fairness and accuracy.',
              'Provided constructive feedback to improve students\' scientific writing skills for chemistry labs.',
              'Ensured timely grading and consistent assessment standards in coordination with the course instructor.',
            ],
          },
          {
            title: 'Organization & Collaboration',
            items: [
              'Coordinated with course instructors Dr. Vijay Vyas and Dr. Llanie Noble, and with other TAs, to provide feedback on experiment handouts, lab report templates, and grading rubrics aligned with course objectives.',
              'Managed student records and maintained accurate grading documentation using D2L (Desire2Learn).',
            ],
          },
        ],
      },
      {
        num: '03',
        title: 'Teaching Chemistry Through Discussion Sessions',
        blocks: [
          {
            title: 'Teaching & Instruction',
            items: [
              'Facilitated weekly recitation sessions to reinforce lecture material, clarify complex concepts, and guide students through problem-solving exercises.',
              'Developed and presented additional instructional content tailored to student needs and the course syllabus.',
            ],
          },
          {
            title: 'Engagement & Critical Thinking',
            items: [
              'Encouraged interactive discussions and critical thinking by posing conceptual questions and fostering collaboration through group discussion during recitations.',
              'Responded to spontaneous student questions, adapting explanations in real time to improve comprehension.',
            ],
          },
          {
            title: 'Curriculum Support & Delivery',
            items: [
              'Assisted the instructor in aligning recitation topics with weekly lecture objectives and upcoming assessments.',
              'Utilized a mix of whiteboard work, slides, and real-time demonstrations to accommodate diverse learning styles.',
            ],
          },
        ],
      },
    ],
  },
]

export default function Teaching() {
  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({})

  function toggleTopic(key: string) {
    setOpenTopics(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      <Nav />

      {/* Hero */}
      <div className="bg-[#fcfcfc] border-b border-[#1a1a1a]/[0.07]">
        <div className="pt-36 pb-16 max-w-[1200px] mx-auto px-16 max-md:px-6">
          <FadeUp>
            <span className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#3d8bfd] mb-3 block">Teaching</span>
            <h1 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-[#1a1a1a] leading-[1.05] tracking-[-0.03em] mb-3">
              Educating the <span className="text-[#3d8bfd]">Next Generation</span>
            </h1>
            <p className="font-serif text-[#1a1a1a]/70 text-[1rem] max-w-[600px] leading-relaxed">
              A summary of my teaching experience across curriculum design, laboratory instruction, and student mentoring during my PhD and Postdoctoral tenure. Expand each section to learn more.
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="bg-[#fcfcfc]">
        {eras.map(era => (
          <div key={era.label}>

            {/* Era header */}
            <FadeUp>
              <div className="border-y border-[#1a1a1a]/[0.07] bg-[#f5f5f5] py-7 px-16 max-md:px-6">
                <div className="max-w-[1200px] mx-auto flex items-center gap-12 max-md:flex-col max-md:gap-4 max-md:items-start">
                  <div className="min-w-[260px]">
                    <span className="block font-sans text-[0.7rem] font-semibold text-[#3d8bfd] tracking-[0.15em] uppercase mb-1">{era.label}</span>
                    <span className="font-mono text-[0.75rem] text-[#1a1a1a]/50">{era.inst}</span>
                  </div>
                  <h2 className="font-sans text-2xl font-bold text-[#1a1a1a] tracking-[-0.02em] border-l border-[#1a1a1a]/[0.08] pl-12 max-md:border-l-0 max-md:pl-0 max-md:border-t max-md:pt-4">
                    {era.title}
                  </h2>
                </div>
              </div>
            </FadeUp>

            {era.topics.map(topic => {
              const key = topic.num
              const isOpen = !!openTopics[key]
              return (
                <FadeUp key={key}>
                  <div className="border-b border-[#1a1a1a]/[0.07]">
                    <button
                      onClick={() => toggleTopic(key)}
                      className="w-full flex items-center gap-6 px-16 py-5 text-left transition-colors hover:bg-[#3d8bfd]/[0.03] max-md:px-6"
                    >
                      <span className="font-mono text-[0.65rem] text-[#3d8bfd] tracking-[0.1em] opacity-70 min-w-[24px]">{topic.num}</span>
                      <span className={`flex-1 font-sans text-[0.92rem] font-medium tracking-[0.01em] transition-colors ${isOpen ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/60'}`}>
                        {topic.title}
                      </span>
                      <span className={`font-sans text-2xl text-[#3d8bfd] font-light leading-none transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[4000px]' : 'max-h-0'}`}>
                      <div className="px-16 pb-10 space-y-8 max-md:px-6">
                        {topic.blocks.map((block, bi) => (
                          <div key={bi}>
                            <h4 className="font-sans text-[1rem] font-bold text-[#1a1a1a] mb-3 tracking-[-0.01em]">{block.title}</h4>
                            {block.intro && (
                              <p className="font-serif text-[#1a1a1a]/70 text-[0.95rem] leading-[1.8] mb-2">{block.intro}</p>
                            )}
                            <ul className="space-y-2">
                              {block.items.map((item, ii) => (
                                <li key={ii} className="relative pl-5 font-serif text-[#1a1a1a]/75 text-[0.95rem] leading-[1.8]">
                                  <span className="absolute left-0 top-[0.15rem] text-[#3d8bfd] text-[0.75rem]">—</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        ))}

        {/* Philosophy */}
        <FadeUp>
          <div className="bg-[#f5f5f5] border-t border-b border-[#1a1a1a]/[0.07] py-20 px-16 max-md:px-6">
            <div className="max-w-[800px] mx-auto">
              <span className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#3d8bfd] mb-3 block">Philosophy</span>
              <blockquote className="font-sans text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold text-[#1a1a1a] leading-[1.4] tracking-[-0.02em] border-l-[3px] border-[#3d8bfd] pl-8 my-6">
                "Effective teaching bridges the gap between abstract theory and tangible application — translating the language of mathematics into the intuition of a scientist."
              </blockquote>
              <p className="font-serif text-[#1a1a1a]/75 text-[0.95rem] leading-[1.9]">
                My approach emphasizes active learning, hands-on computation, and building student confidence through structured challenge. I believe that the best scientists are those who can not only solve problems but articulate why the solutions are physically meaningful.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>

      <Footer />
    </>
  )
}