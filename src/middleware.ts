import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Only apply to /admin and subpaths, but exclude /admin/login
  if (req.nextUrl.pathname.startsWith('/admin') && req.nextUrl.pathname !== '/admin/login') {
    const authCookie = req.cookies.get('admin_auth')?.value;

    if (authCookie === 'true') {
      return NextResponse.next();
    }
    
    // Redirect to the custom login page
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
