
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';
import AnimatedLink from '../ui/AnimatedLink';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Leagues', path: '/leagues' },
    { name: 'Teams', path: '/teams' },
    { name: 'Sale', path: '/sale' },
  ];

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo",
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <AnimatedLink href="/" className="text-2xl font-bold tracking-tight">
                Bhakundo
              </AnimatedLink>
            </div>
            
            {/* Navigation Links - Desktop */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <AnimatedLink 
                  key={link.name} 
                  href={link.path} 
                  isActive={isActive(link.path)}
                  className="text-jersey-700 hover:text-primary font-medium"
                >
                  {link.name}
                </AnimatedLink>
              ))}
            </nav>
            
            {/* Action Icons */}
            <div className="flex items-center space-x-5">
              <button aria-label="Search" className="text-jersey-700 hover:text-primary transition-colors duration-200 ease-out-expo hidden md:flex">
                <Search className="h-5 w-5" />
              </button>
              
              <AnimatedLink href="/account" className="text-jersey-700 hover:text-primary transition-colors duration-200 ease-out-expo hidden md:flex">
                <User className="h-5 w-5" />
              </AnimatedLink>
              
              <AnimatedLink href="/cart" className="text-jersey-700 hover:text-primary transition-colors duration-200 ease-out-expo relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </AnimatedLink>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden flex items-center text-jersey-700 hover:text-primary" 
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile menu drawer */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-25" onClick={() => setIsMobileMenuOpen(false)} />
        <nav className="relative h-full w-80 ml-auto bg-white shadow-xl flex flex-col transform transition-all">
          <div className="p-6 flex justify-between items-center border-b">
            <span className="text-xl font-semibold">Bhakundo</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-jersey-700">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="pt-6 pb-8 px-6 space-y-6 flex-grow overflow-y-auto">
            {navLinks.map((link) => (
              <AnimatedLink 
                key={link.name} 
                href={link.path} 
                className="block text-lg font-medium text-jersey-700 py-2"
                isActive={isActive(link.path)}
              >
                {link.name}
              </AnimatedLink>
            ))}
            
            <div className="pt-6 border-t">
              <AnimatedLink href="/login" className="block text-lg font-medium text-jersey-700 py-2">
                Sign In
              </AnimatedLink>
              <AnimatedLink href="/register" className="block text-lg font-medium text-jersey-700 py-2">
                Create Account
              </AnimatedLink>
            </div>
          </div>
          
          <div className="p-6 border-t">
            <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-full bg-primary text-white transition-transform transform hover:scale-[1.02] duration-300">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
