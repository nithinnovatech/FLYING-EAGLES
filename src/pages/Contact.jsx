import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        trip: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const trips = [
        'Arunachalam + Pondicherry',
        'Coorg + Chikmagalur',
        'Gokarna + Dandeli',
        'Vizag',
        'Custom Trip'
    ];

    const contactInfo = [
        {
            icon: HiPhone,
            title: 'Call Us',
            value: '+91 98765 43210',
            href: 'tel:+919876543210'
        },
        {
            icon: FaWhatsapp,
            title: 'WhatsApp',
            value: '+91 98765 43210',
            href: 'https://wa.me/919876543210'
        },
        {
            icon: HiMail,
            title: 'Email Us',
            value: 'info@flyingeagles.com',
            href: 'mailto:info@flyingeagles.com'
        },
        {
            icon: HiLocationMarker,
            title: 'Location',
            value: 'Hyderabad, Telangana',
            href: '#'
        }
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast.success('Thank you! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', trip: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <div className="overflow-hidden">
            <Toaster position="top-center" />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 text-center text-white px-4"
                >
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                        Get In Touch
                    </span>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 text-shadow-lg">
                        Contact Us
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Ready for your next adventure? Reach out to us and let's plan something amazing!
                    </p>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Contact Section */}
            <section className="section bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                                BOOK YOUR TRIP
                            </span>
                            <h2 className="text-4xl font-heading font-bold text-dark-900 mb-6">
                                Send Us a <span className="gradient-text">Message</span>
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we'll get back to you within 24 hours with all the details you need.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="input-primary"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="input-primary"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="input-primary"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="trip" className="block text-sm font-medium text-gray-700 mb-2">
                                        Select Trip
                                    </label>
                                    <select
                                        id="trip"
                                        name="trip"
                                        value={formData.trip}
                                        onChange={handleChange}
                                        className="input-primary"
                                    >
                                        <option value="">Choose a destination</option>
                                        {trips.map((trip) => (
                                            <option key={trip} value={trip}>{trip}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="input-primary resize-none"
                                        placeholder="Tell us about your adventure plans..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-4">
                                CONTACT INFO
                            </span>
                            <h2 className="text-4xl font-heading font-bold text-dark-900 mb-6">
                                Reach Out <span className="gradient-text">Directly</span>
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Have questions? We're here to help! Contact us through any of these channels.
                            </p>

                            <div className="grid gap-6">
                                {contactInfo.map((info) => (
                                    <a
                                        key={info.title}
                                        href={info.href}
                                        className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 
                                    flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <info.icon className="text-white text-2xl" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500">{info.title}</div>
                                            <div className="text-lg font-semibold text-dark-900">{info.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-10">
                                <h3 className="text-lg font-heading font-bold text-dark-900 mb-4">
                                    Follow Us
                                </h3>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                                    >
                                        <FaInstagram size={22} />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                                    >
                                        <FaFacebookF size={20} />
                                    </a>
                                    <a
                                        href="https://wa.me/919876543210"
                                        className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                                    >
                                        <FaWhatsapp size={22} />
                                    </a>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="mt-10 p-6 bg-primary-50 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <HiClock className="text-primary-600 text-2xl" />
                                    <h3 className="text-lg font-heading font-bold text-dark-900">
                                        Working Hours
                                    </h3>
                                </div>
                                <div className="space-y-2 text-gray-600">
                                    <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                                    <p>Sunday: 10:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-96 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <HiLocationMarker className="text-primary-500 text-5xl mx-auto mb-4" />
                        <h3 className="text-2xl font-heading font-bold text-dark-900 mb-2">
                            Hyderabad, Telangana
                        </h3>
                        <p className="text-gray-600">
                            India
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
