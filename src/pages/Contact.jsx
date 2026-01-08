import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { FadeInSection } from '../components/animations/StaggerContainer';
import { RevealText } from '../components/animations/AnimatedText';
import FloatingParticles from '../components/animations/FloatingParticles';

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
        'Isha Foundation + Ooty',
        'Gandikota',
        'Vizag Colony',
        'Warangal',
        'Kerala',
        'Custom Trip'
    ];

    const contactInfo = [
        {
            icon: HiPhone,
            title: 'SANJAY SAHO',
            value: '9966 81 3435',
            href: 'tel:+919966813435'
        },
        {
            icon: HiPhone,
            title: 'ANIL REDDY',
            value: '9966 91 5455',
            href: 'tel:+919966915455'
        },
        {
            icon: FaWhatsapp,
            title: 'WhatsApp',
            value: '9966 91 5455',
            href: 'https://wa.me/919966915455'
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

    // Letter animation for title
    const titleLetters = "Contact Us".split('');
    const letterVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
                type: "spring",
                damping: 12
            }
        })
    };

    return (
        <div className="overflow-hidden">
            <Toaster position="top-center" />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-cover bg-center scale-110"
                    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 1.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

                {/* Floating particles */}
                <FloatingParticles count={12} color="rgba(255, 255, 255, 0.5)" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative z-10 text-center text-white px-4"
                >
                    <motion.span
                        className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Get In Touch
                    </motion.span>

                    {/* Animated Title */}
                    <motion.h1
                        className="text-5xl md:text-7xl font-heading font-bold mb-4 text-shadow-lg flex justify-center flex-wrap"
                        initial="hidden"
                        animate="visible"
                    >
                        {titleLetters.map((letter, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterVariants}
                                className="inline-block"
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <RevealText delay={0.6}>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Ready for your next adventure? Reach out to us and let's plan something amazing!
                        </p>
                    </RevealText>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Contact Section */}
            <section className="section bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <FadeInSection direction="right">
                            <motion.span
                                className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                BOOK YOUR TRIP
                            </motion.span>
                            <h2 className="text-4xl font-heading font-bold text-dark-900 mb-6">
                                Send Us a <span className="gradient-text">Message</span>
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we'll get back to you within 24 hours with all the details you need.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        { id: 'name', label: 'Your Name *', type: 'text', placeholder: 'John Doe' },
                                        { id: 'phone', label: 'Phone Number *', type: 'tel', placeholder: '+91 98765 43210' }
                                    ].map((field, index) => (
                                        <motion.div
                                            key={field.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                                                {field.label}
                                            </label>
                                            <input
                                                type={field.type}
                                                id={field.id}
                                                name={field.id}
                                                value={formData[field.id]}
                                                onChange={handleChange}
                                                required
                                                className="input-primary focus:scale-[1.01] transition-transform"
                                                placeholder={field.placeholder}
                                            />
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
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
                                        className="input-primary focus:scale-[1.01] transition-transform"
                                        placeholder="john@example.com"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <label htmlFor="trip" className="block text-sm font-medium text-gray-700 mb-2">
                                        Select Trip
                                    </label>
                                    <select
                                        id="trip"
                                        name="trip"
                                        value={formData.trip}
                                        onChange={handleChange}
                                        className="input-primary focus:scale-[1.01] transition-transform"
                                    >
                                        <option value="">Choose a destination</option>
                                        {trips.map((trip) => (
                                            <option key={trip} value={trip}>{trip}</option>
                                        ))}
                                    </select>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="input-primary resize-none focus:scale-[1.01] transition-transform"
                                        placeholder="Tell us about your adventure plans..."
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <motion.span
                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                            />
                                            Sending...
                                        </span>
                                    ) : 'Send Message'}
                                </motion.button>
                            </form>
                        </FadeInSection>

                        {/* Contact Info */}
                        <FadeInSection direction="left" delay={0.2}>
                            <motion.span
                                className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                CONTACT INFO
                            </motion.span>
                            <h2 className="text-4xl font-heading font-bold text-dark-900 mb-6">
                                Reach Out <span className="gradient-text">Directly</span>
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Have questions? We're here to help! Contact us through any of these channels.
                            </p>

                            <div className="grid gap-4">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.title}
                                        href={info.href}
                                        className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 
                                                transition-all duration-300 group"
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                                    >
                                        <motion.div
                                            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 
                                                    flex items-center justify-center"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <info.icon className="text-white text-2xl" />
                                        </motion.div>
                                        <div>
                                            <div className="text-sm text-gray-500">{info.title}</div>
                                            <div className="text-lg font-semibold text-dark-900">{info.value}</div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-10">
                                <h3 className="text-lg font-heading font-bold text-dark-900 mb-4">
                                    Follow Us
                                </h3>
                                <div className="flex gap-4">
                                    {[
                                        { icon: FaInstagram, color: 'bg-gradient-to-br from-purple-600 to-pink-500' },
                                        { icon: FaFacebookF, color: 'bg-blue-600' },
                                        { icon: FaWhatsapp, color: 'bg-green-500' }
                                    ].map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href="#"
                                            className={`w-12 h-12 rounded-full ${social.color} flex items-center justify-center text-white`}
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            whileTap={{ scale: 0.9 }}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <social.icon size={22} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Working Hours */}
                            <motion.div
                                className="mt-10 p-6 bg-primary-50 rounded-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 4 }}
                                    >
                                        <HiClock className="text-primary-600 text-2xl" />
                                    </motion.div>
                                    <h3 className="text-lg font-heading font-bold text-dark-900">
                                        Working Hours
                                    </h3>
                                </div>
                                <div className="space-y-2 text-gray-600">
                                    <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                                    <p>Sunday: 10:00 AM - 6:00 PM</p>
                                </div>
                            </motion.div>
                        </FadeInSection>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-96 bg-gray-200 relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <HiLocationMarker className="text-primary-500 text-6xl mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-2xl font-heading font-bold text-dark-900 mb-2">
                            Hyderabad, Telangana
                        </h3>
                        <p className="text-gray-600">
                            India
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Contact;
