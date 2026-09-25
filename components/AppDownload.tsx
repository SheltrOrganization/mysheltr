import { siteConfig } from "@/config/site";
import { ButtonLink } from "./Button";

export function AppDownload({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <ButtonLink href={siteConfig.links.playStore} variant="secondary">
        Google Play
      </ButtonLink>
      <ButtonLink href={siteConfig.links.appStore} variant="secondary">
        App Store <span className="text-xs font-normal text-muted">(coming soon)</span>
      </ButtonLink>
      <ButtonLink href={siteConfig.webAppUrl} variant="ghost">
        Open web app →
      </ButtonLink>
    </div>
  );
}
