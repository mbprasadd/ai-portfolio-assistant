"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-[100] border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1120px] items-center justify-between px-6 lg:px-7">
        {/* Logo */}
        <Link
          href="#top"
          className="flex items-center gap-2 font-['JetBrains_Mono'] text-[15px] font-medium text-white"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#E4232F]"></span>
          <span>
            bhanu<span className="text-[#E4232F]">.</span>dev
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#about" className="text-sm text-white/70 transition hover:text-white">
            About
          </Link>
          <Link href="#experience" className="text-sm text-white/70 transition hover:text-white">
            Experience
          </Link>
          <Link href="#projects" className="text-sm text-white/70 transition hover:text-white">
            Projects
          </Link>
          <Link href="#skills" className="text-sm text-white/70 transition hover:text-white">
            Skills
          </Link>
          <Link href="#certifications" className="text-sm text-white/70 transition hover:text-white">
            Certifications
          </Link>
          <Link href="#education" className="text-sm text-white/70 transition hover:text-white">
            Education
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-lg bg-[#E4232F] px-5 py-2.5 text-[14.5px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[#E4232F]/40"
          >
            Hire Me
          </Link>
        </nav>

        {/* Hamburger Trigger (Added back so mobile users can open the menu) */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden relative w-7 h-5 flex flex-col justify-between group z-50"
          aria-label="Toggle navigation menu"
        >
          <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${isOpen ? 'translate-y-[9px] rotate-45' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${isOpen ? '-translate-y-[9px] -rotate-45' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col px-6 py-6 space-y-5">
          <Link onClick={toggleMenu} href="#about" className="text-white/80 hover:text-[#E4232F] transition">About</Link>
          <Link onClick={toggleMenu} href="#experience" className="text-white/80 hover:text-[#E4232F] transition">Experience</Link>
          <Link onClick={toggleMenu} href="#projects" className="text-white/80 hover:text-[#E4232F] transition">Projects</Link>
          <Link onClick={toggleMenu} href="#skills" className="text-white/80 hover:text-[#E4232F] transition">Skills</Link>
          <Link onClick={toggleMenu} href="#certifications" className="text-white/80 hover:text-[#E4232F] transition">Certifications</Link>
          <Link onClick={toggleMenu} href="#education" className="text-white/80 hover:text-[#E4232F] transition">Education</Link>
          <Link onClick={toggleMenu} href="#contact" className="mt-2 text-center py-3 rounded-lg bg-[#E4232F] text-white font-medium hover:bg-red-600 transition">Hire Me</Link>
        </nav>
      </div>
    </header>
  );
};