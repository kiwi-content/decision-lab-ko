import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://decisionlab.vercel.app";

export const metadata: Metadata = {
  title: "고민해우소 방법론",
  description: "고민해우소를 200% 활용하는 법: 입력 팁, 답변 읽는 법, 실전 사용 가이드.",
  alternates: {
    canonical: `${BASE_URL}/ko/methodology`,
    languages: {
      "ko-KR": `${BASE_URL}/ko/methodology`,
      "en-US": `${BASE_URL}/methodology`,
    },
  },
};

export default function KoreanMethodologyPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-4xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">방법론</h1>
        <p className="mb-6 text-sm text-[#6a7b9d]">최종 업데이트: 2026-02-27</p>
        <p className="mb-4 text-[#4f5e7c]">
          고민해우소는 인생을 대신 살아주는 서비스는 아니고, 머릿속에 엉킨 고민을 보기 좋게 정리해주는
          &quot;결정 보조석&quot;에 가깝습니다.
        </p>
        <p className="mb-8 text-[#4f5e7c]">
          핵심은 단순합니다. 결론 하나, 이유 몇 개, 그리고 지금 바로 할 행동 1~2개.
          고민 길어지기 전에 출구를 만들어주는 방식입니다.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">1) 입력은 솔직할수록 이득</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>사실과 추측을 나눠 적어주세요. 예: &quot;연락이 3일째 없음(사실)&quot; / &quot;날 싫어하는 듯(추측)&quot;</li>
          <li>마감 시간을 넣어주세요. 예: &quot;이번 주 안에 결정해야 함&quot;</li>
          <li>절대 포기 못 하는 조건 1~2개를 써주세요. 예: &quot;월세 상한&quot;, &quot;주말 시간&quot;</li>
          <li>지금 가장 무서운 손실을 한 줄로 쓰면 답변 정확도가 확 올라갑니다.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">2) 답변은 이 순서로 읽으면 빨라요</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>결론 먼저: 지금 실행 / 잠깐 보류 / 중단 중 무엇인지 확인</li>
          <li>이유 확인: 내 상황에도 진짜 맞는 이유인지 2~3개만 체크</li>
          <li>행동 실행: 오늘 당장 할 수 있는 행동 하나부터 바로 실행</li>
          <li>팁: 결론이 마음에 안 들어도 이유가 맞으면 하루만 시험 적용해보세요.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">3) 카테고리마다 보는 렌즈가 달라요</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>연애: 말보다 패턴을 봅니다. 반복되는 문제는 신호가 큽니다.</li>
          <li>커리어: 감정도 중요하지만, 먼저 통장과 다음 선택지를 봅니다.</li>
          <li>이사: 집값만 보지 않고 통근 피로와 생활 리듬까지 같이 봅니다.</li>
          <li>정리: 추억은 남기되, 보관 비용과 공간 스트레스도 계산합니다.</li>
          <li>일상 결정: 30분 고민할 문제면 3분 안에 결론 내는 쪽이 이득일 때가 많습니다.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">4) 이 경우엔 멈추고 전문가에게</h2>
        <p className="mb-8 text-[#4f5e7c]">
          건강, 안전, 법적 책임, 큰 금전 리스크가 걸린 문제는 고민해우소를 참고용으로만 쓰고
          반드시 관련 전문가와 최종 판단하세요.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">5) 더 똑똑하게 만들고 싶다면</h2>
        <p className="mb-8 text-[#4f5e7c]">
          &quot;틀렸어요&quot;보다 &quot;이 전제가 실제와 달랐어요&quot;라고 알려주시면 개선 속도가 훨씬 빠릅니다.
          실제 후속 결과를 바탕으로 질문 방식과 답변 표현을 계속 다듬고 있습니다.
        </p>

        <Link href="/ko" className="text-[#4f5e7c] underline decoration-[#80caff] underline-offset-2">
          홈으로 돌아가기
        </Link>
      </section>
    </main>
  );
}
