"use client";

import { useState } from "react";
import Link from "next/link";

export default function Move() {
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
        object: "Move",
        story: situation,
        tool: "move",
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
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">Relocation Lab</p>
        <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-[#1a1627] sm:text-5xl">
          Should I Move?
        </h1>
        <p className="text-base text-[#504760] sm:text-lg">
          Evaluate opportunity, cost, and long-term life impact.
        </p>
      </div>

      <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
        <textarea
          placeholder="Where are you moving from and to? What's the main reason you're considering the move? What would you be leaving behind?"
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
          Should You Move to Another City?
        </h2>

        <p className="text-[#413a52]">
          Moving is a major life transition. Consider career opportunity,
          financial cost, social support, and lifestyle changes.
        </p>

        <h3 className="display-font text-2xl font-semibold uppercase text-[#1a1627]">
          Frequently Asked Questions
        </h3>

        <p><strong className="text-[#1f1a2d]">How do I know if I should move?</strong></p>
        <p className="text-[#4a425d]">
          Build a weighted score for career upside, cost of living, support system,
          and day-to-day lifestyle. If one city wins across your top three priorities,
          the decision is usually clearer.
        </p>

        <p><strong className="text-[#1f1a2d]">Is moving to another city worth it?</strong></p>
        <p className="text-[#4a425d]">
          It is worth it when the long-term gain is concrete, not vague. Define what
          success looks like in 12 months: income, commute, social life, and health.
          If those metrics improve, the disruption may be justified.
        </p>

        <p><strong className="text-[#1f1a2d]">How stressful is moving?</strong></p>
        <p className="text-[#4a425d]">
          Stress is high but manageable with planning. Reduce pressure by breaking it
          into phases: housing, budget, logistics, and social setup, each with a
          timeline and backup option.
        </p>

        <p><strong className="text-[#1f1a2d]">Should I move for a job opportunity?</strong></p>
        <p className="text-[#4a425d]">
          Compare total compensation after taxes and housing, not just salary. Also
          check role quality, manager fit, promotion path, and whether the move
          improves your weekly quality of life.
        </p>

        <p><strong className="text-[#1f1a2d]">How much savings should I have before moving?</strong></p>
        <p className="text-[#4a425d]">
          A strong target is 4 to 6 months of expenses plus one-time moving costs,
          deposits, and setup purchases. This buffer prevents bad short-term decisions
          under financial pressure.
        </p>

        <p><strong className="text-[#1f1a2d]">What are signs I should stay?</strong></p>
        <p className="text-[#4a425d]">
          Stay if your current city already supports your goals, relationships, and
          mental bandwidth. If you are moving mainly to escape a temporary problem,
          solve that first before relocating.
        </p>

        <p className="mt-6 text-sm text-[#4a425d]">
          Related:
          <Link href="/quit-my-job" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
            Should I Quit My Job?
          </Link>
        </p>
      </div>
      </section>
    </main>
  );
}
