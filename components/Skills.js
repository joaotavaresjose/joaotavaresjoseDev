function Skills() {
    try {
        const [hoveredSkill, setHoveredSkill] = React.useState(null);

        React.useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.3 });

            const animatedElements = document.querySelectorAll('#skills .fade-in');
            animatedElements.forEach(el => observer.observe(el));

            return () => observer.disconnect();
        }, []);

        const skills = [
            { name: 'JavaScript', icon: 'fab fa-js-square', color: 'yellow' },
            { name: 'React', icon: 'fab fa-react', color: 'blue' },
            { name: 'HTML5', icon: 'fab fa-html5', color: 'orange' },
            { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'blue' },
            { name: 'TypeScript', icon: 'fab fa-js-square', color: 'blue' },
            { name: 'Git', icon: 'fab fa-git-alt', color: 'red' },
            { name: 'Figma', icon: 'fab fa-figma', color: 'purple'},
            { name: 'Talwind CSS', icon: 'fab fa-tailwindcss', color: 'purple' },
        ];

        return (
          <section
            id="skills"
            data-name="skills"
            data-file="components/Skills.js"
            className="py-20 bg-white animate-fade-in"
          >
            <div className="container mx-auto px-6">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Habilidades
                </h2>
                <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Tecnologias que domino</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`bg-${skill.color}-100 text-${
                      skill.color
                    }-600 fade-in text-center cursor-pointer transition-all duration-3 p-6 rounded-xl ${
                      hoveredSkill === index
                        ? "transform scale-110 shadow-lg bg-gray-50"
                        : "hover:scale-105"
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => index}
                    onMouseLeave={() => null}
                  >
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-${skill.color}-100 rounded-full flex items-center justify-center`}
                    >
                      <i
                        className={`${skill.icon} text-4xl text-${
                          skill.color
                        }-600 ${
                          hoveredSkill === index ? "animate-bounce" : ""
                        }`}
                      ></i>
                    </div>

                    <h3
                      className={`text-lg font-semibold transition-colors duration-300 ${
                        hoveredSkill === index
                          ? "text-purple-600"
                          : "text-gray-800"
                      }`}
                    >
                      {skill.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
    } catch (error) {
        console.error('Skills component error:', error);
        reportError(error);
    }
}
