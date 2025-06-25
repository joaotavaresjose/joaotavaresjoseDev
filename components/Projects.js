function Projects() {
    try {
        const [currentIndex, setCurrentIndex] = React.useState(0);
        const [startX, setStartX] = React.useState(0);
        const [isDragging, setIsDragging] = React.useState(false);

        React.useEffect(() => {
            lucide.createIcons();
        }, [currentIndex]);

        const projects = [
            {
                id: 1,
                title: 'FarmaciaSys',
                description: 'Sistema de gestão de farmácias com controle de estoque e vendas',
                image: 'img/farmaciasys.png',
                technologies: ['React', 'Tailwind Css', 'HTML', 'CSS'],
                demo: '#',
                github: '#'
            },
            {
                id: 2,
                title: 'MotoTaxi AO',
                description: 'Aplicativo de mototaxi com painel administrativo e gráficos de desempenho',
                image: 'img/motoexpress.png',
                technologies: ['React', 'Tailwind Css', 'HTML', 'CSS'],
                demo: '#',
                github: '#'
            },
            {
                id: 3,
                title: 'Construction Company',
                description: 'Aplicativo de gerenciamento de obras com funcionalidades de planejamento e controle',
                image: 'img/ConstructionCompany.png',
                technologies: ['React', 'Tailwind Css', 'HTML', 'CSS'],
                demo: '#',
                github: '#'
            },
            {
                id: 4,
                title: 'Bons Sabores',
                description: 'Site de uma hamburgueria com cardápio online e sistema de pedidos',
                image: 'img/bons-sabores.png',
                technologies: ['React', 'Tailwind Css', 'HTML', 'CSS'],
                demo: '#',
                github: '#'
            }
        ];

        const nextSlide = () => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        };

        const prevSlide = () => {
            setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
        };

        const handleTouchStart = (e) => {
            setStartX(e.touches[0].clientX);
            setIsDragging(true);
        };

        const handleTouchMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
        };

        const handleTouchEnd = (e) => {
            if (!isDragging) return;
            setIsDragging(false);
            
            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;
            
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        };

        const handleMouseDown = (e) => {
            setStartX(e.clientX);
            setIsDragging(true);
        };

        const handleMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
        };

        const handleMouseUp = (e) => {
            if (!isDragging) return;
            setIsDragging(false);
            
            const endX = e.clientX;
            const diffX = startX - endX;
            
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        };

        return (
            <section id="projects" data-name="projects" data-file="components/Projects.js" className="py-20 bg-gray-900/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Projetos</h2>
                        <p className="text-gray-400 text-lg">Alguns dos meus trabalhos recentes</p>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        <div 
                            className="overflow-hidden rounded-xl cursor-grab active:cursor-grabbing"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={() => setIsDragging(false)}
                        >
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {projects.map((project) => (
                                    <div key={project.id} className="w-full flex-shrink-0 px-2 md:px-4">
                                        <div className="glass-effect rounded-xl overflow-hidden group shadow-2xl transform transition-all duration-300 hover:scale-105">
                                            <div className="relative h-56 md:h-64 overflow-hidden">
                                                <img 
                                                    src={project.image} 
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                                <div className="absolute top-4 right-4">
                                                    <div className="flex space-x-2">
                                                        <a href={project.demo} className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                                                            <i data-lucide="external-link" className="w-4 h-4"></i>
                                                        </a>
                                                        <a href={project.github} className="w-8 h-8 glass-effect rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                                                            <i data-lucide="github" className="w-4 h-4"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="p-5 md:p-6">
                                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                                <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base">{project.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech, index) => (
                                                        <span key={index} className="px-2 py-1 md:px-3 md:py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs md:text-sm font-medium border border-blue-500/20">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button 
                            onClick={prevSlide}
                            className="absolute left-2 md:left-0 top-1/2 transform -translate-y-1/2 md:-translate-x-4 w-10 h-10 md:w-12 md:h-12 glass-effect rounded-full flex items-center justify-center z-10 transition-colors hover:bg-blue-600/20"
                        >
                            <i data-lucide="chevron-left" className="w-5 h-5 md:w-6 md:h-6"></i>
                        </button>

                        <button 
                            onClick={nextSlide}
                            className="absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2 md:translate-x-4 w-10 h-10 md:w-12 md:h-12 glass-effect rounded-full flex items-center justify-center z-10 transition-colors hover:bg-blue-600/20"
                        >
                            <i data-lucide="chevron-right" className="w-5 h-5 md:w-6 md:h-6"></i>
                        </button>

                        <div className="flex justify-center mt-8 space-x-3">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        currentIndex === index ? 'bg-blue-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
    }
}
