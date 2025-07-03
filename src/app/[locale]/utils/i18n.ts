export function getLocalizedPath(pathname: string, newLocale: string): string {
    const segments = pathname.split('/');
    if (segments.length > 1) {
        segments[1] = newLocale;
    } else {
        segments.push(newLocale);
    }
    return segments.join('/');
}
