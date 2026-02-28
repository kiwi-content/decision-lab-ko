"use client";

import { useState } from "react";
import Link from "next/link";

export default function TextMyEx() {
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
        object: "Text My Ex",
        story: situation,
        tool: "text-my-ex",
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
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">관계 분석</p>
        <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-[#1a1627] sm:text-5xl">전 애인에게 연락해도 될까?</h1>
        <p className="text-base text-[#504760] sm:text-lg">
          연락하기 전에 감정적 위험과 시기를 분석하세요.
        </p>
      </div>

      <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
        <textarea
          placeholder="언제 헤어졌나요? 누가 끝냈고 왜인가요? 연락해서 뭘 얻고 싶어요?"
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
        <h2 className="display-font text-2xl font-bold uppercase text-[#1a1627]">전 애인에게 연락해도 될까?</h2>

        <p className="text-[#413a52]">
          전 애인에게 연락하는 것을 결정하는 것은 감정적으로 복잡할 수 있습니다.
          시간, 감정적 취약성, 진정한 의도가 모두 중요합니다.
        </p>

        <h3 className="display-font text-2xl font-semibold uppercase text-[#1a1627]">
          자주 묻는 질문
        </h3>

        <p><strong className="text-[#1f1a2d]">전 애인에게 연락하는 것이 좋은 생각일까요?</strong></p>
        <p className="text-[#4a425d]">
          거의 항상 아니에요. 취할 때? 절대. 외로울 때? 절대. “그냥 궁금해서”? 그것도 절대. 명확한 이유가 있고 감정적으로 안정됐을 때만... 그래도 99% 후회할 거예요.
        </p>

        <p><strong className="text-[#1f1a2d]">전 애인에게 연락하기 전에 얼마나 기다려야 할까요?</strong></p>
        <p className="text-[#4a425d]">
          최소 한 달. 현실은 3-6개월. 왜냐면 “한 달이면 괜찮겠지”라고 생각할 때 그들의 SNS를 봤기 때문이에요. 다시 좋아진 거 아니라 외로운 거예요.
        </p>

        <p><strong className="text-[#1f1a2d]">전 애인에게 연락하면 감정적 상처를 다시 열까요?</strong></p>
        <p className="text-[#4a425d]">
          네. 특히 “실은 후회했어”라고 기대할 때. 대부분의 경우 아무 응답이 오지 않거나, 차갑거나, “잘 지내고 있어”라는 응답이 와요. 그게 제일 아파요.
        </p>

        <p><strong className="text-[#1f1a2d]">닫힘을 위해 전 애인에게 연락해야 할까요?</strong></p>
        <p className="text-[#4a425d]">
          아니요. “닫힘”은 상대방으로부터 오지 않습니다. 당신 안에서 와요. 연락할 거 쓰고, 읽어보고, 절대 보내지 마세요. 그게 닫힘입니다.
        </p>

        <p><strong className="text-[#1f1a2d]">전 애인에게 연락하는 것이 약함의 신호일까요?</strong></p>
        <p className="text-[#4a425d]">
          절대 아니에요. 강함은 “아, 연락하고 싶지만 안 할 거야”입니다. 약함은 밤 2시에 “요즘 뭐해?”라고 메시지 보내는 거예요. 우리 모두 약할 때가 있어요.
        </p>

        <p><strong className="text-[#1f1a2d]">전 애인이 답장을 안 하면 어떻게 하나요?</strong></p>
        <p className="text-[#4a425d]">
          그것이 정답입니다. 응답 없음 = 일이 끝났다는 뜻. 하루 더 기다렸다고 답장이 오진 않아요. 친구들에게 “연락했어”라고 말하지 마세요. 자기 위로 모드를 켜세요. 혼자 이겨내세요.
        </p>

        <p className="mt-6 text-sm text-[#4a425d]">
          관련 주제:
          <Link href="/break-up" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
            이 관계, 끝내는 게 맞을까?
          </Link>
        </p>
      </div>
      </section>
    </main>
  );
}
