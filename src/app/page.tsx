import Banner from './components/Banner';
import Schedules from './components/Schedules';
import GaamCelebrations from './components/GaamCelebrations';

export default function Home() {
  const bannerImages = ['/images/banner/Banner-1.webp', '/images/banner/Banner-2.webp', '/images/banner/Banner-3.webp', '/images/banner/Banner-4.webp'];

  return (
    <>
      <main>
        <Banner images={bannerImages} />
        <Schedules />
        <GaamCelebrations />
      </main>
    </>
  );
}
