class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const [activeSection, setActiveSection] = React.useState('home');

    React.useEffect(() => {
      // Hide loader after 3 seconds with fade animation
      const timer = setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
          loader.style.opacity = '0';
          loader.style.transition = 'opacity 0.5s ease-out';
          setTimeout(() => {
            loader.style.display = 'none';
          }, 500);
        }
      }, 3000);

      return () => clearTimeout(timer);
    }, []);

    React.useEffect(() => {
      const handleScroll = () => {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }

        // Animate elements on scroll
        const animateElements = document.querySelectorAll('.animate-on-scroll, .animate-fade-in, .animate-slide-left, .animate-slide-right, .animate-scale');
        animateElements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('show');
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      
      // Trigger animation check on mount
      handleScroll();
      
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <div className="min-h-screen bg-[var(--bg-light)]" data-name="portfolio-app" data-file="app.js">
        <Header activeSection={activeSection} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);