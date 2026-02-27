import type { Metadata } from "next";
import Tool from "./Tool";

const BASE_URL = "https://decisionlab.vercel.app";

export const metadata: Metadata = {
  title: "이 관계, 끝내는 게 맞을까? | 연애 의사결정",
  description: "반복되는 갈등, 관계 만족도, 앞으로의 방향성을 기준으로 점검해보세요.",
  alternates: {
    canonical: `${BASE_URL}/ko/break-up`,
    languages: {
      "ko-KR": `${BASE_URL}/ko/break-up`,
      "en-US": `${BASE_URL}/break-up`,
    },
  },
};

export default function KoreanBreakUpPage() {
  return <Tool />;
}
