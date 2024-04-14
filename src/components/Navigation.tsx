import Image from "next/image";
import { IoMoon, IoMenu, IoClose } from "react-icons/io5";

export default ()=> {

  

    return (
      <div className="flex flex-1 bg-slate-400">
        <section className="bg-green-300">
          logo
        </section>
        <nav className="bg-blue-500">
          menus
        </nav>
        <section className="bg-yellow-300">
          icon
        </section>
      </div>
    );
  }