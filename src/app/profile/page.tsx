import Image from "next/image";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

export default () => {

    return (
        <div className="m-5">

           <section className="float-left mr-3 shadow-md w-full flex flex-col items-center sm:w-72 min-w-72 rounded-md mb-5">
            <Image className="rounded-md self-center " src="/profileImg.jpeg" width={150} height={150} alt="Profile Image"/>
            <div className="mt-2">
                <p className="font-serif font-bold mb-2">Muhammad Wafa</p>
                <div className="w-full flex items-center gap-4 text-wrap">
                    <MdMarkEmailRead />
                    <p className="font-mono font-bold mb-2 ">muhammadwfa@gmail.com</p>
                </div>
                <div className="w-full flex items-center gap-4">
                    <FaPhoneSquareAlt />
                    <p className="font-mono font-bold mb-2">0178889999</p>
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