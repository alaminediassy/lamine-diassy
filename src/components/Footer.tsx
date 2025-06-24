import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import React from "react";


interface FooterProps {
    dict: {
        navbar: {
            home: string;
            projects: string;
            about: string;
            contact: string;
        };
        copyright: {
            desc: string;
            year: number;
        };
    };
}

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

export function Footer({ dict }: FooterProps) {
    return (
        <footer className="mt-32 flex-none">
            <ContainerOuter>
                <div className="border-t border-zinc-100 pt-10 pb-16 ">
                    <ContainerInner>
                        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-soft ">
                                <NavLink href="/">{dict.navbar.home}</NavLink>
                                <NavLink href="/projects">{dict.navbar.projects}</NavLink>
                                <NavLink href="/about">{dict.navbar.about}</NavLink>
                                <NavLink href="mailto:diassy.alamine@gmail.com">{dict.navbar.contact}</NavLink>
                            </div>
                            <p className="text-sm text-soft">
                                &copy; {new Date().getFullYear()} { dict.copyright.desc }
                            </p>
                        </div>
                    </ContainerInner>
                </div>
            </ContainerOuter>
        </footer>
    )
}