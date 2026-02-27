"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MorphingText } from "@/components/ui/morphing-text";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export function BentoGrid1() {
  return (
    <section className="relative bg-muted py-20 overflow-hidden">

      {/* Interactive Grid Background — fixed to cover the entire page */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ width: "100vw", height: "100vh" }}
      >
        <InteractiveGridPattern
          className="w-full h-full"
          style={{ width: "100%", height: "100%" }}
          width={100}
          height={100}
        />
      </div>

      {/* Content layered above the grid */}
      <div className="relative z-10 container mx-auto flex flex-col gap-12 px-6">

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

          {/* Prospero */}
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
                alt="Prospero"
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>

          {/* Shakespeare */}
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
                alt="Shakespeare"
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>

          {/* Miranda */}
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
                alt="Miranda"
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>

          {/* Caliban */}
          <Card className="rounded-xl overflow-hidden lg:row-span-2">
            <CardHeader>
              <CardTitle className="font-bold">Caliban</CardTitle>
              <CardDescription>
                The son of the witch Sycorax and the only native inhabitant of the island, who resents Prospero's control over him.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <img
                src="src/assets/caliban.jpg"
                alt="Caliban"
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>

          {/* Ferdinand */}
          <Card className="rounded-xl overflow-hidden lg:row-span-2">
            <CardHeader>
              <CardTitle className="font-bold">Ferdinand</CardTitle>
              <CardDescription>
                The son of the King of Naples, who falls in love with Miranda and becomes a key player in the play's resolution.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <img
                src="src/assets/ferdinand.jpg"
                alt="Ferdinand"
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>

          {/* Ariel */}
          <Card className="rounded-xl overflow-hidden lg:row-span-2">
            <CardHeader>
              <CardTitle className="font-bold">Ariel</CardTitle>
              <CardDescription>
                A spirit who serves Prospero and helps him carry out his plans, often depicted as a mischievous and playful character.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <img
                src="src/assets/ariel.jpg"
                alt="Ariel"
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}