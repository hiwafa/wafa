import Image from "next/image";
import { MdMarkEmailRead, MdLocationPin } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { RiUserLocationFill } from "react-icons/ri";

export default () => {

    return (
        <div className="m-5">

           <section className="float-left mr-3 shadow-md w-full flex flex-col items-center sm:w-72 min-w-72 rounded-md mb-5">
            <Image className="rounded-md self-center " src="/profileImg.jpeg" width={150} height={150} alt="Profile Image"/>
            <div className="mt-2">
                <p className="font-mono font-bold mb-2 text-center">Muhammad Wafa</p>
                <div className="w-full flex items-center gap-4 text-wrap">
                    <MdMarkEmailRead />
                    <p className="font-mono mb-2 text-sm">muhammadwfa@gmail.com</p>
                </div>
                <div className="w-full flex items-center gap-4">
                    <FaPhoneSquareAlt />
                    <p className="font-mono mb-2 text-sm">0178889999</p>
                </div>
                <div className="w-full items-center mt-3">
                    <RiUserLocationFill size={18} className="self-start float-left mr-4" />
                    <p className="font-mono mb-2 text-sm ">Bauerngasse 38</p>
                    <p className="font-mono mb-2 text-sm">94444 Schweinfurt</p>
                </div>
            </div>
           </section>

           <div className="mt-5">
                <p className="font-mono font-bold mb-2">Software Developer</p>
                <p className="font-thin">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam libero ad ratione, nesciunt adipisci temporibus omnis, modi recusandae soluta molestias optio maxime magnam consequuntur odit, corrupti sunt eaque distinctio voluptatem!
                </p>
           </div>
           
        </div>
    );
}