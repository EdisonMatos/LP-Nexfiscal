import BackToTopButton from "../components/interactives/BackToTopButton";
import LPFloatingWhatsappButton from "../components/interactives/LPFloatingWhatsappButton";
import AboutParalaxeLP from "../components/sections/lpAposentadoria/AboutParalaxeLP";
import ContactLP from "../components/sections/lpAposentadoria/ContactLP";
import CtaLP from "../components/sections/lpAposentadoria/CtaLP";
import FeaturesLP from "../components/sections/lpAposentadoria/FeaturesLP";
import FooterLP from "../components/sections/lpAposentadoria/FooterLP";
import HeroLP from "../components/sections/lpAposentadoria/HeroLP";
import WhyUs from "../components/sections/lpAposentadoria/WhyUs";

export default function LpAposentadoria() {
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
      <BackToTopButton />
    </div>
  );
}
