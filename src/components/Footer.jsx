import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="navbar-brand">Rupam Das</div>
        <div className="footer-socials">
          <a href="https://github.com/itz-rupam-das" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:rdas40978@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-text">&copy; {new Date().getFullYear()} Rupam Das. Built with Passion & Vanilla CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;