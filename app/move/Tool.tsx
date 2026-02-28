"use client";

import { useState } from "react";
import Link from "next/link";

export default function Move() {
  const [situation, setSituation] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!situation) return;

    setLoading(true);
    setResult("");

    const res = await fetch("/api/decide", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        object: "Move",
        story: situation,
        tool: "move",
      }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  const handleReset = () => {
    setSituation("");
    setResult("");
  };

  const lines = result ? result.split("\n").filter((l) => l.trim() !== "") : [];
  const decision = lines[0] ?? "";
  const reason = lines[1] ?? "";
  const caution = lines[2] ?? "";
  const nextStep = lines[3] ?? "";

  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-6xl px-6 py-8 sm:px-10 sm:py-10">
        <div className="sticky top-0 z-10 flex items-center justify-between bg-[#fffff5]/90 backdrop-blur-sm border-b border-[#80caff]/30 -mx-6 sm:-mx-10 px-6 sm:px-10 py-3 mb-8">
          <Link href="/" className="text-xs font-bold uppercase tracking-[0.2em] text-[#5d92d8] hover:text-[#1d2440] transition-colors">
            ← 고민스탑
          </Link>
          <button
            onClick={handleReset}
            className="rounded-full border border-[#80caff] bg-white px-4 py-2 text-xs font-semibold text-[#5d92d8] hover:bg-[#f3f9ff] transition-colors"
          >
            다시 하기
          </button>
        </div>
      <div className="mx-auto mb-12 max-w-3xl text-center fade-in-up">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">이주 분석</p>
        <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-[#1a1627] sm:text-5xl">
          지금 이사하는 게 맞을까?
        </h1>
        <p className="text-base text-[#504760] sm:text-lg">
          기회, 비용, 장기적 생활 영향을 평가하세요.
        </p>
      </div>

      <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
        <textarea
          placeholder="어디에서 어디로 이사하려고 하나요? 이사를 고려하는 주요 이유가 뭔가요? 뭘 남기게 될까요?"
          className="lab-input mb-4 h-28 resize-none"
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="lab-btn"
        >
          분석 시작
        </button>

        {loading && <p className="mt-4 text-sm font-semibold text-[#4f4762]">분석 중입니다...</p>}

        {result && !loading && (
          <div className="mt-6 rounded-2xl border border-black/10 bg-[#f7f4fc] p-5 text-left space-y-3">
            <h2 className="display-font mb-1 text-3xl font-bold uppercase text-[#1a1627]">{decision}</h2>
            {reason && <p className="text-[#413a52]">{reason}</p>}
            {caution && (
              <p className="text-sm text-[#7a6890] border-l-2 border-[#c0a8e0] pl-3">{caution}</p>
            )}
            {nextStep && (
              <p className="text-sm font-semibold text-[#2a7d5c]">다음: {nextStep}</p>
            )}
          </div>
        )}
      </div>

      <div className="mx-auto mt-14 max-w-4xl space-y-6">
        <h2 className="display-font text-2xl font-bold uppercase text-[#1a1627]">
          다른 도시로 이사해야 할까?
        </h2>

        <p className="text-[#413a52]">
          이사는 큰 인생 전환입니다. 커리어 기회, 재정 비용, 사회적 지원, 생활 방식의 변화를 고려하세요.
        </p>

        <h3 className="display-font text-2xl font-semibold uppercase text-[#1a1627]">
          자주 묻는 질문
        </h3>

        <p><strong className="text-[#1f1a2d]\">이사해야 한다는 걸 어떻게 알 수 있나요?</strong></p>
        <p className="text-[#4a425d]">
          커리어 상승, 생활비, 지원 시스템, 일상적 생활 방식을 위해 가중 점수를 작성하세요. 
          한 도시가 상위 3가지 우선순위에서 이기면 결정이 보통 더 명확합니다.
        </p>

        <p><strong className="text-[#1f1a2d]\">다른 도시로 이사하는 것이 가치있나요?</strong></p>
        <p className="text-[#4a425d]">
          장기적 이득이 구체적일 때, 모호할 때가 아닙니다. 12개월 안에 성공이 무엇인지 정의하세요: 
          수입, 출퇴근, 사회 생활, 건강. 이 지표들이 개선되면 혼란이 정당화될 수 있습니다.
        </p>

        <p><strong className="text-[#1f1a2d]\">이사는 얼마나 스트레스인가요?</strong></p>
        <p className="text-[#4a425d]">
          스트레스는 높지만 계획으로 관리 가능합니다. 주택, 예산, 물류, 사회 설정으로 나누어 
          각각 일정과 백업 옵션을 설정하여 압력을 줄이세요.
        </p>

        <p><strong className="text-[#1f1a2d]\">직업 기회를 위해 이사해야 하나요?</strong></p>
        <p className="text-[#4a425d]">
          세금과 주택 후 총 보상을 비교하세요. 급여만이 아닙니다. 또한 역할 품질, 관리자 맞춤, 
          진급 경로를 확인하고 이사가 주간 삶의 질을 개선하는지 확인하세요.
        </p>

        <p><strong className="text-[#1f1a2d]\">이사 전에 얼마나 저축해야 하나요?</strong></p>
        <p className="text-[#4a425d]">
          강력한 목표는 4개월~6개월 비용에 일회성 이사 비용, 보증금, 설정 구매입니다. 
          이 완충은 재정 압력 하에서 나쁜 단기 결정을 방지합니다.
        </p>

        <p><strong className="text-[#1f1a2d]\">남아 있어야 한다는 신호가 뭔가요?</strong></p>
        <p className="text-[#4a425d]">
          현재 도시가 이미 목표, 관계, 정신적 대역폭을 지원한다면 남아 있으세요. 
          주로 일시적 문제를 피하기 위해 이사한다면 이주 전에 먼저 해결하세요.
        </p>

        <p className="mt-6 text-sm text-[#4a425d]">
          관련 주제:
          <Link href="/quit-my-job" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
            퇴사해도 될까?
          </Link>
        </p>
      </div>
      </section>
    </main>
  );
}
