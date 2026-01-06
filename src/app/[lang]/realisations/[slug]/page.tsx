// src/app/[lang]/realisations/[slug]/page.tsx
import { Container } from '@/components/Container'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { Prose } from '@/components/ui/Prose'
import { notFound } from 'next/navigation'
import { Section } from '@/components/experiences/Section'
import { SkillCard } from '@/components/skills/SkillCard'

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>
}) {
    const { lang } = (await params) as { lang: 'fr' | 'en' }
    const { slug } = await params
    const dict = await getDictionary(lang)
    const realisation = dict.realisations.items[slug]

    if (!realisation) {
        notFound()
    }

    const relatedSkills = realisation.relatedSkills
        .map(s => dict.skills.index.find(skill => skill.slug === s))
        .filter((skill): skill is NonNullable<typeof skill> => !!skill)

    return (
        <Container className="mt-16 sm:mt-32">
            <div className="max-w-3xl">
                <header>
                    <h1 className="text-4xl font-bold tracking-tight text-soft sm:text-5xl">
                        {realisation.title}
                    </h1>
                    <p className="mt-6 text-base text-soft-light italic border-l-4 border-oranger pl-4">
                        {realisation.shortDescription}
                    </p>
                </header>

                <div className="mt-12 space-y-16">
                    {/* EIL: Project Presentation */}
                    <Section title="Présentation">
                        <Prose>
                            <p>{realisation.presentation}</p>
                        </Prose>
                    </Section>

                    {/* EIL: Context, Goals, Stakes, Risks */}
                    <Section title="Contexte & Enjeux">
                        <Prose>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-soft">Objectifs</h4>
                                    <p className="mt-2">{realisation.context.goals}</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-soft">Enjeux</h4>
                                    <p className="mt-2">{realisation.context.stakes}</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-soft">Risques IDENTIFIÉS</h4>
                                    <p className="mt-2 text-red-400/80">{realisation.context.risks}</p>
                                </div>
                            </div>
                        </Prose>
                    </Section>

                    {/* EIL: Steps (What I did) */}
                    <Section title="Démarche & Action">
                        <Prose>
                            <h4 className="text-lg font-semibold text-soft mb-4">Étapes de réalisation (Ce que J&apos;AI fait)</h4>
                            <ul className="list-decimal space-y-4 marker:text-oranger marker:font-bold">
                                {realisation.steps.map((step, idx) => (
                                    <li key={idx} className="pl-2">{step}</li>
                                ))}
                            </ul>
                        </Prose>
                    </Section>

                    {/* EIL: Actors */}
                    <Section title="Acteurs & Interactions">
                        <Prose>
                            <ul className="list-disc space-y-2 marker:text-soft-light">
                                {realisation.actors.map((actor, idx) => (
                                    <li key={idx}>{actor}</li>
                                ))}
                            </ul>
                        </Prose>
                    </Section>

                    {/* EIL: Results */}
                    <Section title="Résultats & Impacts">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Prose className="bg-marine-card p-6 rounded-2xl border border-white/5">
                                <h4 className="text-lg font-semibold text-soft">Pour l&apos;organisation</h4>
                                <p className="mt-2">{realisation.results.project}</p>
                            </Prose>
                            <Prose className="bg-marine-card p-6 rounded-2xl border border-white/5">
                                <h4 className="text-lg font-semibold text-soft">Pour mon profil</h4>
                                <p className="mt-2">{realisation.results.personal}</p>
                            </Prose>
                        </div>
                    </Section>

                    {/* EIL: Aftermath & Critical View */}
                    <Section title="Bilan & Lendemains">
                        <Prose>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-soft">Et après ?</h4>
                                    <p className="mt-2">{realisation.nextSteps}</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-soft">Regard critique</h4>
                                    <p className="mt-2">{realisation.criticalPerspective}</p>
                                </div>
                            </div>
                        </Prose>
                    </Section>

                    {/* EIL: Related Skills */}
                    {relatedSkills.length > 0 && (
                        <Section title="Compétences Mobilisées">
                            <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
                                {relatedSkills.map((skill) => (
                                    <SkillCard key={skill.slug} skill={skill} lang={lang} />
                                ))}
                            </ul>
                        </Section>
                    )}
                </div>
            </div>
        </Container>
    )
}
