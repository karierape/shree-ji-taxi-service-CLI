import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY_INFO } from '../../utils/constants';
import { callPhone, openWhatsAppChat } from '../../utils/whatsapp';
import LanguageToggle from '../ui/LanguageToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    {
      path: '/services',
      label: t('nav.services'),
      hasDropdown: true,
      dropdownItems: [
        { path: '/services#airport', label: 'Airport Transfer' },
        { path: '/services#local', label: 'City Rides' },
        { path: '/services#outstation', label: 'Outstation Trips' },
        { path: '/services#pilgrimage', label: 'Pilgrimage Tours' },
      ]
    },
    { path: '/fleet', label: t('nav.fleet') },
    { path: '/rates', label: t('nav.rates') },
    { path: '/destinations', label: t('nav.destinations') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <>
      <div className="bg-saffron-600 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <button
              onClick={() => callPhone(COMPANY_INFO.phone1)}
              className="flex items-center gap-2 hover:text-saffron-100 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 {COMPANY_INFO.phone1}</span>
            </button>
            <button
              onClick={openWhatsAppChat}
              className="flex items-center gap-2 hover:text-saffron-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-saffron-100">24/7 {language === 'hi' ? 'उपलब्ध' : 'Available'}</span>
            <LanguageToggle />
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/logo.webp"
                alt={language === 'hi' ? COMPANY_INFO.nameHindi : COMPANY_INFO.name}
                className="h-9 sm:h-10 md:h-12 w-auto"
              />
              <div>
                <h1 className={`font-bold text-gray-900 ${language === 'hi' ? 'text-xs sm:text-base' : 'text-sm sm:text-lg'}`}>
                  {language === 'hi' ? COMPANY_INFO.nameHindi : COMPANY_INFO.name}
                </h1>
                <p className="text-[10px] sm:text-xs text-gray-500">
                  {language === 'hi' ? 'दिल्ली एनसीआर' : 'Delhi NCR'}
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.path} className="relative group">
                  {link.hasDropdown ? (
                    <button
                      className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                        location.pathname === link.path
                          ? 'text-saffron-600 bg-saffron-50'
                          : 'text-gray-700 hover:text-saffron-600 hover:bg-saffron-50'
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        location.pathname === link.path
                          ? 'text-saffron-600 bg-saffron-50'
                          : 'text-gray-700 hover:text-saffron-600 hover:bg-saffron-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}

                  {link.hasDropdown && (
                    <div
                      className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                        isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-saffron-50 hover:text-saffron-600"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="md:hidden">
                <LanguageToggle compact />
              </div>

              <Link
                to="/booking"
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:from-saffron-600 hover:to-saffron-700 transition-all shadow-lg shadow-saffron-500/30 hover:shadow-saffron-500/50"
              >
                {t('nav.book')}
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-saffron-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-[calc(100vh-4rem)]' : 'max-h-0'
          }`}
        >
          <nav className="container mx-auto px-4 py-4 bg-white border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-base font-medium border-b border-gray-50 ${
                  location.pathname === link.path
                    ? 'text-saffron-600'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 space-y-3">
              <button
                onClick={() => callPhone(COMPANY_INFO.phone1)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium"
              >
                <Phone className="w-5 h-5" />
                {t('header.call')}: +91 {COMPANY_INFO.phone1}
              </button>

              <button
                onClick={openWhatsAppChat}
                className="w-full flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-xl font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                {t('header.whatsapp')}
              </button>

              <Link
                to="/booking"
                className="block w-full text-center py-3 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-xl font-medium"
              >
                {t('nav.book')}
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
