import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Decision Lab",
  description:
    "Learn how Decision Lab handles user data and privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-4xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">Privacy Policy</h1>
        <p className="mb-6 text-sm text-[#6a7b9d]">Last updated: February 22, 2026</p>

        <p className="mb-6 text-[#4f5e7c]">
          Decision Lab is designed around data minimization. We collect and process only the information
          necessary to operate simulation features, monitor performance, and maintain service reliability.
          This policy explains what we process, why we process it, and what users should avoid submitting.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Information We Process</h2>
        <p className="mb-6 text-[#4f5e7c]">
          Decision Lab does not require account registration for core use. When users submit text into
          simulator inputs, that content may be processed to generate responses. Technical metadata such
          as request timing, error diagnostics, and basic usage analytics may also be collected to support
          uptime and quality improvements.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Purpose of Processing</h2>
        <p className="mb-6 text-[#4f5e7c]">
          We process information to deliver simulation outputs, debug incidents, prevent abuse, and
          improve the clarity and reliability of recommendations. We do not process user submissions for
          unrelated commercial profiling purposes.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Cookies and Analytics</h2>
        <p className="mb-6 text-[#4f5e7c]">
          Decision Lab may use cookies or similar technologies for essential functionality, analytics, and
          performance measurement. Where third-party analytics or advertising tools are used, those tools
          may collect pseudonymous interaction data under their own policies.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Third-Party Processing</h2>
        <p className="mb-6 text-[#4f5e7c]">
          Some simulation requests are handled by external model providers and infrastructure vendors.
          Those providers may process request content to deliver service responses. Their handling is
          governed by their own terms, security controls, and privacy commitments.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Data Retention and Security</h2>
        <p className="mb-6 text-[#4f5e7c]">
          We retain operational data only as long as reasonably necessary for service delivery, security,
          troubleshooting, and legal compliance. We use standard technical and organizational controls,
          but no internet transmission or storage system can be guaranteed as completely risk-free.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">User Guidance and Responsibility</h2>
        <p className="mb-6 text-[#4f5e7c]">
          Users should avoid submitting highly sensitive personal information, including government IDs,
          financial account credentials, detailed medical records, or confidential legal documents.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Policy Updates</h2>
        <p className="text-[#4f5e7c]">
          We may update this policy to reflect product, legal, or operational changes. Material updates
          will be posted on this page with a revised effective date.
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
