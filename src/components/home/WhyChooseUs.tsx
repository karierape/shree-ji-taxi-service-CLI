import { Award, Users, IndianRupee, Clock, Car, Headphones } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from '../ui/SectionTitle';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('why.experience'),
      description: t('why.experienceDesc'),
    },
    {
      icon: Users,
      title: t('why.drivers'),
      description: t('why.driversDesc'),
    },
    {
      icon: IndianRupee,
      title: t('why.pricing'),
      description: t('why.pricingDesc'),
    },
    {
      icon: Clock,
      title: t('why.available'),
      description: t('why.availableDesc'),
    },
    {
      icon: Car,
      title: t('why.maintained'),
      description: t('why.maintainedDesc'),
    },
    {
      icon: Headphones,
      title: t('why.support'),
      description: t('why.supportDesc'),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-saffron-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title={t('why.title')}
          subtitle={t('why.subtitle')}
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-saffron-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
