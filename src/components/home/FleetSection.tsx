import { Link } from 'react-router-dom';
import { Users, Briefcase, Snowflake, Music, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from '../ui/SectionTitle';
import { FLEET } from '../../utils/constants';
import { openWhatsAppForVehicle } from '../../utils/whatsapp';

export default function FleetSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t('fleet.title')}
          subtitle={t('fleet.subtitle')}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} - taxi for hire in Delhi NCR`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {vehicle.type}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {language === 'hi' ? vehicle.nameHindi : vehicle.name}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-saffron-500" />
                    <span>{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4 text-saffron-500" />
                    <span>{vehicle.luggage}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    <Snowflake className="w-3 h-3" />
                    {t('fleet.ac')}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    <Music className="w-3 h-3" />
                    {t('fleet.music')}
                  </span>
                </div>

                <button
                  onClick={() => openWhatsAppForVehicle(vehicle.name)}
                  className="w-full py-3 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-xl font-medium hover:from-saffron-600 hover:to-saffron-700 transition-all"
                >
                  {t('fleet.bookThis')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 border-2 border-saffron-500 text-saffron-600 px-8 py-4 rounded-full font-semibold hover:bg-saffron-50 transition-all"
          >
            {t('fleet.viewAll')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
