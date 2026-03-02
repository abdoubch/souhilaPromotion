import { MapPin, Home, Calendar } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Résidence Les Jasmins',
      location: 'Alger, Algérie',
      type: 'Résidentiel',
      status: 'Livré',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Un complexe résidentiel moderne de 120 logements avec espaces verts et équipements de loisirs.'
    },
    {
      title: 'Cité El Amel',
      location: 'Oran, Algérie',
      type: 'Résidentiel',
      status: 'En cours',
      image: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '200 logements haut standing avec vue panoramique et prestations premium.'
    },
    {
      title: 'Centre Commercial Souhila',
      location: 'Constantine, Algérie',
      type: 'Commercial',
      status: 'Livré',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Un centre commercial moderne avec 80 boutiques et restaurants.'
    },
    {
      title: 'Résidence Panorama',
      location: 'Annaba, Algérie',
      type: 'Résidentiel',
      status: 'À venir',
      image: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Programme de 150 appartements avec vue mer et équipements de luxe.'
    }
  ];

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nos Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos réalisations et projets en cours à travers l'Algérie
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {project.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin size={18} className="text-accent" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Home size={18} className="text-accent" />
                    <span>{project.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar size={18} className="text-accent" />
                    <span>{project.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
