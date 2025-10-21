import { Link, useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import logo from '@/assets/logo.png';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      searchParams.set('search', value);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  };

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 md:gap-6">
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 shrink-0">
            <img src={logo} alt="Geoscience Gallery" className="h-8 md:h-10" />
            <div className="flex flex-col">
              <h1 className="text-lg md:text-2xl font-bold text-foreground">Geoscience Gallery</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">The art within the rock — Beauty in every grain</p>
            </div>
          </Link>

          <div className="relative max-w-md w-full hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search samples..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10"
            />
          </div>

          <nav className="flex items-center space-x-3 md:space-x-6 shrink-0">
            <Link to="/" className="text-sm md:text-base text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link to="/about" className="text-sm md:text-base text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm md:text-base text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile search bar */}
        <div className="relative mt-3 md:hidden">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search samples..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;