"use client";

import { ArrowRight, Search, Zap, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-surface overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="animate-in fade-in zoom-in duration-700 delay-100 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-primary/5 text-primary font-bold text-[10px] uppercase tracking-widest mb-6 shadow-sm hover:border-secondary/20 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          Rekayasa Kualitas Garmen v2.0
        </div>
        
        {/* Main Heading */}
        <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-primary max-w-4xl mx-auto mb-6">
          Presisi <span className="text-secondary relative inline-block">
            Keahlian
            <svg className="absolute w-full h-2 -bottom-1 left-0 text-secondary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>, <br className="hidden md:block"/>
          Skala Industri.
        </h1>
        
        {/* Subheading */}
        <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 text-on-surface-variant text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-medium">
          Kami memadukan teknologi manufaktur modern dengan ketelitian artisan untuk menghasilkan standar garmen baru bagi brand visioner.
        </p>
        
        {/* CTA Buttons */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 flex flex-col sm:flex-row gap-3 w-full justify-center mb-12 lg:mb-16">
          <Link href="/booking" className="bg-primary text-white px-6 py-3 rounded-xl font-heading font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
            Mulai Produksi
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/#lacak" className="group bg-white border border-outline-variant hover:border-primary/50 text-primary px-6 py-3 rounded-xl font-heading font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-2 hover:bg-surface-variant">
            <Search className="h-4 w-4 text-on-surface-variant group-hover:text-primary transition-colors" />
            Lacak Pesanan
          </Link>
        </div>

        {/* Hero Visual Container - Compact Version */}
        <div className="animate-in fade-in zoom-in duration-1000 delay-500 w-full max-w-5xl mx-auto relative group perspective-1000">
          
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/50 bg-white min-h-[350px] aspect-auto sm:aspect-[2/1] md:aspect-[2.5/1]">
             <img 
              alt="Industrial Precision Factory" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
              src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=2863&auto=format&fit=crop"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-90"></div>
            
            {/* Integrated Stats Bar at Bottom - Compact */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 grid grid-cols-2 md:flex md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 border-t border-white/10 bg-white/5 backdrop-blur-md">
              <div className="text-left">
                <div className="text-white/60 text-[10px] lg:text-xs font-bold uppercase tracking-widest mb-1">Kapasitas Bulanan</div>
                <div className="text-white text-lg sm:text-xl md:text-2xl font-heading font-black">10,000+ <span className="text-secondary text-xs sm:text-sm">Pcs</span></div>
              </div>
              
              <div className="hidden md:block h-8 w-px bg-white/10"></div>
              
              <div className="text-left">
                <div className="text-white/60 text-[10px] lg:text-xs font-bold uppercase tracking-widest mb-1">Akurasi Jahitan</div>
                <div className="text-white text-lg sm:text-xl md:text-2xl font-heading font-black flex items-center gap-2">
                  99.8% 
                  <CheckCircle2 className="text-emerald-400 h-3 w-3 sm:h-4 sm:w-4" />
                </div>
              </div>
              
              <div className="hidden md:block h-8 w-px bg-white/10"></div>
              
              <div className="text-left col-span-2 md:col-span-1 mt-1 md:mt-0">
                <div className="text-white/60 text-[10px] lg:text-xs font-bold uppercase tracking-widest mb-1">Status Produksi</div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20 w-fit">
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-400"></span>
                  </span>
                  <span className="text-[10px] sm:text-xs">Berjalan Normal</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements for Depth - Reduced */}
          <div className="absolute -top-8 -right-8 w-48 h-48 bg-secondary/10 rounded-full blur-3xl opacity-30 pointer-events-none animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

        </div>

      </div>
    </section>
  );
}
