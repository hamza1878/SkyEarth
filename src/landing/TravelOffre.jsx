import React, { useState } from 'react';
import { Star, MapPin, Calendar, CheckCircle, ChevronLeft } from 'lucide-react';
import EscapadeRomantiqueàSantorin from '../assets/Santorin.jpg';
import Suisses from '../assets/Suisses.jpg';
import Maldives from '../assets/Maldives.jpg';

const TravelOffers = () => {
  const [activeFilter, setActiveFilter] = useState('Toutes');
  const [showBookingPage, setShowBookingPage] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [bookingData, setBookingData] = useState({
    date: '',
    adults: 2,
    children: 0,
    extras: []
  });

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

  const handleBookingClick = (offer) => {
    setSelectedOffer(offer);
    setShowBookingPage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConfirmBooking = () => {
    alert('Redirection vers la page de paiement...');
     window.location.href = '/Payement';
  };

  if (showBookingPage && selectedOffer) {
    return (
      <div className="min-h-screen bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <button
            onClick={() => setShowBookingPage(false)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition"
          >
            <ChevronLeft className="w-5 h-5" />
            Retour aux offres
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-96">
                  <img
                    src={selectedOffer.image}
                    alt={selectedOffer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                    {selectedOffer.discount}%
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                      {selectedOffer.title}
                    </h1>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-5 h-5" />
                        <span>{selectedOffer.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-5 h-5" />
                        <span>{selectedOffer.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 px-3 py-2 rounded-lg">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-gray-800">{selectedOffer.rating}</span>
                    <span className="text-gray-600 text-sm">({selectedOffer.reviews})</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Ce qui est inclus</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Vol aller-retour</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Hébergement 4 étoiles</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Petit-déjeuner inclus</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Transfert aéroport</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Guide touristique</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Assurance voyage</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Personnalisez votre voyage</h2>
                
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date de départ
                  </label>
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-gray-700">
                    Nombre de voyageurs
                  </label>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-semibold text-gray-800">Adultes</p>
                      <p className="text-sm text-gray-600">13 ans et plus</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setBookingData({...bookingData, adults: Math.max(1, bookingData.adults - 1)})}
                        className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:border-blue-500 transition flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="font-bold text-xl w-8 text-center">{bookingData.adults}</span>
                      <button
                        onClick={() => setBookingData({...bookingData, adults: bookingData.adults + 1})}
                        className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:border-blue-500 transition flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-semibold text-gray-800">Enfants</p>
                      <p className="text-sm text-gray-600">2-12 ans</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setBookingData({...bookingData, children: Math.max(0, bookingData.children - 1)})}
                        className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:border-blue-500 transition flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="font-bold text-xl w-8 text-center">{bookingData.children}</span>
                      <button
                        onClick={() => setBookingData({...bookingData, children: bookingData.children + 1})}
                        className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:border-blue-500 transition flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Options supplémentaires
                  </label>
                  <div className="space-y-3">
                    {['Assurance annulation (+50€)', 'Siège premium (+80€)', 'Excursion guidée (+120€)'].map((extra, index) => (
                      <label key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition">
                        <input
                          type="checkbox"
                          checked={bookingData.extras.includes(extra)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setBookingData({...bookingData, extras: [...bookingData.extras, extra]});
                            } else {
                              setBookingData({...bookingData, extras: bookingData.extras.filter(item => item !== extra)});
                            }
                          }}
                          className="w-5 h-5 text-blue-600"
                        />
                        <span className="text-gray-800">{extra}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Résumé</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Prix de base</span>
                    <span className="font-semibold">{selectedOffer.originalPrice}€</span>
                  </div>
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Réduction</span>
                    <span className="font-semibold">-{selectedOffer.originalPrice - selectedOffer.currentPrice}€</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Voyageurs</span>
                    <span className="font-semibold">{bookingData.adults + bookingData.children} personne(s)</span>
                  </div>
                  {bookingData.extras.length > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Options</span>
                      <span className="font-semibold">
                        +{bookingData.extras.reduce((sum, extra) => {
                          const match = extra.match(/\d+/);
                          return sum + (match ? parseInt(match[0]) : 0);
                        }, 0)}€
                      </span>
                    </div>
                  )}
                  <div className="border-t-2 border-gray-300 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-800">Total</span>
                      <span className="text-3xl font-bold text-blue-600">
                        {selectedOffer.currentPrice * (bookingData.adults + bookingData.children) + 
                         bookingData.extras.reduce((sum, extra) => {
                           const match = extra.match(/\d+/);
                           return sum + (match ? parseInt(match[0]) : 0);
                         }, 0)}€
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleConfirmBooking}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg mb-4"
                >
                  Continuer vers le paiement
                </button>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <CheckCircle className="w-5 h-5" />
                    <span>Annulation gratuite 48h</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <CheckCircle className="w-5 h-5" />
                    <span>Paiement sécurisé</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <CheckCircle className="w-5 h-5" />
                    <span>Confirmation immédiate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-100">
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

                <button 
                  onClick={() => handleBookingClick(offer)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
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