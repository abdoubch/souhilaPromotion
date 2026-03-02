import { Award, Users, Building2, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Building2, value: '50+', label: 'Projets Réalisés' },
    { icon: Users, value: '2000+', label: 'Clients Satisfaits' },
    { icon: Award, value: '15+', label: "Années d'Expérience" },
    { icon: TrendingUp, value: '100%', label: 'Engagement Qualité' },
  ];

  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              À Propos de
              <span className="text-accent block">Souhila Promotion</span>
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                <strong className="text-primary">Souhila Promotion Immobilière</strong> est une entreprise algérienne spécialisée dans le développement et la promotion de projets immobiliers résidentiels et commerciaux de qualité supérieure.
              </p>
              <p>
                Notre mission est de créer des espaces de vie modernes, confortables et accessibles, tout en respectant les normes de construction les plus strictes et les attentes de nos clients.
              </p>
              <p>
                Grâce à notre expertise, notre équipe dévouée et notre engagement envers l'excellence, nous sommes devenus un acteur majeur du secteur immobilier en Algérie.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <Icon className="text-accent mb-3" size={32} />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
