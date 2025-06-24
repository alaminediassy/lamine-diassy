'use client'

import { GridPattern } from '@/components/GridPattern'
import { useEffect, useState } from 'react'

export default function HeroBackground() {
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 768) {
            setIsDesktop(true)
        }
    }, [])

    return (
        <div className="absolute inset-0 -z-10 h-[640px]">
            <GridPattern
                className="absolute inset-0 h-full w-full fill-[#112240] stroke-white/5"
                interactive={isDesktop}
            />
        </div>
    )
}
