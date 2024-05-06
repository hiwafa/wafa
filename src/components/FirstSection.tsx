import Image from "next/image";
import { SlBubble } from "react-icons/sl";

export default () => {

  return (
    <div className="m-10 flex flex-row gap-1 flex-wrap items-start content-start">


      <div className="w-96 lg:basis-1/4 min-h-72 flex flex-col flex-grow text-white font-mono">

        <p className="font-bold text-4xl">
          New language, new opportunities, new you
        </p>

        <p className="mt-5">
          Get access to compact lessons from the experts and connect with a community of native speakers to help you master words faster.
        </p>

        <button className="mt-2 self-center border-none bg-emerald-400 rounded-xl p-2 shadow-sm">Learn for free</button>

      </div>

      

      <div className="w-56 lg:basis-1/4 min-h-48  flex-grow">
        <Image src="/learneverywhere.png" width={300} height={200} alt="language show" className="w-auto h-auto " />
      </div>
      <div className="w-56 lg:basis-1/4 min-h-48 flex-grow">
        <Image src="/withlaptop.png" width={300} height={200} alt="language show" className="w-auto h-auto" />
      </div>
      <div className="w-56 lg:basis-1/4 min-h-48 flex-grow bg-orange-200">
        <Image src="/withlaptop.png" width={300} height={200} alt="language show" className="w-auto h-auto" />
      </div>
      <div className="w-56 lg:basis-1/4 min-h-48 bg-orange-200 flex-grow"></div>
      <div className="w-56 lg:basis-1/4 min-h-48 bg-orange-200 flex-grow"></div>
      <div className="w-56 lg:basis-1/4 min-h-48 bg-orange-200 flex-grow"></div>

    </div>
  );
}