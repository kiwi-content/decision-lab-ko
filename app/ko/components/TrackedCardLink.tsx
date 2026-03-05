"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackFunnelEvent } from "@/lib/funnel";

type TrackedCardLinkProps = {
  href: string;
  tool: string;
  className: string;
  children: ReactNode;
};

export default function TrackedCardLink({ href, tool, className, children }: TrackedCardLinkProps) {
  const handleClick = () => {
    trackFunnelEvent("card_click", tool, "home_card");
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

