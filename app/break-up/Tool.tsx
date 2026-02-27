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
            ← Decision Lab
          </Link>
          <button
            onClick={handleReset}
            className="rounded-full border border-[#80caff] bg-white px-4 py-2 text-xs font-semibold text-[#5d92d8] hover:bg-[#f3f9ff] transition-colors"
          >
            Try Again
          </button>
        </div>
      <div className="mx-auto mb-12 max-w-3xl text-center fade-in-up">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">Relationship Lab</p>
        <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-[#1a1627] sm:text-5xl">
          Should I Break Up?
        </h1>
        <p className="text-base text-[#504760] sm:text-lg">
          Evaluate emotional health and long-term compatibility.
        </p>
      </div>

      <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
        <textarea
          placeholder="How long have you been together? What keeps going wrong? Have you tried to fix it, and what happened?"
          className="lab-input mb-4 h-28 resize-none"
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="lab-btn"
        >
          Run Simulation
        </button>

        {loading && <p className="mt-4 text-sm font-semibold text-[#4f4762]">Analyzing...</p>}

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
          When Is It Time to Break Up?
        </h2>

        <p className="text-[#413a52]">
          Ending a relationship is one of the hardest personal decisions.
          Consider emotional safety, communication patterns, and shared goals.
        </p>

        <h3 className="display-font text-2xl font-semibold uppercase text-[#1a1627]">
          Frequently Asked Questions
        </h3>

        <p><strong className="text-[#1f1a2d]">How do I know if I should break up?</strong></p>
        <p className="text-[#4a425d]">
          Pay attention to repeated patterns: unresolved conflict, emotional
          disrespect, fear of honesty, and shrinking self-esteem. If repair attempts
          keep failing, that is stronger evidence than temporary good days.
        </p>

        <p><strong className="text-[#1f1a2d]">Is staying together for comfort a bad idea?</strong></p>
        <p className="text-[#4a425d]">
          Comfort is valuable, but it should not replace compatibility. If you stay
          mainly to avoid grief, you may trade short-term relief for long-term
          resentment.
        </p>

        <p><strong className="text-[#1f1a2d]">Should I break up if I still love them?</strong></p>
        <p className="text-[#4a425d]">
          Possibly. Love can coexist with incompatibility around trust, life goals,
          communication, or safety. Ask whether this relationship helps both of you
          grow or keeps both of you stuck.
        </p>

        <p><strong className="text-[#1f1a2d]">Is breaking up selfish?</strong></p>
        <p className="text-[#4a425d]">
          Not when done with honesty and care. Staying in a relationship you no longer
          believe in can be more harmful than a respectful, clear ending.
        </p>

        <p><strong className="text-[#1f1a2d]">How do I break up kindly?</strong></p>
        <p className="text-[#4a425d]">
          Be direct, private, and specific without attacking character. Use short
          statements, avoid mixed messages, and set clear boundaries about future
          contact so healing can begin.
        </p>

        <p><strong className="text-[#1f1a2d]">What if I regret breaking up?</strong></p>
        <p className="text-[#4a425d]">
          Regret is common in the first weeks because the routine changed. Give
          yourself a no-contact reflection window, review why you left, and evaluate
          patterns rather than isolated memories.
        </p>

        <p className="mt-6 text-sm text-[#4a425d]">
          Related:
          <Link href="/text-my-ex" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
            Should I Text My Ex?
          </Link>
        </p>
      </div>
      </section>
    </main>
  );
}
