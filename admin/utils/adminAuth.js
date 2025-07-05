function AdminAuth({ onLogin }) {
  try {
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError('');

      const success = onLogin(password);
      
      if (!success) {
        setError('Senha incorreta');
        setPassword('');
      }
      
      setLoading(false);
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-purple-900 px-4" data-name="admin-auth" data-file="admin/utils/adminAuth.js">
        <div className="max-w-md w-full">
          <div className="admin-card rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="icon-shield text-2xl text-white"></div>
              </div>
              <h1 className="text-2xl font-bold text-white">Área Administrativa</h1>
              <p className="text-gray-400 mt-2">Digite sua senha para continuar</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Senha de Administrador
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="Digite sua senha"
                  required
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm text-center bg-red-500/10 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
              >
                {loading ? 'Verificando...' : 'Entrar'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              <p>Senha padrão: admin123</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AdminAuth error:', error);
    return null;
  }
}