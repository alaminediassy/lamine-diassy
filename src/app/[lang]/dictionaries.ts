// app/[lang]/dictionaries.ts
import 'server-only';

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((m) => m.default),
    fr: () => import('./dictionaries/fr.json').then((m) => m.default),
};

export const getDictionary = async (locale: 'en' | 'fr') =>
    dictionaries[locale]();
