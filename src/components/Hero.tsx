'use client'

import { Container } from '@/components/Container'
import { motion } from "framer-motion";
import Image from "next/image";
import Avatar from "@/images/avatar.png"
import { useMultipleTypewriter } from "@/hooks/useTypewriter";
import Link from "next/link";
import {SocialLink} from "@/components/SocialLink";
import {InstagramIcon, XIcon, GitHubIcon, LinkedInIcon} from "@/components/SocialIcons";

interface HeroProps {
    dict: {
        profile: {
            name: string
            position: string
            grade: string
            description: string
        }
    }
}

export default function Hero({ dict }: HeroProps) {
    const typedGrade = useMultipleTypewriter([dict.profile.grade, dict.profile.position])

    return (
        <Container className="mt-9">
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
                    <h1 className="text-3xl sm:text-4xl mb-1 tracking-tight">{dict.profile.name}</h1>
                    <span className="font-light text-xl block min-h-[28px]">{typedGrade}</span>
                </motion.div>
            </motion.div>
            <div className="flex flex-col pt-6">
                <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-md font-normal md:max-w-[900px] text-soft">
                    {dict.profile.description}{" "}
                    <Link href="/About">
                    <span className="text-orange-600 uppercase text-sm font-medium inline-flex relative cursor-pointer h-7 overflow-x-hidden group ">
                        En savoir plus
                    <span
                    className="absolute w-full h-[1px] bg-orange-600 left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0
                    transition-transform duration-500"></span>
                    </span>
                    </Link>
                </motion.p>
            </div>
            <div className="mt-6 flex gap-6">
                <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
                <SocialLink
                    href="#"
                    aria-label="Follow on Instagram"
                    icon={InstagramIcon}
                />
                <SocialLink
                    href="#"
                    aria-label="Follow on GitHub"
                    icon={GitHubIcon}
                />
                <SocialLink
                    href="#"
                    aria-label="Follow on LinkedIn"
                    icon={LinkedInIcon}
                />
            </div>
        </Container>
    )
}
