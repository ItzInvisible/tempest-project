"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MorphingText } from "@/components/ui/morphing-text";

export function BentoGrid1() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto flex flex-col gap-12 px-6">
        
        {/* Section Title */}
        <div className="mx-auto flex max-w-xl flex-col items-center text-center gap-4">
          <MorphingText texts={["The", "Tempest", "By", "William", "Shakespeare"]} />

          <h2 className="text-3xl font-bold tracking-tight">
            A Story About Power, Betrayal, Magic, Forgiveness, and Fantasy.
          </h2>

          <h2 className="text-2xl text-muted-foreground">
            The Creator and Characters Of The Tempest
          </h2>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px]">
          
          {/* Tall Left */}
          <Card className="rounded-xl overflow-hidden lg:row-span-2">
            <CardHeader>
              <CardTitle className="font-bold">Prospero</CardTitle>
              <CardDescription>
                The protagonist and a powerful magician, who has been stranded on an island with his daughter Miranda for twelve years.
              </CardDescription>
            </CardHeader>

            <CardContent className="shakespeare-image flex-1">
              <img
                src="src/assets/prospero.jpg"
                alt="Feature"
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>

          {/* Tall MIDDLE */}
          <Card className="rounded-xl overflow-hidden lg:row-span-2">
            <CardHeader>
              <CardTitle className="font-bold">Shakespeare</CardTitle>
              <CardDescription>
                The Creator of The Tempest, a play that explores themes of magic, power, betrayal, and forgiveness.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <img
                src="src/assets/R.jpg"
                alt="Feature"
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>

          {/* Tall Right */}
          <Card className="rounded-xl overflow-hidden lg:row-span-2">
            <CardHeader>
              <CardTitle className="font-bold">Miranda</CardTitle>
              <CardDescription>
                The daughter of Prospero, who has been raised on the island and is about to be introduced to the outside world.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <img
                src="src/assets/miranda.jpg"
                alt="Feature"
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>

          {/* Tall Right */}
          <Card className="rounded-xl overflow-hidden lg:row-span-2">
            <CardHeader>
              <CardTitle>Feature title</CardTitle>
              <CardDescription>
                Describe FDF this feature solves a specific user problem.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <img
                src="https://ui.shadcn.com/placeholder.svg"
                alt="Feature"
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>

          

        </div>
      </div>
    </section>
  );
}