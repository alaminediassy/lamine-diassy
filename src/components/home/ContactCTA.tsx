// src/components/home/ContactCTA.tsx
'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Dictionary } from '@/types/content'

export function ContactCTA({ dict, lang }: { dict: Dictionary; lang: string }) {
    return (
        <Container className="mt-32 mb-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl bg-marine-card border border-white/10 p-12 text-center"
            >
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-oranger/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-marine/30 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-soft mb-6">
                        {lang === 'fr' ? "Prêt à démarrer un projet ?" : "Ready to start a project?"}
                    </h2>
                    <p className="text-soft-light text-lg mb-10 leading-relaxed">
                        {lang === 'fr'
                            ? "Vous avez une idée en tête ou vous souhaitez simplement discuter ? Je suis ouvert aux nouvelles opportunités et collaborations."
                            : "Have an idea in mind or just want to chat? I'm open to new opportunities and collaborations."}
                    </p>
                    <Link
                        href="mailto:diassy.alamine@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-oranger text-white font-bold rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-oranger/20"
                    >
                        <Mail size={20} />
                        {lang === 'fr' ? "Me contacter" : "Contact Me"}
                    </Link>
                </div>
            </motion.div>
        </Container>
    )
}
