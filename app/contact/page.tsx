import Link from "next/link";

export const metadata = {
  title: "Contact | Decision Lab",
  description:
    "Contact Decision Lab for inquiries, feedback, or partnership requests.",
};

export default function ContactPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-4xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">Contact</h1>

        <p className="mb-4 text-[#4f5e7c]">
          We welcome product feedback, issue reports, editorial corrections, and
          partnership inquiries related to Decision Lab.
        </p>

        <p className="mb-6 text-[#4f5e7c]">
          Email: <span className="font-semibold text-[#1d2440]">decisionlab.platform@gmail.com</span>
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">How to Contact Us Effectively</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>Use a clear subject line (for example: Bug Report, Content Feedback, Partnership)</li>
          <li>Include relevant page URLs and screenshots when reporting product issues</li>
          <li>Describe expected behavior vs observed behavior for faster triage</li>
          <li>For partnerships, include scope, timeline, and preferred communication window</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Inquiry Categories</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>Product support and usability feedback</li>
          <li>Content quality suggestions and factual corrections</li>
          <li>Business development and strategic collaboration</li>
          <li>Press, research, and educational use inquiries</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Response Policy</h2>
        <p className="mb-4 text-[#4f5e7c]">
          Typical response time is 3 to 5 business days. Complex requests may require additional
          review time, especially when legal, policy, or product security context is involved.
        </p>
        <p className="text-sm text-[#6a7b9d]">
          To protect user privacy, please do not include highly sensitive personal information in email.
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
