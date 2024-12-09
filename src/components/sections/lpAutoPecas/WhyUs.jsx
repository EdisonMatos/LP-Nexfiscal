import contentAutoPecas from "../../../content/contentAutoPecas";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function WhyUs({}) {
  return (
    <>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            miniTitle={contentAutoPecas.whyUs.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={contentAutoPecas.whyUs.sectionHeader.title}
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={contentAutoPecas.whyUs.cards.card1.icon}
              title={contentAutoPecas.whyUs.cards.card1.title}
              description={contentAutoPecas.whyUs.cards.card1.description}
            />
            <FeatureCardLP
              icon={contentAutoPecas.whyUs.cards.card2.icon}
              title={contentAutoPecas.whyUs.cards.card2.title}
              description={contentAutoPecas.whyUs.cards.card2.description}
            />
            <FeatureCardLP
              icon={contentAutoPecas.whyUs.cards.card3.icon}
              title={contentAutoPecas.whyUs.cards.card3.title}
              description={contentAutoPecas.whyUs.cards.card3.description}
            />
            <FeatureCardLP
              icon={contentAutoPecas.whyUs.cards.card4.icon}
              title={contentAutoPecas.whyUs.cards.card4.title}
              description={contentAutoPecas.whyUs.cards.card4.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
