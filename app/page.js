import Herosection from './Components/Carousel'
import About from './Components/HomeAbout'
import CampusPartners from "./Components/CampusPartners";
import Benefits from './Components/LaundryBenefits'
import HowItWorksSection from "./Components/HowItWorksSection";
import VirtualTourSection from "./Components/VirtualTourSection";
import WhyChoose from "./Components/WhyChooseUs";
import Partners from './Components/HomePartners'
import Testimonial from "./Components/Testimonicals";
import ScrollReveal from "./Components/ScrollReveal";
import CampusSolutionsShowcase from './Components/CampusSolutionsShowcase';
export default function Home() {
  return (
    <>
      <Herosection/>
       <ScrollReveal direction="scale"><VirtualTourSection/></ScrollReveal>
      <ScrollReveal direction="up"><CampusPartners/></ScrollReveal>
        <ScrollReveal direction="right"><Benefits/></ScrollReveal>
      <About/>
      <ScrollReveal direction="up"><CampusSolutionsShowcase/></ScrollReveal>
      <WhyChoose/>
      <ScrollReveal direction="up"><HowItWorksSection/></ScrollReveal>
      {/* <ScrollReveal direction="up"><Testimonial/></ScrollReveal> */}
      {/* <ScrollReveal direction="scale"><Partners/></ScrollReveal> */}
    </>
  );
}
