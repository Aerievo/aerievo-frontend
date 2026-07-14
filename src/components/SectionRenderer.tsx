import HeroSection from "./sections/HeroSection";
import IconFeatureGridSection from "./sections/IconFeatureGridSection";
import SolutionsGridSection from "./sections/SolutionsGridSection";
import ContentWithImageSection from "./sections/ContentWithImageSection";
import NarrativeSplitSection from "./sections/NarrativeSplitSection";
import TeamGridSection from "./sections/TeamGridSection";
import TestimonialCarouselSection from "./sections/TestimonialCarouselSection";
import LogoStripSection from "./sections/LogoStripSection";
import CTABannerSection from "./sections/CTABannerSection";
import IconListPairSection from "./sections/IconListPairSection";
import FAQAccordionSection from "./sections/FAQAccordionSection";
import ContactSection from "./sections/ContactSection";
import BenefitsGridSection from "./sections/BenefitsGridSection";
import ParagraphEditorSection from "./sections/ParagraphEditorSection";
import SuccessStoriesSection from "./sections/SuccessStoriesSection";
import React from "react";

interface SectionRendererProps {
  sections: PageSection[];
}

// Section types that manage their own full-bleed background/visual treatment
// and shouldn't be wrapped in the alternating background pattern.
const SELF_BG_TYPES = new Set(["hero", "ctaBanner"]);

export default function SectionRenderer({ sections }: SectionRendererProps) {
  let altIndex = 0;

  return (
    <>
      {sections.map((section, index) => {
        const key = section.id || `${section.sectionType}-${index}`;
        const isSelfBg = SELF_BG_TYPES.has(section.sectionType);

        const bgClass = isSelfBg ? "" : altIndex % 2 === 0 ? "bg-surface" : "bg-white";
        if (!isSelfBg) altIndex++;

        const wrap = (node: React.ReactNode) =>
          isSelfBg ? node : <div key={key} className={bgClass}>{node}</div>;

        if (!section.content) return null;

        switch (section.sectionType) {
          case "hero":
            return <HeroSection key={key} data={section.content} />;

          case "iconFeatureGrid":
            return wrap(<IconFeatureGridSection data={section.content} />);

          case "solutionsGrid":
            return wrap(<SolutionsGridSection data={section.content} />);

          case "contentWithImage":
            return wrap(<ContentWithImageSection data={section.content} />);

          case "narrativeSplit":
            return wrap(<NarrativeSplitSection data={section.content} />);

          case "teamGrid":
            return wrap(<TeamGridSection data={section.content} />);

          case "testimonialCarousel":
            return wrap(<TestimonialCarouselSection data={section.content} />);

          case "logoStrip":
            return wrap(<LogoStripSection data={section.content} />);

          case "ctaBanner":
            return <CTABannerSection key={key} data={section.content} />;

          case "iconListPair":
            return wrap(<IconListPairSection data={section.content} />);

          case "faqAccordion":
            return wrap(<FAQAccordionSection data={section.content} />);

          case "contactSection":
            return wrap(<ContactSection data={section.content} />);

          case "benefitsGrid":
            return wrap(<BenefitsGridSection data={section.content} />);

          case "paragraphEditor":
            return wrap(<ParagraphEditorSection data={section.content} />);

          case "successStories":
            return wrap(<SuccessStoriesSection data={section.content} />);

          default:
            return null;
        }
      })}
    </>
  );
}
