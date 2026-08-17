import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, Users, Shield, Sparkles, Heart, Mountain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES } from '../utils/constants';
import { openWhatsAppForService } from '../utils/whatsapp';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/home/CTASection';
import SEOHead from '../components/seo/SEOHead';
import { breadcrumbSchema } from '../utils/structuredData';

export default function Services() {
  const { t, language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  const localServices = [
    {
      title: language === 'hi' ? 'एयरपोर्ट ट्रांसफर' : 'Airport Transfer',
      image: '/images/services/local-services/airport-transfer2.jpg',
      features: [
        language === 'hi' ? 'फ्लाइट ट्रैकिंग' : 'Flight Tracking',
        language === 'hi' ? 'मीट एंड ग्रीट सेवा' : 'Meet & Greet Service',
        language === 'hi' ? '24/7 उपलब्धता' : '24/7 Availability',
        language === 'hi' ? 'फिक्स्ड किराया' : 'Fixed Fare',
        language === 'hi' ? 'कोई छिपे शुल्क नहीं' : 'No Hidden Charges',
      ],
    },
    {
      title: language === 'hi' ? 'शहर की सवारी' : 'City Rides',
      image: '/images/services/local-services/delhi-local-rides.jpg',
      features: [
        language === 'hi' ? 'प्रति घंटा पैकेज' : 'Hourly Packages',
        language === 'hi' ? 'पॉइंट टू पॉइंट' : 'Point to Point',
        language === 'hi' ? 'शॉपिंग ट्रिप्स' : 'Shopping Trips',
        language === 'hi' ? 'मीटिंग्स' : 'Business Meetings',
        language === 'hi' ? 'दर्शनीय स्थल' : 'Sightseeing',
      ],
    },
    {
      title: language === 'hi' ? 'कॉर्पोरेट यात्रा' : 'Corporate Travel',
      image: '/images/services/local-services/CorporateTravel.webp',
      features: [
        language === 'hi' ? 'मासिक बिलिंग' : 'Monthly Billing',
        language === 'hi' ? 'समर्पित ड्राइवर' : 'Dedicated Drivers',
        language === 'hi' ? 'कॉर्पोरेट किराये' : 'Corporate Rates',
        language === 'hi' ? 'क्लाइंट पिकअप' : 'Client Pickup',
        language === 'hi' ? 'कर्मचारी परिवहन' : 'Employee Transport',
      ],
    },
  ];

  const outstationServices = [
    {
      title: language === 'hi' ? 'एकतरफा यात्राएं' : 'One-Way Trips',
      image: '/images/services/outstation/One-Way-Trips.webp',
      description: language === 'hi'
        ? 'लोकप्रिय गंतव्यों के लिए एकतरफा कैब सेवा - सिर्फ एक तरफ का किराया दें'
        : 'Single journey cab service to popular destinations - pay only for one way',
      features: [
        language === 'hi' ? 'कोई वापसी शुल्क नहीं' : 'No Return Charges',
        language === 'hi' ? 'किफायती किराये' : 'Affordable Fares',
        language === 'hi' ? 'लचीला समय' : 'Flexible Timing',
      ],
    },
    {
      title: language === 'hi' ? 'राउंड ट्रिप' : 'Round Trips',
      image: '/images/services/outstation/round-trips.jpg',
      description: language === 'hi'
        ? 'बहु-दिवसीय आउटस्टेशन यात्रा लचीले कार्यक्रम के साथ'
        : 'Multi-day outstation travel with flexible itinerary and driver accommodation',
      features: [
        language === 'hi' ? 'लचीला कार्यक्रम' : 'Flexible Itinerary',
        language === 'hi' ? 'ड्राइवर आवास' : 'Driver Stay',
        language === 'hi' ? '250 km/दिन शामिल' : '250 km/day Included',
      ],
    },
  ];

  return (
    <main className="pt-4">
      <SEOHead
        title="Our Services"
        description="Explore Shree Ji Taxi services - airport transfers, city rides, outstation trips, Char Dham Yatra, wedding transportation, and corporate travel in Delhi NCR. Best rates guaranteed."
        path="/services"
        keywords="airport taxi delhi, outstation cab delhi, char dham yatra taxi, wedding car delhi, corporate cab delhi ncr, pilgrimage tour taxi"
        structuredData={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
      <section className="relative py-20 bg-gradient-to-br from-saffron-500 to-saffron-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-saffron-100 leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={language === 'hi' ? 'हमारी सभी सेवाएं' : 'All Our Services'}
            subtitle={language === 'hi' ? 'आपकी हर यात्रा जरूरत के लिए' : 'For all your travel needs'}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all scroll-mt-32"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={language === 'hi' ? service.titleHindi : service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl font-semibold text-white">
                      {language === 'hi' ? service.titleHindi : service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === 'hi' ? service.descriptionHindi : service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => openWhatsAppForService(service.title)}
                    className="w-full py-3 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-xl font-medium hover:from-saffron-600 hover:to-saffron-700 transition-all flex items-center justify-center gap-2"
                  >
                    {t('common.enquireNow')}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="local" className="py-20 bg-gray-50 scroll-mt-32">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t('services.local.title')}
            subtitle={t('services.local.desc')}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {localServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-saffron-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="outstation" className="py-20 scroll-mt-32">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t('services.outstation.title')}
            subtitle={t('services.outstation.desc')}
          />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {outstationServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 bg-saffron-100 text-saffron-700 px-3 py-1 rounded-full text-sm"
                      >
                        <CheckCircle className="w-4 h-4" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'hi' ? 'आउटस्टेशन यात्रा युक्तियां' : 'Outstation Travel Tips'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-saffron-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      {language === 'hi' ? '1 दिन पहले बुक करें' : 'Book 1 day in advance for best rates'}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-saffron-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      {language === 'hi' ? 'ड्राइवर भत्ता Rs. 300-500 प्रति रात' : 'Driver allowance Rs. 300-500 per night'}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-saffron-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      {language === 'hi' ? 'टोल और पार्किंग ग्राहक द्वारा' : 'Toll and parking to be paid by customer'}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-right">
                <button
                  onClick={() => openWhatsAppForService('Outstation Trip')}
                  className="inline-flex items-center gap-2 bg-saffron-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-saffron-600 transition-all"
                >
                  {t('booking.getQuote')}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pilgrimage" className="py-20 bg-saffron-50 scroll-mt-32">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t('pilgrimage.title')}
            subtitle={language === 'hi' ? 'आध्यात्मिक यात्राओं के लिए विशेष पैकेज' : 'Special packages for spiritual journeys'}
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/images/services/pilgrimage/char-dham.webp"
                alt="Char Dham Yatra taxi package from Delhi"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('pilgrimage.charDham')}</h3>
                <p className="text-gray-600 mb-6">{t('pilgrimage.charDhamDesc')}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'].map((place) => (
                    <span
                      key={place}
                      className="bg-saffron-100 text-saffron-700 px-3 py-1 rounded-full text-sm"
                    >
                      {place}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openWhatsAppForService('Char Dham Yatra')}
                  className="w-full py-3 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-xl font-medium hover:from-saffron-600 hover:to-saffron-700 transition-all"
                >
                  {t('pilgrimage.bookNow')}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { name: language === 'hi' ? 'वैष्णो देवी यात्रा' : 'Vaishno Devi Yatra', duration: '3-4 days', image: '/images/services/pilgrimage/vaishno-devi.webp' },
                { name: language === 'hi' ? 'हरिद्वार-ऋषिकेश' : 'Haridwar-Rishikesh', duration: '2-3 days', image: '/images/services/pilgrimage/haridwar-and-rishikesh.webp' },
                { name: language === 'hi' ? 'मथुरा-वृंदावन' : 'Mathura-Vrindavan', duration: '1-2 days', image: '/images/services/pilgrimage/mathura-vrindawan.webp' },
                { name: language === 'hi' ? 'अजमेर शरीफ' : 'Ajmer Sharif', duration: '2-3 days', image: '/images/services/pilgrimage/ajmar-sharif.avif' },
              ].map((tour, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm flex items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
                  onClick={() => openWhatsAppForService(tour.name)}
                >
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-24 h-20 object-cover"
                    loading="lazy"
                  />
                  <div className="flex-1 py-4">
                    <h4 className="font-semibold text-gray-900">{tour.name}</h4>
                    <p className="text-sm text-gray-500">{tour.duration}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 mr-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="wedding" className="py-20 scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 rounded-full px-4 py-2 mb-6">
                <Heart className="w-5 h-5" />
                <span className="font-medium">{t('services.wedding.title')}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {language === 'hi' ? 'शादी के लिए विशेष परिवहन' : 'Special Transportation for Weddings'}
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('services.wedding.desc')}
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  language === 'hi' ? 'सजी हुई गाड़ियां' : 'Decorated Vehicles',
                  language === 'hi' ? 'बारात सेवा' : 'Baraat Service',
                  language === 'hi' ? 'मेहमान पिकअप' : 'Guest Pickup',
                  language === 'hi' ? 'प्रीमियम कारें' : 'Premium Cars',
                  language === 'hi' ? 'टेम्पो ट्रैवलर समूहों के लिए' : 'Tempo Traveller for Groups',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-pink-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openWhatsAppForService('Wedding Transportation')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg"
              >
                {t('common.enquireNow')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <img
                src="/images/services/wedding-tranport.jpg"
                alt="Wedding car and transportation services in Delhi NCR"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-400 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
