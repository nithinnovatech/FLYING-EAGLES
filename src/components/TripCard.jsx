import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
    const ref = useRef(null);

    // 3D Tilt effect
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), {
        stiffness: 300,
        damping: 30
    });
    const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), {
        stiffness: 300,
        damping: 30
    });

    // Glare effect position
    const glareX = useTransform(x, [0, 1], ['-100%', '200%']);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const xPos = (e.clientX - rect.left) / rect.width;
        const yPos = (e.clientY - rect.top) / rect.height;

        x.set(xPos);
        y.set(yPos);
    };

    const handleMouseLeave = () => {
        x.set(0.5);
        y.set(0.5);
    };

    return (
        <motion.div
            ref={ref}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg 
                     transition-shadow duration-500 cursor-pointer perspective-1000"
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            transition={{ scale: { duration: 0.3 } }}
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <motion.img
                    src={image}
                    alt={destination}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.7 }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent 
                              opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Animated shimmer overlay */}
                <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 45%, transparent 50%)',
                        x: glareX
                    }}
                />

                {/* Price Badge */}
                <motion.div
                    className="absolute top-4 right-4 bg-accent-500 text-dark-900 px-4 py-2 rounded-full 
                               font-heading font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    ₹{price.toLocaleString()}
                </motion.div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 right-4">
                    <motion.div
                        className="flex items-center gap-2 text-white/90 mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <HiLocationMarker className="text-accent-400" />
                        <span className="text-sm font-medium">South India</span>
                    </motion.div>
                    <motion.h3
                        className="text-2xl font-heading font-bold text-white"
                        style={{ transform: 'translateZ(20px)' }}
                    >
                        {destination}
                    </motion.h3>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 relative" style={{ transform: 'translateZ(10px)' }}>
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
                    <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                )}

                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <a
                        href={`https://wa.me/919876543210?text=Hello Flying Eagles! I am interested in booking the ${destination} trip. Please provide more details.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-3.5 px-6 rounded-xl font-semibold
                                 bg-gradient-to-r from-primary-500 to-primary-600 text-white 
                                 hover:from-primary-600 hover:to-primary-700
                                 transform transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Book Now
                    </a>
                </motion.div>
            </div>

            {/* Hover Border Effect */}
            <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                    background: 'linear-gradient(135deg, rgba(45,90,39,0.3) 0%, transparent 50%, rgba(245,158,11,0.3) 100%)',
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                }}
            />
        </motion.div>
    );
};

export default TripCard;
