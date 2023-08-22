"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex shadow-md justify-between px-5 py-5 items-center bg-white">
      <div className="flex items-center">
        <Link href={"/"} className="flex items-center">
          <Image
            src={"/icon/logo-bf.png"}
            className="object-center h-[120px] w-[350px] object-cover"
            width={1000}
            height={1000}
            alt={"Bandung Farmer"}
          />
        </Link>
      </div>
      <div className="hidden sm:flex items-center space-x-6">
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
      <div className="sm:hidden">
        {!isMenuOpen ? (
          <button
            className="text-gray-700"
            onClick={openMenu}
            aria-label="Open Menu"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </button>
        ) : (
          <div className="fixed inset-0 bg-white h-screen w-screen z-50">
            <div className="flex flex-col items-center justify-center h-full w-full">
              <ul className="space-y-6 text-center">
                <li className="font-semibold text-gray-700">
                  <Link href="/" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li className="font-semibold text-gray-700">
                  <Link href="/produk" onClick={closeMenu}>
                    Produk
                  </Link>
                </li>
                <li className="font-semibold text-gray-700">
                  <Link href="/tentang" onClick={closeMenu}>
                    Tentang
                  </Link>
                </li>
                <li className="font-semibold text-gray-700">
                  <Link href="/kontak" onClick={closeMenu}>
                    Hubungi
                  </Link>
                </li>
              </ul>
            </div>
            <button
              className="absolute top-5 right-5 text-gray-700"
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
              </svg>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
