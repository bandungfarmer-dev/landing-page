import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { sayuran } from "@/data/produk";
import Image from "next/image";

export default function Produk() {
  return (
    <>
      <Header />
      <h1 className="text-3xl my-4 text-center mx-auto text-black font-semibold">
        Sayuran
      </h1>
      <div className="p-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sayuran.map((sayur) => {
          return (
            <div
              key={sayur.nama}
              className="container bg-white mx-auto p-9 max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
            >
              <div className="relative w-full aspect-square">
                <Image
                  className="rounded-xl object-cover object-center"
                  fill
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
      <Footer />
    </>
  );
}
