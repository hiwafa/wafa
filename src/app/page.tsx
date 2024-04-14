import Footer from "@/components/Footer";
import Maincontent from "@/components/Maincontent";
import Navigation from "@/components/Navigation";

export default ()=> {

  return (
    <div className="flex flex-col">
      <Navigation />
      <Maincontent />
      <Footer />
    </div>
  );
}