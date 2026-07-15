"use client";
import Link from "next/link";
import Image from "next/image";

import { Navbar } from "@/components/Portfolio/Navbar";
import { Footer } from "@/components/Portfolio/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Bot } from "lucide-react";
import { Skills } from "@/components/Portfolio/Skills";
import { Education } from "@/components/Portfolio/Education";
import { Projects } from "@/components/Portfolio/Projects";
import { Experience } from "@/components/Portfolio/Experience";
import { Banner } from "@/components/Portfolio/Banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white">

      {/* NAVBAR */}
      <Navbar/>

      {/* BANNER */}
      <Banner />

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-10 md:py-16 text-justify relative overflow-hidden text-white bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dbuak9u4o/image/upload/v1783262286/My%20Portfolio/About-Bg.png')" }}>
          <div className="max-w-6xl mx-auto px-6">

              {/* HEADER */}
              <div className="mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-1"> Abou<span className="text-[#E4232F]">t</span></h2>
                  <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#E4232F]">01</span>
                      <div className="h-px w-38 bg-gradient-to-r from-[#E4232F] to-transparent"></div>
                   </div>
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

      {/* EXPERIENCE */}
      <Experience />

      {/* PROJECTS */}
      <Projects />

      {/* SKILLS */}
       <Skills />

      {/* ================= CERTIFICATIONS & ACHIEVEMENTS ================= */}
      <section id="certifications" className="py-10 md:py-20 relative overflow-hidden text-white bg-black">

          {/* soft glow background */}
          <div className="absolute inset-0">
              <div className="absolute w-[500px] h-[500px] bg-[#E4232F]/20 blur-[120px] top-[-100px] right-[-100px]"></div>
              <div className="absolute w-[400px] h-[400px] bg-[#E4232F]/10 blur-[120px] bottom-[-120px] left-[-120px]"></div>
          </div>

          <div className="relative max-w-[1120px] mx-auto px-7">

              {/* HEADER */}
              <div className="mb-8 md:mb-14">
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
                              <b className="font-normal text-white mr-2">Dynamic Web Application (JavaScript)</b>
                              <span className="text-xs px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F] border border-[#E4232F]/30">
                                  NxtWave
                              </span>
                          </li>

                          <li>
                              <b className="font-normal text-white mr-2">Python Programming Foundations</b>
                              <span className="text-xs px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F] border border-[#E4232F]/30">
                                  NxtWave
                              </span>
                          </li>

                          <li>
                              <b className="font-normal text-white mr-2">Frontend Framework (React.js)</b>
                              <span className="text-xs px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F] border border-[#E4232F]/30">
                                  NxtWave
                              </span>
                          </li>

                          <li>
                              <b className="font-normal text-white mr-2">Backend Framework (Node.js, Express)</b>
                              <span className="text-xs px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F] border border-[#E4232F]/30">
                                  NxtWave
                              </span>
                          </li>

                          <li>
                              <b className="font-normal text-white mr-2">Database (SQLite)</b>
                              <span className="text-xs px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F] border border-[#E4232F]/30">
                                  NxtWave
                              </span>
                          </li>

                          <li>
                              <b className="font-normal text-white mr-2">Full-Stack Development Course (MERN)</b>
                              <span className="text-xs px-3 py-1 rounded-full bg-[#E4232F]/10 text-[#E4232F] border border-[#E4232F]/30">
                                  NxtWave
                              </span>
                          </li>
                      </ul>
                  </div>

              </div>
          </div>
      </section>

      {/* EDUCATION */}
      <Education />

      {/* FOOTER & FLOATING WHATSAPP + EMAIL */}
      <Footer/>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </main>
  );
}
