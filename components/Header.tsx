import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="flex shadow-md justify-between px-5 py-5 items-center bg-[#a8d643]">
      <div className="flex items-center">
        <Link href={"/"} className="flex items-center">
          <Image
            src={"/icon/bandungfarmericon.png"}
            width={50}
            height={50}
            alt={"Bandung Farmer"}
          />
          <h1 className="text-xl text-gray-800 font-bold">Bandung Farmer</h1>
        </Link>
      </div>
      <div className="sm:flex items-center hidden">
        <ul className="flex items-center space-x-6">
          <li className="font-semibold text-gray-700">
            <Link href="/tentang">Tentang</Link>
          </li>
          <li className="font-semibold text-gray-700">
            <Link href="/produk">Produk</Link>
          </li>
          <li className="font-semibold text-gray-700">
            <Link href="/kontak">Kontak</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
