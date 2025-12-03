"use client";

import { useState } from "react";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavItems,
} from "./ui/resizable-navbar";
import { ModeToggle } from "./ui/theme-btn";

export function NavbarMain() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Tickets", link: "/tickets" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" href="/login">
              Login
            </NavbarButton>
            <NavbarButton variant="secondary" href="/signup">
              Sign Up
            </NavbarButton>
            <NavbarButton className="p-0">
              <ModeToggle />
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                href={item.link}
                key={`mobile-link-${
                  // biome-ignore lint/suspicious/noArrayIndexKey: intended for static nav items
                  idx
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                variant="secondary"
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                variant="primary"
                href="/signup"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
