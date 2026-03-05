"use client";

import { useRef } from "react";
import { trackFunnelEvent } from "@/lib/funnel";

const INPUT_COMPLETE_THRESHOLD = 18;

export function useToolFunnel(tool: string) {
  const hasTrackedInputRef = useRef(false);
  const hasTrackedResultRef = useRef(false);

  const trackInputCompletion = (value: string) => {
    if (hasTrackedInputRef.current) {
      return;
    }

    if (value.trim().length < INPUT_COMPLETE_THRESHOLD) {
      return;
    }

    hasTrackedInputRef.current = true;
    trackFunnelEvent("input_complete", tool, "tool_input");
  };

  const trackResultReached = (resultText: string) => {
    if (hasTrackedResultRef.current) {
      return;
    }

    if (!resultText.trim()) {
      return;
    }

    hasTrackedResultRef.current = true;
    trackFunnelEvent("result_reached", tool, "tool_result");
  };

  const resetFunnelProgress = () => {
    hasTrackedInputRef.current = false;
    hasTrackedResultRef.current = false;
  };

  return {
    trackInputCompletion,
    trackResultReached,
    resetFunnelProgress,
  };
}

