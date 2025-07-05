function Skills() {
  try {
    const skills = [
      { name: 'HTML', icon: 'file-text' },
      { name: 'CSS', icon: 'paintbrush' },
      { name: 'JavaScript', icon: 'code' },
      { name: 'React', icon: 'cpu' },
      { name: 'Tailwind CSS', icon: 'palette' }
    ];

    const tools = [
      { name: 'Git', icon: 'git-branch' },
      { name: 'Figma', icon: 'figma' }
    ];

    return (
      <section id="skills" className="py-20 px-6 bg-black/20" data-name="skills" data-file="components/Skills.js">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              Habilidades
            </h2>
          </div>
          
          <div className="animate-on-scroll opacity-0 animate-fade-in-up animate-delay-200">
            <h3 className="text-2xl font-bold mb-12 text-purple-400 text-center">Linguagens & Frameworks</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
              {skills.map((skill, index) => (
                <div key={skill.name} className="card-hover p-6 rounded-lg bg-gradient-to-br from-purple-900/20 to-black/20 text-center animate-on-scroll opacity-0 animate-fade-in-up" style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                  <div className={`icon-${skill.icon} text-4xl text-purple-400 mb-4 mx-auto`}></div>
                  <h4 className="font-semibold">{skill.name}</h4>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mb-12 text-purple-400 text-center animate-on-scroll opacity-0 animate-fade-in-up animate-delay-600">Ferramentas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {tools.map((tool, index) => (
                <div key={tool.name} className="card-hover p-6 rounded-lg bg-gradient-to-br from-purple-900/20 to-black/20 text-center animate-on-scroll opacity-0 animate-fade-in-up" style={{animationDelay: `${0.8 + index * 0.1}s`}}>
                  <div className={`icon-${tool.icon} text-4xl text-purple-400 mb-4 mx-auto`}></div>
                  <h4 className="font-semibold">{tool.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}