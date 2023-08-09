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
        <div className="relative w-full h-[500px]">
          <Image
            src={"/bg-web.png"}
            alt={"Bandung Farmer"}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex p-8">
          <div className="w-1/3">
            <Image src={"/Cabe.jpeg"} alt={"Cabe"} width={300} height={200} />
          </div>
          <div className="w-2/3 p-8">
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
