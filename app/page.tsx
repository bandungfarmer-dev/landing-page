import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <section className="relative min-h-screen justify-between">
        <div className="flex md:flex-row flex-col items-center">
          <div className="relative bg-[url(/bg-web-2.webp)] bg-contain bg-center bg-no-repeat md:w-1/2 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
            {/* <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}

            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-xl text-[#a8d643] font-extrabold sm:text-3xl">
                BANDUNG FARMER PENYEDIA BUAH DAN SAYUR SEGAR LANGSUNG DARI
                PETANI
              </h1>
              <p className="uppercase text-3xl font-extrabold text-[#a8d643]">
                menerima pesanan buah dan sayur baik partai kecil maupun partai
                besar
              </p>
            </div>
          </div>
          <div className="container bg-transparent h-full md:w-1/2 px-6 py-10 mx-auto">
            <div className="lg:flex lg:items-center">
              <div className="w-full space-y-12">
                <div className="md:flex bg-white shadow-md md:items-start p-2 rounded-md">
                  <span className="inline-block p-2 text-white bg-[#a8d643] rounded-xl">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="w-[80px] h-[80px]"
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
                      Proses Pemesanan Mudah dengan Menghubungi Tim WhatsApp
                      Kami di +6282121116002
                    </p>
                  </div>
                </div>

                <div className="md:flex bg-white shadow-md md:items-start p-2 rounded-md">
                  <span className="inline-block p-2 text-white bg-[#a8d643] rounded-xl">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="w-[80px] h-[80px]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M150.902 268.233h-42.1a23.347 23.347 0 0 1 42.1 0zm67.359-13.292a114.847 114.847 0 0 1 1.203-16.31 23.335 23.335 0 0 0-18.68 29.602h18.295a113.38 113.38 0 0 1-.77-13.292zm-94.532-86.027c-15.637-15.637-36.638-32.164-55.162-32.164h-1.54l.975 19.246c8.913-.433 23.287 8.3 39.489 24.056q1.528 1.48 2.995 2.972a42.58 42.58 0 0 1 8.083-.95 42.34 42.34 0 0 1 5.208-13.172zm24.37-18.933a68.706 68.706 0 0 0 6.928-9.743 71.172 71.172 0 0 0 7.11-16.55 70.174 70.174 0 0 0 2.706-17.695 67.72 67.72 0 0 0-1.672-16.575 69.043 69.043 0 0 0-2.01-7 63.499 63.499 0 0 0-2.236-5.594 53.963 53.963 0 0 0-1.889-3.728c-.228-.433-.469-.782-.601-1.01l-.217-.35-.36.18c-.241.121-.614.302-1.035.542a52.092 52.092 0 0 0-3.609 2.177 52.07 52.07 0 0 0-4.811 3.609 69.031 69.031 0 0 0-5.377 4.907 67.72 67.72 0 0 0-10.104 13.232 70.174 70.174 0 0 0-6.964 16.49 71.16 71.16 0 0 0-2.719 17.779 68.562 68.562 0 0 0 1.672 16.575 66.337 66.337 0 0 0 4.234 12.546c.47 1.058.927 1.96 1.336 2.718a42.713 42.713 0 0 1 19.666-12.522zm342.413-43.903c-.228-.133-.59-.35-1.022-.578a43.443 43.443 0 0 0-3.777-1.804c-1.6-.674-3.5-1.42-5.641-2.105a69.031 69.031 0 0 0-7.049-1.84 67.72 67.72 0 0 0-16.611-1.263 70.174 70.174 0 0 0-17.634 3.127 71.172 71.172 0 0 0-16.31 7.41 68.562 68.562 0 0 0-13.003 10.428l-.542.578a69.633 69.633 0 0 1 12.618 22.168 68.67 68.67 0 0 0 11.307.421 71.16 71.16 0 0 0 17.646-3.091 70.174 70.174 0 0 0 16.322-7.362 67.72 67.72 0 0 0 13.003-10.428 69.02 69.02 0 0 0 4.811-5.497c1.384-1.78 2.55-3.44 3.477-4.932.926-1.492 1.635-2.718 2.093-3.609.24-.433.409-.817.517-1.058l.18-.373zm-85.642-66.06c-.433-1.697-.854-3.296-.986-4.018l-18.981 3.488c.252 1.384.685 3.043 1.275 5.329 2.814 10.898 9.298 36.013 1.48 58.23a69.97 69.97 0 0 1 16.165 11.595c12.787-28.928 4.511-61.032.999-74.625zM180.179 476h122.618a159.112 159.112 0 0 0 159.112-159.112v-29.41H21.103V316.9A159.112 159.112 0 0 0 180.179 476zm245.163-221.059a93.545 93.545 0 0 0-26.03-64.845 50.4 50.4 0 1 0-94.05-25.26 93.822 93.822 0 0 0-66.745 103.445h185.839a94.604 94.604 0 0 0 .986-13.34zm-244.718 6.748a42.412 42.412 0 0 1 10.609-28.074 23.383 23.383 0 0 0-43.555 6.014 42.81 42.81 0 0 1 23.492 28.28 23.287 23.287 0 0 0 9.622-2.407 43.845 43.845 0 0 1-.168-3.813zm-79.388-14.963a23.383 23.383 0 0 0-41.522 21.495h28.688a42.665 42.665 0 0 1 12.822-21.495zm79.845-66.686a23.371 23.371 0 0 0-43.543 5.642 42.905 42.905 0 0 1 19.51 18.427 42.292 42.292 0 0 1 11.44-2.153 42.653 42.653 0 0 1 12.58-21.916zm29 7.819a23.383 23.383 0 0 0-22.685 17.537 42.905 42.905 0 0 1 19.534 16.924 42.316 42.316 0 0 1 16.335-3.271h.854a111.36 111.36 0 0 1 7.373-17.177 23.383 23.383 0 0 0-21.41-14.013zm-69.524 26.402a23.36 23.36 0 0 0-43.483 4.174 42.905 42.905 0 0 1 20.966 18.945 42.557 42.557 0 0 1 10.826-1.648 42.593 42.593 0 0 1 11.691-21.47z"></path>
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

                <div className="md:flex bg-white shadow-md md:items-start p-2 rounded-md">
                  <span className="inline-block p-2 text-white bg-[#a8d643] rounded-xl">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="0"
                      viewBox="0 0 15 15"
                      className="w-[80px] h-[80px]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.49998 0.849976C7.22383 0.849976 6.99998 1.07383 6.99998 1.34998V3.52234C6.99998 3.79848 7.22383 4.02234 7.49998 4.02234C7.77612 4.02234 7.99998 3.79848 7.99998 3.52234V1.8718C10.8862 2.12488 13.15 4.54806 13.15 7.49998C13.15 10.6204 10.6204 13.15 7.49998 13.15C4.37957 13.15 1.84998 10.6204 1.84998 7.49998C1.84998 6.10612 2.35407 4.83128 3.19049 3.8459C3.36919 3.63538 3.34339 3.31985 3.13286 3.14115C2.92234 2.96245 2.60681 2.98825 2.42811 3.19877C1.44405 4.35808 0.849976 5.86029 0.849976 7.49998C0.849976 11.1727 3.82728 14.15 7.49998 14.15C11.1727 14.15 14.15 11.1727 14.15 7.49998C14.15 3.82728 11.1727 0.849976 7.49998 0.849976ZM6.74049 8.08072L4.22363 4.57237C4.15231 4.47295 4.16346 4.33652 4.24998 4.25C4.33649 4.16348 4.47293 4.15233 4.57234 4.22365L8.08069 6.74051C8.56227 7.08599 8.61906 7.78091 8.19998 8.2C7.78089 8.61909 7.08597 8.56229 6.74049 8.08072Z"
                        fill="currentColor"
                      ></path>
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
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="mt-8 flex flex-wrap gap-4 mx-auto justify-center text-center">
            <a
              href="https://api.whatsapp.com/send/?phone=6282121116002&text&type=phone_number&app_absent=0"
              className="block w-full rounded bg-[#a8d643] px-12 py-3 text-sm font-medium text-black shadow hover:bg-[#96c03c] focus:outline-none focus:ring active:bg-[#b2e447] sm:w-auto"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
