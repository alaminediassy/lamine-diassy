// src/app/[lang]/competences/page.tsx
import { getDictionary } from '@/lib/i18n/dictionaries'
import { SkillCard } from '@/components/skills/SkillCard'
import { SimpleLayout } from '@/components/experiences/SimpleLayout'

export default async function SkillsPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = (await params) as { lang: 'fr' | 'en' }
    const dict = await getDictionary(lang)

    const technicalSkills = dict.skills.index.filter(s => s.category === 'technical')
    const humanSkills = dict.skills.index.filter(s => s.category === 'human')

    return (
        <SimpleLayout
            title={dict.skills.title}
            intro="Un aperçu synthétique de mes compétences techniques et humaines, aligné sur mon profil d'ingénieur logiciel."
        >
            <div className="space-y-20">
                <section>
                    <h2 className="text-xl font-bold text-soft mb-8 border-b border-white/10 pb-2">
                        Compétences Techniques
                    </h2>
                    <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                        {technicalSkills.map((skill) => (
                            <SkillCard key={skill.slug} skill={skill} lang={lang} />
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-soft mb-8 border-b border-white/10 pb-2">
                        Compétences Humaines (Soft Skills)
                    </h2>
                    <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                        {humanSkills.map((skill) => (
                            <SkillCard key={skill.slug} skill={skill} lang={lang} />
                        ))}
                    </ul>
                </section>
            </div>
        </SimpleLayout>
    )
}
