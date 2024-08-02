import Navbar from "@/components/Navbar";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.svg";

export default function Home() {
  return (
    <main>
      <section className="bg-emerald-50 relative">
        <Navbar />
      </section>
    </main>
  );
}
