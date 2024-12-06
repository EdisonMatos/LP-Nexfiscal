import contentMedicos from "../../../content/contentMedicos";
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
            miniTitle={contentMedicos.features.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={contentMedicos.features.sectionHeader.title}
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={contentMedicos.features.cards.card1.icon}
              title={contentMedicos.features.cards.card1.title}
              description={contentMedicos.features.cards.card1.description}
            />
            <FeatureCardLP
              icon={contentMedicos.features.cards.card2.icon}
              title={contentMedicos.features.cards.card2.title}
              description={contentMedicos.features.cards.card2.description}
            />
            <FeatureCardLP
              icon={contentMedicos.features.cards.card3.icon}
              title={contentMedicos.features.cards.card3.title}
              description={contentMedicos.features.cards.card3.description}
            />
            <FeatureCardLP
              icon={contentMedicos.features.cards.card4.icon}
              title={contentMedicos.features.cards.card4.title}
              description={contentMedicos.features.cards.card4.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
