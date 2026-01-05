// src/lib/i18n/dictionaries.ts
import 'server-only';
import { Dictionary } from '@/types/content';

const dictionaries: Record<string, () => Promise<Dictionary>> = {
    en: () => import('@/app/[lang]/dictionaries/en.json').then((m) => m.default as unknown as Dictionary),
    fr: () => import('@/app/[lang]/dictionaries/fr.json').then((m) => m.default as unknown as Dictionary),
};

export const getDictionary = async (locale: 'en' | 'fr'): Promise<Dictionary> => {
    if (!dictionaries[locale]) {
        return dictionaries['fr'](); // Fallback to French
    }
    return dictionaries[locale]();
};
