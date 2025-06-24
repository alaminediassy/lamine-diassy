'use client'

import { motion } from "framer-motion";

const RightSide = () => {
    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
            <div className='w-full h-full flex flex-col items-center justify-end gap-16 text-textLight'>
                <a href="mailto:diassy.alamine@gmail.com">
                    <p className='text-sm rotate-90 w-72 tracking-wide text-oranger'>diassy.alamine@gmail.com</p>
                </a>
                <span className='w-[2px] h-32 bg-soft inline-flex'></span>
            </div>
        </motion.div>
    )
}

export default RightSide;


