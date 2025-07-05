function ContactManager() {
  try {
    const [contacts, setContacts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      loadContacts();
    }, []);

    const loadContacts = async () => {
      try {
        const response = await trickleListObjects('contact', 50, true);
        const contactsData = response.items.map(item => ({
          id: item.objectId,
          name: item.objectData.Name,
          email: item.objectData.Email,
          subject: item.objectData.Subject,
          message: item.objectData.Message,
          status: item.objectData.Status,
          date: item.createdAt.split('T')[0]
        }));
        setContacts(contactsData);
      } catch (error) {
        console.error('Erro ao carregar contatos:', error);
      }
      setLoading(false);
    };

    const [selectedContact, setSelectedContact] = React.useState(null);
    const [filter, setFilter] = React.useState('Todos');

    const statusOptions = ['Novo', 'Em Andamento', 'Respondido', 'Finalizado'];
    const filterOptions = ['Todos', ...statusOptions];

    const filteredContacts = filter === 'Todos' 
      ? contacts 
      : contacts.filter(contact => contact.status === filter);

    const updateStatus = async (id, newStatus) => {
      try {
        const contact = contacts.find(c => c.id === id);
        await trickleUpdateObject('contact', id, {
          Name: contact.name,
          Email: contact.email,
          Subject: contact.subject,
          Message: contact.message,
          Status: newStatus
        });
        await loadContacts();
        if (selectedContact && selectedContact.id === id) {
          setSelectedContact({...selectedContact, status: newStatus});
        }
      } catch (error) {
        console.error('Erro ao atualizar status:', error);
      }
    };

    const deleteContact = async (id) => {
      if (confirm('Tem certeza que deseja excluir este contato?')) {
        try {
          await trickleDeleteObject('contact', id);
          await loadContacts();
          setSelectedContact(null);
        } catch (error) {
          console.error('Erro ao excluir contato:', error);
        }
      }
    };

    const getStatusColor = (status) => {
      const colors = {
        'Novo': 'bg-blue-600',
        'Em Andamento': 'bg-yellow-600',
        'Respondido': 'bg-green-600',
        'Finalizado': 'bg-gray-600'
      };
      return colors[status] || 'bg-gray-600';
    };

    return (
      <div className="space-y-6" data-name="contact-manager" data-file="admin/components/ContactManager.js">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Gerenciar Contatos</h2>
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-black/40 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
          >
            {filterOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {filteredContacts.map((contact) => (
              <div 
                key={contact.id} 
                className={`admin-card rounded-xl p-4 cursor-pointer transition-all ${
                  selectedContact?.id === contact.id ? 'border-purple-500' : ''
                }`}
                onClick={() => setSelectedContact(contact)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">{contact.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded text-white ${getStatusColor(contact.status)}`}>
                    {contact.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-1">{contact.subject}</p>
                <p className="text-gray-500 text-xs">{contact.date}</p>
              </div>
            ))}
          </div>

          {selectedContact && (
            <div className="admin-card rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-white">Detalhes do Contato</h3>
                <button
                  onClick={() => setSelectedContact(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <div className="icon-x text-lg"></div>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Nome</p>
                  <p className="text-white">{selectedContact.name}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">{selectedContact.email}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Assunto</p>
                  <p className="text-white">{selectedContact.subject}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Mensagem</p>
                  <p className="text-white">{selectedContact.message}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">Status</p>
                  <select
                    value={selectedContact.status}
                    onChange={(e) => updateStatus(selectedContact.id, e.target.value)}
                    className="bg-black/40 border border-purple-500/30 rounded-lg px-3 py-2 text-white"
                  >
                    {statusOptions.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
                <div className="flex space-x-2 pt-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                    <div className="icon-mail text-sm"></div>
                    <span>Responder</span>
                  </button>
                  <button
                    onClick={() => deleteContact(selectedContact.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                  >
                    <div className="icon-trash text-sm"></div>
                    <span>Excluir</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('ContactManager error:', error);
    return null;
  }
}
