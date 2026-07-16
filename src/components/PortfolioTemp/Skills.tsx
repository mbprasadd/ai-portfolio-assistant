import React from 'react'


export const Skills = () => {
  return (
      <section id="skills" className="py-14 md:py-20 relative overflow-hidden text-white bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dbuak9u4o/image/upload/v1783262284/My%20Portfolio/Skills-Bg.png')" }}>

        {/* glowing background */}
        <div className="absolute top-[-140px] right-[-140px] w-[340px] h-[340px] bg-[#E4232F]/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-140px] left-[-140px] w-[340px] h-[340px] bg-red-500/10 blur-[160px] rounded-full"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">

            {/* HEADER */}
            <div className="mb-10 md:mb-14">
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



{/* Icon sprite sheet */}
<svg width="0" height="0" className="absolute">
    <symbol id="ic-code" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="8 6 2 12 8 18" />
        <polyline points="16 6 22 12 16 18" />
    </symbol>
    <symbol id="ic-brush" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 11 19 1l4 4-10 10" />
        <path d="M3 21c0-4 2-6 5-6s5 2 5 6" />
        <path d="M9 11c1 1 1 3 0 4" />
    </symbol>
    <symbol id="ic-layers" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 22 8 12 14 2 8 12 2" />
        <polyline points="2 14 12 20 22 14" />
    </symbol>
    <symbol id="ic-database" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </symbol>
    <symbol id="ic-terminal" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="6 9 10 12 6 15" />
        <line x1="12" y1="15" x2="17" y2="15" />
    </symbol>
    <symbol id="ic-brace" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 3c-2 0-3 1-3 3v4c0 1-1 2-2 2 1 0 2 1 2 2v4c0 2 1 3 3 3" />
        <path d="M16 3c2 0 3 1 3 3v4c0 1 1 2 2 2-1 0-2 1-2 2v4c0 2-1 3-3 3" />
    </symbol>
    <symbol id="ic-plug" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 2v6M15 2v6M6 8h12l-1 6a5 5 0 0 1-10 0Z" />
        <path d="M12 18v4" />
    </symbol>
    <symbol id="ic-check" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 12l6 6 10-12" />
    </symbol>
    <symbol id="ic-mail" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
    </symbol>
    <symbol id="ic-star" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15 9 22 9.5 16.5 14.5 18 22 12 18 6 22 7.5 14.5 2 9.5 9 9 12 2" />
    </symbol>
    <symbol id="ic-whatsapp" viewBox="0 0 32 32" fill="#fff">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.7 4.607 1.902 6.47L4 29l7.72-1.87A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3Zm6.964 16.845c-.29.816-1.44 1.5-2.36 1.694-.63.13-1.454.234-4.226-.906-3.548-1.46-5.83-5.06-6.007-5.294-.176-.234-1.437-1.914-1.437-3.65 0-1.735.91-2.588 1.234-2.942.32-.352.7-.44.933-.44.234 0 .467.002.67.012.215.01.503-.082.787.6.29.7.984 2.42 1.07 2.596.087.176.146.382.03.616-.117.234-.176.38-.35.585-.176.205-.368.457-.526.615-.176.176-.36.367-.155.72.205.352.912 1.505 1.958 2.437 1.345 1.2 2.478 1.572 2.83 1.748.352.176.557.146.762-.088.205-.234.878-1.024 1.113-1.376.234-.352.468-.293.79-.176.322.117 2.046.966 2.397 1.142.352.176.586.264.673.41.088.147.088.85-.202 1.667Z" />
    </symbol>
</svg>
      </section>
  )
};
