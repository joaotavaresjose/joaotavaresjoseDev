function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const smoothScroll = (e, targetId) => {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    };

    return (
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-40 border-b border-purple-500/20" data-name="header" data-file="components/Header.js">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="relative">
              <img src="favicon.ico" className="w-full h-[60px]"></img>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-purple-400 transition-colors cursor-pointer" onClick={(e) => smoothScroll(e, 'home')}>Início</a>
              <a href="#about" className="hover:text-purple-400 transition-colors cursor-pointer" onClick={(e) => smoothScroll(e, 'about')}>Sobre</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors cursor-pointer" onClick={(e) => smoothScroll(e, 'skills')}>Habilidades</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors cursor-pointer" onClick={(e) => smoothScroll(e, 'projects')}>Projetos</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors cursor-pointer" onClick={(e) => smoothScroll(e, 'contact')}>Contato</a>
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
              <a href="#home" className="block hover:text-purple-400 transition-colors py-2 cursor-pointer" onClick={(e) => { smoothScroll(e, 'home'); setIsMenuOpen(false); }}>Início</a>
              <a href="#about" className="block hover:text-purple-400 transition-colors py-2 cursor-pointer" onClick={(e) => { smoothScroll(e, 'about'); setIsMenuOpen(false); }}>Sobre</a>
              <a href="#skills" className="block hover:text-purple-400 transition-colors py-2 cursor-pointer" onClick={(e) => { smoothScroll(e, 'skills'); setIsMenuOpen(false); }}>Habilidades</a>
              <a href="#projects" className="block hover:text-purple-400 transition-colors py-2 cursor-pointer" onClick={(e) => { smoothScroll(e, 'projects'); setIsMenuOpen(false); }}>Projetos</a>
              <a href="#contact" className="block hover:text-purple-400 transition-colors py-2 cursor-pointer" onClick={(e) => { smoothScroll(e, 'contact'); setIsMenuOpen(false); }}>Contato</a>
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