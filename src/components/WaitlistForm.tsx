"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { CheckCircle } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-3 text-secondary-foreground">
        <CheckCircle className="size-5 text-primary" />
        <span className="font-medium">You&apos;re on the list!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-start">
      <div className="flex flex-col gap-1 flex-1">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-11 bg-white"
          aria-label="Email address"
        />
        {status === "error" && (
          <p className="text-sm text-destructive">{errorMessage}</p>
        )}
      </div>
      <Button
        type="submit"
        disabled={status === "loading"}
        size="lg"
        className="h-11 bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
      >
        {status === "loading" ? "Joining..." : "Join the Waitlist"}
      </Button>
    </form>
  );
}
