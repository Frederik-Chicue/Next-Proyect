export const loadMessages = async (locale: string) => {
  const messages = {
    home: (await import(`@/../messages/${locale}/home.json`)).default,
    auth: (await import(`@/../messages/${locale}/auth.json`)).default,
    dashboard: (await import(`@/../messages/${locale}/dashboard.json`)).default,
    notfound: (await import(`@/../messages/${locale}/notfound.json`)).default,
  };

  return messages;
};
