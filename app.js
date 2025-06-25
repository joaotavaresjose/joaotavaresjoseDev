function App() {
    try {
        React.useEffect(() => {
            // Inicializar AOS após o carregamento
            setTimeout(() => {
                if (window.AOS) {
                    AOS.init({
                        duration: 800,
                        easing: 'ease-in-out',
                        once: true,
                        offset: 120,
                        delay: 100
                    });
                }
            }, 100);

            // Simular carregamento e remover loader
            setTimeout(() => {
                const loader = document.getElementById('loader');
                const root = document.getElementById('root');
                
                if (loader) {
                    loader.style.opacity = '0';
                    setTimeout(() => {
                        loader.style.display = 'none';
                        root.style.display = 'block';
                        root.style.opacity = '0';
                        setTimeout(() => {
                            root.style.transition = 'opacity 0.5s ease';
                            root.style.opacity = '1';
                            
                            // Re-inicializar AOS após mostrar conteúdo
                            if (window.AOS) {
                                AOS.refresh();
                            }
                        }, 50);
                    }, 500);
                }
            }, 2000);

            lucide.createIcons();
        }, []);

        return (
            <div data-name="app" data-file="app.js" className="min-h-screen bg-gray-900">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

// Renderizar a aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
