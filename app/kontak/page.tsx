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
      <section className="p-6 min-h-screen flex items-center bg-white">
        <div className="container grid gap-6 md:max-w-[80%]  mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 text-black shadow-md">
            <h2 className="text-5xl mb-4 font-extrabold">Hubungi Kami</h2>
            <h2 className="text-3xl font-extrabold">Office</h2>
            <p className="my-6">
              <span className="font-medium">022-85922132</span>
            </p>
            <h2 className="text-3xl font-extrabold">WhatsApp</h2>
            <a href="https://api.whatsapp.com/send/?phone=6282121116002&text&type=phone_number&app_absent=0">
              <p className="my-6">
                <span className="font-medium">6282121116002</span>
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
