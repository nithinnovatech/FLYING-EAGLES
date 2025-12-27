import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * FloatingParticles - Decorative floating elements
 * @param {number} count - Number of particles
 * @param {string} color - Base color for particles
 */
const FloatingParticles = ({
    count = 15,
    color = 'white',
    minSize = 4,
    maxSize = 12,
    className = ''
}) => {
    const particles = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            size: Math.random() * (maxSize - minSize) + minSize,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: Math.random() * 10 + 15,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.5 + 0.1,
        }));
    }, [count, minSize, maxSize]);

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        backgroundColor: color,
                        opacity: particle.opacity,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

/**
 * FloatingShapes - Geometric shapes floating in background
 */
export const FloatingShapes = ({ className = '' }) => {
    const shapes = [
        { type: 'circle', size: 100, x: '10%', y: '20%', color: 'rgba(45, 90, 39, 0.1)', duration: 20 },
        { type: 'circle', size: 150, x: '80%', y: '15%', color: 'rgba(245, 158, 11, 0.1)', duration: 25 },
        { type: 'circle', size: 80, x: '70%', y: '70%', color: 'rgba(45, 90, 39, 0.08)', duration: 18 },
        { type: 'circle', size: 120, x: '20%', y: '75%', color: 'rgba(245, 158, 11, 0.08)', duration: 22 },
        { type: 'circle', size: 60, x: '50%', y: '50%', color: 'rgba(255, 255, 255, 0.1)', duration: 15 },
    ];

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {shapes.map((shape, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full blur-xl"
                    style={{
                        width: shape.size,
                        height: shape.size,
                        left: shape.x,
                        top: shape.y,
                        backgroundColor: shape.color,
                    }}
                    animate={{
                        y: [0, -50, 0],
                        x: [0, 30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: shape.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

/**
 * GlowingOrbs - Animated glowing orbs
 */
export const GlowingOrbs = ({ className = '' }) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {/* Top right orb */}
            <motion.div
                className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Bottom left orb */}
            <motion.div
                ClassName="absolute -bottom-32 -left-32 w-96 h-96 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(45, 90, 39, 0.3) 0%, transparent 70%)',
                }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};

export default FloatingParticles;
