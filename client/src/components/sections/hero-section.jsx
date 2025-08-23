import { useIntersectionObserver } from '../../hooks/use-intersection-observer';

export function HeroSection() {
  const [ref, isVisible] = useIntersectionObserver();

  const handleDownloadResume = async () => {
    try {
      const button = document.getElementById('download-resume');
      const originalText = button.innerHTML;
      
      // Show loading state
      button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Downloading...';
      button.disabled = true;
      
      // Trigger download via backend API
      window.open('/api/resume/download', '_blank');
      
      // Show success state
      setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check mr-2"></i>Downloaded!';
        button.className = button.className.replace('bg-white text-gray-900 hover:bg-gray-100', 'bg-green-500 text-white hover:bg-green-600');
        
        setTimeout(() => {
          button.innerHTML = originalText;
          button.className = button.className.replace('bg-green-500 text-white hover:bg-green-600', 'bg-white text-gray-900 hover:bg-gray-100');
          button.disabled = false;
        }, 2000);
      }, 1000);
    } catch (error) {
      console.error('Download failed:', error);
      // Show error state
      const button = document.getElementById('download-resume');
      button.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i>Error! Try again';
      setTimeout(() => {
        button.innerHTML = '<i class="fas fa-download mr-2"></i>Download Resume';
        button.disabled = false;
      }, 2000);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Floating Elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-white bg-opacity-20 rounded-full animate-float"></div>
          <div className="absolute top-1/4 -right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-white bg-opacity-15 rounded-full animate-float" style={{animationDelay: '4s'}}></div>

          <div ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="text-yellow-300">Yugeshwaran</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Aspiring Full Stack Developer passionate about creating innovative web applications with the MERN stack
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                id="download-resume"
                onClick={handleDownloadResume}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-glow"
                data-testid="download-resume-button"
              >
                <i className="fas fa-download mr-2"></i>Download Resume
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                data-testid="contact-button"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://github.com/Yugeshwaran-gm" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300 text-2xl" data-testid="social-github">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/yugeshwaran-g/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300 text-2xl" data-testid="social-linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://leetcode.com/u/YUGESHWARAN-G/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300 text-2xl" data-testid="social-leetcode">
              <i className="fas fa-terminal"></i>
            </a>
            <a href="mailto:yugeshwarangm@gmail.com" className="text-white hover:text-yellow-300 transition-colors duration-300 text-2xl" data-testid="social-email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+919514955425" className="text-white hover:text-yellow-300 transition-colors duration-300 text-2xl" data-testid="social-phone">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </div>
    </section>
  );
}
