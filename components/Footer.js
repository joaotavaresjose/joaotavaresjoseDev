function Footer() {
    try {
        return (
          <footer
            data-name="footer"
            data-file="components/Footer.js"
            className="bg-gray-800 text-white py-12"
          >
            <div className="container mx-auto px-6">
              <div className="text-center">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">João Tavares José</h3>
                  <p className="text-gray-400 mb-6">Desenvolvedor Front-end</p>

                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://github.com/joaotavaresjose"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <i className="fab fa-github text-2xl"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jo%C3%A3o-tavares-jos%C3%A9-33176235a"
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/joao.tavares.jose.2025"
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                    >
                      <i className="fab fa-facebook text-2xl"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/engjoaotavaresjose?igsh=MTNwODFpdTlhdHJjbg=="
                      className="text-gray-400 hover:text-white transition-colors"
                      target
                    >
                      <i className="fab fa-instagram text-2xl"></i>
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                  <p className="text-gray-400">
                    © 2025 João Tavares José. Todos os direitos reservados.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
