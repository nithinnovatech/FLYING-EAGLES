import React from 'react';
import { Link } from 'react-router-dom';
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
        'Arunachalam + Pondicherry',
        'Coorg + Chikmagalur',
        'Gokarna + Dandeli',
        'Vizag',
    ];

    const socialLinks = [
        { icon: FaFacebookF, href: '#', label: 'Facebook' },
        { icon: FaInstagram, href: '#', label: 'Instagram' },
        { icon: FaTwitter, href: '#', label: 'Twitter' },
        { icon: FaYoutube, href: '#', label: 'YouTube' },
    ];

    return (
        <footer className="bg-dark-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img
                                src="/images/logo.jpg"
                                alt="Flying Eagles"
                                className="h-16 w-16 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-heading font-bold text-xl">FLYING EAGLES</h3>
                                <p className="text-gray-400 text-sm">Explore New Heights</p>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Your trusted adventure partner for unforgettable trekking experiences.
                            Join us to explore the most beautiful destinations in South India.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                             hover:bg-primary-500 transition-colors duration-300"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6">Destinations</h4>
                        <ul className="space-y-3">
                            {destinations.map((dest) => (
                                <li key={dest}>
                                    <Link
                                        to="/services"
                                        className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                                    >
                                        {dest}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-accent-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-400">
                                    Hyderabad, Telangana, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="text-accent-400 flex-shrink-0" />
                                <a href="tel:+919876543210" className="text-gray-400 hover:text-accent-400 transition-colors">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-accent-400 flex-shrink-0" />
                                <a href="mailto:info@flyingeagles.com" className="text-gray-400 hover:text-accent-400 transition-colors">
                                    info@flyingeagles.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Flying Eagles. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
