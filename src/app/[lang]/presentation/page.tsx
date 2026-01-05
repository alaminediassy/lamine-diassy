// src/app/[lang]/presentation/page.tsx
import { Container } from '@/components/Container'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { Prose } from '@/components/ui/Prose'

export default async function PresentationPage({
    params,
}: {
    params: Promise<{ lang: 'fr' | 'en' }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return (
        <Container className="mt-16 sm:mt-32">
            <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-soft sm:text-5xl">
                    {dict.about.title}
                </h1>
                <p className="mt-6 text-base text-soft-light">
                    {dict.about.intro}
                </p>
            </div>
            <div className="mt-16 sm:mt-20">
                <Prose>
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold text-soft">Mon Projet Professionnel</h2>
                            <p className="mt-4">{dict.about.full}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-soft">Mes Valeurs</h2>
                            <p className="mt-4">{dict.about.description}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-soft">Qualités Humaines & Intérêts</h2>
                            <p className="mt-4">{dict.about.background}</p>
                        </section>
                    </div>
                </Prose>
            </div>
        </Container>
    )
}
