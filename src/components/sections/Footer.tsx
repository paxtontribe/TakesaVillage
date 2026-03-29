import { WaitlistForm } from "@/src/components/WaitlistForm";
import { ExternalLink } from "lucide-react";

const socialLinks = [
  { name: "Instagram", href: "#", label: "Follow us on Instagram" },
  { name: "TikTok", href: "#", label: "Follow us on TikTok" },
  { name: "X", href: "#", label: "Follow us on X" },
  { name: "LinkedIn", href: "#", label: "Follow us on LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="mb-4 text-center text-sm font-medium text-muted-foreground">
            Stay updated on our progress
          </p>
          <div className="mx-auto max-w-md">
            <WaitlistForm />
          </div>
        </div>

        <div className="mb-8 rounded-xl bg-primary/5 p-6 text-center">
          <p className="text-lg font-semibold text-foreground">
            If you or someone you know needs help now:
          </p>
          <a
            href="tel:1-800-662-4357"
            className="mt-2 inline-block text-2xl font-bold text-primary hover:underline"
          >
            1-800-662-4357
          </a>
          <p className="mt-1 text-sm text-muted-foreground">
            SAMHSA National Helpline — free, confidential, 24/7
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.label}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/paxtontribe/TakesaVillage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View our code on GitHub"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ExternalLink className="size-4" />
            GitHub
          </a>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Takes a Village is a nonprofit project.
        </p>
      </div>
    </footer>
  );
}
