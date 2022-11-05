import React from 'react'
import { motion } from 'framer-motion'

const Email = () => {
    return (
        <motion.div 
            whileInView={{ y: [200, 0], opacity: [0, 1] }}
            className="hidden lg:flex lg:flex-col lg:gap-y-[100px] lg:items-center lg:fixed lg:left-0 lg:bottom-0"
        >
            <a href="mailto:dev.mma2021@gmail.com">
                <p className="text-sm tracking-wider rotate-[270deg]">
                    dev.mma2021@gmail.com
                </p>
            </a>
            <div className="h-[80px] w-[0.5px] bg-[#0496ff]"></div>
        </motion.div>
    )
}

export default Email