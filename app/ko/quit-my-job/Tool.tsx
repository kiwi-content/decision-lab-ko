"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useToolFunnel } from "@/lib/use-tool-funnel";

export default function QuitMyJobKo() {
  const [situation, setSituation] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);
  const { trackInputCompletion, trackResultReached, resetFunnelProgress } = useToolFunnel("quit-my-job");

  const handleSubmit = async () => {
    if (!situation) return;
    setLoading(true);
    setResult("");
    setError("");

    try {
      const res = await fetch("/api/decide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ object: "Quit My Job", story: situation, tool: "quit-my-job" }),
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
          <Link href="/" className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue transition-colors hover:text-foreground">
            ← 고민스탑
          </Link>
          <button onClick={handleReset} className="rounded-full border border-[#80caff] bg-white px-4 py-2 text-xs font-semibold text-brand-blue transition-colors hover:bg-hover-bg">
            다시 입력
          </button>
        </div>

        <div className="mx-auto mb-12 max-w-3xl text-center fade-in-up">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">커리어</p>
          <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-ink-heading sm:text-5xl">퇴사해도 될까?</h1>
          <p className="text-base text-[#504760] sm:text-lg">현금흐름, 번아웃, 다음 기회를 같이 보고 결정해요.</p>
        </div>

        <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
          <textarea
            placeholder="퇴사를 고민하는 이유, 현재 재정 상황, 이직 계획(또는 준비 상태)을 적어주세요."
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
          <h2 className="display-font text-2xl font-bold uppercase text-ink-heading">퇴사 전 체크리스트</h2>
          <ul className="list-disc space-y-2 pl-6 text-ink-result">
            <li>월 고정비 기준으로 생활비 버퍼가 몇 개월인지 계산했는가</li>
            <li>건강보험, 대출, 카드 결제 등 고정 지출 대응 계획이 있는가</li>
            <li>퇴사 후 4주 행동 계획(이력서, 지원, 네트워킹)이 있는가</li>
          </ul>

          <h3 className="display-font text-xl font-bold uppercase text-ink-heading">자주 묻는 질문</h3>
          <p className="text-ink-result"><strong>Q. 번아웃이면 바로 퇴사해야 할까?</strong><br />A. 건강이 무너지는 단계라면 빠른 이탈이 맞을 수 있습니다. 다만 최소한의 재정 안전판은 동시에 점검해야 합니다.</p>
          <p className="text-ink-result"><strong>Q. 이직 확정 전 퇴사는 위험할까?</strong><br />A. 네, 일반적으로 리스크가 큽니다. 예외는 건강 악화, 명백한 조직 문제처럼 즉시 이탈이 필요한 상황입니다.</p>
          <p className="text-ink-result"><strong>Q. 지금 버티는 게 맞을 때는?</strong><br />A. 조건 개선 가능성이 있고, 스트레스가 관리 가능한 수준이라면 2~3개월 계획적으로 준비 후 이동하는 편이 유리합니다.</p>

          <p className="text-sm text-[#4a425d]">
            관련 도구:
            <Link href="/move" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
              지금 이사하는 게 맞을까?
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
