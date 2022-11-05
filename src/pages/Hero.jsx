import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';
import { FaLinkedinIn, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

import Character from '../assets/character.png';
import Email from '../components/Email';
import Navigation from '../components/Navbar';
import MobileNav from '../components/MobileNav';

const Featured = () => {
    
    const [text] = useTypewriter({
        words: [
            "Myatmin Aung.",
            "a full-stack developer."
        ],
        loop: true,
        delaySpeed: 1500
    })

    return (
        <section className="w-screen h-screen px-5 lg:px-[20%]">
            <Navigation />
            <MobileNav />
            <Email />
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="lg:pt-[10%] lg:grid lg:grid-cols-2 lg:gap-x-10"
            >
                <div className="block lg:hidden">
                    <img 
                        src={Character} 
                        alt="character" 
                        className="w-[70%] lg:w-[90%] lg:ml-0 mx-auto"
                    />
                </div>
                <div className="mt-16">
                    <p className="text-xs mb-4 lg:text-sm">
                        Crafting Awesome...
                    </p>
                    <p className="text-2xl font-semibold mb-2 lg:text-3xl">
                        I'm {" "}
                        <span className="text-[#0496ff]">
                            {text}
                        </span>
                    </p>
                    <p className="text-xs mb-1 lg:text-base">
                        I have passion about developing websites & web apps and always looking for new opportunities to challenge and growth.
                    </p>
                    <p className="text-xs mb-8 lg:text-base">
                        Currently, I am using Reactjs & Nextjs for frontend and Nodejs & Expressjs for backend.
                    </p>
                    <div className="flex items-center gap-x-5 mb-4 lg:mb-16">
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
                    <div className="flex items-center gap-x-5">
                        <Link to='/about'>
                            <p className="text-xs">
                                See more about me
                            </p>
                        </Link>
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: 50 }}
                            transition={{
                                type: 'tween',
                                ease: 'easeInOut',
                                repeat: Infinity,
                                repeatType: 'reverse',
                                repeatDelay: 0.5,
                                duration: 1,
                            }}
                        >
                            <BsArrowRight size={20} />
                        </motion.div>
                    </div>
                </div>
                <div className="hidden lg:block lg:relative">
                    <img 
                        src={Character} 
                        alt="character" 
                        className="w-[90%] mr-0 absolute right-[-30px] top-[-30px]"
                    />
                </div>
            </motion.div>
        </section>
    )
};

export default Featured;