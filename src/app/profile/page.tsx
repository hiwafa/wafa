import Image from "next/image";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneSquareAlt, FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { RiUserLocationFill, RiJavascriptLine, RiVuejsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

export default () => {

    return (
        <div className="m-5">

            <section className="float-left mr-3 shadow-md w-full flex flex-col sm:w-72 min-w-72 rounded-md mb-5 pl-10">
                <Image className="rounded-md self-center mr-10" src="/profileImg.jpeg" width={150} height={150} alt="Profile Image" />
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
                    <div className=" overflow-auto border-l-2 border-emerald-500 pl-2">
                        <p className="font-mono font-bold mb-2 text-xl ">Muhammad Wafa</p>
                        <p className="font-bold mb-2 text-emerald-500 ">Software Developer</p>
                    </div>
                </div>
                <p className="font-thin">
                Ich bin ein Front-End Entwickler mit sieben Jahren Erfahrung in
diesem Bereich. Dennoch zeichne ich mich durch Fleiß, Engagement, Flexibilität und schnelle Auffassungsgabe aus. Technologie, insbesondere das Programmieren, fasziniert mich, und ich genieße es, mich immer wieder neuen Herausforderungen zu stellen und sie erfolgreich zu bewältigen. Ich arbeite konsequent daran, meine Aufgaben termingerecht zu erledigen, und strebe stets nach hochwertigen Ergebnissen.
                </p>
            </div>

            <div className="mt-10">
                <div className=" overflow-auto border-l-2 border-emerald-500 pl-2">
                    <p className="font-mono font-bold mb-2 text-xl">Job Experiences</p>
                </div>

                <div className="flex flex-col mt-2 gap-2">
                    <div className="inline-flex justify-between flex-wrap">
                        <p className="mr-5 text-emerald-500">Full Stack Entwickler</p>
                        <p className="font-light">Juni 2020 - Oktober 2021</p>
                    </div>
                    <p className="font-medium">The Code Giant Services - <span className="font-bold">Kabul</span></p>
                    <p className="font-thin">
                    Ich habe an mobilen Anwendungen, Webanwendungen und als Full-Stack-Entwickler mit verschiedenen Technologien gearbeitet.
                    </p>
                </div>

                <div className="flex flex-col mt-5 gap-2">
                    <div className="inline-flex justify-between flex-wrap">
                        <p className="mr-5 text-emerald-500">React Native Entwickler</p>
                        <p className="font-light">November 2018 - Mai 2020</p>
                    </div>
                    <p className="font-medium">Ganjinah Soft - <span className="font-bold">Kabul</span></p>
                    <p className="font-thin">
                    Ich habe React- und React Native-Technologien sowie auf JavaScript basierende Bibliotheken und Technologien verwendet.
                    </p>
                </div>

                <div className="flex flex-col mt-5 gap-2">
                    <div className="inline-flex justify-between flex-wrap">
                        <p className="mr-5 text-emerald-500">Dozent für Programmiersprachen</p>
                        <p className="font-light">September 2016 - April 2018</p>
                    </div>
                    <p className="font-medium">Balkh und Avicenna University - <span className="font-bold">Mazar-e-sharif</span></p>
                    <p className="font-thin">
                    Ich war als Dozent für Programmiersprachen und Datenbanken an der Fakultät für Informatik tätig.
                    </p>
                </div>

            </div>

            <div className="mt-10">
                <div className=" overflow-auto border-l-2 border-emerald-500 pl-2">
                    <p className="font-mono font-bold mb-2 text-xl">Educations</p>
                </div>

                <div className="flex flex-col mt-2 gap-2">
                    <div className="inline-flex justify-between flex-wrap">
                        <p className="mr-5 text-emerald-500">Sprachkurs für den Beruf</p>
                        <p className="font-light">2022 - 2023</p>
                    </div>
                    <p className="font-medium">BFZ und VHS bis zum B2-Niveau - <span className="font-bold">Schweinfurt</span></p>
                    <p className="font-thin">
                    Neben meiner Programmiertätigkeit habe ich 2 Jahre lang Deutsch gelernt.
                    </p>
                </div>

                <div className="flex flex-col mt-5 gap-2">
                    <div className="inline-flex justify-between flex-wrap">
                        <p className="mr-5 text-emerald-500">Bachelor</p>
                        <p className="font-light">2013 - 2016</p>
                    </div>
                    <p className="font-medium">Computer Science - <span className="font-bold">Balkh University</span></p>
                    <p className="font-thin">
                    Informatik, Mathematik mit Schwerpunkt Software Engineering
                    </p>
                </div>

            </div>

        </div>
    );
}