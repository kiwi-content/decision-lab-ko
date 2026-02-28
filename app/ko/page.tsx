import type { Metadata } from "next";
import Link from "next/link";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "고민스탑 | 결정 느림보를 위한 속시원한 결정 대행 서비스",
  description: "결정 느림보들을 위해, 고민 길어지기 전에 대신 정리하고 방향을 잡아드립니다.",
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/",
    },
  },
};

export default function KoreanHome() {
  const siteUrl = getSiteUrl();
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "고민스탑",
    url: `${siteUrl}`,
    inLanguage: "ko-KR",
    description: "결정 느림보를 위한 속시원한 결정 대행 서비스",
  };

  const 고민사연들 = [
    {
      title: "짜장면이냐 짬뽕이냐",
      story: "점심시간 20분 남았고 오후에 회의가 2개 있어요. 배는 고픈데 속이 예민한 날입니다.",
      reply: "오늘은 짜장면. 오후 일정이 빡빡하면 자극적인 메뉴보다 무난한 선택이 후회가 적어요.",
    },
    {
      title: "강릉여행이냐 부산여행이냐",
      story: "주말 1박 2일, 운전은 가능하지만 피로가 누적된 상태예요. 목표는 '많이 보기'보다 '제대로 쉬기'.",
      reply: "이번엔 강릉. 이동 부담이 덜한 쪽으로 가서 체력 회복에 집중하는 게 만족도가 높아요.",
    },
    {
      title: "지금 연락할까, 하루 더 기다릴까",
      story: "어제 다툰 뒤 하루 종일 마음이 불안해서 메시지를 보냈다가 지웠다를 반복하고 있어요.",
      reply: "하루 더 기다리기. 감정이 가라앉은 뒤에 보내는 한 문장이 관계를 훨씬 덜 망가뜨립니다.",
    },
    {
      title: "이직 도전할까, 지금 회사에 남을까",
      story: "현 직무는 익숙하지만 성장 정체가 느껴져요. 다만 생활비로 최소 4개월 안정성이 필요합니다.",
      reply: "바로 퇴사보다 이직 준비 먼저. 재정 안전판을 확보한 뒤 움직이는 게 리스크를 크게 줄여요.",
    },
    {
      title: "퇴근 후 운동 갈까, 바로 집 갈까",
      story: "이번 주에 이미 야근 3번 했고 수면이 부족해요. 그래도 루틴을 끊기긴 싫습니다.",
      reply: "오늘은 집으로. 대신 15분 스트레칭으로 루틴만 유지하면 회복과 지속성 둘 다 챙길 수 있어요.",
    },
    {
      title: "이거 버릴까, 계속 둘까",
      story: "1년 넘게 안 쓴 물건인데 볼 때마다 아깝다는 생각 때문에 정리를 못 하고 있어요.",
      reply: "이번 주 안에 정리. 사용하지 않는 물건의 보관 비용이 아까움보다 더 커지는 시점이에요.",
    },
  ];

  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <section className="panel-shell mx-auto max-w-6xl bg-[#fffff5] px-6 py-7 sm:px-10 sm:py-10">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <p className="rounded-full border border-[#80caff] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5884c8]">
            고민스탑
          </p>
          <p className="rounded-full border border-[#ffd36b] bg-[#fff4cc] px-3 py-1 text-[11px] font-bold text-[#8a5b00]">
            LIVE
          </p>
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#6a89c4] sm:text-sm">
            <Link href="/" className="rounded-full border border-[#80caff] bg-white px-4 py-2 hover:bg-[#f3f9ff]">
              홈
            </Link>
            <Link href="#simulators" className="rounded-full border border-[#80caff] bg-white px-4 py-2 hover:bg-[#f3f9ff]">
              시뮬레이터
            </Link>
            <Link href="/methodology" className="rounded-full border border-[#80caff] bg-white px-4 py-2 hover:bg-[#f3f9ff]">
              방법론
            </Link>
          </nav>
        </header>

        <div className="relative mb-8 fade-in-up">
          <span className="sparkle right-8 top-2 hidden sm:block" />
          <span className="sparkle left-52 top-14 hidden sm:block" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#5d92d8]">
            결정 느림보들을 위해
          </p>
          <h1 className="display-font text-5xl font-extrabold uppercase leading-[0.92] text-[#1d2440] sm:text-7xl lg:text-8xl">
            대신
            <br />
            결정해 드립니다.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#4f5e7c] sm:text-xl">
            &quot;짜장면이냐 짬뽕이냐&quot;, &quot;강릉여행이냐 부산여행이냐&quot;처럼 살다 보면 계속 생기는 고민들.
            무엇을 선택해야 할지 막막할 때, 대신 선택해 드려요.
          </p>
        </div>

        <div id="simulators" className="grid gap-5 md:grid-cols-2 scroll-mt-20">
          <Link href="/text-my-ex" className="card-pop fade-in-up bg-[#f893e1]/30 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#7d68cc]">연애</p>
            <h2 className="display-font text-4xl font-bold leading-tight text-[#1d2440]">전 애인에게 연락해도 될까?</h2>
          </Link>
          <Link href="/quit-my-job" className="card-pop fade-in-up bg-[#80caff]/30 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#5d92d8]">커리어</p>
            <h2 className="display-font text-4xl font-bold leading-tight text-[#1d2440]">퇴사해도 될까?</h2>
          </Link>
          <Link href="/break-up" className="card-pop fade-in-up bg-[#a180ff]/24 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#6d59be]">연애</p>
            <h2 className="display-font text-4xl font-bold leading-tight text-[#1d2440]">이 관계, 끝내는 게 맞을까?</h2>
          </Link>
          <Link href="/move" className="card-pop fade-in-up bg-[#91e5b3]/28 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#2a9f76]">이사</p>
            <h2 className="display-font text-4xl font-bold leading-tight text-[#1d2440]">지금 이사하는 게 맞을까?</h2>
          </Link>
        </div>

        <div className="mt-5">
          <div className="grid gap-5 md:grid-cols-2">
            <Link href="/throw-away" className="card-pop fade-in-up block bg-[#ffe878]/42 p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#b28b00]">정리</p>
              <h2 className="display-font text-4xl font-bold text-[#1d2440]">이거 버려도 될까?</h2>
            </Link>
            <Link href="/small-choices" className="card-pop fade-in-up block bg-[#ffc7a3]/40 p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#c46a2b]">일상 결정</p>
              <h2 className="display-font text-4xl font-bold text-[#1d2440]">오늘은 뭘 고를까?</h2>
            </Link>
          </div>
        </div>

        <section className="relative mt-8 rounded-3xl border border-[#80caff]/50 bg-white/80 p-5 sm:p-7">
          <span className="ribbon-tag">NEW STORIES</span>
          <h2 className="display-font mb-1 text-4xl font-extrabold text-[#1d2440] sm:text-6xl">
            그래! 결심했어
          </h2>
          <p className="mb-4 text-sm font-semibold text-[#5d92d8]">이런 사연들, 이렇게 대신 정리해드려요</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {고민사연들.map((item) => (
              <div
                key={item.title}
                className="relative rounded-2xl border border-[#cfe6ff] bg-[#f7fbff] px-4 py-4 text-sm text-[#2f4368] shadow-sm"
              >
                <span className="sparkle right-3 top-3 h-3 w-3" />
                <span className="absolute -top-2 left-4 h-3 w-3 rotate-45 border-l border-t border-[#cfe6ff] bg-[#f7fbff]" />
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#5d92d8]">{item.title}</p>
                <p className="mb-3 leading-relaxed text-[#3f5478]">&ldquo;{item.story}&rdquo;</p>
                <div className="rounded-xl border border-[#b8f0cd] bg-[#eefff4] px-3 py-2 text-xs leading-relaxed text-[#1f6d4f]">
                  <span className="font-semibold">예시 응답:</span> {item.reply}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-10 border-t border-[#80caff]/50 pt-5 text-xs text-[#6a89c4] sm:text-sm">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/about" className="underline decoration-[#80caff] underline-offset-2">소개</Link>
            <Link href="/methodology" className="underline decoration-[#80caff] underline-offset-2">방법론</Link>
            <Link href="/contact" className="underline decoration-[#80caff] underline-offset-2">문의</Link>
            <Link href="/privacy" className="underline decoration-[#80caff] underline-offset-2">개인정보처리방침</Link>
            <Link href="/terms" className="underline decoration-[#80caff] underline-offset-2">이용약관</Link>
          </div>
        </footer>
      </section>
    </main>
  );
}
