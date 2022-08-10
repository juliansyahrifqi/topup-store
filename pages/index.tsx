import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organisms/Navbar';

/* eslint linebreak-style: ["error", "unix"] */
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <Navbar />

  );
}
