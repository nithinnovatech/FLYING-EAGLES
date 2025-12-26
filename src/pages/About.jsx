import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiUsers, HiHeart, HiGlobeAlt } from 'react-icons/hi';

const About = () => {
    const values = [
        {
            icon: HiHeart,
            title: 'Passion for Adventure',
            description: 'We live and breathe the outdoors. Our love for exploration drives everything we do.'
        },
        {
            icon: HiUsers,
            title: 'Community First',
            description: 'Building a family of adventure enthusiasts who share their experiences and grow together.'
        },
        {
            icon: HiCheckCircle,
            title: 'Safety & Quality',
            description: 'Your safety is paramount. We maintain the highest standards in all our expeditions.'
        },
        {
            icon: HiGlobeAlt,
            title: 'Sustainable Travel',
            description: 'We believe in responsible tourism that preserves nature for future generations.'
        },
    ];

    const team = [
        {
            name: 'Adventure Leader',
            role: 'Lead Guide',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        },
        {
            name: 'Trek Master',
            role: 'Senior Guide',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
        },
        {
            name: 'Nature Expert',
            role: 'Wildlife Guide',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
        },
    ];

    const milestones = [
        { year: '2020', event: 'Flying Eagles Founded' },
        { year: '2021', event: '100+ Happy Travelers' },
        { year: '2022', event: 'Expanded to 10+ Destinations' },
        { year: '2023', event: '500+ Adventures Completed' },
        { year: '2024', event: 'Most Active Adventure Community' },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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
                        Our Story
                    </span>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 text-shadow-lg">
                        About Us
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        The journey of Flying Eagles - from a passion project to Hyderabad's most active adventure community
                    </p>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Story Section */}
            <section className="section bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                                OUR STORY
                            </span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-900 mb-6">
                                Born from a Love for <span className="gradient-text">Adventure</span>
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Flying Eagles was founded with a simple mission: to make adventure accessible to everyone.
                                    What started as a group of friends exploring the wilderness together has grown into
                                    Hyderabad's most vibrant adventure community.
                                </p>
                                <p>
                                    We believe that nature has the power to transform, to heal, and to inspire. Every trek we
                                    lead, every destination we explore, is an opportunity to create lasting memories and
                                    forge deep connections.
                                </p>
                                <p>
                                    Today, we're proud to have led hundreds of adventurers through some of South India's
                                    most breathtaking landscapes, and our journey is just beginning.
                                </p>
                            </div>
                            <Link to="/services" className="btn-primary mt-8 inline-flex">
                                Explore Our Trips
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80"
                                    alt="Adventure"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-accent-500 text-dark-900 p-6 rounded-2xl shadow-xl">
                                <div className="text-4xl font-heading font-bold">500+</div>
                                <div className="font-medium">Happy Adventurers</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-4">
                            OUR VALUES
                        </span>
                        <h2 className="section-title text-dark-900">
                            What Drives <span className="gradient-text">Us Forward</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 
                                flex items-center justify-center mb-6">
                                    <value.icon className="text-white text-3xl" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-dark-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                            OUR JOURNEY
                        </span>
                        <h2 className="section-title text-dark-900">
                            Milestones <span className="gradient-text">Along the Way</span>
                        </h2>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-accent-500" />

                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                    }`}
                            >
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                                    <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
                                        <div className="text-2xl font-heading font-bold text-primary-600 mb-1">
                                            {milestone.year}
                                        </div>
                                        <div className="text-gray-600 font-medium">
                                            {milestone.event}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent-500 border-4 border-white shadow-lg" />
                                <div className="w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
                />
                <div className="absolute inset-0 bg-primary-900/80" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-4xl mx-auto text-center px-4"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Join the Flying Eagles Family
                    </h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Be part of our growing community of adventure enthusiasts. Your next great adventure is just a click away.
                    </p>
                    <Link to="/contact" className="btn-accent text-lg px-8 py-4">
                        Start Your Journey
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
