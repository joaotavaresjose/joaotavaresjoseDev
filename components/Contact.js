function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Prepare WhatsApp message
      const whatsappMessage = `Olá João! 

*Nome:* ${formData.name}
*Email:* ${formData.email}

*Mensagem:*
${formData.message}

---
Enviado através do seu portfólio`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/244951184916?text=${encodedMessage}`;
      
      // Open WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 500);
    };

    const contactInfo = [
      {
        icon: 'mail',
        title: 'Email',
        value: 'engjoaotavaresjose@gmail.com',
        link: 'mailto:engjoaotavaresjose@gmail.com',
        description: 'Envie um email para discussões detalhadas'
      },
      {
        icon: 'phone',
        title: 'WhatsApp',
        value: '+244 951 184 916',
        link: 'https://wa.me/244951184916',
        description: 'Resposta rápida via WhatsApp'
      },
      {
        icon: 'map-pin',
        title: 'Localização',
        value: 'Viana/Caop B, Angola',
        link: '#',
        description: 'Disponível para projetos locais e remotos'
      },
      {
        icon: 'linkedin',
        title: 'LinkedIn',
        value: '/in/joao-tavares-jose',
        link: 'https://linkedin.com/in/joao-tavares-jose',
        description: 'Conecte-se profissionalmente'
      }
    ];

    return (
      <section id="contact" className="section-padding bg-[var(--bg-light)]" data-name="contact" data-file="components/Contact.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-on-scroll">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto animate-fade-in stagger-animation" style={{"--delay": "0.2s"}}>
              Tem um projeto em mente? Vamos conversar e criar algo incrível juntos!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-left">
              <h3 className="text-2xl font-bold mb-8">Vamos nos conectar</h3>
              
              {/* WhatsApp Quick Contact */}
              <div className="mb-8 p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="icon-message-circle text-lg text-white"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Contato Rápido</h4>
                    <p className="text-sm text-green-600">Fale comigo agora pelo WhatsApp</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/244951184916?text=Olá João! Vi seu portfólio e gostaria de conversar sobre um projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200"
                >
                  <div className="icon-phone text-lg"></div>
                  Chamar no WhatsApp
                </a>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-6 rounded-xl bg-[var(--bg-white)] hover:shadow-lg transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--primary-color)]/30"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--primary-color)]/10 flex items-center justify-center flex-shrink-0">
                      <div className={`icon-${info.icon} text-lg text-[var(--primary-color)]`}></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1">{info.title}</h4>
                      <p className="text-[var(--primary-color)] font-medium mb-1">{info.value}</p>
                      <p className="text-[var(--text-secondary)] text-sm">{info.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="card animate-slide-right">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-bold">Envie uma mensagem</h3>
                <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Resposta em 24h
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
