function Hero() {
  try {
    const [displayedText, setDisplayedText] = React.useState('');
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [showCursor, setShowCursor] = React.useState(true);
    
    const fullText = 'Transformando ideias em experiências digitais';
    
    React.useEffect(() => {
      if (currentIndex < fullText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, 100); // Velocidade da digitação
        
        return () => clearTimeout(timer);
      } else {
        // Quando terminar de digitar, piscar o cursor por um tempo
        const cursorTimer = setTimeout(() => {
          setShowCursor(false);
        }, 3000);
        
        return () => clearTimeout(cursorTimer);
      }
    }, [currentIndex, fullText]);

    const scrollToProjects = () => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const scrollToContact = () => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-24" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-left min-h-[1.2em]">
                <span className="inline-block">
                  {displayedText}
                  {showCursor && <span className="border-r-3 border-[var(--primary-color)] animate-pulse ml-1">|</span>}
                </span>
              </h1>
              
              
              <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-xl leading-relaxed animate-slide-left stagger-animation" style={{"--delay": "0.4s"}}>
                Crio interfaces modernas e funcionais que conectam pessoas e geram resultados excepcionais.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start animate-fade-in stagger-animation" style={{"--delay": "0.6s"}}>
                <div className="flex items-center gap-2 bg-[var(--bg-white)] px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">2+ Anos de Experiência</span>
                </div>
                <div className="flex items-center gap-2 bg-[var(--bg-white)] px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="icon-star text-sm text-yellow-500"></div>
                  <span className="text-sm font-medium">8+ Projetos</span>
                </div>
                <div className="flex items-center gap-2 bg-[var(--bg-white)] px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="icon-users text-sm text-blue-500"></div>
                  <span className="text-sm font-medium">6+ Clientes</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-left stagger-animation" style={{"--delay": "0.8s"}}>
                <button onClick={scrollToProjects} className="btn-primary flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                  <div className="icon-folder text-lg"></div>
                  Ver Projetos
                </button>
                <button onClick={scrollToContact} className="btn-outline flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                  <div className="icon-message-circle text-lg"></div>
                  Entre em Contato
                </button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative animate-scale stagger-animation" style={{"--delay": "1s"}}>
                {/* Floating elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-[var(--accent-color)]/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-[var(--primary-color)]/20 rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 -left-12 w-8 h-8 bg-yellow-400/30 rounded-full animate-ping"></div>
                
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] p-2 hover:scale-105 transition-all duration-500 hover:rotate-2">
                  <img
                    src="/assets/perfil.jpg"
                    alt="João Tavares José"
                    className="w-full h-full rounded-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <div className="icon-code text-2xl text-[var(--primary-color)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}