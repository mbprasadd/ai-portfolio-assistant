"use client";

import React, { useState } from 'react';
import ContactDock from './ContactDock';

export const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section>
      {/* ==== FOOTER / CONTACT === */}
      <footer id="contact" className="relative overflow-hidden text-white bg-black pt-24 pb-10">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_340px_at_15%_0%,rgba(228,35,47,0.22),transparent_60%)]"></div>
        <div className="relative z-10 max-w-[1120px] mx-auto px-7">
          <div className="font-['JetBrains_Mono'] text-[13px] text-[#E4232F] uppercase tracking-wider mb-1">Get in touch</div>
          <div className="h-px w-56 bg-gradient-to-r from-[#E4232F] to-transparent mb-4"></div>
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl md:text-5xl mb-5 max-w-[16ch] leading-tight">Let's build something reliable together.</h2>
          <p className="text-white/60 text-[15.5px] max-w-[56ch] leading-relaxed mb-9">I'm actively looking for full-time Frontend / Full-stack roles. If you have an opening — or just want to talk shop — my inbox is open.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[18px] mb-14">
            <a href="mailto:bhanuprasadm23@gmail.com" className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#E4232F]/40 transition flex flex-col justify-between min-h-[110px]">
              <div>
                <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-white/45 mb-2">Email</div>
                <div className="text-sm font-medium break-words">bhanuprasadm23@gmail.com</div>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-[#E4232F] to-transparent"></div>
            </a>
            
            <a href="tel:+919030981779" className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#E4232F]/40 transition flex flex-col justify-between min-h-[110px]">
              <div>
                <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-white/45 mb-2">Phone</div>
                <div className="text-sm font-medium">+91 90309 81779</div>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-[#E4232F] to-transparent"></div>
            </a>
            
            <a href="https://linkedin.com/in/bhanuprasadmanthri707049256" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#E4232F]/40 transition flex flex-col justify-between min-h-[110px]">
              <div>
                <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-white/45 mb-2">LinkedIn</div>
                <div className="text-sm font-medium">/bhanuprasadmanthri</div>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-[#E4232F] to-transparent"></div>
            </a>
            
            <a href="https://github.com/BhanuPrasadKognitoKube" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#E4232F]/40 transition flex flex-col justify-between min-h-[110px]">
              <div>
                <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-white/45 mb-2">GitHub</div>
                <div className="text-sm font-medium">/BhanuPrasadKognitoKube</div>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-[#E4232F] to-transparent"></div>
            </a>
          </div>
          
          <div className="border-t border-white/10 pt-6 flex justify-between flex-wrap gap-3 text-[12.5px] text-white/45 font-['JetBrains_Mono']">
            <span>© 2026 Bhanu Prasad Manthri</span>
            <span>Tanuku, Andhra Pradesh, India</span>
          </div>
        </div>
      </footer>

      {/* === FLOATING ACTION MENU === */}
      <ContactDock/>

    </section>
  );
};


      // {/* ================= FLOATING ACTION MENU ================= */}
      // <div className="fixed right-6 bottom-6 z-[200] flex flex-col items-end gap-3.5">
          
      //     {/* EMAIL (Revealed when menu is open) */}
      //     <a 
      //       href="mailto:bhanuprasadm23@gmail.com?subject=Frontend%20Developer%20Opportunity&body=Hi%20Bhanu,%0A%0AI%20came%20across%20your%20portfolio%20while%20searching%20for%20a%20Frontend%20Developer.%20I%20was%20impressed%20with%20your%20work%20and%20would%20love%20to%20connect%20with%20you%20to%20discuss%20a%20potential%20opportunity.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20Regards"
      //       aria-label="Email me" 
      //       className={`group relative w-12 h-12 rounded-full flex items-center justify-center bg-[#E4232F] text-white shadow-lg transition-all duration-300 origin-bottom transform ${
      //         isExpanded ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
      //       }`}
      //     >
      //         <div className="absolute inset-0 rounded-full bg-[#E4232F] blur-md opacity-0 group-hover:opacity-40 transition"></div>
      //         <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      //             <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      //         </svg>
      //         <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap border border-white/10">
      //             Email me
      //         </span>
      //     </a>

      //     {/* WHATSAPP (Revealed when menu is open) */}
      //     <a 
      //       href="https://wa.me/919030981779?text=Hi%20Bhanu!%20👋%0A%0AI%20came%20across%20your%20portfolio%20while%20searching%20for%20a%20Frontend%20Developer.%20I%20was%20impressed%20with%20your%20skills%20and%20projects.%20I%20would%20love%20to%20connect%20with%20you%20and%20discuss%20a%20potential%20opportunity.%0A%0ALooking%20forward%20to%20hearing%20from%20you!" 
      //       target="_blank" 
      //       rel="noopener noreferrer" 
      //       aria-label="Chat on WhatsApp" 
      //       className={`group relative w-12 h-12 rounded-full flex items-center justify-center bg-[#25D366] text-black shadow-lg transition-all duration-300 origin-bottom transform ${
      //         isExpanded ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-2 pointer-events-none'
      //       }`}
      //     >
      //         <div className="absolute inset-0 rounded-full bg-[#25D366] blur-md opacity-0 group-hover:opacity-30 transition"></div>
      //         <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
      //             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.463h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      //         </svg>
      //         <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap border border-white/10">
      //             Chat on WhatsApp
      //           </span>
      //     </a>

      //     {/* MAIN PLUS TRIGGER BUTTON */}
      //     <button 
      //       onClick={() => setIsExpanded(!isExpanded)}
      //       aria-label="Open contact channels"
      //       className="group relative w-14 h-14 rounded-full flex items-center justify-center bg-[#E4232F] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
      //     >
      //       <div className="absolute inset-0 rounded-full bg-[#E4232F] blur-xl opacity-20 group-hover:opacity-40 transition"></div>
            
      //       {/* Animated Plus / Cross Icon */}
      //       <svg 
      //         className={`w-6 h-6 relative z-10 transition-transform duration-300 ${isExpanded ? 'rotate-45' : 'rotate-0'}`} 
      //         fill="none" 
      //         viewBox="0 0 24 24" 
      //         stroke="currentColor" 
      //         strokeWidth={2.5}
      //       >
      //         <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      //       </svg>
      //     </button>

      // </div>