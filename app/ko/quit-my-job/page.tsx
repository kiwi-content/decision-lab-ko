import type { Metadata } from "next";
import Tool from "./Tool";

export const metadata: Metadata = {
  title: "퇴사해도 될까? | 커리어 의사결정",
  description: "생활비 여력, 번아웃 수준, 커리어 방향을 기준으로 퇴사를 점검하세요.",
  alternates: {
    canonical: "/ko/quit-my-job",
    languages: {
      "ko-KR": "/ko/quit-my-job",
    },
  },
};

export default function KoreanQuitMyJobPage() {
  return <Tool />;
}
