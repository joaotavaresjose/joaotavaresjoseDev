function BlogManager() {
  try {
    const [posts, setPosts] = React.useState([
      { id: 1, title: "Como criar um site responsivo", content: "Neste artigo vamos ver...", status: "Publicado", date: "2024-01-15", category: "Tutorial" },
      { id: 2, title: "React vs Vue: Qual escolher?", content: "Uma comparação detalhada...", status: "Rascunho", date: "2024-01-20", category: "Comparação" },
      { id: 3, title: "Tendências de Design 2024", content: "As principais tendências...", status: "Publicado", date: "2024-01-10", category: "Design" }
    ]);
    
    const [showForm, setShowForm] = React.useState(false);
    const [editingPost, setEditingPost] = React.useState(null);
    const [formData, setFormData] = React.useState({
      title: '', content: '', category: '', status: 'Rascunho'
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      const postData = {
        ...formData,
        date: new Date().toISOString().split('T')[0]
      };

      if (editingPost) {
        setPosts(posts.map(p => p.id === editingPost.id ? { ...postData, id: editingPost.id } : p));
      } else {
        setPosts([...posts, { ...postData, id: Date.now() }]);
      }
      
      setShowForm(false);
      setEditingPost(null);
      setFormData({ title: '', content: '', category: '', status: 'Rascunho' });
    };

    const handleEdit = (post) => {
      setEditingPost(post);
      setFormData(post);
      setShowForm(true);
    };

    const handleDelete = (id) => {
      if (confirm('Tem certeza que deseja excluir este post?')) {
        setPosts(posts.filter(p => p.id !== id));
      }
    };

    return (
      <div className="space-y-6" data-name="blog-manager" data-file="admin/components/BlogManager.js">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Gerenciar Blog</h2>
          <button
            onClick={() => { setShowForm(true); setEditingPost(null); }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <div className="icon-plus text-sm"></div>
            <span>Novo Post</span>
          </button>
        </div>

        {showForm && (
          <div className="admin-card rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              {editingPost ? 'Editar Post' : 'Novo Post'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Título do post"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
                required
              />
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Categoria"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
                />
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
                >
                  <option value="Rascunho">Rascunho</option>
                  <option value="Publicado">Publicado</option>
                </select>
              </div>
              <textarea
                placeholder="Conteúdo do post"
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
                rows="6"
                required
              ></textarea>
              <div className="flex space-x-2">
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                  {editingPost ? 'Atualizar' : 'Salvar'}
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid gap-4">
          {posts.map((post) => (
            <div key={post.id} className="admin-card rounded-xl p-6 flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{post.content.substring(0, 100)}...</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                  <span className={`px-2 py-1 rounded ${post.status === 'Publicado' ? 'bg-green-600' : 'bg-yellow-600'}`}>
                    {post.status}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(post)} className="text-blue-400 hover:text-blue-300">
                  <div className="icon-edit text-lg"></div>
                </button>
                <button onClick={() => handleDelete(post.id)} className="text-red-400 hover:text-red-300">
                  <div className="icon-trash text-lg"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('BlogManager error:', error);
    return null;
  }
}