import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';

export default function NotFound() {
  return (
    <main className="pt-4 min-h-[70vh] flex items-center justify-center">
      <SEOHead
        title="Page Not Found"
        description="The page you are looking for does not exist. Return to Shree Ji Taxi Service homepage."
        path="/404"
      />
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-saffron-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-6 py-3 rounded-xl font-medium hover:from-saffron-600 hover:to-saffron-700 transition-all shadow-lg"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
