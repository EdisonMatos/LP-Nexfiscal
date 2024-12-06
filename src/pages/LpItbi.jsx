import BackToTopButton from "../components/interactives/BackToTopButton";
import LPFloatingWhatsappButton from "../components/interactives/LPFloatingWhatsappButton";
import AboutParalaxeLP from "../components/sections/lpItbi/AboutParalaxeLP";
import ContactLP from "../components/sections/lpItbi/ContactLP";
import CtaLP from "../components/sections/lpItbi/CtaLP";
import FeaturesLP from "../components/sections/lpItbi/FeaturesLP";
import FooterLP from "../components/sections/lpItbi/FooterLP";
import HeroLP from "../components/sections/lpItbi/HeroLP";
import WhyUs from "../components/sections/lpItbi/WhyUs";

export default function LpItbi() {
  return (
    <div>
      <HeroLP />
      <FeaturesLP />
      <AboutParalaxeLP />
      <WhyUs />
      <CtaLP />
      <ContactLP />
      <FooterLP />
      <LPFloatingWhatsappButton />
      {/* <BackToTopButton /> */}
    </div>
  );
}
