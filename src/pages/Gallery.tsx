import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/home/CTASection';
import SEOHead from '../components/seo/SEOHead';
import { breadcrumbSchema } from '../utils/structuredData';

const galleryImages = {
  fleet: [
    { url: '/images/fleet/dzire.webp', caption: 'Maruti Dzire' },
    { url: '/images/fleet/ertiga.jpg', caption: 'Maruti Ertiga' },
    { url: '/images/fleet/innvoa-crysta.jpg', caption: 'Toyota Innova Crysta' },
    { url: '/images/fleet/tempo-traveller.jpg', caption: 'Tempo Traveller' },
  ],
  trips: [
    { url: '/images/destinations/jaipur.webp', caption: 'Jaipur Trip' },
    { url: '/images/destinations/udaipur.webp', caption: 'Udaipur Trip' },
    { url: '/images/destinations/manali1.webp', caption: 'Manali Trip' },
    { url: '/images/destinations/shimla1.jpg', caption: 'Shimla Trip' },
    { url: '/images/destinations/haridwar.webp', caption: 'Haridwar Trip' },
    { url: '/images/destinations/rishikesh.webp', caption: 'Rishikesh Trip' },
  ],
  destinations: [
    { url: '/images/destinations/nainital.webp', caption: 'Nainital' },
    { url: '/images/destinations/mussoorie.webp', caption: 'Mussoorie' },
    { url: '/images/destinations/dharamshala.jpg', caption: 'Dharamshala' },
    { url: '/images/destinations/kasol.jpg', caption: 'Kasol' },
    { url: '/images/destinations/agra.jpeg', caption: 'Agra' },
    { url: '/images/destinations/jodhpur.jpeg', caption: 'Jodhpur' },
  ],
};

type GalleryCategory = keyof typeof galleryImages;

export default function Gallery() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('fleet');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories: { id: GalleryCategory; label: string; labelHindi: string }[] = [
    { id: 'fleet', label: 'Our Fleet', labelHindi: 'हमारी गाड़ियां' },
    { id: 'trips', label: 'Trip Memories', labelHindi: 'यात्रा यादें' },
    { id: 'destinations', label: 'Destinations', labelHindi: 'गंतव्य' },
  ];

  const allImages = Object.values(galleryImages).flat();
  const currentImages = galleryImages[activeCategory];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <main className="pt-4">
      <SEOHead
        title="Photo Gallery"
        description="Browse photos of our taxi fleet, trip memories, and popular destinations. See our Dzire, Ertiga, Innova Crysta, and Tempo Traveller vehicles in action across India."
        path="/gallery"
        keywords="taxi service photos delhi, cab fleet images, travel photos india, shree ji taxi gallery"
        structuredData={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
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
              {language === 'hi' ? 'गैलरी' : 'Gallery'}
            </h1>
            <p className="text-xl text-saffron-100 leading-relaxed">
              {language === 'hi' ? 'हमारी गाड़ियों और यात्राओं की झलक' : 'A glimpse of our vehicles and journeys'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-saffron-500 text-white shadow-lg shadow-saffron-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {language === 'hi' ? category.labelHindi : category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={language === 'hi' ? 'यात्रा की झलकियां' : 'Travel Highlights'}
            subtitle={language === 'hi' ? 'हमारी कुछ यादगार यात्राएं' : 'Some of our memorable journeys'}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allImages.slice(0, 6).map((image, index) => (
              <div
                key={index}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                onClick={() => {
                  setCurrentImageIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-5xl max-h-[80vh] px-16">
            <img
              src={currentImages[currentImageIndex].url}
              alt={currentImages[currentImageIndex].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {currentImages[currentImageIndex].caption}
            </p>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {currentImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <CTASection />
    </main>
  );
}
