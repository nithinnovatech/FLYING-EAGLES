import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiShieldCheck, HiUserGroup, HiStar, HiGlobeAlt, HiHeart, HiLightningBolt } from 'react-icons/hi';
import Hero from '../components/Hero';
import TripCard from '../components/TripCard';

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
        { value: '500+', label: 'Happy Travelers' },
        { value: '50+', label: 'Trips Completed' },
        { value: '4.9', label: 'Rating' },
        { value: '10+', label: 'Destinations' },
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
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Trips Section */}
            <section className="section bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                            OUR TRIPS
                        </span>
                        <h2 className="section-title text-dark-900">
                            Featured <span className="gradient-text">Destinations</span>
                        </h2>
                        <p className="section-subtitle">
                            Handpicked adventures that promise breathtaking views, thrilling activities, and memories that last a lifetime.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trips.map((trip, index) => (
                            <TripCard key={trip.destination} {...trip} index={index} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link to="/services" className="btn-primary text-lg">
                            View All Trips
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-4">
                            WHY CHOOSE US
                        </span>
                        <h2 className="section-title text-dark-900">
                            The Flying Eagles <span className="gradient-text">Difference</span>
                        </h2>
                        <p className="section-subtitle">
                            We go above and beyond to make every adventure safe, exciting, and unforgettable.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 
                                flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-dark-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
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

                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                            Ready for Your Next Adventure?
                        </h2>
                        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                            Join hundreds of adventurers who have discovered the magic of exploring with Flying Eagles.
                            Your next unforgettable journey awaits!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
                                Book Your Trip
                            </Link>
                            <Link to="/about" className="btn-secondary text-lg px-8 py-4">
                                Learn About Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
