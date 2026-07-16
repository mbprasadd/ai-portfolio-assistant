import React from 'react'

export const Projects = () => {
  return (
      <section id="projects" className="text-justify py-10 md:py-20 text-white bg-gradient-to-br from-[#0b0f17] via-[#111827] to-[#0f172a] relative overflow-hidden">

          {/* soft glowing background blobs */}
          <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#E4232F]/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full"></div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">

              {/* HEADER */}
              <div className="mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Project<span className="text-[#E4232F]">'s</span></h2>
                  <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#E4232F]">03</span>
                      <div className="h-px w-48 bg-gradient-to-r from-[#E4232F] to-transparent"></div>
                  </div>

                  <p className="text-gray-400 mt-3 text-sm md:text-base">
                      A collection of full-stack and frontend systems I’ve built
                  </p>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* CARD 1 */}
                  <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-[#E4232F]/60 to-purple-500/40 group">
                      <div className="rounded-2xl bg-[#111827]/90 backdrop-blur-md p-6 hover:-translate-y-2 transition duration-300">

                          <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-[#E4232F] rounded-full"></div>

                          <div className="pl-4">

                              <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-lg font-semibold group-hover:text-[#E4232F] transition">
                                      TEACHOPIA
                                  </h3>

                                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F]">
                                      Admin Dashboard
                                  </span>
                              </div>

                              <p className="text-sm text-gray-400 mb-5">
                                  Role-based admin system managing educational content, users and permissions across Super Admins, Teachers, Department Heads and Government Officials, with dynamic permission handling and a Redux-driven API layer.
                              </p>

                              <div className="flex flex-wrap gap-2 mb-6">
                                  <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10">Next.js</span>
                                  <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10">TypeScript</span>
                                  <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10">Redux</span>
                                  <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10">Tailwind</span>
                              </div>

                              <div className="border-t border-white/10 pt-4">
                                  <a className="text-sm text-[grey] hover:underline cursor-pointer" href="https://dev.admin.teachopia.org/dashboard" target="_blank" rel="noopener noreferrer">View Project ↗</a>
                              </div>

                          </div>
                      </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/40 to-[#E4232F]/40 group">
                      <div className="rounded-2xl bg-[#111827]/90 p-6 hover:-translate-y-2 transition duration-300">

                          <div className="pl-4">

                              <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-lg font-semibold group-hover:text-[#E4232F]">
                                      NCET
                                  </h3>

                                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F]">
                                      Institutional Site
                                  </span>
                              </div>

                              <p className="text-sm text-gray-400 mb-5">
                                  Fully responsive, SEO-optimised engineering college website with Strapi CMS for non-technical content management. Reusable faculty cards, carousels and dynamic tables, with code-split loading.
                              </p>

                              <div className="flex flex-wrap gap-2 mb-6">
                                  <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10">Next.js</span>
                                  <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10">Strapi</span>
                                  <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10">Tailwind</span>
                              </div>

                              <div className="border-t border-white/10 pt-4">
                                  <a className="text-sm text-[grey] hover:underline cursor-pointer" href="https://ncet.co.in" target="_blank" rel="noopener noreferrer">View Project ↗</a>
                              </div>

                          </div>
                      </div>
                  </div>

                  {/* CARD 3 */}
                  <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-green-500/30 to-[#E4232F]/40 group">
                      <div className="rounded-2xl bg-[#111827]/90 p-6 hover:-translate-y-2 transition duration-300">

                          <div className="pl-4">

                              <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-lg font-semibold group-hover:text-[#E4232F]">
                                      CMS PLATFORM
                                  </h3>

                                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F]">
                                      Content System
                                  </span>
                              </div>

                              <p className="text-sm text-gray-400 mb-5">
                                  Backend-driven content platform with custom Content Types, Dynamic Zones and role-based permissions for admins, editors and content managers. AWS S3 configured for media and asset management.
                              </p>

                              <div className="flex flex-wrap gap-2 mb-6">
                                  <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10">Strapi</span>
                                  <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10">PostgreSQL</span>
                                  <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10">AWS</span>
                              </div>

                              <div className="border-t border-white/10 pt-4">
                                  <a className="text-sm text-[grey] hover:underline cursor-pointer" href="https://cms.ncms.co.in/admin/auth/login" target="_blank" rel="noopener noreferrer">View Project ↗</a>
                              </div>

                          </div>
                      </div>
                  </div>

                  {/* CARD 4 */}
                  <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/40 to-[#E4232F]/40 group">
                      <div className="rounded-2xl bg-[#111827]/90 p-6 hover:-translate-y-2 transition duration-300">

                          <div className="pl-4">

                              <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-lg font-semibold group-hover:text-[#E4232F]">
                                      NCMS
                                  </h3>

                                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F]">
                                      Content System
                                  </span>
                              </div>

                              <p className="text-sm text-gray-400 mb-5">
                                  Institutional content management suite structured alongside Strapi workflows. Configured with dynamic media libraries, structured content variants, and optimized content delivery API layers.
                              </p>

                              <div className="flex flex-wrap gap-2 mb-6">
                                  <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10">React</span>
                                  <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10">Strapi</span>
                                  <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10">Tailwind</span>
                              </div>

                              <div className="border-t border-white/10 pt-4">
                                  <span className="text-sm text-gray-500 italic">Internal Platform</span>
                              </div>

                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>
  )
}
