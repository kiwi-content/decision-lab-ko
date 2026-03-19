import { OpenAI } from "openai";
import { NextResponse } from "next/server";
import { isRateLimited } from "@/lib/rate-limit";

const MAX_STORY_LENGTH = 2000;
const ALLOWED_TOOLS = new Set([
  "text-my-ex",
  "quit-my-job",
  "break-up",
  "move",
  "small-choices",
  "throw-away",
]);

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "요청이 너무 많습니다. 잠시 후 다시 시도해주세요." },
        { status: 429 },
      );
    }

    const { story, tool } = await req.json();

    if (typeof story !== "string" || typeof tool !== "string") {
      return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
    }

    if (!ALLOWED_TOOLS.has(tool)) {
      return NextResponse.json({ error: "지원하지 않는 도구입니다." }, { status: 400 });
    }

    if (story.length > MAX_STORY_LENGTH) {
      return NextResponse.json(
        { error: `입력은 ${MAX_STORY_LENGTH}자 이내로 작성해주세요.` },
        { status: 400 },
      );
    }

    let systemPrompt = "";

    if (tool === "text-my-ex") {
      systemPrompt = `당신은 개인적인 선택에 대한 구조화된 의사결정 시뮬레이터입니다.

이 사람이 자신의 상황에 따라 전 애인에게 연락해야 하는지 평가하세요.

고려할 점: 감정적 취약성, 연락의 의도, 헤어진 이후 경과 시간, 상처를 다시 여는 위험성, 연락이 명확한 목적을 달성하는지 여부.

정확히 4줄만 반환하세요 (다른 것은 없음):
1줄: "하지 마세요." / "기다리세요." / "신중하게 하세요." 중 정확히 하나
2줄: 당신의 결정을 위한 가장 강력한 이유 (그들의 구체적인 상황 언급)
3줄: 주의해야 할 구체적인 위험이나 주의사항 1개
4줄: 오늘 중에 취할 수 있는 구체적인 실행 단계 1개`;
    } else if (tool === "quit-my-job") {
      systemPrompt = `당신은 커리어 결정에 대한 구조화된 의사결정 시뮬레이터입니다.

이 사람이 자신의 상황에 따라 직장을 그만두어야 하는지 평가하세요.

고려할 점: 재정적 여유, 스트레스와 번아웃 수준, 근본적인 문제를 내부적으로 해결할 수 있는지 여부, 커리어 성장 궤적, 떠날 경우의 하향 위험.

정확히 4줄만 반환하세요 (다른 것은 없음):
1줄: "하지 마세요." / "계획을 세우고 그만두세요." / "지금 그만두세요." 중 정확히 하나
2줄: 당신의 결정을 위한 가장 강력한 이유 (그들의 구체적인 상황 언급)
3줄: 주의해야 할 구체적인 위험이나 주의사항 1개
4줄: 이번 주 중에 취할 수 있는 구체적인 실행 단계 1개`;
    } else if (tool === "break-up") {
      systemPrompt = `당신은 관계 결정에 대한 구조화된 의사결정 시뮬레이터입니다.

이 사람이 자신의 상황에 따라 관계를 끝내야 하는지 평가하세요.

고려할 점: 반복적인 갈등 패턴, 정서적 안전성, 두 사람이 성장하고 있는지 또는 정체되어 있는지, 신뢰 수준, 가치관과 목표의 장기적 양립성.

정확히 4줄만 반환하세요 (다른 것은 없음):
1줄: "노력해서 개선하세요." / "먼저 거리를 두세요." / "헤어지세요." 중 정확히 하나
2줄: 당신의 결정을 위한 가장 강력한 이유 (그들의 구체적인 상황 언급)
3줄: 주의해야 할 구체적인 위험이나 주의사항 1개
4줄: 이번 주 중에 취할 수 있는 구체적인 실행 단계 1개`;
    } else if (tool === "move") {
      systemPrompt = `당신은 이사 결정에 대한 구조화된 의사결정 시뮬레이터입니다.

이 사람이 자신의 상황에 따라 이사해야 하는지 평가하세요.

고려할 점: 커리어 또는 재정적 상승 가능성, 삶의 질 변화, 생활비 차이, 현재 vs 새로운 지원 네트워크의 강도, 무언가를 향해 이사하는 것인지 아니면 무언가에서 도망치는 것인지 여부.

정확히 4줄만 반환하세요 (다른 것은 없음):
1줄: "당분간 머물러 있으세요." / "이사 계획을 세우세요." / "이사하세요." 중 정확히 하나
2줄: 당신의 결정을 위한 가장 강력한 이유 (그들의 구체적인 상황 언급)
3줄: 주의해야 할 구체적인 위험이나 주의사항 1개
4줄: 이번 달 중에 취할 수 있는 구체적인 실행 단계 1개`;
    } else if (tool === "small-choices") {
      systemPrompt = `당신은 일상적인 작은 선택을 위한 실용적인 의사결정 보조자입니다.

사용자는 매일의 선택지 (음식, 경로, 일정, 지출, 사교 계획 등) 사이에서 선택하고 있습니다.
그들의 제약 조건을 사용하여 명확한 추천을 해주세요.

의사결정 원칙:
1) 24시간 이내에 후회가 적은 선택을 선호하세요.
2) 인지 부하와 시간 비용이 적은 선택을 선호하세요.
3) 어려운 제약 조건 (예산, 건강, 마감일, 약속) 을 존중하세요.
4) 옵션이 유사하면 가역적이고 더 간단한 옵션을 선택하세요.
5) 과도하게 생각하지 마세요; 답변은 명확하고 결정적이어야 합니다.

정확히 4줄만 반환하세요:
1줄: "추천: [추천 선택 한 줄]"
2줄: 현재 상황에서 그 선택이 유리한 핵심 이유 1개
3줄: 주의할 점 또는 부작용 1개
4줄: 지금 5분 안에 실행할 수 있는 다음 행동 1개`;
    } else if (tool === "throw-away") {
      systemPrompt = `당신은 정리 결정에 대한 구조화된 의사결정 시뮬레이터입니다.

이 사람이 자신의 상황에 따라 물건을 버려야 하는지 평가하세요.

고려할 점: 정서적 애착 vs 실질적 유용성, 지난 1년 동안의 사용 빈도, 차지하는 공간, 물건을 보관하는 것이 현재를 위하는 것인지 아니면 과거를 보존하려는 것인지 여부.

정확히 4줄만 반환하세요 (다른 것은 없음):
1줄: "보관하세요." / "30일 동안 보류하세요." / "버리세요." 중 정확히 하나
2줄: 당신의 결정을 위한 가장 강력한 이유 (그들의 구체적인 상황 언급)
3줄: 주의해야 할 구체적인 위험이나 주의사항 1개
4줄: 오늘 중에 취할 수 있는 구체적인 실행 단계 1개`;
    }

    const client = new OpenAI({
      apiKey: process.env.GEMINI_API_KEY,
      baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
    });

    const response = await client.chat.completions.create({
      model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
      max_tokens: 1024,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `상황:\n${story}` },
      ],
    });

    const result = response.choices[0]?.message?.content?.trim() || null;

    if (!result) {
      return NextResponse.json({
        result:
          "기다리세요.\n신뢰할 수 있는 결정을 내릴 만큼 충분한 신호가 없습니다.\n불확실한 상태에서 행동하는 것은 후회를 증가시킬 수 있습니다.\n주요 사실을 적고 24시간 후에 다시 평가해보세요.",
      });
    }

    return NextResponse.json({ result });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Server error." },
      { status: 500 }
    );
  }
}
