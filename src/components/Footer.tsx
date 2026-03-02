import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <img
              src="/souhilaPromotionLogo.jfif"
              alt="Souhila Promotion"
              className="h-20 w-auto mb-4 bg-white p-2 rounded"
            />
            <p className="text-gray-300 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets immobiliers en Algérie.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-accent transition"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('apropos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-accent transition"
                >
                  À Propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-accent transition"
                >
                  Nos Projets
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-accent transition"
                >
                  Services
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Avenue de l'Indépendance, Alger</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:+213555123456" className="text-gray-300 hover:text-accent transition text-sm">
                  +213 555 123 456
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:contact@souhilapromotion.dz" className="text-gray-300 hover:text-accent transition text-sm">
                  contact@souhilapromotion.dz
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white bg-opacity-10 hover:bg-accent p-3 rounded-lg transition transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 hover:bg-accent p-3 rounded-lg transition transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 hover:bg-accent p-3 rounded-lg transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Souhila Promotion Immobilière. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
