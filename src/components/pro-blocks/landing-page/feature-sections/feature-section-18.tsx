"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleCheckBig } from "lucide-react";
import type { ReactNode } from "react";

// Define the type for a feature item
interface FeatureItem {
  title: string;
  description: string;
}

// Define the type for a tab
interface TabData {
  id: string;
  label: string;
  icon: ReactNode;
  features: FeatureItem[];
}

// Define the component props
interface FeatureTabsSectionProps {
  defaultTab?: string;
  tabs?: TabData[];
  className?: string;
}

const defaultTabs: TabData[] = [
  {
    id: "act1",
    label: "Act I",
    icon: <span className="text-lg font-bold w-6 text-center">I</span>,
    features: [
      {
        title: "The Shipwreck",
        description:
          "A violent storm at sea tosses a ship carrying Alonso, King of Naples, and his court. The passengers panic as the vessel appears doomed, setting the stage for all that follows.",
      },
      {
        title: "Prospero's Island",
        description:
          "Miranda watches the storm in distress. Her father Prospero reveals he caused it using magic, and assures her no one was harmed. He then discloses their true identity and history to her for the first time.",
      },
      {
        title: "Prospero's Backstory",
        description:
          "Prospero explains he was the rightful Duke of Milan, passed by his treacherous brother Antonio with the help of Alonso. He and the infant Miranda were cast adrift at sea, eventually landing on this enchanted island.",
      },
      {
        title: "Ariel and Caliban Introduced",
        description:
          "Ariel, the air spirit Prospero controls, reports on the shipwreck. Caliban, the island's monstrous native inhabitant, is introduced as Prospero's reluctant servant, cursing his master bitterly.",
      },
    ],
  },
  {
    id: "act2",
    label: "Act II",
    icon: <span className="text-lg font-bold w-6 text-center">II</span>,
    features: [
      {
        title: "The Survivors on the Island",
        description:
          "Alonso and his courtiers wander the island, grieving the presumed loss of his son Ferdinand. Gonzalo attempts to comfort the king, while Antonio and Sebastian mock his philosophical optimism.",
      },
      {
        title: "The Conspiracy Against Alonso",
        description:
          "Antonio tempts Sebastian — Alonso's brother — to kill the sleeping king and seize the throne of Naples. They draw their swords, but Ariel intervenes by waking Gonzalo, foiling the murder plot.",
      },
      {
        title: "Caliban Meets Trinculo and Stephano",
        description:
          "Caliban encounters Trinculo, the king's jester, and Stephano, a drunken butler, who has salvaged wine from the wreck. Caliban, amazed and intoxicated, mistakes them for gods and pledges his loyalty.",
      },
      {
        title: "A New Rebellion Takes Shape",
        description:
          "Caliban convinces Stephano to kill Prospero and take control of the island, promising him Miranda as a reward. A parallel plot to Prospero's own usurpation begins to brew among these unlikely conspirators.",
      },
    ],
  },
  {
    id: "act3",
    label: "Act III",
    icon: <span className="text-lg font-bold w-6 text-center">III</span>,
    features: [
      {
        title: "Ferdinand's Labor and Love",
        description:
          "Ferdinand, set to work carrying logs by Prospero as a test, endures the labor willingly for Miranda's sake. The two confess their love and pledge themselves to one another, watched secretly by the approving Prospero.",
      },
      {
        title: "Caliban's Plot Advances",
        description:
          "Caliban outlines his plan to Stephano in detail — steal Prospero's books of magic, kill him while he sleeps, and claim the island. Trinculo and Stephano grow more enthusiastic with each swig of wine.",
      },
      {
        title: "Ariel Disrupts the Conspirators",
        description:
          "Ariel, made invisible, mimics voices and sows discord among the three plotters, causing Stephano to beat Trinculo. The conspiracy continues, but cracks are already forming.",
      },
      {
        title: "The Banquet and the Harpy",
        description:
          "A magical banquet appears before Alonso and his court. Just as they reach for the food, Ariel transforms into a harpy and makes it vanish, denouncing Alonso, Antonio, and Sebastian for their crimes against Prospero.",
      },
    ],
  },
  {
    id: "act4",
    label: "Act IV",
    icon: <span className="text-lg font-bold w-6 text-center">IV</span>,
    features: [
      {
        title: "Prospero Blesses the Lovers",
        description:
          "Prospero officially gives Miranda to Ferdinand, warning him sternly to respect her virtue before marriage. He summons spirits to perform a wedding masque celebrating the union with goddesses Iris, Ceres, and Juno.",
      },
      {
        title: "The Masque and Its Sudden End",
        description:
          "The lavish, masque is abruptly stopped when Prospero suddenly remembers Caliban's assassination plot. Shaken and disturbed, he delivers the famous speech reflecting on the illusory nature of all things.",
      },
      {
        title: "Prospero Traps the Conspirators",
        description:
          "Prospero and Ariel lay a trap of glittering garments for Caliban, Stephano, and Trinculo. Despite Caliban's protests, his companions are distracted by the fine clothes and begin stealing them.",
      },
      {
        title: "Spirits Drive Off the Plotters",
        description:
          "Prospero sets spirit-hounds on the three conspirators, driving them away in pain and confusion. Caliban's rebellion is shattered, and Prospero declares his plans are nearly complete.",
      },
    ],
  },
  {
    id: "act5",
    label: "Act V",
    icon: <span className="text-lg font-bold w-6 text-center">V</span>,
    features: [
      {
        title: "Prospero's Renunciation of Magic",
        description:
          "As the final hour approaches, Prospero reflects on his magical powers and resolves to give them up entirely. He vows to break his staff and drown his books, embracing his return to the human world.",
      },
      {
        title: "Forgiveness Over Revenge",
        description:
          "Ariel reveals that the imprisoned lords are suffering, and this stirs Prospero's compassion. Choosing virtue over vengeance, he releases Alonso, Antonio, and Sebastian, forgiving those who wronged him.",
      },
      {
        title: "Reconciliation and Revelations",
        description:
          "Alonso is reunited with Ferdinand, who is discovered playing chess with Miranda. Miranda, seeing so many new people, delivers her famous wonder-filled speech. Prospero reclaims his dukedom and promises to reveal his full story.",
      },
      {
        title: "Ariel's Freedom and the Epilogue",
        description:
          "Prospero grants Ariel his long-awaited freedom. The play closes with Prospero's epilogue, in which he steps outside the story to ask the audience to release him with their applause — a meditation on art, power, and liberation.",
      },
    ],
  },
];

export function FeatureSection18({
  defaultTab = "act1",
  tabs = defaultTabs,
}: FeatureTabsSectionProps) {
  return (
    <section className="bg-background section-padding-y">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-10">
          <h1 className="text-foreground heading-lg mb-2">The Tempest</h1>
          <p className="text-muted-foreground text-base/7">
            William Shakespeare &mdash; A synopsis by act
          </p>
        </div>

        <Tabs
          defaultValue={defaultTab || tabs[0]?.id}
          className="relative flex w-full flex-col items-start gap-8 lg:flex-row lg:gap-16"
        >
          <TabsList className="flex h-auto w-full flex-col lg:max-w-sm">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex w-full items-center justify-start gap-3 p-2 text-base md:p-3"
              >
                {tab.icon}
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="md:bg-muted/50 space-y-8 p-0 md:rounded-2xl md:p-12">
                <h2 className="text-foreground heading-md">{tab.label}</h2>

                <div className="space-y-8">
                  {tab.features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <CircleCheckBig className="text-primary size-6 shrink-0" />
                      <div className="space-y-3">
                        <h3 className="text-foreground heading-sm">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-base/7 text-pretty">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}