"use client";

import { useState } from "react";
import { Search, Check, Factory, PaintBucket, Package, Truck, Info, AlertTriangle } from "lucide-react";

const STEPS = [
  { id: 1, label: "Pending", icon: Info, status: "Completed" },
  { id: 2, label: "Cutting", icon: Check, status: "Completed" },
  { id: 3, label: "Sewing", icon: Factory, status: "In Progress" },
  { id: 4, label: "Printing", icon: PaintBucket, status: "Waiting" },
  { id: 5, label: "Quality", icon: Package, status: "Waiting" },
  { id: 6, label: "Shipment", icon: Truck, status: "Waiting" },
];

export default function OrderTracking() {
  const [invoice, setInvoice] = useState("");
  const [searchResult, setSearchResult] = useState<"idle" | "found" | "not-found">("idle");

  const handleSearch = () => {
    if (!invoice.trim()) {
      setSearchResult("not-found");
      return;
    }
    
    if (invoice.trim().toUpperCase() === "KNV-2026-001") {
      setSearchResult("found");
    } else {
      setSearchResult("not-found");
    }
  };

  return (
    <section id="lacak" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl text-primary mb-4 tracking-tight">Real-time Production</h2>
          <p className="text-on-surface-variant text-base font-medium">Pantau setiap tahapan dalam proses produksi secara transparan.</p>
        </div>
        
        <div className="bg-surface-variant rounded-3xl p-2 md:p-4 card-shadow">
          <div className="bg-white rounded-[1.5rem] p-6 lg:p-10 shadow-sm">
            
            <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto">
              <div className="relative flex-grow group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors h-5 w-5" />
                <input 
                  value={invoice}
                  onChange={(e) => setInvoice(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  type="text"
                  className="w-full pl-12 pr-6 py-4 rounded-xl bg-surface border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none text-primary font-semibold text-sm placeholder:text-slate-400" 
                  placeholder="Masukkan Nomor Invoice (KNV-2026-001)" 
                />
              </div>
              <button 
                onClick={handleSearch}
                className="bg-primary text-white px-8 py-4 rounded-xl font-heading font-bold text-sm hover:bg-slate-800 transition-all whitespace-nowrap shadow-lg shadow-primary/10"
              >
                Cari Pesanan
              </button>
            </div>

            {searchResult === "not-found" && (
              <div className="flex items-center justify-center gap-3 p-6 mb-8 text-amber-700 bg-amber-50 rounded-2xl border border-amber-200">
                <AlertTriangle className="h-5 w-5" />
                <p className="font-medium">Invoice tidak ditemukan. Silakan periksa kembali nomor invoice Anda (Coba: KNV-2026-001).</p>
              </div>
            )}

            {searchResult === "found" && (
              <div className="grid grid-cols-1 md:grid-cols-6 gap-0 relative animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-variant -translate-y-1/2 hidden md:block"></div>
                
                {STEPS.map((step, index) => {
                  const Icon = step.icon;
                  const isCompleted = step.status === "Completed";
                  const isInProgress = step.status === "In Progress";
                  const isWaiting = step.status === "Waiting";
                  
                  return (
                    <div key={index} className={`relative z-10 flex flex-col items-center group mb-10 md:mb-0 ${isWaiting ? 'opacity-40' : ''}`}>
                      <div className={`
                        flex items-center justify-center rounded-full mb-6 ring-8 ring-white
                        ${isCompleted ? 'bg-emerald-500 text-white w-12 h-12 shadow-lg shadow-emerald-200' : ''}
                        ${isInProgress ? 'bg-primary text-white w-16 h-16 -mt-2 shadow-2xl shadow-primary/30' : ''}
                        ${isWaiting ? 'w-12 h-12 bg-surface-variant text-on-surface-variant' : ''}
                      `}>
                        <Icon className={`
                          ${isCompleted ? 'h-6 w-6' : ''}
                          ${isInProgress ? 'h-8 w-8 pulse-soft' : ''}
                          ${isWaiting ? 'h-6 w-6' : ''}
                        `} />
                      </div>
                      
                      <h4 className="font-heading font-bold text-sm text-primary mb-1">{step.label}</h4>
                      <p className={`
                        text-[10px] font-bold uppercase tracking-widest
                        ${isCompleted ? 'text-emerald-500' : ''}
                        ${isInProgress ? 'text-secondary' : ''}
                        ${isWaiting ? 'text-on-surface-variant' : ''}
                      `}>
                        {step.status}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
            
          </div>
        </div>
      </div>
    </section>
  );
}
