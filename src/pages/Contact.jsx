import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { client } from '../client';
import Navigation from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import SocialMedia from '../components/SocialMedia';

const Contact = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: ''});
    const [loading, setIsLoading] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const { name, email, message } = formData;

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    };
    
    const submitFormHandler = () => {
        setIsLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.name,
            email: formData.email,
            message: formData.message
        };

        client.create(contact).then(() => {
            setIsLoading(false);
            setIsFormSubmitted(true)
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <section className="w-screen px-5 pb-[30%] lg:h-screen lg:px-[20%] lg:pb-0">
            <Navigation />
            <MobileNav />
            <SocialMedia />
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
            >
                <h1 className="pt-10 font-semibold text-4xl tracking-wide mb-8 lg:pt-[10%]">
                    Contact.
                </h1>
                <div>
                    <p className="text-sm mb-10">
                        Get in touch or send a email directly on
                        <br />
                        <a href="mailto:dev.mma2021@gmail.com">
                            <span className="text-[#0496ff] tracking-wide font-semibold">
                                dev.mma2021@gmail.com
                            </span>
                        </a>
                    </p>
                    {
                        !isFormSubmitted ? (
                            <form className="mb-16 lg:w-[500px]">
                                <input 
                                    type="text" 
                                    name="name"
                                    value={name}
                                    placeholder="Name"
                                    onChange={inputChangeHandler}
                                    className="w-[100%] mb-6 px-3 py-3 bg-transparent border border-gray-400 rounded-md text-sm focus:outline-none"
                                />
                                <input 
                                    type="text" 
                                    name="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={inputChangeHandler}
                                    className="w-[100%] mb-6 px-3 py-3 bg-transparent border border-gray-400 rounded-md text-sm focus:outline-none"
                                />
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    value={message}
                                    onChange={inputChangeHandler}
                                    className="w-[100%] h-[180px] mb-6 px-3 py-3 bg-transparent border border-gray-400 rounded-md text-sm focus:outline-none"
                                ></textarea>
                                <button 
                                    type="button"
                                    onClick={submitFormHandler}
                                    className="border border-gray-400 px-8 py-2 text-sm font-semibold rounded-md"
                                >
                                    {!loading ? 'Send Message' : 'Sending...'}
                                </button>
                            </form>
                        ) : (   
                            <p className="absolute bottom-[100px] text-center font-semibold text-2xl">
                                Thank for contact me!
                            </p>
                        )
                    }
                    <Link to='/'>
                        <p className="text-xs">
                            Back to home.  
                        </p>
                    </Link>
                </div>
            </motion.div>
        </section>
    )
};

export default Contact;