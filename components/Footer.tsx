import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { siteConfig } from "@/config/site";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/for-tenants", label: "For Tenants" },
      { href: "/for-landlords", label: "For Landlords" },
      { href: "/pricing", label: "Pricing" },
      { href: "/trust-safety", label: "Trust & Safety" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/privacy-policy", label: "Privacy Policy" },
      { href: "/legal/terms-of-service", label: "Terms of Service" },
      { href: "/legal/refund-cancellation", label: "Refund & Cancellation" },
      { href: "/legal/shipping-delivery", label: "Shipping / Delivery" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-body">
              {siteConfig.tagline} Sheltr is a KYC-verified rental marketplace connecting
              tenants and landlords directly — no brokerage.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-heading">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-body hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>
            Support:{" "}
            <a href={`mailto:${siteConfig.contact.supportEmail}`} className="hover:text-primary">
              {siteConfig.contact.supportEmail}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
