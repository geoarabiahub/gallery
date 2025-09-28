import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="GeoGallery" className="h-10" />
            <h1 className="text-2xl font-bold text-foreground">GeoGallery</h1>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;