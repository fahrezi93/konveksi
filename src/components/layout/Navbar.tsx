import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-heading text-2xl font-bold text-primary">
              KonveksiPro
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <Link href="#katalog" className="transition-colors hover:text-accent">
            Katalog
          </Link>
          <Link href="#portfolio" className="transition-colors hover:text-accent">
            Portfolio
          </Link>
          <Link href="#lacak" className="transition-colors hover:text-accent">
            Lacak Pesanan
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="bg-[#FF6B35] hover:bg-[#E85D2B] text-white hidden md:flex gap-2">
            <MessageCircle className="h-4 w-4" />
            Konsultasi WA
          </Button>
          {/* Mobile Menu Toggle (simplified for demo) */}
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
