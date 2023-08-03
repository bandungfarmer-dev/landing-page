import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Kontak() {
  return (
    <>
      <Header />
      <section className="p-6 bg-white">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 text-black shadow-md">
            <h1 className="text-5xl font-extrabold">Office</h1>
            <p className="my-8">
              <span className="font-medium">
                Jl. Datar Puspa, Ranca Bali, Bandung.
              </span>
            </p>
            <h1 className="text-5xl font-extrabold">Telepon</h1>
            <p className="my-8">
              <span className="font-medium">+6283822727338</span>
            </p>
          </div>

          <Image
            src="/goldenkismis.jpeg"
            width={200}
            height={200}
            alt=""
            className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
