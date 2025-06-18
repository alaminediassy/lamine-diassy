'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import clsx from 'clsx';
import { Container } from '@/components/Container';

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
            'transition-all duration-300 hover:text-oranger font-light text-sm',
            isActive ? 'text-oranger font-semibold' : 'text-soft'
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
        <header className="w-full py-6 lg:h-[12vh] sticky transition-colors duration-500 backdrop-blur top-0 z-50 bg-opacity-90 bg-bodyColor">
            <Container>
                <div className="relative flex items-center justify-between h-16">
                    {/* Left block: Name + position */}
                    <div className="text-md font-bold text-white leading-tight z-10">
                        {dict.profile.name}
                        <span className="block text-sm font-normal text-soft">
                      {dict.profile.position}
                    </span>
                    </div>

                    {/* Center block: navigation links */}
                    <div className="hidden font-medium md:flex gap-6 absolute left-1/2 -translate-x-1/2 z-0 bg-white/10 px-8 py-2 rounded-full shadow-lg ring-1 shadow-zinc-800/5 ring-white/40 backdrop-blur-sm">
                        {links.map(({ href, label }) => (
                            <NavLink key={href} href={href} label={label} isActive={pathname === href} />
                        ))}
                    </div>

                    {/* Right block: language switcher */}
                    <div className="hidden md:flex z-10">
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile menu toggle */}
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

                {/* Mobile menu */}
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