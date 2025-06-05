function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });

        React.useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            const elements = document.querySelectorAll('#contact .fade-in, #contact .slide-in-left, #contact .slide-in-right');
            elements.forEach(el => observer.observe(el));

            return () => observer.disconnect();
        }, []);

        const handleSubmit = (e) => {
            e.preventDefault();
            
            // Validação básica
            if (!formData.name || !formData.email || !formData.message) {
                alert('Por favor, preencha todos os campos!');
                return;
            }

            // Formatar mensagem para WhatsApp
            const whatsappMessage = `*Nova mensagem do site!*%0A%0A` +
                `*Nome:* ${formData.name}%0A` +
                `*Email:* ${formData.email}%0A` +
                `*Mensagem:* ${formData.message}`;

            // Número do WhatsApp (com código do país Angola +244)
            const phoneNumber = '244951184916';
            
            // URL do WhatsApp
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
            
            // Abrir WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Limpar formulário
            setFormData({ name: '', email: '', message: '' });
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <section id="contact" data-name="contact" data-file="components/Contact.js" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
                        <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="slide-in-left">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Vamos conversar!</h3>
                            <p className="text-gray-600 mb-8">
                                Estou sempre aberto a novas oportunidades e projetos interessantes. 
                                Entre em contato e vamos criar algo incrível juntos!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                        <i className="fas fa-envelope text-purple-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Email</h4>
                                        <p className="text-gray-600">engjoaotavaresjose@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                        <i className="fab fa-whatsapp text-green-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                                        <p className="text-gray-600">+244 951184916</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                        <i className="fas fa-map-marker-alt text-purple-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Localização</h4>
                                        <p className="text-gray-600">Viana, Angola</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="slide-in-right">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Seu Nome"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Seu Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Sua Mensagem"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                                >
                                    <i className="fab fa-whatsapp mr-2"></i>
                                    Enviar via WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
    }
}
