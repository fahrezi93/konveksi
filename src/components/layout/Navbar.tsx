"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Factory, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/20">
      <div className="flex justify-between items-center px-4 lg:px-8 py-3 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
             <Factory className="text-white h-3.5 w-3.5" />
          </div>
          <Link href="/" className="text-base font-extrabold text-primary tracking-tight font-heading">
            Konveksi<span className="text-secondary">Pro</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/" 
            className={`${pathname === '/' ? 'text-secondary' : 'text-on-surface-variant hover:text-primary'} font-heading font-bold text-[13px] tracking-wide transition-colors`}
          >
            Beranda
          </Link>
          <Link 
            href="/katalog" 
            className={`${pathname?.startsWith('/katalog') ? 'text-secondary' : 'text-on-surface-variant hover:text-primary'} font-heading font-bold text-[13px] tracking-wide transition-colors`}
          >
            Katalog
          </Link>
          <Link 
            href="/#portfolio" 
            className="text-on-surface-variant hover:text-primary font-heading font-bold text-[13px] tracking-wide transition-colors"
          >
            Portfolio
          </Link>
          <Link 
            href="/#lacak" 
            className="text-on-surface-variant hover:text-primary font-heading font-bold text-[13px] tracking-wide transition-colors"
          >
            Lacak Pesanan
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link 
            href="/booking" 
            className="hidden sm:flex bg-primary text-white px-4 py-2 rounded-full font-heading font-bold text-[10px] uppercase tracking-widest hover:opacity-90 active:scale-95 duration-200 transition-all shadow-md shadow-primary/20"
          >
            Buat Pesanan
          </Link>
          <Link 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-secondary text-white px-4 py-2 rounded-full font-heading font-bold text-[10px] uppercase tracking-widest hover:brightness-110 active:scale-95 duration-200 transition-all shadow-md shadow-secondary/20"
          >
            Konsultasi WA
          </Link>

          {/* Mobile Menu Toggle button */}
          <button 
            className="md:hidden p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-surface-variant shadow-lg py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className={`${pathname === '/' ? 'text-secondary' : 'text-on-surface-variant'} font-heading font-bold text-sm tracking-wide py-2 border-b border-surface-variant/50`}
          >
            Beranda
          </Link>
          <Link 
            href="/katalog" 
            onClick={() => setIsOpen(false)}
            className={`${pathname?.startsWith('/katalog') ? 'text-secondary' : 'text-on-surface-variant'} font-heading font-bold text-sm tracking-wide py-2 border-b border-surface-variant/50`}
          >
            Katalog
          </Link>
          <Link 
            href="/#portfolio" 
            onClick={() => setIsOpen(false)}
            className="text-on-surface-variant font-heading font-bold text-sm tracking-wide py-2 border-b border-surface-variant/50"
          >
            Portfolio
          </Link>
          <Link 
            href="/#lacak" 
            onClick={() => setIsOpen(false)}
            className="text-on-surface-variant font-heading font-bold text-sm tracking-wide py-2 border-b border-surface-variant/50"
          >
            Lacak Pesanan
          </Link>
          
          <div className="flex flex-col gap-3 mt-2">
            <Link 
              href="/booking" 
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white text-center px-4 py-3 rounded-xl font-heading font-bold text-sm tracking-wide shadow-md shadow-primary/20"
            >
              Buat Pesanan
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
