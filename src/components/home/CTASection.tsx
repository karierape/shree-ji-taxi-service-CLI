import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY_INFO } from '../../utils/constants';
import { callPhone, openWhatsAppChat } from '../../utils/whatsapp';
import { Link } from 'react-router-dom';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-saffron-500 to-saffron-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('cta.ready')}
          </h2>
          <p className="text-xl text-saffron-100 mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center gap-3 bg-white text-saffron-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-xl"
            >
              {t('cta.bookNow')}
              <ArrowRight className="w-5 h-5" />
            </Link>

            <button
              onClick={() => callPhone(COMPANY_INFO.phone1)}
              className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              {t('cta.callUs')}
            </button>

            <button
              onClick={openWhatsAppChat}
              className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-saffron-100">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+91 {COMPANY_INFO.phone1}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+91 {COMPANY_INFO.phone2}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
