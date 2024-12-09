import BackToTopButton from "../components/interactives/BackToTopButton";
import LPFloatingWhatsappButton from "../components/interactives/LPFloatingWhatsappButton";
import AboutParalaxeLP from "../components/sections/lpAutoPecas/AboutParalaxeLP";
import ContactLP from "../components/sections/lpAutoPecas/ContactLP";
import CtaLP from "../components/sections/lpAutoPecas/CtaLP";
import FeaturesLP from "../components/sections/lpAutoPecas/FeaturesLP";
import FooterLP from "../components/sections/lpAutoPecas/FooterLP";
import HeroLP from "../components/sections/lpAutoPecas/HeroLP";
import Steps from "../components/sections/lpAutoPecas/Steps";
import WhyUs from "../components/sections/lpAutoPecas/WhyUs";

export default function LpAutoPecas() {
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
      {/* <BackToTopButton /> */}
    </div>
  );
}
