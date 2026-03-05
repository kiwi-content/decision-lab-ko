import { NextResponse } from "next/server";

const ALLOWED_STEPS = new Set(["card_click", "input_complete", "result_reached"]);

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    if (
      !payload ||
      typeof payload !== "object" ||
      !ALLOWED_STEPS.has(payload.step) ||
      typeof payload.tool !== "string" ||
      typeof payload.source !== "string" ||
      typeof payload.sessionId !== "string"
    ) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    // Temporary sink: can be replaced with a warehouse/webhook integration.
    console.info("[funnel]", JSON.stringify({
      step: payload.step,
      tool: payload.tool,
      source: payload.source,
      sessionId: payload.sessionId,
      path: payload.path,
      ts: payload.ts,
      receivedAt: new Date().toISOString(),
    }));

    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}

