import { mockPortfolio } from "@/data/mockData";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Hasil Produksi Kami</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bukti nyata komitmen kami terhadap kualitas jahitan, detail sablon, dan kerapian bordir.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-20">
          {mockPortfolio.map((item) => (
            <div key={item.id} className="relative aspect-square overflow-hidden rounded-xl bg-muted group">
              <img 
                src={item.image} 
                alt={item.alt} 
                className="object-cover w-full h-full transform transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white font-medium text-center">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Banner */}
        <div className="bg-primary text-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
            <div className="p-8 text-center space-y-2">
              <p className="text-4xl md:text-5xl font-extrabold text-accent">10,000+</p>
              <p className="font-heading font-medium text-primary-foreground/80">Pcs Diproduksi</p>
            </div>
            <div className="p-8 text-center space-y-2">
              <p className="text-4xl md:text-5xl font-extrabold text-accent">50+</p>
              <p className="font-heading font-medium text-primary-foreground/80">Klien Bisnis</p>
            </div>
            <div className="p-8 text-center space-y-2">
              <p className="text-4xl md:text-5xl font-extrabold text-accent">100%</p>
              <p className="font-heading font-medium text-primary-foreground/80">Garansi Retur Cacat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
