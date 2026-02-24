import { FaqSection1 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-1";
import TempestLanding from "../components/pro-blocks/landing-page/TempestLanding";
import { Separator } from "@base-ui/react";

export default function LandingPage() {
  return (
    <>
      <TempestLanding />
      <Separator />
      <FaqSection1 />
    </>
  );
}