
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Products from '../components/Products';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-fredoka">
      <Header />
      <Hero />
      <Benefits />
      <Products />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
