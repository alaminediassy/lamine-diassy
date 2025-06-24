'use client'

import { motion } from 'framer-motion'
import { LuConstruction } from 'react-icons/lu'
import React from 'react'

import {useTypewriter} from "@/hooks/useTypewriter";

export default function Loader() {
    const typedText = useTypewriter("Cette section est en cours de développement")
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-oranger text-6xl mb-6"
            >
                <LuConstruction />
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg sm:text-xl font-light text-soft opacity-35 h-[40px]"
            >
                {typedText}
            </motion.h2>
        </div>
    )
}
