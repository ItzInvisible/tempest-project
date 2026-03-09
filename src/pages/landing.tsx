import { BentoGrid1 } from "@/components/pro-blocks/landing-page/bento-grids/bento-grid-1";
import { FaqSection1 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-1";
import MusicPlayer from "@/components/ui/music-player";
import { Separator } from "@/components/ui/separator"

export default function LandingPage() {
  return (
    <>
      <BentoGrid1 />
      <Separator />
      <FaqSection1 />
      <MusicPlayer />
    </>
  );
}