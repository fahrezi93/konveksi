import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-1">
            <h3 className="font-heading text-xl font-bold text-primary">KonveksiPro</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pusat produksi garment terpercaya untuk kebutuhan bisnis, komunitas, dan institusi. Berkualitas, tepat waktu, dan bergaransi.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-primary">Tautan Standar</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-accent">Beranda</Link></li>
              <li><Link href="#katalog" className="hover:text-accent">Katalog Produk</Link></li>
              <li><Link href="#portfolio" className="hover:text-accent">Portfolio</Link></li>
              <li><Link href="#lacak" className="hover:text-accent">Lacak Pesanan</Link></li>
              <li><Link href="#" className="hover:text-accent">Syarat & Ketentuan</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-primary">Jam Operasional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Senin - Jumat: 08.00 - 17.00</li>
              <li>Sabtu: 08.00 - 14.00</li>
              <li>Minggu: Tutup (Hanya melayani chat)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-primary">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>Jl. Industri Garmen No. 128, Bandung, Jawa Barat 40111</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>hello@konveksipro.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KonveksiPro. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
