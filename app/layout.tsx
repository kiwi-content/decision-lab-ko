import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const naverSiteVerification = process.env.NAVER_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "고민스탑 | 결정 느림보를 위한 속시원한 결정 대행 서비스",
  description: "결정 느림보들을 위해, 고민 길어지기 전에 대신 정리하고 방향을 잡아드립니다.",
  verification: naverSiteVerification
    ? {
        other: {
          "naver-site-verification": naverSiteVerification,
        },
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="ko">
      <body className="antialiased min-h-screen flex flex-col">
        <div className="flex-1">{children}</div>
        <footer className="px-4 pb-6 pt-2 text-center text-xs text-[#6a89c4]/90 sm:px-10">
          Copyright © {currentYear} 고민스탑. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
