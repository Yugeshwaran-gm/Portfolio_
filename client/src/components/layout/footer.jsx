export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Yugeshwaran G</h3>
            <p className="text-gray-400 mb-4">Full Stack Developer passionate about creating innovative web applications.</p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yugeshwarangm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                data-testid="footer-github"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="https://linkedin.com/in/yugeshwaran-g" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                data-testid="footer-linkedin"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="mailto:yugeshwarangm@example.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                data-testid="footer-email"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li data-testid="footer-phone">
                <i className="fas fa-phone mr-2"></i>+91 9514955425
              </li>
              <li data-testid="footer-email-text">
                <i className="fas fa-envelope mr-2"></i>yugeshwarangm@example.com
              </li>
              <li data-testid="footer-github-text">
                <i className="fab fa-github mr-2"></i>yugeshwarangm
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400" data-testid="footer-copyright">
            &copy; {currentYear} Yugeshwaran G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
