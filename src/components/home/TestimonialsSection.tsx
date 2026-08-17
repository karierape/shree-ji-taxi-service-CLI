import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from '../ui/SectionTitle';
import { TESTIMONIALS } from '../../utils/constants';

export default function TestimonialsSection() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-saffron-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <Quote className="w-12 h-12 text-saffron-200 mb-6" />

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                "{language === 'hi' ? TESTIMONIALS[currentIndex].textHindi : TESTIMONIALS[currentIndex].text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {TESTIMONIALS[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === 'hi' ? TESTIMONIALS[currentIndex].nameHindi : TESTIMONIALS[currentIndex].name}
                    </h4>
                    <p className="text-gray-500 text-sm">{TESTIMONIALS[currentIndex].location}</p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-saffron-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-saffron-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-saffron-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
