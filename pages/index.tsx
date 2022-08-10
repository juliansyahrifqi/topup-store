import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';

/* eslint linebreak-style: ["error", "unix"] */
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
    </>

  );
}
