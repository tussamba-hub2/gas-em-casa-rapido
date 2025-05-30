
import React from 'react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 to-orange-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto Principal */}
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Gás em casa,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-orange-500">
                rápido
              </span>{' '}
              e sem burocracia
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Para quem mora nas centralidades de Luanda e quer comodidade.
              Escolha, pague e receba o seu gás direto na porta do apartamento!
            </p>
            
            {/* Badges das Centralidades */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
              {['Kilamba', 'Sequele', 'Zango', 'Nova Vida'].map((local) => (
                <span
                  key={local}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md border border-gray-100"
                >
                  {local}
                </span>
              ))}
            </div>

            {/* Botões CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToProducts}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-xl animate-bounce-gentle"
              >
                <i className="fas fa-shopping-cart mr-2"></i>
                Comprar Agora
              </button>
              <button
                onClick={() => window.open('https://wa.me/244900000000', '_blank')}
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                WhatsApp
              </button>
            </div>
          </div>

          {/* Imagem/Ilustração */}
          <div className="relative animate-slide-in">
            <div className="bg-gradient-to-br from-white to-gray-100 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-primary-100 to-orange-100 rounded-2xl p-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <i className="fas fa-fire text-white text-4xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Botija Laranja</h3>
                  <p className="text-gray-600 mb-4">Entrega em 30 minutos</p>
                  <div className="bg-white rounded-full px-4 py-2 text-green-600 font-bold">
                    ✓ Disponível
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full opacity-20 animate-bounce-gentle"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-400 rounded-full opacity-20 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
