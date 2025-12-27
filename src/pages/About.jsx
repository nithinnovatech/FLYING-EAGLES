import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiUsers, HiHeart, HiGlobeAlt } from 'react-icons/hi';
import AnimatedCounter from '../components/animations/AnimatedCounter';
import StaggerContainer, { StaggerItem, FadeInSection } from '../components/animations/StaggerContainer';
import { RevealText } from '../components/animations/AnimatedText';
import FloatingParticles from '../components/animations/FloatingParticles';

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

    // Letter animation variants for title
    const letterVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.6,
                type: "spring",
                damping: 12
            }
        })
    };

    const titleLetters = "About Us".split('');

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-cover bg-center scale-110"
                    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 1.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

                {/* Floating particles */}
                <FloatingParticles count={15} color="rgba(255, 255, 255, 0.5)" />

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
                        Our Story
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
                            The journey of Flying Eagles - from a passion project to Hyderabad's most active adventure community
                        </p>
                    </RevealText>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Story Section */}
            <section className="section bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeInSection direction="right">
                            <motion.span
                                className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                OUR STORY
                            </motion.span>
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
                            <motion.div
                                className="mt-8"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link to="/services" className="btn-primary inline-flex">
                                    Explore Our Trips
                                </Link>
                            </motion.div>
                        </FadeInSection>

                        <FadeInSection direction="left" delay={0.2}>
                            <div className="relative">
                                <motion.div
                                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80"
                                        alt="Adventure"
                                        className="w-full h-[500px] object-cover"
                                    />
                                </motion.div>

                                {/* Floating stat card */}
                                <motion.div
                                    className="absolute -bottom-6 -left-6 bg-accent-500 text-dark-900 p-6 rounded-2xl shadow-xl"
                                    initial={{ opacity: 0, x: -50, y: 50 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-4xl font-heading font-bold">
                                        <AnimatedCounter to={500} suffix="+" duration={2} />
                                    </div>
                                    <div className="font-medium">Happy Adventurers</div>
                                </motion.div>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section bg-gray-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeInSection className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-4">
                            OUR VALUES
                        </span>
                        <h2 className="section-title text-dark-900">
                            What Drives <span className="gradient-text">Us Forward</span>
                        </h2>
                    </FadeInSection>

                    <StaggerContainer
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        staggerDelay={0.1}
                    >
                        {values.map((value, index) => (
                            <StaggerItem key={value.title} animation="fadeUp">
                                <motion.div
                                    className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                                    whileHover={{ y: -5 }}
                                >
                                    <motion.div
                                        className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 
                                        flex items-center justify-center mb-6"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <value.icon className="text-white text-3xl" />
                                    </motion.div>
                                    <h3 className="text-xl font-heading font-bold text-dark-900 mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {value.description}
                                    </p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section bg-white">
                <div className="max-w-4xl mx-auto">
                    <FadeInSection className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                            OUR JOURNEY
                        </span>
                        <h2 className="section-title text-dark-900">
                            Milestones <span className="gradient-text">Along the Way</span>
                        </h2>
                    </FadeInSection>

                    <div className="relative">
                        {/* Animated timeline line */}
                        <motion.div
                            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />

                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                    }`}
                            >
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                                    <motion.div
                                        className="bg-white p-6 rounded-2xl shadow-lg inline-block"
                                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="text-2xl font-heading font-bold text-primary-600 mb-1">
                                            {milestone.year}
                                        </div>
                                        <div className="text-gray-600 font-medium">
                                            {milestone.event}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Animated dot */}
                                <motion.div
                                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent-500 border-4 border-white shadow-lg"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                                />
                                <div className="w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                />
                <div className="absolute inset-0 bg-primary-900/85" />

                {/* Animated orbs */}
                <motion.div
                    className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent-500/20 blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                <FadeInSection className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Join the Flying Eagles Family
                    </h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Be part of our growing community of adventure enthusiasts. Your next great adventure is just a click away.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Link to="/contact" className="btn-accent text-lg px-8 py-4">
                            Start Your Journey
                        </Link>
                    </motion.div>
                </FadeInSection>
            </section>
        </div>
    );
};

export default About;
