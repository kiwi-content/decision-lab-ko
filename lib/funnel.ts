type FunnelStep = "card_click" | "input_complete" | "result_reached";

type FunnelPayload = {
  step: FunnelStep;
  tool: string;
  source: string;
  sessionId: string;
  path: string;
  ts: string;
};

const SESSION_KEY = "gominstop_funnel_session_id";

function getFunnelSessionId(): string {
  if (typeof window === "undefined") {
    return "server";
  }

  const existing = window.sessionStorage.getItem(SESSION_KEY);
  if (existing) {
    return existing;
  }

  const nextId = `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
  window.sessionStorage.setItem(SESSION_KEY, nextId);
  return nextId;
}

export function trackFunnelEvent(step: FunnelStep, tool: string, source: string): void {
  if (typeof window === "undefined") {
    return;
  }

  const payload: FunnelPayload = {
    step,
    tool,
    source,
    sessionId: getFunnelSessionId(),
    path: window.location.pathname,
    ts: new Date().toISOString(),
  };

  const windowWithAnalytics = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  };

  if (Array.isArray(windowWithAnalytics.dataLayer)) {
    windowWithAnalytics.dataLayer.push({
      event: "gominstop_funnel",
      ...payload,
    });
  }

  if (typeof windowWithAnalytics.gtag === "function") {
    windowWithAnalytics.gtag("event", "gominstop_funnel", payload);
  }

  const body = JSON.stringify(payload);
  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon("/api/funnel", blob);
    return;
  }

  void fetch("/api/funnel", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => undefined);
}

