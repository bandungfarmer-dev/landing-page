import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontak | Bandung Farmer",
  description: "Bandung Farmer",
};

export default function Kontak() {
  return (
    <>
      <Header />
      <section className="p-6 bg-white">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 text-black shadow-md">
            <h1 className="text-5xl font-extrabold">Office</h1>
            <p className="my-8">
              <span className="font-medium">
                Jl. Datar Puspa 002/04, Alam Endah, Ranca Bali, Bandung.
              </span>
            </p>
            <h1 className="text-5xl font-extrabold">Telepon</h1>
            <a href="https://api.whatsapp.com/send/?phone=6282121116002&text&type=phone_number&app_absent=0">
              <p className="my-8">
                <span className="font-medium">+6282121116002</span>
              </p>
            </a>
          </div>

          <Image
            src="/bf-team-3.jpeg"
            width={500}
            height={500}
            alt="Bandung Farmer"
            className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
