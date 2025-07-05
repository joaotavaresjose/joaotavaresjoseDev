function QuickActions({ setCurrentPage }) {
  try {
    const [showNewProjectModal, setShowNewProjectModal] = React.useState(false);

    const actions = [
      {
        title: 'Novo Projeto',
        icon: 'plus',
        color: 'purple',
        action: () => setCurrentPage('projects')
      },
      {
        title: 'Ver Contatos',
        icon: 'users',
        color: 'blue',
        action: () => setCurrentPage('contacts')
      },
      {
        title: 'Gerenciar Blog',
        icon: 'file-text',
        color: 'green',
        action: () => setCurrentPage('blog')
      },
      {
        title: 'Configurações',
        icon: 'settings',
        color: 'gray',
        action: () => setCurrentPage('profile')
      }
    ];

    return (
      <div className="admin-card rounded-xl p-6" data-name="quick-actions" data-file="admin/components/QuickActions.js">
        <h3 className="text-lg font-semibold text-white mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className={`bg-${action.color}-600 hover:bg-${action.color}-700 text-white p-3 rounded-lg transition-colors text-center flex flex-col items-center space-y-2`}
            >
              <div className={`icon-${action.icon} text-lg`}></div>
              <span className="text-xs">{action.title}</span>
            </button>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('QuickActions error:', error);
    return null;
  }
}