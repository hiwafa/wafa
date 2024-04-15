import Image from "next/image";
import { IoMoon, IoMenu, IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

export default ()=> {

  

    return (
      <div className="bg-indigo-300 flex justify-between">
       <section>logo</section>
       <nav className="absolute bg-blue-500 w-full h-48 flex flex-col items-center justify-evenly text-white">
        <a className="absolute right-4 top-4" href="">
        <IoIosMenu size={25} />
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Contact</a>
        <a href="">Profile</a>
       </nav>
       <div>
        click
       </div>
      </div>
    );
  }