import { useState } from 'react';
import { Phone, MessageCircle, ArrowRight, MapPin, Calendar, Car } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY_INFO, FLEET } from '../../utils/constants';
import { callPhone, openWhatsAppWithBooking } from '../../utils/whatsapp';

export default function Hero() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    tripType: 'local',
    pickup: '',
    drop: '',
    date: '',
    vehicle: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppWithBooking(formData);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{
          backgroundImage: 'url(/images/hero-mobile.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: 'url(/images/hero.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-saffron-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-saffron-500/20 backdrop-blur-sm border border-saffron-500/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-saffron-300">
                {language === 'hi' ? '24/7 उपलब्ध' : '24/7 Available'}
              </span>
            </div>

            <h1 className="mb-6 leading-tight">
              <span
                className="block font-bold leading-none tracking-tight"
                style={{
                  fontSize: 'clamp(2.8rem, 10vw, 4.5rem)',
                  color: '#D4A017',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  letterSpacing: '-0.01em',
                }}
              >
                Shree Ji Taxi
              </span>
              <span
                className="block font-light tracking-widest uppercase"
                style={{
                  fontSize: 'clamp(1rem, 3.5vw, 1.5rem)',
                  color: '#E8C547',
                  letterSpacing: '0.25em',
                  marginTop: '0.15em',
                }}
              >
                Service
              </span>
              <span className="block text-saffron-300 text-xl md:text-2xl font-medium mt-3">
                {t('hero.subtitle')}
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              {t('hero.tagline')}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => callPhone(COMPANY_INFO.phone1)}
                className="flex items-center gap-3 bg-white text-gray-900 px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
              >
                <Phone className="w-5 h-5 text-saffron-500" />
                {t('hero.callNow')}
              </button>

              <button
                onClick={() => openWhatsAppWithBooking({})}
                className="flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all shadow-xl shadow-green-500/30"
              >
                <MessageCircle className="w-5 h-5" />
                {t('hero.whatsappNow')}
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '14+', label: t('stats.years') },
                { value: '20K+', label: t('stats.trips') },
                { value: '10K+', label: t('stats.customers') },
                { value: '10+', label: t('stats.vehicles') },
              ].map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-saffron-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('booking.title')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-3 gap-2 p-1 bg-gray-100 rounded-xl">
                  {['local', 'outstation', 'airport'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, tripType: type })}
                      className={`py-2.5 rounded-lg text-sm font-medium transition-all ${
                        formData.tripType === type
                          ? 'bg-saffron-500 text-white shadow-lg'
                          : 'text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {type === 'local' && t('booking.local')}
                      {type === 'outstation' && t('booking.outstation')}
                      {type === 'airport' && t('booking.airport')}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t('booking.pickup')}
                    value={formData.pickup}
                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-saffron-500" />
                  <input
                    type="text"
                    placeholder={t('booking.drop')}
                    value={formData.drop}
                    onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="relative">
                    <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all appearance-none"
                    >
                      <option value="">{t('booking.vehicle')}</option>
                      {FLEET.map((vehicle) => (
                        <option key={vehicle.id} value={vehicle.name}>
                          {language === 'hi' ? vehicle.nameHindi : vehicle.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white py-4 rounded-xl font-semibold hover:from-saffron-600 hover:to-saffron-700 transition-all shadow-lg shadow-saffron-500/30"
                >
                  {t('booking.submit')}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
