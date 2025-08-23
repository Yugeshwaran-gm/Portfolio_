import { useIntersectionObserver } from '../../hooks/use-intersection-observer';

export function ProjectsSection() {
  const [ref, isVisible] = useIntersectionObserver();

  const projects = [
    {
      id: 'work-hunt',
      title: 'Work Hunt',
      status: 'Completed',
      statusColor: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      description: 'Developed a full-stack job portal using MERN stack, enabling user-specific logins for job seekers and employers. Implemented authentication (JWT), job listing, and tracking application.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
      techColors: ['bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200', 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200', 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200', 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'],
      demoAvailable: true,
    },
    {
      id: 'timetable-reminder',
      title: 'Timetable Reminder',
      status: 'Completed',
      statusColor: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      description: 'Built a Python-based tool to view weekly class timetables and send automated email notifications. Used SMTP for sending scheduled emails and MongoDB to store timetable data.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      technologies: ['Python', 'MongoDB', 'SMTP', 'Automation'],
      techColors: ['bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200', 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200', 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200', 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'],
      demoAvailable: true,
    },
    {
      id: 'auction-system',
      title: 'Auction System',
      status: 'In Progress',
      statusColor: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
      description: 'Designing a real-time auction platform with role-based access for buyers, sellers, and admin users. Integrating socket-based communication and a product-centric community forum.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      technologies: ['React.js', 'Node.js', 'Socket.IO', 'REST API'],
      techColors: ['bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200', 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200', 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200', 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'],
      demoAvailable: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="w-24 h-1 animated-border mx-auto rounded"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6">Showcasing my development expertise through real-world applications</p>
        </div>

        <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
          {projects.map((project) => (
            <div key={project.id} className="project-card bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl" data-testid={`project-card-${project.id}`}>
              <img 
                src={project.image} 
                alt={`${project.title} interface`} 
                className="w-full h-48 object-cover rounded-lg mb-6" 
              />
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <span className={`px-3 py-1 ${project.statusColor} text-sm rounded-full`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={tech} className={`px-2 py-1 ${project.techColors[index]} text-xs rounded`}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                {/* Demo buttons disabled until deployment */}
                <button 
                  className="flex-1 px-4 py-2 rounded-lg transition-colors duration-300 bg-gray-400 text-white cursor-not-allowed"
                  disabled={true}
                  data-testid={`project-demo-${project.id}`}
                >
                  <i className="fas fa-clock mr-2"></i>
                  Coming Soon
                </button>
                <button 
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  data-testid={`project-github-${project.id}`}
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
