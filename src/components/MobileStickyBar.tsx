import { Phone, MessageCircle } from 'lucide-react';

const MobileStickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t border-charcoal/5 px-4 py-3 flex items-center gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">

      {/* WhatsApp Button - Water Blue Gradient */}
      <a
        href="https://wa.me/966557401773"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-water-blue to-soft-blue text-white py-3.5 px-4 rounded-full font-bold text-sm shadow-water-glow hover:shadow-lg active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span>واتساب</span>
      </a>

      {/* Call Button - Green Gradient */}
      <a
        href="tel:0557401773"
        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-deep to-botanical text-warm-white py-3.5 px-4 rounded-full font-bold text-sm shadow-premium-glow hover:shadow-lg active:scale-95 transition-all duration-300"
      >
        <Phone className="w-4 h-4 fill-warm-white" />
        <span>اتصال</span>
      </a>

    </div>
  );
};

export default MobileStickyBar;