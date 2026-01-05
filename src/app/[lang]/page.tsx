// src/app/[lang]/page.tsx
import { getDictionary } from '@/lib/i18n/dictionaries'
import Hero from '@/components/Hero'
import HeroBackground from "@/components/HeroBackground";
import RightSide from "@/components/RightSide";
import { VSocialMediaLink } from "@/components/SocialMediaLink";
import { HomeSection } from '@/components/home/HomeSection'
import { SkillCard } from '@/components/skills/SkillCard'
import { RealisationCard } from '@/components/realisations/RealisationCard'
import { Prose } from '@/components/ui/Prose'
import { Specialties } from '@/components/home/Specialties'
import { ContactCTA } from '@/components/home/ContactCTA'
import { Container } from '@/components/Container'

export default async function Home({
    params,
}: {
    params: Promise<{ lang: 'en' | 'fr' }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    // Previews
    const topSkills = dict.skills.index.slice(0, 6)
    const latestRealisations = dict.realisations.index.slice(0, 3)

    return (
        <main className="overflow-hidden">
            <section className="relative isolate rounded-b-3xl min-h-[760px] bg-[#0A192F]">
                <HeroBackground />
                <Hero dict={dict} />
                <RightSide />
                <VSocialMediaLink />
            </section>

            {/* Specialties Section */}
            <Container className="mt-20 sm:mt-24">
                <div className="max-w-2xl mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-soft sm:text-4xl mb-4">
                        {lang === 'fr' ? "Domaines d'Expertise" : "Areas of Expertise"}
                    </h2>
                    <p className="text-soft-light text-lg">
                        {lang === 'fr'
                            ? "Une approche transversale combinant ingénierie logicielle, expertise M365 et vision produit."
                            : "A multidisciplinary approach combining software engineering, M365 expertise, and product vision."}
                    </p>
                </div>
                <Specialties dict={dict} />
            </Container>

            {/* Presentation Teaser */}
            <HomeSection
                title={lang === 'fr' ? "Qui suis-je ?" : "Who am I?"}
                ctaHref={`/${lang}/presentation`}
                ctaLabel={lang === 'fr' ? "Découvrir mon parcours" : "My Journey"}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <Prose className="max-w-2xl">
                        <p className="text-xl leading-relaxed text-soft mb-6">
                            {dict.about.description}
                        </p>
                        <p className="text-soft-light leading-relaxed">
                            {dict.about.intro}
                        </p>
                    </Prose>
                    <div className="hidden lg:block relative p-8 rounded-3xl border border-white/5 bg-marine/30">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-oranger/20 blur-xl rounded-full" />
                        <blockquote className="text-oranger text-lg font-medium italic">
                            &quot;{lang === 'fr'
                                ? "Chaque ligne de code est une opportunité de créer de la valeur."
                                : "Every line of code is an opportunity to create value."}&quot;
                        </blockquote>
                    </div>
                </div>
            </HomeSection>

            {/* Skills Preview */}
            <HomeSection
                title={lang === 'fr' ? "Compétences Clés" : "Key Skills"}
                ctaHref={`/${lang}/competences`}
                ctaLabel={lang === 'fr' ? "Toutes mes compétences" : "View all skills"}
            >
                <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {topSkills.map((skill) => (
                        <SkillCard key={skill.slug} skill={skill} lang={lang} />
                    ))}
                </ul>
            </HomeSection>

            {/* Realisations Preview */}
            <HomeSection
                title={lang === 'fr' ? "Réalisations Marquantes" : "Featured Work"}
                ctaHref={`/${lang}/realisations`}
                ctaLabel={lang === 'fr' ? "Voir tous mes projets" : "View all projects"}
            >
                <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                    {latestRealisations.map((real) => (
                        <RealisationCard key={real.slug} realisation={real} lang={lang} />
                    ))}
                </ul>
            </HomeSection>

            {/* Parcours Teaser */}
            <HomeSection
                title={lang === 'fr' ? "Dernière Expérience" : "Recent Experience"}
                ctaHref={`/${lang}/parcours`}
                ctaLabel={lang === 'fr' ? "Voir mon CV complet" : "View full CV"}
            >
                <div className="bg-marine-card p-10 rounded-3xl border border-white/5 max-w-4xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-oranger/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                            <h3 className="text-2xl font-bold text-soft group-hover:text-oranger transition-colors">{dict.experiencesPro[0].jobTitle}</h3>
                            <span className="text-sm font-bold px-4 py-1 rounded-full bg-oranger/10 text-oranger border border-oranger/20">
                                {dict.experiencesPro[0].period}
                            </span>
                        </div>
                        <p className="text-lg text-white/80 font-semibold mb-4">{dict.experiencesPro[0].company}</p>
                        <p className="text-soft-light text-base leading-relaxed max-w-3xl mb-0">
                            {dict.experiencesPro[0].description}
                        </p>
                    </div>
                </div>
            </HomeSection>

            {/* Contact CTA */}
            <ContactCTA dict={dict} lang={lang} />
        </main>
    )
}
