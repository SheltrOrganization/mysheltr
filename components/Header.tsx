"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";
import { Container } from "./Container";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: "/for-tenants", label: "For Tenants" },
  { href: "/for-landlords", label: "For Landlords" },
  { href: "/pricing", label: "Pricing" },
  { href: "/trust-safety", label: "Trust & Safety" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href ? "text-primary" : "text-heading"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={siteConfig.webAppUrl} variant="secondary" size="md">
            List my property
          </ButtonLink>
          <ButtonLink href={siteConfig.webAppUrl} variant="primary" size="md">
            Find a home
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-heading lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4l12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-surface lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="min-h-[44px] rounded-lg px-2 py-3 text-base font-medium text-heading hover:bg-surface-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="min-h-[44px] rounded-lg px-2 py-3 text-base font-medium text-heading hover:bg-surface-muted"
            >
              Contact
            </Link>
            <div className="mt-3 flex flex-col gap-2">
              <ButtonLink href={siteConfig.webAppUrl} variant="secondary" className="w-full">
                List my property
              </ButtonLink>
              <ButtonLink href={siteConfig.webAppUrl} variant="primary" className="w-full">
                Find a home
              </ButtonLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
