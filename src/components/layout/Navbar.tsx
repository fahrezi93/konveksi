"use client";

import Link from "next/link";
import { Factory } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/20">
      <div className="flex justify-between items-center px-6 lg:px-12 py-3.5 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
             <Factory className="text-white h-3.5 w-3.5" />
          </div>
          <Link href="/" className="text-lg font-extrabold text-primary tracking-tight font-heading">
            Konveksi<span className="text-secondary">Pro</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-secondary font-heading font-bold text-sm tracking-wide">
            Home
          </Link>
          <Link href="#katalog" className="text-on-surface-variant hover:text-primary font-heading font-bold text-sm tracking-wide transition-colors">
            Katalog
          </Link>
          <Link href="#portfolio" className="text-on-surface-variant hover:text-primary font-heading font-bold text-sm tracking-wide transition-colors">
            Portfolio
          </Link>
          <Link href="#lacak" className="text-on-surface-variant hover:text-primary font-heading font-bold text-sm tracking-wide transition-colors">
            Lacak Pesanan
          </Link>
        </div>

        <Link 
          href="https://wa.me/6281234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-secondary text-white px-5 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 duration-200 transition-all shadow-lg shadow-secondary/20"
        >
          Konsultasi WA
        </Link>
      </div>
    </nav>
  );
}
