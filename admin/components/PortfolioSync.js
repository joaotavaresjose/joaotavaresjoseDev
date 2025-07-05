// Componente para sincronização em tempo real com o portfólio
function PortfolioSync() {
  try {
    const [syncStatus, setSyncStatus] = React.useState('idle');
    const [lastSync, setLastSync] = React.useState(new Date());

    const syncWithPortfolio = async () => {
      setSyncStatus('syncing');
      try {
        // Simular sincronização
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLastSync(new Date());
        setSyncStatus('success');
        setTimeout(() => setSyncStatus('idle'), 2000);
      } catch (error) {
        console.error('Erro na sincronização:', error);
        setSyncStatus('error');
        setTimeout(() => setSyncStatus('idle'), 3000);
      }
    };

    return (
      <div className="admin-card rounded-xl p-4" data-name="portfolio-sync" data-file="admin/components/PortfolioSync.js">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-white font-medium">Sincronização</h4>
            <p className="text-gray-400 text-sm">
              Última sync: {lastSync.toLocaleTimeString('pt-BR')}
            </p>
          </div>
          <button
            onClick={syncWithPortfolio}
            disabled={syncStatus === 'syncing'}
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
              syncStatus === 'success' ? 'bg-green-600' :
              syncStatus === 'error' ? 'bg-red-600' :
              syncStatus === 'syncing' ? 'bg-yellow-600' :
              'bg-purple-600 hover:bg-purple-700'
            }`}
          >
            {syncStatus === 'syncing' ? 'Sincronizando...' : 
             syncStatus === 'success' ? 'Sincronizado!' :
             syncStatus === 'error' ? 'Erro' : 'Sincronizar'}
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PortfolioSync error:', error);
    return null;
  }
}