import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

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
            <p>
              TaniHub Group TaniHub Group adalah sebuah grup perusahaan
              agriculture technology yang hadir pada tahun 2016. ​ Berawal dari
              sebuah mimpi untuk menyejahterakan para petani kecil, TaniHub
              Group melalui unit bisnisnya, yaitu TaniHub Food Solutions,
              TaniFund, TaniSupply, TaniFoundation, dan Tani Mitra Koperasi
              hingga hari ini terus berusaha mewujudkan ekosistem pertanian yang
              lebih baik.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
