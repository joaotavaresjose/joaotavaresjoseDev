# Portfólio João Tavares José - Desenvolvedor Front-end

Um portfólio moderno e responsivo desenvolvido por João Tavares José, desenvolvedor front-end com 2 anos de experiência, utilizando React e TailwindCSS.

## Características

### Seções Principais
- **Hero/Início**: Apresentação principal com foto e call-to-actions
- **Sobre**: Informações pessoais, jornada profissional e estatísticas
- **Habilidades**: Categorias de tecnologias com barras de progresso
- **Projetos**: Galeria de 6 projetos com hover effects e links
- **Contato**: Formulário funcional e informações de contato
- **Rodapé**: Links sociais e navegação rápida

### Tecnologias Utilizadas
- React 18 (CDN)
- TailwindCSS
- Lucide Icons
- Babel Standalone
- HTML5 semântico

### Design
- Paleta de cores azul moderna
- Layout responsivo (mobile-first)
- Animações suaves e hover effects
- Tipografia Inter
- Gradientes e sombras sutis

### Funcionalidades
- Loader de inicialização da página
- Navegação suave entre seções
- Menu mobile responsivo
- Formulário de contato simulado
- Scroll spy para navegação ativa
- Botão "voltar ao topo"
- Carrossel responsivo de projetos

## Estrutura de Arquivos

```
/
├── index.html              # Página principal
├── app.js                  # Aplicação React principal
├── components/
│   ├── Header.js          # Navegação principal
│   ├── Hero.js            # Seção hero
│   ├── About.js           # Seção sobre
│   ├── Skills.js          # Seção habilidades
│   ├── Projects.js        # Seção projetos
│   ├── Contact.js         # Seção contato
│   └── Footer.js          # Rodapé
└── trickle/
    ├── assets/            # Imagens dos projetos
    └── notes/             # Documentação
```

## Personalização

Para personalizar o portfólio:

1. **Informações Pessoais**: Edite nome, foto e descrições nos componentes
2. **Projetos**: Atualize array de projetos em `Projects.js`
3. **Habilidades**: Modifique categorias e níveis em `Skills.js`
4. **Contato**: Altere informações de contato em `Contact.js`
5. **Cores**: Ajuste variáveis CSS em `index.html`

## Deploy

O portfólio foi desenvolvido para ser facilmente implantado em qualquer servidor web estático. Todos os recursos são carregados via CDN, garantindo performance otimizada e facilidade de manutenção.
