import { Users, Briefcase, Snowflake, Music, Battery, Wifi, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FLEET } from '../utils/constants';
import { openWhatsAppForVehicle } from '../utils/whatsapp';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/home/CTASection';
import SEOHead from '../components/seo/SEOHead';
import { breadcrumbSchema } from '../utils/structuredData';

export default function Fleet() {
  const { t, language } = useLanguage();

  const vehicleDetails = {
    dzire: {
      type: language === 'hi' ? 'सेडान' : 'Sedan',
      ideal: language === 'hi' ? 'शहर की सवारी, छोटे परिवार, व्यापारिक यात्राएं' : 'City rides, small families, business trips',
      features: [
        language === 'hi' ? 'एयर कंडीशन' : 'Air Conditioned',
        language === 'hi' ? 'म्यूजिक सिस्टम' : 'Music System',
        language === 'hi' ? 'आरामदायक सीटें' : 'Comfortable Seats',
        language === 'hi' ? 'मोबाइल चार्जर' : 'Mobile Charger',
        language === 'hi' ? '2 सूटकेस' : '2 Suitcases',
        language === 'hi' ? 'ईंधन कुशल' : 'Fuel Efficient',
      ],
    },
    ertiga: {
      type: language === 'hi' ? 'एमपीवी' : 'MPV',
      ideal: language === 'hi' ? 'पारिवारिक यात्राएं, समूह यात्रा, आउटस्टेशन' : 'Family trips, group travel, outstation',
      features: [
        language === 'hi' ? 'एयर कंडीशन' : 'Air Conditioned',
        language === 'hi' ? 'म्यूजिक सिस्टम' : 'Music System',
        language === 'hi' ? 'विशाल इंटीरियर' : 'Spacious Interior',
        language === 'hi' ? '3 सामान' : '3 Luggage Space',
        language === 'hi' ? 'पुश बैक सीटें' : 'Push Back Seats',
        language === 'hi' ? 'मोबाइल चार्जर' : 'Mobile Charger',
      ],
    },
    innova: {
      type: language === 'hi' ? 'प्रीमियम एसयूवी' : 'Premium SUV',
      ideal: language === 'hi' ? 'लक्जरी यात्रा, लंबी दूरी, वीआईपी यात्रा' : 'Luxury travel, long distance, VIP trips',
      features: [
        language === 'hi' ? 'प्रीमियम एसी' : 'Premium AC',
        language === 'hi' ? 'प्रीमियम म्यूजिक' : 'Premium Music System',
        language === 'hi' ? 'लेदर सीटें' : 'Leather Seats',
        language === 'hi' ? '4 सामान' : '4 Luggage Space',
        language === 'hi' ? 'अतिरिक्त लेग रूम' : 'Extra Leg Room',
        language === 'hi' ? 'यूएसबी चार्जिंग' : 'USB Charging Points',
      ],
    },
    tempo: {
      type: language === 'hi' ? 'ट्रैवलर' : 'Traveller',
      ideal: language === 'hi' ? 'समूह यात्रा, तीर्थयात्रा, कॉर्पोरेट कार्यक्रम' : 'Group tours, pilgrimages, corporate events',
      features: [
        language === 'hi' ? 'एयर कंडीशन' : 'Air Conditioned',
        language === 'hi' ? 'एलईडी टीवी' : 'LED TV',
        language === 'hi' ? 'पुश बैक सीटें' : 'Push Back Seats',
        language === 'hi' ? '10+ सामान' : '10+ Luggage Space',
        language === 'hi' ? 'आईसबॉक्स' : 'Icebox',
        language === 'hi' ? 'फर्स्ट एड किट' : 'First Aid Kit',
      ],
    },
  };

  return (
    <main className="pt-4">
      <SEOHead
        title="Our Fleet"
        description="Choose from our well-maintained fleet - Maruti Dzire, Ertiga, Toyota Innova Crysta, and Tempo Traveller. AC cabs with professional drivers for every travel need in Delhi NCR."
        path="/fleet"
        keywords="innova crysta delhi, ertiga taxi, dzire cab delhi, tempo traveller delhi, taxi fleet delhi ncr"
        structuredData={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Fleet', path: '/fleet' },
        ])}
      />
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/80" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('fleet.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('fleet.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {FLEET.map((vehicle, index) => {
              const details = vehicleDetails[vehicle.id as keyof typeof vehicleDetails];
              const isReversed = index % 2 !== 0;

              return (
                <div
                  key={vehicle.id}
                  id={vehicle.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="relative">
                      <img
                        src={vehicle.image}
                        alt={`${vehicle.name} available for hire in Delhi NCR`}
                        className="rounded-2xl shadow-2xl w-full"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-saffron-500 text-white px-4 py-2 rounded-full font-medium">
                        {details.type}
                      </div>
                    </div>
                  </div>

                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {language === 'hi' ? vehicle.nameHindi : vehicle.name}
                    </h2>

                    <p className="text-gray-600 mb-6">
                      {language === 'hi'
                        ? `${details.ideal} के लिए आदर्श`
                        : `Ideal for: ${details.ideal}`}
                    </p>

                    <div className="flex items-center gap-6 mb-8">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Users className="w-5 h-5 text-saffron-500" />
                        <span className="font-medium">
                          {vehicle.capacity} {language === 'hi' ? 'यात्री' : 'Passengers'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Briefcase className="w-5 h-5 text-saffron-500" />
                        <span className="font-medium">
                          {vehicle.luggage} {language === 'hi' ? 'सामान' : 'Luggage'}
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                      <h3 className="font-semibold text-gray-900 mb-4">{t('fleet.features')}</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {details.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => openWhatsAppForVehicle(vehicle.name)}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-8 py-4 rounded-full font-semibold hover:from-saffron-600 hover:to-saffron-700 transition-all shadow-lg shadow-saffron-500/30"
                    >
                      {t('fleet.bookThis')}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={language === 'hi' ? 'गाड़ी चुनने में मदद' : 'Vehicle Selection Guide'}
            subtitle={language === 'hi' ? 'आपकी यात्रा के अनुसार सही गाड़ी' : 'Choose the right vehicle for your trip'}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                trip: language === 'hi' ? 'एयरपोर्ट ट्रांसफर' : 'Airport Transfer',
                recommended: 'Dzire / Ertiga',
                reason: language === 'hi' ? '1-4 यात्री + सामान' : '1-4 passengers with luggage',
              },
              {
                trip: language === 'hi' ? 'पारिवारिक आउटस्टेशन' : 'Family Outstation',
                recommended: 'Ertiga / Innova',
                reason: language === 'hi' ? 'आराम और स्थान' : 'Comfort and space',
              },
              {
                trip: language === 'hi' ? 'कॉर्पोरेट यात्रा' : 'Corporate Travel',
                recommended: 'Innova Crysta',
                reason: language === 'hi' ? 'प्रोफेशनल और प्रीमियम' : 'Professional and premium',
              },
              {
                trip: language === 'hi' ? 'समूह तीर्थयात्रा' : 'Group Pilgrimage',
                recommended: 'Tempo Traveller',
                reason: language === 'hi' ? '12-15 यात्रियों के लिए' : 'For 12-15 passengers',
              },
            ].map((guide, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{guide.trip}</h3>
                <p className="text-saffron-600 font-bold text-lg mb-2">{guide.recommended}</p>
                <p className="text-sm text-gray-500">{guide.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={language === 'hi' ? 'सभी गाड़ियों में' : 'Standard Amenities'}
            subtitle={language === 'hi' ? 'हर गाड़ी में ये सुविधाएं' : 'Available in all our vehicles'}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Snowflake, label: language === 'hi' ? 'एयर कंडीशन' : 'Air Conditioning' },
              { icon: Music, label: language === 'hi' ? 'म्यूजिक सिस्टम' : 'Music System' },
              { icon: Battery, label: language === 'hi' ? 'मोबाइल चार्जर' : 'Mobile Charger' },
              { icon: Briefcase, label: language === 'hi' ? 'सामान स्थान' : 'Luggage Space' },
              { icon: Users, label: language === 'hi' ? 'आरामदायक सीटें' : 'Comfortable Seats' },
              { icon: CheckCircle, label: language === 'hi' ? 'साफ और सैनिटाइज्ड' : 'Clean & Sanitized' },
            ].map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-saffron-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-saffron-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{amenity.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
