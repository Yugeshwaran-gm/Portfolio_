import { useIntersectionObserver } from '../../hooks/use-intersection-observer';

export function EducationSection() {
  const [ref, isVisible] = useIntersectionObserver();

  const education = [
    {
      degree: 'Master of Computer Applications',
      institution: 'Kongu Engineering College',
      period: '2024 - 2026',
      cgpa: '8.26',
    },
    {
      degree: 'BSC in Computer Science',
      institution: 'Mannar Thirumalai Naicker College',
      period: '2021 - 2024',
      cgpa: '7.61',
    },
    
  ];

  const certifications = [
    { name: 'GeeksForGeeks Python Programming', year: '2025', icon: 'fas fa-certificate', color: 'text-yellow-600 dark:text-yellow-400', bgColor: 'bg-yellow-100 dark:bg-yellow-900' },
    { name: 'TCS iON Career Edge', year: '2025', icon: 'fas fa-certificate', color: 'text-blue-600 dark:text-blue-400', bgColor: 'bg-blue-100 dark:bg-blue-900' },
    { name: 'Deloitte Forage Simulation', year: '2025', icon: 'fas fa-certificate', color: 'text-green-600 dark:text-green-400', bgColor: 'bg-green-100 dark:bg-green-900' },
    { name: 'NPTEL IIoT', year: '72% - 2025', icon: 'fas fa-certificate', color: 'text-orange-600 dark:text-orange-400', bgColor: 'bg-orange-100 dark:bg-orange-900' },
    { name: 'Udemy Python Course', year: '2024', icon: 'fas fa-certificate', color: 'text-purple-600 dark:text-purple-400', bgColor: 'bg-purple-100 dark:bg-purple-900' },
    { name: 'Language Certifications', year: 'Rashtrabasha DBHP & Vani Vikas - 2016', icon: 'fas fa-certificate', color: 'text-red-600 dark:text-red-400', bgColor: 'bg-red-100 dark:bg-red-900' },
  ];

  const activities = [
    {
      title: 'Competitive Programming',
      description: 'Solved 140+ LeetCode questions',
      icon: 'fas fa-code',
      color: 'text-primary-600 dark:text-primary-400',
      bgColor: 'bg-primary-100 dark:bg-primary-900',
    },
    {
      title: 'Tech Club Member',
      description: 'Organized coding events and workshops',
      icon: 'fas fa-users',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900',
    },
    {
      title: 'Public Outreach',
      description: 'Technical topics awareness activities',
      icon: 'fas fa-bullhorn',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 animated-border mx-auto rounded"></div>
        </div>

        <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={edu.degree} className="relative" data-testid={`education-${index}`}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-2 relative z-10"></div>
                    <div className="ml-6 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg w-full">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                      </div>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-600 dark:text-gray-300">CGPA: {edu.cgpa}</p>
                    </div>
                  </div>
                  {index < education.length - 1 && (
                    <div className="absolute left-2 top-8 w-px h-16 bg-gray-300 dark:bg-gray-600"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={cert.name} className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300" data-testid={`certification-${index}`}>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${cert.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                      <i className={`${cert.icon} ${cert.color}`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{cert.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extra-Curricular Activities */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Extra-Curricular Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={activity.title} className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg" data-testid={`activity-${index}`}>
                <div className={`w-16 h-16 ${activity.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${activity.icon} text-2xl ${activity.color}`}></i>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{activity.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
