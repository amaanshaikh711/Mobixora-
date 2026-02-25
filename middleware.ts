import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/cart(.*)",
  "/checkout(.*)",
  "/orders(.*)",
]);

const isAdminRoute = (req: NextRequest) => req.nextUrl.pathname.startsWith("/admin");
const isLoginRoute = (req: NextRequest) => req.nextUrl.pathname === "/admin/login";

export default clerkMiddleware(async (auth, req) => {
  // Handle Clerk protected routes first
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  // Handle custom admin routes
  if (isAdminRoute(req) && !isLoginRoute(req)) {
    const session = req.cookies.get("admin_session")?.value;
    if (!session) {
      const loginUrl = new URL("/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Redirect from login if already logged in
  if (isLoginRoute(req)) {
    const session = req.cookies.get("admin_session")?.value;
    if (session) {
      const dashboardUrl = new URL("/admin/dashboard", req.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
