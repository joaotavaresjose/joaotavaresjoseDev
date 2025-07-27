function Footer() {
  try {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
      { icon: 'github', url: 'https://github.com/joaotavares', label: 'GitHub' },
      { icon: 'linkedin', url: 'https://linkedin.com/in/joao-tavares-jose', label: 'LinkedIn' },
      { icon: 'instagram', url: 'https://instagram.com/joaotavares', label: 'Instagram' },
      { icon: 'message-circle', url: 'https://wa.me/244951184916', label: 'WhatsApp' }
    ];

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <footer className="bg-[var(--text-primary)] text-white section-padding" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">JT</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient leading-tight">João Tavares José</h3>
                  <p className="text-sm text-gray-400 font-medium">Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Desenvolvedor front-end especializado em React e JavaScript, criando soluções digitais inovadoras 
                que conectam pessoas e geram resultados excepcionais para empresas.
              </p>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Disponível para novos projetos</span>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-[var(--primary-color)] hover:scale-110 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <div className={`icon-${social.icon} text-lg`}></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Navegação</h4>
              <ul className="space-y-3">
                {['Início', 'Sobre', 'Habilidades', 'Projetos', 'Contato'].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-300 hover:text-[var(--accent-color)] transition-colors duration-200 flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-[var(--accent-color)] rounded-full"></div>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contato Direto</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:engjoaotavaresjose@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-[var(--accent-color)] transition-colors duration-200"
                >
                  <div className="icon-mail text-lg"></div>
                  <span className="text-sm">engjoaotavaresjose@gmail.com</span>
                </a>
                <a 
                  href="https://wa.me/244951184916"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  <div className="icon-phone text-lg"></div>
                  <span className="text-sm">+244 951 184 916</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="icon-map-pin text-lg"></div>
                  <span className="text-sm">Viana/Caop B, Angola</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="text-center py-8 border-t border-b border-gray-700">
            <p className="text-lg italic text-gray-300 mb-2">
              "Código é poesia, design é arte, juntos criam experiências inesquecíveis."
            </p>
            <span className="text-[var(--accent-color)] text-sm font-medium">- João Tavares José</span>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300 text-sm mb-1">
                © {currentYear} João Tavares José. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-xs">
                Feito com ❤️ em Angola • Hospedado com 🚀 Trickle
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] p-3 rounded-full hover:scale-110 transition-transform duration-200 shadow-lg"
              aria-label="Voltar ao topo"
            >
              <div className="icon-arrow-up text-lg text-white"></div>
            </button>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}