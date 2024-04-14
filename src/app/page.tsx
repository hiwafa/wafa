import Maincontent from "@/components/Maincontent";
import Navigation from "@/components/Navigation";

export default ()=> {

  return (
    <div className="flex flex-1">
      <Navigation />
      <Maincontent />
    </div>
  );
}