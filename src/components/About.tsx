'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface AboutProps {
    dict: {
        about: {
            title: string;
            description: string;
            background: string;
            journey: string;
        };
    };
}

export default function About({ dict }: AboutProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="about"
            ref={ref}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-zinc-800 mb-4 text-center"
            >
                {dict.about.title}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center"
            >
                {dict.about.description}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base leading-relaxed text-gray-600 dark:text-gray-400"
            >
                {dict.about.journey}
            </motion.div>
        </section>
    );
}
