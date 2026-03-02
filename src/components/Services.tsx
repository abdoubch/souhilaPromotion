import { Building, ClipboardCheck, Hammer, Key, Shield, HeartHandshake } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building,
      title: 'Promotion Immobilière',
      description: 'Développement de projets résidentiels et commerciaux adaptés aux besoins du marché algérien.'
    },
    {
      icon: ClipboardCheck,
      title: 'Étude & Conception',
      description: 'Études de faisabilité et conception architecturale pour des projets innovants et durables.'
    },
    {
      icon: Hammer,
      title: 'Construction',
      description: 'Réalisation de travaux de construction selon les normes de qualité les plus exigeantes.'
    },
    {
      icon: Key,
      title: 'Vente & Location',
      description: 'Commercialisation de biens immobiliers avec accompagnement personnalisé de A à Z.'
    },
    {
      icon: Shield,
      title: 'Garantie Qualité',
      description: 'Engagement sur la qualité des matériaux et des finitions avec garantie après-vente.'
    },
    {
      icon: HeartHandshake,
      title: 'Accompagnement',
      description: 'Suivi client personnalisé et conseils pour tous vos projets immobiliers.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary to-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Une gamme complète de services pour réaliser vos projets immobiliers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
              >
                <div className="bg-accent-light bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
