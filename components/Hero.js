function Hero() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <section id="home" data-name="hero" data-file="components/Hero.js" className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 gradient-bg opacity-5"></div>
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
                </div>
                
                <div className="container mx-auto px-6 text-center z-10">
                    <div className="max-w-5xl mx-auto">
                        
                        
                        <div className="mb-8">
                            <h1 data-name="title" className="text-3xl md:text-3xl lg:text-3xl font-bold mb-4" data-aos="fade-up" data-aos-delay="200">
                                <span className="text-gradient block mt-2" data-aos="fade-up" data-aos-delay="400">João Tavares José</span>
                            </h1>
                            <h2 className="text-2xl md:text-5xl lg:text-5xl font-semibold text-gray-300 mb-6" data-aos="fade-up" data-aos-delay="500">
                                Desenvolvedor Front-end
                            </h2>
                        </div>
                        
                        <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-300 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="600">
                            Criando experiências digitais incríveis com código limpo e design moderno. Especializado em React, JavaScript e interfaces responsivas.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12" data-aos="fade-up" data-aos-delay="800">
                            <a 
                                href="#"
                                className="px-10 py-4 gradient-bg text-white font-semibold rounded-xl hover-scale glow-effect transition-all text-center text-lg shadow-2xl"
                            >
                                <i data-lucide="download" className="w-5 h-5 inline mr-2"></i>
                                Download CV
                            </a>
                            <button 
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-4 glass-effect text-white font-semibold rounded-xl hover-scale transition-all border border-gray-500 text-lg"
                            >
                                <i data-lucide="message-circle" className="w-5 h-5 inline mr-2"></i>
                                Vamos Conversar
                            </button>
                        </div>
                        
                        <div className="flex justify-center space-x-8" data-aos="fade-up" data-aos-delay="1000">
                            <a href="#" className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center group hover-scale">
                                <i data-lucide="github" className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"></i>
                            </a>
                            <a href="#" className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center group hover-scale">
                                <i data-lucide="linkedin" className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"></i>
                            </a>
                            <a href="https://wa.me/244951184916" className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center group hover-scale">
                                <i data-lucide="message-circle" className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"></i>
                            </a>
                            <a href="#" className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center group hover-scale">
                                <i data-lucide="instagram" className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="1200">
                    <button 
                        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                        className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center"
                    >
                        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                    </button>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
    }
}
