import { Instagram, Facebook, ExternalLink, Heart, Camera, Users, Play } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from '../ui/SectionTitle';
import { useRef, useState } from 'react';

const INSTAGRAM_URL = 'https://www.instagram.com/shree_ji_ki_sawari/';
const FACEBOOK_URL = 'https://www.facebook.com/people/Vijay-Yadav/100026899362934/';

const instagramPosts = [
  {
    video: '/images/instagram-preview-images/shree_ji_ki_sawari__2026-03-08T171852.000Z.mp4',
    postUrl: 'https://www.instagram.com/p/DNcv8EVx3iO/',
    caption: 'Travel moments with Shree Ji',
    captionHi: 'श्री जी के साथ यात्रा के पल',
    likes: 48,
  },
  {
    video: '/images/instagram-preview-images/shree_ji_ki_sawari__2026-02-10T082735.000Z.mp4',
    postUrl: 'https://www.instagram.com/p/DMiezH7hydX/',
    caption: 'On the road adventures',
    captionHi: 'सड़क पर रोमांच',
    likes: 62,
  },
  {
    video: '/images/instagram-preview-images/shree_ji_ki_sawari__2026-02-10T082417.000Z.mp4',
    postUrl: 'https://www.instagram.com/p/DVoa3n-AaVu/',
    caption: 'Scenic routes we cover',
    captionHi: 'हमारे सुंदर मार्ग',
    likes: 85,
  },
  {
    video: '/images/instagram-preview-images/shree_ji_ki_sawari__2026-01-04T033240.000Z.mp4',
    postUrl: 'https://www.instagram.com/p/DUkg7ZAEdsK/',
    caption: 'Happy travelers, happy journeys',
    captionHi: 'खुश यात्री, खुशी की यात्रा',
    likes: 73,
  },
  {
    video: '/images/instagram-preview-images/shree_ji_ki_sawari__2025-11-07T140651.000Z.mp4',
    postUrl: 'https://www.instagram.com/p/DTNKkUAkdy1/',
    caption: 'Our fleet in action',
    captionHi: 'हमारा बेड़ा कार्रवाई में',
    likes: 112,
  },
  {
    video: '/images/instagram-preview-images/trip.mp4',
    postUrl: 'https://www.instagram.com/p/DTEuRzxkdhB/',
    caption: 'Trip highlights',
    captionHi: 'यात्रा की झलकियां',
    likes: 54,
  },
];

function InstagramVideoCard({ post, language }: { post: typeof instagramPosts[number]; language: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <a
      href={post.postUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-square overflow-hidden bg-gray-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={post.video}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
        isPlaying ? 'bg-black/0' : 'bg-black/20'
      } group-hover:bg-black/40`}>
        <div className={`transition-all duration-300 ${isPlaying ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
          <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end opacity-0 group-hover:opacity-100">
        <div className="w-full p-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-2 mb-1">
            <Heart className="w-4 h-4 fill-white" />
            <span className="font-semibold text-sm">{post.likes}</span>
          </div>
          <p className="text-xs line-clamp-2">
            {language === 'hi' ? post.captionHi : post.caption}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function SocialMediaSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t('social.title')}
          subtitle={t('social.subtitle')}
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">@shree_ji_ki_sawari</h3>
                    <p className="text-white/80 text-sm">
                      {language === 'hi' ? 'हमारी यात्रा की झलकियां' : 'Our travel highlights'}
                    </p>
                  </div>
                </div>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors"
                >
                  {language === 'hi' ? 'फॉलो करें' : 'Follow'}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 p-1">
                {instagramPosts.map((post, index) => (
                  <InstagramVideoCard key={index} post={post} language={language} />
                ))}
              </div>

              <div className="p-4 border-t border-gray-100">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                >
                  <Camera className="w-5 h-5" />
                  {language === 'hi' ? 'Instagram पर और देखें' : 'See More on Instagram'}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col">
              <div className="bg-[#1877F2] p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Vijay Yadav</h3>
                    <p className="text-white/80 text-sm">
                      {language === 'hi' ? 'श्री जी टैक्सी सर्विस' : 'Shree Ji Taxi Service'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col p-6">
                <div className="flex-1 space-y-5">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                    <div className="w-12 h-12 bg-[#1877F2]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-[#1877F2]" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">
                        {language === 'hi' ? 'हमारे समुदाय से जुड़ें' : 'Join Our Community'}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {language === 'hi'
                          ? 'अपडेट, ऑफर और यात्रा की कहानियां पाएं'
                          : 'Get updates, offers & travel stories'}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">VY</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">Vijay Yadav</p>
                          <p className="text-gray-400 text-xs">
                            {language === 'hi' ? 'श्री जी टैक्सी सर्विस' : 'Shree Ji Taxi Service'}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {language === 'hi'
                          ? 'दिल्ली से शिमला, मनाली, जयपुर और सभी प्रमुख गंतव्यों के लिए विश्वसनीय टैक्सी सेवा। अभी बुक करें!'
                          : 'Reliable taxi service from Delhi to Shimla, Manali, Jaipur & all major destinations. Book now!'}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">VY</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">Vijay Yadav</p>
                          <p className="text-gray-400 text-xs">
                            {language === 'hi' ? 'श्री जी टैक्सी सर्विस' : 'Shree Ji Taxi Service'}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {language === 'hi'
                          ? 'चार धाम यात्रा के लिए विशेष पैकेज उपलब्ध। सुरक्षित और आरामदायक यात्रा की गारंटी।'
                          : 'Special packages available for Char Dham Yatra. Safe and comfortable journey guaranteed.'}
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-[#1877F2] text-white rounded-xl font-medium hover:bg-[#1664d4] hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  <Facebook className="w-5 h-5" />
                  {language === 'hi' ? 'Facebook पर जुड़ें' : 'Connect on Facebook'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
