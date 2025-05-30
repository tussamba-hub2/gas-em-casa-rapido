
import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: 'fas fa-bolt',
      title: 'Entrega Rápida',
      description: 'Receba o seu gás em casa em até 30 minutos nas centralidades de Luanda',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: 'fas fa-home',
      title: 'Sem Sair de Casa',
      description: 'Peça pelo telefone ou WhatsApp e receba direto na porta do seu apartamento',
      color: 'from-primary-400 to-primary-600'
    },
    {
      icon: 'fas fa-credit-card',
      title: 'Pagamento Simples',
      description: 'Pague em dinheiro na entrega ou transferência. Sem complicações!',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Seguro e Confiável',
      description: 'Gás de qualidade com garantia. Entregadores identificados e treinados',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Por que escolher o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-orange-500">
              gasemcasa?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tornamos a compra de gás de cozinha mais fácil e conveniente para as famílias das centralidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${benefit.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="mt-20 bg-gradient-to-r from-primary-500 to-orange-500 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-primary-100">Entregas realizadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30min</div>
              <div className="text-primary-100">Tempo médio de entrega</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Clientes satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
