// src/app/[lang]/parcours/page.tsx
import { getDictionary } from '@/lib/i18n/dictionaries'
import { SimpleLayout } from '@/components/experiences/SimpleLayout'
import { Timeline } from '@/components/parcours/Timeline'

export default async function ExperiencePage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = (await params) as { lang: 'fr' | 'en' }
    const dict = await getDictionary(lang)

    return (
        <SimpleLayout
            title={dict.navbar.parcours}
            intro="Mon parcours académique et professionnel, une progression vers l'expertise en ingénierie logicielle."
        >
            <Timeline dict={dict} />
        </SimpleLayout>
    )
}
