import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { cities } from "@/lib/content";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/for-tenants",
  "/for-landlords",
  "/pricing",
  "/trust-safety",
  "/faq",
  "/about",
  "/contact",
  "/legal/privacy-policy",
  "/legal/terms-of-service",
  "/legal/refund-cancellation",
  "/legal/shipping-delivery",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const cityRoutes = cities
    .filter((city) => city.live)
    .map((city) => ({
      url: `${siteConfig.url}/rent/${city.slug}`,
      lastModified: new Date(),
    }));

  return [...base, ...cityRoutes];
}
