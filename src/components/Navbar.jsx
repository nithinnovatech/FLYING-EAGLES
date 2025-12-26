import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-lg'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src="/images/logo.jpg"
                                alt="Flying Eagles"
                                className="h-14 w-14 rounded-full object-cover shadow-lg"
                            />
                            <div className="hidden sm:block">
                                <h1 className={`font-heading font-bold text-lg leading-tight ${scrolled ? 'text-primary-600' : 'text-white text-shadow'
                                    }`}>
                                    FLYING EAGLES
                                </h1>
                                <p className={`text-xs font-medium ${scrolled ? 'text-gray-500' : 'text-white/80'
                                    }`}>
                                    Explore New Heights
                                </p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative font-medium transition-colors duration-200 ${scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-400'
                                        } ${location.pathname === link.path ? (scrolled ? 'text-primary-600' : 'text-accent-400') : ''}`}
                                >
                                    {link.name}
                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className={`absolute -bottom-1 left-0 right-0 h-0.5 ${scrolled ? 'bg-primary-600' : 'bg-accent-400'
                                                }`}
                                        />
                                    )}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="btn-primary text-sm"
                            >
                                Book Now
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'
                                }`}
                        >
                            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />
                        <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl">
                            <div className="p-6 pt-24">
                                <div className="flex flex-col gap-4">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                to={link.path}
                                                className={`block py-3 px-4 rounded-xl font-medium transition-colors ${location.pathname === link.path
                                                        ? 'bg-primary-50 text-primary-600'
                                                        : 'text-gray-700 hover:bg-gray-50'
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="mt-4"
                                    >
                                        <Link
                                            to="/contact"
                                            className="btn-primary w-full text-center"
                                        >
                                            Book Now
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
