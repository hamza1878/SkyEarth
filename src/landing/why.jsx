import { Plane, Award, Shield, Headphones } from "lucide-react"; // Assure-toi d'avoir lucide-react installé

export default function WhyChooseUs() {
  return (
    <section className=" bg-blue-100 p-4 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Pourquoi Nous Choisir ?
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Profitez d’une expérience de voyage inégalée avec nos services fiables, sécurisés et personnalisés.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="text-center group p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
          <div className="mx-auto flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6 transform group-hover:scale-110 transition-transform duration-500">
            <Plane className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Meilleurs Prix</h3>
          <p className="text-gray-600 text-sm">
            Garantie du meilleur prix sur toutes nos destinations, sans compromis sur la qualité.
          </p>
        </div>

        <div className="text-center group p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
          <div className="mx-auto flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6 transform group-hover:scale-110 transition-transform duration-500">
            <Award className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Qualité Certifiée</h3>
          <p className="text-gray-600 text-sm">
            Partenaires vérifiés et services de qualité supérieure pour chaque voyage.
          </p>
        </div>

        <div className="text-center group p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
          <div className="mx-auto flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6 transform group-hover:scale-110 transition-transform duration-500">
            <Shield className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Paiement Sécurisé</h3>
          <p className="text-gray-600 text-sm">
            Transactions 100% sécurisées et protégées pour votre tranquillité d’esprit.
          </p>
        </div>

        <div className="text-center group p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
          <div className="mx-auto flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6 transform group-hover:scale-110 transition-transform duration-500">
            <Headphones className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Support 24/7</h3>
          <p className="text-gray-600 text-sm">
            Assistance disponible à tout moment pour répondre à toutes vos questions.
          </p>
        </div>
      </div>
    </section>
  );
}
