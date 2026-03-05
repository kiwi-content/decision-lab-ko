"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import clickHintAnimation from "@/public/lottie/card-click-hint.json";

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
    <Lottie
      animationData={clickHintAnimation}
      autoplay
      loop
      aria-hidden
      className={className}
      rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
    />
  );
}
