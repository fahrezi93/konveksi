import Link from "next/link";
import React from "react";
import { Gauge, ArrowRight } from "lucide-react";

const ProductionCapacity = () => {
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  const currentMonth = months[new Date().getMonth()];
  const occupied = 8500;
  const total = 10000;
  const percentage = (occupied / total) * 100;

  return (
    <section className="w-full py-8 md:py-12 bg-surface relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto rounded-3xl bg-secondary text-white p-6 md:p-10 shadow-2xl relative overflow-hidden group">
          
          {/* Abstract Pattern overlay */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative z-10">
            {/* Left Column: Text & Context */}
            <div className="flex-1 w-full text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                <Gauge className="w-3.5 h-3.5" />
                Status Kapasitas Langsung
              </div>
              
              <h2 className="text-2xl md:text-3xl font-heading font-black tracking-tight mb-2 text-white">
                Slot Produksi: <span className="underline decoration-white/30 decoration-2 underline-offset-4">{currentMonth}</span>
              </h2>
              <p className="text-white/80 font-medium text-sm md:text-base mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0">
                Slot produksi kami terbatas untuk menjaga kualitas. Amankan antrian Anda sekarang sebelum penuh.
              </p>
              
              {/* Desktop CTA */}
              <div className="hidden lg:block w-fit">
                <Link
                  href="https://wa.me/6281234567890?text=Halo%20KonveksiPro%2C%20saya%20ingin%20booking%20slot%20produksi%20untuk%20bulan%20ini." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 justify-center px-8 py-4 bg-white text-secondary rounded-xl font-heading font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>Amankan Slot Sekarang</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Stat Card */}
            <div className="w-full lg:w-[450px] flex-shrink-0">
              <div className="bg-black/20 rounded-2xl p-6 border border-white/10 backdrop-blur-sm shadow-inner">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-white/70">
                  <span>Terisi</span>
                  <span>{percentage}%</span>
                </div>
                {/* Progress Bar Container */}
                <div className="relative h-3.5 w-full overflow-hidden rounded-full bg-black/30">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out bg-white shadow-lg shadow-white/50"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-xs sm:text-sm mt-4 pt-4 border-t border-white/10 gap-2">
                  <span className="text-white/80 font-medium whitespace-nowrap">
                    Kapasitas: <span className="text-white font-bold pb-0.5">{occupied.toLocaleString()} Pcs</span>
                  </span>
                  <span className="text-white font-bold bg-white/20 px-2 py-1 rounded text-[10px] sm:text-xs whitespace-nowrap">
                    Sisa: {(total - occupied).toLocaleString()} Pcs
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile CTA Button */}
            <div className="w-full lg:hidden flex justify-center mt-2">
              <Link
                href="https://wa.me/6281234567890?text=Halo%20KonveksiPro%2C%20saya%20ingin%20booking%20slot%20produksi%20untuk%20bulan%20ini." 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 justify-center w-full sm:w-auto px-8 py-4 bg-white text-secondary rounded-xl font-heading font-bold text-sm shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-300"
              >
                <span>Amankan Slot Sekarang</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionCapacity;
