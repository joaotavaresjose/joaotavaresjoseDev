function Skills() {
  try {
    const skillCategories = [
      {
        title: 'Frontend',
        icon: 'monitor',
        skills: [
          'React',
          'JavaScript',
          'HTML5',
          'CSS3',
          'Tailwind CSS',
          'TypeScript',
          'Next.js',
          'Vue.js'
        ]
      },
      {
        title: 'Ferramentas',
        icon: 'wrench',
        skills: [
          'Git',
          'GitHub',
          'Figma',
          'VS Code',
          'Webpack',
          'Vite',
          'NPM',
          'Yarn'
        ]
      },
      {
        title: 'Soft Skills',
        icon: 'users',
        skills: [
          'Comunicação',
          'Trabalho em Equipe',
          'Resolução de Problemas',
          'Adaptabilidade',
          'Criatividade',
          'Gestão de Tempo'
        ]
      }
    ];

    return (
      <section id="skills" className="section-padding bg-[var(--bg-light)]" data-name="skills" data-file="components/Skills.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-on-scroll">
              Minhas <span className="text-gradient">Habilidades</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto animate-fade-in stagger-animation" style={{"--delay": "0.2s"}}>
              Tecnologias e ferramentas que domino para criar experiências digitais excepcionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card hover:scale-105 transition-transform duration-300 animate-scale stagger-animation" style={{"--delay": `${index * 0.2}s`}}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary-color)]/10 flex items-center justify-center">
                    <div className={`icon-${category.icon} text-xl text-[var(--primary-color)]`}></div>
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-[var(--primary-color)]/10 text-[var(--primary-color)] text-sm font-medium rounded-full hover:bg-[var(--primary-color)]/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}