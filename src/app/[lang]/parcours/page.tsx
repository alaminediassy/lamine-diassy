// src/app/[lang]/parcours/page.tsx
import { getDictionary } from '@/lib/i18n/dictionaries'
import { SimpleLayout } from '@/components/experiences/SimpleLayout'
import { Timeline } from '@/components/parcours/Timeline'

export default async function ParcoursPage({
    params,
}: {
    params: Promise<{ lang: 'fr' | 'en' }>
}) {
    const { lang } = await params
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
