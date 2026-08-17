import { useLanguage } from '../../context/LanguageContext';

interface LanguageToggleProps {
  compact?: boolean;
}

export default function LanguageToggle({ compact = false }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  if (compact) {
    return (
      <button
        onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
        className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
      >
        <span className={language === 'en' ? 'text-saffron-600' : 'text-gray-500'}>EN</span>
        <span className="text-gray-300">/</span>
        <span className={language === 'hi' ? 'text-saffron-600' : 'text-gray-500'}>हि</span>
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-full p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-white text-saffron-600'
            : 'text-white/80 hover:text-white'
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage('hi')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'hi'
            ? 'bg-white text-saffron-600'
            : 'text-white/80 hover:text-white'
        }`}
      >
        हिंदी
      </button>
    </div>
  );
}
