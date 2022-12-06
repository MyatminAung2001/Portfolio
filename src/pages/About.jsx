import React, { useState, useEffect } from 'react';
import { motion, } from 'framer-motion';

import { urlFor, client } from '../client';
import Profile from '../assets/myProfile.jpg';
import Navigation from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import SocialMedia from '../components/SocialMedia';

const About = () => {

    const [abouts, setAbouts] = useState([]);
    const [skills, setSkills] = useState([]);

    /** Fetch About section from Sanity CMS */
    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            setAbouts(data);
        });
    }, []);

    useEffect(() => {
        const query = '*[_type == "skills"]';

        client.fetch(query).then((data) => {
            setSkills(data);
        });
    }, []);

    return (
        <section className="w-screen px-5 pb-[30%] lg:h-screen lg:px-[20%] lg:pb-0">
            <Navigation />
            <MobileNav />
            <SocialMedia />
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
            >
                <h1 className="pt-10 font-semibold text-3xl tracking-wide mb-8 lg:pt-[10%]">
                    Who am I?
                </h1>
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-10">
                    <div className="mb-16">
                        <div className="mb-5">
                            {abouts.map((about) => (
                                <div className="mb-2">
                                    <p className="text-xs mb-1 lg:text-base">
                                        {about.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <ul className="mb-5">
                            <li className="flex items-center gap-x-5 mb-2">
                                <p className="w-[80px] text-xs lg:text-base">
                                    Name:
                                </p>
                                <p className="text-xs lg:text-base">
                                    Myatmin Aung
                                </p>
                            </li>
                            <li className="flex items-center gap-x-5 mb-2">
                                <p className="w-[80px] text-xs lg:text-base">
                                    Education:
                                </p>
                                <p className="text-xs lg:text-base">
                                    2nd year BE(Mechanical)
                                </p>
                            </li>
                            <li className="flex items-center gap-x-5 mb-2">
                                <p className="w-[80px] text-xs lg:text-base">
                                    Age:
                                </p>
                                <p className="text-xs lg:text-base">
                                    21
                                </p>
                            </li>
                            <li className="flex items-center gap-x-5 mb-2">
                                <p className="w-[80px] text-xs lg:text-base">
                                    Phone:
                                </p>
                                <p className="text-xs lg:text-base">
                                    09427274346
                                </p>
                            </li>
                            <li className="flex items-center gap-x-5 mb-2">
                                <p className="w-[80px] text-xs lg:text-base">
                                    Email:
                                </p>
                                <p className="text-xs lg:text-base">
                                    dev.mma2021@gmail.com
                                </p>
                            </li>
                        </ul>
                        <p className="text-xs mb-5 lg:text-base">
                            Languages, I am working with...
                        </p>
                        <div className="flex items-center gap-x-9 gap-y-5 flex-wrap">
                            {
                                skills.map((data) => (
                                    <div className="">
                                        <img 
                                            src={urlFor(data.icon)} 
                                            alt="icon" 
                                            className="w-[30px] lg:w-[40px]"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="relative border rounded-md w-[170px] h-[170px] mx-auto border-[#0496ff] lg:w-[250px] lg:h-[250px] lg:mr-0">
                            <img 
                                src={Profile} 
                                alt="profile" 
                                className="w-[100%] rounded-md absolute top-[-15px] left-[-15px]"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default About;