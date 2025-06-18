'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import clsx from 'clsx';

import {Container} from "@/components/Container";

type NavbarProps = {
    lang: 'fr' | 'en';
    dict: {
        navbar: {
            home: string;
            projects: string;
            about: string;
            contact: string;
        };
        profile: {
            name: string;
            position: string;
        };
    };
};


const NavLink: FC<{ href: string; label: string; isActive: boolean }> = ({ href, label, isActive }) => (
    <Link
        href={href}
        className={clsx(
            'transition-all duration-300 hover:text-teal-600 dark:hover:text-teal-400 font-light text-sm',
            isActive ? 'text-teal-600 dark:text-teal-400 font-semibold' : 'text-gray-800 dark:text-white'
        )}
    >
        {label}
    </Link>
);

const Navbar: FC<NavbarProps> = ({ lang, dict }) => {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const links = [
        { href: `/${lang}`, label: dict.navbar.home },
        { href: `/${lang}/projects`, label: dict.navbar.projects },
        { href: `/${lang}/about`, label: dict.navbar.about },
        { href: `/${lang}/contact`, label: dict.navbar.contact },
    ];

    return (
        <header className="bg-black shadow relative z-50 flex flex-none flex-col">
            <Container>
                <div className="flex justify-between items-center h-16">
                    <div className="text-md font-bold text-zinc-800 dark:text-white leading-tight">
                        {dict.profile.name}
                        <span className="block text-sm font-normal text-gray-500 dark:text-gray-400">
                          {dict.profile.position}
                        </span>
                    </div>

                    <div className="hidden md:flex gap-6 items-center">
                        {links.map(({ href, label }) => (
                            <NavLink key={href} href={href} label={label} isActive={pathname === href} />
                        ))}

                    </div>
                    <div>
                        <LanguageSwitcher />
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                            className="text-zinc-800 dark:text-white cursor-pointer"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col md:hidden gap-4 overflow-hidden px-2 pt-4 pb-6"
                        >
                            {links.map(({ href, label }) => (
                                <NavLink key={href} href={href} label={label} isActive={pathname === href} />
                            ))}
                            <LanguageSwitcher />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </header>
    );
};

export default Navbar;
