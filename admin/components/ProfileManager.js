function ProfileManager() {
  try {
    const [profileData, setProfileData] = React.useState({
      name: 'João Tavares José',
      title: 'Desenvolvedor Front-end',
      email: 'engjoaotavaresjose@gmail.com',
      phone: '+244 951184916',
      bio: 'Desenvolvedor front-end com 3 anos de experiência em criar soluções digitais inovadoras.',
      skills: 'HTML, CSS, JavaScript, React, Tailwind CSS',
      experience: '3',
      location: 'Angola'
    });

    const [isEditing, setIsEditing] = React.useState(false);
    const [formData, setFormData] = React.useState(profileData);

    const handleSubmit = (e) => {
      e.preventDefault();
      setProfileData(formData);
      setIsEditing(false);
    };

    const handleCancel = () => {
      setFormData(profileData);
      setIsEditing(false);
    };

    return (
      <div className="space-y-6" data-name="profile-manager" data-file="admin/components/ProfileManager.js">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Gerenciar Perfil</h2>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
            >
              <div className="icon-edit text-sm"></div>
              <span>Editar Perfil</span>
            </button>
          )}
        </div>

        <div className="admin-card rounded-xl p-6">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Nome Completo</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Título Profissional</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Telefone</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Biografia</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
                  rows="3"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Habilidades</label>
                <input
                  type="text"
                  value={formData.skills}
                  onChange={(e) => setFormData({...formData, skills: e.target.value})}
                  className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
                  placeholder="Separadas por vírgula"
                />
              </div>

              <div className="flex space-x-2">
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                  Salvar Alterações
                </button>
                <button type="button" onClick={handleCancel} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
                  Cancelar
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Nome Completo</h3>
                  <p className="text-white text-lg">{profileData.name}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Título Profissional</h3>
                  <p className="text-white text-lg">{profileData.title}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Email</h3>
                  <p className="text-white">{profileData.email}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Telefone</h3>
                  <p className="text-white">{profileData.phone}</p>
                </div>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm mb-1">Biografia</h3>
                <p className="text-white">{profileData.bio}</p>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm mb-1">Habilidades</h3>
                <p className="text-white">{profileData.skills}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProfileManager error:', error);
    return null;
  }
}