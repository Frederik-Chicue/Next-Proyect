import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';


const intlMiddleware = createMiddleware({
    ...routing,
    localePrefix: 'always',
});

export default function middleware(request: NextRequest) {
    console.log('Pruebas:', request.nextUrl.pathname); 
    return intlMiddleware(request);
}

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
