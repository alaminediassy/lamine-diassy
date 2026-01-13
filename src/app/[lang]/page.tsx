// src/app/[lang]/page.tsx
import { getDictionary } from '@/lib/i18n/dictionaries'
import Hero from '@/components/Hero'
import HeroBackground from "@/components/HeroBackground";
import RightSide from "@/components/RightSide";
import { VSocialMediaLink } from "@/components/SocialMediaLink";
import { HomeSection } from '@/components/home/HomeSection'
import { Specialties } from '@/components/home/Specialties'
import { ContactCTA } from '@/components/home/ContactCTA'
import { Container } from '@/components/Container'
import CVButton from '@/components/home/CVButton'


export default async function Home({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = (await params) as { lang: 'en' | 'fr' }
    const dict = await getDictionary(lang)
    const cvUrl = "/file/cv-mamadou-en.pdf"

    return (
        <main className="overflow-hidden">
            <section className="relative isolate rounded-b-3xl min-h-[660px] bg-[#0A192F]">
                <HeroBackground />
                <Hero dict={dict} />
                <RightSide />
                <VSocialMediaLink />
            </section>

            {/* Specialties Section */}
            <Container>
                <div id='skills' className="max-w-2xl mb-12">
                    <h2 className="text-2xl font-bold tracking-tight text-soft sm:text-3xl mb-4">
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

            {/* Parcours Teaser */}
            <HomeSection
                title={lang === 'fr' ? "Dernière Expérience" : "Recent Experience"}
                ctaHref={`/${lang}/parcours`}
                ctaLabel={lang === 'fr' ? "Voir mon parcours" : "View my journey"}
            >
                <div className="bg-marine-card p-8 rounded-3xl border border-white/5 w-full relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-oranger/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 space-y-4">
                        <div className='flex flex-row justify-between items-center'>
                            <span className="text-sm font-bold px-4 py-1 rounded-full bg-oranger/10 text-oranger border border-oranger/20">
                                {dict.experiencesPro[0].period}
                            </span>
                            <p className="text-lg text-white/80 font-semibold">{dict.experiencesPro[0].company}</p>
                        </div>
                        <h3 className="text-xl font-bold text-soft group-hover:text-oranger transition-colors">{dict.experiencesPro[0].jobTitle}</h3>
                        <p className="text-soft-light text-base leading-relaxed max-w-3xl mb-0">
                            {dict.experiencesPro[0].description}
                        </p>
                        <CVButton
                            lang={lang}
                            label={lang === 'fr' ? "Voir mon CV" : "See my CV"}
                            cvUrl={cvUrl}
                        />
                    </div>
                </div>
            </HomeSection>

            {/* Contact CTA */}
            <ContactCTA lang={lang} />
        </main>
    )
}
