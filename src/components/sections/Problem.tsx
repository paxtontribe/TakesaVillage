import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { DollarSign, Building2, AlertTriangle, SearchX } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    title: "$42 billion",
    description: "US substance abuse treatment industry with historically low transparency",
  },
  {
    icon: Building2,
    title: "~17,000 facilities",
    description: "With no verified review system for patients or families to rely on",
  },
  {
    icon: AlertTriangle,
    title: "Predatory practices",
    description:
      "FTC documented predatory patient brokering practices across the industry",
  },
  {
    icon: SearchX,
    title: "No real data",
    description:
      "SAMHSA's locator lacks reviews, cost data, and outcome tracking",
  },
];

export function Problem() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The System Is Broken
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          Families in crisis deserve trustworthy information. Right now, the treatment
          industry makes that nearly impossible.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {stats.map((stat) => (
            <Card key={stat.title} className="border-border/50 bg-card">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="size-5 text-primary" />
                </div>
                <CardTitle className="text-xl">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
