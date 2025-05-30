
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full flex items-center justify-center">
              <i className="fas fa-fire text-white text-lg"></i>
            </div>
            <span className="text-2xl font-bold text-gray-800">gasemcasa</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('produtos')}
              className="text-gray-600 hover:text-primary-500 transition-colors duration-300"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-600 hover:text-primary-500 transition-colors duration-300"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-600 hover:text-primary-500 transition-colors duration-300"
            >
              Depoimentos
            </button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('produtos')}
            className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Comprar Agora
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 focus:outline-none"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => scrollToSection('produtos')}
                className="text-gray-600 hover:text-primary-500 transition-colors duration-300 text-left"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="text-gray-600 hover:text-primary-500 transition-colors duration-300 text-left"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="text-gray-600 hover:text-primary-500 transition-colors duration-300 text-left"
              >
                Depoimentos
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
