// app/[lang]/layout.tsx
import type { Metadata } from "next"
import "@/styles/globals.css"
import Navbar from "@/components/layout/Navbar"
import { getDictionary } from "@/lib/i18n/dictionaries"
import React from "react"

import { twMerge } from "tailwind-merge";
import { DM_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio de Mamadou Lamine DIASSY",
    description: "Portfolio personnel multilingue",
}

// Génère les chemins fr/en au build
export function generateStaticParams() {
    return [{ lang: 'fr' }, { lang: 'en' }]
}

// params est désormais un objet asynchrone
export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ lang: 'fr' | 'en' }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return (
        <html lang={lang} suppressHydrationWarning>
            <body className={twMerge(dmSans.className, "antialiased bg-[#0A192F]")}>
                <Navbar lang={lang} dict={dict} />
                {children}
                <Footer dict={dict} lang={lang} />
            </body>
        </html>
    )
}
