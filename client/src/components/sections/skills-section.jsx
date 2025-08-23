import { useIntersectionObserver } from '../../hooks/use-intersection-observer';

export function SkillsSection() {
  const [ref, isVisible] = useIntersectionObserver();

  const programmingLanguages = [
    { name: 'C', icon: 'fas fa-code', color: 'text-gray-600' },
    { name: 'Python', icon: 'fab fa-python', color: 'text-blue-500' },
    { name: 'Java', icon: 'fab fa-java', color: 'text-red-500' },
    { name: 'HTML', icon: 'fab fa-html5', color: 'text-orange-500' },
    { name: 'CSS', icon: 'fab fa-css3-alt', color: 'text-blue-600' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: 'text-yellow-500' },
  ];

  const databases = [
    { name: 'MongoDB', icon: 'fas fa-leaf', color: 'text-green-500' },
    { name: 'MySQL', icon: 'fas fa-database', color: 'text-blue-500' },
  ];

  const tools = [
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-500' },
    { name: 'GitHub', icon: 'fab fa-github', color: 'text-gray-800 dark:text-white' },
    { name: 'VS Code', icon: 'fab fa-microsoft', color: 'text-blue-500' },
    { name: 'Postman', icon: 'fas fa-rocket', color: 'text-orange-500' },
    { name: 'MongoDB Compass', icon: 'fas fa-compass', color: 'text-green-500' },
    { name: 'Docker Hub', icon: 'fab fa-docker', color: 'text-blue-500' },
  ];

  const SkillIcon = ({ skill, bgColor }) => (
    <div className="skill-icon text-center group" data-testid={`skill-${skill.name.toLowerCase().replace(' ', '-')}`}>
      <div className={`w-16 h-16 mx-auto mb-4 ${bgColor} rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
        <i className={`${skill.icon} text-3xl ${skill.color}`}></i>
      </div>
      <p className="text-sm font-medium">{skill.name}</p>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Technical Skills</h2>
          <div className="w-24 h-1 animated-border mx-auto rounded"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6">Technologies and tools I work with</p>
        </div>

        <div ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
          {/* Programming Languages */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {programmingLanguages.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} bgColor="bg-blue-100 dark:bg-blue-900" />
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Databases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-md mx-auto">
              {databases.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} bgColor="bg-green-100 dark:bg-green-900" />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Tools & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {tools.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} bgColor="bg-gray-100 dark:bg-gray-700" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
