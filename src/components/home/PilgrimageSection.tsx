import { Mountain, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { openWhatsAppForService } from '../../utils/whatsapp';

export default function PilgrimageSection() {
  const { t, language } = useLanguage();

  const charDhamPlaces = [
    { name: 'Yamunotri', nameHindi: 'यमुनोत्री', image: '/images/services/char-dham/yamunotri.webp' },
    { name: 'Gangotri', nameHindi: 'गंगोत्री', image: '/images/services/char-dham/gangotri.jpg' },
    { name: 'Kedarnath', nameHindi: 'केदारनाथ', image: '/images/services/char-dham/kedarnath.avif' },
    { name: 'Badrinath', nameHindi: 'बद्रीनाथ', image: '/images/services/char-dham/badrinath.webp' },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/images/services/char-dham/kedarnath.avif)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-saffron-900/95 to-saffron-800/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Mountain className="w-5 h-5 text-saffron-300" />
              <span className="text-sm font-medium">{t('pilgrimage.title')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('pilgrimage.charDham')}
            </h2>

            <p className="text-xl text-saffron-100 mb-8 leading-relaxed">
              {t('pilgrimage.charDhamDesc')}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-saffron-300" />
                </div>
                <div>
                  <p className="text-saffron-200 text-sm">{language === 'hi' ? 'अवधि' : 'Duration'}</p>
                  <p className="font-semibold">10-12 {language === 'hi' ? 'दिन' : 'Days'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-saffron-300" />
                </div>
                <div>
                  <p className="text-saffron-200 text-sm">{language === 'hi' ? 'कवरेज' : 'Coverage'}</p>
                  <p className="font-semibold">~1500 km</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-saffron-300" />
                </div>
                <div>
                  <p className="text-saffron-200 text-sm">{language === 'hi' ? 'समूह' : 'Group Size'}</p>
                  <p className="font-semibold">4-12 {language === 'hi' ? 'यात्री' : 'Travelers'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-saffron-300" />
                </div>
                <div>
                  <p className="text-saffron-200 text-sm">{language === 'hi' ? 'मंदिर' : 'Temples'}</p>
                  <p className="font-semibold">4 {language === 'hi' ? 'धाम' : 'Dhams'}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => openWhatsAppForService('Char Dham Yatra')}
              className="inline-flex items-center gap-3 bg-white text-saffron-600 px-8 py-4 rounded-full font-semibold hover:bg-saffron-50 transition-all shadow-xl"
            >
              {t('pilgrimage.bookNow')}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {charDhamPlaces.map((place, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="aspect-square">
                  <img
                    src={place.image}
                    alt={`${place.name} - Char Dham Yatra destination`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white">
                    {language === 'hi' ? place.nameHindi : place.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
