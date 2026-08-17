import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileNav from './components/layout/MobileNav';
import WhatsAppButton from './components/layout/WhatsAppButton';
import ScrollToTop from './components/ui/ScrollToTop';
import RouteTracker from './components/analytics/RouteTracker';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Fleet = lazy(() => import('./pages/Fleet'));
const Rates = lazy(() => import('./pages/Rates'));
const Destinations = lazy(() => import('./pages/Destinations'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Booking = lazy(() => import('./pages/Booking'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <RouteTracker />
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1">
            <Suspense fallback={<div className="min-h-[60vh]" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/fleet" element={<Fleet />} />
                <Route path="/rates" element={<Rates />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
          <MobileNav />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
