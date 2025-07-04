import { Container } from '@/components/Container'
import React from "react";

export function SimpleLayout({
                                 title,
                                 intro,
                                 children,
                             }: {
    title: string
    intro: string
    children?: React.ReactNode
}) {
    return (
        <Container className="mt-16 sm:mt-32">
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-soft">
                    {title}
                </h1>
                <p className="mt-6 text-base text-soft-light">
                    {intro}
                </p>
            </header>
            {children && <div className="mt-16 sm:mt-20">{children}</div>}
        </Container>
    )
}
