import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken");
  const userData = req.cookies.get("userData");

  if (!token || !userData) {
    return NextResponse.redirect(new URL("/acesso-negado?message=Você+precisa+fazer+login", req.url));
  }

  const user = JSON.parse(userData.value);
  if (!user.admin) {
    return NextResponse.redirect(new URL("/acesso-negado?message=Acesso+negado", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin"],
};
