import AboutUs from "@/components/ui/AboutUs";
import Banner from "@/components/ui/Banner";
import Brands from "@/components/ui/Brands";
import Featured from "@/components/ui/Featured";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Brands/>
      <AboutUs/>
      <Featured/>
    </div>
  );
}
