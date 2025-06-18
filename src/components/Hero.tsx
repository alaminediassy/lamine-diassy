'use client'

import { Container } from '@/components/Container'
import { motion } from "framer-motion";
import Image from "next/image";
import Avatar from "@/images/avatar.png"

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
                    className="font-bold tracking-tight text-zinc-800"
                >
                    <h1 className="text-3xl sm:text-4xl mb-1">{dict.profile.name}</h1>
                    <span className="font-light text-xl">{dict.profile.grade}</span>
                </motion.div>
            </motion.div>
        </Container>
    )
}
