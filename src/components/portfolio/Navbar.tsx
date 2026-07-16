"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { MoreVertical } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [mobileAdminOpen, setMobileAdminOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1120px] items-center justify-between px-6 lg:px-7">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-['JetBrains_Mono'] text-[15px] font-medium text-white"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#E4232F]" />
            <span>
              bhanu<span className="text-[#E4232F]">.</span>dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {menuItems
              .filter((item) => item.name !== "Analytics")
              .map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {item.name}
                </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setAdminOpen(!adminOpen)}
                className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    adminOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute right-0 mt-3 w-40 overflow-hidden rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-xl transition-all duration-200 ${
                  adminOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <Link
                  href="/analytics"
                  className="block px-4 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setAdminOpen(false)}
                >
                  Login
                </Link>

                <Link
                  href="/analytics"
                  className="block border-t border-white/10 px-4 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setAdminOpen(false)}
                >
                  Analytics
                </Link>
              </div>
            </div>

            <Link
              href="#contact"
              className="rounded-lg bg-[#E4232F] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              Hire Me
            </Link>
          </nav>

          {/* Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Admin Menu */}
            <div className="relative">
              <button
                onClick={() => setMobileAdminOpen(!mobileAdminOpen)}
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <ChevronDown size={18} />
              </button>

              <div
                className={`absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-xl transition-all duration-200 ${
                  mobileAdminOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <Link
                  href="/login"
                  onClick={() => setMobileAdminOpen(false)}
                  className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                >
                  Login
                </Link>

                <Link
                  href="/analytics"
                  onClick={() => setMobileAdminOpen(false)}
                  className="block border-t border-white/10 px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                >
                  Analytics
                </Link>
              </div>
            </div>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="relative flex h-6 w-7 flex-col justify-between"
              aria-label="Toggle Menu"
            >
              <span
                className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "translate-y-[11px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "-translate-y-[11px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-24 right-5 z-50
        w-[75%] max-w-[320px]
        rounded-2xl
        border border-white/10
        bg-black/50
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        transition-all duration-500 ease-out
        md:hidden
        ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-10 opacity-0 pointer-events-none"
        }`}
      >
        {/* Menu */}
        <nav className="flex flex-col gap-2 px-5">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={toggleMenu}
              className="group flex items-center justify-between rounded-xl border border-transparent px-4 py-3 text-white/70 transition-all duration-300 hover:border-white/10 hover:bg-white/10 hover:text-white"
            >
              <span>{item.name}</span>

              <span className="translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={toggleMenu}
            className="mt-6 mb-6 rounded-xl bg-[#E4232F] py-3 text-center font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:scale-[1.03] hover:bg-red-600"
          >
            Hire Me
          </Link>
        </nav>

        {/* Bottom Glow */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-[#E4232F]/20 via-transparent to-transparent" />
      </aside>
    </>
  );
};