"use client";

import { useState } from "react";
import Link from "next/link";
import { useToolFunnel } from "@/lib/use-tool-funnel";

export default function TextMyExKo() {
  const [situation, setSituation] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { trackInputCompletion, trackResultReached, resetFunnelProgress } = useToolFunnel("text-my-ex");

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
          object: "Text My Ex",
          story: situation,
          tool: "text-my-ex",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
        return;
      }

      setResult(data.result);
      trackResultReached(data.result ?? "");
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
          <button
            onClick={handleReset}
            className="rounded-full border border-[#80caff] bg-white px-4 py-2 text-xs font-semibold text-brand-blue transition-colors hover:bg-hover-bg"
          >
            다시 입력
          </button>
        </div>

        <div className="mx-auto mb-12 max-w-3xl text-center fade-in-up">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">연애</p>
          <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-ink-heading sm:text-5xl">전 애인에게 연락해도 될까?</h1>
          <p className="text-base text-[#504760] sm:text-lg">감정, 타이밍, 후회 가능성을 같이 보고 결정해요.</p>
        </div>

        <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
          <textarea
            placeholder="언제 헤어졌는지, 왜 연락하고 싶은지, 지금 기대하는 결과가 무엇인지 적어주세요."
            className="lab-input mb-4 h-28 resize-none"
            value={situation}
            onChange={(e) => {
              const nextValue = e.target.value;
              setSituation(nextValue);
              trackInputCompletion(nextValue);
            }}
          />

          <button onClick={handleSubmit} className="lab-btn">
            결과 보기
          </button>

          {loading && <p className="mt-4 text-sm font-semibold text-[#4f4762]">분석 중...</p>}
          {error && <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>}

          {result && !loading && (
            <div className="mt-6 space-y-3 rounded-2xl border border-black/10 bg-result-bg p-5 text-left">
              <h2 className="display-font mb-1 text-3xl font-bold uppercase text-ink-heading">{decision}</h2>
              {reason && <p className="text-ink-result">{reason}</p>}
              {caution && <p className="border-l-2 border-result-border pl-3 text-sm text-result-caution">{caution}</p>}
              {nextStep && <p className="text-sm font-semibold text-result-action">다음 행동: {nextStep}</p>}
            </div>
          )}
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-6">
          <h2 className="display-font text-2xl font-bold uppercase text-ink-heading">연락 전에 꼭 확인할 것</h2>
          <ul className="list-disc space-y-2 pl-6 text-ink-result">
            <li>내 목적이 명확한가: 재회, 사과, 확인, 정리 중 무엇인지</li>
            <li>답장이 없어도 감정적으로 버틸 준비가 되어 있는가</li>
            <li>밤늦은 시간/음주 상태/감정 폭발 상태는 아닌가</li>
          </ul>

          <h3 className="display-font text-xl font-bold uppercase text-ink-heading">자주 묻는 질문</h3>
          <p className="text-ink-result"><strong>Q. 얼마 뒤에 연락하는 게 좋을까?</strong><br />A. 최소 며칠이라도 감정이 가라앉은 뒤가 안전합니다. 급한 마음일수록 문장이 공격적으로 바뀌기 쉽습니다.</p>
          <p className="text-ink-result"><strong>Q. 읽씹하면 다시 보내도 될까?</strong><br />A. 보통은 추가 메시지를 보내지 않는 편이 좋습니다. 무응답도 하나의 답변으로 보는 게 관계 손상을 줄입니다.</p>
          <p className="text-ink-result"><strong>Q. 한 번만 확인하고 싶을 땐?</strong><br />A. 질문형보다 짧은 전달형 문장이 안전합니다. 요구를 줄일수록 후폭풍이 적습니다.</p>

          <p className="text-sm text-[#4a425d]">
            관련 도구:
            <Link href="/break-up" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
              이 관계, 끝내는 게 맞을까?
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
