// src/components/home/HomeSection.tsx
import { Container } from '@/components/Container'
import Link from 'next/link'

export function HomeSection({
    title,
    children,
    ctaHref,
    ctaLabel
}: {
    title: string;
    children: React.ReactNode;
    ctaHref?: string;
    ctaLabel?: string;
}) {
    return (
        <Container className="mt-24 sm:mt-32">
            <div className="flex flex-col gap-8 md:flex-row md:items-baseline md:justify-between">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-soft">
                    {title}
                </h2>
                {ctaHref && (
                    <Link
                        href={ctaHref}
                        className="text-sm font-semibold text-oranger hover:text-soft transition-colors flex items-center gap-1 group"
                    >
                        {ctaLabel || 'Voir plus'}
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                )}
            </div>
            <div className="mt-8">
                {children}
            </div>
        </Container>
    )
}
