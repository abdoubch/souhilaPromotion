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
                  <p className="text-gray-600">123 Avenue de l'Indépendance<br />Alger, Algérie</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent-light bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Téléphone</h4>
                  <p className="text-gray-600">+213 555 123 456<br />+213 555 654 321</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent-light bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email</h4>
                  <p className="text-gray-600">contact@souhilapromotion.dz<br />info@souhilapromotion.dz</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent-light bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Horaires</h4>
                  <p className="text-gray-600">
                    Samedi - Jeudi : 8h00 - 17h00<br />
                    Vendredi : Fermé
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Envoyez-nous un Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nom" className="block text-gray-700 font-medium mb-2">
                  Nom Complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20 outline-none transition"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20 outline-none transition"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="block text-gray-700 font-medium mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20 outline-none transition"
                  placeholder="+213 555 123 456"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20 outline-none transition resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white py-4 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
