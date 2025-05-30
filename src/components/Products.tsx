
import React from 'react';

const Products = () => {
  const products = [
    {
      name: 'Botija Laranja',
      description: 'A mais popular! Ideal para famílias de 3-4 pessoas',
      price: '2.500 Kz',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      icon: 'fas fa-fire',
      popular: true,
      features: ['13kg de gás', 'Dura ~30 dias', 'Mais econômica']
    },
    {
      name: 'Botija Azul',
      description: 'Tradicional e confiável para toda a família',
      price: '2.300 Kz',
      color: 'from-primary-400 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100',
      icon: 'fas fa-fire',
      popular: false,
      features: ['12kg de gás', 'Dura ~25 dias', 'Qualidade garantida']
    },
    {
      name: 'Botija Cinzenta',
      description: 'Compacta e prática para apartamentos pequenos',
      price: '1.800 Kz',
      color: 'from-gray-600 to-gray-800',
      bgColor: 'from-gray-50 to-gray-100',
      icon: 'fas fa-fire',
      popular: false,
      features: ['8kg de gás', 'Dura ~20 dias', 'Mais leve']
    }
  ];

  const handleOrder = (productName: string) => {
    const message = `Olá! Quero comprar uma ${productName}. Podem entregar na minha centralidade?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/244900000000?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="produtos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Escolha o seu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-orange-500">
              gás ideal
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temos as 3 botijas mais utilizadas nas centralidades. Todas com entrega rápida e garantia!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${product.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white ${
                product.popular ? 'ring-4 ring-orange-400 ring-opacity-50' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge Popular */}
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  MAIS POPULAR
                </div>
              )}

              <div className="text-center">
                {/* Ícone da Botija */}
                <div className={`w-32 h-32 mx-auto mb-6 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                  <i className={`${product.icon} text-white text-4xl`}></i>
                </div>

                {/* Nome e Descrição */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Características */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-gray-700">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Preço */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-800">{product.price}</span>
                  <span className="text-gray-600 ml-1">+ entrega</span>
                </div>

                {/* Botão de Compra */}
                <button
                  onClick={() => handleOrder(product.name)}
                  className={`w-full bg-gradient-to-r ${product.color} text-white py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  Comprar Agora
                </button>

                {/* Disponibilidade */}
                <div className="mt-4 flex items-center justify-center text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium">Disponível agora</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informação Adicional */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              <i className="fas fa-info-circle text-primary-500 mr-3"></i>
              Informações Importantes
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Entrega</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Taxa de entrega: 300-500 Kz</li>
                  <li>• Tempo: 30-60 minutos</li>
                  <li>• Horário: 7h às 18h</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Pagamento</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Dinheiro na entrega</li>
                  <li>• Transferência bancária</li>
                  <li>• Multicaixa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
