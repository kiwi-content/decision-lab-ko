"use client";

import Link from "next/link";
import { useState } from "react";

export default function ThrowAwayKo() {
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
      body: JSON.stringify({ object, story, tool: "throw-away" }),
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
      <div className="sticky top-0 z-10 -mx-4 mb-8 flex items-center justify-between border-b border-[#80caff]/30 bg-[#fffff5]/90 px-4 py-3 backdrop-blur-sm">
        <Link href="/ko" className="text-xs font-bold uppercase tracking-[0.2em] text-[#5d92d8] transition-colors hover:text-[#1d2440]">
          ← 고민해우소
        </Link>
        <button onClick={handleReset} className="rounded-full border border-[#80caff] bg-white px-4 py-2 text-xs font-semibold text-[#5d92d8] transition-colors hover:bg-[#f3f9ff]">
          다시 입력
        </button>
      </div>

      <div className="mb-6 text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">정리</p>
        <h1 className="display-font text-4xl font-extrabold uppercase leading-tight text-[#1a1627] sm:text-5xl">이거 버려도 될까?</h1>
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
          placeholder="마지막 사용 시점, 못 버리는 이유, 보관 중 불편한 점을 적어주세요."
          className="lab-input mb-4 h-28 resize-none"
          value={story}
          onChange={(e) => setStory(e.target.value)}
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
        <h2 className="display-font text-2xl font-bold uppercase text-[#1a1627]">정리 전 체크리스트</h2>
        <ul className="list-disc space-y-2 pl-6 text-[#413a52]">
          <li>지난 12개월 동안 실제 사용했는지</li>
          <li>지금 다시 산다면 같은 돈을 지불할 의사가 있는지</li>
          <li>보관으로 얻는 이득보다 공간/관리 비용이 더 큰지</li>
        </ul>

        <h3 className="display-font text-xl font-bold uppercase text-[#1a1627]">자주 묻는 질문</h3>
        <p className="text-[#413a52]"><strong>Q. 선물이라 버리기 미안해요.</strong><br />A. 고마움과 보관은 별개입니다. 사진이나 메모로 의미를 남기고 물건은 정리해도 괜찮습니다.</p>
        <p className="text-[#413a52]"><strong>Q. 언젠가 쓸지도 모르는데요?</strong><br />A. &quot;언젠가&quot;가 1년을 넘겼다면 실제 필요 가능성은 낮습니다. 임시 보관 박스를 두고 한 달 후 재판단해보세요.</p>
        <p className="text-[#413a52]"><strong>Q. 비싸게 샀는데 버리기 아까워요.</strong><br />A. 이미 지출된 돈은 회수되지 않습니다. 앞으로 드는 보관 비용과 스트레스를 기준으로 판단하는 게 더 합리적입니다.</p>

        <p className="text-sm text-[#4a425d]">
          관련 도구:
          <Link href="/ko/move" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
            지금 이사하는 게 맞을까?
          </Link>
        </p>
      </div>
    </div>
  );
}
