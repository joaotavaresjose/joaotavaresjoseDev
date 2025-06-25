function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const handleSubmit = async (e) => {
            e.preventDefault();
            
            const message = `Olá! Sou ${formData.name}. ${formData.message}. Meu email: ${formData.email}`;
            const whatsappUrl = `https://wa.me/244951184916?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const contactInfo = [
            {
                icon: 'message-circle',
                title: 'WhatsApp',
                value: '+244 951 184 916',
                link: 'https://wa.me/244951184916'
            },
            {
                icon: 'mail',
                title: 'Email',
                value: 'engjoaotavaresjose@gmail.com',
                link: 'mailto:engjoaotavaresjose@gmail.com'
            },
            {
                icon: 'map-pin',
                title: 'Localização',
                value: 'Luanda, Angola',
                link: '#'
            }
        ];

        return (
            <section id="contact" data-name="contact" data-file="components/Contact.js" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Contato</h2>
                        <p className="text-gray-400 text-lg">Vamos trabalhar juntos?</p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                            <div data-aos="fade-right">
                                <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    Estou sempre aberto a novos projetos e oportunidades. Se você tem uma ideia interessante 
                                    ou quer colaborar, vamos conversar!
                                </p>

                                <div className="space-y-4">
                                    {contactInfo.map((info, index) => (
                                        <a 
                                            key={index}
                                            href={info.link}
                                            className="flex items-center space-x-4 glass-effect p-4 rounded-lg hover-scale group transition-all duration-300"
                                            data-aos="fade-up"
                                            data-aos-delay={200 + index * 100}
                                        >
                                            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                <i data-lucide={info.icon} className="w-6 h-6 text-white"></i>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white">{info.title}</div>
                                                <div className="text-gray-400 group-hover:text-blue-400 transition-colors">{info.value}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div data-aos="fade-left">
                                <div className="glass-effect p-6 md:p-8 rounded-xl">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block font-medium mb-3 text-white">Nome Completo</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                                    placeholder="Seu nome completo"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block font-medium mb-3 text-white">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                                    placeholder="seu@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block font-medium mb-3 text-white">Mensagem</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows="5"
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                                                placeholder="Conte-me sobre seu projeto ou como posso ajudá-lo..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-4 gradient-bg text-white font-semibold rounded-lg hover-scale glow-effect transition-all flex items-center justify-center gap-3 text-lg"
                                        >
                                            <i data-lucide="message-circle" className="w-6 h-6"></i>
                                            Enviar via WhatsApp
                                        </button>
                                    </form>
                                </div>
                            </div>
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
