"use client";
import Link from "next/link";
import Image from "next/image";

import { Navbar } from "@/components/Portfolio/Navbar";
import { Footer } from "@/components/Portfolio/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Bot } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white">

      {/* ======= NAV ====== */}
      <Navbar/>

      {/* ================= HERO ================= */}
      <section id="top" className="relative overflow-hidden text-white bg-black pt-24 pb-20 md:pt-28 md:pb-24">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_480px_at_88%_-10%,rgba(228,35,47,0.22),transparent_60%),radial-gradient(700px_500px_at_-10%_110%,rgba(228,35,47,0.10),transparent_60%)]"></div>
        <div className="relative z-10 max-w-[1120px] mx-auto px-7 grid grid-cols-1 md:grid-cols-[1.25fr_0.9fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-[12.5px] font-medium text-[#E4232F] bg-[#E4232F]/10 border border-[#E4232F]/40 px-3.5 py-1.5 rounded-full mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E4232F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E4232F]"></span>
              </span>
              OPEN TO FULL-TIME OPPORTUNITIES
            </div>
            <div className="font-['JetBrains_Mono'] text-[13px] text-[#E4232F] uppercase tracking-widest mb-3">Frontend Developer · React.js &amp; Next.js</div>
            <h1 className="font-['Space_Grotesk'] font-bold text-4xl md:text-6xl leading-[1.05] tracking-tight mb-4">Bhanu Prasad<br />Manthri</h1>
            <p className="text-[17px] leading-relaxed text-white/70 max-w-[52ch] mb-7">I build fast, accessible, production-grade interfaces with React, Next.js and TypeScript — from design-system components to CMS-driven platforms shipped for ed-tech and institutional clients.</p>
            
            <div className="flex flex-wrap gap-3.5 mb-9">
              <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-[14.5px] font-semibold bg-[#E4232F] text-white hover:bg-white hover:text-black hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-[#E4232F]/40">Get in touch →</Link>
              <Link href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-[14.5px] font-semibold bg-white/5 border border-white/25 hover:border-[#E4232F] hover:bg-[#E4232F]/10 hover:-translate-y-0.5 transition-all">View projects</Link>
              
              {/* ===== RESUME ===== */}
              <a href="https://drive.google.com/file/d/1-S-UF2FlWo2d6NY3JV251CzGqYsVbpVH/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-[14.5px] font-semibold bg-white/5 border border-white/25 hover:border-[#E4232F] hover:bg-[#E4232F]/10 hover:-translate-y-0.5 transition-all">
                <span className="text-[#E4232F]">
                  ⭳ Download Resume
                </span>
              </a>
            </div>

            <div className="flex flex-wrap gap-0 border-t border-white/15 pt-6">
              <div className="flex-1 pr-6 min-w-[45%]"><b className="block font-['Space_Grotesk'] text-2xl font-bold">1+ yr</b><span className="text-[12.5px] text-white/50">Professional experience</span></div>
              <div className="flex-1 pr-6 min-w-[45%]"><b className="block font-['Space_Grotesk'] text-2xl font-bold">4</b><span className="text-[12.5px] text-white/50">Products shipped</span></div>
              <div className="flex-1 pr-6 min-w-[45%]"><b className="block font-['Space_Grotesk'] text-2xl font-bold">3</b><span className="text-[12.5px] text-white/50">Teams &amp; internships</span></div>
              <div className="flex-1 pr-6 min-w-[45%]"><b className="block font-['Space_Grotesk'] text-2xl font-bold">~30%</b><span className="text-[12.5px] text-white/50">Faster builds via shared UI kit</span></div>
            </div>
          </div>

          <div className="max-w-[280px] md:max-w-none mx-auto md:mx-0 w-full bg-white/5 border border-white/15 rounded-[20px] p-7 backdrop-blur-sm relative overflow-hidden">
            <div className="relative w-full aspect-square rounded-2xl flex items-center justify-center">
              <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_45%_35%,rgba(228,35,47,0.55),transparent_60%)] blur-md animate-pulse"></div>
              {/* Using a standard img tag here, switch to Next.js <Image /> if optimization configurations are set up for domain */}
              <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1783262296/My%20Portfolio/ccc1_wmqrnt.png" alt="Bhanu Prasad Manthri" className="z-10 object-contain max-h-full" />
            </div>
            
            <div className="flex justify-between mt-[18px]">
              <div className="font-['JetBrains_Mono'] text-[11.5px] text-white/55">LOCATION<b className="block text-white text-[13px] font-medium">Tanuku, AP · India</b></div>
              <div className="text-right font-['JetBrains_Mono'] text-[11.5px] text-white/55">STATUS<b className="block text-white text-[13px] font-medium">Available now</b></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 relative overflow-hidden text-white bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dbuak9u4o/image/upload/v1783262286/My%20Portfolio/About-Bg.png')" }}>
          <div className="max-w-6xl mx-auto px-6">

              {/* HEADER */}
              <div className="mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3"> Abou<span className="text-[#E4232F]">t</span></h2>
                  <div className="h-px w-56 bg-gradient-to-r from-[#E4232F] to-transparent mb-4"></div>
              </div>

              {/* GRID */}
              <div className="grid md:grid-cols-2 gap-12 items-start">

                  {/* TEXT */}
                  <div className="space-y-5 leading-relaxed text-[15.5px]">
                      <p>
                          I'm a frontend developer with 1+ year of experience building scalable, performance-focused web applications.
                          Most recently at Kognito Kube, I helped develop a reusable design system that reduced development time by ~30%.
                      </p>

                      <p>
                          I specialize in React.js, Next.js (App Router), and TypeScript, with Redux Toolkit for state management and
                          Strapi CMS for dynamic content-driven applications.
                          I focus on clean architecture, accessibility (WCAG), and high Lighthouse performance scores.
                      </p>

                      <p>
                          Currently looking for a full-time Frontend / Full-stack role where I can build fast, modern, user-friendly interfaces.
                      </p>
                  </div>

                  {/* STACK CARD */}
                  <div className="rounded-2xl border border-red-200 p-6 shadow-sm hover:shadow-md transition">

                      <h3 className="text-xs font-semibold tracking-widest text-red-500 uppercase mb-4">
                          Tech Stack
                      </h3>

                      <div className="flex text-black flex-wrap gap-2">

                          {/* frontend */}
                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=react" className="w-4 h-4" alt="React" /> React.js
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=nextjs" className="w-4 h-4" alt="Next.js" /> Next.js
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=ts" className="w-4 h-4" alt="TypeScript" /> TypeScript
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=js" className="w-4 h-4" alt="JavaScript" /> JavaScript ES6+
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=tailwind" className="w-4 h-4" alt="Tailwind CSS" /> Tailwind CSS
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=redux" className="w-4 h-4" alt="Redux" /> Redux Toolkit
                          </span>

                          {/* backend */}
                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=nodejs" className="w-4 h-4" alt="Node.js" /> Node.js
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=express" className="w-4 h-4" alt="Express" /> Express.js
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=mongodb" className="w-4 h-4" alt="MongoDB" /> MongoDB
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=postgres" className="w-4 h-4" alt="PostgreSQL" /> PostgreSQL
                          </span>

                          {/* added DB */}
                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=sqlite" className="w-4 h-4" alt="SQLite" /> SQLite
                          </span>

                          {/* APIs / CMS */}
                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              🔌 REST APIs
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              🧩 Strapi CMS
                          </span>

                          {/* tools */}
                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=git" className="w-4 h-4" alt="Git" /> Git
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=github" className="w-4 h-4" alt="GitHub" /> GitHub
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=vercel" className="w-4 h-4" alt="Vercel" /> Vercel
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=aws" className="w-4 h-4" alt="AWS" /> AWS
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              <img src="https://skillicons.dev/icons?i=figma" className="w-4 h-4" alt="Figma" /> Figma
                          </span>

                          {/* extra skills */}
                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              ♿ WCAG Accessibility
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              🧱 Component Architecture
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:border-red-400 transition">
                              ⚡ Performance Optimization
                          </span>
                      </div>
                  </div>
            </div>

            {/* INTERESTS Beyond the Code */}
            <div className="mt-14 pt-8 border-t border-gray-200 text-black">
                <h4 className="text-xs font-semibold tracking-widest text-red-500 uppercase mb-4">
                    Beyond the Code
                </h4>

                <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-gray-200 bg-white hover:border-red-400 transition">
                        🏸 Badminton
                    </span>

                    <span className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-gray-200 bg-white hover:border-red-400 transition">
                        🏋️ Working Out
                    </span>

                    <span className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-gray-200 bg-white hover:border-red-400 transition">
                        🎵 Music
                    </span>
                </div>
            </div>
          </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="py-24 bg-black text-white relative overflow-hidden">

          {/* red glow background */}
          <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#E4232F]/20 blur-[140px] rounded-full"></div>

          <div className="max-w-[1120px] mx-auto px-7">

              {/* HEADER */}
              <div className="mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Expe<span className="text-[#E4232F]">rience</span></h2>
                  <div className="h-px w-72 bg-gradient-to-r from-[#E4232F] to-transparent mb-4"></div>
              </div>

              {/* TIMELINE */}
              <div className="relative pl-10 border-l border-white/10 space-y-14">

                  {/* ITEM 1 */}
                  <div className="relative">

                      {/* dot */}
                      <div className="absolute -left-[22px] top-2 w-3.5 h-3.5 rounded-full bg-[#E4232F] shadow-[0_0_20px_#E4232F]"></div>

                      <div className="space-y-3">

                          <div className="flex justify-between flex-wrap gap-3">

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

                          <div className="space-y-2 text-[14.5px] text-white/70 leading-relaxed">
                              <p>• Architected scalable, mobile-first UIs using Next.js, React.js, TypeScript and Tailwind CSS.</p>
                              <p>• Built reusable design-system component library reducing development time by ~30%.</p>
                              <p>• Integrated REST APIs via Axios with Redux Toolkit for predictable state management.</p>
                              <p>• Connected Strapi CMS for real-time content updates.</p>
                              <p>• Improved performance using lazy loading, memoization and code splitting.</p>
                              <p>• Mentored junior developers and led Agile code reviews.</p>
                          </div>

                      </div>
                  </div>

                  {/* ITEM 2 */}
                  <div className="relative">

                      <div className="absolute -left-[22px] top-2 w-3.5 h-3.5 rounded-full bg-[#E4232F] shadow-[0_0_20px_#E4232F]"></div>

                      <div className="space-y-3">

                          <div className="flex justify-between flex-wrap gap-3">

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

                          <div className="space-y-2 text-[14.5px] text-white/70 leading-relaxed">
                              <p>• Built responsive UI using HTML, CSS, JavaScript and React.js.</p>
                              <p>• Fixed cross-browser issues and integrated APIs.</p>
                              <p>• Managed SEO and content updates via WordPress.</p>
                          </div>

                      </div>
                  </div>

                  {/* ITEM 3 */}
                  <div className="relative">

                      <div className="absolute -left-[22px] top-2 w-3.5 h-3.5 rounded-full bg-[#E4232F] shadow-[0_0_20px_#E4232F]"></div>

                      <div className="space-y-3">

                          <div className="flex justify-between flex-wrap gap-3">

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

                          <div className="space-y-2 text-[14.5px] text-white/70 leading-relaxed">
                              <p>• Built full-stack apps using React, Node, Express and SQLite.</p>
                              <p>• Developed REST APIs, routing and form validation.</p>
                              <p>• Implemented JWT authentication and deployed on Vercel.</p>
                          </div>
                      </div>
                  </div>
                  <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_45%_35%,rgba(228,35,47,0.55),transparent_30%)] blur-md animate-pulse"></div>
              </div>
          </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-28 text-white bg-gradient-to-br from-[#0b0f17] via-[#111827] to-[#0f172a] relative overflow-hidden">

          {/* soft glowing background blobs */}
          <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#E4232F]/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full"></div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">

              {/* HEADER */}
              <div className="mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Project<span className="text-[#E4232F]">'s</span></h2>
                  <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#E4232F]">03</span>
                      <div className="h-px w-96 bg-gradient-to-r from-[#E4232F] to-transparent"></div>
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

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-20 relative overflow-hidden text-white bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dbuak9u4o/image/upload/v1783262284/My%20Portfolio/Skills-Bg.png')" }}>

          {/* glowing background */}
          <div className="absolute top-[-140px] right-[-140px] w-[340px] h-[340px] bg-[#E4232F]/20 blur-[140px] rounded-full"></div>
          <div className="absolute bottom-[-140px] left-[-140px] w-[340px] h-[340px] bg-red-500/10 blur-[160px] rounded-full"></div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">

              {/* HEADER */}
              <div className="mb-14">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & <span className="text-[#E4232F]">Technologies</span></h2>
                  <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-[#E4232F]">04</span>
                      <div className="h-px w-96 bg-gradient-to-r from-[#E4232F] to-transparent"></div>
                  </div>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                  {/* CARD 1: Core Fronted */}
                  <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#E4232F]/40 hover:shadow-[0_0_40px_rgba(228,35,47,0.15)] transition">

                      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide mb-4">
                          <span className="w-7 h-7 flex items-center justify-center rounded bg-[#E4232F]/15">
                              <svg className="w-4 h-4 text-[#E4232F]" stroke="currentColor">
                                  <use href="#ic-code" />
                              </svg>
                          </span>
                          Core Frontend
                      </h4>

                      <div className="flex flex-wrap gap-3">

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=react" className="w-4 h-4" alt="React" /> React.js
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=nextjs" className="w-4 h-4 bg-white rounded" alt="Next.js" /> Next.js
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=ts" className="w-4 h-4" alt="TypeScript" /> TypeScript
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=js" className="w-4 h-4" alt="JavaScript" /> JavaScript ES6+
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=html" className="w-4 h-4" alt="HTML5" /> HTML5
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=css" className="w-4 h-4" alt="CSS3" /> CSS3
                          </span>

                      </div>
                  </div>

                  {/* CARD 2: Styling */}
                  <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#E4232F]/40 hover:shadow-[0_0_40px_rgba(228,35,47,0.15)] transition">

                      <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
                          <span className="w-7 h-7 flex items-center justify-center rounded bg-[#E4232F]/15">
                              <svg className="w-4 h-4 text-[#E4232F]" stroke="currentColor">
                                  <use href="#ic-brush" />
                              </svg>
                          </span>
                          Styling
                      </h4>

                      <div className="flex flex-wrap gap-3">

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=tailwind" className="w-4 h-4" alt="Tailwind CSS" /> Tailwind CSS
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=bootstrap" className="w-4 h-4" alt="Bootstrap" /> Bootstrap
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              📱 Responsive UI
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              ♿ WCAG Accessibility
                          </span>

                      </div>
                  </div>

                  {/* CARD 3: State & APIs */}
                  <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#E4232F]/40 hover:shadow-[0_0_40px_rgba(228,35,47,0.15)] transition">

                      <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
                          <span className="w-7 h-7 flex items-center justify-center rounded bg-[#E4232F]/15">
                              <svg className="w-4 h-4 text-[#E4232F]" stroke="currentColor">
                                  <use href="#ic-layers" />
                              </svg>
                          </span>
                          State & APIs
                      </h4>

                      <div className="flex flex-wrap gap-3">

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=redux" className="w-4 h-4" alt="Redux" /> Redux Toolkit
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              🔗 REST APIs
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              ⚡ Axios
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              🧩 Strapi CMS
                          </span>

                      </div>
                  </div>

                  {/* CARD 4: Backend */}
                  <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#E4232F]/40 hover:shadow-[0_0_40px_rgba(228,35,47,0.15)] transition">
                      <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
                          <span className="w-7 h-7 flex items-center justify-center rounded bg-[#E4232F]/15">
                              <svg className="w-4 h-4 text-[#E4232F]" stroke="currentColor">
                                  <use href="#ic-database" />
                              </svg>
                          </span>
                          Backend
                      </h4>

                      <div className="flex flex-wrap gap-3">
                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=nodejs" className="w-4 h-4" alt="Node.js" /> Node.js
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=express" className="w-4 h-4" alt="Express.js" /> Express.js
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=sqlite" className="w-4 h-4" alt="SQLite" /> SQLite
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=mongodb" className="w-4 h-4" alt="MongoDB" /> MongoDB
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=postgres" className="w-4 h-4" alt="PostgreSQL" /> PostgreSQL
                          </span>
                      </div>
                  </div>

                  {/* CARD 5: Tools */}
                  <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#E4232F]/40 hover:shadow-[0_0_40px_rgba(228,35,47,0.15)] transition">
                      <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
                          <span className="w-7 h-7 flex items-center justify-center rounded bg-[#E4232F]/15">
                              <svg className="w-4 h-4 text-[#E4232F]" stroke="currentColor">
                                  <use href="#ic-terminal" />
                              </svg>
                          </span>
                          Tools
                      </h4>

                      <div className="flex flex-wrap gap-3">
                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=git" className="w-4 h-4" alt="Git" /> Git
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=github" className="w-4 h-4" alt="GitHub" /> GitHub
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=vercel" className="w-4 h-4 bg-white rounded" alt="Vercel" /> Vercel
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=aws" className="w-4 h-4" alt="AWS S3" /> AWS S3
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=postman" className="w-4 h-4" alt="Postman" /> Postman
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=figma" className="w-4 h-4" alt="Figma" /> Figma
                          </span>
                      </div>
                  </div>

                  {/* CARD 6: Languages */}
                  <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#E4232F]/40 hover:shadow-[0_0_40px_rgba(228,35,47,0.15)] transition">
                      <h4 className="flex items-center gap-2 text-lg font-semibold mb-5">
                          <span className="w-7 h-7 flex items-center justify-center rounded bg-[#E4232F]/15">
                              <svg className="w-4 h-4 text-[#E4232F]" stroke="currentColor">
                                  <use href="#ic-brace" />
                              </svg>
                          </span>
                          Languages
                      </h4>

                      <div className="flex flex-wrap gap-3">
                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=js" className="w-4 h-4" alt="JavaScript" /> JavaScript
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=ts" className="w-4 h-4" alt="TypeScript" /> TypeScript
                          </span>

                          <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#E4232F] transition">
                              <img src="https://skillicons.dev/icons?i=py" className="w-4 h-4" alt="Python" /> Python
                          </span>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* ================= CERTIFICATIONS & ACHIEVEMENTS ================= */}
      <section id="certifications" className="py-20 relative overflow-hidden text-white bg-black">

          {/* soft glow background */}
          <div className="absolute inset-0">
              <div className="absolute w-[500px] h-[500px] bg-[#E4232F]/20 blur-[120px] top-[-100px] right-[-100px]"></div>
              <div className="absolute w-[400px] h-[400px] bg-[#E4232F]/10 blur-[120px] bottom-[-120px] left-[-120px]"></div>
          </div>

          <div className="relative max-w-[1120px] mx-auto px-7">

              {/* HEADER */}
              <div className="mb-14">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                      Certifications & <span className="text-[#E4232F]">Achievements</span>
                  </h2>

                  <div className="flex items-center gap-3 mt-3">
                      <span className="text-xs font-mono text-[#E4232F]">05</span>
                      <div className="h-px w-64 bg-gradient-to-r from-[#E4232F] to-transparent"></div>
                  </div>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                  {/* ACHIEVEMENTS */}
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#E4232F]/40 transition">
                      <div className="text-xs uppercase tracking-widest text-[#E4232F] mb-6 font-semibold">
                          Achievements
                      </div>

                      <ul className="space-y-4">
                          <li className="flex gap-3 items-start">
                              <span className="text-[#E4232F] mt-1">✔</span>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                  <b className="text-white">Summer Internship on Web Development</b> — Anurag IT Solutions
                              </p>
                          </li>

                          <li className="flex gap-3 items-start">
                              <span className="text-[#E4232F] mt-1">✔</span>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                  <b className="text-white">Frontend Internship</b> at VersionX Innovations
                              </p>
                          </li>

                          <li className="flex gap-3 items-start">
                              <span className="text-[#E4232F] mt-1">✔</span>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                  <b className="text-white">Web Development Internship</b> at GOITDEV Technologies
                              </p>
                          </li>

                          <li className="flex gap-3 items-start">
                              <span className="text-[#E4232F] mt-1">✔</span>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                  Participated in <b className="text-white">#60DaysOfCode</b> challenge, CCBP 4.0
                              </p>
                          </li>

                          <li className="flex gap-3 items-start">
                              <span className="text-[#E4232F] mt-1">✔</span>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                  Solved <b className="text-white">1,000+ coding problems</b> on CCBP
                              </p>
                          </li>
                      </ul>
                  </div>

                  {/* CERTIFICATIONS */}
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#E4232F]/40 transition">
                      <div className="text-xs uppercase tracking-widest text-[#E4232F] mb-6 font-semibold">
                          Courses & Certifications
                      </div>

                      <ul className="space-y-4">
                          <li>
                              <b className="text-white mr-2">Dynamic Web Application (JavaScript)</b>
                              <span className="text-xs px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F] border border-[#E4232F]/30">
                                  NxtWave
                              </span>
                          </li>

                          <li>
                              <b className="text-white mr-2">Python Programming Foundations</b>
                              <span className="text-xs px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F] border border-[#E4232F]/30">
                                  NxtWave
                              </span>
                          </li>

                          <li>
                              <b className="text-white mr-2">Frontend Framework (React.js)</b>
                              <span className="text-xs px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F] border border-[#E4232F]/30">
                                  NxtWave
                              </span>
                          </li>

                          <li>
                              <b className="text-white mr-2">Backend Framework (Node.js, Express)</b>
                              <span className="text-xs px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F] border border-[#E4232F]/30">
                                  NxtWave
                              </span>
                          </li>

                          <li>
                              <b className="text-white mr-2">Database (SQLite)</b>
                              <span className="text-xs px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F] border border-[#E4232F]/30">
                                  NxtWave
                              </span>
                          </li>

                          <li>
                              <b className="text-white mr-2">Full-Stack Development Course (MERN)</b>
                              <span className="text-xs px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F] border border-[#E4232F]/30">
                                  NxtWave
                              </span>
                          </li>
                      </ul>
                  </div>

              </div>
          </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="py-20 relative overflow-hidden text-white bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dbuak9u4o/image/upload/v1783262283/My%20Portfolio/Education-Bg.jpg')" }}>
          <div className="max-w-[1120px] mx-auto px-7">
              
              {/* HEADER */}
              <div className="mb-10">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Educat<span className="text-[#E4232F]">ion</span></h2>
                  <div className="h-px w-56 bg-gradient-to-r from-[#E4232F] to-transparent mb-4"></div>
              </div>

              <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-[0_10px_30px_-22px_rgba(0,0,0,0.35)] border border-[#F3CDD1]">
                  <tbody>
                      <tr className="border-b border-[#F3CDD1] hover:bg-[#E4232F]/[0.08] transition-colors">
                          <td className="px-6 py-4 text-[14.5px] font-bold w-[38%]">Master of Computer Applications (MCA)</td>
                          <td className="px-6 py-4 text-[14.5px] text-[#7A7473]">SD College of Information Technology, Tanuku</td>
                          <td className="px-6 py-4 text-[13px] font-['JetBrains_Mono'] font-semibold text-[#E4232F] text-right whitespace-nowrap">2022 – 2024</td>
                      </tr>
                      <tr className="border-b border-[#F3CDD1] hover:bg-[#E4232F]/[0.08] transition-colors">
                          <td className="px-6 py-4 text-[14.5px] font-bold w-[38%]">Bachelor of Science (B.Sc.)</td>
                          <td className="px-6 py-4 text-[14.5px] text-[#7A7473]">Sri Sai Siddhartha Degree College, Gajapathinagaram</td>
                          <td className="px-6 py-4 text-[13px] font-['JetBrains_Mono'] font-semibold text-[#E4232F] text-right whitespace-nowrap">2019 – 2022</td>
                      </tr>
                      <tr className="border-b border-[#F3CDD1] hover:bg-[#E4232F]/[0.08] transition-colors">
                          <td className="px-6 py-4 text-[14.5px] font-bold w-[38%]">Intermediate — MPC</td>
                          <td className="px-6 py-4 text-[14.5px] text-[#7A7473]">Sri Sai Junior College, Tanuku</td>
                          <td className="px-6 py-4 text-[13px] font-['JetBrains_Mono'] font-semibold text-[#E4232F] text-right whitespace-nowrap">2016 – 2018</td>
                      </tr>
                      <tr className="hover:bg-[#E4232F]/[0.08] transition-colors">
                          <td className="px-6 py-4 text-[14.5px] font-bold w-[38%]">SSC</td>
                          <td className="px-6 py-4 text-[14.5px] text-[#7A7473]">ZPHS Boy's High School, Tanuku</td>
                          <td className="px-6 py-4 text-[13px] font-['JetBrains_Mono'] font-semibold text-[#E4232F] text-right whitespace-nowrap">2015 – 2016</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </section>

      {/* ====== FOOTER & FLOATING WHATSAPP + EMAIL  ===== */}
      <Footer/>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </main>
  );
}
