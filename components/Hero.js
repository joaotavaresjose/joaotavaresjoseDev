function Hero() {
    try {
        const [displayText, setDisplayText] = React.useState('');
        const [currentRole, setCurrentRole] = React.useState(0);
        const roles = ['Desenvolvedor Front-end', 'Criador de UI/UX', 'Especialista React', 'Web Designer'];

        React.useEffect(() => {
            let i = 0;
            const currentText = roles[currentRole];
            const timer = setInterval(() => {
                if (i < currentText.length) {
                    setDisplayText(currentText.slice(0, i + 1));
                    i++;
                } else {
                    setTimeout(() => {
                        setCurrentRole((prev) => (prev + 1) % roles.length);
                        setDisplayText('');
                    }, 2000);
                    clearInterval(timer);
                }
            }, 100);

            return () => clearInterval(timer);
        }, [currentRole]);

        const handleIconClick = () => {
            const icon = document.querySelector('.main-icon');
            icon.style.transform = 'rotate(360deg) scale(1.2)';
            setTimeout(() => {
                icon.style.transform = 'rotate(0deg) scale(1)';
            }, 600);
        };

        return (
          <section
            id="home"
            data-name="hero"
            data-file="components/Hero.js"
            className="min-h-screen flex items-center gradient-bg bg-pattern pt-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
              <div
                className="absolute top-40 right-20 w-32 h-32 bg-yellow-400/20 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-40 left-20 w-16 h-16 bg-green-400/20 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/20 rounded-full animate-bounce"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>

            <div className="container mx-auto px-4 text-center text-white relative z-10">
              <div className="fade-in visible max-w-4xl mx-auto">
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div
                      className="main-icon w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse cursor-pointer hover:scale-110 transition-all duration-300"
                      onClick={handleIconClick}
                    >
                      <i className="fas fa-code text-5xl text-white"></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-black font-extrabold leading-tight text-shadow-lg transition-colors duration-300 cursor-default">
                  João Tavares José
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-yellow-400 font-bold typing-animation inline-block min-h-[2rem]">
                  {displayText}
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-blue-500 mb-6 md:mb-8 max-w-2xl mx-auto hero-description leading-relaxed px-4">
                  Criando experiências digitais incríveis com código limpo e
                  design moderno. Especializado em React, JavaScript e
                  interfaces responsivas.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-8">
                  <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="text-2xl font-bold text-yellow-400">2+</div>
                    <div className="text-sm text-gray-300">Anos</div>
                  </div>
                  <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="text-2xl font-bold text-green-400">7+</div>
                    <div className="text-sm text-gray-300">Projetos</div>
                  </div>
                  <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="text-2xl font-bold text-blue-400">100%</div>
                    <div className="text-sm text-gray-300">Dedicação</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                  <button
                    onClick={() =>
                      document
                        .getElementById("projects")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    className="btn-projects text-white px-6 md:px-8 py-3 rounded-full font-semibold text-sm md:text-base hover:shadow-2xl"
                  >
                    <i className="fas fa-rocket mr-2"></i>
                    Ver Projetos
                  </button>
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    className="btn-contact text-white px-6 md:px-8 py-3 rounded-full font-semibold text-sm md:text-base hover:shadow-2xl"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Entre em Contato
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
    }
}
