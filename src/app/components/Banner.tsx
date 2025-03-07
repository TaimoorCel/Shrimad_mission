"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface BannerProps {
    images: string[];
}

const description = `125 years ago, Param Krupalu Dev Shrimad Rajchandraji blessed the sacred 
    land of Dharampur with His divine presence, forever sanctifying it.
    This spiritual connection laid the foundation for the creation of
    Shrimad Rajchandra Ashram, a haven of profound sadhana and selfless seva.`;

const joinUs = `Join us in celebrating the enduring legacy of Param Krupalu Dev that
    continues to inspire countless hearts.`;

const Banner: React.FC<BannerProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, []);

    useEffect(() => {
        setIsClient(true);
    }, []);
    
    useEffect(() => {
        if (currentImageIndex !== null) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [currentImageIndex, images.length]);

    if (!isClient) return null;

    return (
        <div className="w-full">
            <div className="relative h-[90vh] w-full overflow-hidden">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                            index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <Image
                            src={src}
                            alt={`Banner Image ${index + 1}`}
                            className="object-cover w-full h-[360px] sm:h-[480px] md:h-[576px] lg:h-[720px] xl:h-[860px] 2xl:h-[1080px]"
                            sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
                            height={0}
                            width={0}
                            priority
                            loading="eager"
                            placeholder="blur"
                            blurDataURL="/images/blur-img.jpeg"
                        />
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="w-full bg-[#FFEFD3] px-6 md:px-12 lg:px-24 py-16 text-center"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-3xl md:text-4xl font-semibold mb-6 text-[#9E1F22] max-w-5xl mx-auto"
                >
                    Shrimad Rajchandraji Padhramani Ashtahnika Mahotsav
                </motion.h1>

                {/* === Description (With Side Padding) === */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-md md:text-lg mb-6 leading-relaxed text-[#A4782B] max-w-4xl mx-auto"
                >
                    {description}
                </motion.p>

                {/* === Join Us Message (With Side Padding) === */}
                <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="text-xl md:text-2xl font-medium text-[#9E1F22] max-w-3xl mx-auto"
                >
                    {joinUs}
                </motion.h3>
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    className="bg-[#9e1f22] text-lg text-white px-8 py-4 mt-6 rounded-full hover:bg-[#A4782B] transition-colors font-medium shadow-lg"
                >
                    Register Now
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Banner;
