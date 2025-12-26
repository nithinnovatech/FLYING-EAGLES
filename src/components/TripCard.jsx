import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiCalendar, HiUserGroup, HiLocationMarker } from 'react-icons/hi';

const TripCard = ({
    destination,
    price,
    image,
    duration = "3 Days / 2 Nights",
    groupSize = "15-20 People",
    description,
    index = 0
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl 
                 transition-all duration-500 hover:-translate-y-2"
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={destination}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-accent-500 text-dark-900 px-4 py-2 rounded-full 
                        font-heading font-bold text-lg shadow-lg">
                    ₹{price.toLocaleString()}
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/80 mb-2">
                        <HiLocationMarker className="text-accent-400" />
                        <span className="text-sm">South India</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white">
                        {destination}
                    </h3>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Info Tags */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <HiCalendar className="text-primary-500" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <HiUserGroup className="text-primary-500" />
                        <span>{groupSize}</span>
                    </div>
                </div>

                {/* Description */}
                {description && (
                    <p className="text-gray-600 mb-6 line-clamp-2">
                        {description}
                    </p>
                )}

                {/* CTA Button */}
                <Link
                    to="/contact"
                    className="block w-full text-center py-3 px-6 rounded-xl font-semibold
                     bg-primary-500 text-white hover:bg-primary-600
                     transform transition-all duration-300 hover:shadow-lg"
                >
                    Book Now
                </Link>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent 
                      group-hover:border-primary-500/30 transition-colors duration-300 pointer-events-none" />
        </motion.div>
    );
};

export default TripCard;
