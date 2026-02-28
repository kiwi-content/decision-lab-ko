"use client";

import { useState } from "react";
import Link from "next/link";

export default function BreakUp() {
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
        object: "Break Up",
        story: situation,
        tool: "break-up",
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
        <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-[#1a1627] sm:text-5xl">
          이 관계, 끝내는 게 맞을까?
        </h1>
        <p className="text-base text-[#504760] sm:text-lg">
          정서적 안전성과 장기적 호환성을 평가하세요.
        </p>
      </div>

      <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
        <textarea
          placeholder="얼마나 함께 있었나요? 계속 무엇이 문제인가요? 해결하려고 시도했고 무슨 일이 있었나요?"
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
          언제 헤어져야 할까?
        </h2>

        <p className="text-[#413a52]">
          관계? 그건 데이트가 아니라 합의된 환상이에요. 언제 그 환상이 악몽으로 바뀌었는지 알아보세요. 🎭
        </p>

        <h3 className="display-font text-2xl font-semibold uppercase text-[#1a1627]">
          자주 묻는 질문 (그리고 대답)
        </h3>

        <p><strong className="text-[#1f1a2d]">헤어져야 한다는 걸 어떻게 알 수 있나요?</strong></p>
        <p className="text-[#4a425d]">
          싫어요. 그냥 상대방 이름을 보기만 해도 한숨이 나오면... 그거죠. 반복되는 싸움, “나 죽어?” 감정, 자존감이 휴지통 수준? 그런 안녕이라고 말할 때예요.
        </p>

        <p><strong className="text-[#1f1a2d]">편함 때문에 함께 있는 것은 나쁜 생각인가요?</strong></p>
        <p className="text-[#4a425d]">
          편함은 실제로는 ‘변화가 무서움’의 다른 이름입니다. 넷플릭스 비밀번호 때문에 헤어지지 못한다면... 문제 있습니다.
        </p>

        <p><strong className="text-[#1f1a2d]">여전히 사랑하는데 헤어져야 하나요?</strong></p>
        <p className="text-[#4a425d]">
          네, 사랑이 충분하지 않을 때가 있어요. 영화처럼 안 돌아갑니다. 마음은 가지만 발은 가야 할 때... 사랑 ≠ 호환성.
        </p>

        <p><strong className="text-[#1f1a2d]">헤어지는 것이 이기적인가요?</strong></p>
        <p className="text-[#4a425d]">
          더 이기적인 건 둘 다 불행하면서도 “우리 함께였잖아”라고 말하는 거예요. 진정한 사랑은 때론 “안녕”이라고 말하는 거입니다.
        </p>

        <p><strong className="text-[#1f1a2d]">친절하게 헤어지는 방법은?</strong></p>
        <p className="text-[#4a425d]">
          명확하고, 직설적이고, 상대방을 비난하지 말고, “우리 안 맞아”라고만 말하세요. 끝. 다시 설명 금지. 뒹굴기 금지. 우정? 나중에 생각하세요.
        </p>

        <p><strong className="text-[#1f1a2d]">헤어진 것을 후회하면 어쩌죠?</strong></p>
        <p className="text-[#4a425d]">
          후회 온다고 해서 돌아가면 안 된다고요. 그건 그냥 “혼자인 게 무섭습니다”일 수도 있거든요. SNS에서 상대방을 차단하고 친구들한테 “다시 할 거 아니지?”라고 약속하세요.
        </p>

        <p className="mt-6 text-sm text-[#4a425d]">
          관련 주제:
          <Link href="/text-my-ex" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
            전 애인에게 연락해도 될까?
          </Link>
        </p>
      </div>
      </section>
    </main>
  );
}
