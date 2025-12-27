import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * TiltCard - 3D tilt effect on hover
 * @param {ReactNode} children - Card content
 * @param {number} tiltAmount - Maximum tilt angle in degrees
 * @param {number} scale - Scale amount on hover
 */
const TiltCard = ({
    children,
    className = '',
    tiltAmount = 10,
    scale = 1.02,
    glare = true
}) => {
    const ref = useRef(null);

    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(y, [0, 1], [tiltAmount, -tiltAmount]), {
        stiffness: 300,
        damping: 30
    });
    const rotateY = useSpring(useTransform(x, [0, 1], [-tiltAmount, tiltAmount]), {
        stiffness: 300,
        damping: 30
    });

    const glareX = useTransform(x, [0, 1], ['-100%', '200%']);
    const glareOpacity = useTransform(x, [0, 0.5, 1], [0, 0.15, 0]);

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
            className={`relative ${className}`}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: 1000,
            }}
            whileHover={{ scale }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            transition={{ scale: { duration: 0.2 } }}
        >
            {children}

            {/* Glare effect */}
            {glare && (
                <motion.div
                    className="absolute inset-0 pointer-events-none rounded-inherit overflow-hidden"
                    style={{ borderRadius: 'inherit' }}
                >
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.8) 45%, transparent 50%)',
                            x: glareX,
                            opacity: glareOpacity,
                        }}
                    />
                </motion.div>
            )}
        </motion.div>
    );
};

/**
 * MagneticButton - Button that follows cursor slightly
 */
export const MagneticButton = ({
    children,
    className = '',
    strength = 0.3
}) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 15 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set((e.clientX - centerX) * strength);
        y.set((e.clientY - centerY) * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </motion.div>
    );
};

/**
 * ParallaxImage - Image with parallax scroll effect
 */
export const ParallaxImage = ({
    src,
    alt,
    className = '',
    parallaxAmount = 50
}) => {
    const ref = useRef(null);

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ y: [-parallaxAmount, parallaxAmount] }}
                viewport={{ once: false }}
                transition={{
                    y: { duration: 0, ease: "linear" }
                }}
                style={{
                    height: `calc(100% + ${parallaxAmount * 2}px)`,
                    marginTop: -parallaxAmount
                }}
            />
        </div>
    );
};

export default TiltCard;
