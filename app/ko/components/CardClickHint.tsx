"use client";

import { useEffect, useState } from "react";

const CARD_HINT_DOTLOTTIE_SRC =
  "https://lottie.host/90731dcf-7506-4eb8-9c4c-151b5c8189f2/ZWqcbZIB4t.lottie";

type CardClickHintProps = {
  className?: string;
};

export default function CardClickHint({ className }: CardClickHintProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

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

  if (reduceMotion) {
    return (
      <span
        className={`decision-card-hint-badge ${className ?? ""}`}
        aria-hidden
      >
        탭
      </span>
    );
  }

  return (
    <span className={className} aria-hidden>
      <dotlottie-wc
        src={CARD_HINT_DOTLOTTIE_SRC}
        autoplay
        loop
        style={{ width: "100%", height: "100%" }}
      />
    </span>
  );
}
