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
        <div className="relative w-full">
          <Image
            src={"/team-bf.jpeg"}
            alt={"Bandung Farmer"}
            width={1280}
            height={700}
            className="object-cover object-center w-full aspect-[18/9]"
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
            <h1 className="text-[40px] text-black font-bold">
              Sekilas Tentang Bandung Farmer
            </h1>
            <p className="text-black">
              Bandung Farmer adalah suatu bentuk usaha pengembangan dari sektor
              pertanian lokal bandung dari pertanian konvensional menjadi
              pertanian modern/digital. Bandung Farmer memiliki tujuan untuk
              kesejahteraan petani dengan cara menjual hasil pertanian langsung
              ke konsumen, toko/supermarket, dan mitra pemasaran. sehingga dari
              pembeli mendapatkan harga yang murah, bagus dan masih fresh, dan
              dari pihak Petani mendapatkan kepastian harga dan penjualan hasil
              pertanian Bandung farmer di dirikan sejak 2018 oleh seorang anak
              petani lokal bandung dan berkembang terus sampai saat ini
              informasi selengkap nya silahkan hubungi kami Terima kasih.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
