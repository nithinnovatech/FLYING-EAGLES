import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCalendar, HiUserGroup, HiLocationMarker, HiCheck, HiStar } from 'react-icons/hi';
import { FadeInSection } from '../components/animations/StaggerContainer';
import { RevealText } from '../components/animations/AnimatedText';
import FloatingParticles from '../components/animations/FloatingParticles';

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const trips = [
        {
            id: 1,
            destination: 'Isha Foundation + Ooty',
            price: 8999,
            image: '/images/isha-adiyogi.png',
            duration: '3 Days / 2 Nights',
            groupSize: '15-20 People',
            category: 'spiritual',
            rating: 4.9,
            includes: ['Transport', 'Accommodation', 'Meals', 'Guide', 'Entry Fees'],
            highlights: [
                'Adiyogi Statue Visit',
                'Isha Yoga Center',
                'Ooty Botanical Garden',
                'Doddabetta Peak',
                'Tea Factory Tour'
            ],
            description: 'Experience the spiritual energy of Isha Foundation and the breathtaking beauty of Ooty’s hills and gardens.'
        },
        {
            id: 2,
            destination: 'Gandikota',
            price: 4699,
            image: '/images/gandikota-canyon.png',
            duration: '2 Days / 1 Night',
            groupSize: '15-20 People',
            category: 'adventure',
            rating: 4.8,
            includes: ['Transport', 'Campsite', 'Meals', 'Guide', 'Activities'],
            highlights: [
                'Grand Canyon View',
                'Madhavaraya Temple',
                'Penna River Boating',
                'Gandikota Fort Exploration',
                'Spectacular Sunrise'
            ],
            description: 'Discover India’s own Grand Canyon. A perfect blend of history, architecture, and raw natural beauty at Gandikota.'
        },
        {
            id: 3,
            destination: 'Vizag Colony',
            price: 2999,
            image: '/images/vizag-backwaters.png',
            duration: '2 Days / 1 Night',
            groupSize: '15-20 People',
            category: 'nature',
            rating: 4.7,
            includes: ['Transport', 'Resort Stay', 'Meals', 'Boating', 'Guide'],
            highlights: [
                'Backwater Boating',
                'Scenic Landscape Views',
                'Island Visit',
                'Village Tour',
                'Local Cuisine Experience'
            ],
            description: 'Relax in the serene backwaters of Vizag Colony. A perfect weekend getaway for nature lovers and peace seekers.'
        },
        {
            id: 4,
            destination: 'Warangal',
            price: 3999,
            image: '/images/warangal-temple.png',
            duration: '2 Days / 1 Night',
            groupSize: '15-20 People',
            category: 'spiritual',
            rating: 4.8,
            includes: ['Transport', 'Hotel Stay', 'Meals', 'Guide', 'Entry Fees'],
            highlights: [
                'Thousand Pillar Temple',
                'Warangal Fort',
                'Bhadrakali Temple',
                'Laknavaram Lake',
                'Ramappa Temple (UNESCO)'
            ],
            description: 'Step back in time to the Kakatiya era. Explore ancient temples, magnificent forts, and beautiful lakes in Warangal.'
        },
    ];

    const categories = [
        { id: 'all', name: 'All Trips' },
        { id: 'nature', name: 'Nature' },
        { id: 'adventure', name: 'Adventure' },
        { id: 'spiritual', name: 'Spiritual' },
    ];

    const filteredTrips = selectedCategory === 'all'
        ? trips
        : trips.filter(trip => trip.category === selectedCategory);

    // Letter animation for title
    const titleLetters = "Adventure Awaits".split('');
    const letterVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                delay: i * 0.04,
                duration: 0.5,
                type: "spring",
                damping: 12
            }
        })
    };

    return (
        <div className="overflow-hidden">
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
                        Our Packages
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
                            Discover our handcrafted adventure packages designed for unforgettable experiences
                        </p>
                    </RevealText>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
            </section>

            {/* Filter Section */}
            <section className="bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {categories.map((category, index) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category.id
                                    ? 'bg-primary-500 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {category.name}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Trips Section */}
            <section className="section bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            className="space-y-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {filteredTrips.map((trip, index) => (
                                <motion.div
                                    key={trip.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, type: "spring", damping: 20 }}
                                    className="bg-white rounded-3xl shadow-xl overflow-hidden group"
                                    whileHover={{ y: -5, boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.15)" }}
                                >
                                    <div className="grid lg:grid-cols-2">
                                        {/* Image */}
                                        <div className="relative h-72 lg:h-auto overflow-hidden">
                                            <motion.img
                                                src={trip.image}
                                                alt={trip.destination}
                                                className="w-full h-full object-cover"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                                            <div className="absolute top-4 left-4 flex gap-2">
                                                <motion.span
                                                    className="px-3 py-1 bg-accent-500 text-dark-900 rounded-full text-sm font-bold"
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    ₹{trip.price.toLocaleString()}
                                                </motion.span>
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-dark-900 rounded-full text-sm font-medium flex items-center gap-1">
                                                    <HiStar className="text-accent-500" />
                                                    {trip.rating}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 lg:p-10">
                                            <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                                                {[
                                                    { icon: HiCalendar, text: trip.duration },
                                                    { icon: HiUserGroup, text: trip.groupSize },
                                                    { icon: HiLocationMarker, text: 'South India' }
                                                ].map((item, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="flex items-center gap-2"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: i * 0.1 }}
                                                    >
                                                        <item.icon className="text-primary-500" />
                                                        <span>{item.text}</span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <h3 className="text-3xl font-heading font-bold text-dark-900 mb-4">
                                                {trip.destination}
                                            </h3>

                                            <p className="text-gray-600 mb-6">
                                                {trip.description}
                                            </p>

                                            {/* Highlights */}
                                            <div className="mb-6">
                                                <h4 className="font-semibold text-dark-900 mb-3">Trip Highlights</h4>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {trip.highlights.map((highlight, i) => (
                                                        <motion.div
                                                            key={highlight}
                                                            className="flex items-center gap-2 text-sm text-gray-600"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: i * 0.05 }}
                                                        >
                                                            <HiCheck className="text-primary-500 flex-shrink-0" />
                                                            <span>{highlight}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Includes */}
                                            <div className="mb-6">
                                                <h4 className="font-semibold text-dark-900 mb-3">Package Includes</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {trip.includes.map((item, i) => (
                                                        <motion.span
                                                            key={item}
                                                            className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium"
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: i * 0.05 }}
                                                            whileHover={{ scale: 1.05 }}
                                                        >
                                                            {item}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                                                    <a
                                                        href={`https://wa.me/919876543210?text=Hello Flying Eagles! I am interested in booking the ${trip.destination} trip. Please provide more details.`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn-primary w-full text-center block"
                                                    >
                                                        Book Now
                                                    </a>
                                                </motion.div>
                                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                                                    <a
                                                        href="tel:+919876543210"
                                                        className="btn-secondary w-full text-center block border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white"
                                                    >
                                                        Call to Enquire
                                                    </a>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Info Section */}
            <section className="section bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeInSection>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-900 mb-6">
                            Can't Find What You're Looking For?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            We also organize custom trips and corporate outings. Contact us to plan your perfect adventure!
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <a
                                href="https://wa.me/919876543210?text=Hello Flying Eagles! I would like to get a custom quote for a trip."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-accent text-lg px-8 py-4 inline-block"
                            >
                                Get Custom Quote
                            </a>
                        </motion.div>
                    </FadeInSection>
                </div>
            </section>
        </div>
    );
};

export default Services;
