"use client";

import { useState } from "react";
import Link from "next/link";

export default function QuitMyJob() {
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
        object: "Quit My Job",
        story: situation,
        tool: "quit-my-job",
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
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">Career Lab</p>
        <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-[#1a1627] sm:text-5xl">Should I Quit My Job?</h1>
        <p className="text-base text-[#504760] sm:text-lg">
          Evaluate risk, stability, and long-term impact.
        </p>
      </div>

      <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
        <textarea
          placeholder="How long have you been at this job? What's pushing you to leave? Do you have savings or another offer lined up?"
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
        <h2 className="display-font text-2xl font-bold uppercase text-[#1a1627]">When Should You Quit Your Job?</h2>

        <p className="text-[#413a52]">
          Quitting your job is a major life decision. Consider financial
          security, stress levels, growth opportunities, and long-term goals.
        </p>

        <h3 className="display-font text-2xl font-semibold uppercase text-[#1a1627]">
          Frequently Asked Questions
        </h3>

        <p><strong className="text-[#1f1a2d]">How do I know if I should quit my job?</strong></p>
        <p className="text-[#4a425d]">
          Look for persistent patterns, not bad weeks. Strong signals include chronic
          burnout, no path to growth, values misalignment, and no realistic internal
          fix after direct conversations with your manager.
        </p>

        <p><strong className="text-[#1f1a2d]">Is it risky to quit without another job lined up?</strong></p>
        <p className="text-[#4a425d]">
          Yes. Reduce risk by calculating your monthly burn rate, securing at least
          4 to 6 months of runway, and planning health insurance and job-search
          timeline before giving notice.
        </p>

        <p><strong className="text-[#1f1a2d]">Should I quit if I’m unhappy at work?</strong></p>
        <p className="text-[#4a425d]">
          Unhappiness matters, but diagnose the source first. If the problem is role
          fit or team dynamics, a transfer or scope change may solve it faster than
          resigning without a plan.
        </p>

        <p><strong className="text-[#1f1a2d]">How much savings should I have before quitting?</strong></p>
        <p className="text-[#4a425d]">
          Use tiers: 3 months is minimum, 6 months is safer, and 9 months is ideal
          in slower hiring markets. Include debt payments, insurance, and emergency
          costs, not just rent and food.
        </p>

        <p><strong className="text-[#1f1a2d]">Can quitting a job hurt my career?</strong></p>
        <p className="text-[#4a425d]">
          It can if the story is unclear. Protect your narrative by framing the move
          around growth, impact, and fit. Leave professionally and preserve references.
        </p>

        <p><strong className="text-[#1f1a2d]">What are signs I should stay?</strong></p>
        <p className="text-[#4a425d]">
          Stay if there is real mentorship, clear progression, manageable stress, and
          compensation trending in the right direction. If those are improving, waiting
          3 to 6 months may produce a better exit.
        </p>

        <p className="mt-6 text-sm text-[#4a425d]">
          Related:
          <Link href="/move" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
            Should I Move?
          </Link>
        </p>

      </div>
      </section>
    </main>
  );
}
