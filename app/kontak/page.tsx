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
      <div className="">
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
                <span className="font-medium">6282121116002</span>
              </p>
            </a>
          </div>
          <div className="relative h-[200px] w-[300px]">
            <div className="bg-[url(/bg-web-2.webp)] absolute h-[300px] w-[300px] bottom-[-50%] bg-contain bg-[center_bottom_10%] bg-no-repeat"></div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
