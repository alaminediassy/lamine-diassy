import { NextRequest, NextResponse } from 'next/server';

const locales = ['fr', 'en'];
const defaultLocale = 'fr';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const pathnameHasLocale = locales.some((locale) =>
        pathname.startsWith(`/${locale}`)
    );

    // Redirect legacy routes to EIL-compliant routes
    if (pathnameHasLocale) {
        const [, lang, ...rest] = pathname.split('/');
        const subPath = rest.join('/');

        if (subPath === 'projects') {
            return NextResponse.redirect(new URL(`/${lang}/realisations`, request.url));
        }
        if (subPath === 'about') {
            return NextResponse.redirect(new URL(`/${lang}/presentation`, request.url));
        }
        return;
    }

    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: ['/((?!_next|favicon.ico|api).*)'],
};
