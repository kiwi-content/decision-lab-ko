import type { Metadata } from "next";
import Tool from "./Tool";

const BASE_URL = "https://decisionlab.vercel.app";

export const metadata: Metadata = {
  title: "일상 결정 | 오늘의 고민 선택 도우미",
  description: "사소하지만 은근히 어려운 일상 고민을 빠르게 정리해 선택을 도와드립니다.",
  alternates: {
    canonical: `${BASE_URL}/ko/small-choices`,
    languages: {
      "ko-KR": `${BASE_URL}/ko/small-choices`,
      "en-US": `${BASE_URL}/`,
    },
  },
};

export default function SmallChoicesPage() {
  return <Tool />;
}
