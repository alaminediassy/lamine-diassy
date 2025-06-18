'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import flagFR from '@/images/flags/fr.svg'
import flagEN from '@/images/flags/en.svg'

const locales = ['fr', 'en']

export default function LanguageSwitcher() {
    const pathname = usePathname()
    const currentLang = pathname.split('/')[1]
    const pathWithoutLang = pathname.replace(/^\/(fr|en)/, '')

    return (
        <div className="flex gap-3 items-center">
            {locales.map((locale) => (
                <Link
                    key={locale}
                    href={`/${locale}${pathWithoutLang || ''}`}
                    aria-label={locale === 'fr' ? 'Français' : 'English'}
                >
                    <Image
                        src={locale === 'fr' ? flagFR : flagEN}
                        alt={`Drapeau ${locale}`}
                        width={24}
                        height={24}
                        className={locale === currentLang ? 'opacity-100' : 'opacity-50 hover:opacity-100'}
                    />
                </Link>
            ))}
        </div>
    )
}
