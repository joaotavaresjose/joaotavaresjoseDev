class AdminErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Admin ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Algo deu errado</h1>
            <button
              onClick={() => window.location.reload()}
              className="bg-purple-600 px-4 py-2 rounded"
            >
              Recarregar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function AdminApp() {
  try {
    const [currentPage, setCurrentPage] = React.useState('dashboard');
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    React.useEffect(() => {
      const auth = localStorage.getItem('admin_auth');
      if (auth === 'authenticated') {
        setIsAuthenticated(true);
      }
    }, []);

    const handleLogin = (password) => {
      if (password === 'admin123') {
        setIsAuthenticated(true);
        localStorage.setItem('admin_auth', 'authenticated');
        return true;
      }
      return false;
    };

    const handleLogout = () => {
      setIsAuthenticated(false);
      localStorage.removeItem('admin_auth');
    };

    if (!isAuthenticated) {
      return <AdminAuth onLogin={handleLogin} />;
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-black to-purple-900" data-name="admin-app" data-file="admin/adminApp.js">
        <AdminSidebar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
        <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
          <AdminHeader 
            onLogout={handleLogout}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          <main className="p-6">
            {currentPage === 'dashboard' && <AdminDashboard setCurrentPage={setCurrentPage} />}
            {currentPage === 'projects' && <ProjectManager />}
            {currentPage === 'contacts' && <ContactManager />}
            {currentPage === 'blog' && <BlogManager />}
            {currentPage === 'profile' && <ProfileManager />}
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AdminApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('admin-root'));
root.render(
  <AdminErrorBoundary>
    <AdminApp />
  </AdminErrorBoundary>
);