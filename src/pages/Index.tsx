
import React from 'react';
import { ThemeProvider } from '../hooks/useTheme';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Products from '../components/Products';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-fredoka transition-colors duration-300">
        <Header />
        <Hero />
        <Benefits />
        <Products />
        <HowItWorks />
        <CTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
