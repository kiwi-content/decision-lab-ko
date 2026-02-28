import type { Metadata } from "next";
import Tool from "./Tool";

export const metadata: Metadata = {
  title: "지금 이사하는 게 맞을까? | 생활 의사결정",
  description: "주거비, 통근, 커리어 기회, 생활 만족도 변화를 기준으로 검토해보세요.",
  alternates: {
    canonical: "/move",
    languages: {
      "ko-KR": "/move",
    },
  },
};

export default function KoreanMovePage() {
  return <Tool />;
}
