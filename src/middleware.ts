import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = pathname === '/';

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        return NextResponse.redirect(
            new URL('/en/us', request.url)
        );
    }

    // Protect admin routes
    if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
        const session = request.cookies.get('session')?.value;
        if (!session) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|favicon.ico).*)',
    ],
};
