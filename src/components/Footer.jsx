import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const destinations = [
        'Isha Foundation + Ooty',
        'Gandikota',
        'Vizag Colony',
        'Warangal',
    ];

    const socialLinks = [
        { icon: FaFacebookF, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
        { icon: FaInstagram, href: 'https://www.instagram.com/flyingeaglesclub._?igsh=bnNubTNpeDJ5aDI0', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500' },
        { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
        { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <footer className="bg-dark-900 text-white relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent-500/10 blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 12, repeat: Infinity }}
                />
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Brand Section */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <motion.div
                            className="flex items-center gap-3"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.img
                                src="/images/logo.jpg"
                                alt="Flying Eagles"
                                className="h-16 w-16 rounded-full object-cover"
                                whileHover={{ rotate: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                            <div>
                                <h3 className="font-heading font-bold text-xl">FLYING EAGLES</h3>
                                <p className="text-gray-400 text-sm">Explore New Heights</p>
                            </div>
                        </motion.div>
                        <p className="text-gray-400 leading-relaxed">
                            Your trusted adventure partner for unforgettable trekking experiences.
                            Join us to explore the most beautiful destinations in South India.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                                            ${social.color} transition-all duration-300`}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 + 0.5 }}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-accent-400 transition-colors duration-200 
                                                 inline-block hover:translate-x-2 transform transition-transform"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Destinations */}
                    <motion.div variants={itemVariants}>
                        <h4 className="font-heading font-bold text-lg mb-6">Destinations</h4>
                        <ul className="space-y-3">
                            {destinations.map((dest, index) => (
                                <motion.li
                                    key={dest}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to="/services"
                                        className="text-gray-400 hover:text-accent-400 transition-colors duration-200
                                                 inline-block hover:translate-x-2 transform transition-transform"
                                    >
                                        {dest}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <motion.li
                                className="flex items-start gap-3 group"
                                whileHover={{ x: 5 }}
                            >
                                <FaMapMarkerAlt className="text-accent-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-gray-400">
                                    Hyderabad, Telangana, India
                                </span>
                            </motion.li>
                            <motion.li
                                className="flex items-center gap-3 group"
                                whileHover={{ x: 5 }}
                            >
                                <FaPhoneAlt className="text-accent-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <div className="flex flex-col">
                                    <a href="tel:+919966813435" className="text-gray-400 hover:text-accent-400 transition-colors">
                                        9966 81 3435 - SANJAY SAHO
                                    </a>
                                    <a href="tel:+919966915455" className="text-gray-400 hover:text-accent-400 transition-colors">
                                        9966 91 5455 - ANIL REDDY
                                    </a>
                                </div>
                            </motion.li>
                            <motion.li
                                className="flex items-center gap-3 group"
                                whileHover={{ x: 5 }}
                            >
                                <FaEnvelope className="text-accent-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <a href="mailto:info@flyingeagles.com" className="text-gray-400 hover:text-accent-400 transition-colors">
                                    info@flyingeagles.com
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                className="border-t border-white/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <motion.p
                            className="text-gray-400 text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            © {currentYear} Flying Eagles. All rights reserved.
                        </motion.p>
                        <motion.div
                            className="flex gap-6 text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <a href="#" className="text-gray-400 hover:text-white transition-colors hover:underline">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors hover:underline">
                                Terms of Service
                            </a>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
