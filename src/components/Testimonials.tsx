
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Santos',
      location: 'Kilamba',
      text: 'Muito bom! Pedi pelo WhatsApp e em 25 minutos o gás chegou. O entregador foi muito educado e o preço justo.',
      rating: 5,
      avatar: 'M'
    },
    {
      name: 'João Pereira',
      location: 'Sequele',
      text: 'Serviço excelente! Não preciso mais sair de casa para comprar gás. Super recomendo para quem mora nas centralidades.',
      rating: 5,
      avatar: 'J'
    },
    {
      name: 'Ana Costa',
      location: 'Zango',
      text: 'Rápido e confiável. Já comprei 3 vezes e sempre tudo certinho. A botija laranja dura bastante tempo.',
      rating: 5,
      avatar: 'A'
    },
    {
      name: 'Pedro Silva',
      location: 'Nova Vida',
      text: 'Óptimo atendimento! Consegui pagar por transferência e foi muito prático. Voltarei a comprar sempre.',
      rating: 5,
      avatar: 'P'
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-primary-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            O que dizem os{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-orange-500">
              nossos clientes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Centenas de famílias nas centralidades já confiam no gasemcasa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
              </div>

              {/* Depoimento */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Cliente */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Números de Confiança */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-500 mb-2">500+</div>
              <div className="text-gray-600">Clientes Felizes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">1000+</div>
              <div className="text-gray-600">Entregas Feitas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">4.9★</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-500 mb-2">2 anos</div>
              <div className="text-gray-600">No Mercado</div>
            </div>
          </div>
        </div>

        {/* Selo de Confiança */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
            <i className="fas fa-shield-alt mr-2"></i>
            Empresa 100% Angolana e Confiável
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
