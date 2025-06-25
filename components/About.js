function About() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const stats = [
            { number: '3+', label: 'Anos de Experiência' },
            { number: '50+', label: 'Projetos Concluídos' },
            { number: '25+', label: 'Clientes Satisfeitos' },
            { number: '100%', label: 'Dedicação' }
        ];

        return (
            <section id="about" data-name="about" data-file="components/About.js" className="py-20 bg-gray-900/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Sobre Mim</h2>
                        <p className="text-gray-400 text-lg">Conheça um pouco da minha jornada</p>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-1" data-aos="fade-right">
                            <h3 className="text-2xl font-bold mb-6">Desenvolvedor Front-end Angolano</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Sou um desenvolvedor front-end angolano com mais de 3 anos de experiência, baseado em Luanda. 
                                Especializado em criar interfaces modernas e responsivas, transformando ideias em experiências 
                                digitais incríveis para o mercado angolano e internacional.
                            </p>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Trabalho principalmente com React, JavaScript, TypeScript e frameworks CSS modernos. 
                                Sempre busco escrever código limpo, performático e que proporcione a melhor experiência 
                                possível para os usuários angolanos.
                            </p>
                            
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 glass-effect rounded-full text-sm">React</span>
                                <span className="px-3 py-1 glass-effect rounded-full text-sm">JavaScript</span>
                                <span className="px-3 py-1 glass-effect rounded-full text-sm">TypeScript</span>
                                <span className="px-3 py-1 glass-effect rounded-full text-sm">Next.js</span>
                            </div>
                        </div>
                        
                        <div className="order-2 mb-8 lg:mb-0" data-aos="fade-left">
                            <div className="relative max-w-sm mx-auto">
                                <div className="aspect-square rounded-2xl overflow-hidden glass-effect p-2">
                                    <img 
                                        src="img/perfil.jpg"
                                        alt="João Tavares José"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 gradient-bg rounded-full flex items-center justify-center glow-effect">
                                    <i data-lucide="code" className="w-8 h-8 text-white"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="order-3 lg:col-span-2">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up">
                                {stats.map((stat, index) => (
                                    <div key={index} className="glass-effect p-6 rounded-lg text-center hover-scale" data-aos="zoom-in" data-aos-delay={index * 200}>
                                        <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                                        <div className="text-gray-400 text-sm">{stat.label}</div>
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
