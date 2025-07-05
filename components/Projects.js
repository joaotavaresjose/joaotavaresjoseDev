function Projects() {
  try {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);
    const [projects, setProjects] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [itemsPerSlide, setItemsPerSlide] = React.useState(1);

    React.useEffect(() => {
      const loadProjects = async () => {
        try {
          const dataSync = DataSync();
          const projectsData = await dataSync.syncProjects();
          // Filtrar apenas projetos concluídos para o portfolio público
          const completedProjects = projectsData.filter(project => 
            project.status === 'Concluído'
          );
          setProjects(completedProjects);
        } catch (error) {
          console.error('Erro ao carregar projetos:', error);
        }
        setLoading(false);
      };
      
      loadProjects();
      
      // Atualizar projetos a cada 30 segundos para manter sincronizado
      const interval = setInterval(loadProjects, 30000);
      return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
      const getItemsPerSlide = () => {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
      };

      const handleResize = () => {
        setItemsPerSlide(getItemsPerSlide());
        setCurrentSlide(0);
      };

      setItemsPerSlide(getItemsPerSlide());
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (loading) {
      return (
        <section id="projects" className="py-20 px-6 bg-black/10" data-name="projects" data-file="components/Projects.js">
          <div className="container mx-auto max-w-7xl text-center">
            <div className="text-purple-400">Carregando projetos...</div>
          </div>
        </section>
      );
    }


    const maxSlides = Math.max(0, projects.length - itemsPerSlide);

    const nextSlide = () => {
      setCurrentSlide(prev => prev >= maxSlides ? 0 : prev + 1);
    };

    const prevSlide = () => {
      setCurrentSlide(prev => prev <= 0 ? maxSlides : prev - 1);
    };

    const handleTouchStart = (e) => {
      setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isLeftSwipe) nextSlide();
      if (isRightSwipe) prevSlide();
    };

    return (
      <section id="projects" className="py-20 px-6 bg-black/10" data-name="projects" data-file="components/Projects.js">
        <div className="container mx-auto max-w-7xl">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
              Meus Projetos
            </h2>
            <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi, demonstrando minhas habilidades em desenvolvimento front-end
            </p>
          </div>

          <div className="relative animate-on-scroll opacity-0 animate-fade-in-up animate-delay-200">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {projects.map((project) => (
                  <div 
                    key={project.id} 
                    className={`flex-shrink-0 px-3 ${
                      itemsPerSlide === 1 ? 'w-full' : 
                      itemsPerSlide === 2 ? 'w-1/2' : 'w-1/3'
                    }`}
                  >
                    <div className="bg-gradient-to-br from-purple-900/30 to-black/30 rounded-2xl border border-purple-500/20 card-hover overflow-hidden h-full">
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <a 
                          href={project.link}
                          className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <span>Ver Projeto</span>
                          <div className="icon-external-link text-sm"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-600/80 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            >
              <div className="icon-chevron-left text-white text-xl"></div>
            </button>

            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-600/80 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            >
              <div className="icon-chevron-right text-white text-xl"></div>
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxSlides + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-purple-500 scale-125' 
                      : 'bg-purple-500/30 hover:bg-purple-500/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}