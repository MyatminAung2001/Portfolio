import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineHome, MdDoneAll } from 'react-icons/md';
import { FiUser, FiSend } from 'react-icons/fi';

import { ThemeContext } from '../context/theme';

const MobileNav = () => {

    const [{ theme }] = useContext(ThemeContext);

    let activeClassName = "text-[#0496ff]"

    return (
        <div className="">
            <ul className="w-[100%] fixed z-10 bottom-0 left-0 flex items-center justify-evenly py-2 gap-y-10 shadow-CustomShadow lg:hidden" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <NavLink to='/' className={({ isActive }) => isActive ? activeClassName : undefined}>
                    <li className="flex flex-col gap-y-1 items-center">
                        <MdOutlineHome size={20} />
                        <p className="text-xs">
                            Home
                        </p>
                    </li>
                </NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? activeClassName : undefined}>
                    <li className="flex flex-col gap-y-1 items-center">
                        <FiUser size={20} />
                        <p className="text-xs">
                            About
                        </p>
                    </li>
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? activeClassName : undefined}>
                    <li className="flex flex-col gap-y-1 items-center">
                        <MdDoneAll size={20} />
                        <p className="text-xs">
                            Projects
                        </p>
                    </li>
                </NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ? activeClassName : undefined}>
                    <li className="flex flex-col gap-y-1 items-center">
                        <FiSend size={20} />
                        <p className="text-xs">
                            Contact
                        </p>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}

export default MobileNav