function ProjectManager() {
  try {
    const [projects, setProjects] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      loadProjects();
    }, []);

    const loadProjects = async () => {
      try {
        const response = await trickleListObjects('project', 50, true);
        const projectsData = response.items.map(item => ({
          id: item.objectId,
          title: item.objectData.Title,
          description: item.objectData.Description,
          tech: Array.isArray(item.objectData.Technologies) ? item.objectData.Technologies : JSON.parse(item.objectData.Technologies || '[]'),
          status: item.objectData.Status,
          image: item.objectData.Image,
          link: item.objectData.Link,
          date: item.createdAt.split('T')[0]
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error('Erro ao carregar projetos:', error);
      }
      setLoading(false);
    };
    
    const [showForm, setShowForm] = React.useState(false);
    const [editingProject, setEditingProject] = React.useState(null);
    const [formData, setFormData] = React.useState({
      title: '', description: '', tech: '', status: 'Em Progresso', image: '', link: ''
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const projectData = {
          Title: formData.title,
          Description: formData.description,
          Technologies: JSON.stringify(formData.tech.split(',').map(t => t.trim())),
          Status: formData.status,
          Image: formData.image,
          Link: formData.link
        };

        if (editingProject) {
          await trickleUpdateObject('project', editingProject.id, projectData);
        } else {
          await trickleCreateObject('project', projectData);
        }
        
        await loadProjects();
        setShowForm(false);
        setEditingProject(null);
        setFormData({ title: '', description: '', tech: '', status: 'Em Progresso', image: '', link: '' });
      } catch (error) {
        console.error('Erro ao salvar projeto:', error);
      }
    };

    const handleEdit = (project) => {
      setEditingProject(project);
      setFormData({
        ...project,
        tech: Array.isArray(project.tech) ? project.tech.join(', ') : project.tech
      });
      setShowForm(true);
    };

    const handleDelete = async (id) => {
      if (confirm('Tem certeza que deseja excluir este projeto?')) {
        try {
          await trickleDeleteObject('project', id);
          await loadProjects();
        } catch (error) {
          console.error('Erro ao excluir projeto:', error);
        }
      }
    };

    return (
      <div className="space-y-6" data-name="project-manager" data-file="admin/components/ProjectManager.js">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Gerenciar Projetos</h2>
          <button
            onClick={() => { setShowForm(true); setEditingProject(null); }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <div className="icon-plus text-sm"></div>
            <span>Novo Projeto</span>
          </button>
        </div>

        {showForm && (
          <div className="admin-card rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              {editingProject ? 'Editar Projeto' : 'Novo Projeto'}
            </h3>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Título do projeto"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
                required
              />
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
              >
                <option value="Em Progresso">Em Progresso</option>
                <option value="Concluído">Concluído</option>
                <option value="Pausado">Pausado</option>
              </select>
              <input
                type="text"
                placeholder="Tecnologias (separadas por vírgula)"
                value={formData.tech}
                onChange={(e) => setFormData({...formData, tech: e.target.value})}
                className="bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
              />
              <input
                type="url"
                placeholder="URL da imagem"
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
                className="bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white md:col-span-2"
              />
              <textarea
                placeholder="Descrição do projeto"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white md:col-span-2"
                rows="3"
              ></textarea>
              <input
                type="url"
                placeholder="Link do projeto"
                value={formData.link}
                onChange={(e) => setFormData({...formData, link: e.target.value})}
                className="bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white md:col-span-2"
              />
              <div className="flex space-x-2 md:col-span-2">
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                  {editingProject ? 'Atualizar' : 'Salvar'}
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid gap-4">
          {projects.map((project) => (
            <div key={project.id} className="admin-card rounded-xl p-6 flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {(Array.isArray(project.tech) ? project.tech : [project.tech]).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-xs">{project.date}</p>
                  <span className={`px-2 py-1 text-xs rounded ${project.status === 'Concluído' ? 'bg-green-600' : project.status === 'Em Progresso' ? 'bg-blue-600' : 'bg-yellow-600'}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(project)} className="text-blue-400 hover:text-blue-300">
                  <div className="icon-edit text-lg"></div>
                </button>
                <button onClick={() => handleDelete(project.id)} className="text-red-400 hover:text-red-300">
                  <div className="icon-trash text-lg"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProjectManager error:', error);
    return null;
  }
}