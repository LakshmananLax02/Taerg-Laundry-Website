import Image from "next/image";
import Herosection from './Components/Carousel'
import WhyChoose from "./Components/WhyChooseUs";
import Partners from './Components/HomePartners'
import Testimonial from "./Components/Testimonicals";

export default function Home() {
  return (
 <>
 <Herosection/>
<WhyChoose/>
<Testimonial/>
<Partners/>
 </>
  );
}
