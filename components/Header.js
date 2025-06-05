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

        const handleLogoClick = () => {
            window.location.reload();
        };

        return (
            <header data-name="header" data-file="components/Header.js" className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
                <nav className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center h-12">
                        <button 
                            onClick={handleLogoClick}
                            className="logo-container flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                            <div className="logo-icon w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">J</span>
                            </div>
                            <div className="logo-text">
                                <div className="text-lg font-bold text-gray-800 leading-none">João</div>
                                <div className="text-xs text-purple-600 font-medium leading-none">Developer</div>
                            </div>
                        </button>
                        
                        <div className="hidden md:flex space-x-8">
                            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">
                                Início
                            </button>
                            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">
                                Sobre
                            </button>
                            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-purple-600 transition-colors">
                                Habilidades
                            </button>
                            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-purple-600 transition-colors">
                                Projetos
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">
                                Contato
                            </button>
                        </div>

                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-gray-700 w-10 h-10 flex items-center justify-center"
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden mt-2 pb-4 border-t border-gray-200">
                            <div className="flex flex-col space-y-3 pt-4">
                                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors text-left py-2">
                                    Início
                                </button>
                                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors text-left py-2">
                                    Sobre
                                </button>
                                <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-purple-600 transition-colors text-left py-2">
                                    Habilidades
                                </button>
                                <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-purple-600 transition-colors text-left py-2">
                                    Projetos
                                </button>
                                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors text-left py-2">
                                    Contato
                                </button>
                            </div>
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
