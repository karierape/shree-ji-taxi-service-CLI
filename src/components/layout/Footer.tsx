import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY_INFO } from '../../utils/constants';
import { callPhone, openWhatsAppChat } from '../../utils/whatsapp';

export default function Footer() {
  const { t, language } = useLanguage();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/fleet', label: t('nav.fleet') },
    { path: '/rates', label: t('nav.rates') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const serviceLinks = [
    { path: '/services#airport', label: language === 'hi' ? 'एयरपोर्ट ट्रांसफर' : 'Airport Transfer' },
    { path: '/services#local', label: language === 'hi' ? 'लोकल राइड्स' : 'Local Rides' },
    { path: '/services#outstation', label: language === 'hi' ? 'आउटस्टेशन' : 'Outstation' },
    { path: '/services#pilgrimage', label: language === 'hi' ? 'तीर्थ यात्रा' : 'Pilgrimage Tours' },
    { path: '/services#wedding', label: language === 'hi' ? 'शादी परिवहन' : 'Wedding Transport' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pb-20 lg:pb-0">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img
                src="/images/logo.webp"
                alt={language === 'hi' ? COMPANY_INFO.nameHindi : COMPANY_INFO.name}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/shree_ji_ki_sawari/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-rose-500 hover:to-orange-400 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Vijay-Yadav/100026899362934/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-saffron-400 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-saffron-400 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  {language === 'hi' ? COMPANY_INFO.addressHindi : COMPANY_INFO.address}
                </span>
              </li>
              <li>
                <button
                  onClick={() => callPhone(COMPANY_INFO.phone1)}
                  className="flex items-center gap-3 text-gray-400 hover:text-saffron-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-saffron-500" />
                  <span>+91 {COMPANY_INFO.phone1}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => callPhone(COMPANY_INFO.phone2)}
                  className="flex items-center gap-3 text-gray-400 hover:text-saffron-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-saffron-500" />
                  <span>+91 {COMPANY_INFO.phone2}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={openWhatsAppChat}
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <span>WhatsApp: +91 {COMPANY_INFO.whatsapp}</span>
                </button>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-saffron-500" />
                <span className="text-gray-400">{t('contact.hoursText')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              {t('footer.copyright')}
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-gray-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
