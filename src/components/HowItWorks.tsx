
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Escolhe',
      description: 'Escolha a botija ideal para a sua família: Laranja, Azul ou Castanha',
      icon: 'fas fa-mouse-pointer',
      color: 'from-primary-400 to-primary-600'
    },
    {
      number: '2',
      title: 'Paga',
      description: 'Confirme o pedido e escolha como quer pagar: dinheiro, transferência ou Multicaixa',
      icon: 'fas fa-credit-card',
      color: 'from-green-400 to-green-600'
    },
    {
      number: '3',
      title: 'Recebe',
      description: 'Relaxe! Em 30-60 minutos o seu gás chega na porta do apartamento',
      icon: 'fas fa-home',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Como{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-orange-500">
              funciona?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            É simples e rápido! Em apenas 3 passos o seu gás está a caminho
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Linha conectora */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform translate-x-6"></div>
                )}

                {/* Círculo do número */}
                <div className={`relative w-32 h-32 mx-auto mb-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                  <span className="text-white text-4xl font-bold">{step.number}</span>
                  
                  {/* Ícone no canto */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <i className={`${step.icon} text-gray-700 text-lg`}></i>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Seta para mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-8">
                    <i className="fas fa-arrow-down text-gray-400 text-2xl"></i>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-500 to-orange-500 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Pronto para experimentar?</h3>
              <p className="text-xl mb-6 text-primary-100">
                Junte-se às centenas de famílias que já compraram gás conosco!
              </p>
              <button
                onClick={() => window.open('https://wa.me/244900000000', '_blank')}
                className="bg-white text-primary-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Fazer Primeiro Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
