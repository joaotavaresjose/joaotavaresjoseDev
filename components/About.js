function About() {
  try {
    return (
      <section id="about" className="py-20 px-6 bg-black/10" data-name="about" data-file="components/About.js">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 gradient-text">
              Sobre Mim
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-on-scroll opacity-0 order-2 lg:order-1">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-white">
                    João Tavares José
                  </h3>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                      <div className="icon-briefcase text-lg text-white"></div>
                    </div>
                    <span className="text-xl text-purple-400 font-semibold">Desenvolvedor Front-end</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-900/30 to-black/30 p-8 rounded-2xl border border-purple-500/20 card-hover">
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    Com 3 anos de experiência sólida em desenvolvimento front-end, especializo-me em criar
                    soluções digitais inovadoras que combinam design elegante com funcionalidade robusta.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Minha abordagem focada no usuário e paixão por tecnologias modernas me permite
                    transformar ideias complexas em interfaces intuitivas e experiências memoráveis.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-900/20 to-black/20 p-4 rounded-xl border border-purple-500/10">
                    <div className="flex items-center space-x-3">
                      <div className="icon-calendar text-xl text-purple-400"></div>
                      <div>
                        <p className="text-2xl font-bold text-white">3+</p>
                        <p className="text-gray-400 text-sm">Anos de experiência</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-900/20 to-black/20 p-4 rounded-xl border border-purple-500/10">
                    <div className="flex items-center space-x-3">
                      <div className="icon-trophy text-xl text-purple-400"></div>
                      <div>
                        <p className="text-2xl font-bold text-white">50+</p>
                        <p className="text-gray-400 text-sm">Projetos concluídos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0 animate-delay-200 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-gradient-to-br from-purple-900/40 to-black/40 p-8 rounded-2xl border border-purple-500/30">
                  <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden border-4 border-purple-500 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                      alt="João Tavares José - Desenvolvedor Front-end"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <div className="flex justify-center space-x-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-medium">Disponível para projetos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 animate-on-scroll opacity-0 animate-delay-400">
            <div className="bg-gradient-to-br from-purple-900/30 to-black/30 p-8 rounded-2xl border border-purple-500/20 card-hover text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="icon-code text-2xl text-white"></div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Código Limpo</h4>
              <p className="text-gray-400 leading-relaxed">
                Desenvolvimento com padrões de qualidade, código legível e arquitetura escalável
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-black/30 p-8 rounded-2xl border border-purple-500/20 card-hover text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="icon-smartphone text-2xl text-white"></div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Design Responsivo</h4>
              <p className="text-gray-400 leading-relaxed">
                Interfaces que se adaptam perfeitamente a todos os dispositivos e tamanhos de tela
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-black/30 p-8 rounded-2xl border border-purple-500/20 card-hover text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="icon-zap text-2xl text-white"></div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Performance</h4>
              <p className="text-gray-400 leading-relaxed">
                Otimização avançada para garantir velocidade, eficiência e melhor experiência do usuário
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}