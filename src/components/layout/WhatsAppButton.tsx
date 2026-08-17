import { MessageCircle } from 'lucide-react';
import { openWhatsAppChat } from '../../utils/whatsapp';

export default function WhatsAppButton() {
  return (
    <button
      onClick={openWhatsAppChat}
      className="fixed bottom-20 lg:bottom-6 right-4 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 hover:bg-green-600 hover:scale-110 transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute right-full mr-3 bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium text-gray-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
      </span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
    </button>
  );
}
