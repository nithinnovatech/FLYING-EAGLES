import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiCalendar, HiUserGroup, HiLocationMarker, HiCheck, HiStar } from 'react-icons/hi';

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const trips = [
        {
            id: 1,
            destination: 'Arunachalam + Pondicherry',
            price: 6599,
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
            duration: '3 Days / 2 Nights',
            groupSize: '15-20 People',
            category: 'spiritual',
            rating: 4.9,
            includes: ['Transport', 'Accommodation', 'Meals', 'Guide', 'Entry Fees'],
            highlights: [
                'Thiruvannamalai Temple Visit',
                'Girivalam Pradakshina',
                'French Colony Walk',
                'Beach Activities',
                'Auroville Visit'
            ],
            description: 'Experience the spiritual energy of Arunachalam with its sacred Girivalam path, followed by the charming French heritage of Pondicherry.'
        },
        {
            id: 2,
            destination: 'Coorg + Chikmagalur',
            price: 7699,
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
            duration: '4 Days / 3 Nights',
            groupSize: '15-20 People',
            category: 'nature',
            rating: 4.8,
            includes: ['Transport', 'Accommodation', 'Meals', 'Guide', 'Activities'],
            highlights: [
                'Abbey Falls Trek',
                'Coffee Plantation Tour',
                'Mullayanagiri Peak',
                'Raja Seat Sunset',
                'Dubare Elephant Camp'
            ],
            description: 'Explore the Scotland of India with its lush coffee plantations, misty mountains, and cascading waterfalls in this magical journey.'
        },
        {
            id: 3,
            destination: 'Gokarna + Dandeli',
            price: 6999,
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
            duration: '3 Days / 2 Nights',
            groupSize: '15-20 People',
            category: 'adventure',
            rating: 4.9,
            includes: ['Transport', 'Accommodation', 'Meals', 'Adventure Activities', 'Guide'],
            highlights: [
                'Beach Trek: Paradise to Om Beach',
                'White Water Rafting',
                'Kayaking',
                'Sunset at Kudle Beach',
                'Jungle Safari'
            ],
            description: 'The perfect blend of beach vibes and adrenaline-pumping adventure sports. Trek through pristine beaches and conquer the rapids!'
        },
        {
            id: 4,
            destination: 'Vizag',
            price: 6599,
            image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80',
            duration: '3 Days / 2 Nights',
            groupSize: '15-20 People',
            category: 'nature',
            rating: 4.7,
            includes: ['Transport', 'Accommodation', 'Meals', 'Guide', 'Entry Fees'],
            highlights: [
                'Araku Valley',
                'Borra Caves',
                'Rishikonda Beach',
                'Submarine Museum',
                'Kailasagiri Hill'
            ],
            description: 'Discover the jewel of the East Coast with its stunning beaches, tribal villages, and the magnificent Borra Caves.'
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

    return (
        <div className="overflow-hidden">
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
                        Our Packages
                    </span>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 text-shadow-lg">
                        Adventure Awaits
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Discover our handcrafted adventure packages designed for unforgettable experiences
                    </p>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
            </section>

            {/* Filter Section */}
            <section className="bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category.id
                                        ? 'bg-primary-500 text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trips Section */}
            <section className="section bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-12">
                        {filteredTrips.map((trip, index) => (
                            <motion.div
                                key={trip.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-3xl shadow-xl overflow-hidden"
                            >
                                <div className="grid lg:grid-cols-2">
                                    {/* Image */}
                                    <div className="relative h-72 lg:h-auto">
                                        <img
                                            src={trip.image}
                                            alt={trip.destination}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <span className="px-3 py-1 bg-accent-500 text-dark-900 rounded-full text-sm font-bold">
                                                ₹{trip.price.toLocaleString()}
                                            </span>
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-dark-900 rounded-full text-sm font-medium flex items-center gap-1">
                                                <HiStar className="text-accent-500" />
                                                {trip.rating}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 lg:p-10">
                                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <HiCalendar className="text-primary-500" />
                                                <span>{trip.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <HiUserGroup className="text-primary-500" />
                                                <span>{trip.groupSize}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <HiLocationMarker className="text-primary-500" />
                                                <span>South India</span>
                                            </div>
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
                                                {trip.highlights.map((highlight) => (
                                                    <div key={highlight} className="flex items-center gap-2 text-sm text-gray-600">
                                                        <HiCheck className="text-primary-500 flex-shrink-0" />
                                                        <span>{highlight}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Includes */}
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-dark-900 mb-3">Package Includes</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {trip.includes.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Link
                                                to="/contact"
                                                className="btn-primary flex-1 text-center"
                                            >
                                                Book Now
                                            </Link>
                                            <a
                                                href="tel:+919876543210"
                                                className="btn-secondary flex-1 text-center border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white"
                                            >
                                                Call to Enquire
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="section bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-900 mb-6">
                            Can't Find What You're Looking For?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            We also organize custom trips and corporate outings. Contact us to plan your perfect adventure!
                        </p>
                        <Link to="/contact" className="btn-accent text-lg px-8 py-4">
                            Get Custom Quote
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
