import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "고민스탑 방법론",
  description: "고민스탑을 200% 활용하는 법: 입력 팁, 답변 읽는 법, 실전 사용 가이드.",
  alternates: {
    canonical: "/methodology",
    languages: {
      "ko-KR": "/methodology",
    },
  },
};

export default function KoreanMethodologyPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-4xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">사용설명서</h1>
        <p className="mb-6 text-sm text-[#6a7b9d]">최종 업데이트: 2026-02-28</p>
        <p className="mb-4 text-lg font-semibold text-[#1d2440]">어떤 선택이 맞는지 빠르게 정리하고 싶다면 읽어보세요.</p>
        <p className="mb-8 text-[#4f5e7c]">
          고민스탑은 인생을 대신 살아주는 서비스는 아니고, 머릿속에 엉킨 고민을 보기 좋게 정리해주는
          “결정 보조석”에 가깝습니다. 당신이 좋은 결론을 내릴 수 있도록 옆에서 정보를 정리해줄 뿐.
        </p>

        <hr className="my-8 border-[#c5d4ea]" />

        <h2 className="mb-4 text-2xl font-semibold text-[#1d2440]">Step 1: 상황을 최대한 구체적으로 입력하기</h2>
        <p className="mb-4 text-[#4f5e7c]">
          좋은 입력 = 좋은 답변. 여기서 시간을 쓸수록 답변 정확도가 올라갑니다.
        </p>
        <div className="mb-8 space-y-3 rounded-lg bg-[#f8fafc] p-4">
          <p className="font-semibold text-[#1d2440]">📝 체크리스트:</p>
          <ul className="list-disc space-y-2 pl-6 text-[#4f5e7c]">
            <li><strong>사실과 추측을 분리</strong> - 예: “연락이 3일째 없음(사실)” vs “날 싫어하는 듯(추측)”</li>
            <li><strong>현재 상황에 시간 태그</strong> - 예: “이 주말 안에 결정해야 함”, “지금 당장”</li>
            <li><strong>절대 포기 못 할 조건 1~2개</strong> - 예: 이사면 “월세 50만원 이하”, 퇴사면 “3개월 생활비 필요”</li>
            <li><strong>가장 두렵거나 잃고 싶지 않은 것 한 문장</strong> - 예: “혼자 되는 것”, “경력 gap”</li>
          </ul>
        </div>

        <hr className="my-8 border-[#c5d4ea]" />

        <h2 className="mb-4 text-2xl font-semibold text-[#1d2440]">Step 2: 답변 읽는 순서</h2>
        <p className="mb-4 text-[#4f5e7c]">
          모든 답변은 4줄로 구성됩니다. 이 순서대로 읽으면 가장 효율적입니다.
        </p>
        <div className="mb-8 space-y-4">
          <div className="rounded-lg border-l-4 border-[#80caff] bg-[#f3f9ff] p-4">
            <p className="font-semibold text-[#5d92d8]">1️⃣ 결론 (첫 줄)</p>
            <p className="text-[#4f5e7c]">“지금 하세요” / “기다리세요” / “다시 생각해보세요” 중 하나.</p>
            <p className="mt-2 text-sm text-[#6a7b9d]">팁: 결론이 맘에 안 들면 오늘은 무시하고, 내일 다시 읽어보세요. 같은 결론이 나오면 신호가 큰 거예요.</p>
          </div>
          <div className="rounded-lg border-l-4 border-[#80caff] bg-[#f3f9ff] p-4">
            <p className="font-semibold text-[#5d92d8]">2️⃣ 이유 (두 번째 줄)</p>
            <p className="text-[#4f5e7c]">“왜 그런 결론이 나왔는가”를 설명. 내 상황과 진짜 맞는지 2~3초 확인만 하면 돼요.</p>
            <p className="mt-2 text-sm text-[#6a7b9d]">팁: 이유가 아니라 결론이 맘에 안 들면? 입력을 더 자세히 하고 다시 시도해보세요.</p>
          </div>
          <div className="rounded-lg border-l-4 border-[#80caff] bg-[#f3f9ff] p-4">
            <p className="font-semibold text-[#5d92d8]">3️⃣ 주의사항 (세 번째 줄)</p>
            <p className="text-[#4f5e7c]">실제로 행동할 때 놓쳤을 수 있는 것들. 예: “연락하기 전에 3일 더 기다려보기”</p>
            <p className="mt-2 text-sm text-[#6a7b9d]">팁: 주의사항이 중요할 때가 많습니다. 꼭 읽으세요.</p>
          </div>
          <div className="rounded-lg border-l-4 border-[#80caff] bg-[#f3f9ff] p-4">
            <p className="font-semibold text-[#5d92d8]">4️⃣ 다음 스텝 (네 번째 줄)</p>
            <p className="text-[#4f5e7c]">결론을 내린 후 “지금 당장” 할 한 가지 행동.</p>
            <p className="mt-2 text-sm text-[#6a7b9d]">팁: 여기부터 시작하세요. “내일 하겠지”는 절대 안 하게 됩니다.</p>
          </div>
        </div>

        <hr className="my-8 border-[#c5d4ea]" />

        <h2 className="mb-4 text-2xl font-semibold text-[#1d2440]">Step 3: 각 주제별 “보는 방식” 이해하기</h2>
        <p className="mb-4 text-[#4f5e7c]">
          같은 “결정”이어도 관점이 달라요. 그래서 답변의 무게중심도 달라집니다.
        </p>
        <div className="mb-8 space-y-3">
          <div className="rounded-lg bg-[#fff5f3] p-4">
            <p className="font-semibold text-[#d9563f]">💔 헤어짐 / 전 애인 연락</p>
            <p className="text-[#4f5e7c]">“말”보다 “패턴과 반복되는 신호”를 봅니다. 한 번의 나쁜 일은 우연이고, 계속 반복되면 신호입니다.</p>
          </div>
          <div className="rounded-lg bg-[#f9f5f0] p-4">
            <p className="font-semibold text-[#c07c3f]">💼 퇴사 / 이직</p>
            <p className="text-[#4f5e7c]">감정도 중요하지만, 먼저 “통장”과 “다음 선택지”를 봅니다. 재정 실마리가 없으면 감정은 뒷전입니다.</p>
          </div>
          <div className="rounded-lg bg-[#f0f9f8] p-4">
            <p className="font-semibold text-[#3f8080]">🏠 이사</p>
            <p className="text-[#4f5e7c]">집값이나 방의 크기만 보지 않습니다. “매일 얼마나 피곤한가”, “일어날 때 기분”, “심야 통근”까지 생활 리듬을 봅니다.</p>
          </div>
          <div className="rounded-lg bg-[#f5f0f9] p-4">
            <p className="font-semibold text-[#6f4fc0]">🗑️ 정리 / 버리기</p>
            <p className="text-[#4f5e7c]">추억은 존중하되, “보관하는 심리 비용”과 “공간이 주는 스트레스”도 같이 계산합니다.</p>
          </div>
          <div className="rounded-lg bg-[#f9f8f0] p-4">
            <p className="font-semibold text-[#a69f4f]">⚡ 일상의 작은 결정</p>
            <p className="text-[#4f5e7c]">“완벽한” 선택을 기다리지 마세요. 30분 고민할 문제면 3분 안에 결론 내고, “살면서 조정”하는 게 더 빨리 나아집니다.</p>
          </div>
        </div>

        <hr className="my-8 border-[#c5d4ea]" />

        <h2 className="mb-4 text-2xl font-semibold text-[#1d2440]">⚠️ 주의: 이런 경우는 전문가와 함께</h2>
        <div className="mb-8 rounded-lg border border-[#f4a460] bg-[#fff8f0] p-4">
          <p className="text-[#c07c3f]">
            건강, 안전, 법적 책임, 큰 금전 리스크가 걸린 문제는 고민스탑을 참고용으로만 쓰고 반드시 관련 전문가와 최종 판단하세요.
          </p>
          <p className="mt-2 text-sm text-[#8b5a2b]">예: 우울증, 자살 생각 → 정신건강의학과 / 투자 손실 → 금융 자문가 / 계약 취소 → 변호사</p>
        </div>

        <hr className="my-8 border-[#c5d4ea]" />

        <h2 className="mb-4 text-2xl font-semibold text-[#1d2440]">💡 고민스탑을 더 잘 쓰는 팁</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li><strong>답변이 마음에 안 들어도</strong> - 하루 동안 “그 답변대로 살아보세요.” 내일 같은 결론이 나오면 당신이 이미 알고 있던 답변입니다.</li>
          <li><strong>“틀렸어요”보다</strong> - “이 전제가 달라졌어요” 또는 “이런 결과가 나왔어요”라고 알려주면 고민스탑도 더 똑똑해집니다.</li>
          <li><strong>여러 번 물어보기</strong> - 같은 문제를 다르게 입력하면 다른 관점의 답변이 나올 수 있습니다.</li>
          <li><strong>친구에게 물어보기와의 차이</strong> - 친구는 당신의 입장을 들어줍니다. 고민스탑은 객관적 관점을 줍니다. 둘 다 필요해요.</li>
        </ul>

        <Link href="/" className="text-[#4f5e7c] underline decoration-[#80caff] underline-offset-2">
          홈으로 돌아가기
        </Link>
      </section>
    </main>
  );
}
