import contentAutoPecas from "../../../content/contentAutoPecas";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function FeaturesLP({ className }) {
  return (
    <>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            miniTitle={contentAutoPecas.features.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={contentAutoPecas.features.sectionHeader.title}
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={contentAutoPecas.features.cards.card1.icon}
              title={contentAutoPecas.features.cards.card1.title}
              description={contentAutoPecas.features.cards.card1.description}
            />
            <FeatureCardLP
              icon={contentAutoPecas.features.cards.card2.icon}
              title={contentAutoPecas.features.cards.card2.title}
              description={contentAutoPecas.features.cards.card2.description}
            />
            <FeatureCardLP
              icon={contentAutoPecas.features.cards.card3.icon}
              title={contentAutoPecas.features.cards.card3.title}
              description={contentAutoPecas.features.cards.card3.description}
            />
            <FeatureCardLP
              icon={contentAutoPecas.features.cards.card4.icon}
              title={contentAutoPecas.features.cards.card4.title}
              description={contentAutoPecas.features.cards.card4.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
