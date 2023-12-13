import HeroSection from "@/components/HeroSection";
import HotelSection from "@/components/HotelSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mb-10 ">
        <HeroSection />
        <HotelSection />
      </main>
    </>
  );
}
