'use client'

import { motion } from "framer-motion";
import {GitHubIcon, InstagramIcon, LinkedInIcon, XIcon} from "@/components/SocialIcons";
import {SocialLink} from "@/components/SocialLink";

const LeftSide = () => {
    return (

        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <div className='w-full h-full flex flex-col items-center justify-end gap-2 text-textLight'>
                <div className="flex flex-col">
                    {[
                        { icon: XIcon, href: 'https://x.com/diassyofficiel', label: 'Follow on X' },
                        { icon: InstagramIcon, href: '#', label: 'Follow on Instagram' },
                        { icon: GitHubIcon, href: 'https://github.com/alaminediassy', label: 'Follow on GitHub' },
                        { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mamadou-lamine-diassy-0946b31a6/', label: 'Follow on LinkedIn' },
                    ].map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 + index * 0.2 }}
                        >
                            <SocialLink href={item.href} aria-label={item.label} icon={item.icon} />
                        </motion.div>
                    ))}
                </div>
                <div className='w-[2px] h-32 bg-soft'></div>
            </div>
        </motion.div>
    )
}

export default LeftSide;
