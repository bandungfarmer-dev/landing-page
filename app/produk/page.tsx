import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { sayuran } from "@/data/produk";
import Image from "next/image";

export default function Produk() {
  return (
    <>
      <Header />
      <div className="p-24 flex flex-wrap items-center justify-center">
        {sayuran.map((sayur) => {
          return (
            <div
              key={sayur.nama}
              className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg"
            >
              <svg
                className="absolute bottom-0 left-0 mb-8"
                viewBox="0 0 375 283"
                fill="none"
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                <Image
                  className="relative w-40"
                  src={sayur.img}
                  alt={sayur.nama}
                  width={200}
                  height={200}
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    {sayur.nama}
                  </span>
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
