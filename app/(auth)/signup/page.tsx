"use client";

import Image from "next/image";
import { SignupForm } from "@/components/signup-form";
import { ModeToggle } from "@/components/ui/theme-btn";

export default function SignupPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a
          href="/"
          className="flex items-center gap-2 self-center font-medium"
          aria-label="Home"
        >
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <Image
              src="/logo.jpg"
              alt="Heart of the Forest"
              width={24}
              height={24}
              className="rounded-md"
            />
          </div>
          Heart of the Forest Dramatic Society
        </a>
        <SignupForm />
      </div>
    </div>
  );
}
