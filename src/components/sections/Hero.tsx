import { WaitlistForm } from "@/src/components/WaitlistForm";
import { Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background px-6 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          You Deserve Better Information About Treatment
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
          Takes a Village is a nonprofit platform making substance abuse treatment
          radically transparent. No pay-to-rank. No hidden agendas.
        </p>
        <div className="mx-auto mt-10 max-w-md">
          <WaitlistForm />
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Shield className="size-4 text-primary" />
          <span>Nonprofit — no facility pays to rank</span>
        </div>
      </div>
    </section>
  );
}
