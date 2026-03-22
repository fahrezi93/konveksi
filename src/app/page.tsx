import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import OrderTracking from "@/components/sections/OrderTracking";
import ProductCatalog from "@/components/sections/ProductCatalog";
import Portfolio from "@/components/sections/Portfolio";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <OrderTracking />
        <ProductCatalog />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
