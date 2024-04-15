import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default ()=> {

  return (
    <div className="flex flex-col h-screen bg-green-300">
      <Header/>
      <Content />
      <Footer />
    </div>
  );
}