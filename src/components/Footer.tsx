import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import React from "react";
import { Dictionary } from '@/types/content';



function NavLink({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) {
    return (
        <Link
            href={href}
            className="transition hover:text-oranger"
        >
            {children}
        </Link>
    )
}

export function Footer({ dict, lang }: { dict: Dictionary; lang: string }) {
    return (
        <footer className="mt-32 flex-none">
            <ContainerOuter>
                <div className="border-t border-white/10 pt-10 pb-16 ">
                    <ContainerInner>
                        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-soft-light ">
                                <NavLink href={`/${lang}`}>{dict.navbar.home}</NavLink>
                                <NavLink href={`/${lang}/presentation`}>{dict.navbar.presentation}</NavLink>
                                <NavLink href={`/${lang}/competences`}>{dict.navbar.skills}</NavLink>
                                <NavLink href={`/${lang}/realisations`}>{dict.navbar.realisations}</NavLink>
                                <NavLink href={`/${lang}/parcours`}>{dict.navbar.parcours}</NavLink>
                                <NavLink href="mailto:diassy.alamine@gmail.com">{dict.navbar.contact}</NavLink>
                            </div>
                            <p className="text-sm text-soft">
                                &copy; {new Date().getFullYear()} {dict.copyright.desc}
                            </p>
                        </div>
                    </ContainerInner>
                </div>
            </ContainerOuter>
        </footer>
    )
}