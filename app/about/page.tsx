import Link from "next/link";

export const metadata = {
  title: "About Decision Lab",
  description:
    "Decision Lab is an AI-powered decision simulation platform focused on structured risk analysis and rational clarity before major life decisions.",
};

export default function AboutPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-4xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">About Decision Lab</h1>

        <p className="mb-4 text-[#4f5e7c]">
          Decision Lab is a structured decision-support platform designed for everyday high-impact
          choices. Our purpose is to help users reduce avoidable regret by evaluating trade-offs
          before they act. We emphasize clarity, practical reasoning, and decision accountability.
        </p>

        <p className="mb-8 text-[#4f5e7c]">
          We do not position ourselves as an authority over personal life outcomes. Instead, we
          provide a framework that helps people organize uncertain information, separate short-term
          emotional urgency from long-term priorities, and choose a direction with stronger internal
          consistency.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Mission and Product Philosophy</h2>
        <p className="mb-4 text-[#4f5e7c]">
          Our mission is to make sound decision structure accessible to people who are navigating
          emotionally difficult situations. Most critical decisions are made under time pressure,
          incomplete information, and mental overload. In that context, clarity rarely comes from
          more opinions. It comes from better framing.
        </p>
        <p className="mb-8 text-[#4f5e7c]">
          Decision Lab applies that principle by prioritizing clear variables over vague reassurance.
          We focus on consequences, reversibility, risk exposure, and strategic timing. The output is
          intentionally concise so users can understand the recommendation quickly and make their own
          final judgment.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Where Decision Lab Adds Value</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>Converting emotional ambiguity into concrete decision factors</li>
          <li>Comparing short-term relief against long-term outcome quality</li>
          <li>Highlighting hidden costs and irreversible downside</li>
          <li>Improving user confidence through explicit trade-off visibility</li>
          <li>Encouraging deliberate action rather than impulsive reaction</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Scope and Boundaries</h2>
        <p className="mb-4 text-[#4f5e7c]">
          Decision Lab provides informational simulations only. It is not a substitute for licensed
          legal counsel, medical care, mental health treatment, or financial advisory services.
          Decisions with significant safety, health, legal, or fiduciary implications should be reviewed
          with qualified professionals.
        </p>
        <p className="mb-8 text-[#4f5e7c]">
          Users remain responsible for their own decisions and outcomes. Our role is to support clearer
          thinking, not to remove personal agency.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Long-Term Direction</h2>
        <p className="mb-8 text-[#4f5e7c]">
          We are building a durable library of domain-specific decision tools across relationships,
          career transitions, relocation, and personal life operations. Over time, we aim to improve
          consistency, clarity, and reliability through stronger methodology, better scenario coverage,
          and continuously refined guidance quality.
        </p>

        <p className="text-[#4f5e7c]">
          For implementation details and evaluation logic, see{" "}
          <Link href="/methodology" className="underline decoration-[#80caff] underline-offset-2">
            Methodology
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
