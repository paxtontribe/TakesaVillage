import { Badge } from "@/src/components/ui/badge";
import { Search, CheckCircle, Handshake } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Search",
    description:
      "Find facilities by location, insurance, treatment type, and more. Get results tailored to your situation.",
  },
  {
    number: 2,
    icon: CheckCircle,
    title: "Verify",
    description:
      "See transparency scores, verified reviews, and real outcomes. Know what you're getting before you commit.",
  },
  {
    number: 3,
    icon: Handshake,
    title: "Connect",
    description:
      "Find funding options and apply directly through the platform. We help remove barriers between you and treatment.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          Getting the right information should be simple. We make it three steps.
        </p>
        <div className="mt-14 grid gap-12 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <Badge
                variant="outline"
                className="mb-4 size-14 items-center justify-center rounded-full border-2 border-primary text-lg font-bold text-primary"
              >
                {step.number}
              </Badge>
              <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-accent/20">
                <step.icon className="size-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
