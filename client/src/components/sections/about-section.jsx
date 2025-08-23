import { useIntersectionObserver } from '../../hooks/use-intersection-observer';

export function AboutSection() {
  const [leftRef, leftVisible] = useIntersectionObserver();
  const [rightRef, rightVisible] = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 animated-border mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={leftRef} className={`slide-in-left ${leftVisible ? 'is-visible' : ''}`}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional developer workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div ref={rightRef} className={`slide-in-right ${rightVisible ? 'is-visible' : ''}`}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Professional Summary</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Aspiring Full Stack Developer with a strong foundation in the MERN stack and hands-on experience building real-world projects. Passionate about clean code, learning new technologies, and developing scalable web applications.
            </p>
            
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Career Objective</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Seeking a developer role to apply my coding skills, problem-solving abilities, and passion for technology while contributing to innovative projects and professional growth.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">140+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">LeetCode Problems</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Major Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
