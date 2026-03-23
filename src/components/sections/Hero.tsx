"use client";

import { ArrowRight, Search, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden px-6 lg:px-12 py-16 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-[10px] uppercase tracking-widest mb-6">
            <span className="flex h-1.5 w-1.5 rounded-full bg-secondary pulse-soft"></span>
            High Precision Manufacturing
          </div>
          
          <h1 className="font-heading font-extrabold text-5xl lg:text-[4rem] leading-[1.05] tracking-tight mb-6 text-primary">
            Evolving <br/><span className="text-secondary">Garment</span> <br/>Standards.
          </h1>
          
          <p className="text-on-surface-variant text-lg max-w-lg mb-10 leading-relaxed font-medium mx-auto lg:mx-0">
            Kualitas premium, tepat waktu, dan transparan. Kami mewujudkan standar manufaktur tinggi untuk kebutuhan brand dan korporasi global.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="#katalog" className="bg-primary text-white px-8 py-4 rounded-full font-heading font-bold text-sm transition-all flex items-center gap-2 group hover:pr-10 shadow-xl shadow-primary/20">
              Lihat Katalog
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#lacak" className="bg-white border border-outline-variant hover:border-primary text-primary px-8 py-4 rounded-full font-heading font-bold text-sm transition-all flex items-center gap-2">
              <Search className="h-4 w-4" />
              Lacak Pesanan
            </Link>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          <div className="absolute -inset-10 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl opacity-30"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[3/4]">
            <img 
              alt="Manufacturing floor" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC20qxYQHKEzw9ir-rF4GO-0bjp_OuIc-asoUyQRtJd-0pRCOJ9_PQu5-syT2tHgENDNr2UQy68X9ldxWygU4tfiOUm4_9NLSjLqvBIxqdtJapJMWAoW6FO-2-uSA0sEGFppU7hx4-a24jhoK9A91YcaKWLUkhZnFsvyKmRYw6GVmln6LMRmDd2QIqeq9nbDXQOd14lJcq4omBJKjAzLdAzJx1K5uz-BkzvRpNROPrKI9JXwdbmH8u-oerDYMQDSsd7nAQhbul4SHA"
            />
          </div>
          
          {/* High-End Stats Widget */}
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl border border-white/50 hidden md:flex items-center gap-4">
            <div className="bg-secondary text-white p-3 rounded-xl shadow-lg shadow-secondary/30">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-black font-heading text-primary">99.8%</div>
              <div className="text-[9px] text-on-surface-variant uppercase tracking-[0.2em] font-bold mt-0.5">Accuracy rate</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
