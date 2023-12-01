import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const searchParams = request.nextUrl.searchParams;
  if (searchParams.has("no-rewrite")) {
    return NextResponse.next();
  }
  console.log("==> path", path);
  const url = `${request.nextUrl.origin}/se${request.nextUrl.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_vercel|bff|_next|admin|login|logout|.*\\..*).*)"],
};