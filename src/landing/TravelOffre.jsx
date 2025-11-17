import React, { useState } from 'react';
import { Star, MapPin, Calendar } from 'lucide-react';
import EscapadeRomantiqueàSantorin from '../assets/Santorin.jpg';
import Suisses from '../assets/Suisses.jpg';
import Maldives from '../assets/Maldives.jpg';
const TravelOffers = () => {
  const [activeFilter, setActiveFilter] = useState('Toutes');

  const offers = [
    {
      id: 1,
      title: 'Escapade Romantique à Santorin',
      location: 'Santorin, Grèce',
      duration: '5 jours / 4 nuits',
      rating: 4.9,
      originalPrice: 1299,
      currentPrice: 899,
      discount: -31,
      reviews: 342,
      image: EscapadeRomantiqueàSantorin,
      category: 'Plage',
      badge: 'Vedette'
    },
    {
      id: 2,
      title: 'Aventure dans les Alpes Suisses',
      location: 'Interlaken, Suisse',
      duration: '7 jours / 6 nuits',
      rating: 4.8,
      originalPrice: 1599,
      currentPrice: 1299,
      discount: -19,
      reviews: 256,
      image: Suisses,
      category: 'Montagne',
      badge: 'Vedette'
    },
    {
      id: 3,
      title: 'Paradis Tropical aux Maldives',
      location: 'Malé, Maldives',
      duration: '6 jours / 5 nuits',
      rating: 5,
      originalPrice: 2799,
      currentPrice: 2199,
      discount: -21,
      reviews: 489,
      image: Maldives,
      category: 'Plage',
      badge: 'Vedette'
    }
  ];

  const filters = [
    { name: 'Toutes', icon: '🌍' },
    { name: 'Plage', icon: '🏖️' },
    { name: 'Montagne', icon: '🏔️' },
    { name: 'Ville', icon: '🌆' }
  ];

  const filteredOffers = activeFilter === 'Toutes' 
    ? offers 
    : offers.filter(offer => offer.category === activeFilter);

  return (
    <div className="min-h-screen bg-blue-100 from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Offres de Voyage Exceptionnelles
          </h1>
          <p className="text-lg text-gray-600">
            Profitez de nos meilleures offres sélectionnées pour vous
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.name
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              <span>{filter.icon}</span>
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    ⭐ {offer.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {offer.discount}%
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 flex-1">
                    {offer.title}
                  </h3>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg ml-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-gray-800">{offer.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{offer.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{offer.duration}</span>
                  </div>
                </div>

                <div className="flex items-end justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through text-sm">
                        {offer.originalPrice}€
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-gray-600">À partir de</span>
                      <span className="text-3xl font-bold text-blue-600">
                        {offer.currentPrice}€
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{offer.reviews} avis</span>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Réserver Maintenant
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredOffers.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">
              Aucune offre disponible pour cette catégorie
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelOffers;