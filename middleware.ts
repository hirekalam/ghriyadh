import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  const canonicalHost = 'greenhouseriyadh.com';

  // Redirect to the canonical host in the production environment if the host doesn't match.
  if (process.env.VERCEL_ENV === 'production' && host && host !== canonicalHost) {
    const newUrl = new URL(request.url);
    newUrl.host = canonicalHost;
    return NextResponse.redirect(newUrl.toString(), 308); // 308 Permanent Redirect
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};