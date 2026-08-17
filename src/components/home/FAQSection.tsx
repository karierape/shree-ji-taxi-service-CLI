import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from '../ui/SectionTitle';
import Accordion from '../ui/Accordion';
import { FAQ_DATA } from '../../utils/constants';

export default function FAQSection() {
  const { t, language } = useLanguage();

  const faqItems = FAQ_DATA.map((item) => ({
    question: language === 'hi' ? item.questionHindi : item.question,
    answer: language === 'hi' ? item.answerHindi : item.answer,
  }));

  return (
    <section className="py-20 bg-gray-50">
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
  );
}
