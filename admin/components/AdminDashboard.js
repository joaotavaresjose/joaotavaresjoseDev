function AdminDashboard({ setCurrentPage }) {
  try {
    const [stats, setStats] = React.useState({
      totalProjects: 0,
      totalContacts: 0,
      totalPosts: 3,
      monthlyViews: 1250
    });
    const [showNewProject, setShowNewProject] = React.useState(false);
    const [showNewPost, setShowNewPost] = React.useState(false);
    const [showProfile, setShowProfile] = React.useState(false);

    React.useEffect(() => {
      loadStats();
    }, []);

    const loadStats = async () => {
      try {
        const [projectsResponse, contactsResponse] = await Promise.all([
          trickleListObjects('project', 100, true),
          trickleListObjects('contact', 100, true)
        ]);
        
        setStats(prev => ({
          ...prev,
          totalProjects: projectsResponse.items.length,
          totalContacts: contactsResponse.items.length
        }));
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
      }
    };

    const cardData = [
      { title: 'Total de Projetos', value: stats.totalProjects, icon: 'folder', color: 'purple' },
      { title: 'Contatos Recebidos', value: stats.totalContacts, icon: 'users', color: 'blue' },
      { title: 'Posts no Blog', value: stats.totalPosts, icon: 'file-text', color: 'green' },
      { title: 'Visualizações/Mês', value: stats.monthlyViews, icon: 'eye', color: 'orange' }
    ];

    const recentActivities = [
      { action: 'Novo contato recebido', time: '2 horas atrás', icon: 'mail' },
      { action: 'Projeto "E-commerce" atualizado', time: '1 dia atrás', icon: 'edit' },
      { action: 'Post "React Tips" publicado', time: '3 dias atrás', icon: 'file-plus' },
      { action: 'Perfil atualizado', time: '1 semana atrás', icon: 'user' }
    ];

    return (
      <div className="space-y-6" data-name="admin-dashboard" data-file="admin/components/AdminDashboard.js">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Dashboard</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard 
              title="Total de Projetos" 
              value={stats.totalProjects} 
              icon="folder" 
              color="purple" 
              trend={12}
            />
            <StatsCard 
              title="Contatos Recebidos" 
              value={stats.totalContacts} 
              icon="users" 
              color="blue" 
              trend={8}
            />
            <StatsCard 
              title="Posts no Blog" 
              value={stats.totalPosts} 
              icon="file-text" 
              color="green" 
              trend={-2}
            />
            <StatsCard 
              title="Visualizações/Mês" 
              value={stats.monthlyViews} 
              icon="eye" 
              color="orange" 
              trend={15}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="admin-card rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Atividades Recentes</h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    <div className={`icon-${activity.icon} text-white text-sm`}></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{activity.action}</p>
                    <p className="text-gray-400 text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="admin-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Acesso Rápido</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="../index.html" target="_blank" className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg transition-colors text-center block">
                  <div className="icon-external-link text-2xl mb-2"></div>
                  <p className="text-sm">Ver Portfólio</p>
                </a>
                <button 
                  onClick={() => setCurrentPage('profile')}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-colors text-center"
                >
                  <div className="icon-edit text-2xl mb-2"></div>
                  <p className="text-sm">Editar Perfil</p>
                </button>
                <button 
                  onClick={() => setCurrentPage('blog')}
                  className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-colors text-center"
                >
                  <div className="icon-file-plus text-2xl mb-2"></div>
                  <p className="text-sm">Novo Post</p>
                </button>
                <button 
                  onClick={() => loadStats()}
                  className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg transition-colors text-center"
                >
                  <div className="icon-refresh-cw text-2xl mb-2"></div>
                  <p className="text-sm">Atualizar Stats</p>
                </button>
              </div>
            </div>
            
            <PortfolioSync />
            <QuickActions setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AdminDashboard error:', error);
    return null;
  }
}