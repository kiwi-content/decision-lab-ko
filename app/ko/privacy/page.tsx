import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://decisionlab.vercel.app";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "고민해우소 서비스 이용 시 개인정보 처리 기준을 안내합니다.",
  alternates: {
    canonical: `${BASE_URL}/ko/privacy`,
    languages: {
      "ko-KR": `${BASE_URL}/ko/privacy`,
      "en-US": `${BASE_URL}/privacy`,
    },
  },
};

export default function KoreanPrivacyPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-4xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">개인정보처리방침</h1>
        <p className="mb-6 text-sm text-[#6a7b9d]">최종 업데이트: 2026-02-27</p>
        <p className="mb-4 text-[#4f5e7c]">
          고민해우소는 개인정보를 수집하는 서비스가 아닙니다.
        </p>
        <p className="mb-8 text-[#4f5e7c]">
          회원가입, 로그인, 프로필 생성, 뉴스레터 구독, 마케팅 목적의 개인정보 수집 기능을 제공하지 않습니다.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">1. 개인정보 수집 여부</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>이름, 휴대폰 번호, 주민등록번호, 계좌번호 등 개인정보를 직접 수집하지 않습니다.</li>
          <li>서비스 입력창에 작성한 고민 내용은 답변 생성 목적에서만 일시 처리되며 별도 회원 DB로 보관하지 않습니다.</li>
          <li>사용자는 민감정보를 입력하지 않아야 하며, 입력 시 스스로 공개에 동의한 것으로 간주될 수 있습니다.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">2. 자동 생성 정보(기술 로그)</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>호스팅/보안 인프라 특성상 접속 시각, 브라우저 정보, IP 등 기술 로그가 자동 생성될 수 있습니다.</li>
          <li>해당 로그는 서비스 안정화, 장애 대응, 보안 점검 목적에서만 사용됩니다.</li>
          <li>운영자는 이 로그를 개인 식별이나 마케팅 목적으로 사용하지 않습니다.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">3. 제3자 제공</h2>
        <p className="mb-8 text-[#4f5e7c]">
          운영자는 개인정보를 판매하거나 임의로 외부 제공하지 않습니다. 다만 법령에 따른 제출 의무가 발생한
          경우에 한해 최소 범위 내에서 제공될 수 있습니다.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">4. 쿠키 및 추적</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>개인 맞춤 광고를 위한 추적 쿠키를 운영자 측에서 별도 설정하지 않습니다.</li>
          <li>브라우저/인프라에서 발생하는 기본 쿠키가 있을 수 있으나 개인 프로파일링 목적으로 사용하지 않습니다.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">5. 문의 메일 처리</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>사용자가 이메일로 문의한 경우, 답변을 위해 필요한 범위에서 메일 내용이 처리됩니다.</li>
          <li>문의 내용에 민감정보를 포함하지 않도록 주의해 주세요.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">6. 문의처</h2>
        <p className="mb-8 text-[#4f5e7c]">
          개인정보 처리 관련 문의 및 권리 행사 요청: <span className="font-semibold">decisionlab.platform@gmail.com</span>
        </p>

        <Link href="/ko" className="text-[#4f5e7c] underline decoration-[#80caff] underline-offset-2">
          홈으로 돌아가기
        </Link>
      </section>
    </main>
  );
}
