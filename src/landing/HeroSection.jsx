import { Search, MapPin, Calendar, Users } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = () => {
    console.log("Recherche:", { destination, dates, guests });
  };

  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-white mb-4 text-4xl font-bold drop-shadow-lg">
          Découvrez Votre Prochaine Aventure
        </h1>

        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
          Recherchez parmi des milliers de destinations grâce à notre IA et
          trouvez les meilleures offres pour votre prochain voyage.
        </p>

        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
              <input
                type="text"
                placeholder="Où allez-vous ?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full border rounded-lg px-10 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
              <input
                type="text"
                placeholder="Dates"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                className="w-full border rounded-lg px-10 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
              <input
                type="text"
                placeholder="Voyageurs"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border rounded-lg px-10 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            onClick={handleSearch}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 text-lg font-semibold"
          >
            <Search className="size-5" />
            Rechercher avec l'IA
          </button>
        </div>
      </div>
    </div>
  );
}
