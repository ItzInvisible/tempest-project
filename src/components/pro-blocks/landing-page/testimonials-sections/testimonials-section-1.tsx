"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

import frostImg from "@/assets/frost.png";
import wellsImg from "@/assets/wells.jpg";

export function TestimonialsSection1() {
  return (
    <section
      className="bg-muted/40 container-padding-x section-padding-y flex flex-col items-center gap-12"
      aria-labelledby="testimonial-title"
    >
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {/* Testimonial 1 */}
        <div className="flex flex-1 flex-col items-center gap-8 bg-card rounded-2xl p-8">
          <blockquote
            id="testimonial-title"
            className="text-foreground text-center text-lg leading-7 font-medium md:text-xl"
          >
            &quot;I think it is the classic tale of revenge and that at some
            point all humans feel a need for.&quot;
          </blockquote>
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-12 w-12 rounded-xl md:h-14 md:w-14">
              <AvatarImage src={frostImg} alt="Heidi Frost Avatar" />
            </Avatar>
            <div className="flex items-center gap-2">
              <span className="text-foreground text-base font-medium">
                Heidi Frost
              </span>
              <span className="text-muted-foreground opacity-50">•</span>
              <span className="text-muted-foreground text-base text-center">
                English 10 Teacher at Lawrenceburg High School
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-1 flex-col items-center gap-8 bg-card rounded-2xl p-8">
          <blockquote
            className="text-foreground text-center text-lg leading-7 font-medium md:text-xl"
          >
            &quot;<span className="italic">The Tempest</span> is a harrowing tale of colonization that continues to be relevant hundreds of years later.&quot;
          </blockquote>
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-12 w-12 rounded-xl md:h-14 md:w-14">
              <AvatarImage src={wellsImg} alt="Brenden Wells Avatar" />
            </Avatar>
            <div className="flex items-center gap-2">
              <span className="text-foreground text-base font-medium">
                Brenden Wells
              </span>
              <span className="text-muted-foreground opacity-50">•</span>
              <span className="text-muted-foreground text-base text-center">
                English 9 Teacher at Lawrenceburg High School
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}