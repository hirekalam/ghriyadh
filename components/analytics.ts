"use client";

export type EventName =
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "contact_form_submit"
  | "service_cta_click"
  | "map_interaction";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: EventName, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  } catch {
    // analytics must never break the UI
  }
}
