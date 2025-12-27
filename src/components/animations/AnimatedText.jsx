import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedText - Reveals text with stunning animations
 * @param {string} text - The text to animate
 * @param {string} type - Animation type: 'letters', 'words', 'lines'
 * @param {number} delay - Initial delay before animation starts
 * @param {string} className - Additional CSS classes
 */
const AnimatedText = ({
    text,
    type = 'words',
    delay = 0,
    className = '',
    once = true,
    as: Component = 'div'
}) => {
    // Split text based on type
    const getItems = () => {
        switch (type) {
            case 'letters':
                return text.split('');
            case 'words':
                return text.split(' ');
            case 'lines':
                return text.split('\n');
            default:
                return text.split(' ');
        }
    };

    const items = getItems();

    // Container animation
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: type === 'letters' ? 0.03 : 0.08,
                delayChildren: delay
            },
        }),
    };

    // Child animation variants
    const child = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className={`overflow-hidden ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            style={{ perspective: '1000px' }}
        >
            {items.map((item, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className="inline-block"
                    style={{
                        marginRight: type === 'letters' ? '0' : '0.25em',
                        transformStyle: 'preserve-3d'
                    }}
                >
                    {item === ' ' ? '\u00A0' : item}
                </motion.span>
            ))}
        </motion.div>
    );
};

/**
 * AnimatedHeading - Special heading with character reveal
 */
export const AnimatedHeading = ({
    children,
    className = '',
    delay = 0,
    highlightClass = 'gradient-text'
}) => {
    // Parse children to handle highlighted text
    const parseText = (text) => {
        if (typeof text !== 'string') return [{ text: text, highlight: false }];
        return [{ text, highlight: false }];
    };

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay,
            },
        },
    };

    const letterVariant = {
        hidden: {
            opacity: 0,
            y: 100,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const text = typeof children === 'string' ? children : '';
    const letters = text.split('');

    return (
        <motion.div
            className={`overflow-hidden ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ perspective: '1000px' }}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    variants={letterVariant}
                    className="inline-block"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

/**
 * RevealText - Text that reveals with a sliding mask
 */
export const RevealText = ({
    children,
    className = '',
    delay = 0,
    direction = 'up' // 'up', 'down', 'left', 'right'
}) => {
    const getInitial = () => {
        switch (direction) {
            case 'up': return { y: '100%' };
            case 'down': return { y: '-100%' };
            case 'left': return { x: '100%' };
            case 'right': return { x: '-100%' };
            default: return { y: '100%' };
        }
    };

    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ ...getInitial(), opacity: 0 }}
                whileInView={{ y: 0, x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay,
                    ease: [0.25, 0.4, 0.25, 1]
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default AnimatedText;
