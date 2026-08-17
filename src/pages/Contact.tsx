import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Send, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO, FAQ_DATA } from '../utils/constants';
import { callPhone, openWhatsAppWithBooking } from '../utils/whatsapp';
import SectionTitle from '../components/ui/SectionTitle';
import Accordion from '../components/ui/Accordion';
import SocialMediaSection from '../components/home/SocialMediaSection';
import SEOHead from '../components/seo/SEOHead';
import { breadcrumbSchema } from '../utils/structuredData';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppWithBooking(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const faqItems = FAQ_DATA.slice(0, 4).map((item) => ({
    question: language === 'hi' ? item.questionHindi : item.question,
    answer: language === 'hi' ? item.answerHindi : item.answer,
  }));

  return (
    <main className="pt-4">
      <SEOHead
        title="Contact Us"
        description="Contact Shree Ji Taxi Service - Call 9953066750 or WhatsApp for instant booking. Located in Mukherjee Nagar, Delhi. Available 24/7 for airport transfers, outstation trips, and local rides."
        path="/contact"
        keywords="taxi service contact delhi, cab booking phone number delhi, shree ji taxi phone, taxi near mukherjee nagar"
        structuredData={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
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
              {t('contact.title')}
            </h1>
            <p className="text-xl text-saffron-100 leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {language === 'hi' ? 'संपर्क जानकारी' : 'Contact Information'}
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-saffron-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-saffron-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('contact.address')}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {language === 'hi' ? COMPANY_INFO.addressHindi : COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-saffron-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-saffron-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('contact.phone')}</h3>
                    <button
                      onClick={() => callPhone(COMPANY_INFO.phone1)}
                      className="text-saffron-600 hover:text-saffron-700 font-medium block"
                    >
                      +91 {COMPANY_INFO.phone1}
                    </button>
                    <button
                      onClick={() => callPhone(COMPANY_INFO.phone2)}
                      className="text-saffron-600 hover:text-saffron-700 font-medium block"
                    >
                      +91 {COMPANY_INFO.phone2}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('contact.whatsapp')}</h3>
                    <p className="text-gray-600">+91 {COMPANY_INFO.whatsapp}</p>
                    <button
                      onClick={() => openWhatsAppWithBooking({})}
                      className="mt-2 inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                    >
                      {t('common.whatsappUs')}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-saffron-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-saffron-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('contact.hours')}</h3>
                    <p className="text-gray-600">{t('contact.hoursText')}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => callPhone(COMPANY_INFO.phone1)}
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-saffron-500 text-white rounded-xl font-medium hover:bg-saffron-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {t('common.callUs')}
                </button>
                <button
                  onClick={() => openWhatsAppWithBooking({})}
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </button>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('contact.form.title')}
                </h2>
                <p className="text-gray-500 mb-8">
                  {language === 'hi' ? 'फॉर्म भरें और हम व्हाट्सएप पर जवाब देंगे' : 'Fill the form and we will respond on WhatsApp'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('booking.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all"
                      placeholder={language === 'hi' ? 'आपका नाम' : 'Your name'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('booking.phone')} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all"
                      placeholder={language === 'hi' ? 'फोन नंबर' : 'Phone number'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('booking.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all resize-none"
                      placeholder={language === 'hi' ? 'आपका संदेश या पूछताछ' : 'Your message or enquiry'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-xl font-semibold hover:from-saffron-600 hover:to-saffron-700 transition-all shadow-lg shadow-saffron-500/30"
                  >
                    <Send className="w-5 h-5" />
                    {t('contact.form.submit')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={language === 'hi' ? 'हमारा स्थान' : 'Our Location'}
            subtitle={language === 'hi' ? 'मुखर्जी नगर, दिल्ली में स्थित' : 'Located in Mukherjee Nagar, Delhi'}
          />

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5835614366445!2d77.21001631508294!3d28.70788278239432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd9b8eeb2137%3A0x2e5a2a6a8e0a5a5a!2sMukherjee%20Nagar%2C%20Delhi%2C%20110009!5e0!3m2!1sen!2sin!4v1635234567890!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Ji Taxi Service Location"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <SocialMediaSection />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t('faq.title')}
            subtitle={t('faq.subtitle')}
          />

          <div className="max-w-3xl mx-auto">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
    </main>
  );
}
