import Navbar from "@/components/Navbar";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.png";

export default function Home() {
  return (
    <main>
      <section className="bg-emerald-50 relative">
        <Navbar />

        <div className="pt-20">
          <header className="p-6 text-center lg:flex lg:container">
            <Image
              src={heroImage}
              alt="Hero image"
              className="w-64 inline-block lg:w-full lg:order-2"
              width={0}
              height={0}
              priority
            />
            <div className="lg:order-1">
              <h1 className="mt-8 text-4xl tracking-wider font-semibold lg:text-8xl lg:text-start">
                Start your journey with Green Hub
              </h1>
              <p className="mt-4 text-gray-800 lg:text-start lg:text-xl">
                You! Yes you! Let’s start by supporting our{" "}
                <strong>locally produced goods</strong>. You can support us by
                checking our products or become a seller
              </p>
            </div>
          </header>
        </div>
      </section>
    </main>
  );
}
