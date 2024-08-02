import Navbar from "@/components/Navbar";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.png";

export default function Home() {
  return (
    <main>
      <section className="bg-emerald-50 relative">
        <Navbar />

        <div className="pt-20">
          <header className="p-6 text-center sm:flex sm:container">
            <Image
              src={heroImage}
              alt="Hero image"
              className="w-64 inline-block sm:w-full sm:order-2"
              width={0}
              height={0}
              priority
            />
            <div className="sm:order-1">
              <h1 className="mt-8 text-4xl tracking-wider font-semibold md:text-6xl lg:text-8xl sm:text-start">
                Start your journey with{" "}
                <strong className="text-emerald-600">Green Hub</strong>
              </h1>
              <p className="mt-4 text-gray-800 sm:text-start md:text-xl">
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
