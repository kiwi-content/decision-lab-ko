import Link from "next/link";

export const metadata = {
  title: "Decision Methodology | Decision Lab",
  description:
    "Understand the structured risk analysis framework behind Decision Lab simulations. We evaluate trade-offs, reversibility, and long-term impact before generating outputs.",
};

export default function MethodologyPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-4xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">Decision Methodology</h1>

        <p className="mb-6 text-[#4f5e7c]">
          Decision Lab uses a standardized decision framework so recommendations remain coherent
          across different life domains. Our objective is not to generate motivational language,
          but to deliver practical clarity under uncertainty.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Core Evaluation Dimensions</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>Outcome horizon: likely effects in the near, medium, and long term</li>
          <li>Reversibility: whether a poor decision can be corrected at low cost</li>
          <li>Risk concentration: probability and severity of downside events</li>
          <li>Value alignment: consistency with user priorities and constraints</li>
          <li>Execution feasibility: practical ability to follow through</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">How Inputs Are Interpreted</h2>
        <p className="mb-4 text-[#4f5e7c]">
          User input is translated into decision signals rather than treated as narrative alone.
          Signals can include urgency, emotional load, resource constraints, time sensitivity,
          stability of alternatives, and expected reversibility.
        </p>
        <p className="mb-8 text-[#4f5e7c]">
          The simulation then compares options against these signals, with emphasis on downside
          control and decision timing. This process reduces overreliance on a single emotional
          moment or one attractive short-term benefit.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Recommendation Logic</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>Identify the option with strongest risk-adjusted fit</li>
          <li>Penalize decisions with high irreversible downside</li>
          <li>Prefer delay when uncertainty is high and cost of waiting is low</li>
          <li>Prefer action when inaction creates compounding risk</li>
          <li>Return concise guidance plus rationale for user review</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Quality Standards</h2>
        <p className="mb-4 text-[#4f5e7c]">
          We optimize for clarity, consistency, and utility. Outputs are intentionally short so users
          can make decisions quickly, but each result is designed to reflect explicit trade-offs, not
          generic encouragement.
        </p>
        <p className="mb-8 text-[#4f5e7c]">
          We also treat uncertainty honestly. When signal quality is weak or outcomes are highly
          ambiguous, the system can indicate caution or delay instead of forcing false precision.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Important Limitation</h2>
        <p className="mb-8 text-[#4f5e7c]">
          Decision Lab is an informational decision-support tool and does not replace licensed
          professional judgment. Users should seek qualified advice for legal, clinical, or investment
          decisions where domain regulation and fiduciary duty apply.
        </p>

        <p className="text-[#4f5e7c]">
          For product purpose and scope, see{" "}
          <Link href="/about" className="underline decoration-[#80caff] underline-offset-2">
            About
          </Link>.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-[#4f5e7c] underline decoration-[#80caff] underline-offset-2">
            Back to Home
          </Link>
        </p>
      </section>
    </main>
  );
}
