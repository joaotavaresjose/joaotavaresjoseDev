function Projects() {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [cardsPerView, setCardsPerView] = React.useState(3);
    const [touchStart, setTouchStart] = React.useState(null);
    const [touchEnd, setTouchEnd] = React.useState(null);
    const [activeFilter, setActiveFilter] = React.useState('all');

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const filters = [
      { id: 'all', label: 'Todos os Projetos' },
      { id: 'frontend', label: 'Front-end' },
      { id: 'design', label: 'Design UI' }
    ];

    const handleTouchStart = (e) => {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      if (isLeftSwipe) {
        nextSlide();
      } else if (isRightSwipe) {
        prevSlide();
      }
    };

    React.useEffect(() => {
      const updateCardsPerView = () => {
        if (window.innerWidth < 768) {
          setCardsPerView(1);
        } else if (window.innerWidth < 1024) {
          setCardsPerView(2);
        } else {
          setCardsPerView(3);
        }
      };

      updateCardsPerView();
      window.addEventListener('resize', updateCardsPerView);
      return () => window.removeEventListener('resize', updateCardsPerView);
    }, []);

    const projects = [
      {
        id: 1,
        title: 'E-commerce Moderno',
        description: 'Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
        category: 'frontend',
        liveUrl: '#',
        githubUrl: '#'
      },
      {
        id: 2,
        title: 'Dashboard Analytics',
        description: 'Dashboard interativo para análise de dados com gráficos e métricas em tempo real.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        technologies: ['React', 'Chart.js', 'CSS3', 'API REST'],
        category: 'frontend',
        liveUrl: '#',
        githubUrl: '#'
      },
      {
        id: 3,
        title: 'App de Tarefas',
        description: 'Aplicativo de gerenciamento de tarefas com drag-and-drop e sincronização em nuvem.',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
        technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
        category: 'frontend',
        liveUrl: '#',
        githubUrl: '#'
      },
      {
        id: 4,
        title: 'Design System Moderno',
        description: 'Sistema de design completo com componentes reutilizáveis e guia de estilo.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
        category: 'design',
        liveUrl: '#',
        githubUrl: '#'
      },
      {
        id: 5,
        title: 'Interface Bancária',
        description: 'Design de interface para aplicativo bancário com foco em usabilidade e segurança.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
        technologies: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
        category: 'design',
        liveUrl: '#',
        githubUrl: '#'
      },
      {
        id: 6,
        title: 'Landing Page Criativa',
        description: 'Landing page moderna com animações suaves e design responsivo para startup de tecnologia.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
        technologies: ['React', 'Framer Motion', 'Styled Components'],
        category: 'frontend',
        liveUrl: '#',
        githubUrl: '#'
      },
      {
        id: 7,
        title: 'App Mobile E-learning',
        description: 'Design de aplicativo mobile para plataforma de educação online com interface intuitiva.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
        technologies: ['Figma', 'Mobile Design', 'UX Research', 'Prototyping'],
        category: 'design',
        liveUrl: '#',
        githubUrl: '#'
      },
      {
        id: 8,
        title: 'Sistema de Blog',
        description: 'CMS personalizado para blog com editor rich-text e sistema de comentários.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
        technologies: ['Next.js', 'Markdown', 'Prisma', 'PostgreSQL'],
        category: 'frontend',
        liveUrl: '#',
        githubUrl: '#'
      }
    ];

    // Filter projects based on active filter
    const filteredProjects = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);

    const nextSlide = () => {
      setCurrentIndex((prev) => 
        prev + cardsPerView >= filteredProjects.length ? 0 : prev + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => 
        prev === 0 ? Math.max(0, filteredProjects.length - cardsPerView) : prev - 1
      );
    };

    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

    const handleFilterChange = (filterId) => {
      setActiveFilter(filterId);
      setCurrentIndex(0); // Reset to first slide when filter changes
    };

    return (
      <section id="projects" className="section-padding bg-[var(--bg-white)]" data-name="projects" data-file="components/Projects.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-on-scroll">
              Meus <span className="text-gradient">Projetos</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 animate-fade-in stagger-animation" style={{"--delay": "0.2s"}}>
              Uma seleção dos meus trabalhos mais recentes, mostrando diferentes habilidades e tecnologias.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in stagger-animation" style={{"--delay": "0.4s"}}>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => handleFilterChange(filter.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-[var(--primary-color)] text-white shadow-lg transform scale-105'
                      : 'bg-white text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]'
                  }`}
                >
                  {filter.label}
                  <span className="ml-2 text-xs opacity-75">
                    ({filter.id === 'all' ? projects.length : projects.filter(p => p.category === filter.id).length})
                  </span>
                </button>
              ))}
            </div>
            
            <p className="text-sm text-[var(--text-secondary)] md:hidden animate-fade-in stagger-animation" style={{"--delay": "0.6s"}}>
              💡 Deslize para navegar entre os projetos
            </p>
          </div>

          <div className="relative animate-fade-in stagger-animation" style={{"--delay": "0.6s"}}>
            {/* Carousel Container */}
            <div 
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
              >
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / cardsPerView}%` }}
                  >
                    <div className="bg-[var(--bg-white)] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/30 select-none">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex gap-2">
                            <a
                              href={project.liveUrl}
                              className="bg-[var(--bg-white)]/90 backdrop-blur-sm p-3 rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-all duration-200 shadow-lg"
                              title="Ver projeto"
                            >
                              <div className="icon-external-link text-lg"></div>
                            </a>
                            <a
                              href={project.githubUrl}
                              className="bg-[var(--bg-white)]/90 backdrop-blur-sm p-3 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-200 shadow-lg"
                              title="Ver código"
                            >
                              <div className="icon-github text-lg"></div>
                            </a>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex gap-2">
                            {project.technologies.slice(0, 2).map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-[var(--bg-white)]/90 backdrop-blur-sm text-[var(--text-primary)] text-xs font-medium rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors duration-200">{project.title}</h3>
                          <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed line-clamp-2">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--accent-color)]/10 text-[var(--primary-color)] text-xs font-medium rounded-full border border-[var(--primary-color)]/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]/50">
                          <span className="text-xs text-[var(--text-secondary)] font-medium">Projeto #{project.id}</span>
                          <div className="flex items-center gap-1 text-[var(--accent-color)]">
                            <div className="icon-arrow-right text-sm transform group-hover:translate-x-1 transition-transform duration-200"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[var(--primary-color)]/90 backdrop-blur-sm p-3 rounded-full hover:bg-[var(--primary-color)] transition-all duration-200 shadow-lg z-10"
              disabled={currentIndex === 0}
            >
              <div className="icon-chevron-left text-lg text-white"></div>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--primary-color)]/90 backdrop-blur-sm p-3 rounded-full hover:bg-[var(--primary-color)] transition-all duration-200 shadow-lg z-10"
              disabled={currentIndex + cardsPerView >= filteredProjects.length}
            >
              <div className="icon-chevron-right text-lg text-white"></div>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(filteredProjects.length / cardsPerView) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    Math.floor(currentIndex / cardsPerView) === index
                      ? 'bg-[var(--primary-color)]'
                      : 'bg-gray-300 hover:bg-gray-400'
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