import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "문의하기",
  description: "고민스탑 관련 문의, 제휴, 피드백을 보내주세요.",
  alternates: {
    canonical: "/ko/contact",
    languages: {
      "ko-KR": "/ko/contact",
    },
  },
};

export default function KoreanContactPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-3xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">문의하기</h1>
        <p className="mb-6 text-sm text-[#6a7b9d]">최종 업데이트: 2026-02-27</p>
        <p className="mb-4 text-[#4f5e7c]">
          고민스탑은 문의를 카테고리별로 분류해 처리합니다. 아래 가이드에 맞춰 보내주시면 응답 속도가
          훨씬 빨라집니다.
        </p>
        <p className="mb-8 text-[#4f5e7c]">
          이메일: <span className="font-semibold">decisionlab.platform@gmail.com</span>
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">문의 유형</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>오류 제보: 페이지가 깨지거나 결과 생성이 실패하는 경우</li>
          <li>콘텐츠 제안: 카테고리 추가, 문구 개선, 잘못된 사례 수정</li>
          <li>제휴/협업: 브랜드 협업, 캠페인, 교육/워크숍 활용 제안</li>
          <li>정책 문의: 개인정보 처리, 이용약관, 데이터 삭제 요청</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">빠른 처리용 템플릿</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>제목 예시: [오류제보] /ko/text-my-ex 결과가 생성되지 않음</li>
          <li>필수 정보: 접속 URL, 발생 시각, 사용 기기(모바일/PC), 브라우저 종류</li>
          <li>재현 단계: 무엇을 입력했고 어떤 버튼을 눌렀는지 순서대로 작성</li>
          <li>기대 결과 vs 실제 결과: 원래 기대한 동작과 실제 화면 차이를 명확히 작성</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">응답 정책</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>일반 문의: 영업일 기준 2~5일 내 1차 회신</li>
          <li>오류/보안 관련: 우선순위 상향 후 가능한 빠르게 확인</li>
          <li>제휴 문의: 내부 검토 후 별도 일정 안내</li>
          <li>반복/비속어/광고성 메일은 답변이 제한될 수 있음</li>
        </ul>

        <p className="mb-8 text-sm text-[#6a7b9d]">
          개인정보(주민번호, 계좌번호, 의료정보 등)는 메일 본문에 포함하지 마세요.
        </p>

        <Link href="/ko" className="text-[#4f5e7c] underline decoration-[#80caff] underline-offset-2">
          홈으로 돌아가기
        </Link>
      </section>
    </main>
  );
}
