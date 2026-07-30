import { NextResponse } from "next/server";
import { createServiceRequest, validateRequestInput } from "@/lib/data-store";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    if (body.company) {
      return NextResponse.json({ ok: true });
    }

    const input = validateRequestInput(body);
    const serviceRequest = await createServiceRequest(input);

    return NextResponse.json(
      { ok: true, request: serviceRequest },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Cererea nu a putut fi trimisa.",
      },
      { status: 400 },
    );
  }
}
