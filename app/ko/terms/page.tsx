import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관",
  description: "고민스탑 서비스 이용 조건과 책임 범위를 안내합니다.",
  alternates: {
    canonical: "/terms",
    languages: {
      "ko-KR": "/terms",
    },
  },
};

export default function KoreanTermsPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-4xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">이용약관</h1>
        <p className="mb-6 text-sm text-[#6a7b9d]">최종 업데이트: 2026-02-27</p>
        <p className="mb-4 text-[#4f5e7c]">
          본 약관은 고민스탑 웹 서비스 이용과 관련한 기본 권리, 의무, 책임사항을 규정합니다.
        </p>
        <p className="mb-8 text-[#4f5e7c]">
          서비스를 이용하는 경우 아래 조항에 동의한 것으로 간주됩니다.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">1. 서비스 성격</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>고민스탑은 참고용 의사결정 보조 서비스입니다.</li>
          <li>법률, 의료, 투자, 세무, 심리치료 자문을 제공하지 않습니다.</li>
          <li>최종 판단과 그 결과에 대한 책임은 사용자에게 있습니다.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">2. 이용자의 의무</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>타인의 개인정보, 명예를 침해하는 내용을 입력하지 않아야 합니다.</li>
          <li>불법 목적, 사기, 협박, 혐오 표현 생성 목적의 사용을 금지합니다.</li>
          <li>서비스 안정성을 해치는 자동화 남용, 비정상 요청을 금지합니다.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">3. 제한 및 중단</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>점검, 장애, 보안 이슈 발생 시 서비스가 일시 중단될 수 있습니다.</li>
          <li>약관 위반 행위가 확인되면 일부 기능 이용이 제한될 수 있습니다.</li>
          <li>반복 위반 시 사전 통지 후 접속 차단 조치가 가능할 수 있습니다.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">4. 책임 제한</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>입력 정보의 정확성, 최신성, 완전성은 사용자 책임입니다.</li>
          <li>서비스 결과를 근거로 한 의사결정 손실에 대해 운영자는 직접 책임을 지지 않습니다.</li>
          <li>천재지변, 통신장애, 외부 시스템 장애로 인한 손해는 책임 범위에서 제외됩니다.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">5. 지식재산권</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>서비스 UI, 텍스트, 구조, 로고 등은 운영자 또는 정당한 권리자에게 권리가 있습니다.</li>
          <li>사전 동의 없는 무단 복제, 배포, 2차 활용은 제한될 수 있습니다.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">6. 약관 변경</h2>
        <p className="mb-8 text-[#4f5e7c]">
          약관은 관련 법령 및 서비스 정책 변경에 따라 개정될 수 있습니다. 중요한 변경 시 사이트 내 공지 또는
          합리적인 방식으로 사전 안내합니다.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">7. 문의처</h2>
        <p className="mb-8 text-[#4f5e7c]">
          이용약관 관련 문의: <span className="font-semibold">decisionlab.platform@gmail.com</span>
        </p>

        <Link href="/" className="text-[#4f5e7c] underline decoration-[#80caff] underline-offset-2">
          홈으로 돌아가기
        </Link>
      </section>
    </main>
  );
}
