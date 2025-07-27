function Header({ activeSection }) {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    const navItems = [
      { id: 'home', label: 'Início' },
      { id: 'about', label: 'Sobre' },
      { id: 'skills', label: 'Habilidades' },
      { id: 'projects', label: 'Projetos' },
      { id: 'contact', label: 'Contato' }
    ];

    return (
      <header className="fixed top-0 w-full bg-[var(--bg-white)]/95 backdrop-blur-sm z-50 border-b border-[var(--border-color)]" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">JT</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-gradient leading-tight">
                  João Tavares José
                </div>
                <div className="text-xs text-[var(--text-secondary)] font-medium">
                  Frontend Developer
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-[var(--primary-color)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--primary-color)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-xl text-[var(--text-primary)]`}></div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-[var(--border-color)]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-[var(--primary-color)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--primary-color)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}