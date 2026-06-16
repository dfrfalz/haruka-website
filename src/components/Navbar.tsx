"use client";

import { Bot, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="glass-panel bg-white/60 backdrop-blur-md border-b border-white/60 sticky top-0 z-[100] px-6 py-4 shadow-sm relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 overflow-hidden border border-white/50">
            <img src="https://res.cloudinary.com/dvpm3w0ed/image/upload/v1781592603/n6cveugcynuh100dygut.jpg" alt="Haruka Profile" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-xl text-slate-800 tracking-tight">Haruka<span className="text-cyan-500">.</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className={`font-medium transition-colors ${pathname === "/" ? "text-blue-600" : "text-slate-600 hover:text-blue-500"}`}
          >
            Beranda
          </Link>
        </div>

        <a 
          href="https://wa.me/6285187839726" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-white/70 hover:bg-white text-blue-600 px-5 py-2.5 rounded-full font-medium transition-all shadow-sm border border-blue-100 hover:border-blue-200"
        >
          Coba Sekarang <ChevronRight size={18} />
        </a>
      </div>
    </nav>
  );
}
