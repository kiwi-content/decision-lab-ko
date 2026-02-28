"use client";

import Link from "next/link";
import { useState } from "react";

export default function Tool() {
  const [object, setObject] = useState("");
  const [story, setStory] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!object || !story) return;

    setLoading(true);
    setResult("");

    const res = await fetch("/api/decide", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        object,
        story,
        tool: "throw-away",
      }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  const handleReset = () => {
    setObject("");
    setStory("");
    setResult("");
  };

  const lines = result ? result.split("\n").filter((l) => l.trim() !== "") : [];
  const decision = lines[0] ?? "";
  const reason = lines[1] ?? "";
  const caution = lines[2] ?? "";
  const nextStep = lines[3] ?? "";

  return (
    <div className="mx-auto mb-12 max-w-3xl fade-in-up">
      <div className="sticky top-0 z-10 flex items-center justify-between bg-[#fffff5]/90 backdrop-blur-sm border-b border-[#80caff]/30 -mx-4 px-4 py-3 mb-8">
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
      <div className="mb-6 text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">정리 분석</p>
        <h1 className="display-font text-4xl font-extrabold uppercase leading-tight text-[#1a1627] sm:text-5xl">
        이거 버려도 될까?
        </h1>
      </div>

      <div className="card-pop bg-white p-6 sm:p-7">
        <input
          type="text"
          placeholder="물건 이름"
          className="lab-input mb-4"
          value={object}
          onChange={(e) => setObject(e.target.value)}
        />

        <textarea
          placeholder="마지막으로 언제 썼어요? 뭐가 버리기 싫은가요?"
          className="lab-input mb-4 h-28 resize-none"
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="lab-btn"
        >
          결론 보기
        </button>

        {loading && (
          <p className="mt-4 text-sm font-semibold text-[#4f4762]">분석 중입니다...</p>
        )}

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
          이거 버려도 될까?
        </h2>

        <p className="text-[#413a52]">
          정리는 단순히 물리적 공간에 관한 것만이 아닙니다. 지금 당신의 인생에 자리할 가치가 있는 것을 결정하는 것입니다.
        </p>

        <h3 className="display-font text-2xl font-semibold uppercase text-[#1a1627]">
          자주 묻는 질문
        </h3>

        <p><strong className="text-[#1f1a2d]\">뭔가를 버려야 하는지 어떻게 알 수 있나요?</strong></p>
        <p className="text-[#4a425d]">
          세 가지 질문을 해보세요: 지난 1년 동안 이것을 썼나요? 오늘 다시 사고 싶나요? 
          이것을 보관하는 것이 에너지, 공간, 명확성을 해치나요? 세 가지 모두 아니면 아마도 떠날 시간일 겁니다.
        </p>

        <p><strong className="text-[#1f1a2d]\">버린 것이 후회되면 어떻게 하나요?</strong></p>
        <p className="text-[#4a425d]">
          후회는 흔하지만 거의 지속되지 않습니다. 물건을 $30 미만에 대체할 수 있다면, 
          정신적 부하의 유지비는 이미 가치를 초과했을 수 있습니다. 감정적 물건의 경우, 
          버리기 전에 사진을 찍는 것을 고려하세요.
        </p>

        <p><strong className="text-[#1f1a2d]\">죄책감을 느끼면 버려야 하나요?</strong></p>
        <p className="text-[#4a425d]">
          죄책감은 보통 물건이 선물이거나 당신이 한때 소유했던 정체성을 나타낸다는 뜻입니다. 
          그것을 인정하고, 감정과 유틸리티를 분리하세요. 죄책감으로 뭔가를 보관하는 것은 
          거의 물건이나 그것을 준 사람을 존경하지 않습니다.
        </p>

        <p><strong className="text-[#1f1a2d]\">정리가 정신 건강에 좋을까요?</strong></p>
        <p className="text-[#4a425d]">
          연구는 지속적으로 산란한 환경을 더 높은 코르티솔 및 낮은 초점과 연결합니다. 
          물리적 공간을 지우면 종종 정신적 공간을 만듭니다. 전체 방을 압도하지 않기 위해 
          한 가지 작은 카테고리로 시작하여 결과를 봅시다.
        </p>

        <p><strong className="text-[#1f1a2d]\">얼마나 자주 정리해야 하나요?</strong></p>
        <p className="text-[#4a425d]">
          가벼운 패스는 대부분의 사람들을 위해 매 계절마다 잘 작동합니다. 
          더 깊은 검토는 1년에 한 번, 이상적으로 이사, 계절 변경 또는 큰 인생 전환 주위에서, 
          축적을 진행 상황 재설정에서 방지합니다.
        </p>

        <p><strong className="text-[#1f1a2d]\">뭘 유지하기로 결정하는 최고의 규칙은 뭔가요?</strong></p>
        <p className="text-[#4a425d]">
          가장 실용적인 규칙: 지금 유용하거나 정말 대체할 수 없다면 유지하세요. 
          30일 상자 방법도 잘 작동합니다 — 상자에 넣고, 날짜를 설정하고, 절대 열지 않았다면, 
          다시 생각하지 않고 놓아주세요.
        </p>

        <p className="mt-6 text-sm text-[#4a425d]">
          관련 주제:
          <Link href="/move" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
            지금 이사하는 게 맞을까?
          </Link>
        </p>
      </div>
    </div>
  );
}
