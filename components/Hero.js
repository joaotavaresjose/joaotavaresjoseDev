function Hero() {
  try {
    React.useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      });

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }, []);

    return (
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 hero-bg relative" data-name="hero" data-file="components/Hero.js">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="animate-on-scroll opacity-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
              <span className="hero-name">João Tavares José</span>
            </h1>
          </div>
          
          <div className="animate-on-scroll opacity-0 animate-delay-200">
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Desenvolvedor Front-end
            </p>
          </div>
          
          <div className="animate-on-scroll opacity-0 animate-delay-400">
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Transformando ideias em experiências digitais incríveis com 3 anos de experiência
              em desenvolvimento front-end moderno.
            </p>
          </div>
          
          <div className="animate-on-scroll opacity-0 animate-delay-600">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Entre em Contato
              </a>
              <a 
                href="#about" 
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
              >
                Saiba Mais
              </a>
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