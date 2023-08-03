import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="flex border-b shadow-md justify-between px-20 py-10 items-center bg-white">
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
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          <li className="font-semibold text-gray-700">
            <Link href="/tentang">Tentang</Link>
          </li>
          <li className="font-semibold text-gray-700">
            <Link href="/produk">Produk</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
