// Utilitário para sincronização de dados entre portfolio e admin
function DataSync() {
  const syncProjects = async () => {
    try {
      const response = await trickleListObjects('project', 50, true);
      return response.items.map(item => ({
        id: item.objectId,
        title: item.objectData.Title,
        description: item.objectData.Description,
        image: item.objectData.Image,
        tech: Array.isArray(item.objectData.Technologies) 
          ? item.objectData.Technologies 
          : JSON.parse(item.objectData.Technologies || '[]'),
        link: item.objectData.Link,
        status: item.objectData.Status
      }));
    } catch (error) {
      console.error('Erro ao sincronizar projetos:', error);
      return [];
    }
  };

  const syncContacts = async () => {
    try {
      const response = await trickleListObjects('contact', 50, true);
      return response.items.map(item => ({
        id: item.objectId,
        name: item.objectData.Name,
        email: item.objectData.Email,
        subject: item.objectData.Subject,
        message: item.objectData.Message,
        status: item.objectData.Status,
        date: item.createdAt.split('T')[0]
      }));
    } catch (error) {
      console.error('Erro ao sincronizar contatos:', error);
      return [];
    }
  };

  return {
    syncProjects,
    syncContacts
  };
}

// Disponibilizar globalmente
window.DataSync = DataSync;