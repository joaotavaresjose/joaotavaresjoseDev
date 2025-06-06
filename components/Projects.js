function Projects() {
    try {
        const [currentSlide, setCurrentSlide] = React.useState(0);
        const [slidesToShow, setSlidesToShow] = React.useState(1);
        const [isDragging, setIsDragging] = React.useState(false);
        const [startX, setStartX] = React.useState(0);
        const [translateX, setTranslateX] = React.useState(0);

        React.useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            const elements = document.querySelectorAll('#projects .fade-in');
            elements.forEach(el => observer.observe(el));

            return () => observer.disconnect();
        }, []);

        const projects = [
          {
            title: "Bons Sabores",
            description:
              "Site de receitas com React, busca por ingredientes e categorias.",
            image: "/img/bons-sabores.png",
            tags: ["React", "JavaScript", "CSS3", "Tailwind CSS"],
            demo: "https://bons-sabores.vercel.app/",
            github: "https://github.com/joaotavaresjose/Bons-Sabores",
          },
          {
            title: "Construction Company",
            description: "Desenvolvi uma landing page moderna e responsiva para uma empresa de construção civil, com foco em destacar os serviços, equipe e projetos realizados. ",
            image: "/img/construction-company.png",
            tags: ["React", "JavaScript", "CSS3", "Tailwind CSS"],
            demo: "https://construction-company-chi.vercel.app/",
            github: "https://github.com/joaotavaresjose/Construction-Company",
          },
          {
            title: "ClimaTempo",
            description:
              "Aplicativo de previsão do tempo com integração à API OpenWeatherMap.",
            image: "img/climatempo.png",
            tags: ["Html5", "JavaScript", "CSS3"],
            demo: "https://clima-tempo-phi-one.vercel.app/",
            github: "https://github.com/joaotavaresjose/ClimaTempo",
          },
          {
            title: "Gestor de Tarefas",
            description:
              "Aplicativo de gerenciamento de tarefas com drag & drop e sincronização em tempo real.",
            image: "/img/gestor-tarefas.png",
            tags: ["React", "JavaScript", "CSS3", " Tailwind CSS"],
            demo: "https://gestor-de-tarefa.vercel.app/",
            github: "https://github.com/joaotavaresjose/Gestor-de-tarefa",
          },
          {
            title: "Portfolio Pessoal",
            description:
              "Site portfolio responsivo com animações suaves e design moderno.",
            image: "img/portifolio.png",
            tags: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
            demo: "https://portfolio-roan-nine-77.vercel.app/",
            github: "https://github.com/joaotavaresjose/Portifolio-0.2.git",
          },
        ];

        React.useEffect(() => {
            const updateSlidesToShow = () => {
                if (window.innerWidth >= 1024) {
                    setSlidesToShow(3);
                } else if (window.innerWidth >= 768) {
                    setSlidesToShow(2);
                } else {
                    setSlidesToShow(1);
                }
            };

            updateSlidesToShow();
            window.addEventListener('resize', updateSlidesToShow);
            return () => window.removeEventListener('resize', updateSlidesToShow);
        }, []);

        const maxSlides = Math.max(0, projects.length - slidesToShow);

        const nextSlide = () => {
            setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1));
        };

        const prevSlide = () => {
            setCurrentSlide(prev => (prev <= 0 ? maxSlides : prev - 1));
        };

        const goToSlide = (index) => {
            setCurrentSlide(Math.min(index, maxSlides));
        };

        const handleStart = (clientX) => {
            setIsDragging(true);
            setStartX(clientX);
        };

        const handleMove = (clientX) => {
            if (!isDragging) return;
            const diff = clientX - startX;
            setTranslateX(diff);
        };

        const handleEnd = () => {
            if (!isDragging) return;
            setIsDragging(false);
            
            if (Math.abs(translateX) > 50) {
                if (translateX > 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
            }
            setTranslateX(0);
        };

        return (
            <section id="projects" data-name="projects" data-file="components/Projects.js" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Projetos</h2>
                        <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
                    </div>

                    <div className="relative carousel-container max-w-6xl mx-auto">
                        <div 
                            className="carousel-track"
                            style={{ 
                                transform: `translateX(${-currentSlide * (100 / slidesToShow) + (translateX / window.innerWidth * 100)}%)`,
                                transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
                            }}
                            onMouseDown={(e) => handleStart(e.clientX)}
                            onMouseMove={(e) => handleMove(e.clientX)}
                            onMouseUp={handleEnd}
                            onMouseLeave={handleEnd}
                            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
                            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                            onTouchEnd={handleEnd}
                        >
                            {projects.map((project, index) => (
                                <div key={index} className="carousel-slide px-2 sm:px-3">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover h-full max-w-sm mx-auto">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-40 object-cover"
                                            draggable={false}
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                                            <p className="text-gray-600 mb-3 text-sm line-clamp-2">{project.description}</p>
                                            
                                            <div className="flex flex-wrap gap-1 mb-3">
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span key={tagIndex} className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-2">
                                                <a 
                                                    href={project.demo} 
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 bg-purple-600 text-white text-center py-2 rounded-md hover:bg-purple-700 transition-colors text-sm"
                                                >
                                                    <i className="fas fa-external-link-alt mr-1"></i>
                                                    Demo
                                                </a>
                                                <a 
                                                    href={project.github} 
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 border border-purple-600 text-purple-600 text-center py-2 rounded-md hover:bg-purple-600 hover:text-white transition-colors text-sm"
                                                >
                                                    <i className="fab fa-github mr-1"></i>
                                                    Código
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {maxSlides > 0 && (
                            <div>
                                <button onClick={prevSlide} className="carousel-nav prev">
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <button onClick={nextSlide} className="carousel-nav next">
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        )}
                    </div>

                    {maxSlides > 0 && (
                        <div className="carousel-dots">
                            {Array.from({ length: maxSlides + 1 }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                                ></button>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
    }
}
