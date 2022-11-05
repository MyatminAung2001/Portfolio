import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <motion.div
            whileInView={{ y: [200, 0], opacity: [0, 1] }}
            className="hidden lg:flex lg:flex-col lg:gap-y-[10px] lg:items-center lg:fixed lg:left-[90px] lg:bottom-0"
        >
            <div className="flex flex-col items-center gap-y-5">
                <a href="https://www.facebook.com/profile.php?id=100008542208276">
                    <FaFacebook size={20} className="cursor-pointer hover:text-[#0496ff] duration-150 transition-all" />
                </a>
                <a href="https://www.instagram.com/iri_diam/">
                    <FaInstagram size={20} className="cursor-pointer hover:text-[#0496ff] duration-150 transition-all" />
                </a>
                <a href="https://github.com/MyatminAung2001">
                    <FaGithub size={20} className="cursor-pointer hover:text-[#0496ff] duration-150 transition-all" />
                </a>
                <a href="https://www.linkedin.com/in/myat-min-aung-830039245/">
                    <FaLinkedinIn size={20} className="cursor-pointer hover:text-[#0496ff] duration-150 transition-all" />
                </a>
            </div>
            <div className="h-[80px] w-[0.5px] bg-[#0496ff]"></div>
        </motion.div>
    )
}

export default SocialMedia