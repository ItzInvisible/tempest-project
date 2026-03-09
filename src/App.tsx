import { BentoGrid1 } from "./components/pro-blocks/landing-page/bento-grids/bento-grid-1";
import { FaqSection1 } from "./components/pro-blocks/landing-page/faq-sections/faq-section-1";
import { TestimonialsSection1 } from "./components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1";
import { Separator } from "./components/ui/separator";
import { FeatureSection18 } from "./components/pro-blocks/landing-page/feature-sections/feature-section-18";

export default function App() {
return (
      <>
        <BentoGrid1 />
        <Separator />
        <TestimonialsSection1 />
        <Separator />
        <FeatureSection18/>
        <FaqSection1 />

      </>
    );
}