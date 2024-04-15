'use client'

import Image from "next/image";
import { IoMoon, IoMenu, IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useRef } from "react";

export default ()=> {

  const mobileMenuRef = useRef(null);
  
  const handleMobileMenu = ()=> {

    if(mobileMenuRef?.current?.style?.display != "none"){
      mobileMenuRef.current.style.display = "none";
    }

    return false;
  }

  const handleOpenMobileMenu = ()=> {
    if(mobileMenuRef?.current?.style?.display == "none"){
      mobileMenuRef.current.style.display = "flex";
    }
    return false;
  }

    return (
      <div className="bg-indigo-300 flex justify-between">
       <section>logo</section>
       <nav ref={mobileMenuRef} className="absolute bg-blue-500 w-full h-48 flex flex-col items-start justify-evenly text-white pl-8">
        <a className="absolute right-4 top-4" onClick={handleMobileMenu}>
          <IoIosMenu size={25} />
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Contact</a>
        <a href="">Profile</a>
       </nav>
       <div>
        <a onClick={handleOpenMobileMenu}>
          <IoIosMenu size={25} />
        </a>
       </div>
      </div>
    );
  }