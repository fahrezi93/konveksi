"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle, Clock, Search } from "lucide-react";
import { mockTrackingSteps } from "@/data/mockData";

export default function OrderTracking() {
  const [invoice, setInvoice] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (invoice.trim().toUpperCase() === "KNV-2026-001") {
      setIsSearched(true);
      setError(false);
    } else {
      setError(true);
      setIsSearched(false);
    }
  };

  return (
    <section id="lacak" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Lacak Pesanan Anda</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pantau status produksi garment Anda secara real-time. Masukkan nomor invoice yang telah diberikan oleh tim kami.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary/10 shadow-lg">
            <CardHeader className="bg-primary/5 border-b">
              <CardTitle className="text-xl">Cek Status Produksi</CardTitle>
              <CardDescription>
                Masukkan Nomor Invoice (Contoh: KNV-2026-001)
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSearch} className="flex gap-3 mb-8">
                <Input 
                  placeholder="KNV-2026-001" 
                  value={invoice}
                  onChange={(e) => setInvoice(e.target.value)}
                  className="flex-1 uppercase"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  <Search className="h-4 w-4 mr-2" />
                  Cek Status
                </Button>
              </form>

              {error && (
                <div className="text-destructive text-sm p-4 bg-destructive/10 rounded-md mb-6">
                  Nomor invoice tidak ditemukan. Silakan periksa kembali atau coba gunakan KNV-2026-001 untuk demo.
                </div>
              )}

              {isSearched && !error && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Invoice</p>
                      <p className="font-heading font-bold text-lg">{invoice.toUpperCase()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-muted-foreground">Estimasi Selesai</p>
                      <p className="font-medium">10 Nov 2026</p>
                    </div>
                  </div>

                  <div className="relative border-l-2 border-muted ml-3 space-y-6">
                    {mockTrackingSteps.map((step, index) => {
                      const isCompleted = step.status === "completed";
                      const isActive = step.status === "active";
                      const isPending = step.status === "pending";

                      return (
                        <div key={step.id} className="relative pl-8">
                          {/* Step Icon */}
                          <div className={`absolute -left-[11px] bg-background rounded-full p-1 
                            ${isCompleted ? "text-accent" : isActive ? "text-primary" : "text-muted-foreground"}`}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-5 h-5 fill-accent/20" />
                            ) : isActive ? (
                              <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                              </div>
                            ) : (
                              <Circle className="w-5 h-5" />
                            )}
                          </div>

                          {/* Step Content */}
                          <div>
                            <h4 className={`font-semibold ${isActive ? "text-primary text-lg" : "text-foreground"}`}>
                              {step.title}
                            </h4>
                            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                              {isCompleted && "Selesai dikerjakan."}
                              {isActive && "Sedang dalam proses."}
                              {isPending && "Menunggu antrean."}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
