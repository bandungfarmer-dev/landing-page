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
            src={"/team-bf-cover.jpg"}
            alt={"Bandung Farmer"}
            width={1600}
            quality={90}
            height={1000}
            className="object-cover object-center w-full aspect-[18/9]"
          />
        </div>
        <div className="flex lg:flex-row max-w-[900px] mx-auto flex-col p-8">
          <div className="lg:w-5/12 w-full">
            <Image
              src={"/bf-team-3.jpeg"}
              alt={"Bandung Farmer"}
              className="w-full mb-8 aspect-video object-cover rounded"
              width={1000}
              height={1000}
            />
            <Image
              src={"/bf-team-2.jpeg"}
              alt={"Bandung Farmer"}
              className="w-full hidden lg:block mb-8 aspect-video object-cover rounded"
              width={1000}
              height={1000}
            />
          </div>
          <div className="lg:w-7/12 w-full px-8">
            <h1 className="text-3xl mb-3 text-black font-bold">
              Sekilas Tentang Bandung Farmer
            </h1>
            <p className="text-black mb-5">
              Bandung Farmer adalah suatu bentuk usaha pengembangan dari sektor
              pertanian lokal bandung dari pertanian konvensional menjadi
              pertanian modern/digital. Bandung Farmer memiliki tujuan untuk
              kesejahteraan petani dengan cara menjual hasil pertanian langsung
              ke konsumen, toko/supermarket, dan mitra pemasaran.
            </p>
            <p className="text-black">
              Sehingga dari pembeli mendapatkan harga yang murah, bagus dan
              masih fresh, dan dari pihak Petani mendapatkan kepastian harga.
              Bandung farmer di dirikan sejak 2018 oleh seorang anak petani
              lokal Bandung dan berkembang terus sampai saat ini informasi
              selengkap nya silahkan hubungi kami Terima kasih.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
