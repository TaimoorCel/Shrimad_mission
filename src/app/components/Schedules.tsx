'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const schedules = [
    {
        day: 'Day 1',
        title: 'Raj Prakshalan',
        date: 'Sun, 23 Mar',
        image: '/images/schedule/schedule-1.webp',
        sessions: [
            { time: '10:00 AM - 11:30 AM', details: ['Commencement of Mahamastakabhishek (Early Morning)', 'Satsang'] },
            { time: '4:00 PM - 5:30 PM', details: ['Opening of Param Krupalu Dev section in Dharampur museum'] },
            { time: '8:00 PM - 9:30 PM', details: ['Pravachan for Dharampur locals', 'Bhakti on Anandghanji and Yashovijayji stavans'] },
        ],
    },
    {
        day: 'Day 2',
        title: 'Raj Prarthna',
        date: 'Mon, 24 Mar',
        image: '/images/schedule/schedule-2.webp',
        sessions: [
            { time: '10:00 AM - 11:30 AM', details: ['Satsang'] },
            { time: '8:00 PM - 9:30 PM', details: ['Hey Prabhu Mahaparayan'] },
        ],
    },
    {
        day: 'Day 3',
        title: 'Raj Paramsmaran',
        date: 'Tue, 25 Mar',
        image: '/images/schedule/schedule-3.webp',
        sessions: [
            { time: '10:00 AM - 11:30 AM', details: ['Satsang'] },
            { time: '8:00 PM - 9:30 PM', details: ['Jaap in Dharampur Smashan'] },
        ],
    },
    {
        day: 'Day 4',
        title: 'Raj Paadsevan',
        date: 'Wed, 26 Mar',
        image: '/images/schedule/schedule-4.png',
        sessions: [
            { time: '10:00 AM - 11:30 AM', details: ['Satsang'] },
            { time: '8:00 PM - 9:30 PM', details: ['125 Khamasna with Gunsmaran'] },
        ],
    },
    {
        day: 'Day 5',
        title: 'Raj Pranidhaan',
        date: 'Thu, 27 Mar',
        image: '/images/schedule/schedule-5.jpg',
        sessions: [
            { time: '10:00 AM - 11:30 AM', details: ['Satsang'] },
            { time: '8:00 PM - 9:30 PM', details: ['Meditation on Param Krupalu Dev'] },
        ],
    },
    {
        day: 'Day 6',
        title: 'Raj Pratishtha',
        date: 'Fri, 28 Mar',
        image: '/images/schedule/schedule-6.jpg',
        sessions: [
            { time: '10:00 AM - 11:30 AM', details: ['Satsang'] },
            { time: '8:00 PM - 9:30 PM', details: ['125 Samuhik Pratishtha in Ashram'] },
        ],
    },
    {
        day: 'Day 7',
        title: 'Raj Pratiksha',
        date: 'Sat, 29 Mar',
        image: '/images/schedule/schedule-7.webp',
        sessions: [
            { time: '10:00 AM - 11:30 AM', details: ['Satsang'] },
            { time: '4:00 PM - 5:30 PM', details: ['Satsang'] },
            { time: '8:00 PM - 9:30 PM', details: ['Kaun Kehte hai Bhagwan aate nahi with Kankotri Lekhan', 'Ranchodbhai Act'] },
        ],
    },
    {
        day: 'Day 8',
        title: 'Raj Padhramani',
        date: 'Sun, 30 Mar',
        image: '/images/schedule/schedule-8.jpg',
        sessions: [
            { time: '10:00 AM - 11:30 AM', details: ['Grand Shobhayatra', 'Pratishtha at House Graced by Param Krupalu Dev'] },
            { time: '8:00 PM - 9:30 PM', details: ['Pulak of Padhramani and bhakti based on Dharampur prasangs'] },
        ],
    },
];

const Schedules = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px 0px' });

    return (
        <section
            ref={sectionRef}
            className="py-20 px-6 md:px-16 lg:px-32 bg-white bg-repeat bg-auto bg-center overflow-hidden"
            style={{ backgroundImage: "url('/images/Frame.png')" }}
        >
            <div className="container mx-auto">
                <h2 className="text-4xl font-medium mb-12 text-[#631019] text-center">Schedule</h2>
                <motion.div
                    initial={{ opacity: 0, transform: 'translateY(20px) scale(0.95)' }}
                    animate={isMounted && isInView ? { opacity: 1, transform: 'translateY(0) scale(1)', transition: { staggerChildren: 0.3 } } : {}}
                    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                    className="space-y-16 overflow-y-auto max-h-[80vh] max-w-7xl mx-auto px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                >
                    {schedules.map((schedule, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
                            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                            className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 p-4 transition-transform"
                        >
                            <div className="text-left w-full md:w-1/4">
                                <h4 className="text-xl font-bold text-[#9e1f22]">{schedule.day}</h4>
                                <h2 className="text-3xl font-bold text-[#631019]">{schedule.title}</h2>
                                <h4 className="text-xl font-bold text-[#9e1f22]">{schedule.date}</h4>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="w-full flex flex-col md:flex-row shadow-lg rounded-3xl overflow-hidden"
                                style={{ backgroundImage: 'linear-gradient(152deg, #631019 35%, #631019 100%)' }}
                            >
                                <div className="p-6 md:p-8 text-left flex-1 w-full">
                                    {schedule.sessions.map((session, idx) => (
                                        <div key={idx} className="mb-6 last:mb-0">
                                            <p className="text-lg font-medium text-[#E3B055]">{session.time}</p>
                                            <ul className="text-lg font-medium list-disc list-inside text-white mt-2 space-y-1">
                                                {session.details.map((detail, i) => (
                                                    <li key={i}>{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative w-full md:w-[276px] h-[276px] md:h-auto">
                                    <Image
                                        src={schedule.image}
                                        alt={schedule.title}
                                        width={276}
                                        height={276}
                                        priority
                                        className="w-auto h-auto object-cover rounded-none md:rounded-r-lg"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Schedules;