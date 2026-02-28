import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "고민스탑 소개",
  description: "고민스탑이 어떤 고민을 어떻게 도와주는지 소개합니다.",
  alternates: {
    canonical: "/about",
    languages: {
      "ko-KR": "/about",
    },
  },
};

export default function KoreanAboutPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-4xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">고민스탑 소개</h1>
        <p className="mb-2 text-[#5d92d8]">인생은 결정의 연속입니다.</p>
        <p className="mb-2 text-[#7d68cc]">사르트르가 말했다죠.</p>
        <p className="mb-6 text-[#4f5e7c]">
          &quot;인생은 B(Birth)와 D(Death)사이에서 하는 C(Choice)이다.&quot;
        </p>

        <p className="mb-2 text-[#4f5e7c]">
          매일 사소한 고민에 빠져 매일을 보내던 기획자가 본인을 위해 개발한 특별한 서비스입니다.
        </p>
        <p className="mb-2 text-[#4f5e7c]">좌회전을 할지, 우회전을 할지.</p>
        <p className="mb-2 text-[#4f5e7c]">짜장면을 시킬지, 짬뽕을 시킬지.</p>
        <p className="mb-2 text-[#4f5e7c]">3414번 버스를 탈지, 340번 버스가 좋을지.</p>
        <p className="mb-6 text-[#4f5e7c]">카드로 결제할지, 현금으로 결제할지.</p>

        <p className="mb-2 text-[#b04f7f]">
          멀리서 보면 별거 아니지만 당사자에게는 꽤나 심각한 고민의 순간.
        </p>
        <p className="mb-6 text-[#2a9f76]">누군가 대신 결정을 해주면 좋겠다고 생각했습니다.</p>

        <p className="mb-2 text-[#1d2440]">
          저와 같은 결정 느림보를 위해 &apos;고민스탑&apos;가 탄생했습니다.
        </p>
        <p className="mb-8 text-[#c46a2b]">작은 결정이 인생을 한번에 바꿔놓을 수도 있음을 믿습니다.</p>
        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">범위와 한계</h2>
        <p className="mb-8 text-[#4f5e7c]">
          고민스탑은 참고용 판단 보조 도구이며, 법률·의료·재무·정신건강 분야의 전문 자문을 대체하지 않습니다.
        </p>
        <p className="text-[#4f5e7c]">
          자세한 판단 로직은{" "}
          <Link href="/methodology" className="underline decoration-[#80caff] underline-offset-2">
            방법론
          </Link>
          에서 확인할 수 있습니다.
        </p>
      </section>
    </main>
  );
}
