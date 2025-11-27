"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ui/theme-btn";
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/tickets", label: "Tickets" },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="flex flex-col md:flex-row justify-between gap-4 p-4 mt-2 mb-2 max-w-7xl mx-auto rounded-lg bg-card-primary dark:bg-card-primary shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg md:text-xl lg:text-2xl font-bold"
        >
          <Image
            src="/logo.jpg"
            alt="Heart of the Forest"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="hidden sm:block">
            Heart of the Forest Dramatic Society
          </span>
        </Link>
        <div className="flex items-center gap-3 md:hidden">
          <ModeToggle />
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="rounded-md border border-border px-3 py-2 text-sm font-semibold hover:bg-primary/10 transition"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-end gap-4">
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary font-medium text-base transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Separator orientation="vertical" className="h-6 dark:bg-white/30" />
        <div className="flex items-center gap-3">
          <Link href="/login" className="hover:text-primary">
            <Button variant="default" className="hover:bg-primary/90">
              Log in
            </Button>
          </Link>
          <Link href="/signup" className="hover:text-primary">
            <Button variant="outline" className="hover:bg-primary/90">
              Sign up
            </Button>
          </Link>
        </div>
        <ModeToggle />
      </div>

      {isMenuOpen && (
        <div className="flex flex-col gap-4 border-t border-border pt-4 md:hidden">
          <div className="flex flex-col gap-2 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Separator className="dark:bg-white/30" />
          <div className="flex flex-col gap-3">
            <Link href="/login" className="hover:text-primary">
              <Button
                variant="default"
                className="w-full hover:bg-primary/90"
                onClick={closeMenu}
              >
                Log in
              </Button>
            </Link>
            <Link href="/signup" className="hover:text-primary">
              <Button
                variant="outline"
                className="w-full hover:bg-primary/90"
                onClick={closeMenu}
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
