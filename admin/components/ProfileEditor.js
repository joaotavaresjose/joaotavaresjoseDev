function ProfileEditor({ isOpen, onClose, profileData, onSave }) {
  try {
    const [formData, setFormData] = React.useState(profileData);

    React.useEffect(() => {
      setFormData(profileData);
    }, [profileData]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await onSave(formData);
        onClose();
      } catch (error) {
        console.error('Erro ao salvar perfil:', error);
      }
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" data-name="profile-editor" data-file="admin/components/ProfileEditor.js">
        <div className="admin-card rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Editar Perfil</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <div className="icon-x text-xl"></div>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nome completo"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
                required
              />
              <input
                type="text"
                placeholder="Título profissional"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
                required
              />
            </div>
            
            <textarea
              placeholder="Biografia"
              value={formData.bio}
              onChange={(e) => setFormData({...formData, bio: e.target.value})}
              className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
              rows="3"
            ></textarea>

            <div className="flex space-x-2">
              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                Salvar
              </button>
              <button type="button" onClick={onClose} className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProfileEditor error:', error);
    return null;
  }
}