"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tagline } from "@/components/ui/tagline";

export function TestimonialsSection5() {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="testimonial-title"
    >
      <div className="container-padding-x mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center md:items-start md:text-left">
            <Tagline>The Credits / Development</Tagline>
            <h2 id="testimonial-title" className="heading-lg text-foreground">
              Made and Assisted by
            </h2>
          </div>

          {/* Row 1 */}
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            <div className="flex flex-col gap-8">
              <p className="text-foreground text-center text-lg/8 font-medium text-pretty md:text-left">
                All Front and Back end Development made by Carlos David.
                Including, all Tabs, Music Player included inside of Website
              </p>
              <div className="flex flex-col items-center gap-5 md:flex-row">
                <Avatar className="h-14 w-14">
                  <AvatarImage src="src/assets/profile.jpeg" 
                  alt="Carlos David" />
                  <AvatarFallback>CD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1 text-center md:text-left">
                  <p className="text-foreground text-base leading-6 font-semibold">
                    Carlos David
                  </p>
                  <p className="text-muted-foreground text-base leading-6">
                    10th Grade Student LHS
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-border hidden w-[1px] self-stretch md:block" />
            <Separator className="bg-border md:hidden" orientation="horizontal" />

            <div className="flex flex-col gap-8">
              <p className="text-foreground text-center text-lg/8 font-medium text-pretty md:text-left">
                Shadcn UI design designed by Figma, Used in part of layout and
                sections of the website.
              </p>
              <div className="flex flex-col items-center gap-5 md:flex-row">
                <Avatar className="h-14 w-14">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Figma"
                  />
                  <AvatarFallback>FG</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1 text-center md:text-left">
                  <p className="text-foreground text-base leading-6 font-semibold">
                    Figma
                  </p>
                  <p className="text-muted-foreground text-base leading-6">
                    ShadCN UI Owner
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-border" orientation="horizontal" />

          {/* Row 2 */}
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            <div className="flex flex-col gap-8">
              <p className="text-foreground text-center text-lg/8 font-medium text-pretty md:text-left">
                Background Music Producer.
              </p>
              <div className="flex flex-col items-center gap-5 md:flex-row">
                <Avatar className="h-14 w-14">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/6412038?s=200&v=4"
                    alt="React"
                  />
                  <AvatarFallback>RC</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1 text-center md:text-left">
                  <p className="text-foreground text-base leading-6 font-semibold">
                    Hammock
                  </p>
                  <p className="text-muted-foreground text-base leading-6">
                    Music Writer/Producer
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-border hidden w-[1px] self-stretch md:block" />
            <Separator className="bg-border md:hidden" orientation="horizontal" />

            <div className="flex flex-col gap-8">
              <p className="text-foreground text-center text-lg/8 font-medium text-pretty md:text-left">
                Background Music Producer
              </p>
              <div className="flex flex-col items-center gap-5 md:flex-row">
                <Avatar className="h-14 w-14">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/67109815?s=200&v=4"
                    alt="Tailwind CSS"
                  />
                  <AvatarFallback>TW</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1 text-center md:text-left">
                  <p className="text-foreground text-base leading-6 font-semibold">
                    Harry-Gregson Williams
                  </p>
                  <p className="text-muted-foreground text-base leading-6">
                    Music Writer/Producer
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-border hidden w-[1px] self-stretch md:block" />
            <Separator className="bg-border md:hidden" orientation="horizontal" />

            <div className="flex flex-col gap-8">
              <p className="text-foreground text-center text-lg/8 font-medium text-pretty md:text-left">
                Vercel provided seamless deployment and hosting, making it easy
                to ship updates and keep the site live with zero configuration
                overhead.
              </p>
              <div className="flex flex-col items-center gap-5 md:flex-row">
                <Avatar className="h-14 w-14">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/14985020?s=200&v=4"
                    alt="Vercel"
                  />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1 text-center md:text-left">
                  <p className="text-foreground text-base leading-6 font-semibold">
                    Vercel
                  </p>
                  <p className="text-muted-foreground text-base leading-6">
                    Deployment & Hosting
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}