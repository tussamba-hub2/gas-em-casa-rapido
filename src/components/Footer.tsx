
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open('https://wa.me/244900000000', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+244900000000', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:contacto@gasemcasa.ao', '_self');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full flex items-center justify-center">
                <i className="fas fa-fire text-white text-xl"></i>
              </div>
              <span className="text-3xl font-bold">gasemcasa</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Facilitamos a vida das famílias nas centralidades de Luanda com entrega rápida e sem complicações de gás de cozinha.
            </p>
            
            {/* Selos de Confiança */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                ✓ Empresa Licenciada
              </div>
              <div className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                ✓ Entrega Garantida
              </div>
              <div className="bg-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                ✓ 100% Angolana
              </div>
            </div>
          </div>

          {/* Contactos Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-400">Contactos</h3>
            <div className="space-y-4">
              <button
                onClick={handleWhatsApp}
                className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300 group"
              >
                <i className="fab fa-whatsapp text-xl mr-3 group-hover:scale-110 transition-transform duration-300"></i>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-sm text-gray-400">+244 900 000 000</div>
                </div>
              </button>
              
              <button
                onClick={handleCall}
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300 group"
              >
                <i className="fas fa-phone text-xl mr-3 group-hover:scale-110 transition-transform duration-300"></i>
                <div>
                  <div className="font-medium">Telefone</div>
                  <div className="text-sm text-gray-400">+244 900 000 000</div>
                </div>
              </button>
              
              <button
                onClick={handleEmail}
                className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-300 group"
              >
                <i className="fas fa-envelope text-xl mr-3 group-hover:scale-110 transition-transform duration-300"></i>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-gray-400">contacto@gasemcasa.ao</div>
                </div>
              </button>
            </div>
          </div>

          {/* Áreas de Entrega */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-400">Entregamos em</h3>
            <div className="space-y-3">
              {['Kilamba', 'Sequele', 'Zango', 'Nova Vida', 'Cacuaco'].map((local) => (
                <div key={local} className="flex items-center text-gray-300">
                  <i className="fas fa-map-marker-alt text-primary-400 mr-3"></i>
                  <span>{local}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-gray-800 rounded-xl p-4">
              <h4 className="font-semibold mb-2 text-orange-400">Horário</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Seg - Sáb: 7h às 18h</div>
                <div>Domingo: 8h às 16h</div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha separadora */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} gasemcasa. Todos os direitos reservados.
            </div>
            
            {/* Links rápidos */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-orange-600 rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-2">Precisa de gás agora?</h4>
            <p className="mb-4 text-primary-100">Contacte-nos e receba em 30 minutos!</p>
            <button
              onClick={handleWhatsApp}
              className="bg-white text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Contactar Agora
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
