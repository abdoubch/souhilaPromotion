import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-dark to-primary-light pt-32 pb-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Votre Partenaire en
            <span className="text-accent block">Promotion Immobilière</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-2">
            Your trusted real estate promotion partner in Algeria.
          </p>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Depuis notre création, nous développons des projets immobiliers d'exception en Algérie, alliant qualité, innovation et confiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-lg"
            >
              Contactez-nous
            </button>
            <button
              onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-lg"
            >
              Découvrir nos projets
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white opacity-75" />
      </div>
    </section>
  );
}
