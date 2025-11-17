export default function Footer() {
  return (
    <footer className="bg-[#0D1117] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">VoyageAI</h2>
            <p className="text-gray-400 leading-relaxed">
              Votre assistant de voyage intelligent pour trouver les meilleures
              destinations au meilleur prix.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Destinations</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition cursor-pointer">Europe</li>
              <li className="hover:text-white transition cursor-pointer">Asie</li>
              <li className="hover:text-white transition cursor-pointer">Amérique</li>
              <li className="hover:text-white transition cursor-pointer">Afrique</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-3">À Propos</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition cursor-pointer">Notre Histoire</li>
              <li className="hover:text-white transition cursor-pointer">Équipe</li>
              <li className="hover:text-white transition cursor-pointer">Carrières</li>
              <li className="hover:text-white transition cursor-pointer">Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition cursor-pointer">Centre d'Aide</li>
              <li className="hover:text-white transition cursor-pointer">Contact</li>
              <li className="hover:text-white transition cursor-pointer">Conditions</li>
              <li className="hover:text-white transition cursor-pointer">Confidentialité</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          © 2025 ✈️SkyEarth. Tous droits réservés.
          @-hamza_bensassi
        </div>
      </div>
    </footer>
  );
}
