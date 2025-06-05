function About() {
    try {
        const [activeInfo, setActiveInfo] = React.useState(null);

        React.useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            const elements = document.querySelectorAll('#about .fade-in, #about .slide-in-left, #about .slide-in-right');
            elements.forEach(el => observer.observe(el));

            return () => observer.disconnect();
        }, []);

        const infoItems = [
            { key: 'name', icon: 'fas fa-user', label: 'Nome', value: 'João Tavares José', color: 'purple' },
            { key: 'location', icon: 'fas fa-map-marker-alt', label: 'Localização', value: 'Viana, Angola', color: 'red' },
            { key: 'email', icon: 'fas fa-envelope', label: 'Email', value: 'engjoaotavaresjose@gmail.com', color: 'blue' },
            { key: 'experience', icon: 'fas fa-code', label: 'Experiência', value: '2+ anos', color: 'green' }
        ];

        return (
          <section
            id="about"
            data-name="about"
            data-file="components/About.js"
            className="py-20 bg-gray-50"
          >
            <div className="container mx-auto px-6">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Sobre Mim
                </h2>
                <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="slide-in-left">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop"
                    alt="Desenvolvedor trabalhando"
                    className="rounded-lg shadow-lg w-full transition-shadow "
                  />
                </div>

                <div className="slide-in-right">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 hover:text-purple-600 transition-colors duration-300 cursor-default">
                    Olá! Eu sou João Tavares José
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                    Desenvolvedor front-end apaixonado por criar interfaces de
                    usuário intuitivas e experiências digitais memoráveis. Com
                    mais de 2 anos de experiência, trabalho principalmente com
                    React, JavaScript moderno e tecnologias web atuais.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                    Minha jornada começou com curiosidade sobre como os sites
                    funcionam, e hoje transformo ideias em código, sempre
                    focando na qualidade, performance e experiência do usuário.
                  </p>

                  <div className="grid grid-cols-2 gap-6 ">
                    {infoItems.map((item) => (
                      <div
                        key={item.key}
                        className={`cursor-pointer transform transition-all duration-300 p-3 rounded-lg ${
                          activeInfo === item.key
                            ? ""
                            : ""
                        }`}
                        onMouseEnter={() => (item.key)}
                        onMouseLeave={() => (null)}
                      >
                        <h4 className="font-semibold text-gray-800 mb-2">
                          <i
                            className={`${item.icon} text-${
                              item.color
                            }-600 mr-2 ${
                              activeInfo === item.key ? "animate-bounce" : ""
                            }`}
                          ></i>
                          {item.label}
                        </h4>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
    }
}
