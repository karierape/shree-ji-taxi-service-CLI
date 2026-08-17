import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Car, IndianRupee, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function MobileNav() {
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: t('nav.home') },
    { path: '/services', icon: Briefcase, label: t('nav.services') },
    { path: '/fleet', icon: Car, label: t('nav.fleet') },
    { path: '/rates', icon: IndianRupee, label: t('nav.rates') },
    { path: '/contact', icon: Phone, label: t('nav.contact') },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-50 safe-area-bottom">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive
                  ? 'text-saffron-600'
                  : 'text-gray-500 hover:text-saffron-500'
              }`}
            >
              <div
                className={`p-1.5 rounded-xl transition-all ${
                  isActive ? 'bg-saffron-100' : ''
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
              </div>
              <span className="text-[10px] font-medium mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
