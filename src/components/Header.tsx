'use client'

import Image from "next/image";
import { IoMoon, IoMenu, IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useRef, useState } from "react";

export default ()=> {

  const [anim, setAnim] = useState(false);
  const mobileMenuRef = useRef(null);
  
  const handleMobileMenu = ()=> {
    setAnim(true);

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
      <div className="bg-indigo-300 flex justify-between h-16 ">
       <section className=" content-center ml-10">
        <Image src="/logo.png" alt="logo" width={50} height={50} className="w-12 h-12 object-contain " />
       </section>
       <nav ref={mobileMenuRef} className={`absolute bg-blue-500 w-full h-48  flex flex-col items-start justify-evenly text-white space-x-10`}>
        <a onClick={handleMobileMenu}  onAnimationEnd={()=> setAnim(false)} className={`absolute right-4 top-4 ${anim && "animate-wiggle"}`}>
          <IoClose size={25} />
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Contact</a>
        <a href="">Profile</a>
       </nav>
       <div className="mt-4 mr-4">
        <a onClick={handleOpenMobileMenu}>
          <IoIosMenu size={25} />
        </a>
       </div>
      </div>
    );
  }