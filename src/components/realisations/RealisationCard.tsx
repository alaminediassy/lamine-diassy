// src/components/realisations/RealisationCard.tsx
import { Card } from '@/components/experiences/Card'
import { RealisationIndexItem } from '@/types/content'

export function RealisationCard({
    realisation,
    lang,
    className
}: {
    realisation: RealisationIndexItem;
    lang: string;
    className?: string;
}) {
    return (
        <Card as="li" className={className}>
            <div className="relative z-10 flex h-40 w-full items-center justify-center overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-oranger/20 transition-all duration-300">
                {realisation.thumbnail ? (
                    <div className="absolute inset-0 bg-marine-card flex items-center justify-center text-soft-light text-xs">
                        [Image: {realisation.title}]
                    </div>
                ) : (
                    <div className="bg-marine-card w-full h-full flex items-center justify-center text-soft-light italic">
                        No image
                    </div>
                )}
            </div>
            <h2 className="mt-6 text-base font-semibold text-soft">
                <Card.Link href={`/${lang}/realisations/${realisation.slug}`}>
                    {realisation.title}
                </Card.Link>
            </h2>
            <Card.Description>
                {realisation.shortDescription}
            </Card.Description>
        </Card>
    )
}
