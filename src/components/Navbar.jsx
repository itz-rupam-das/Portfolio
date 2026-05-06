import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-brand">Rupam Das</div>
        <ul className="navbar-menu">
          <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={toggleTheme} className="theme-toggle mobile-only" aria-label="Toggle theme">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div className={`navbar-menu-mobile ${isOpen ? 'active' : ''}`}>
        <button onClick={() => scrollToSection('hero')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('skills')}>Skills</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('experience')}>Experience</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;