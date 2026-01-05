// src/app/[lang]/realisations/page.tsx
import { getDictionary } from '@/lib/i18n/dictionaries'
import { RealisationCard } from '@/components/realisations/RealisationCard'
import { SimpleLayout } from '@/components/experiences/SimpleLayout'

export default async function RealisationsPage({
    params,
}: {
    params: Promise<{ lang: 'fr' | 'en' }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return (
        <SimpleLayout
            title={dict.realisations.title}
            intro="Découvrez mes principales réalisations professionnelles et académiques, analysées sous l'angle de l'ingénierie logicielle."
        >
            <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {dict.realisations.index.map((realisation) => (
                    <RealisationCard key={realisation.slug} realisation={realisation} lang={lang} />
                ))}
            </ul>
        </SimpleLayout>
    )
}
