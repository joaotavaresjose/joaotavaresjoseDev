function Footer() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const currentYear = new Date().getFullYear();

        const socialLinks = [
            { icon: 'github', href: '#', label: 'GitHub' },
            { icon: 'linkedin', href: '#', label: 'LinkedIn' },
            { icon: 'message-circle', href: 'https://wa.me/244951184916', label: 'WhatsApp' },
            { icon: 'instagram', href: '#', label: 'Instagram' }
        ];

        const quickLinks = [
            { name: 'Início', href: '#home' },
            { name: 'Sobre', href: '#about' },
            { name: 'Skills', href: '#skills' },
            { name: 'Projetos', href: '#projects' },
            { name: 'Contato', href: '#contact' }
        ];

        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        return (
            <footer data-name="footer" data-file="components/Footer.js" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
                
                <div className="container mx-auto px-6 py-16 relative z-10">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
                        <div className="lg:col-span-2" data-aos="fade-up">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="relative">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform rotate-12">
                                        <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center transform -rotate-12">
                                            <span className="text-white font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">J</span>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gradient">João Tavares José</h3>
                                    <p className="text-gray-400 text-sm">Desenvolvedor Front-end</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
                                Transformando ideias em experiências digitais incríveis. Especializado em React, JavaScript e design moderno para o mercado angolano e internacional.
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a 
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover-scale group transition-all duration-300"
                                    >
                                        <i data-lucide={social.icon} className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors"></i>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <h4 className="text-xl font-semibold mb-6 text-white">Navegação</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href={link.href}
                                            className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2 group"
                                        >
                                            <i data-lucide="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="400">
                            <h4 className="text-xl font-semibold mb-6 text-white">Contato</h4>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                                        <i data-lucide="mail" className="w-5 h-5 text-white"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">engjoaotavaresjose@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                                        <i data-lucide="message-circle" className="w-5 h-5 text-white"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">+244 951 184 916</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                                        <i data-lucide="map-pin" className="w-5 h-5 text-white"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Luanda, Angola</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700/50 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="flex items-center space-x-4">
                                <p className="text-gray-400 text-sm">
                                    © {currentYear} João Tavares José. Todos os direitos reservados.
                                </p>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-400 text-sm">Feito com</span>
                                    <i data-lucide="heart" className="w-4 h-4 text-red-500 animate-pulse"></i>
                                    <span className="text-gray-400 text-sm">em Angola</span>
                                    <span className="text-xl">🇦🇴</span>
                                </div>
                            </div>
                            
                            <button 
                                onClick={scrollToTop}
                                className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center hover-scale shadow-lg group"
                                aria-label="Voltar ao topo"
                            >
                                <i data-lucide="arrow-up" className="w-6 h-6 text-white group-hover:translate-y-[-2px] transition-transform"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
