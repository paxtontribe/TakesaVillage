import { ShieldCheck, Eye, Network, BrainCircuit } from "lucide-react";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Verified Reviews",
    description:
      "Authenticated-anonymous reviews from real patients. Identity is verified for accountability, but your privacy is always protected.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "Every facility gets a transparency score based on verification, outcomes, and community feedback. No one can pay to game it.",
  },
  {
    icon: Network,
    title: "Decentralized Data",
    description:
      "Facility data lives on a knowledge graph that no single party controls. The information you see can't be altered or hidden.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Discovery",
    description:
      "Describe your situation in plain language and get matched to treatment options that fit your needs, insurance, and location.",
  },
];

export function Solution() {
  return (
    <section className="bg-secondary/50 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What Takes a Village Does Differently
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          We believe transparency saves lives. Here&apos;s how we&apos;re building a
          system you can actually trust.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
