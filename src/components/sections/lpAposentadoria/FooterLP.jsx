import contentAposentadoria from "../../../content/contentAposentadoria";
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";

export default function FooterLP() {
  return (
    <div>
      <SectionArea paddingTopAndBottom={false}>
        <SectionWrapper>
          <div className="w-full text-center font-mainFont py-[36px] opacity-70">
            <p>
              {contentAposentadoria.footer.copyrightLine}
              <br />
              <br />
              {/* {contentAposentadoria.footer.disclaimer} */}
            </p>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
