"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Red Glow */}
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#E4232F]/25 blur-[180px]" />

        {/* White Glow */}
        <div className="absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-white/10 blur-[180px]" />

        {/* Bottom Glow */}
        <div className="absolute bottom-[-120px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#E4232F]/20 blur-[220px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
      </div>

      {/* Content */}
      <section className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <p className="mb-4 font-mono uppercase tracking-[8px] text-[#E4232F]">
          Oops...
        </p>

        <h1 className="text-[130px] font-black leading-none text-white md:text-[200px]">
          4<span className="text-[#E4232F]">0</span>4
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Lost in the Digital Universe
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
          The page you're looking for doesn't exist, may have been moved,
          or the URL is incorrect. Let's get you back to somewhere useful.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-[#E4232F] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Decorative 404 */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="select-none text-[22rem] font-black text-white/[0.025] md:text-[32rem]">
          404
        </span>
      </div>
    </main>
  );
};