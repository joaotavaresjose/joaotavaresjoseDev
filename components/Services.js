function Services() {
    try {
        const [hoveredService, setHoveredService] = React.useState(null);

        React.useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            const elements = document.querySelectorAll('#services .fade-in');
            elements.forEach(el => observer.observe(el));

            return () => observer.disconnect();
        }, []);

        const services = [
            {
                icon: 'fas fa-laptop-code',
                title: 'Desenvolvimento Web',
                description: 'Criação de sites responsivos e aplicações web modernas com as melhores tecnologias.',
                color: 'blue'
            },
            {
                icon: 'fas fa-mobile-alt',
                title: 'Design Responsivo',
                description: 'Interfaces que se adaptam perfeitamente a todos os dispositivos e tamanhos de tela.',
                color: 'green'
            },
            {
                icon: 'fas fa-rocket',
                title: 'Otimização de Performance',
                description: 'Melhoria da velocidade e performance de sites existentes para melhor experiência.',
                color: 'purple'
            },
            {
                icon: 'fas fa-paint-brush',
                title: 'UI/UX Design',
                description: 'Design de interfaces intuitivas focadas na experiência do usuário.',
                color: 'orange'
            }
        ];

        return (
            <section id="services" data-name="services" data-file="components/Services.js" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Serviços</h2>
                        <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
                        <p className="text-gray-600 mt-4">O que posso fazer por você</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div 
                                key={index}
                                className={`fade-in bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer ${
                                    hoveredService === index ? 'transform scale-105 shadow-xl ' : 'hover:shadow-xl hover:scale-105 transition-all duration-300'
                                }`}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                                onMouseEnter={() => setHoverd(index)}
                                onMouseLeave={() => setHoveredService(null)}
                            >
                                <div className={`w-16 h-16 mx-auto mb-4 bg-${service.color}-100 rounded-full flex items-center justify-center`}>
                                    <i className={`${service.icon} text-3xl text-${service.color}-600 ${
                                        hoveredService === index ? 'animate-bounce' : ''
                                    }`}></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        reportError(error);
    }
}
