// src/app/[lang]/competences/[slug]/page.tsx
import { Container } from '@/components/Container'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { Prose } from '@/components/ui/Prose'
import { notFound } from 'next/navigation'
import { Section } from '@/components/experiences/Section'
import { RealisationCard } from '@/components/realisations/RealisationCard'
import { IconResolver } from '@/components/ui/IconResolver'

export default async function SkillDetailPage({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>
}) {
    const { lang } = (await params) as { lang: 'fr' | 'en' }
    const { slug } = await params
    const dict = await getDictionary(lang)
    const skill = dict.skills.items[slug]

    if (!skill) {
        notFound()
    }

    const relatedRealisations = skill.relatedRealisations
        .map(s => dict.realisations.index.find(r => r.slug === s))
        .filter((r): r is NonNullable<typeof r> => !!r)

    return (
        <Container className="mt-16 sm:mt-32">
            <div className="max-w-3xl">
                <header className="flex items-center gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                        <IconResolver name={skill.icon} className="h-8 w-8 text-oranger" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-soft sm:text-5xl">
                            {skill.title}
                        </h1>
                        <p className="text-sm font-medium text-blue-400 mt-2 uppercase tracking-widest">
                            Compétence {skill.category === 'technical' ? 'Technique' : 'Humaine'}
                        </p>
                    </div>
                </header>

                <div className="mt-12 space-y-16">
                    {/* EIL: Definition & Overview */}
                    <Section title="Définition & Vision">
                        <Prose>
                            <p>{skill.definition}</p>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                                <div className="bg-marine-card p-4 rounded-xl border border-white/5">
                                    <span className="block font-bold text-soft mb-1">Niveau de Maîtrise</span>
                                    <p>{skill.masteryLevel}</p>
                                </div>
                                <div className="bg-marine-card p-4 rounded-xl border border-white/5">
                                    <span className="block font-bold text-soft mb-1">Priorité Profil</span>
                                    <p>{skill.priorityInProfile}</p>
                                </div>
                                <div className="bg-marine-card p-4 rounded-xl border border-white/5 md:col-span-2">
                                    <span className="block font-bold text-soft mb-1">Vitesse d&apos;Acquisition</span>
                                    <p>{skill.learningPace}</p>
                                </div>
                            </div>
                        </Prose>
                    </Section>

                    {/* EIL: Proofs & Anecdotes */}
                    <Section title="Preuves & Anecdotes">
                        <div className="space-y-12">
                            {skill.proofs.map((proof, idx) => (
                                <Prose key={idx}>
                                    <div className="border-l-2 border-oranger/30 pl-6">
                                        <h4 className="text-lg font-semibold text-soft">Expérience vécue</h4>
                                        <p className="mt-2 italic">&quot;{proof.anecdote}&quot;</p>
                                        <div className="mt-4 grid grid-cols-1 gap-4">
                                            <p><span className="font-bold text-soft">Résultats :</span> {proof.results}</p>
                                            <p><span className="font-bold text-soft">Valeur Ajoutée :</span> {proof.addedValue}</p>
                                        </div>
                                    </div>
                                </Prose>
                            ))}
                        </div>
                    </Section>

                    {/* EIL: Analysis & Evolution */}
                    <Section title="Recul & Évolution">
                        <Prose>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-soft">Auto-critique</h4>
                                    <p className="mt-2">{skill.selfCritique}</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-soft">Conseils</h4>
                                    <p className="mt-2">{skill.tips}</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-soft">Perspectives d&apos;évolution</h4>
                                    <p className="mt-2">{skill.evolution}</p>
                                </div>
                            </div>
                        </Prose>
                    </Section>

                    {/* EIL: Related Realisations */}
                    {relatedRealisations.length > 0 && (
                        <Section title="Réalisations Liées">
                            <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
                                {relatedRealisations.map((real) => (
                                    <RealisationCard key={real.slug} realisation={real} lang={lang} />
                                ))}
                            </ul>
                        </Section>
                    )}
                </div>
            </div>
        </Container>
    )
}
