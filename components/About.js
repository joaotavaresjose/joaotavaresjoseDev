function About() {
  try {
    const stats = [
      { number: '2+', label: 'Anos de Experiência' },
      { number: '8+', label: 'Projetos Concluídos' },
      { number: '6+', label: 'Clientes Satisfeitos' },
      { number: '100%', label: 'Dedicação' }
    ];

    return (
      <section id="about" className="section-padding bg-[var(--bg-white)]" data-name="about" data-file="components/About.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-on-scroll">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto animate-fade-in stagger-animation" style={{"--delay": "0.2s"}}>
              Desenvolvedor apaixonado por tecnologia e inovação, sempre buscando criar soluções que impactam positivamente a vida das pessoas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <h3 className="text-2xl font-bold mb-6">Minha Jornada</h3>
              <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-3 flex-shrink-0"></div>
                  <p>
                    Comecei minha jornada na programação há mais de 2 anos, descobrindo minha paixão por criar interfaces 
                    que conectam pessoas e tecnologia de forma intuitiva e elegante. Cada projeto é uma oportunidade de 
                    aprender e crescer profissionalmente.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full mt-3 flex-shrink-0"></div>
                  <p>
                    Especializado em desenvolvimento front-end, tenho experiência sólida em React, JavaScript moderno, 
                    HTML5, CSS3 e diversas ferramentas do ecossistema web atual. Sempre atualizado com as últimas 
                    tendências e melhores práticas do mercado.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-3 flex-shrink-0"></div>
                  <p>
                    Acredito que bom código é aquele que resolve problemas reais e cria experiências memoráveis. 
                    Por isso sempre busco entender profundamente as necessidades dos usuários e objetivos de negócio 
                    antes de começar a desenvolver.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="icon-map-pin text-lg text-[var(--primary-color)]"></div>
                  <span className="text-[var(--text-secondary)]">Viana/Caop B</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="icon-mail text-lg text-[var(--primary-color)]"></div>
                  <span className="text-[var(--text-secondary)]">engjoaotavaresjose@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-slide-right">
              {stats.map((stat, index) => (
                <div key={index} className="text-center card hover:scale-105 transition-transform duration-300 stagger-animation" style={{"--delay": `${index * 0.1}s`}}>
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    {stat.label}
                  </div>
                </div>
              ))}
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