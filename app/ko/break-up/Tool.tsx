"use client";

import { useState } from "react";
import Link from "next/link";

export default function BreakUpKo() {
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
      body: JSON.stringify({ object: "Break Up", story: situation, tool: "break-up" }),
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
        <div className="sticky top-0 z-10 -mx-6 mb-8 flex items-center justify-between border-b border-[#80caff]/30 bg-[#fffff5]/90 px-6 py-3 backdrop-blur-sm sm:-mx-10 sm:px-10">
          <Link href="/ko" className="text-xs font-bold uppercase tracking-[0.2em] text-[#5d92d8] transition-colors hover:text-[#1d2440]">
            ← 고민스탑
          </Link>
          <button onClick={handleReset} className="rounded-full border border-[#80caff] bg-white px-4 py-2 text-xs font-semibold text-[#5d92d8] transition-colors hover:bg-[#f3f9ff]">
            다시 입력
          </button>
        </div>

        <div className="mx-auto mb-12 max-w-3xl text-center fade-in-up">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">연애</p>
          <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-[#1a1627] sm:text-5xl">이 관계, 끝내는 게 맞을까?</h1>
          <p className="text-base text-[#504760] sm:text-lg">반복되는 패턴과 감정적 안전성을 기준으로 점검해요.</p>
        </div>

        <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
          <textarea
            placeholder="관계에서 반복되는 문제, 대화 시도 여부, 남고 싶은 이유/떠나고 싶은 이유를 적어주세요."
            className="lab-input mb-4 h-28 resize-none"
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
          />
          <button onClick={handleSubmit} className="lab-btn">결과 보기</button>
          {loading && <p className="mt-4 text-sm font-semibold text-[#4f4762]">분석 중...</p>}
          {result && !loading && (
            <div className="mt-6 space-y-3 rounded-2xl border border-black/10 bg-[#f7f4fc] p-5 text-left">
              <h2 className="display-font mb-1 text-3xl font-bold uppercase text-[#1a1627]">{decision}</h2>
              {reason && <p className="text-[#413a52]">{reason}</p>}
              {caution && <p className="border-l-2 border-[#c0a8e0] pl-3 text-sm text-[#7a6890]">{caution}</p>}
              {nextStep && <p className="text-sm font-semibold text-[#2a7d5c]">다음 행동: {nextStep}</p>}
            </div>
          )}
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-6">
          <h2 className="display-font text-2xl font-bold uppercase text-[#1a1627]">관계 점검 체크리스트</h2>
          <ul className="list-disc space-y-2 pl-6 text-[#413a52]">
            <li>갈등 이후 회복이 되는 관계인지, 상처만 누적되는 관계인지</li>
            <li>서로의 경계를 존중하는지, 반복적으로 무시하는지</li>
            <li>내가 관계 안에서 점점 작아지고 있지는 않은지</li>
          </ul>

          <h3 className="display-font text-xl font-bold uppercase text-[#1a1627]">자주 묻는 질문</h3>
          <p className="text-[#413a52]"><strong>Q. 아직 좋아하는데 헤어져도 될까?</strong><br />A. 가능합니다. 좋아하는 감정과 건강한 관계 여부는 다를 수 있습니다. 반복된 상처가 핵심 기준입니다.</p>
          <p className="text-[#413a52]"><strong>Q. 싸움이 잦으면 무조건 끝내야 할까?</strong><br />A. 싸움 횟수보다 패턴이 중요합니다. 같은 문제로 반복되고 회복 방식이 없다면 경고 신호입니다.</p>
          <p className="text-[#413a52]"><strong>Q. 시간을 두면 나아질까?</strong><br />A. 시간을 두는 건 좋지만, &quot;무엇을 바꿀지&quot; 합의가 없으면 같은 지점으로 돌아올 가능성이 큽니다.</p>

          <p className="text-sm text-[#4a425d]">
            관련 도구:
            <Link href="/ko/text-my-ex" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
              전 애인에게 연락해도 될까?
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
