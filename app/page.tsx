import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <section className="relative bg-[url(/bg-web-2.webp)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Penuhi Kebutuhan Usaha Makanan dan Minuman di Bandung Farmer
            </h1>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="https://api.whatsapp.com/send/?phone=6282121116002&text&type=phone_number&app_absent=0"
                className="block w-full rounded bg-[#a8d643] px-12 py-3 text-sm font-medium text-black shadow hover:bg-[#96c03c] focus:outline-none focus:ring active:bg-[#b2e447] sm:w-auto"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#a8d643]">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 ">
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-white bg-slate-800 rounded-xl md:mx-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5zm14 14h-4.414L12 18.586 9.414 16H5V4h14v12z"></path>
                    <path d="M7 7h10v2H7zm0 4h7v2H7z"></path>
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold text-black capitalize">
                    Proses Pemesanan Mudah
                  </h1>

                  <p className="mt-3 text-black">
                    Proses Pemesanan Mudah dengan Menghubungi Tim WhatsApp Kami
                    di +6282121116002
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-white bg-slate-800 rounded-xl md:mx-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.03 9.78a.75.75 0 0 0-1.06-1.06l-5.47 5.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6-6Z"></path>
                    <path d="m14.136 1.2 1.375 1.01c.274.201.593.333.929.384l1.687.259a3.61 3.61 0 0 1 3.02 3.021l.259 1.686c.051.336.183.655.384.929l1.01 1.375a3.61 3.61 0 0 1 0 4.272l-1.01 1.375a2.106 2.106 0 0 0-.384.929l-.259 1.687a3.61 3.61 0 0 1-3.021 3.02l-1.686.259a2.106 2.106 0 0 0-.929.384l-1.375 1.01a3.61 3.61 0 0 1-4.272 0l-1.375-1.01a2.106 2.106 0 0 0-.929-.384l-1.687-.259a3.61 3.61 0 0 1-3.02-3.021l-.259-1.686a2.117 2.117 0 0 0-.384-.929L1.2 14.136a3.61 3.61 0 0 1 0-4.272l1.01-1.375c.201-.274.333-.593.384-.929l.259-1.687a3.61 3.61 0 0 1 3.021-3.02l1.686-.259c.336-.051.655-.183.929-.384L9.864 1.2a3.61 3.61 0 0 1 4.272 0Zm-3.384 1.209-1.375 1.01a3.614 3.614 0 0 1-1.59.658l-1.686.258a2.111 2.111 0 0 0-1.766 1.766l-.258 1.686a3.61 3.61 0 0 1-.658 1.589l-1.01 1.376a2.11 2.11 0 0 0 0 2.496l1.01 1.375c.344.469.57 1.015.658 1.59l.258 1.686c.14.911.855 1.626 1.766 1.766l1.686.258a3.61 3.61 0 0 1 1.589.658l1.376 1.01a2.11 2.11 0 0 0 2.496 0l1.375-1.01a3.613 3.613 0 0 1 1.59-.657l1.686-.26a2.11 2.11 0 0 0 1.766-1.765l.258-1.686a3.61 3.61 0 0 1 .658-1.589l1.01-1.376a2.11 2.11 0 0 0 0-2.496l-1.01-1.375a3.613 3.613 0 0 1-.657-1.59l-.26-1.686a2.11 2.11 0 0 0-1.765-1.766l-1.686-.258a3.61 3.61 0 0 1-1.589-.658l-1.376-1.01a2.11 2.11 0 0 0-2.496 0Z"></path>
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold text-black capitalize">
                    Produk Berkulitas
                  </h1>

                  <p className="mt-3 text-black">
                    Dapatkan Produk Segar dan Berkulitas Hasil Panen Dadakan
                    Petani Indonesia.
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-white bg-slate-800 rounded-xl md:mx-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold text-black capitalize">
                    Pengiriman Cepat
                  </h1>

                  <p className="mt-3 text-black">
                    Jam Pengiriman Cepat dan Fleksibel. Bisa Atur Waktu Sesuai
                    Kebutuhan
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
              <Image
                className="w-[28rem] h-[28rem] object-cover object-center xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="/daun-bawang.jpg"
                width={500}
                height={500}
                alt="Bandung Farmer Team"
              />
            </div>
          </div>

          <hr className="my-12 border-gray-200 dark:border-gray-700" />
          <div className="bg-white text-black flex rounded-xl overflow-hidden">
            <Image
              src={"/bf-team-3.jpeg"}
              alt={"Bandung Farmer Team"}
              width={400}
              height={400}
            />
            <div className="flex flex-col p-8">
              <h2 className="text-[40px] font-bold">Bandung Farmer</h2>
              <span>
                Solusi tepercaya untuk memenuhi semua kebutuhan usaha Anda.
                Lewat ribuan produk segar terbaik yang dapat disesuaikan dengan
                kebutuhan usaha serta didukung oleh ekosistem logistik dan
                penyimpanan yang mutakhir, Bandung Farmer berkomitmen untuk
                mewujudkan potensi usaha Anda menjadi hasil nyata
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
