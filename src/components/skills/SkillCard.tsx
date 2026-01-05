// src/components/skills/SkillCard.tsx
import { Card } from '@/components/experiences/Card'
import { IconResolver } from '@/components/ui/IconResolver'
import { SkillIndexItem } from '@/types/content'

export function SkillCard({ skill, lang }: { skill: SkillIndexItem; lang: string }) {
    return (
        <Card as="li" className="h-full">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 group-hover:bg-oranger/10 group-hover:ring-oranger/20 transition-all duration-300">
                <IconResolver name={skill.icon} className="h-6 w-6 text-soft group-hover:text-oranger transition-colors" />
            </div>
            <h2 className="mt-6 text-base font-semibold text-soft">
                <Card.Link href={`/${lang}/competences/${skill.slug}`}>{skill.title}</Card.Link>
            </h2>
            <Card.Description>
                <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20">
                    {skill.category}
                </span>
            </Card.Description>
        </Card>
    )
}
