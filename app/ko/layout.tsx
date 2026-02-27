import type { Metadata } from "next";
import "./ko.css";

export const metadata: Metadata = {
  title: {
    default: "고민해우소 | 생활 의사결정 도구",
    template: "%s | 고민해우소",
  },
  description: "중요한 결정을 내리기 전에 상황을 점검해보는 생활 의사결정 도구.",
  openGraph: {
    locale: "ko_KR",
    type: "website",
    siteName: "고민해우소",
  },
};

export default function KoreanLayout({ children }: { children: React.ReactNode }) {
  return <div className="ko-theme">{children}</div>;
}
