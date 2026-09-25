"use client";

import { FormEvent, useState } from "react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Label, Input, Textarea } from "@/components/FormField";
import { Button } from "@/components/Button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  // TODO: Connect form submission to production support endpoint.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-10 sm:pt-14">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        <div className="mt-6 max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Questions about a listing, verification, or your Sheltr Pass? Send us a message, or
            write to us directly.
          </p>
        </div>
      </Section>

      {/* Form + details */}
      <Section muted>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Send a message" title="We'll get back to you" />
            <div className="mt-8 max-w-xl">
              {submitted ? (
                <div className="rounded-card border border-verified-tint bg-verified-tint p-6 text-verified">
                  <p className="font-medium">Thanks — we&apos;ll get back to you.</p>
                  <p className="mt-2 text-sm leading-relaxed">
                    This form isn&apos;t connected to a live inbox yet; email us directly at{" "}
                    {siteConfig.contact.supportEmail} in the meantime.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="contact-name">Name</Label>
                    <Input id="contact-name" name="name" type="text" autoComplete="name" required />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" name="email" type="email" autoComplete="email" required />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Phone (optional)</Label>
                    <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea id="contact-message" name="message" required />
                  </div>
                  <Button type="submit" size="lg">
                    Send message
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Direct contact details */}
          <div>
            <SectionHeading eyebrow="Reach us directly" title="Contact details" />
            <div className="mt-8 space-y-6 text-sm">
              <div>
                <p className="font-semibold text-heading">Support email</p>
                <p className="mt-1 text-body">{siteConfig.contact.supportEmail}</p>
              </div>
              <div>
                <p className="font-semibold text-heading">Business address</p>
                <p className="mt-1 text-body">{siteConfig.contact.businessAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
