function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const scrollToSection = (sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
            }
        };

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <header data-name="header" data-file="components/Header.js" className="fixed top-0 w-full z-50 glass-effect">
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform rotate-12">
                                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center transform -rotate-12">
                                        <span className="text-white font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">J</span>
                                    </div>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                        
                        <div className="hidden md:flex space-x-8">
                            <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors">Início</button>
                            <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">Sobre</button>
                            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition-colors">Skills</button>
                            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">Projetos</button>
                            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contato</button>
                        </div>

                        <button 
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i data-lucide="menu" className="w-6 h-6"></i>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden mt-4 space-y-2">
                            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-blue-400">Início</button>
                            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-blue-400">Sobre</button>
                            <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 hover:text-blue-400">Skills</button>
                            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 hover:text-blue-400">Projetos</button>
                            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-blue-400">Contato</button>
                        </div>
                    )}
                </nav>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
