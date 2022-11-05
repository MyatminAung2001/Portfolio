import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

import { ThemeContext } from '../context/theme';

const Navigation = () => {  

    const [{ theme, isLight }, toggleTheme] = useContext(ThemeContext);

    let activeClassName = "text-[#0496ff] tracking-wider"

    return (
        <nav className="py-4 border-b flex items-center justify-between" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <Link to='/'>
                <p className="font-semibold text-lg tracking-widest hover:text-[#0496ff] duration-150 transition">
                    {"<Dev.Mma/>"}
                </p>
            </Link>
            <div className="lg:flex lg:items-center lg:gap-x-5">
                <ul className="hidden lg:flex lg:items-center lg:gap-x-10">
                    <li className="tracking-wider hover:text-[#0496ff]">
                        <NavLink to='/' className={({ isActive }) => isActive ? activeClassName : undefined}>
                            Home
                        </NavLink>
                    </li>
                    <li className="tracking-wider hover:text-[#0496ff]">
                        <NavLink to='/about' className={({ isActive }) => isActive ? activeClassName : undefined}>
                            About
                        </NavLink>
                    </li>
                    <li className="tracking-wider hover:text-[#0496ff]">
                        <NavLink to='/projects' className={({ isActive }) => isActive ? activeClassName : undefined}>
                            Projects
                        </NavLink>
                    </li>
                    <li className="tracking-wider hover:text-[#0496ff]">
                        <NavLink to='/contact' className={({ isActive }) => isActive ? activeClassName : undefined}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={toggleTheme}
                    className=""
                    >
                    { 
                        isLight ? (
                            <MdOutlineLightMode size={23} />
                        ) : (
                            <MdOutlineDarkMode size={23} />
                        )
                    }
                </motion.button>
            </div>
        </nav>
    )
};

export default Navigation;