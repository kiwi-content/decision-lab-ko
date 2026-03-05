"use client";

import { useEffect, useState } from "react";

const CARD_HINT_DOTLOTTIE_SRC =
  "https://lottie.host/90731dcf-7506-4eb8-9c4c-151b5c8189f2/ZWqcbZIB4t.lottie";
const RIPPLE_DURATION_MS = 3000;

type CardClickHintProps = {
  className?: string;
};

export default function CardClickHint({ className }: CardClickHintProps) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [rippleExpired, setRippleExpired] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(media.matches);

    onChange();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }

    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setRippleExpired(true);
    }, RIPPLE_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const showRipple = !reduceMotion && !rippleExpired;

  return (
    <span className={className} data-reduce-motion={reduceMotion} aria-hidden>
      <span className="decision-card-hint-label">눌러서 시작</span>
      <span className="decision-card-hint-icon">
        <span className="decision-card-hint-arrow">→</span>
        {showRipple ? (
          <span className="decision-card-hint-ripple">
            <dotlottie-wc
              src={CARD_HINT_DOTLOTTIE_SRC}
              autoplay
              loop
              style={{ width: "100%", height: "100%" }}
            />
          </span>
        ) : null}
      </span>
    </span>
  );
}
