import Image from "next/image";

export default () => {

    return (
        <div className="m-5">

           <section className="float-left mr-3 bg-emerald-400 w-full flex flex-1 justify-center">
            <Image className="rounded-md" src="/profileImg.jpeg" width={150} height={150} alt="Profile Image"/>
           </section>

           <div className="mt-5">
                <p className="font-serif font-bold mb-2">Muhammad Wafa</p>
                <p className="font-mono font-bold mb-2">Software Developer</p>
                <p className="font-thin">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam libero ad ratione, nesciunt adipisci temporibus omnis, modi recusandae soluta molestias optio maxime magnam consequuntur odit, corrupti sunt eaque distinctio voluptatem!
                </p>
           </div>
           
        </div>
    );
}