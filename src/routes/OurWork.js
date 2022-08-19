import React from 'react'
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import OurWorkSection from '../components/OurWork';
import Footer from '../components/Footer';

const OurWork = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='OUR WORK' text='Some Of Our Work.'/>
        <OurWorkSection />
        <Footer />
    </div>
  )
}

export default OurWork