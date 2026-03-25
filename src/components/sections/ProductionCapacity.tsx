import Link from "next/link";
import React from "react";

const ProductionCapacity = () => {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const currentMonth = months[new Date().getMonth()];

  return (
    <section className="w-full py-6 md:py-8 bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1 w-full">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-2 text-zinc-900 dark:text-zinc-50">
                Status Kuota Produksi: {currentMonth}
              </h2>
              
              {/* Progress Bar Container */}
              <div className="mt-4 mb-2 relative h-4 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-in-out"
                  style={{ width: "85%", backgroundColor: "#FF6B35" }}
                />
              </div>
              
              {/* Stats */}
              <div className="flex items-center justify-between text-sm md:text-base font-medium text-zinc-600 dark:text-zinc-400">
                <span>Kapasitas Terisi: <span className="text-zinc-900 dark:text-zinc-100 font-bold">8.500 Pcs</span></span>
                <span>Sisa Slot: <span className="font-bold" style={{ color: "#FF6B35" }}>1.500 Pcs</span></span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="w-full md:w-auto flex-shrink-0">
              <Link
                href="https://wa.me/message/YOUR_WA_LINK" // Replace with actual WA link
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center w-full md:w-auto px-8 py-4 font-bold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: "#FF6B35" }}
              >
                <div className="animate-ping absolute inline-flex h-full w-full rounded-xl bg-[#FF6B35] opacity-40"></div>
                <span className="relative">Amankan Slot Sekarang</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionCapacity;
