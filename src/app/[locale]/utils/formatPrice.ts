export const formatPrice = (usdValue: number, lang: string) => {
    const currencyMap: Record<string, string> = {
        es: "COP",
        en: "USD",
        fr: "EUR",
        de: "EUR",
    };

    const exchangeRates: Record<string, number> = {
        COP: 3900,
        EUR: 0.93,
        USD: 1,
    };

    const currency = currencyMap[lang] ?? "USD";
    const rate = exchangeRates[currency] ?? 1;
    const convertedValue = usdValue * rate;

    const formatted = new Intl.NumberFormat(lang, {
        style: "currency",
        currency,
        minimumFractionDigits: currency === "COP" ? 0 : 2,
        currencyDisplay: "code",
    }).format(convertedValue);

    return formatted;
};
