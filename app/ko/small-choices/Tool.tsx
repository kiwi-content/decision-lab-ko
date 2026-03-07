"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useToolFunnel } from "@/lib/use-tool-funnel";

export default function SmallChoicesToolKo() {
  const [situation, setSituation] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);
  const { trackInputCompletion, trackResultReached, resetFunnelProgress } = useToolFunnel("small-choices");

  const handleSubmit = async () => {
    if (!situation) return;
    setLoading(true);
    setResult("");
    setError("");

    try {
      const res = await fetch("/api/decide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          object: "Small Choices",
          story: situation,
          tool: "small-choices",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
        return;
      }

      setResult(data.result);
      trackResultReached(data.result ?? "");
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
    } catch {
      setError("네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSituation("");
    setResult("");
    setError("");
    resetFunnelProgress();
  };

  const lines = result ? result.split("\n").filter((l) => l.trim() !== "") : [];
  const decision = lines[0] ?? "";
  const reason = lines[1] ?? "";
  const caution = lines[2] ?? "";
  const nextStep = lines[3] ?? "";

  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-6xl px-6 py-8 sm:px-10 sm:py-10">
        <div className="sticky top-0 z-10 -mx-6 mb-8 flex items-center justify-between border-b border-[#80caff]/30 bg-panel-bg/90 px-6 py-3 backdrop-blur-sm sm:-mx-10 sm:px-10">
          <Link href="/" className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue transition-colors hover:text-[#1d2440]">
            ← 고민스탑
          </Link>
          <button onClick={handleReset} className="rounded-full border border-[#80caff] bg-white px-4 py-2 text-xs font-semibold text-brand-blue transition-colors hover:bg-hover-bg">
            다시 입력
          </button>
        </div>

        <div className="mx-auto mb-12 max-w-3xl text-center fade-in-up">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">일상 결정</p>
          <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-ink-heading sm:text-5xl">오늘은 뭘 고를까?</h1>
          <p className="text-base text-[#504760] sm:text-lg">사소하지만 애매한 선택, 조건까지 반영해서 바로 결론 내드려요.</p>
        </div>

        <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
          <textarea
            placeholder="예: 짜장 vs 짬뽕. 점심시간 20분 남음, 오후 회의 2개, 속이 예민한 편."
            className="lab-input mb-4 h-28 resize-none"
            value={situation}
            onChange={(e) => {
              const nextValue = e.target.value;
              setSituation(nextValue);
              trackInputCompletion(nextValue);
            }}
          />
          <button onClick={handleSubmit} disabled={!situation || loading} className="lab-btn">결과 보기</button>
          {loading && <p className="mt-4 text-sm font-semibold text-[#4f4762]">분석 중...</p>}
          {error && <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>}
          {result && !loading && (
            <div ref={resultRef} className="mt-6 space-y-3 rounded-2xl border border-black/10 bg-result-bg p-5 text-left">
              <h2 className="display-font mb-1 text-3xl font-bold uppercase text-ink-heading">{decision}</h2>
              {reason && <p className="text-ink-result">{reason}</p>}
              {caution && <p className="border-l-2 border-result-border pl-3 text-sm text-result-caution">{caution}</p>}
              {nextStep && <p className="text-sm font-semibold text-result-action">다음 행동: {nextStep}</p>}
            </div>
          )}
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-6">
          <h2 className="display-font text-2xl font-bold uppercase text-ink-heading">잘 나오는 입력 예시</h2>
          <ul className="list-disc space-y-2 pl-6 text-ink-result">
            <li>선택지 2~3개를 명확히 적기 (무엇 vs 무엇)</li>
            <li>시간 제한 적기 (지금, 오늘, 이번 주)</li>
            <li>중요 조건 적기 (예산, 체력, 이동시간, 기분 상태)</li>
          </ul>
          <p className="text-ink-result">입력이 구체적일수록 결론도 더 현실적으로 나옵니다.</p>
        </div>
      </section>
    </main>
  );
}
