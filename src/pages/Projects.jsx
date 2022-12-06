import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { MdViewInAr } from 'react-icons/md';

import { urlFor, client } from '../client';
import { ThemeContext } from '../context/theme';
import Navigation from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import SocialMedia from '../components/SocialMedia';

const Projects = () => {

    const [{ theme }] = useContext(ThemeContext);

    const [projects, setProjects] = useState([]);

    /** Fetch Projects from Sanity CMS */
    useEffect(() => {
        const query = '*[_type == "projects"]';

        client.fetch(query).then((data) => {
            setProjects(data);
        });
    }, []);

    return (
        <section className="w-screen px-5 pb-[30%] lg:px-[20%] lg:h-screen lg:pb-0">
            <Navigation />
            <MobileNav />
            <SocialMedia />
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
            >
                <h1 className="pt-10 font-semibold text-3xl tracking-wide mb-8 lg:pt-[10%]">
                    Projects.
                </h1>
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-10">
                    {
                        projects.map((project) => (
                            <div className="mb-10">
                                <div className="w-[100%] mb-3">
                                    <img 
                                        src={urlFor(project.imgUrl)} 
                                        alt="empress" 
                                        className="w-[100%] h-[100%] rounded-md brightness-[90%] hover:brightness-[100%]"
                                    />
                                </div>
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-lg font-semibold text-[#0496ff]">
                                        {project.title}
                                    </p>
                                    <div className="flex items-center gap-x-3">
                                        <a href={project.projectLink}>
                                            <MdViewInAr size={23} />
                                        </a>
                                        <a href={project.codeLink}>
                                            <FaGithub size={23} />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-xs mb-3 lg:text-sm">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-3 flex-wrap mb-4">
                                    <p className="text-xs px-3 rounded-md lg:text-sm" style={{ backgroundColor: theme.tagsBgColor, color: theme.color }}>
                                        {project.tags[0]}
                                    </p>
                                    <p className="text-xs px-3 rounded-md lg:text-sm" style={{ backgroundColor: theme.tagsBgColor, color: theme.color }}>
                                        {project.tags[1]}
                                    </p>
                                    <p className="text-xs px-3 rounded-md lg:text-sm" style={{ backgroundColor: theme.tagsBgColor, color: theme.color }}>
                                        {project.tags[2]}
                                    </p>
                                    <p className="text-xs px-3 rounded-md lg:text-sm" style={{ backgroundColor: theme.tagsBgColor, color: theme.color }}>
                                        {project.tags[3]}
                                    </p>
                                    <p className="text-xs px-3 rounded-md lg:text-sm" style={{ backgroundColor: theme.tagsBgColor, color: theme.color }}>
                                        {project.tags[4]}
                                    </p>
                                    <p className="text-xs px-3 rounded-md lg:text-sm" style={{ backgroundColor: theme.tagsBgColor, color: theme.color }}>
                                        {project.tags[5]}
                                    </p>
                                </div>
                            </div>    
                        ))
                    }
                </div>
            </motion.div>
        </section>
    )
};

export default Projects;