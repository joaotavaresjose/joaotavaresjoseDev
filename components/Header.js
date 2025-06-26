function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-40 border-b border-purple-500/20" data-name="header" data-file="components/Header.js">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="">
             <img src="favicon.ico" alt="Logo" className="h-16 w-auto" />
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-purple-400 transition-colors">Início</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">Sobre</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">Habilidades</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contato</a>
            </div>
            
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="icon-menu text-xl"></div>
            </button>
          </div>
          
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <a href="#home" className="block hover:text-purple-400 transition-colors py-2">Início</a>
              <a href="#about" className="block hover:text-purple-400 transition-colors py-2">Sobre</a>
              <a href="#skills" className="block hover:text-purple-400 transition-colors py-2">Habilidades</a>
              <a href="#contact" className="block hover:text-purple-400 transition-colors py-2">Contato</a>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}