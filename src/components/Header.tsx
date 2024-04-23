'use client'

import Image from "next/image";
import { IoMoon, IoMenu, IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useRef, useState } from "react";
import { GiMoon } from "react-icons/gi";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default () => {

  const mobileMenuRef = useRef(null);
  const currentPath = usePathname();

  const handleMobileMenu = () => {

    if (mobileMenuRef?.current?.style?.display != "none") {
      mobileMenuRef.current.style.display = "none";
    }

    return false;
  }

  const handleOpenMobileMenu = () => {

    if (mobileMenuRef?.current?.style) {
      mobileMenuRef.current.style.display = "flex";
    }
    return false;
  }

  return (
    <div className="flex justify-between h-16 shadow-md">
      <section className=" content-center md:ml-10 ml-5">
        <Image src="/logo.png" alt="logo" width={50} height={50} className="w-12 h-12 object-contain " />
      </section>

      <nav className={`hidden sm:flex gap-3 items-center`}>
        <Link className={`${currentPath == '/' && 'border-emerald-500 border-b-2'}`} href="/">Home</Link>
        <Link className={`${currentPath == '/about' && 'border-emerald-500 border-b-2'}`} href="/about">About Us</Link>
        <Link className={`${currentPath == '/services' && 'border-emerald-500 border-b-2'}`} href="/services">Services</Link>
        <Link className={`${currentPath == '/contact' && 'border-emerald-500 border-b-2'}`} href="/contact">Contact</Link>
        <Link className={`${currentPath == '/profile' && 'border-emerald-500 border-b-2'}`} href="/profile">Profile</Link>
      </nav>

      <nav ref={mobileMenuRef} className={`absolute hidden bg-blue-500 w-full h-48 flex-col items-start justify-evenly text-white space-x-10`}>
        <a onClick={handleMobileMenu} className={`absolute right-4 top-4 ${"animate-wiggle"}`}>
          <IoClose size={25} />
        </a>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/profile">Profile</Link>
      </nav>
      <div className="mt-4 mr-4">
        <a className="sm:hidden block" onClick={handleOpenMobileMenu}>
          <IoIosMenu size={25} />
        </a>
        <a className="hidden sm:block">
          <GiMoon size={25} />
        </a>
      </div>
    </div>
  );
}