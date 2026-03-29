import { WaitlistForm } from "@/src/components/WaitlistForm";
import { ExternalLink } from "lucide-react";

export function ForFunders() {
  return (
    <section className="bg-navy px-6 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          For Funders and Partners
        </h2>

        <div className="mt-10 space-y-6 text-lg leading-8 text-gray-300">
          <p>
            The substance abuse treatment industry is a{" "}
            <strong className="text-white">$42 billion market</strong> with over{" "}
            <strong className="text-white">17,000 facilities</strong> and no verified
            review system. The FTC has documented predatory patient brokering practices,
            and families in crisis have almost no reliable way to evaluate care quality.
          </p>

          <p>
            Takes a Village is building a{" "}
            <strong className="text-white">
              decentralized transparency platform
            </strong>{" "}
            powered by a verified knowledge graph, authenticated-anonymous identity, and
            AI-driven discovery. Facility data lives on infrastructure that no single
            party controls, and reviews come from people whose attendance has been
            verified.
          </p>

          <p>
            We&apos;ve identified and mapped three critical legal compliance gates —{" "}
            <strong className="text-white">Anti-Kickback Statute</strong>,{" "}
            <strong className="text-white">42 CFR Part 2</strong> healthcare privacy, and{" "}
            <strong className="text-white">FinCEN</strong> money transmission — before
            writing a line of platform code. We believe legal diligence is a feature, not
            an afterthought.
          </p>

          <p>
            We&apos;re seeking{" "}
            <strong className="text-white">
              grant funding and early partners
            </strong>{" "}
            to build the technical platform. Every dollar goes directly to engineering the
            transparency layer that this industry needs.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="https://github.com/paxtontribe/TakesaVillage/tree/main/.planning"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            View our full technical architecture, legal analysis, and roadmap
            <ExternalLink className="size-4" />
          </a>
        </div>

        <div className="mt-10">
          <p className="mb-4 text-sm font-medium text-gray-400">
            Get in touch — join our waitlist or email us directly
          </p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
