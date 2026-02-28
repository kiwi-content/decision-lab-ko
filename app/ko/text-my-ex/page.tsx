import type { Metadata } from "next";
import Tool from "./Tool";

export const metadata: Metadata = {
  title: "전 애인에게 연락해도 될까? | 연애 의사결정",
  description: "연락 전 감정 상태, 관계 맥락, 타이밍 리스크를 점검해보세요.",
  alternates: {
    canonical: "/text-my-ex",
    languages: {
      "ko-KR": "/text-my-ex",
    },
  },
};

export default function KoreanTextMyExPage() {
  return <Tool />;
}
