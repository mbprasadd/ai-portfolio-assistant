import React from 'react'

export const Experience = () => {
  return (
      <section id="experience" className="py-10 md:pt-16  text-justify bg-black text-white relative overflow-hidden">

          {/* red glow background */}
          <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#E4232F]/20 blur-[140px] rounded-full"></div>

          <div className="max-w-[1120px] mx-auto px-7">

              {/* HEADER */}
              <div className="mb-8 md:mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-1">Expe<span className="text-[#E4232F]">rience</span></h2>
                  <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#E4232F]">02</span>
                      <div className="h-px w-52 bg-gradient-to-r from-[#E4232F] to-transparent"></div>
                   </div>
              </div>

              {/* TIMELINE */}
              <div className="relative pl-2 md:pl-10 border-l border-white/10 space-y-14">

                  {/* ITEM 1 */}
                  <div className="relative">

                      {/* dot */}
                      <div className="absolute -left-[22px] top-2 w-3.5 h-3.5 rounded-full bg-[#E4232F] shadow-[0_0_20px_#E4232F]"></div>

                      <div className="space-y-3">

                          <div className="flex justify-between flex-wrap items-center gap-3">
                              <div>
                                  <h3 className="text-lg font-semibold text-white">
                                      Frontend Developer
                                  </h3>
                                  <p className="text-sm text-[#E4232F] font-medium mt-1">
                                      Kognito Kube Private Limited · Hyderabad
                                  </p>
                              </div>
                              <span className="text-xs font-mono text-white/60 border border-white/10 px-3 py-1 rounded-full">
                                  Oct 2024 — Oct 2025
                              </span>
                          </div>
                            <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-white/70 leading-relaxed marker:text-[#E4232F]">
                            <li>Architected scalable, mobile-first UIs using Next.js, React.js, TypeScript and Tailwind CSS.</li>
                            <li>Built a reusable design system component library, reducing development time by ~30%.</li>
                            <li>Integrated REST APIs using Axios with Redux Toolkit for predictable state management.</li>
                            <li>Connected Strapi CMS for real-time content updates.</li>
                            <li>Improved performance using lazy loading, memoization, and code splitting.</li>
                            <li>Mentored junior developers and participated in Agile code reviews.</li>
                            </ul>
                      </div>
                  </div>

                  {/* ITEM 2 */}
                  <div className="relative">

                      <div className="absolute -left-[22px] top-2 w-3.5 h-3.5 rounded-full bg-[#E4232F] shadow-[0_0_20px_#E4232F]"></div>

                      <div className="space-y-3">

                          <div className="flex justify-between items-center flex-wrap gap-3">

                              <div>
                                  <h3 className="text-lg font-semibold text-white">
                                      Frontend Intern
                                  </h3>
                                  <p className="text-sm text-[#E4232F] font-medium mt-1">
                                      Kognito Kube Private Limited · Hyderabad
                                  </p>
                              </div>

                              <span className="text-xs font-mono text-white/60 border border-white/10 px-3 py-1 rounded-full">
                                  Jul 2024 — Sep 2024
                              </span>

                          </div>

                            <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-white/70 leading-relaxed marker:text-[#E4232F]">
                            <li>Built responsive user interfaces using HTML, CSS, JavaScript, and React.js.</li>
                            <li>Fixed cross-browser compatibility issues and integrated REST APIs.</li>
                            <li>Managed SEO and content updates through WordPress.</li>
                            </ul>

                      </div>
                  </div>

                  {/* ITEM 3 */}
                  <div className="relative">

                      <div className="absolute -left-[22px] top-2 w-3.5 h-3.5 rounded-full bg-[#E4232F] shadow-[0_0_20px_#E4232F]"></div>

                      <div className="space-y-3">

                          <div className="flex justify-between items-center flex-wrap gap-3">

                              <div>
                                  <h3 className="text-lg font-semibold text-white">
                                      MERN Stack Development Intern
                                  </h3>
                                  <p className="text-sm text-[#E4232F] font-medium mt-1">
                                      NXT Wave Disruptive Technologies · Remote
                                  </p>
                              </div>

                              <span className="text-xs font-mono text-white/60 border border-white/10 px-3 py-1 rounded-full">
                                  Nov 2023 — Mar 2024
                              </span>

                          </div>

                        <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-white/70 leading-relaxed marker:text-[#E4232F]">
                        <li>Built full-stack applications using React, Node.js, Express.js, and SQLite.</li>
                        <li>Developed REST APIs, implemented routing, and handled form validation.</li>
                        <li>Implemented JWT authentication and deployed applications on Vercel.</li>
                        </ul>
                      </div>
                  </div>
                  <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_45%_35%,rgba(228,35,47,0.55),transparent_30%)] blur-md animate-pulse"></div>
              </div>
          </div>
      </section>
  )
}
