import { useState } from 'react';
import { MapPin, Calendar, Clock, Car, User, Phone, Mail, MessageSquare, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FLEET } from '../utils/constants';
import { openWhatsAppWithBooking } from '../utils/whatsapp';
import SEOHead from '../components/seo/SEOHead';
import { breadcrumbSchema } from '../utils/structuredData';

export default function Booking() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tripType: 'local',
    pickup: '',
    drop: '',
    date: '',
    time: '',
    vehicle: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppWithBooking(formData);
  };

  const steps = [
    { number: 1, label: language === 'hi' ? 'यात्रा प्रकार' : 'Trip Type' },
    { number: 2, label: language === 'hi' ? 'विवरण' : 'Details' },
    { number: 3, label: language === 'hi' ? 'गाड़ी' : 'Vehicle' },
    { number: 4, label: language === 'hi' ? 'संपर्क' : 'Contact' },
  ];

  return (
    <main className="pt-4 min-h-screen bg-gray-50">
      <SEOHead
        title="Book a Taxi"
        description="Book your taxi online with Shree Ji Taxi Service. Easy booking for local rides, airport transfers, and outstation trips in Delhi NCR. Instant confirmation via WhatsApp."
        path="/booking"
        keywords="book taxi delhi, online cab booking delhi ncr, airport taxi booking, outstation cab booking delhi"
        structuredData={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Book a Taxi', path: '/booking' },
        ])}
      />
      <section className="relative py-12 bg-gradient-to-br from-saffron-500 to-saffron-600">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            {language === 'hi' ? 'टैक्सी बुक करें' : 'Book Your Taxi'}
          </h1>
          <p className="text-saffron-100 text-center">
            {language === 'hi' ? 'अपनी यात्रा का विवरण भरें' : 'Fill in your trip details'}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              {steps.map((s, index) => (
                <div key={s.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                        step >= s.number
                          ? 'bg-saffron-500 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {step > s.number ? <Check className="w-5 h-5" /> : s.number}
                    </div>
                    <span className={`text-xs mt-2 hidden sm:block ${step >= s.number ? 'text-saffron-600 font-medium' : 'text-gray-400'}`}>
                      {s.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-12 sm:w-24 h-1 mx-2 rounded ${
                        step > s.number ? 'bg-saffron-500' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                      {language === 'hi' ? 'यात्रा का प्रकार चुनें' : 'Select Trip Type'}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { value: 'local', label: t('booking.local'), desc: language === 'hi' ? 'दिल्ली NCR में' : 'Within Delhi NCR' },
                        { value: 'outstation', label: t('booking.outstation'), desc: language === 'hi' ? 'बाहर की यात्रा' : 'Outside Delhi' },
                        { value: 'airport', label: t('booking.airport'), desc: language === 'hi' ? 'IGI एयरपोर्ट' : 'IGI Airport' },
                      ].map((type) => (
                        <label
                          key={type.value}
                          className={`relative flex flex-col p-6 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.tripType === type.value
                              ? 'border-saffron-500 bg-saffron-50'
                              : 'border-gray-200 hover:border-saffron-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="tripType"
                            value={type.value}
                            checked={formData.tripType === type.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span className="text-lg font-semibold text-gray-900">{type.label}</span>
                          <span className="text-sm text-gray-500 mt-1">{type.desc}</span>
                          {formData.tripType === type.value && (
                            <div className="absolute top-3 right-3 w-6 h-6 bg-saffron-500 rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                      {language === 'hi' ? 'यात्रा विवरण' : 'Trip Details'}
                    </h2>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('booking.pickup')} *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="pickup"
                            value={formData.pickup}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                            placeholder={language === 'hi' ? 'पिकअप पता' : 'Pickup address'}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('booking.drop')} *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-saffron-500" />
                          <input
                            type="text"
                            name="drop"
                            value={formData.drop}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                            placeholder={language === 'hi' ? 'ड्रॉप पता' : 'Drop address'}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('booking.date')} *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              required
                              min={new Date().toISOString().split('T')[0]}
                              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('booking.time')} *
                          </label>
                          <div className="relative">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="time"
                              name="time"
                              value={formData.time}
                              onChange={handleChange}
                              required
                              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                      {t('booking.vehicle')}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {FLEET.map((vehicle) => (
                        <label
                          key={vehicle.id}
                          className={`relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.vehicle === vehicle.name
                              ? 'border-saffron-500 bg-saffron-50'
                              : 'border-gray-200 hover:border-saffron-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="vehicle"
                            value={vehicle.name}
                            checked={formData.vehicle === vehicle.name}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-20 h-14 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <span className="font-semibold text-gray-900">
                              {language === 'hi' ? vehicle.nameHindi : vehicle.name}
                            </span>
                            <span className="block text-sm text-gray-500">
                              {vehicle.capacity} {language === 'hi' ? 'यात्री' : 'passengers'}
                            </span>
                          </div>
                          {formData.vehicle === vehicle.name && (
                            <div className="w-6 h-6 bg-saffron-500 rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                      {language === 'hi' ? 'संपर्क जानकारी' : 'Contact Information'}
                    </h2>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('booking.name')} *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                            placeholder={language === 'hi' ? 'आपका नाम' : 'Your name'}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('booking.phone')} *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                            placeholder={language === 'hi' ? 'फोन नंबर' : 'Phone number'}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('booking.email')}
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                            placeholder={language === 'hi' ? 'ईमेल (वैकल्पिक)' : 'Email (optional)'}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('booking.message')}
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent resize-none"
                            placeholder={language === 'hi' ? 'विशेष आवश्यकताएं' : 'Special requirements'}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      {language === 'hi' ? 'पीछे' : 'Back'}
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-xl font-semibold hover:from-saffron-600 hover:to-saffron-700 transition-all shadow-lg shadow-saffron-500/30"
                    >
                      {language === 'hi' ? 'आगे' : 'Next'}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all shadow-lg shadow-green-500/30"
                    >
                      {t('booking.submit')}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </form>

            <div className="mt-8 text-center text-gray-500 text-sm">
              {language === 'hi'
                ? 'फॉर्म सबमिट करने पर आप व्हाट्सएप पर रीडायरेक्ट होंगे'
                : 'On form submission you will be redirected to WhatsApp'}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
