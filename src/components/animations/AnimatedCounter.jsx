import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 * AnimatedCounter - Counts up to target number when in view
 * @param {number} from - Starting number
 * @param {number} to - Target number
 * @param {number} duration - Animation duration in seconds
 * @param {string} suffix - Text to append (e.g., '+', '%')
 * @param {string} prefix - Text to prepend (e.g., '₹', '$')
 */
const AnimatedCounter = ({
    from = 0,
    to,
    duration = 2,
    suffix = '',
    prefix = '',
    className = '',
    decimals = 0
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(from);

    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
        duration: duration * 1000
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(to);
        }
    }, [isInView, to, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(latest.toFixed(decimals));
        });
        return unsubscribe;
    }, [springValue, decimals]);

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {prefix}{displayValue}{suffix}
        </motion.span>
    );
};

/**
 * StatCard - Animated stat card with counter
 */
export const StatCard = ({
    value,
    label,
    suffix = '',
    prefix = '',
    icon: Icon,
    delay = 0
}) => {
    // Extract number from value string (e.g., "500+" -> 500)
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
    const hasSuffix = value.includes('+') ? '+' : suffix;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            className="text-center group"
        >
            {Icon && (
                <motion.div
                    className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                >
                    <Icon className="text-2xl text-primary-600" />
                </motion.div>
            )}
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-1">
                <AnimatedCounter
                    to={numericValue}
                    suffix={hasSuffix}
                    prefix={prefix}
                    duration={2.5}
                    decimals={value.includes('.') ? 1 : 0}
                />
            </div>
            <motion.div
                className="text-gray-600 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.3 }}
            >
                {label}
            </motion.div>
        </motion.div>
    );
};

export default AnimatedCounter;
