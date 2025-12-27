import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import FloatingParticles, { GlowingOrbs } from './animations/FloatingParticles';
import AnimatedText, { RevealText } from './animations/AnimatedText';

const Hero = ({
    title = "Explore New Heights",
    subtitle = "Discover breathtaking adventures with Flying Eagles",
    showScrollIndicator = true,
    overlay = true,
    height = "h-screen"
}) => {
    // Parallax effect for background
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

    // Background image slider state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Multiple background images for slideshow effect
    const backgroundImages = [
        '/images/hero-bg.jpg',
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
        'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1920&q=80',
        'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80'
    ];

    // Auto-rotate background images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 6000); // Change every 6 seconds

        return () => clearInterval(interval);
    }, []);

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    // Letter animation for main title
    const letterVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.8,
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        })
    };

    const flyingLetters = "FLYING".split('');
    const eaglesLetters = "EAGLES".split('');

    // Ken Burns animation variants for background images
    const kenBurnsVariants = {
        initial: {
            scale: 1.2,
            x: '5%',
            y: '5%',
            opacity: 0
        },
        animate: {
            scale: 1,
            x: '-5%',
            y: '-5%',
            opacity: 1,
            transition: {
                scale: { duration: 12, ease: "linear" },
                x: { duration: 12, ease: "linear" },
                y: { duration: 12, ease: "linear" },
                opacity: { duration: 1.5 }
            }
        },
        exit: {
            opacity: 0,
            scale: 1.1,
            transition: { duration: 1.5 }
        }
    };

    return (
        <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
            {/* Animated Background Images with Ken Burns Effect */}
            <AnimatePresence mode="sync">
                <motion.div
                    key={currentImageIndex}
                    className="absolute inset-0"
                    variants={kenBurnsVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    style={{ y }}
                >
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
                            scale,
                        }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Animated Noise/Grain Overlay for cinematic effect */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Animated Vignette */}
            <motion.div
                className="absolute inset-0 z-[2]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
                }}
            />

            {/* Dynamic Gradient Overlay */}
            {overlay && (
                <>
                    <motion.div
                        className="absolute inset-0 z-[3]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        style={{
                            background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.6) 100%)'
                        }}
                    />

                    {/* Animated color sweep overlay */}
                    <motion.div
                        className="absolute inset-0 z-[4]"
                        animate={{
                            background: [
                                'linear-gradient(135deg, rgba(45,90,39,0.3) 0%, transparent 50%, rgba(245,158,11,0.2) 100%)',
                                'linear-gradient(225deg, rgba(245,158,11,0.3) 0%, transparent 50%, rgba(45,90,39,0.2) 100%)',
                                'linear-gradient(315deg, rgba(45,90,39,0.3) 0%, transparent 50%, rgba(245,158,11,0.2) 100%)',
                                'linear-gradient(45deg, rgba(245,158,11,0.3) 0%, transparent 50%, rgba(45,90,39,0.2) 100%)',
                                'linear-gradient(135deg, rgba(45,90,39,0.3) 0%, transparent 50%, rgba(245,158,11,0.2) 100%)',
                            ]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                    {/* Animated light rays */}
                    <motion.div
                        className="absolute inset-0 z-[5] overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 2 }}
                    >
                        <motion.div
                            className="absolute -top-1/2 -left-1/4 w-full h-full"
                            style={{
                                background: 'conic-gradient(from 180deg, transparent 0deg, rgba(255,255,255,0.03) 30deg, transparent 60deg)',
                                transformOrigin: 'bottom right'
                            }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>
                </>
            )}

            {/* Floating Particles */}
            <FloatingParticles count={25} color="rgba(255, 255, 255, 0.7)" minSize={2} maxSize={8} className="z-[6]" />

            {/* Glowing Orbs */}
            <div className="z-[6]">
                <GlowingOrbs />
            </div>

            {/* Image indicator dots */}
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {backgroundImages.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                                ? 'bg-white w-6'
                                : 'bg-white/40 hover:bg-white/60'
                            }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
                style={{ opacity }}
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md 
                           border border-white/20 mb-8 hover:bg-white/20 transition-colors duration-300"
                >
                    <motion.span
                        className="w-2 h-2 rounded-full bg-accent-400"
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <span className="text-sm font-medium tracking-wide">Adventure Awaits</span>
                </motion.div>

                {/* Animated Title - FLYING */}
                <div className="overflow-hidden perspective-1000 mb-2">
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-shadow-lg flex justify-center"
                        initial="hidden"
                        animate="visible"
                    >
                        {flyingLetters.map((letter, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterVariants}
                                className="inline-block"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>

                {/* Animated Title - EAGLES */}
                <div className="overflow-hidden perspective-1000">
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold gradient-text-light flex justify-center"
                        initial="hidden"
                        animate="visible"
                    >
                        {eaglesLetters.map((letter, i) => (
                            <motion.span
                                key={i}
                                custom={i + flyingLetters.length}
                                variants={letterVariants}
                                className="inline-block"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>

                {/* Tagline with reveal animation */}
                <RevealText delay={0.8} className="mb-4 mt-6">
                    <p className="text-xl md:text-2xl font-heading font-medium text-accent-300">
                        {title}
                    </p>
                </RevealText>

                {/* Subtitle with reveal animation */}
                <RevealText delay={1} className="mb-10">
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </RevealText>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Link to="/services" className="btn-accent text-lg px-8 py-4 shadow-2xl">
                            Explore Trips
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Link to="/about" className="btn-secondary text-lg px-8 py-4">
                            Learn More
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            {showScrollIndicator && (
                <motion.button
                    onClick={scrollToContent}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2
                           hover:text-accent-400 transition-colors duration-300 z-20"
                >
                    <span className="text-sm font-medium">Scroll Down</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="p-2 rounded-full border border-white/30 backdrop-blur-sm"
                    >
                        <HiArrowDown size={20} />
                    </motion.div>
                </motion.button>
            )}

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent z-10" />

            {/* Decorative Side Elements */}
            <motion.div
                className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block z-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <div className="flex flex-col gap-4 items-center">
                    <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="w-3 h-3 border border-white/50 rotate-45"
                    />
                    <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
                </div>
            </motion.div>

            {/* Right side decorative element */}
            <motion.div
                className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block z-10"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7, duration: 0.8 }}
            >
                <div className="flex flex-col gap-4 items-center">
                    <motion.div
                        className="w-8 h-8 border border-white/30 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                    />
                    <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
                    <motion.div
                        className="w-2 h-2 bg-accent-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
