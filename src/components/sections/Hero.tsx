"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
            Kapasitas Produksi 10.000+ Pcs/Bulan
          </div>
          
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl text-balance">
            Pusat Produksi Garment & Konveksi Terpercaya
          </h1>
          
          <p className="max-w-[42rem] mx-auto md:mx-0 text-lg text-muted-foreground sm:text-xl leading-relaxed">
            Solusi pembuatan seragam, kaos, kemeja, dan jaket dengan material berkualitas tinggi, pengerjaan tepat waktu, dan tracking pesanan transparan.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link href="#katalog" className={cn(buttonVariants({ size: "lg" }), "h-12 w-full sm:w-auto text-base gap-2 bg-primary hover:bg-primary/90")}>
              Lihat Katalog
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#lacak" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-12 w-full sm:w-auto text-base gap-2 border-primary text-primary hover:bg-primary/5")}>
              <Search className="h-4 w-4" />
              Lacak Pesanan
            </Link>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-lg aspect-square relative rounded-2xl overflow-hidden shadow-2xl border bg-muted group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10 mix-blend-overlay z-10"></div>
          {/* using Next.js Image with unoptimized for simple remote URLs if we didn't config domains, but regular img works too. Let's use standard img to avoid next.config.js errors for unconfigured domains */}
          <img 
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80" 
            alt="Pabrik Konveksi Garment" 
            className="object-cover w-full h-full transform transition duration-700 group-hover:scale-105"
          />
        </div>
      </div>
      
      {/* Background Decorative patterns */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4">
        <div className="w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl"></div>
      </div>
    </section>
  );
}
