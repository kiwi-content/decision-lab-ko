import type { Metadata } from "next";
import "./ko.css";

export const metadata: Metadata = {
  title: {
    default: "고민스탑 | 결정 느림보를 위한 속시원한 결정 대행 서비스",
    template: "%s | 고민스탑",
  },
  description: "중요한 결정을 내리기 전에 상황을 점검해보는 생활 의사결정 도구.",
  openGraph: {
    locale: "ko_KR",
    type: "website",
    siteName: "고민스탑",
  },
};

export default function KoreanLayout({ children }: { children: React.ReactNode }) {
  return <div className="ko-theme">{children}</div>;
}
