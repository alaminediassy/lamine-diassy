'use client'

import { Container } from '@/components/Container'
import { motion } from "framer-motion";
import Image from "next/image";
import Avatar from "@/images/avatar.png"
import { useMultipleTypewriter } from "@/hooks/useTypewriter";
import Link from "next/link";
import { HSocialMediaLink } from "@/components/SocialMediaLink";

interface HeroProps {
    dict: {
        profile: {
            name: string
            position: string
            grade: string
            description: string
        }
        navbar: {
            presentation: string
        }
    }
}

export default function Hero({ dict }: HeroProps) {
    const typedGrade = useMultipleTypewriter([dict.profile.grade, dict.profile.position])

    return (
        <Container className="mt-6">
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex flex-row gap-10 items-center">
                <Image
                    src={Avatar}
                    alt="Avatar"
                    width={150}
                    height={150}
                    className="hover:translate-y-2 duration-300 transition-transform transform hover:scale-110"
                />
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="font-bold tracking-tight text-soft"
                >
                    <h1 className="text-4xl sm:text-5xl mb-2 tracking-tight">{dict.profile.name}</h1>
                    <span className="font-light text-xl block min-h-[60px] lg:min-h-[40px] text-soft-light">{typedGrade}</span>
                </motion.div>
            </motion.div>
            <div className="flex flex-col pt-6 gap-8">
                <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-lg font-normal md:max-w-[900px] text-soft-light">
                    {dict.profile.description}{" "}
                    <Link href={`/${typedGrade.includes('ingenieur') ? 'fr' : 'en'}/presentation`}>
                        <span className="text-oranger uppercase text-sm font-medium inline-flex relative cursor-pointer h-7 overflow-x-hidden group ">
                            {dict.navbar.presentation}
                            <span
                                className="absolute w-full h-[1px] bg-oranger left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0
                        transition-transform duration-500"></span>
                        </span>
                    </Link>
                </motion.p>

                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="flex flex-wrap gap-4"
                >
                    <Link
                        href={`/${typedGrade.includes('ingenieur') ? 'fr' : 'en'}/realisations`}
                        className="px-6 py-3 bg-oranger text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-oranger/20"
                    >
                        {typedGrade.includes('ingenieur') ? "Voir mes réalisations" : "View my work"}
                    </Link>
                    <Link
                        href="mailto:diassy.alamine@gmail.com"
                        className="px-6 py-3 border border-oranger text-oranger font-bold rounded-full hover:bg-oranger/10 transition-all"
                    >
                        {typedGrade.includes('ingenieur') ? "Me contacter" : "Get in touch"}
                    </Link>
                </motion.div>
            </div>
            <div className="block xl:hidden">
                <HSocialMediaLink />
            </div>
            {/* Icônes sociales avec animation en cascade supprimés */}

            <div className="text-center mt-4">
                <motion.a
                    href="#skills"
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="mx-auto flex items-center justify-center w-10 h-12 border-[1px] border-oranger rounded-full text-oranger text-xl hover:text-white hover:bg-oranger transition duration-200"
                    aria-label="Scroll to About section"
                >
                    ↓
                </motion.a>
            </div>
        </Container>
    )
}
