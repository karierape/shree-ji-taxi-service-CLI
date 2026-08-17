import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from '../ui/SectionTitle';
import { SERVICES } from '../../utils/constants';

export default function ServicesSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={language === 'hi' ? service.titleHindi : service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">
                    {language === 'hi' ? service.titleHindi : service.title}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {language === 'hi' ? service.descriptionHindi : service.description}
                </p>

                <div className="flex items-center text-saffron-600 text-sm font-medium">
                  {t('services.learnMore')}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-8 py-4 rounded-full font-semibold hover:from-saffron-600 hover:to-saffron-700 transition-all shadow-lg shadow-saffron-500/30"
          >
            {t('services.viewAll')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
