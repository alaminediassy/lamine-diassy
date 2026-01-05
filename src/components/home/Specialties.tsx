// src/components/home/Specialties.tsx
'use client'

import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { Dictionary } from '@/types/content'

export function Specialties({ dict }: { dict: Dictionary }) {
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {dict.home.specialties.map((specialty, index) => {
                const iconName = specialty.icon as keyof typeof LucideIcons
                const IconComponent = (LucideIcons[iconName] as React.ElementType) || LucideIcons.Code2

                return (
                    <motion.div
                        key={specialty.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative group p-8 rounded-2xl bg-marine-card border border-white/5 hover:border-oranger/50 transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-oranger/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                        <div className="relative z-10">
                            <div className="inline-flex p-3 rounded-lg bg-oranger/10 text-oranger mb-4 group-hover:scale-110 transition-transform">
                                <IconComponent size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-soft mb-2 group-hover:text-white transition-colors">
                                {specialty.title}
                            </h3>
                            <p className="text-soft-light text-sm leading-relaxed">
                                {specialty.description}
                            </p>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}
