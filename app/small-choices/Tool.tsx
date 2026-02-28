"use client";

import { useState } from "react";
import Link from "next/link";

export default function SmallChoices() {
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
        object: "Small Choice",
        story: situation,
        tool: "small-choices",
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
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">일상 분석</p>
          <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-[#1a1627] sm:text-5xl">오늘의 선택</h1>
          <p className="text-base text-[#504760] sm:text-lg">
            사소하지만 은근히 어려운 선택을 빠르게 정리해드립니다.
          </p>
        </div>

        <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
          <textarea
            placeholder="뭐가 고민되세요? 선택지는 뭐예요? 긴급한가요?"
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
          <h2 className="display-font text-2xl font-bold uppercase text-[#1a1627]">일상의 선택 더 잘 하기</h2>

          <p className="text-[#413a52]">
            매일의 작은 선택들이 모여서 우리의 삶이 만들어집니다. 급할 때, 확신이 없을 때, 선택을 미루고 싶을 때 우리의 분석이 도움이 될 수 있습니다.
          </p>

          <h3 className="display-font text-2xl font-semibold uppercase text-[#1a1627]">
            자주 묻는 질문
          </h3>

          <p><strong className="text-[#1f1a2d]">작은 선택에 시간을 너무 쓰는 게 정상인가요?</strong></p>
          <p className="text-[#4a425d]">
          정상이 아니에요... 근데 대부분 그래요. 카페 선택하는데 5분? 치킨과 피자 사이에서 15분? 당신은 정상입니다. 그냥 \"YOLO\" 태도를 쓰세요.
        </p>

        <p><strong className="text-[#1f1a2d]">어떻게 더 빨리 결정할 수 있을까요?</strong></p>
        <p className="text-[#4a425d]">
          \"되돌릴 수 있는가?\"로 시작하세요. 피자? 되돌릴 수 있어요. 그냥 사세요. 떨어진 선택이라면? 하지만 대부분은 아니거든요. 빨리 결정하고, 그 과정에서 배우세요.
        </p>

        <p><strong className="text-[#1f1a2d]">첫 느낌을 따라야 할까요?</strong></p>
        <p className="text-[#4a425d]">
          보통 맞아요. 근데 \"\"\"첫 느낌에 약간의 생각\"\"\"을 더하면 더 좋아요. 100% 느낌 + 0% 논리는 위험하고, 0% 느낌 + 100% 분석은 지루해요. 6:4 정도로.
        </p>

        <p><strong className="text-[#1f1a2d]">다른 사람 의견과 내 생각이 다를 땐?</strong></p>
        <p className="text-[#4a425d]">
          친구들 의견은 정보일 뿐, 투표권이 아니에요. 들으세요. 생각하세요. 그리고 당신 방식으로 가세요. 당신의 인생이거든요.
        </p>

        <p><strong className="text-[#1f1a2d]">\"만약 다른 선택을 했다면\" 생각하는 건?</strong></p>
        <p className="text-[#4a425d]">
          그건 인생이에요. 우리는 항상 선택의 길을 가다가 다른 길을 궁금해 해요. 핵심: 지금 선택한 길에서 최선을 다하면, \"다른 길\"은 중요하지 않아져요.
        </p>

        <p><strong className="text-[#1f1a2d]">완벽한 선택지가 없으면 어떻게 하죠?</strong></p>
        <p className="text-[#4a425d]">
          완벽은 없어요. 80% 좋은 선택지 있으면 그걸 선택하고, 나머지 20%는 가면서 조정하세요. \"최고\"를 기다리다 보면 평생 카페 앞에서 걸어 다니게 됩니다.
          <p className="mt-6 text-sm text-[#4a425d]">
            관련 주제:
            <Link href="/break-up" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
              관계 문제
            </Link>
          </p>

        </div>
      </section>
    </main>
  );
}
