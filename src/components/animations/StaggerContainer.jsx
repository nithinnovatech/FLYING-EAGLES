import React from 'react';
import { motion } from 'framer-motion';

/**
 * StaggerContainer - Animates children with staggered delays
 * @param {ReactNode} children - Child elements to animate
 * @param {number} staggerDelay - Delay between each child animation
 * @param {number} initialDelay - Initial delay before first child animates
 */
const StaggerContainer = ({
    children,
    staggerDelay = 0.1,
    initialDelay = 0,
    className = '',
    once = true
}) => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: initialDelay,
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-50px" }}
        >
            {children}
        </motion.div>
    );
};

/**
 * StaggerItem - Child item for StaggerContainer
 */
export const StaggerItem = ({
    children,
    className = '',
    animation = 'fadeUp' // 'fadeUp', 'fadeIn', 'slideLeft', 'slideRight', 'scale', 'rotate'
}) => {
    const animations = {
        fadeUp: {
            hidden: { opacity: 0, y: 50 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 100
                }
            },
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { duration: 0.6 }
            },
        },
        slideLeft: {
            hidden: { opacity: 0, x: 50 },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 100
                }
            },
        },
        slideRight: {
            hidden: { opacity: 0, x: -50 },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 100
                }
            },
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 100
                }
            },
        },
        rotate: {
            hidden: { opacity: 0, rotate: -10, scale: 0.9 },
            visible: {
                opacity: 1,
                rotate: 0,
                scale: 1,
                transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 100
                }
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={animations[animation] || animations.fadeUp}
        >
            {children}
        </motion.div>
    );
};

/**
 * FadeInSection - Simple fade in on scroll
 */
export const FadeInSection = ({
    children,
    className = '',
    delay = 0,
    direction = 'up' // 'up', 'down', 'left', 'right', 'none'
}) => {
    const getInitial = () => {
        switch (direction) {
            case 'up': return { opacity: 0, y: 40 };
            case 'down': return { opacity: 0, y: -40 };
            case 'left': return { opacity: 0, x: 40 };
            case 'right': return { opacity: 0, x: -40 };
            default: return { opacity: 0 };
        }
    };

    return (
        <motion.div
            className={className}
            initial={getInitial()}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.4, 0.25, 1]
            }}
        >
            {children}
        </motion.div>
    );
};

/**
 * ScaleOnHover - Wrapper that scales on hover
 */
export const ScaleOnHover = ({
    children,
    className = '',
    scale = 1.05
}) => {
    return (
        <motion.div
            className={className}
            whileHover={{ scale }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {children}
        </motion.div>
    );
};

export default StaggerContainer;
