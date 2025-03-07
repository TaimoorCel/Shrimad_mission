"use client";

import { useRef } from 'react';
import Banner from './components/Banner';
import Header from './components/common/Header';
import Schedules from './components/Schedules';
import GaamCelebrations from './components/GaamCelebrations';
import Footer from './components/common/Footer';

export default function Home() {
  const bannerImages = ['/images/banner/Banner-1.webp', '/images/banner/Banner-2.webp', '/images/banner/Banner-3.webp', '/images/banner/Banner-4.webp'];
  const scheduleRef = useRef<HTMLElement | null>(null);
  const gaamCelebrationsRef = useRef<HTMLElement | null>(null);

  const scrollToSchedule = () => {
    if (scheduleRef.current) {
      scheduleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToGaamCelebrations = () => {
    if (gaamCelebrationsRef.current) {
      gaamCelebrationsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main>
        <Header
          scrollToSchedule={scrollToSchedule}
          scrollToGaamCelebrations={scrollToGaamCelebrations}
        />
        <Banner images={bannerImages} />
        <section ref={scheduleRef} className="min-h-[600px]">
          <Schedules />
        </section>
        <section ref={gaamCelebrationsRef} className="min-h-[600px]">
          <GaamCelebrations />
        </section>
        <Footer />
      </main>
    </>
  );
}
