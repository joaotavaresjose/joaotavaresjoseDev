function AdminHeader({ onLogout, toggleSidebar }) {
  try {
    const [currentTime, setCurrentTime] = React.useState(new Date());

    React.useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    return (
      <header className="bg-black/50 backdrop-blur-sm border-b border-purple-500/20 p-4" data-name="admin-header" data-file="admin/components/AdminHeader.js">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="lg:hidden w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
            >
              <div className="icon-menu text-lg"></div>
            </button>
            
            <div>
              <h1 className="text-xl font-bold text-white">Painel Administrativo</h1>
              <p className="text-sm text-gray-400">
                {currentTime.toLocaleDateString('pt-BR')} - {currentTime.toLocaleTimeString('pt-BR')}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-gray-400">
              <div className="icon-user text-lg"></div>
              <span className="text-sm">João Tavares José</span>
            </div>
            
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <div className="icon-log-out text-sm"></div>
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('AdminHeader error:', error);
    return null;
  }
}