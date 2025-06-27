function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: ''
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Criar mensagem para WhatsApp
      const message = `Olá João! Meu nome é ${formData.name}.%0A%0AEmail: ${formData.email}%0A%0AMensagem: ${formData.message}`;
      const whatsappUrl = `https://wa.me/244951184916?text=${message}`;
      
      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Limpar formulário
      setFormData({ name: '', email: '', message: '' });
    };

    return (
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black/20 to-purple-900/10" data-name="contact" data-file="components/Contact.js">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
              Entre em Contato
            </h2>
            <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
              Vamos transformar suas ideias em realidade digital. Entre em contato para discutir seu próximo projeto.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll opacity-0">
              <div className="bg-gradient-to-br from-purple-900/30 to-black/30 p-6 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold mb-4 text-white">Informações de Contato</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <div className="icon-phone text-sm text-white"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">WhatsApp</h4>
                      <p className="text-purple-400">+244 951184916</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <div className="icon-mail text-sm text-white"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">Email</h4>
                      <p className="text-purple-400 text-sm">engjoaotavaresjose@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-purple-500/20 pt-4">
                  <h4 className="text-sm font-semibold mb-3 text-white">Redes Sociais</h4>
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                      <div className="icon-github text-sm text-white"></div>
                    </div>
                    <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                      <div className="icon-linkedin text-sm text-white"></div>
                    </div>
                    <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                      <div className="icon-twitter text-sm text-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0 animate-delay-200">
              <div className="bg-gradient-to-br from-purple-900/30 to-black/30 p-6 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold mb-4 text-white">Envie uma Mensagem</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Nome Completo</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white transition-all"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Assunto</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject || ''}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white transition-all"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Mensagem</label>
                      <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white resize-none transition-all"
                      placeholder="Descreva seu projeto ou dúvida..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-green-500/25"
                  >
                    <div className="icon-message-circle text-lg"></div>
                    <span>Enviar via WhatsApp</span>
                  </button>
                </form>
              </div>
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