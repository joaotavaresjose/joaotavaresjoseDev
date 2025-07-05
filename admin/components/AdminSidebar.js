function AdminSidebar({ currentPage, setCurrentPage, isOpen, setIsOpen }) {
  try {
    const menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
      { id: 'projects', label: 'Projetos', icon: 'folder' },
      { id: 'contacts', label: 'Contatos', icon: 'users' },
      { id: 'blog', label: 'Blog', icon: 'file-text' },
      { id: 'profile', label: 'Perfil', icon: 'user' }
    ];

    return (
      <div className={`fixed left-0 top-0 h-full bg-black/90 backdrop-blur-sm border-r border-purple-500/20 transition-all duration-300 z-30 ${isOpen ? 'w-64' : 'w-20'}`} data-name="admin-sidebar" data-file="admin/components/AdminSidebar.js">
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <div className="icon-settings text-white text-lg"></div>
            </div>
            {isOpen && (
              <div>
                <h2 className="font-bold text-white">Admin Panel</h2>
                <p className="text-xs text-gray-400">João TJ</p>
              </div>
            )}
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all ${
                  currentPage === item.id 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-400 hover:bg-purple-600/20 hover:text-white'
                }`}
              >
                <div className={`icon-${item.icon} text-lg`}></div>
                {isOpen && <span className="font-medium">{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-3 top-8 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
        >
          <div className={`icon-chevron-${isOpen ? 'left' : 'right'} text-sm`}></div>
        </button>
      </div>
    );
  } catch (error) {
    console.error('AdminSidebar error:', error);
    return null;
  }
}