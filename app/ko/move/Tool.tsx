"use client";

import { useState } from "react";
import Link from "next/link";

export default function MoveKo() {
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
      body: JSON.stringify({ object: "Move", story: situation, tool: "move" }),
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
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">이사</p>
          <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-[#1a1627] sm:text-5xl">지금 이사하는 게 맞을까?</h1>
          <p className="text-base text-[#504760] sm:text-lg">비용, 기회, 생활 리듬 변화를 한 번에 확인해요.</p>
        </div>

        <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
          <textarea
            placeholder="어디에서 어디로 옮기려는지, 이사 이유, 포기해야 하는 것과 기대하는 점을 적어주세요."
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
          <h2 className="display-font text-2xl font-bold uppercase text-[#1a1627]">이사 전 체크리스트</h2>
          <ul className="list-disc space-y-2 pl-6 text-[#413a52]">
            <li>월 고정비(월세+관리비+교통+식비) 총합이 현재 대비 얼마나 변하는지</li>
            <li>통근/통학 시간과 생활 패턴이 실제로 나아지는지</li>
            <li>이사 후 1개월 내 필요한 초기비용(보증금, 가전, 이사비)을 감당 가능한지</li>
          </ul>

          <h3 className="display-font text-xl font-bold uppercase text-[#1a1627]">자주 묻는 질문</h3>
          <p className="text-[#413a52]"><strong>Q. 기분 전환용 이사는 괜찮을까?</strong><br />A. 가능하지만 비용이 큰 결정입니다. 감정 해소 목적이라면 단기 여행/생활 루틴 변경으로 먼저 테스트해보는 게 안전합니다.</p>
          <p className="text-[#413a52]"><strong>Q. 월세만 보고 결정해도 될까?</strong><br />A. 아니요. 교통비, 이동시간, 주변 인프라, 생활 스트레스까지 합산해야 실제 체감이 맞습니다.</p>
          <p className="text-[#413a52]"><strong>Q. 언제가 가장 좋은 이사 타이밍일까?</strong><br />A. 계약·직장 일정이 겹치지 않는 시점이 좋습니다. 준비 기간 4주 이상 확보하면 실수 비용이 줄어듭니다.</p>

          <p className="text-sm text-[#4a425d]">
            관련 도구:
            <Link href="/ko/quit-my-job" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
              퇴사해도 될까?
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
