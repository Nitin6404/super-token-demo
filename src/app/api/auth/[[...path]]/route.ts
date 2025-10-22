// src/app/api/auth/[[...path]]/route.ts
import { getAppDirRequestHandler } from "supertokens-node/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { ensureSuperTokensInit } from "@/app/config/backend";

ensureSuperTokensInit();

const handleCall = getAppDirRequestHandler(NextResponse);

export async function GET(req: NextRequest) {
  const res = await handleCall(req);
  if (!res.headers.has("Cache-Control")) {
    res.headers.set("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate");
  }
  return res;
}
export const POST = handleCall;
export const PUT = handleCall;
export const DELETE = handleCall;
export const PATCH = handleCall;
export const HEAD = handleCall;
