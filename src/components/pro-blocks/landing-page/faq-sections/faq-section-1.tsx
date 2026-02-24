import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FaqSection1() {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="faq-heading"
    >
      <div className="container-padding-x mx-auto flex max-w-2xl flex-col gap-10 md:gap-12">
        {/* Section Header */}
        <div className="section-title-gap-lg flex flex-col items-center text-center">
          {/* Category Tag */}
          <Tagline>FAQ section</Tagline>
          {/* Main Title */}
          <h1 id="faq-heading" className="heading-lg text-foreground">
            Frequently asked questions
          </h1>
          {/* Section Description */}
          <p className="text-muted-foreground">
            We&apos;ve compiled the most important information to help you get
            the most out of your experience. Can&apos;t find what you&apos;re
            looking for?{" "}
            <a href="#" className="text-primary underline">
              Contact us.
            </a>
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion defaultValue={["item-1"]} aria-label="FAQ items">
          {/* FAQ Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-base font-medium">
              What is the Tempest?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              The Tempest is a book written by William Shakespeare, believed to have been written in 1610-1611. 
              It is a play that tells the story of Prospero, a magician and the rightful Duke of Milan, 
              who has been stranded on an island with his daughter Miranda for twelve years. 
              The play explores themes of magic, power, betrayal, and forgiveness.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-base font-medium">
              Who are the Characters in The Tempest?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              The main characters in The Tempest are Prospero, Miranda, Ferdinand, Caliban, Ariel, and Trinculo.
              Prospero is the protagonist and a powerful magician. Miranda is his daughter, who has grown up on the island.
              Ferdinand is the son of the King of Naples, who falls in love with Miranda. Caliban is a native of the island and serves as a servant to Prospero. 
              Ariel is a spirit who serves Prospero and helps him carry out his magical plans. Trinculo is a jester who provides comic relief in the play.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-base font-medium">
              What Grade Level is The Tempest?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              The Tempest is typically taught in high school (grades 9-12) and is often included in English literature curricula. 
              It is a complex play that explores themes of power, magic, and forgiveness, making it suitable for older students 
              who are ready to engage with more sophisticated literary concepts.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-base font-medium">
              Can I create multi-brand design systems with this UI kit?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Yes, the UI kit is designed to be flexible and can be customized
              for multiple brands and design systems.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left text-base font-medium">
              How will this kit save me time?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              This kit provides pre-built components and consistent styling,
              reducing development and design time significantly.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 6 */}
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left text-base font-medium">
              How does this improve my collaboration with developers?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              The kit provides a shared language and consistent components that
              both designers and developers can reference.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Card */}
        <div className="bg-muted/60 flex w-full flex-col items-center gap-6 rounded-xl p-6 md:p-8">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-foreground text-2xl font-bold">
              Still have questions?
            </h2>
            <p className="text-muted-foreground text-base">
              Have questions or need assistance? Our team is here to help!
            </p>
          </div>
          <Button aria-label="Contact our support team">Contact us</Button>
        </div>
      </div>
    </section>
  );
}
