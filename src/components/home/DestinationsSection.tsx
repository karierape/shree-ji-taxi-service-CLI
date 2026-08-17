import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from '../ui/SectionTitle';
import { DESTINATIONS } from '../../utils/constants';
import { openWhatsAppForDestination } from '../../utils/whatsapp';

export default function DestinationsSection() {
  const { t, language } = useLanguage();

  const popularDestinations = [
    ...DESTINATIONS.rajasthan.slice(0, 2),
    ...DESTINATIONS.himachal.slice(0, 2),
    ...DESTINATIONS.uttarakhand.slice(0, 2),
    ...DESTINATIONS.up.slice(0, 2),
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t('destinations.title')}
          subtitle={t('destinations.subtitle')}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDestinations.map((dest, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openWhatsAppForDestination(dest.name)}
            >
              <div className="aspect-[4/5]">
                <img
                  src={dest.image}
                  alt={`Delhi to ${dest.name} taxi service`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {language === 'hi' ? dest.nameHindi : dest.name}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{dest.distance} km</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{dest.duration}</span>
                  </div>
                </div>

                <button className="w-full py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/30 transition-all flex items-center justify-center gap-2">
                  {t('destinations.bookTrip')}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 border-2 border-saffron-500 text-saffron-600 px-8 py-4 rounded-full font-semibold hover:bg-saffron-50 transition-all"
          >
            {t('destinations.viewAll')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
