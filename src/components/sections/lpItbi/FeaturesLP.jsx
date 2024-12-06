import contentItbi from "../../../content/contentItbi";
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
            miniTitle={contentItbi.features.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={contentItbi.features.sectionHeader.title}
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={contentItbi.features.cards.card1.icon}
              title={contentItbi.features.cards.card1.title}
              description={contentItbi.features.cards.card1.description}
            />
            <FeatureCardLP
              icon={contentItbi.features.cards.card2.icon}
              title={contentItbi.features.cards.card2.title}
              description={contentItbi.features.cards.card2.description}
            />
            <FeatureCardLP
              icon={contentItbi.features.cards.card3.icon}
              title={contentItbi.features.cards.card3.title}
              description={contentItbi.features.cards.card3.description}
            />
            <FeatureCardLP
              icon={contentItbi.features.cards.card4.icon}
              title={contentItbi.features.cards.card4.title}
              description={contentItbi.features.cards.card4.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
