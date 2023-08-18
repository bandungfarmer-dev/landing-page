import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="flex shadow-md justify-between px-5 py-5 items-center bg-[#a8d643]">
      <div className="flex items-center">
        <Link href={"/"} className="flex items-center">
          <Image
            src={"/icon/logo-bf.png"}
            className="object-center h-[50px] w-[170px] object-cover"
            width={137}
            height={23}
            alt={"Bandung Farmer"}
          />
        </Link>
      </div>
      <div className="sm:flex items-center hidden">
        <ul className="flex items-center space-x-6">
          <li className="font-semibold text-gray-700">
            <Link href="/">Home</Link>
          </li>
          <li className="font-semibold text-gray-700">
            <Link href="/produk">Produk</Link>
          </li>
          <li className="font-semibold text-gray-700">
            <Link href="/tentang">Tentang</Link>
          </li>
          <li className="font-semibold text-gray-700">
            <Link href="/kontak">Hubungi</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
