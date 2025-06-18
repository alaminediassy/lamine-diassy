import {NextRequest, NextResponse} from 'next/server';

const locales = ['fr', 'en'];
const defaultLocale = 'fr';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const pathnameHasLocale = locales.some((locale) =>
        pathname.startsWith(`/${locale}`)
    );

    // Si oui, on ne redirige pas
    if (pathnameHasLocale) return;

    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: ['/((?!_next|favicon.ico|api).*)'],
};
