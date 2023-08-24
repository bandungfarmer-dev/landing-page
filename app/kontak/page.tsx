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
      <div className="overflow-hidden">
        <Header />
        <section className="p-6 overflow-hidden relative flex flex-col justify-center items-center">
          <div className="px-6 self-center py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 text-black shadow-md">
            <h2 className="text-5xl mb-4 font-extrabold">Hubungi Kami</h2>
            <h2 className="text-3xl font-extrabold">Office</h2>
            <p className="my-6">
              <span className="font-medium">022-85922132</span>
            </p>
            <h2 className="text-3xl font-extrabold">WhatsApp</h2>
            <a href="https://api.whatsapp.com/send/?phone=6282121116002&text&type=phone_number&app_absent=0">
              <p className="my-6">
                <span className="font-medium">0821-2111-6002</span>
              </p>
            </a>
          </div>
          <div className="relative flex items-center justify-center h-[200px] w-full">
            <div className="bg-[url(/bg-web-2.webp)] absolute h-[600px] w-[500px] mx-auto bottom-[-150%] bg-contain bg-center bg-no-repeat"></div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
