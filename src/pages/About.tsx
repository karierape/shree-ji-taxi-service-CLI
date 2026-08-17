import { Award, Users, MapPin, Shield, Heart, Clock, Car, Target, Eye, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../utils/constants';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/home/CTASection';
import SEOHead from '../components/seo/SEOHead';
import { breadcrumbSchema } from '../utils/structuredData';

export default function About() {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: language === 'hi' ? 'सुरक्षा पहले' : 'Safety First',
      description: language === 'hi'
        ? 'यात्रियों की सुरक्षा हमारी सर्वोच्च प्राथमिकता है'
        : "Passenger safety is our top priority in every journey",
    },
    {
      icon: Heart,
      title: language === 'hi' ? 'ग्राहक संतुष्टि' : 'Customer Satisfaction',
      description: language === 'hi'
        ? 'हम हर यात्री के लिए सर्वोत्तम अनुभव प्रदान करते हैं'
        : 'We strive to provide the best experience for every traveler',
    },
    {
      icon: Clock,
      title: language === 'hi' ? 'समय की पाबंदी' : 'Punctuality',
      description: language === 'hi'
        ? 'समय पर सेवा - हर बार, हर जगह'
        : 'On-time service - every time, everywhere',
    },
    {
      icon: Car,
      title: language === 'hi' ? 'गुणवत्ता सेवा' : 'Quality Service',
      description: language === 'hi'
        ? 'स्वच्छ, आरामदायक और अच्छी तरह से रखरखाव वाली गाड़ियां'
        : 'Clean, comfortable, and well-maintained vehicles',
    },
  ];

  const milestones = [
    { year: '2010', title: language === 'hi' ? 'स्थापना' : 'Founded', description: language === 'hi' ? 'श्री जी टैक्सी सर्विस की शुरुआत' : 'Shree Ji Taxi Service was established' },
    { year: '2013', title: language === 'hi' ? 'फ्लीट विस्तार' : 'Fleet Expansion', description: language === 'hi' ? '10 गाड़ियों का बेड़ा' : 'Expanded to 10 vehicle fleet' },
    { year: '2016', title: language === 'hi' ? 'आउटस्टेशन सेवाएं' : 'Outstation Services', description: language === 'hi' ? 'पैन इंडिया सेवाएं शुरू' : 'Started pan-India outstation services' },
    { year: '2019', title: language === 'hi' ? 'तीर्थ यात्राएं' : 'Pilgrimage Tours', description: language === 'hi' ? 'चार धाम यात्रा पैकेज लॉन्च' : 'Launched Char Dham Yatra packages' },
    { year: '2024', title: language === 'hi' ? '25,000+ ग्राहक' : '25,000+ Customers', description: language === 'hi' ? 'खुश ग्राहकों का परिवार' : 'Family of happy customers' },
  ];

  const stats = [
    { icon: Award, value: '14+', label: language === 'hi' ? 'वर्षों का अनुभव' : 'Years Experience' },
    { icon: Users, value: '25K+', label: language === 'hi' ? 'खुश ग्राहक' : 'Happy Customers' },
    { icon: MapPin, value: '100+', label: language === 'hi' ? 'शहर कवर' : 'Cities Covered' },
    { icon: Car, value: '20+', label: language === 'hi' ? 'गाड़ियां' : 'Vehicles' },
  ];

  return (
    <main className="pt-4">
      <SEOHead
        title="About Us"
        description="Learn about Shree Ji Taxi Service - 14+ years of trusted taxi service in Delhi NCR. Founded by Vijay Yadav in 2010, serving 25,000+ happy customers with safe and reliable transportation."
        path="/about"
        keywords="about shree ji taxi, taxi service delhi history, vijay yadav taxi, trusted cab service delhi ncr"
        structuredData={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
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
              {t('about.title')}
            </h1>
            <p className="text-xl text-saffron-100 leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img
                  src="/images/about/our-story1.jpg"
                  alt="About Shree Ji Taxi Service - Our team and fleet"
                  className="rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-saffron-500 rounded-2xl -z-10" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.story')}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.storyText')}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {language === 'hi'
                  ? 'श्री विजय यादव के नेतृत्व में, हमने दिल्ली एनसीआर में हजारों यात्रियों को सुरक्षित और आरामदायक यात्रा प्रदान की है। हमारे पेशेवर ड्राइवर और अच्छी तरह से रखरखाव वाली गाड़ियां हमें क्षेत्र में सबसे भरोसेमंद टैक्सी सेवा बनाती हैं।'
                  : "Under the leadership of Mr. Vijay Yadav, we have provided safe and comfortable journeys to thousands of travelers in Delhi NCR. Our professional drivers and well-maintained fleet make us one of the most trusted taxi services in the region."}
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-saffron-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-saffron-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-saffron-100 to-saffron-50 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-saffron-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.mission')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.vision')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t('about.values')}
            subtitle={language === 'hi' ? 'जो हमें अलग बनाते हैं' : 'What makes us different'}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={language === 'hi' ? 'हमारी यात्रा' : 'Our Journey'}
            subtitle={language === 'hi' ? 'मील के पत्थर' : 'Key Milestones'}
            light
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-saffron-500/30" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-gray-800 rounded-2xl p-6">
                      <span className="text-saffron-400 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-white font-semibold text-xl mt-2">{milestone.title}</h3>
                      <p className="text-gray-400 mt-2">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-saffron-500 rounded-full border-4 border-gray-900" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t('about.owner')}
            subtitle={language === 'hi' ? 'हमारे नेता से मिलें' : 'Meet our leader'}
          />

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <img
                    src="/images/about/vijay-yadav2.jpeg"
                    alt="Vijay Yadav - Founder and Owner of Shree Ji Taxi Service"
                    className="w-24 h-24 rounded-full object-cover mb-6 shadow-lg"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {language === 'hi' ? COMPANY_INFO.ownerHindi : COMPANY_INFO.owner}
                  </h3>
                  <p className="text-saffron-600 font-medium mb-6">{t('about.ownerTitle')}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {language === 'hi'
                      ? 'श्री विजय यादव ने 2010 में एक छोटी टैक्सी सेवा के रूप में श्री जी टैक्सी सर्विस की शुरुआत की। उनकी दृढ़ता और ग्राहक-केंद्रित दृष्टिकोण ने इसे दिल्ली एनसीआर की सबसे भरोसेमंद टैक्सी सेवाओं में से एक बना दिया है।'
                      : 'Mr. Vijay Yadav started Shree Ji Taxi Service in 2010 as a small taxi operation. His determination and customer-centric approach has transformed it into one of the most trusted taxi services in Delhi NCR.'}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-saffron-100 to-secondary-100 p-8 md:p-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-saffron-600" />
                      <span className="text-gray-700">{language === 'hi' ? '14+ वर्षों का अनुभव' : '14+ Years of Experience'}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-saffron-600" />
                      <span className="text-gray-700">{language === 'hi' ? 'ग्राहक संतुष्टि पर केंद्रित' : 'Customer Satisfaction Focus'}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-saffron-600" />
                      <span className="text-gray-700">{language === 'hi' ? 'गुणवत्ता सेवा के लिए प्रतिबद्ध' : 'Committed to Quality Service'}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-saffron-600" />
                      <span className="text-gray-700">{language === 'hi' ? 'पेशेवर टीम प्रबंधन' : 'Professional Team Management'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
