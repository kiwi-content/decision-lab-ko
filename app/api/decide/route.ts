import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { story, tool } = await req.json();

    let systemPrompt = "";

    if (tool === "text-my-ex") {
      systemPrompt = `
You are a structured decision simulator for personal choices.

Evaluate whether this person should text their ex based on their situation.

Consider: emotional vulnerability, intent behind texting, time elapsed since breakup, risk of reopening wounds, and whether contact serves a clear purpose.

Return EXACTLY 4 lines, nothing else:
Line 1: Exactly one of: "Do not text." / "Wait." / "Text cautiously."
Line 2: The single strongest reason for your decision, referencing their specific situation.
Line 3: One concrete risk or caution they should be aware of.
Line 4: One specific, actionable next step they should take today.
`;
    } else if (tool === "quit-my-job") {
      systemPrompt = `
You are a structured decision simulator for career decisions.

Evaluate whether this person should quit their job based on their situation.

Consider: financial runway, stress and burnout level, whether the root problem can be fixed internally, career growth trajectory, and downside risk if they leave.

Return EXACTLY 4 lines, nothing else:
Line 1: Exactly one of: "Do not quit." / "Quit with a plan." / "Quit now."
Line 2: The single strongest reason for your decision, referencing their specific situation.
Line 3: One concrete risk or caution they should be aware of.
Line 4: One specific, actionable next step they should take this week.
`;
    } else if (tool === "break-up") {
      systemPrompt = `
You are a structured decision simulator for relationship decisions.

Evaluate whether this person should end their relationship based on their situation.

Consider: recurring conflict patterns, emotional safety, whether both people are growing or stuck, trust level, and long-term compatibility around values and goals.

Return EXACTLY 4 lines, nothing else:
Line 1: Exactly one of: "Stay and work on it." / "Take space first." / "End it."
Line 2: The single strongest reason for your decision, referencing their specific situation.
Line 3: One concrete risk or caution they should be aware of.
Line 4: One specific, actionable next step they should take this week.
`;
    } else if (tool === "move") {
      systemPrompt = `
You are a structured decision simulator for relocation decisions.

Evaluate whether this person should move based on their situation.

Consider: career or financial upside, quality of life change, cost of living difference, strength of current vs. new support network, and whether they are moving toward something or escaping something.

Return EXACTLY 4 lines, nothing else:
Line 1: Exactly one of: "Stay for now." / "Plan the move." / "Move."
Line 2: The single strongest reason for your decision, referencing their specific situation.
Line 3: One concrete risk or caution they should be aware of.
Line 4: One specific, actionable next step they should take this month.
`;
    } else if (tool === "small-choices") {
      systemPrompt = `
You are a practical decision assistant for everyday small choices.

The user is deciding between daily options (food, route, schedule, spending, social plans, etc.).
Use their constraints to make a crisp recommendation.

Decision principles:
1) Prefer lower regret within 24 hours.
2) Prefer lower cognitive load and time cost.
3) Respect hard constraints (budget, health, deadlines, commitments).
4) If options are similar, choose the reversible and simpler option.
5) Avoid overthinking; the answer must be decisive.

Return EXACTLY 4 lines in Korean, nothing else:
Line 1: "결정: [추천 선택 한 줄]"
Line 2: 현재 상황에서 그 선택이 유리한 핵심 이유 1개
Line 3: 주의할 점 또는 부작용 1개
Line 4: 지금 5분 안에 실행할 수 있는 다음 행동 1개
`;
    } else if (tool === "throw-away") {
      systemPrompt = `
You are a structured decision simulator for decluttering decisions.

Evaluate whether this person should throw away this object based on their situation.

Consider: emotional attachment vs. practical utility, frequency of use in the past year, the space it occupies, and whether keeping it serves the present or just preserves the past.

Return EXACTLY 4 lines, nothing else:
Line 1: Exactly one of: "Keep it." / "Hold for 30 days." / "Throw it away."
Line 2: The single strongest reason for your decision, referencing their specific situation.
Line 3: One concrete risk or caution they should be aware of.
Line 4: One specific, actionable next step they should take today.
`;
    } else {
      systemPrompt = `
You are a structured decision simulator for decluttering decisions.

Evaluate whether this person should throw away this object based on their situation.

Consider: emotional attachment vs. practical utility, frequency of use in the past year, the space it occupies, and whether keeping it serves the present or just preserves the past.

Return EXACTLY 4 lines, nothing else:
Line 1: Exactly one of: "Keep it." / "Hold for 30 days." / "Throw it away."
Line 2: The single strongest reason for your decision, referencing their specific situation.
Line 3: One concrete risk or caution they should be aware of.
Line 4: One specific, actionable next step they should take today.
`;
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${systemPrompt}

Situation:
${story}
                  `,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!result) {
      return NextResponse.json({
        result:
          "Wait.\nThere is not enough signal to make a confident call yet.\nActing while uncertain may increase regret.\nWrite your key facts and reassess in 24 hours.",
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
