import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiShieldCheck, HiUserGroup, HiStar, HiGlobeAlt, HiHeart, HiLightningBolt } from 'react-icons/hi';
import Hero from '../components/Hero';
import TripCard from '../components/TripCard';
import AnimatedCounter from '../components/animations/AnimatedCounter';
import StaggerContainer, { StaggerItem, FadeInSection } from '../components/animations/StaggerContainer';
import { FloatingShapes } from '../components/animations/FloatingParticles';

const Home = () => {
    const trips = [
        {
            destination: 'Arunachalam + Pondicherry',
            price: 6599,
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
            duration: '3 Days / 2 Nights',
            description: 'Experience the spiritual vibes of Arunachalam and the French charm of Pondicherry.'
        },
        {
            destination: 'Coorg + Chikmagalur',
            price: 7699,
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
            duration: '4 Days / 3 Nights',
            description: 'Explore the Scotland of India with lush coffee plantations and misty mountains.'
        },
        {
            destination: 'Gokarna + Dandeli',
            price: 6999,
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
            duration: '3 Days / 2 Nights',
            description: 'Beach vibes meet adventure sports in this perfect coastal getaway.'
        },
        {
            destination: 'Vizag',
            price: 6599,
            image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80',
            duration: '3 Days / 2 Nights',
            description: 'Discover the jewel of the East Coast with stunning beaches and hills.'
        },
        {
            destination: 'Isha Foundation + Ooty',
            price: 8999,
            image: '/images/isha-adiyogi.png',
            duration: '3 Days / 2 Nights',
            description: 'Visit the majestic Adiyogi statue and the scenic hills of Ooty.'
        },
        {
            destination: 'Gandikota',
            price: 4699,
            image: '/images/gandikota-canyon.png',
            duration: '2 Days / 1 Night',
            description: 'Explore the Grand Canyon of India, the ancient fort, and Penna river.'
        },
        {
            destination: 'Vizag Colony',
            price: 2999,
            image: '/images/vizag-backwaters.png',
            duration: '2 Days / 1 Night',
            description: 'Enjoy the tranquil backwaters, boating, and scenic views of Vizag colony.'
        },
        {
            destination: 'Warangal',
            price: 3999,
            image: '/images/warangal-temple.png',
            duration: '2 Days / 1 Night',
            description: 'Discover the cultural heritage of the Thousand Pillar Temple and Warangal Fort.'
        },
        {
            destination: 'Kerala',
            price: 13999,
            image: '/images/kerala-backwaters.png',
            duration: '1 Day',
            description: 'Experience the serene backwaters, lush greenery, and traditional houseboats of God\'s Own Country.'
        },
    ];

    const features = [
        {
            icon: HiShieldCheck,
            title: 'Safety First',
            description: 'Your safety is our top priority with experienced guides and proper equipment.'
        },
        {
            icon: HiUserGroup,
            title: 'Expert Guides',
            description: 'Our certified guides ensure you have the best adventure experience.'
        },
        {
            icon: HiStar,
            title: 'Premium Experience',
            description: 'Handpicked accommodations and activities for unforgettable memories.'
        },
        {
            icon: HiGlobeAlt,
            title: 'Best Destinations',
            description: 'Carefully curated routes to the most beautiful locations in South India.'
        },
        {
            icon: HiHeart,
            title: 'Passionate Team',
            description: 'Our team lives and breathes adventure, sharing their love for exploration.'
        },
        {
            icon: HiLightningBolt,
            title: 'Thrilling Activities',
            description: 'From trekking to water sports, we offer diverse adventure activities.'
        },
    ];

    const stats = [
        { value: '500', suffix: '+', label: 'Happy Travelers' },
        { value: '50', suffix: '+', label: 'Trips Completed' },
        { value: '4.9', suffix: '', label: 'Rating' },
        { value: '10', suffix: '+', label: 'Destinations' },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <Hero
                title="Explore New Heights"
                subtitle="Join Hyderabad's most active adventure community for unforgettable trekking experiences across South India"
            />

            {/* Stats Section */}
            <section className="relative -mt-16 z-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-1">
                                    <AnimatedCounter
                                        to={parseFloat(stat.value)}
                                        suffix={stat.suffix}
                                        duration={2}
                                        decimals={stat.value.includes('.') ? 1 : 0}
                                    />
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Trips Section */}
            <section className="section bg-gray-50 relative overflow-hidden">
                {/* Background decoration */}
                <FloatingShapes />

                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeInSection className="text-center mb-12">
                        <motion.span
                            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            OUR TRIPS
                        </motion.span>
                        <h2 className="section-title text-dark-900">
                            Featured <span className="gradient-text">Destinations</span>
                        </h2>
                        <p className="section-subtitle">
                            Handpicked adventures that promise breathtaking views, thrilling activities, and memories that last a lifetime.
                        </p>
                    </FadeInSection>

                    <StaggerContainer
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        staggerDelay={0.15}
                    >
                        {trips.map((trip, index) => (
                            <StaggerItem key={trip.destination} animation="fadeUp">
                                <TripCard {...trip} index={index} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    <FadeInSection delay={0.4} className="text-center mt-12">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Link to="/services" className="btn-primary text-lg">
                                View All Trips
                            </Link>
                        </motion.div>
                    </FadeInSection>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <FadeInSection className="text-center mb-12">
                        <motion.span
                            className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            WHY CHOOSE US
                        </motion.span>
                        <h2 className="section-title text-dark-900">
                            The Flying Eagles <span className="gradient-text">Difference</span>
                        </h2>
                        <p className="section-subtitle">
                            We go above and beyond to make every adventure safe, exciting, and unforgettable.
                        </p>
                    </FadeInSection>

                    <StaggerContainer
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        staggerDelay={0.1}
                    >
                        {features.map((feature, index) => (
                            <StaggerItem key={feature.title} animation="fadeUp">
                                <motion.div
                                    className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500"
                                    whileHover={{ y: -5 }}
                                >
                                    <motion.div
                                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 
                                        flex items-center justify-center mb-6"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <feature.icon className="text-white text-2xl" />
                                    </motion.div>
                                    <h3 className="text-xl font-heading font-bold text-dark-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                />
                <div className="absolute inset-0 bg-primary-900/85" />

                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent-500/20 blur-3xl"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary-500/20 blur-3xl"
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <FadeInSection>
                        <motion.h2
                            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Ready for Your Next Adventure?
                        </motion.h2>
                        <motion.p
                            className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Join hundreds of adventurers who have discovered the magic of exploring with Flying Eagles.
                            Your next unforgettable journey awaits!
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Link to="/contact" className="btn-accent text-lg px-8 py-4">
                                    Book Your Trip
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Link to="/about" className="btn-secondary text-lg px-8 py-4">
                                    Learn About Us
                                </Link>
                            </motion.div>
                        </motion.div>
                    </FadeInSection>
                </div>
            </section>
        </div>
    );
};

export default Home;
