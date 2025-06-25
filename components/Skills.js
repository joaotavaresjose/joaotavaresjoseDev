function Skills() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const technologies = [
            { name: 'React', icon: 'code' },
            { name: 'JavaScript', icon: 'code-2' },
            { name: 'TypeScript', icon: 'file-code' },
            { name: 'CSS/SCSS', icon: 'palette' },
            { name: 'Next.js', icon: 'zap' },
            { name: 'Tailwind CSS', icon: 'wind' }
        ];

        const tools = [
            { name: 'Git', icon: 'git-branch' },
            { name: 'Figma', icon: 'figma' },
            { name: 'VS Code', icon: 'code' },
            { name: 'Chrome DevTools', icon: 'chrome' }
        ];

        return (
            <section id="skills" data-name="skills" data-file="components/Skills.js" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Habilidades</h2>
                        <p className="text-gray-400 text-lg">Tecnologias que domino</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div data-aos="fade-right">
                            <h3 className="text-2xl font-bold mb-8">Tecnologias</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {technologies.map((tech, index) => (
                                    <div 
                                        key={index} 
                                        className="glass-effect p-4 rounded-lg hover-scale text-center"
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                    >
                                        <i data-lucide={tech.icon} className="w-8 h-8 mx-auto mb-2 text-blue-400"></i>
                                        <div className="font-medium">{tech.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div data-aos="fade-left">
                            <h3 className="text-2xl font-bold mb-8">Ferramentas</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {tools.map((tool, index) => (
                                    <div 
                                        key={index} 
                                        className="glass-effect p-4 rounded-lg hover-scale text-center"
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                    >
                                        <i data-lucide={tool.icon} className="w-8 h-8 mx-auto mb-2 text-blue-400"></i>
                                        <div className="font-medium">{tool.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Skills component error:', error);
        reportError(error);
    }
}
