import { BentoGrid1 } from "./components/pro-blocks/landing-page/bento-grids/bento-grid-1";
import { FaqSection1 } from "./components/pro-blocks/landing-page/faq-sections/faq-section-1";
import { TestimonialsSection1 } from "./components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1";
import { Separator } from "./components/ui/separator";

export default function App() {
return (
      <>
        <BentoGrid1 />
        <Separator />
        <TestimonialsSection1 />
        <Separator />
        <FaqSection1 />

      </>
    );
}