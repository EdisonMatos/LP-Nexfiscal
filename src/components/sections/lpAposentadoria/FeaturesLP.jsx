import contentAposentadoria from "../../../content/contentAposentadoria";
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
            miniTitle={contentAposentadoria.features.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={
              contentAposentadoria.features.sectionHeader.title
            }
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={contentAposentadoria.features.cards.card1.icon}
              title={contentAposentadoria.features.cards.card1.title}
              description={
                contentAposentadoria.features.cards.card1.description
              }
            />
            <FeatureCardLP
              icon={contentAposentadoria.features.cards.card2.icon}
              title={contentAposentadoria.features.cards.card2.title}
              description={
                contentAposentadoria.features.cards.card2.description
              }
            />
            <FeatureCardLP
              icon={contentAposentadoria.features.cards.card3.icon}
              title={contentAposentadoria.features.cards.card3.title}
              description={
                contentAposentadoria.features.cards.card3.description
              }
            />
            <FeatureCardLP
              icon={contentAposentadoria.features.cards.card4.icon}
              title={contentAposentadoria.features.cards.card4.title}
              description={
                contentAposentadoria.features.cards.card4.description
              }
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
