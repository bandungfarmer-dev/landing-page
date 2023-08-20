import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { buah_buah, sayuran } from "@/data/produk";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Produk | Bandung Farmer",
  description: "Bandung Farmer",
};

export default function Produk() {
  return (
    <>
      <Header />
      <div>
        <h1 className="text-3xl my-4 text-center mx-auto text-black font-semibold">
          Sayuran
        </h1>
        <div className="p-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sayuran
            .slice()
            .sort((a, b) => a.nama.localeCompare(b.nama))
            .map((sayur) => {
              return (
                <div
                  key={sayur.nama}
                  className="container bg-white mx-auto p-9 max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
                >
                  <div className="relative w-full aspect-square">
                    <Image
                      className="rounded-xl object-cover object-center"
                      fill
                      sizes="100vw"
                      src={sayur.img}
                      alt={sayur.nama}
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="mt-5 text-2xl text-black font-semibold">
                        {sayur.nama}
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="mb-5 pb-5 border-b">
        <h1 className="text-3xl my-4 text-center mx-auto text-black font-semibold">
          Buah-Buahan
        </h1>
        <div className="p-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {buah_buah
            .slice()
            .sort((a, b) => a.nama.localeCompare(b.nama))
            .map((buah) => {
              return (
                <div
                  key={buah.nama}
                  className="container bg-white mx-auto p-9 max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
                >
                  <div className="relative w-full aspect-square">
                    <Image
                      className="rounded-xl object-cover object-center"
                      fill
                      sizes="100vw"
                      src={buah.img}
                      alt={buah.nama}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="mt-5 text-2xl text-black font-semibold">
                        {buah.nama}
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="bg-white">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            <span className="block">Tertarik Dengan Produk Kami?</span>
            <span className="block text-black">
              Hubungi Lebih Lanjut Di Bawah ini
            </span>
          </h2>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <a href="https://api.whatsapp.com/send/?phone=6282121116002&text&type=phone_number&app_absent=0">
                <button
                  type="button"
                  className="py-4 px-6  bg-[#25d366] focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
