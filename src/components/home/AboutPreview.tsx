import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, MapPin, Shield } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY_INFO } from '../../utils/constants';

export default function AboutPreview() {
  const { t, language } = useLanguage();

  const highlights = [
    {
      icon: Award,
      value: '14+',
      label: language === 'hi' ? 'वर्षों का अनुभव' : 'Years Experience',
    },
    {
      icon: Users,
      value: '25K+',
      label: language === 'hi' ? 'खुश ग्राहक' : 'Happy Customers',
    },
    {
      icon: MapPin,
      value: '100+',
      label: language === 'hi' ? 'शहर कवर' : 'Cities Covered',
    },
    {
      icon: Shield,
      value: '100%',
      label: language === 'hi' ? 'सुरक्षित यात्राएं' : 'Safe Journeys',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative mb-8 md:mb-0">
            <div className="relative z-10">
              <img
                src="/images/about/our-story1.jpg"
                alt="Shree Ji Taxi Service team and fleet in Delhi NCR"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-saffron-500 rounded-2xl -z-10 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-400 rounded-2xl -z-10 hidden md:block" />

            <div className="absolute -bottom-4 right-4 md:bottom-8 md:left-8 md:right-auto bg-white rounded-2xl shadow-xl p-4 md:p-6 z-20">
              <div className="flex items-center gap-3 md:gap-4">
                <img
                  src="/images/about/vijay-yadav2.jpeg"
                  alt="Vijay Yadav - Founder of Shree Ji Taxi Service"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {language === 'hi' ? COMPANY_INFO.ownerHindi : COMPANY_INFO.owner}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {language === 'hi' ? 'संस्थापक और मालिक' : 'Founder & Owner'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-saffron-100 text-saffron-600 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">{t('about.story')}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'hi' ? 'श्रीजी टैक्सी सेवा — इंटरसिटी और आउटस्टेशन कैब सेवा' : 'Shreeji Taxi Service — Intercity & Outstation Cab Service'}
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('about.storyText')}
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {language === 'hi'
                ? 'हम सुरक्षा, आराम और ग्राहक संतुष्टि को प्राथमिकता देते हैं। हमारी अच्छी तरह से रखरखाव की गई गाड़ियां और पेशेवर ड्राइवर सुनिश्चित करते हैं कि आपकी यात्रा सुखद और यादगार हो।'
                : 'We prioritize safety, comfort, and customer satisfaction. Our well-maintained fleet and professional drivers ensure that your journey is pleasant and memorable.'}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-saffron-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-saffron-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-saffron-600 font-semibold hover:gap-3 transition-all"
            >
              {t('common.readMore')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
