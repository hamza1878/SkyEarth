import React from 'react';
import ParisImg from '../assets/Paris.jpg';
import TokyoImg from '../assets/tokyo.jpg';
import NewYorkImg from '../assets/newyork.jpg';
import RussiaImg from '../assets/russia.jpg';
import IbizaImg from '../assets/ibiza.jpg';
import RioImg from '../assets/rio.jpg';
import KenyaImg from '../assets/kenya.jpg';
import LondonImg from '../assets/london.jpg';

export default function FeaturedDestinations() {
  const destinations = [
    { id: '1', name: 'Paris', country: 'France', image: ParisImg, offersCount: 25 },
    { id: '2', name: 'Tokyo', country: 'Japan', image: TokyoImg, offersCount: 18 },
    { id: '3', name: 'New York', country: 'USA', image: NewYorkImg, offersCount: 30 },
    { id: '4', name: 'Russia', country: 'Russia', image: RussiaImg, offersCount: 12 },
    { id: '5', name: 'Ibiza', country: 'Spain', image: IbizaImg, offersCount: 20 },
    { id: '6', name: 'Rio de Janeiro', country: 'Brazil', image: RioImg, offersCount: 15 },
    { id: '7', name: 'Kenya', country: 'Kenya', image: KenyaImg, offersCount: 10 },
    { id: '8', name: 'London', country: 'UK', image: LondonImg, offersCount: 22 },
  ];

  return (
    <section className="py-12 px-4 bg-blue-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Destinations en Vedette</h2>
               <h2 className="text-2xl text-center mb-8"> Explorez les destinations les plus populaires du monde entier
</h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {destinations.map(dest => (
            <div key={dest.id} className="relative rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer">
              <img src={dest.image} alt={dest.name} className="w-full h-56 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/50 text-white">
                <h3 className="font-medium text-base">{dest.name}</h3>
                <p className="text-sm opacity-90">{dest.country}</p>
                <p className="text-sm opacity-80">{dest.offersCount} offres</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}