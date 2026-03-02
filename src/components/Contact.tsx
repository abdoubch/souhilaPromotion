import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    setFormData({ nom: '', email: '', telephone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Nos Coordonnées</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent-light bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Adresse</h4>
                  <p className="text-gray-600">16000 Alger, 16000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent-light bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Téléphone</h4>
                  <p className="text-gray-600">0542 72 51 89</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent-light bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Horaires</h4>
                  <p className="text-gray-600">
                    Ouvert &middot; Ferme à 17:30
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Souhila Promotion - Vue d'ensemble d'un projet immobilier moderne"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Souhila Promotion</h3>
              <p className="text-sm md:text-base text-gray-100">
                Des projets immobiliers modernes et élégants au cœur d'Alger, pensés pour votre confort et votre investissement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
