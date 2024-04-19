import Image from "next/image";
import { MdMarkEmailRead, MdLocationPin } from "react-icons/md";
import { FaPhoneSquareAlt, FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { RiUserLocationFill, RiJavascriptLine, RiVuejsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

export default () => {

    return (
        <div className="m-5">

           <section className="float-left mr-3 shadow-md w-full flex flex-col sm:w-72 min-w-72 rounded-md mb-5 pl-10">
            <Image className="rounded-md self-center mr-10" src="/profileImg.jpeg" width={150} height={150} alt="Profile Image"/>
            <div className="mt-5 space-y-2">
                <p className="font-mono font-bold mb-2 uppercase">Contacts</p>
                <div className="w-full flex items-center gap-4 text-wrap">
                    <MdMarkEmailRead />
                    <p className="font-mono text-sm">muhammadwfa@gmail.com</p>
                </div>
                <div className="w-full flex items-center gap-4">
                    <FaPhoneSquareAlt />
                    <p className="font-mono text-sm">0178889999</p>
                </div>
                <div className="w-full flex">
                    <RiUserLocationFill size={18} className="self-start mr-4" />
                    <p className="font-mono text-sm ">Bauerngasse 38, 94444 Schweinfurt</p>
                </div>
            </div>
            <div className="mt-5 mb-5 space-y-2">
                <p className="font-mono font-bold mb-2 uppercase">Skills</p>
                <div className="w-full flex items-center gap-4">
                    <FaJava />
                    <p className="font-mono text-sm self-end">Java</p>
                </div>
                <div className="w-full flex items-center gap-4">
                    <RiJavascriptLine />
                    <p className="font-mono text-sm self-end">Javascript</p>
                </div>
                <div className="w-full flex items-center gap-4">
                    <FaReact />
                    <p className="font-mono text-sm self-end">ReactJS</p>
                </div>
                <div className="w-full flex items-center gap-4">
                    <SiRedux />
                    <p className="font-mono text-sm self-end">Redux</p>
                </div>
                <div className="w-full flex items-center gap-4">
                    <FaNodeJs />
                    <p className="font-mono text-sm self-end">Node.js</p>
                </div>
                <div className="w-full flex items-center gap-4">
                    <RiVuejsLine />
                    <p className="font-mono text-sm self-end">Vue.js</p>
                </div>
            </div>
            <div className="mt-5 mb-5 space-y-2">
                <p className="font-mono font-bold mb-2 uppercase">Languages</p>
                <div className="flex flex-col gap-2">
                    <p className="font-thin text-sm "> <span className="font-bold">Persian</span> - Native language</p>
                    <p className="font-thin text-sm "> <span className="font-bold">German</span> - Negotiating skills</p>
                    <p className="font-thin text-sm "> <span className="font-bold">English</span> - Very good knowledge</p>
                </div>
            </div>
           </section>

           <div className="mt-5">
                <div className="inline-flex sm:block">
                    {/* <span className="w-1 bg-emerald-500 h-auto mr-2" /> */}
                    <div className=" overflow-auto border-l-2 border-emerald-500 pl-2 ">
                        <p className="font-mono font-bold mb-2 text-xl ">Muhammad Wafa</p>
                        <p className="font-bold mb-2 text-emerald-500 ">Software Developer</p>
                    </div>
                </div>
                <p className="font-thin">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam libero ad ratione, nesciunt adipisci temporibus omnis, modi recusandae soluta molestias optio maxime magnam consequuntur odit, corrupti sunt eaque distinctio voluptatem!
                </p>
           </div>
           
        </div>
    );
}