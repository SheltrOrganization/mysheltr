/**
 * Analytics abstraction. Swap the implementation inside trackEvent() for
 * GA4 (gtag) or Plausible when an ID is available — nothing else in the
 * codebase should call either SDK directly.
 */

export type AnalyticsEvent =
  | { name: "cta_click"; props: { cta: string; location: string } }
  | { name: "faq_expand"; props: { question: string } }
  | { name: "app_download_click"; props: { platform: "play_store" | "app_store" | "web_app" } }
  | { name: "pricing_plan_view"; props: { plan: string } }
  | { name: "form_submit"; props: { form: string } };

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  // TODO: wire to GA4 (window.gtag) or Plausible (window.plausible) once
  // an analytics ID is configured. Left as a no-op console log so the call
  // sites are already instrumented ahead of that decision.
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event.name, event.props);
  }
}
