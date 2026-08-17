import SEOHead from '../components/seo/SEOHead';
import { localBusinessSchema, faqSchema } from '../utils/structuredData';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ServicesSection from '../components/home/ServicesSection';
import FleetSection from '../components/home/FleetSection';
import RatesSection from '../components/home/RatesSection';
import DestinationsSection from '../components/home/DestinationsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PilgrimageSection from '../components/home/PilgrimageSection';
import SocialMediaSection from '../components/home/SocialMediaSection';
import FAQSection from '../components/home/FAQSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <main>
      <SEOHead
        title="Shree Ji Taxi Service | Intercity & Outstation Cab Service"
        description="Shree Ji Taxi Service - Reliable intercity and outstation cab service. Airport transfers, outstation trips, local rides, pilgrimage tours. Call 9953066750 for best rates."
        path="/"
        keywords="taxi service delhi, cab delhi ncr, airport transfer delhi, outstation taxi delhi, char dham yatra taxi, delhi taxi booking, cab booking delhi ncr"
        structuredData={[localBusinessSchema, faqSchema]}
      />
      <Hero />
      <AboutPreview />
      <ServicesSection />
      <FleetSection />
      <WhyChooseUs />
      <RatesSection />
      <DestinationsSection />
      <PilgrimageSection />
      <TestimonialsSection />
      <SocialMediaSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
