"use client";

import { useEffect, useRef, useState } from "react";

const HERO_DOTLOTTIE_SRC =
  "https://lottie.host/ea94ebf0-7542-45a5-acd8-88dd141496c3/6Q3wBfB33c.lottie";

type HeroLottieProps = {
  className?: string;
};

export default function HeroLottie({ className }: HeroLottieProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [canAnimate, setCanAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRenderAnimation, setShouldRenderAnimation] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setCanAnimate(!media.matches);

    onChange();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }

    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  useEffect(() => {
    if (!canAnimate || !hostRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "180px 0px" },
    );

    observer.observe(hostRef.current);
    return () => observer.disconnect();
  }, [canAnimate]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShouldRenderAnimation(true);
    }, 220);

    return () => window.clearTimeout(timer);
  }, [isVisible]);

  return (
    <div ref={hostRef} className={className} aria-hidden>
      {canAnimate && shouldRenderAnimation ? (
        <dotlottie-wc
          src={HERO_DOTLOTTIE_SRC}
          stateMachineId="StateMachine1"
          autoplay
          loop
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <span className="hero-lottie-placeholder" />
      )}
    </div>
  );
}

