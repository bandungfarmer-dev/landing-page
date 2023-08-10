import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tentang | Bandung Farmer",
  description: "Bandung Farmer",
};

export default function Tentang() {
  return (
    <>
      <Header />
      <div className="w-full">
        <div className="relative w-full aspect-video h-auto">
          <Image
            src={"/bf-team-2.jpeg"}
            alt={"Bandung Farmer"}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="flex lg:flex-row flex-col p-8">
          <div className="lg:w-1/3 w-full">
            <Image
              src={"/bf-team-4.jpeg"}
              alt={"Bandung Farmer"}
              className="w-full rounded-xl"
              width={300}
              height={200}
            />
          </div>
          <div className="lg:w-2/3 w-full p-8">
            <h1 className="text-[40px] font-bold">
              Sekilas Tentang Bandung Farmer
            </h1>
            <p className="text-black">
              Bandung Farmer adalah supplier sayuran dan buah-buahan.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
