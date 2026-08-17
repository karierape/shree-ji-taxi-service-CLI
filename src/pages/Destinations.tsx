import { useState } from 'react';
import { MapPin, Clock, ArrowRight, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DESTINATIONS } from '../utils/constants';
import { openWhatsAppForDestination } from '../utils/whatsapp';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/home/CTASection';
import SEOHead from '../components/seo/SEOHead';
import { breadcrumbSchema } from '../utils/structuredData';

type DestinationCategory = keyof typeof DESTINATIONS | 'all';

function CustomDestinationSection({ language }: { language: string }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;
    const message = `Hello! I would like to book a trip to *${city.trim()}* from Delhi. Please share the details and rates.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919953066750?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-saffron-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-saffron-400" />
                </div>
                <span className="text-saffron-400 font-medium text-sm uppercase tracking-wider">
                  {language === 'hi' ? 'कस्टम डेस्टिनेशन' : 'Custom Destination'}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {language === 'hi'
                  ? 'कहीं और जाना चाहते हैं?'
                  : 'Want to go somewhere else?'}
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {language === 'hi'
                  ? 'हम पूरे भारत में सेवाएं प्रदान करते हैं। अपना गंतव्य लिखें और हम तुरंत आपसे जुड़ेंगे।'
                  : 'We provide services all across India. Enter your destination and we\'ll connect with you right away on WhatsApp.'}
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={language === 'hi' ? 'शहर या स्थान का नाम लिखें...' : 'Enter city or location name...'}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 text-white placeholder-gray-500 border border-white/10 rounded-xl focus:outline-none focus:border-saffron-500 focus:bg-white/15 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!city.trim()}
                  className="flex items-center justify-center gap-2 bg-saffron-500 hover:bg-saffron-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-7 py-4 rounded-xl transition-all shadow-lg shadow-saffron-500/30 whitespace-nowrap"
                >
                  <Send className="w-4 h-4" />
                  {language === 'hi' ? 'WhatsApp पर पूछें' : 'Ask on WhatsApp'}
                </button>
              </form>

              <p className="text-gray-600 text-sm mt-4">
                {language === 'hi'
                  ? 'राजस्थान, हिमाचल, उत्तराखंड, पंजाब, यूपी और अन्य सभी राज्यों में उपलब्ध'
                  : 'Available across Rajasthan, Himachal, Uttarakhand, Punjab, UP & all other states'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Destinations() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<DestinationCategory>('all');

  const categories: { id: DestinationCategory; label: string; labelHindi: string }[] = [
    { id: 'all', label: 'All', labelHindi: 'सभी' },
    { id: 'rajasthan', label: 'Rajasthan', labelHindi: 'राजस्थान' },
    { id: 'himachal', label: 'Himachal Pradesh', labelHindi: 'हिमाचल प्रदेश' },
    { id: 'uttarakhand', label: 'Uttarakhand', labelHindi: 'उत्तराखंड' },
    { id: 'up', label: 'Uttar Pradesh', labelHindi: 'उत्तर प्रदेश' },
    { id: 'punjab', label: 'Punjab', labelHindi: 'पंजाब' },
  ];

  const getDestinations = () => {
    if (activeCategory === 'all') {
      return Object.values(DESTINATIONS).flat();
    }
    return DESTINATIONS[activeCategory];
  };

  return (
    <main className="pt-4">
      <SEOHead
        title="Destinations"
        description="Book taxis from Delhi to Jaipur, Agra, Shimla, Manali, Haridwar, Rishikesh, Amritsar and 30+ destinations. Outstation cabs with experienced drivers. One-way and round trips available."
        path="/destinations"
        keywords="delhi to jaipur taxi, delhi to agra cab, delhi to shimla taxi, delhi to manali cab, outstation taxi from delhi, delhi to haridwar taxi"
        structuredData={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Destinations', path: '/destinations' },
        ])}
      />
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/70" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('destinations.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('destinations.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-saffron-500 text-white shadow-lg shadow-saffron-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {language === 'hi' ? category.labelHindi : category.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getDestinations().map((dest, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all cursor-pointer"
                onClick={() => openWhatsAppForDestination(dest.name)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={`Delhi to ${dest.name} taxi service`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">
                      {language === 'hi' ? dest.nameHindi : dest.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-saffron-500" />
                      <span>{dest.distance} km</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-saffron-500" />
                      <span>{dest.duration}</span>
                    </div>
                  </div>

                  <button className="w-full py-2.5 bg-saffron-50 text-saffron-600 rounded-xl font-medium hover:bg-saffron-100 transition-all flex items-center justify-center gap-2">
                    {t('destinations.bookTrip')}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CustomDestinationSection language={language} />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={language === 'hi' ? 'लोकप्रिय यात्रा पैकेज' : 'Popular Trip Packages'}
            subtitle={language === 'hi' ? 'सबसे अधिक बुक किए जाने वाले मार्ग' : 'Most frequently booked routes'}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: language === 'hi' ? 'दिल्ली - आगरा - दिल्ली' : 'Delhi - Agra - Delhi',
                duration: language === 'hi' ? '1 दिन' : '1 Day',
                highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri'],
                price: 'Rs. 4,500',
              },
              {
                name: language === 'hi' ? 'दिल्ली - जयपुर - दिल्ली' : 'Delhi - Jaipur - Delhi',
                duration: language === 'hi' ? '2 दिन' : '2 Days',
                highlights: ['Hawa Mahal', 'Amber Fort', 'City Palace'],
                price: 'Rs. 7,000',
              },
              {
                name: language === 'hi' ? 'गोल्डन ट्राइएंगल' : 'Golden Triangle',
                duration: language === 'hi' ? '4 दिन' : '4 Days',
                highlights: ['Delhi', 'Agra', 'Jaipur'],
                price: 'Rs. 15,000',
              },
              {
                name: language === 'hi' ? 'दिल्ली - शिमला - मनाली' : 'Delhi - Shimla - Manali',
                duration: language === 'hi' ? '6 दिन' : '6 Days',
                highlights: ['Shimla', 'Kufri', 'Manali', 'Rohtang'],
                price: 'Rs. 22,000',
              },
              {
                name: language === 'hi' ? 'दिल्ली - हरिद्वार - ऋषिकेश' : 'Delhi - Haridwar - Rishikesh',
                duration: language === 'hi' ? '2 दिन' : '2 Days',
                highlights: ['Ganga Aarti', 'Lakshman Jhula', 'Temples'],
                price: 'Rs. 6,500',
              },
              {
                name: language === 'hi' ? 'दिल्ली - अमृतसर' : 'Delhi - Amritsar',
                duration: language === 'hi' ? '2 दिन' : '2 Days',
                highlights: ['Golden Temple', 'Wagah Border', 'Jallianwala Bagh'],
                price: 'Rs. 10,000',
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openWhatsAppForDestination(pkg.name)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{pkg.name}</h3>
                  <span className="bg-saffron-100 text-saffron-700 px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.duration}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">{language === 'hi' ? 'शुरू से' : 'Starting from'}</span>
                    <p className="text-xl font-bold text-saffron-600">{pkg.price}</p>
                  </div>
                  <button className="p-3 bg-saffron-50 text-saffron-600 rounded-full hover:bg-saffron-100 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={language === 'hi' ? 'यात्रा युक्तियां' : 'Travel Tips'}
            subtitle={language === 'hi' ? 'आपकी यात्रा को आसान बनाने के लिए' : 'To make your journey smoother'}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: language === 'hi' ? 'अग्रिम बुकिंग' : 'Book in Advance',
                desc: language === 'hi' ? 'बेहतर दरों के लिए 1-2 दिन पहले बुक करें' : 'Book 1-2 days ahead for better rates',
              },
              {
                title: language === 'hi' ? 'दस्तावेज़ रखें' : 'Carry Documents',
                desc: language === 'hi' ? 'आईडी प्रूफ हमेशा साथ रखें' : 'Always carry ID proof with you',
              },
              {
                title: language === 'hi' ? 'समय पर तैयार रहें' : 'Be Ready on Time',
                desc: language === 'hi' ? 'समय पर तैयार रहने से यात्रा सुचारू होती है' : 'Being ready on time ensures smooth travel',
              },
              {
                title: language === 'hi' ? 'सामान सीमित रखें' : 'Pack Light',
                desc: language === 'hi' ? 'गाड़ी की क्षमता के अनुसार पैक करें' : 'Pack according to vehicle capacity',
              },
            ].map((tip, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-saffron-600 font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
