"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const stats = [
  {
    value: "1+ yr",
    label: "Professional experience",
  },
  {
    value: "4",
    label: "Products shipped",
  },
  {
    value: "3",
    label: "Teams & internships",
  },
  {
    value: "~30%",
    label: "Faster builds via shared UI kit",
  },
];


export const Banner = () => {

  return (
      <section id="top" className="text-justify relative overflow-hidden text-white bg-black pt-12 pb-16 md:pb-20">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_480px_at_88%_-10%,rgba(228,35,47,0.22),transparent_60%),radial-gradient(700px_500px_at_-10%_110%,rgba(228,35,47,0.10),transparent_60%)]"></div>
        <div className="relative z-10 max-w-[1120px] mx-auto px-7 grid grid-cols-1 md:grid-cols-[1.25fr_0.9fr] gap-14 items-stretch">
          <div className="min-w-0">
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

            <div className="border-t border-white/15 pt-6 overflow-hidden w-full">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    speed={3000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    freeMode={{
                        enabled: true,
                        momentum: false,
                    }}
                    slidesPerView="auto"
                    spaceBetween={16}
                    allowTouchMove={true}
                >
                    {[...stats, ...stats, ...stats].map((item, index) => (
                        <SwiperSlide key={index} className="!w-auto">
                            <div className="text-center min-w-[170px] border-r-1 border-[#E4232F]">
                                <b className="block font-['Space_Grotesk'] text-3xl font-bold text-white">{item.value}</b>
                                <span className="block mt-1 text-xs text-white/50">{item.label}</span>
                            </div>
                        </SwiperSlide>
                        
                    ))}
                </Swiper>
            </div>

          </div>

          <div className="max-w-[280px] md:max-w-none mx-auto md:mx-0 w-full h-full bg-white/5 border border-white/15 rounded-[20px] p-7 backdrop-blur-sm relative overflow-hidden flex flex-col">            
            <div className="relative flex-1 min-h-0 rounded-2xl flex items-center justify-center">
                <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_45%_35%,rgba(228,35,47,0.55),transparent_60%)] blur-md animate-pulse"></div>
                <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1783262296/My%20Portfolio/ccc1_wmqrnt.png" alt="Bhanu Prasad Manthri" className="z-10 object-contain max-h-full" />
            </div>
            
            <div className="flex justify-between mt-[18px]">
                <div className="font-['JetBrains_Mono'] text-[11.5px] text-white/55">LOCATION<b className="block text-white text-[13px] font-medium">Tanuku, AP · India</b></div>
                <div className="text-right font-['JetBrains_Mono'] text-[11.5px] text-white/55">STATUS<b className="block text-white text-[13px] font-medium">Available now</b></div>
            </div>
          </div>
        </div>
      </section>
  )
}
