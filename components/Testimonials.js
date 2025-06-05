function Testimonials() {
    try {
        const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

        React.useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            const elements = document.querySelectorAll('#testimonials .fade-in');
            elements.forEach(el => observer.observe(el));

            return () => observer.disconnect();
        }, []);

        const testimonials = [
            {
                name: 'Maria Silva',
                role: 'CEO da TechStart',
                text: 'João entregou um trabalho excepcional. O site ficou moderno e funcional.',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
            },
            {
                name: 'Carlos Santos',
                role: 'Diretor de Marketing',
                text: 'Profissional dedicado e criativo. Superou nossas expectativas.',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
            },
            {
                name: 'Ana Costa',
                role: 'Empreendedora',
                text: 'Trabalho impecável e entrega no prazo. Recomendo totalmente!',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
            }
        ];

        React.useEffect(() => {
            const timer = setInterval(() => {
                setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
            }, 5000);
            return () => clearInterval(timer);
        }, []);

        return (
            <section id="testimonials" data-name="testimonials" data-file="components/Testimonials.js" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Depoimentos</h2>
                        <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
                    </div>

                    <div className="max-w-4xl mx-auto text-center fade-in">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="mb-6">
                                <img 
                                    src={testimonials[currentTestimonial].avatar} 
                                    alt={testimonials[currentTestimonial].name}
                                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                                />
                                <p className="text-xl text-gray-600 italic mb-4">
                                    "{testimonials[currentTestimonial].text}"
                                </p>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {testimonials[currentTestimonial].name}
                                </h3>
                                <p className="text-purple-600">{testimonials[currentTestimonial].role}</p>
                            </div>
                        </div>

                        <div className="flex justify-center mt-6 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${
                                        currentTestimonial === index ? 'bg-purple-600' : 'bg-gray-300'
                                    }`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials component error:', error);
        reportError(error);
    }
}
