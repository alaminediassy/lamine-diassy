'use client'

import { motion } from 'framer-motion'
import React from 'react'

import {useTypewriter} from "@/hooks/useTypewriter";

export default function Loader() {
    const typedText = useTypewriter("Cette section est en cours de développement")
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center px-6">
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg sm:text-xl font-light text-soft opacity-35"
            >
                {typedText}
            </motion.h2>
        </div>
    )
}
