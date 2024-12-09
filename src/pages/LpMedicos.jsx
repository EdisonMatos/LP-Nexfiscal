import BackToTopButton from "../components/interactives/BackToTopButton";
import LPFloatingWhatsappButton from "../components/interactives/LPFloatingWhatsappButton";
import AboutParalaxeLP from "../components/sections/lpMedicos/AboutParalaxeLP";
import ContactLP from "../components/sections/lpMedicos/ContactLP";
import CtaLP from "../components/sections/lpMedicos/CtaLP";
import FeaturesLP from "../components/sections/lpMedicos/FeaturesLP";
import FooterLP from "../components/sections/lpMedicos/FooterLP";
import HeroLP from "../components/sections/lpMedicos/HeroLP";
import Steps from "../components/sections/lpMedicos/Steps";
import WhyUs from "../components/sections/lpMedicos/WhyUs";

export default function LpMedicos() {
  return (
    <div>
      <HeroLP />
      <FeaturesLP />
      <Steps />
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
