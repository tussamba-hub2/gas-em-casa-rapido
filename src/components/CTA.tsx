
import React from 'react';

const CTA = () => {
  const handleWhatsApp = () => {
    const message = 'Olá! Quero comprar gás para a minha casa. Podem me ajudar?';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/244900000000?text=${encodedMessage}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+244900000000', '_self');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-orange-600 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Clique e peça já o seu gás{' '}
            <span className="text-yellow-300">sem sair de casa!</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Disponível agora para todas as centralidades de Luanda.
            <br />
            Entrega rápida, pagamento fácil e sem burocracia!
          </p>

          {/* Botões principais */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center"
            >
              <i className="fab fa-whatsapp text-2xl mr-3"></i>
              Pedir pelo WhatsApp
            </button>
            <button
              onClick={handleCall}
              className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-full font-bold text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center"
            >
              <i className="fas fa-phone text-xl mr-3"></i>
              Ligar Agora
            </button>
          </div>

          {/* Informações de contato */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
              <i className="fas fa-clock text-3xl mb-4 text-yellow-300"></i>
              <h3 className="font-bold text-lg mb-2">Horário de Funcionamento</h3>
              <p className="text-primary-100">Segunda a Sábado: 7h às 18h</p>
              <p className="text-primary-100">Domingo: 8h às 16h</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
              <i className="fas fa-map-marker-alt text-3xl mb-4 text-yellow-300"></i>
              <h3 className="font-bold text-lg mb-2">Áreas de Entrega</h3>
              <p className="text-primary-100">Kilamba • Sequele</p>
              <p className="text-primary-100">Zango • Nova Vida</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
              <i className="fas fa-bolt text-3xl mb-4 text-yellow-300"></i>
              <h3 className="font-bold text-lg mb-2">Entrega Express</h3>
              <p className="text-primary-100">30-60 minutos</p>
              <p className="text-primary-100">Direto no seu apartamento</p>
            </div>
          </div>

          {/* Urgência */}
          <div className="mt-12 bg-red-500 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">
              <i className="fas fa-exclamation-triangle mr-2"></i>
              Acabou o gás?
            </h3>
            <p className="text-lg mb-4">
              Não se preocupe! Ligamos agora e entregamos em tempo recorde!
            </p>
            <button
              onClick={handleWhatsApp}
              className="bg-white text-red-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Socorro! Preciso de Gás Urgente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
