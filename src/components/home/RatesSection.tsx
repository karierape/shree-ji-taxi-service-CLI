import { Link } from 'react-router-dom';
import { ArrowRight, Check, Clock, Route, MapPin, Mountain } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from '../ui/SectionTitle';
import { LOCAL_RATES, OUTSTATION_RATES } from '../../utils/constants';

export default function RatesSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t('rates.title')}
          subtitle={t('rates.subtitle')}
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-saffron-500 to-saffron-600 px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {t('rates.local')} - Ertiga
              </h3>
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
                      <td className="py-3 font-medium">{rate.hours} {language === 'hi' ? 'घंटे' : 'hrs'}</td>
                      <td className="py-3">{rate.km} km</td>
                      <td className="py-3 text-right font-semibold text-saffron-600">Rs. {rate.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                {t('rates.note')}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Route className="w-5 h-5" />
                {t('rates.outstation')} (250 km/{language === 'hi' ? 'दिन' : 'day'})
              </h3>
            </div>
            <div className="p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-100">
                    <th className="pb-3">{language === 'hi' ? 'गाड़ी' : 'Vehicle'}</th>
                    <th className="pb-3 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <MapPin className="w-3 h-3 text-green-600" />
                        <span>{language === 'hi' ? 'मैदान' : 'Plains'}</span>
                      </div>
                    </th>
                    <th className="pb-3 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Mountain className="w-3 h-3 text-blue-600" />
                        <span>{language === 'hi' ? 'पहाड़' : 'Hills'}</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {OUTSTATION_RATES.map((rate, index) => (
                    <tr key={index} className="border-b border-gray-50">
                      <td className="py-3 font-medium">{rate.vehicle}</td>
                      <td className="py-3 text-center">
                        <span className="font-semibold text-saffron-600">Rs. {rate.plains.perDay}</span>
                        <span className="text-gray-400 text-xs block">+{rate.plains.extraKm}/km</span>
                      </td>
                      <td className="py-3 text-center">
                        <span className="font-semibold text-saffron-600">Rs. {rate.hills.perDay}</span>
                        <span className="text-gray-400 text-xs block">+{rate.hills.extraKm}/km</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                {t('rates.note')}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/rates"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-8 py-4 rounded-full font-semibold hover:from-saffron-600 hover:to-saffron-700 transition-all shadow-lg shadow-saffron-500/30"
          >
            {t('rates.viewAll')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
