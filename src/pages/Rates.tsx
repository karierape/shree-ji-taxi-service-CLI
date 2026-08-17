import { Clock, Route, Check, AlertCircle, ArrowRight, Calculator, MapPin, Mountain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LOCAL_RATES, OUTSTATION_RATES } from '../utils/constants';
import { openWhatsAppForService } from '../utils/whatsapp';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/home/CTASection';
import SEOHead from '../components/seo/SEOHead';
import { breadcrumbSchema } from '../utils/structuredData';

export default function Rates() {
  const { t, language } = useLanguage();

  return (
    <main className="pt-4">
      <SEOHead
        title="Taxi Rates & Pricing"
        description="Transparent taxi rates for Delhi NCR. Local hourly packages from Rs. 1000, outstation from Rs. 3000/day. Ertiga, Dzire, Innova Crysta, Tempo Traveller pricing. No hidden charges."
        path="/rates"
        keywords="taxi rates delhi, cab fare delhi ncr, outstation taxi price, innova crysta rent delhi, ertiga rental rates, tempo traveller price"
        structuredData={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Rates', path: '/rates' },
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
              {t('rates.title')}
            </h1>
            <p className="text-xl text-saffron-100 leading-relaxed">
              {t('rates.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t('rates.local')}
            subtitle={language === 'hi' ? 'दिल्ली एनसीआर में प्रति घंटा किराये' : 'Hourly rental rates within Delhi NCR'}
          />

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Maruti Ertiga
                </h3>
                <p className="text-gray-300 text-sm">{language === 'hi' ? '6 यात्री | एमपीवी' : '6 Passengers | MPV'}</p>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500 border-b border-gray-100">
                      <th className="pb-3">{t('rates.hours')}</th>
                      <th className="pb-3">{t('rates.km')}</th>
                      <th className="pb-3 text-right">{language === 'hi' ? 'किराया' : 'Fare'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LOCAL_RATES.ertiga.map((rate, index) => (
                      <tr key={index} className="border-b border-gray-50">
                        <td className="py-4 font-medium">{rate.hours} {language === 'hi' ? 'घंटे' : 'hrs'}</td>
                        <td className="py-4">{rate.km} km</td>
                        <td className="py-4 text-right">
                          <span className="font-bold text-saffron-600 text-lg">Rs. {rate.price}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-saffron-500 to-saffron-600 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Maruti Dzire
                </h3>
                <p className="text-saffron-100 text-sm">{language === 'hi' ? '4 यात्री | सेडान' : '4 Passengers | Sedan'}</p>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500 border-b border-gray-100">
                      <th className="pb-3">{t('rates.hours')}</th>
                      <th className="pb-3">{t('rates.km')}</th>
                      <th className="pb-3 text-right">{language === 'hi' ? 'किराया' : 'Fare'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LOCAL_RATES.dzire.map((rate, index) => (
                      <tr key={index} className="border-b border-gray-50">
                        <td className="py-4 font-medium">{rate.hours} {language === 'hi' ? 'घंटे' : 'hrs'}</td>
                        <td className="py-4">{rate.km} km</td>
                        <td className="py-4 text-right">
                          <span className="font-bold text-saffron-600 text-lg">Rs. {rate.price}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-saffron-50 rounded-2xl p-6 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-saffron-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {language === 'hi' ? 'इनोवा क्रिस्टा और टेम्पो ट्रैवलर' : 'Innova Crysta & Tempo Traveller'}
              </h4>
              <p className="text-gray-600">
                {language === 'hi'
                  ? 'लोकल किराये के लिए कृपया हमसे संपर्क करें। अनुकूलित दरें उपलब्ध हैं।'
                  : 'Please contact us for local rental rates. Customized rates available.'}
              </p>
              <button
                onClick={() => openWhatsAppForService('Local Rental Quote')}
                className="mt-4 inline-flex items-center gap-2 text-saffron-600 font-medium hover:gap-3 transition-all"
              >
                {t('rates.getQuote')}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t('rates.outstation')}
            subtitle={language === 'hi' ? '250 किमी/दिन की सीमा के साथ' : 'With 250 km/day limit'}
          />

          <div className="grid md:grid-cols-2 gap-6">
            {OUTSTATION_RATES.map((rate, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-saffron-500 to-saffron-600 px-6 py-4 text-center">
                  <h3 className="text-xl font-bold text-white">{rate.vehicle}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">
                          {language === 'hi' ? 'मैदान' : 'Plains'}
                        </span>
                      </div>
                      <div className="mb-2">
                        <span className="text-2xl font-bold text-gray-900">Rs. {rate.plains.perDay}</span>
                        <span className="text-gray-500 text-sm">/{language === 'hi' ? 'दिन' : 'day'}</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {t('rates.extraKm')}: Rs. {rate.plains.extraKm}/km
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Mountain className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">
                          {language === 'hi' ? 'पहाड़' : 'Hills'}
                        </span>
                      </div>
                      <div className="mb-2">
                        <span className="text-2xl font-bold text-gray-900">Rs. {rate.hills.perDay}</span>
                        <span className="text-gray-500 text-sm">/{language === 'hi' ? 'दिन' : 'day'}</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {t('rates.extraKm')}: Rs. {rate.hills.extraKm}/km
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>250 km/{language === 'hi' ? 'दिन शामिल' : 'day included'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{language === 'hi' ? 'अनुभवी ड्राइवर' : 'Experienced driver'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{language === 'hi' ? 'ईंधन शामिल' : 'Fuel included'}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => openWhatsAppForService(`Outstation ${rate.vehicle}`)}
                    className="w-full py-3 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-xl font-medium hover:from-saffron-600 hover:to-saffron-700 transition-all"
                  >
                    {t('booking.getQuote')}
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
            title={language === 'hi' ? 'महत्वपूर्ण जानकारी' : 'Important Information'}
            subtitle={language === 'hi' ? 'कृपया बुकिंग से पहले पढ़ें' : 'Please read before booking'}
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Route className="w-6 h-6 text-saffron-500" />
                {language === 'hi' ? 'अतिरिक्त शुल्क' : 'Additional Charges'}
              </h3>
              <ul className="space-y-4">
                {[
                  { label: language === 'hi' ? 'टोल टैक्स' : 'Toll Tax', note: language === 'hi' ? 'वास्तविक के अनुसार' : 'As per actual' },
                  { label: language === 'hi' ? 'पार्किंग शुल्क' : 'Parking Charges', note: language === 'hi' ? 'वास्तविक के अनुसार' : 'As per actual' },
                  { label: language === 'hi' ? 'राज्य प्रवेश कर' : 'State Entry Tax', note: language === 'hi' ? 'राज्य के अनुसार' : 'State dependent' },
                  { label: language === 'hi' ? 'ड्राइवर भत्ता (DA)' : 'Driver Allowance (DA)', note: 'Rs. 300-500/' + (language === 'hi' ? 'रात' : 'night') },
                  { label: language === 'hi' ? 'रात का किराया (10PM-6AM)' : 'Night Charges (10PM-6AM)', note: language === 'hi' ? 'लागू हो सकता है' : 'May apply' },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center border-b border-gray-50 pb-3">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="text-sm text-gray-500">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-saffron-500" />
                {language === 'hi' ? 'किराया गणना नियम' : 'Fare Calculation Rules'}
              </h3>
              <ul className="space-y-4">
                {[
                  language === 'hi' ? 'किराया हमारे ऑफिस से शुरू और समाप्त' : 'Fare starts and ends at our office',
                  language === 'hi' ? 'किमी और समय दोनों में से जो अधिक हो' : 'Whichever is higher - km or time',
                  language === 'hi' ? 'आउटस्टेशन में न्यूनतम 250 किमी/दिन' : 'Minimum 250 km/day for outstation',
                  language === 'hi' ? 'अतिरिक्त किमी अलग से बिल' : 'Extra km billed separately',
                  language === 'hi' ? 'अग्रिम बुकिंग पर छूट' : 'Discounts on advance booking',
                ].map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-saffron-500 to-saffron-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'hi' ? 'कस्टम कोटेशन चाहिए?' : 'Need a Custom Quote?'}
            </h3>
            <p className="text-saffron-100 mb-6 max-w-2xl mx-auto">
              {language === 'hi'
                ? 'अपनी यात्रा का विवरण साझा करें और हम आपको सर्वोत्तम दर प्रदान करेंगे।'
                : 'Share your trip details and we will provide you the best rate tailored to your needs.'}
            </p>
            <button
              onClick={() => openWhatsAppForService('Custom Quote Request')}
              className="inline-flex items-center gap-2 bg-white text-saffron-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              {t('rates.getQuote')}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
