'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from "react";
import { FC } from 'react';
import { Dictionary } from '@/types/content';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import clsx from 'clsx';
import { Popover, PopoverButton, PopoverBackdrop, PopoverPanel } from '@headlessui/react';

const NavLink: FC<{ href: string; label: string; isActive: boolean }> = ({ href, label, isActive }) => (
    <Link
        href={href}
        className={clsx(
            'transition-all duration-300 hover:text-oranger font-light text-sm',
            isActive ? 'text-oranger font-semibold' : 'text-soft'
        )}
    >
        {label}
    </Link>
);

const MobileNavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li>
        <PopoverButton as={Link} href={href} className="block py-2 text-soft hover:text-oranger">
            {children}
        </PopoverButton>
    </li>
);

const MobileNavigation = ({ links }: { links: { href: string; label: string }[] }) => (
    <Popover>
        <PopoverButton className="group flex items-center rounded-full bg-[#112240] px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            Menu
            <svg viewBox="0 0 8 6" aria-hidden="true" className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
                <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </PopoverButton>
        <PopoverBackdrop className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-xs" />
        <PopoverPanel className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
            <nav>
                <ul className="divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                    {links.map((link) => (
                        <MobileNavItem key={link.href} href={link.href}>
                            {link.label}
                        </MobileNavItem>
                    ))}
                </ul>
            </nav>
        </PopoverPanel>
    </Popover>
);

import Image from 'next/image';
import avatarImage from '@/images/avatar.png';

const Navbar: FC<{
    lang: 'fr' | 'en';
    dict: Dictionary;
}> = ({ lang, dict }) => {
    const pathname = usePathname();
    const links = [
        { href: `/${lang}`, label: dict.navbar.home },
        { href: `/${lang}/presentation`, label: dict.navbar.presentation },
        { href: `/${lang}/competences`, label: dict.navbar.skills },
        { href: `/${lang}/realisations`, label: dict.navbar.realisations },
        { href: `/${lang}/parcours`, label: dict.navbar.parcours },
        { href: 'mailto:diassy.alamine@gmail.com', label: dict.navbar.contact },
    ];

    return (
        <header className="pr-20 pl-20 w-full py-6 lg:h-[12vh] sticky transition-colors duration-500 backdrop-blur top-0 z-50 bg-opacity-90 bg-[#0A192F]/80">
            <div className="relative flex items-center justify-between h-16">
                <Link className="flex items-center gap-4 z-10 group" href={`/${lang}`}>
                    <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/10 group-hover:ring-oranger/50 transition-all">
                        <Image
                            src={avatarImage}
                            alt="Mamadou Lamine DIASSY"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="hidden sm:block">
                        <span className="text-sm md:text-md font-bold text-white block leading-tight">
                            {dict.profile.name}
                        </span>
                        <span className="block text-xs font-normal text-soft">
                            {dict.profile.position}
                        </span>
                    </div>
                </Link>

                <div className="hidden lg:flex gap-6 absolute left-1/2 -translate-x-1/2 z-0 bg-white/5 px-8 py-2 rounded-full shadow-lg ring-1 ring-white/10 backdrop-blur-md">
                    {links.map(({ href, label }) => (
                        <NavLink key={href} href={href} label={label} isActive={pathname === href} />
                    ))}
                </div>

                <div className="hidden lg:flex z-10">
                    <LanguageSwitcher />
                </div>

                <div className="lg:hidden">
                    <MobileNavigation links={links} />
                </div>
            </div>
        </header>

    );
};

export default Navbar;
