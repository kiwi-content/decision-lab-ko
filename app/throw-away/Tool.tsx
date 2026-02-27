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
          ← Decision Lab
        </Link>
        <button
          onClick={handleReset}
          className="rounded-full border border-[#80caff] bg-white px-4 py-2 text-xs font-semibold text-[#5d92d8] hover:bg-[#f3f9ff] transition-colors"
        >
          Try Again
        </button>
      </div>
      <div className="mb-6 text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">Declutter Lab</p>
        <h1 className="display-font text-4xl font-extrabold uppercase leading-tight text-[#1a1627] sm:text-5xl">
        Should I Throw This Away?
        </h1>
      </div>

      <div className="card-pop bg-white p-6 sm:p-7">
        <input
          type="text"
          placeholder="Object name"
          className="lab-input mb-4"
          value={object}
          onChange={(e) => setObject(e.target.value)}
        />

        <textarea
          placeholder="When did you last use it? Why are you hesitating to throw it away?"
          className="lab-input mb-4 h-28 resize-none"
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="lab-btn"
        >
          Get Decision
        </button>

        {loading && (
          <p className="mt-4 text-sm font-semibold text-[#4f4762]">Analyzing...</p>
        )}

        {result && !loading && (
          <div className="mt-6 rounded-2xl border border-black/10 bg-[#f7f4fc] p-5 text-left space-y-3">
            <h2 className="display-font mb-1 text-3xl font-bold uppercase text-[#1a1627]">{decision}</h2>
            {reason && <p className="text-[#413a52]">{reason}</p>}
            {caution && (
              <p className="text-sm text-[#7a6890] border-l-2 border-[#c0a8e0] pl-3">{caution}</p>
            )}
            {nextStep && (
              <p className="text-sm font-semibold text-[#2a7d5c]">Next: {nextStep}</p>
            )}
          </div>
        )}
      </div>

      <div className="mx-auto mt-14 max-w-4xl space-y-6">
        <h2 className="display-font text-2xl font-bold uppercase text-[#1a1627]">
          Should You Throw It Away?
        </h2>

        <p className="text-[#413a52]">
          Decluttering is not just about physical space. It is about deciding what
          deserves a place in your life right now.
        </p>

        <h3 className="display-font text-2xl font-semibold uppercase text-[#1a1627]">
          Frequently Asked Questions
        </h3>

        <p><strong className="text-[#1f1a2d]">How do I know if I should throw something away?</strong></p>
        <p className="text-[#4a425d]">
          Ask three questions: Have I used this in the past year? Would I buy it again today?
          Does keeping it cost me energy, space, or clarity? If the answer to all three is no,
          it is probably time to let it go.
        </p>

        <p><strong className="text-[#1f1a2d]">What if I regret throwing it away?</strong></p>
        <p className="text-[#4a425d]">
          Regret is common but rarely lasting. If the item can be replaced for under $30,
          the cost of keeping it in your mental load may already exceed its value.
          For sentimental items, consider photographing before discarding.
        </p>

        <p><strong className="text-[#1f1a2d]">Should I throw it away if I feel guilty?</strong></p>
        <p className="text-[#4a425d]">
          Guilt usually means the item was a gift or represents an identity you once held.
          Acknowledge that, then separate sentiment from utility. Keeping something out of guilt
          rarely honors either the item or the person who gave it.
        </p>

        <p><strong className="text-[#1f1a2d]">Is decluttering good for mental health?</strong></p>
        <p className="text-[#4a425d]">
          Research consistently links cluttered environments to higher cortisol and lower
          focus. Clearing physical space often creates mental space. Start with one small
          category rather than an entire room to see results without overwhelm.
        </p>

        <p><strong className="text-[#1f1a2d]">How often should I declutter?</strong></p>
        <p className="text-[#4a425d]">
          A light pass every season works for most people. A deeper review once a year,
          ideally around a move, change of season, or major life transition, prevents
          accumulation from resetting your progress.
        </p>

        <p><strong className="text-[#1f1a2d]">What is the best rule for deciding what to keep?</strong></p>
        <p className="text-[#4a425d]">
          The most practical rule: keep it if it is useful right now or genuinely irreplaceable.
          The 30-day box method also works well — box it, set a date, and if you never opened it,
          let it go without second-guessing.
        </p>

        <p className="mt-6 text-sm text-[#4a425d]">
          Related:
          <Link href="/move" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
            Should I Move?
          </Link>
        </p>
      </div>
    </div>
  );
}
