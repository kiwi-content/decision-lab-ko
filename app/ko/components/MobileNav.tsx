"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full border border-[#80caff] bg-white px-3 py-2 text-xs font-semibold text-brand-blue"
        aria-label="메뉴 열기"
        aria-expanded={open}
      >
        {open ? "닫기" : "메뉴"}
      </button>

      {open && (
        <nav className="absolute right-4 top-full z-20 mt-2 flex flex-col gap-1 rounded-2xl border border-[#80caff]/50 bg-white p-3 shadow-lg">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="rounded-full px-4 py-2 text-sm font-semibold text-brand-nav hover:bg-hover-bg"
          >
            홈
          </Link>
          <Link
            href="#simulators"
            onClick={() => setOpen(false)}
            className="rounded-full px-4 py-2 text-sm font-semibold text-brand-nav hover:bg-hover-bg"
          >
            시뮬레이터
          </Link>
          <Link
            href="/methodology"
            onClick={() => setOpen(false)}
            className="rounded-full px-4 py-2 text-sm font-semibold text-brand-nav hover:bg-hover-bg"
          >
            방법론
          </Link>
        </nav>
      )}
    </div>
  );
}
