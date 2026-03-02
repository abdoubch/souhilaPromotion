import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end gap-6 text-sm">
          <a href="tel:0542725189" className="flex items-center gap-2 hover:text-accent transition">
            <Phone size={16} />
            <span className="hidden sm:inline">0542 72 51 89</span>
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img src="/souhilaPromotionLogo.jfif" alt="Souhila Promotion" className="h-16 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-accent transition font-medium">
              Accueil
            </button>
            <button onClick={() => scrollToSection('apropos')} className="text-gray-700 hover:text-accent transition font-medium">
              À Propos
            </button>
            <button onClick={() => scrollToSection('projets')} className="text-gray-700 hover:text-accent transition font-medium">
              Nos Projets
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-accent transition font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent-dark transition font-medium">
              Contact
            </button>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <button onClick={() => scrollToSection('accueil')} className="block w-full text-left py-2 text-gray-700 hover:text-accent transition">
              Accueil
            </button>
            <button onClick={() => scrollToSection('apropos')} className="block w-full text-left py-2 text-gray-700 hover:text-accent transition">
              À Propos
            </button>
            <button onClick={() => scrollToSection('projets')} className="block w-full text-left py-2 text-gray-700 hover:text-accent transition">
              Nos Projets
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-accent transition">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-accent hover:text-accent-dark transition font-medium">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
