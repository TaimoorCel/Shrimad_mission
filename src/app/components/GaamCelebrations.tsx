'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const celebrations = [
    { image: '/images/gaam/gaam-1.webp', title: 'Flag Off with Dayro', textColor: 'text-[#631019]', fontSize: 'text-2xl', fontWeight: 'font-semibold' },
    { image: '/images/gaam/gaam-2.png', title: 'Outreach Programs of education, medical and animal care', textColor: 'text-[#ffffff]', fontSize: 'text-2xl', fontWeight: 'font-semibold' },
    { image: '/images/gaam/gaam-3.png', title: 'Raj Katha for Sevarpits by Swadhyaykar ', textColor: 'text-[#ffffff]', isLinearGradient: true, fontSize: 'text-4xl', fontWeight: 'font-extrabold' },
    { image: '/images/gaam/gaam-4.png', title: 'Exam on Param Krupalu Dev for students from 6th to 8th Std.', textColor: 'text-[#ffffff]', fontSize: 'text-3xl', fontWeight: 'font-semibold' },
    { image: '/images/gaam/gaam-5.png', title: 'Dharampur Got Talent', textColor: 'text-[#ffffff]', highlight: true, fontSize: 'text-4xl', fontWeight: 'font-extrabold', backgroundColor: 'bg-[#E3B055]' },
    { image: '', title: 'Drama for Dharampur and surrounding villages ', textColor: 'text-[#9e1f22]', fontSize: 'text-4xl', fontWeight: 'font-bold', backgroundColor: 'bg-[#E3B055]' },
    { image: '', title: 'Discount on Health Checkups for Dharampur Gaam people', textColor: 'text-[#ffffff]', fontSize: 'text-4xl', fontWeight: 'font-bold', isLinearGradient: true },
];

const additionalContent = [
    'Refurbishing of 25 Anganwadis and celebrations with Anganwadi kids',
    'Exam related Destress Program for students',
    'Toran, rangoli, mehendi competitions',
    'Sports Tournament for tribals',
    "Women's Day celebration with opportunity to showcase their skills and creativity",
];

const GaamCelebrations = () => {
    const [isClient, setIsClient] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px 0px' });

    useEffect(() => {
        setIsClient(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2, duration: 0.8 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <section ref={sectionRef} className="py-16 bg-[#ffefd3] px-6 sm:px-12 lg:px-20">
            {
                isClient && (
                    <div className="container max-w-7xl mx-auto px-4">
                        <motion.h2
                            className="text-4xl font-bold text-[#9e1f22] mb-12 text-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            35 Days of Gaam Celebrations <br />
                            <span className="text-xl font-bold text-[#9e1f22]">22nd Feb to 23rd Mar</span>
                        </motion.h2>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:col-span-2">
                                <div className="flex flex-col gap-6">
                                    {celebrations.slice(0, 2).map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="relative rounded-3xl shadow-lg overflow-hidden bg-gray-200 flex-grow w-full h-[318px]"
                                        >
                                            {item.image ? (
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={390}
                                                    height={318}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-white font-semibold px-4">
                                                    {item.title}
                                                </div>
                                            )}
                                            <div className={`absolute top-4 left-4 ${item.textColor} ${item.fontWeight} ${item.fontSize} z-10 drop-shadow-md`}>
                                                {item.title}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-6">
                                    {celebrations.slice(2, 4).map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className={`relative rounded-3xl shadow-lg overflow-hidden flex-grow w-full ${index === 1 ? 'h-[226px]' : 'h-[460px] mt-auto'
                                                }`}
                                            style={{
                                                backgroundColor: item.isLinearGradient ? 'transparent' : `${item.backgroundColor}`,
                                                backgroundImage: item.isLinearGradient
                                                    ? 'linear-gradient(180deg, #9e1f22 0%, #561c2b 100%)'
                                                    : 'none',
                                            }}
                                        >
                                            {item.isLinearGradient ? (
                                                <>
                                                    <div className={`absolute top-0 left-0 w-full text-center px-11 py-12 z-10 ${item.textColor} ${item.fontWeight} ${item.fontSize}`}>
                                                        {item.title}
                                                    </div>
                                                    {item.image ? (
                                                        <div className="absolute bottom-0 w-full h-[40%]">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.title}
                                                                fill
                                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                                className="rounded-b-lg shadow-md object-cover"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="absolute bottom-0 w-full h-[40%] flex items-center justify-center bg-gray-500 text-white font-semibold rounded-b-lg">
                                                            No Image
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                item.image ? (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        width={390}
                                                        height={index === 1 ? 226 : 460}
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-white font-semibold px-4">
                                                        {item.title}
                                                    </div>
                                                )
                                            )}
                                            {!item.isLinearGradient && (
                                                <div className={`absolute top-10 left-8 right-16 text-center ${item.textColor} ${item.fontWeight} ${item.fontSize} z-20 drop-shadow-md`}>
                                                    {item.title}
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                {celebrations.slice(4).map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className={`relative rounded-3xl shadow-lg overflow-hidden ${item.backgroundColor} ${item.highlight ? `p-4 flex items-center gap-4 h-64` : `h-64`
                                            }`}
                                        style={{
                                            backgroundColor: item.isLinearGradient ? 'transparent' : `${item.backgroundColor}`,
                                            backgroundImage: item.isLinearGradient
                                                ? 'linear-gradient(180deg, #9e1f22 0%, #561c2b 100%)'
                                                : 'none',
                                        }}
                                    >
                                        {item.highlight ? (
                                            <>
                                                <div className="flex-1 text-center pl-4">
                                                    <h3 className={`${item.textColor} ${item.fontWeight} ${item.fontSize}`}>{item.title}</h3>
                                                </div>
                                                {item.image ? (
                                                    <div className="relative w-30 h-[80%] mr-4">
                                                        <Image
                                                            src={item.image}
                                                            alt={item.title}
                                                            fill
                                                            className="object-cover rounded-lg"
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="w-40 h-full flex items-center justify-center bg-gray-500 text-white font-semibold rounded-lg">
                                                        No Image
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <div className="absolute top-0 left-0 text-center w-full p-10 z-10">
                                                    <span className={`${item.fontWeight} ${item.textColor} ${item.fontSize}`}>{item.title}</span>
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="mt-12 border border-[1px] border-[#9e1f22] p-6 rounded-3xl text-left"
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                        >
                            <h3 className="text-2xl font-semibold text-[#9e1f22] mb-2 ml-2">Consolidated Community Development Initiatives - Across 12 Villages</h3>
                            <ul className="list-disc text-lg text-[#631019] pl-6">
                                {additionalContent.map((text, index) => (
                                    <li key={index}>{text}</li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.h2
                            className="mt-28 text-4xl font-bold text-[#9e1f22] text-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            35 Days of Sadhana
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="mt-4 p-4 rounded-3xl text-center border border-[1px] border-solid w-[60%] mx-auto"
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                        >
                            <p className="text-lg text-black">
                                Details for this will be announced during the Mahotsav.
                            </p>
                        </motion.div>
                    </div>
                )
            }
        </section>
    );
};

export default GaamCelebrations;
