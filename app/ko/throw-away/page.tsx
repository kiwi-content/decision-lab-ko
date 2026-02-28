import type { Metadata } from "next";
import Tool from "./Tool";

export const metadata: Metadata = {
  title: "이거 버려도 될까? | 정리 의사결정",
  description: "사용 빈도, 보관 비용, 정서적 가치를 기준으로 버릴지 판단해보세요.",
  alternates: {
    canonical: "/ko/throw-away",
    languages: {
      "ko-KR": "/ko/throw-away",
    },
  },
};

export default function KoreanThrowAwayPage() {
  return <Tool />;
}
